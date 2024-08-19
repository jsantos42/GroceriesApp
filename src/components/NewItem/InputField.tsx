import {Icon} from '@rneui/base';
import {Platform, TextInput, View} from 'react-native';
import {getContrastColor, useStyles} from '@utils/styles';
import {useAppContext} from '../AppProvider';

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
	const {theme} = useAppContext();
	const textSize = Platform.OS === 'ios' ? 'text-xl' : 'text-lg';

	return (
		<View className="pl-4 flex flex-row items-center">
			<Icon
				name="add"
				type="material"
				color={getContrastColor(theme)}
				size={27}
			/>
			<TextInput
				className={`p-4 pl-2.5 w-full text-lg ${textSize} tracking-widest shadow-none`}
				style={styles.textColor}
				placeholder="Insert item here"
				value={input}
				onChangeText={handleTextInput}
				onSubmitEditing={e => handleTextSubmit(e.nativeEvent.text)}
			/>
		</View>
	);
};
