import {CheckBox} from '@rneui/base';
import {GroceryItem} from 'src/types';
import {useStyles} from '@utils/styles';

export const GroceryItemCheckbox = ({
	item,
	markAsChecked,
}: {
	item: GroceryItem;
	markAsChecked: (item: GroceryItem) => void;
}) => {
	const styles = useStyles();

	return (
		<CheckBox
			className={'text-black text-base'}
			checked={false}
			title={item.label}
			containerStyle={styles.checkBoxContainer}
			textStyle={styles.checkBoxText}
			onIconPress={() => markAsChecked(item)}
		/>
	);
};
