import {useState} from 'react';
import {TextInput} from 'react-native';

export const InputField = ({
	saveNewItem,
}: {
	saveNewItem: (itemName: string) => void;
}) => {
	const [input, setInput] = useState<string>('');

	function handleTextInput(text: string) {
		setInput(text);
	}

	function handleTextSubmit(text: string) {
		saveNewItem(text);
		setInput('');
	}

	return (
		<TextInput
			placeholder="Insert item here"
			value={input}
			onChangeText={handleTextInput}
			onSubmitEditing={e => handleTextSubmit(e.nativeEvent.text)}
		/>
	);
};
