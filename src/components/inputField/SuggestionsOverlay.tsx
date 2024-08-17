import {Overlay} from '@rneui/base';
import {StyleSheet} from 'react-native';
import {Suggestion} from './Suggestion';
import {areThereSuggestions} from './utils';
import {useAppContext} from '../AppProvider';
import {getBackgroundColor} from '@utils/theme';

export const SuggestionsOverlay = ({
	suggestions,
	onSelectSuggestion,
	hideSuggestionOverlay,
}: {
	suggestions: string[];
	onSelectSuggestion: (text: string) => void;
	hideSuggestionOverlay: () => void;
}) => {
	const {theme} = useAppContext();
	const styles = StyleSheet.create({
		overlay: {
			width: '100%',
			position: 'absolute',
			top: 50,
			backgroundColor: getBackgroundColor(theme),
		},
	});

	return (
		<Overlay
			isVisible={areThereSuggestions(suggestions)}
			overlayStyle={styles.overlay}
			onBackdropPress={hideSuggestionOverlay}>
			{suggestions.map(suggestion => (
				<Suggestion
					key={suggestion}
					{...{suggestion, onSelectSuggestion}}
				/>
			))}
		</Overlay>
	);
};
