type Theme = 'dark' | 'light' | undefined | null;

export function getBackgroundColor(theme: Theme) {
	return theme === 'dark' ? 'black' : 'white';
}

export function getTextColor(theme: Theme) {
	return theme === 'dark' ? 'text-white' : 'text-black';
}
