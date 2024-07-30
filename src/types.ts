export type GroceryItem = {
	name: string;
	label: string;
};
export type GroceryItemState = GroceryItem & {
	checked: boolean;
};
