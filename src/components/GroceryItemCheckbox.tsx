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
			checked={false}
			title={item.label}
			containerStyle={styles.checkBoxContainer}
			textStyle={{...styles.checkBoxText, ...styles.textColor}}
			onIconPress={() => markAsChecked(item)}
		/>
	);
};
