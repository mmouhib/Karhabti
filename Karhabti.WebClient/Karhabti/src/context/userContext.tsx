import React, { createContext, useState } from 'react';
import { IUserSubmit } from '../types/types';

export interface IUserContext {
	userData: IUserSubmit;
	setUserData: (arg: IUserSubmit) => void;
}

interface IProviderProps {
	children: React.ReactNode;
}

export const userContext = createContext<IUserContext>({} as IUserContext);

export default function UserDataContextProvider(props: IProviderProps) {
	const [userData, setUserData] = useState<IUserSubmit>({
		username: '',
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		birthDate: '2019-01-06T17:16:40',
		gender: 'male',
		avatar: '',
	});

	return (
		<userContext.Provider value={{ userData, setUserData }}>
			{props.children}
		</userContext.Provider>
	);
}
