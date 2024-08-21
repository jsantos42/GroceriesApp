import TrieSearch from 'trie-search';
import {GroceryItem, StorageKeys} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch, SetStateAction} from 'react';

const TRIE_STORAGE_KEY: StorageKeys = 'trie';
const GROCERY_LIST_STORAGE_KEY: StorageKeys = 'groceryList';

export function loadDataFromStorage(
	trie: TrieSearch<GroceryItem>,
	setGroceryList: Dispatch<SetStateAction<GroceryItem[]>>
) {
	getFromStorage(TRIE_STORAGE_KEY).then(value => {
		if (value) {
			trie.root = JSON.parse(value);
		}
	});
	getFromStorage(GROCERY_LIST_STORAGE_KEY).then(value => {
		if (value) {
			setGroceryList(JSON.parse(value));
		}
	});
}

async function getFromStorage(key: string): Promise<string | null> {
	try {
		return await AsyncStorage.getItem(key);
	} catch (error) {
		console.warn(error);
	}
	return null;
}

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

export function saveNewItemOnTrie(
	trie: TrieSearch<GroceryItem>,
	newRecord: GroceryItem
) {
	trie.add(newRecord);
	AsyncStorage.setItem(TRIE_STORAGE_KEY, JSON.stringify(trie.root));
}

export function updateGroceryList(
	groceryList: GroceryItem[],
	newRecord: GroceryItem,
	setGroceryList: Dispatch<SetStateAction<GroceryItem[]>>
) {
	const updatedList = [...groceryList, newRecord];

	setGroceryList(updatedList);
	AsyncStorage.setItem(GROCERY_LIST_STORAGE_KEY, JSON.stringify(updatedList));
}
