import {GroceryItem} from './types';

export function getNewEntryFromInput(input: string): GroceryItem {
	const name = normalizeKeyName(input);
	const label = capitalizeFirstLetter(input);

	return {name: name, label: label};
}

function normalizeKeyName(str: string) {
	return str.toLowerCase().replaceAll(' ', '_');
}

function capitalizeFirstLetter(str: string) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}
