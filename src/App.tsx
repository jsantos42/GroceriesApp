import {FlatList, SafeAreaView} from 'react-native';
import {useState} from 'react';
import {GroceryItemState} from './types';
import {tempGroceryList} from './initialData';
import {GroceryItemCheckbox} from './components/GroceryItemCheckbox';

function App(): React.JSX.Element {
	const [groceryList, setGroceryList] = useState<GroceryItemState[]>(
		tempGroceryList.map(i => ({...i, checked: false}))
	);

	return (
		<SafeAreaView>
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
