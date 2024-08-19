import {FlatList, SafeAreaView} from 'react-native';
import {useState} from 'react';
import {GroceryItem} from './types';
import {GroceryItemCheckbox} from './components/GroceryItemCheckbox';
import {NewItem} from './components/NewItem';
import {AppProvider} from './components/AppProvider';
import TrieSearch from 'trie-search';
import {Header} from './components/Header';

const trie = new TrieSearch<GroceryItem>('label', {min: 3, ignoreCase: true});

function App(): React.JSX.Element {
	const [groceryList, setGroceryList] = useState<GroceryItem[]>([]);

	function getNewEntryFromInput(input: string): GroceryItem {
		const name = normalizeKeyName(input);
		const label = capitalizeFirstLetter(input);
		return {name: name, label: label};
	}

	function normalizeKeyName(str: string) {
		return str.toLowerCase().replaceAll(' ', '_');
	}

	function capitalizeFirstLetter(str: string) {
		return str.charAt(0).toUpperCase() + str.slice(1);
	}

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

	function markAsChecked(item: GroceryItem) {
		// TODO: remove from list
		console.warn(item.label);
	}
	// TODO: consider:
	// 1. moving the function that dismisses the suggestions overlay
	// to this level, in order to pass it to the grocery item checkbox
	// 2. wrapping a pressable around this flatlist and pass that function too
	//

	return (
		<AppProvider>
			<SafeAreaView className="flex-1">
				<Header />
				<NewItem {...{searchItem, saveNewItem, deleteItem}} />
				<FlatList
					className={'flex'}
					data={groceryList}
					renderItem={({item}) => (
						<GroceryItemCheckbox {...{item, markAsChecked}} />
					)}
					keyExtractor={i => i.name}
				/>
			</SafeAreaView>
		</AppProvider>
	);
}

export default App;
