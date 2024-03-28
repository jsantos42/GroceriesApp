import type {Config} from 'jest';

const config: Config = {
	preset: 'react-native',
	moduleDirectories: ['node_modules', 'src'],
	moduleNameMapper: {
		'^src/(.*)$': '<rootDir>/src/$1',
		'^tests/(.*)$': '<rootDir>/__tests__/$1',
		'^@assets/(.*)$': '<rootDir>/src/assets/$1',
		'^@components/(.*)$': '<rootDir>/src/components/$1',
		'^@navigation/(.*)$': '<rootDir>/src/navigation/$1',
		'^@screens/(.*)$': '<rootDir>/src/screens/$1',
		'^@services/(.*)$': '<rootDir>/src/services/$1',
		'^@utils/(.*)$': '<rootDir>/src/utils/$1',
	},
};

export default config;
