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

	function saveNewItem(input: string) {
		// TODO: check if item does not exist already
		const newRecord = getNewEntryFromInput(input);
		trie.add(newRecord);
		setGroceryList([...groceryList, newRecord]);
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
				<NewItem {...{searchItem, saveNewItem, deleteItem}} />
				<GroceryList {...{groceryList, setGroceryList}} />
			</SafeAreaView>
		</AppProvider>
	);
}

export default App;
