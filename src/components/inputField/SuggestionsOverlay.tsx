import {Overlay} from '@rneui/base';
import {StyleSheet} from 'react-native';
import {Suggestion} from './Suggestion';
import {areThereSuggestions} from './utils';

export const SuggestionsOverlay = ({
	suggestions,
	onSelectSuggestion,
}: {
	suggestions: string[];
	onSelectSuggestion: (text: string) => void;
}) => (
	<Overlay
		isVisible={areThereSuggestions(suggestions)}
		overlayStyle={styles.overlay}>
		{suggestions.map(suggestion => (
			<Suggestion
				key={suggestion}
				{...{suggestion, onSelectSuggestion}}
			/>
		))}
	</Overlay>
);

const styles = StyleSheet.create({
	overlay: {
		width: '100%',
		position: 'absolute',
		top: 50,
	},
});
