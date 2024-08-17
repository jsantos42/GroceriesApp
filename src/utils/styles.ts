import {StyleSheet} from 'react-native';
import {useAppContext} from '../components/AppProvider';

export const useStyles = () => {
	const {theme} = useAppContext();

	function getTextColorStylesheet() {
		return theme === 'dark' ? 'white' : 'black';
	}

	return StyleSheet.create({
		checkBoxContainer: {
			backgroundColor: 'transparent',
		},
		checkBoxText: {
			fontSize: 18,
			color: `${getTextColorStylesheet()}`,
		},
		overlay: {
			width: '100%',
			position: 'absolute',
			top: 50,
			backgroundColor: getBackgroundColor(theme),
		},
	});
};

type Theme = 'dark' | 'light' | undefined | null;

export function getBackgroundColor(theme: Theme) {
	return theme === 'dark' ? 'black' : 'white';
}

export function getTextColor(theme: Theme) {
	return theme === 'dark' ? 'text-white' : 'text-black';
}
