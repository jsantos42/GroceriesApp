import {useState} from 'react';
import {Keyboard, TextInput} from 'react-native';
import {areThereSuggestions, isInputLongEnough} from './utils';
import {SuggestionsOverlay} from './SuggestionsOverlay';
import {useStyles} from '@utils/styles';
import {GroceryItem} from 'src/types';

export const InputField = ({
	searchItem,
	saveNewItem,
}: {
	searchItem: (itemName: string) => GroceryItem[];
	saveNewItem: (itemName: string) => void;
}) => {
	const [input, setInput] = useState<string>('');
	const [suggestions, setSuggestions] = useState<GroceryItem[]>([]);
	const styles = useStyles();

	function handleTextInput(text: string) {
		setInput(text);
		if (isInputLongEnough(text)) {
			refreshSuggestions(text);
		} else {
			setSuggestions([]);
		}
	}

	function refreshSuggestions(text: string) {
		const foundSuggestions = searchItem(text);

		if (areThereSuggestions(foundSuggestions)) {
			setSuggestions(foundSuggestions);
		} else {
			setSuggestions([]);
		}
	}

	function handleTextSubmit(text: string) {
		saveNewItem(text);
		setSuggestions([]);
		setInput('');
		Keyboard.dismiss();
	}

	function hideSuggestionOverlay() {
		setSuggestions([]);
	}

	return (
		<>
			<TextInput
				className={`p-4 z-30 text-lg tracking-widest shadow-none text-center`}
				style={{...styles.textColor, ...styles.inputField}}
				placeholder="Insert item here"
				value={input}
				onChangeText={handleTextInput}
				onSubmitEditing={e => handleTextSubmit(e.nativeEvent.text)}
			/>
			{areThereSuggestions(suggestions) && (
				<SuggestionsOverlay
					onSelectSuggestion={handleTextSubmit}
					{...{suggestions, hideSuggestionOverlay}}
				/>
			)}
		</>
	);
};
