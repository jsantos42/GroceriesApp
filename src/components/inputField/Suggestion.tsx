import {Pressable, Text} from 'react-native';
import {useAppContext} from '../AppProvider';
import {getContrastColor} from '@utils/styles';

export const Suggestion = ({
	suggestion,
	onSelectSuggestion,
}: {
	suggestion: string;
	onSelectSuggestion: (text: string) => void;
}) => {
	const {theme} = useAppContext();
	const textColor = `text-${getContrastColor(theme)}`;

	return (
		<Pressable
			key={suggestion}
			className="p-3 justify-center"
			onPress={() => onSelectSuggestion(suggestion)}>
			<Text className={`text-base tracking-wider ${textColor}`}>
				{suggestion}
			</Text>
		</Pressable>
	);
};
