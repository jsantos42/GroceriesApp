import {FlatList} from 'react-native';
import {GroceryItem} from 'src/types';
import {GroceryItemCheckbox} from './GroceryItemCheckbox';

export const GroceryList = ({
	groceryList,
	markAsChecked,
}: {
	groceryList: GroceryItem[];
	markAsChecked: (item: GroceryItem) => void;
}) => {
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
