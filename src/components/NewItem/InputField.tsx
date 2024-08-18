import {CheckBox} from '@rneui/base';
import {TextInput, View} from 'react-native';
import {useStyles} from '@utils/styles';

export const InputField = ({
	input,
	handleTextInput,
	handleTextSubmit,
}: {
	input: string;
	handleTextInput: (input: string) => void;
	handleTextSubmit: (input: string) => void;
}) => {
	const styles = useStyles();
	return (
		<View className="flex flex-row items-end">
			<CheckBox checked={false} containerStyle={styles.newItemCheckBox} />
			<TextInput
				className="p-4 w-full text-lg tracking-widest shadow-none"
				style={styles.textColor}
				placeholder="Insert item here"
				value={input}
				onChangeText={handleTextInput}
				onSubmitEditing={e => handleTextSubmit(e.nativeEvent.text)}
			/>
		</View>
	);
};
