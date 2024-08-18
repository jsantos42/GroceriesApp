import {Pressable, Text} from 'react-native';
import {useStyles} from '@utils/styles';

export const Suggestion = ({
	suggestion,
	onSelectSuggestion,
}: {
	suggestion: string;
	onSelectSuggestion: (text: string) => void;
}) => {
	const styles = useStyles();

	return (
		<Pressable
			key={suggestion}
			className="p-3 justify-center"
			onPress={() => onSelectSuggestion(suggestion)}>
			<Text className="text-lg tracking-wider" style={styles.textColor}>
				{suggestion}
			</Text>
		</Pressable>
	);
};
