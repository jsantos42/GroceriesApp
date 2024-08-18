import {Platform, Pressable, View} from 'react-native';
import {Suggestion} from './Suggestion';
import {getBackgroundColor, useStyles} from '@utils/styles';
import {useAppContext} from '../AppProvider';
import {GroceryItem} from 'src/types';

export const SuggestionsOverlay = ({
	suggestions,
	onSelectSuggestion,
	hideSuggestionOverlay,
}: {
	suggestions: GroceryItem[];
	onSelectSuggestion: (text: string) => void;
	hideSuggestionOverlay: () => void;
}) => {
	const {theme} = useAppContext();
	const styles = useStyles();
	const suggestionsTopProp = Platform.OS === 'ios' ? 'top-20' : 'top-14';
	const backdropTopProp = Platform.OS === 'ios' ? 'top-5' : 'top-0';

	return (
		<>
			<View
				className={`absolute ${suggestionsTopProp} z-20 w-full ${getBackgroundColor(theme)}`}
				style={styles.elevation2}>
				{suggestions.map(({name, label}) => (
					<Suggestion
						key={name}
						suggestion={label}
						{...{onSelectSuggestion}}
					/>
				))}
			</View>
			<Pressable
				className={`absolute ${backdropTopProp} z-10 w-full h-full ${getBackgroundColor(theme)} opacity-50`}
				style={styles.elevation1}
				onPress={hideSuggestionOverlay}
			/>
		</>
	);
};
