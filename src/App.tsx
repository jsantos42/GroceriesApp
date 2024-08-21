import {SafeAreaView} from 'react-native';
import {useState} from 'react';
import {GroceryItem} from './types';
import {NewItem} from './components/NewItem';
import {AppProvider} from './components/AppProvider';
import TrieSearch from 'trie-search';
import {Header} from './components/Header';
import {GroceryList} from './components/GroceryList';
import {getNewEntryFromInput} from './utils';

const trie = new TrieSearch<GroceryItem>('label', {
	min: 3,
	ignoreCase: true,
});

function App(): React.JSX.Element {
	const [groceryList, setGroceryList] = useState<GroceryItem[]>([]);

	function searchItem(input: string) {
		return trie.search(input);
	}

	function isANewItem(record: GroceryItem) {
		const results = searchItem(record.label);

		return !results.some(({label}) => label === record.label);
	}

	function isOnCurrentList(record: GroceryItem) {
		return groceryList.some(({label}) => label === record.label);
	}

	function saveItem(input: string) {
		const newRecord = getNewEntryFromInput(input);

		if (isANewItem(newRecord)) {
			trie.add(newRecord);
		}
		if (!isOnCurrentList(newRecord)) {
			setGroceryList([...groceryList, newRecord]);
		}
	}

	function deleteItem(label: string) {
		console.warn(label);
		// TODO: implement this in the trie package
		// trie.remove()
	}

	return (
		<AppProvider>
			<SafeAreaView className="flex-1">
				<Header />
				<NewItem {...{searchItem, saveItem, deleteItem}} />
				<GroceryList {...{groceryList, setGroceryList}} />
			</SafeAreaView>
		</AppProvider>
	);
}

export default App;
