export function isInputLongEnough(text: string) {
	return text.length > 2;
}

export function areThereSuggestions(suggestions: string[]) {
	return suggestions.length > 0;
}
