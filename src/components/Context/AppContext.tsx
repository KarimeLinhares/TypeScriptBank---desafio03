/* eslint-disable react-hooks/exhaustive-deps */
import { createContext, useEffect, useState } from 'react';
import { getAllLocalStorage } from '../services/storage';

interface IAppContext {
	user: string;
	isLoggedIn: boolean;
	setIsLoggedIn: (isLoggedIn: boolean) => void;
}

export const AppContext = createContext({} as IAppContext);
export const AppContextProvider = ({ children }: any) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const storage = getAllLocalStorage();

	useEffect(() => {
		if (storage) {
			const { login } = JSON.parse(storage);
			setIsLoggedIn(login);
		}
	}, []);

	const user = 'usuário teste';

	return (
		<AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
			{children}
		</AppContext.Provider>
	);
};
