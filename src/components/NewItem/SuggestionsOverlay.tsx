import {Pressable, View} from 'react-native';
import {Suggestion} from './Suggestion';
import {getBackgroundColor, useStyles} from '@utils/styles';
import {useAppContext} from '../AppProvider';
import {GroceryItem} from 'src/types';

export const SuggestionsOverlay = ({
	suggestions,
	onSelectSuggestion,
	hideSuggestionOverlay,
	onDeleteSuggestion,
}: {
	suggestions: GroceryItem[];
	onSelectSuggestion: (text: string) => void;
	onDeleteSuggestion: (text: string) => void;
	hideSuggestionOverlay: () => void;
}) => {
	const {theme} = useAppContext();
	const styles = useStyles();

	return (
		<>
			<View
				className={`z-20 w-full ${getBackgroundColor(theme)}`}
				style={styles.elevation2}>
				{suggestions.map(({name, label}) => (
					<Suggestion
						key={name}
						suggestion={label}
						{...{onSelectSuggestion, onDeleteSuggestion}}
					/>
				))}
			</View>
			<Pressable
				className={`z-10 w-full h-full ${getBackgroundColor(theme)} opacity-50`}
				style={styles.elevation1}
				onPress={hideSuggestionOverlay}
			/>
		</>
	);
};
