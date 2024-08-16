import {useState} from 'react';
import {Keyboard, TextInput} from 'react-native';
import {areThereSuggestions, isInputLongEnough} from './utils';
import {SuggestionsOverlay} from './SuggestionsOverlay';

export const InputField = ({
	searchItem,
	saveNewItem,
}: {
	searchItem: (itemName: string) => string[];
	saveNewItem: (itemName: string) => void;
}) => {
	const [input, setInput] = useState<string>('');
	const [suggestions, setSuggestions] = useState<string[]>([]);

	function handleTextInput(text: string) {
		setInput(text);
		if (isInputLongEnough(text)) {
			refreshSuggestions(text);
		}
	}

	function refreshSuggestions(text: string) {
		const foundSuggestions = searchItem(text);

		if (areThereSuggestions(foundSuggestions)) {
			setSuggestions(foundSuggestions);
		}
	}

	function handleTextSubmit(text: string) {
		saveNewItem(text);
		setSuggestions([]);
		setInput('');
		Keyboard.dismiss();
	}

	return (
		<>
			<TextInput
				placeholder="Insert item here"
				value={input}
				onChangeText={handleTextInput}
				onSubmitEditing={e => handleTextSubmit(e.nativeEvent.text)}
			/>
			<SuggestionsOverlay
				suggestions={suggestions}
				onSelectSuggestion={handleTextSubmit}
			/>
		</>
	);
};
