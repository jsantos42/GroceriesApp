import {FlatList} from 'react-native';
import {GroceryItem} from 'src/types';
import {GroceryItemCheckbox} from './GroceryItemCheckbox';

export const GroceryList = ({
	groceryList,
	setGroceryList,
}: {
	groceryList: GroceryItem[];
	setGroceryList: (list: GroceryItem[]) => void;
}) => {
	function markAsChecked(item: GroceryItem) {
		const updatedList = groceryList.filter(
			({label}) => label !== item.label
		);

		setGroceryList(updatedList);
	}

	return (
		<FlatList
			className={'flex'}
			data={groceryList}
			renderItem={({item}) => (
				<GroceryItemCheckbox {...{item, markAsChecked}} />
			)}
			keyExtractor={i => i.name}
		/>
	);
};
