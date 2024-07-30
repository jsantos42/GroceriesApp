import {CheckBox} from '@rneui/base';
import {GroceryItemState} from 'src/types';

export const GroceryItemCheckbox = ({item}: {item: GroceryItemState}) => {
	return (
		<CheckBox
			className={'text-black bg-red-600'}
			checked={true}
			title={item.label}
		/>
	);
};
