import {StyleSheet} from 'react-native';
import {useAppContext} from '../components/AppProvider';

export const useStyles = () => {
	const {theme} = useAppContext();

	return StyleSheet.create({
		backgroundColor: {
			backgroundColor: getBackgroundColor(theme),
		},
		textColor: {
			color: getContrastColor(theme),
		},
		checkBoxContainer: {
			backgroundColor: 'transparent',
		},
		checkBoxText: {
			fontSize: 18,
		},
		inputField: {
			elevation: 3,
			borderBottomWidth: 1,
			borderBottomColor: getContrastColor(theme),
		},
		elevation1: {
			elevation: 1,
		},
		elevation2: {
			elevation: 2,
		},
	});
};

type Theme = 'dark' | 'light' | undefined | null;

export function getBackgroundColor(theme: Theme) {
	return theme === 'dark' ? 'bg-black' : 'bg-white';
}

export function getContrastColor(theme: Theme) {
	return theme === 'dark' ? 'white' : 'black';
}
