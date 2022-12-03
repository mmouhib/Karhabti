import React, { createContext, useState } from 'react';
import { ICarSubmitData } from '../types/types';

export interface IContext {
	carData: ICarSubmitData;
	setCarData: (arg: ICarSubmitData) => void;
}

interface IProviderProps {
	children: React.ReactNode;
}

export const CarDataContext = createContext<IContext | null>(null);

export default function CarDataContextProvider(props: IProviderProps) {
	const [carData, setCarData] = useState<ICarSubmitData>({
		Model: '',
		Power: 1,
		Year: 222,
		Color: '',
		EngineSize: 2,
		GasType: 'diesel',
		BodyType: '',
	});

	return (
		<CarDataContext.Provider value={{ carData, setCarData }}>
			{props.children}
		</CarDataContext.Provider>
	);
}
