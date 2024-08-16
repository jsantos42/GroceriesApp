import {Pressable, Text} from 'react-native';

export const Suggestion = ({
	suggestion,
	onSelectSuggestion,
}: {
	suggestion: string;
	onSelectSuggestion: (text: string) => void;
}) => (
	<Pressable
		key={suggestion}
		className="justify-center p-3"
		onPress={() => onSelectSuggestion(suggestion)}>
		<Text>{suggestion}</Text>
	</Pressable>
);
