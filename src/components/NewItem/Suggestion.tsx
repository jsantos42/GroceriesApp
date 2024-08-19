import {Pressable, Text} from 'react-native';
import {useStyles} from '@utils/styles';
import {Button} from '@rneui/base';

export const Suggestion = ({
	suggestion,
	onSelectSuggestion,
	onDeleteSuggestion,
}: {
	suggestion: string;
	onSelectSuggestion: (text: string) => void;
	onDeleteSuggestion: (text: string) => void;
}) => {
	const styles = useStyles();

	return (
		<Pressable
			key={suggestion}
			className="p-3 pl-14 flex flex-row justify-between items-center"
			onPress={() => onSelectSuggestion(suggestion)}>
			<Text className="text-lg tracking-wider" style={styles.textColor}>
				{suggestion}
			</Text>
			{/* TODO: uncomment as soon as trie has remove() functionality  */}
			{/* <Button */}
			{/* 	className="w-6 bg-red-500 text-red-300 justify-start items-start" */}
			{/* 	title="Delete" */}
			{/* 	color="#aa2e25" */}
			{/* 	raised={true} */}
			{/* 	onPress={() => onDeleteSuggestion(suggestion)} */}
			{/* /> */}
		</Pressable>
	);
};
