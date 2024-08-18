import {StyleSheet} from 'react-native';
import {useAppContext} from '../components/AppProvider';

export const useStyles = () => {
	const {theme} = useAppContext();

	return StyleSheet.create({
		checkBoxContainer: {
			backgroundColor: 'transparent',
		},
		checkBoxText: {
			fontSize: 18,
			color: `${getContrastColor(theme)}`,
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
	return theme === 'dark' ? 'bg-black' : 'bg-white';
}

export function getContrastColor(theme: Theme) {
	return theme === 'dark' ? 'white' : 'black';
}
