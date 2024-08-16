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
		className="p-3 justify-center"
		onPress={() => onSelectSuggestion(suggestion)}>
		<Text className="text-base tracking-wider">{suggestion}</Text>
	</Pressable>
);
