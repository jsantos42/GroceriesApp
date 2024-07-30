/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/assets/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/navigation/**/*.{js,ts,jsx,tsx}',
		'./src/screens/**/*.{js,ts,jsx,tsx}',
		'./src/services/**/*.{js,ts,jsx,tsx}',
		'./src/utils/**/*.{js,ts,jsx,tsx}',
		'./src/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {},
	},
	plugins: [],
};
