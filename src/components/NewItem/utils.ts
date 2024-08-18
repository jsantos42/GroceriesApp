import {GroceryItem} from 'src/types';

export function isInputLongEnough(text: string) {
	return text.length > 2;
}

export function areThereSuggestions(suggestions: GroceryItem[]) {
	return suggestions.length > 0;
}
