import {Text} from 'react-native';
import {useStyles} from '@utils/styles';

export const Header = () => {
	const styles = useStyles();
	return (
		<Text
			className="pt-5 pb-3 text-3xl text-center font-extrabold"
			style={styles.textColor}>
			Groceries
		</Text>
	);
};
