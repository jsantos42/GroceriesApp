import {configLoggerType, logger} from 'react-native-logs';

const defaultConfig: configLoggerType = {
	transportOptions: {
		colors: {
			info: 'blue',
			warn: 'yellow',
			error: 'red',
		},
	},
};

export const log = logger.createLogger(defaultConfig);
