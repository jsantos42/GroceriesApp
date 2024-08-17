import {CheckBox} from '@rneui/base';
import {GroceryItemState} from 'src/types';
import {useStyles} from '@utils/styles';

export const GroceryItemCheckbox = ({item}: {item: GroceryItemState}) => {
	const styles = useStyles();

	return (
		<CheckBox
			className={'text-black bg-red-600'}
			checked={true}
			title={item.label}
			containerStyle={styles.checkBoxContainer}
			textStyle={styles.checkBoxText}
		/>
	);
};
