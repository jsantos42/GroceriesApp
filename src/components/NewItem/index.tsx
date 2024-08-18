import {useState} from 'react';
import {Keyboard} from 'react-native';
import {areThereSuggestions, isInputLongEnough} from './utils';
import {SuggestionsOverlay} from './SuggestionsOverlay';
import {GroceryItem} from 'src/types';
import {InputField} from './InputField';

export const NewItem = ({
	searchItem,
	saveNewItem,
}: {
	searchItem: (itemName: string) => GroceryItem[];
	saveNewItem: (itemName: string) => void;
}) => {
	const [input, setInput] = useState<string>('');
	const [suggestions, setSuggestions] = useState<GroceryItem[]>([]);

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
			<InputField {...{input, handleTextInput, handleTextSubmit}} />
			{areThereSuggestions(suggestions) && (
				<SuggestionsOverlay
					onSelectSuggestion={handleTextSubmit}
					{...{suggestions, hideSuggestionOverlay}}
				/>
			)}
		</>
	);
};
