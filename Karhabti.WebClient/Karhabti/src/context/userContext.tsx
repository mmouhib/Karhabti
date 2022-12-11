import React, { createContext, useState } from 'react';
import { IUserPostDto } from '../utils/api/Dtos';

export interface IUserContext {
	userData: IUserPostDto;
	setUserData: (arg: IUserPostDto) => void;
}

interface IProviderProps {
	children: React.ReactNode;
}

export const userContext = createContext<IUserContext>({} as IUserContext);

export default function UserDataContextProvider(props: IProviderProps) {
	const [userData, setUserData] = useState<IUserPostDto>({
		username: '',
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		birthDate: '',
		gender: '',
		avatar: '',
	});

	return (
		<userContext.Provider value={{ userData, setUserData }}>
			{props.children}
		</userContext.Provider>
	);
}
