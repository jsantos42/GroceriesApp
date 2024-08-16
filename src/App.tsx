import {FlatList, SafeAreaView} from 'react-native';
import {useState} from 'react';
import {GroceryItem} from './types';
import {tempGroceryList} from './initialData';
import {GroceryItemCheckbox} from './components/GroceryItemCheckbox';
import {InputField} from './components/InputField';

function App(): React.JSX.Element {
	const [groceryList, setGroceryList] =
		useState<GroceryItem[]>(tempGroceryList);

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

	function saveNewItem(input: string) {
		//check if item does not exist already
		const newRecord = getNewEntryFromInput(input);
		setGroceryList([...groceryList, newRecord]);
	}

	return (
		<SafeAreaView>
			<InputField {...{saveNewItem}} />
			<FlatList
				className={'flex'}
				data={groceryList}
				renderItem={({item}) => <GroceryItemCheckbox {...{item}} />}
				keyExtractor={i => i.name}
			/>
		</SafeAreaView>
	);
}

export default App;
