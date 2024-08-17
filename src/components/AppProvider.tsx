import {ColorSchemeName, useColorScheme} from 'react-native';
import {createContext, ReactNode, useContext} from 'react';

type Context = {
	theme: ColorSchemeName;
};

const AppContext = createContext<Context>({
	theme: 'light',
});

export const AppProvider = ({children}: {children: ReactNode}) => {
	const theme = useColorScheme(); // hook to subscribe to color scheme updates

	return (
		<AppContext.Provider value={{theme}}>{children}</AppContext.Provider>
	);
};

export const useAppContext = () => useContext(AppContext);
