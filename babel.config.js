module.exports = {
	presets: ['module:@react-native/babel-preset'],
	plugins: [
		'nativewind/babel',
		'module:react-native-dotenv',
		[
			'module-resolver',
			{
				root: ['./src'],
				alias: {
					'@assets': './src/assets',
					'@components': './src/components',
					'@navigation': './src/navigation',
					'@screens': './src/screens',
					'@services': './src/services',
					'@utils': './src/utils',
				},
			},
		],
	],
};
