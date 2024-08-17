import {Overlay} from '@rneui/base';
import {Suggestion} from './Suggestion';
import {areThereSuggestions} from './utils';
import {useStyles} from '@utils/styles';

export const SuggestionsOverlay = ({
	suggestions,
	onSelectSuggestion,
	hideSuggestionOverlay,
}: {
	suggestions: string[];
	onSelectSuggestion: (text: string) => void;
	hideSuggestionOverlay: () => void;
}) => {
	const styles = useStyles();

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
