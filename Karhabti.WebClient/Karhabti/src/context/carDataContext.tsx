import React, { createContext, useState } from 'react';
import { ICarPostDto } from '../utils/api/Dtos';

export interface ICarContext {
	carData: ICarPostDto;
	setCarData: (arg: ICarPostDto) => void;
}

interface IProviderProps {
	children: React.ReactNode;
}

export const CarDataContext = createContext<ICarContext>({} as ICarContext);

export default function CarDataContextProvider(props: IProviderProps) {
	const [carData, setCarData] = useState<ICarPostDto>({
		Model: '',
		Power: 1,
		Year: 222,
		Color: '',
		EngineSize: 2,
		GasType: 'diesel',
		BodyType: '',
		userId: 1,
	});

	return (
		<CarDataContext.Provider value={{ carData, setCarData }}>
			{props.children}
		</CarDataContext.Provider>
	);
}
