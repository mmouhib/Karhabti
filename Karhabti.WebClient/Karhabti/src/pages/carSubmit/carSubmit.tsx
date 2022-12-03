import './carSubmit.scss';
import CarBodySelection from '../../components/carSubmit/bodyChoice/bodySelect/carBodySelection';
import { useState } from 'react';
import CarSubmitForm from '../../components/carSubmit/carSubmitForm/carSubmitForm';
import CarDataContextProvider from '../../context/carDataContext';
import { ICarSubmitData } from '../../types/types';

export default function CarSubmit() {
	const [isOnCarBodySelectionPage, setIsOnCarBodySelectionPage] =
		useState<boolean>(true);

	const [CarData, setCarData] = useState<ICarSubmitData>({
		Model: '',
		Power: 0,
		Year: 0,
		Color: '',
		EngineSize: 0,
		GasType: 'diesel',
		BodyType: '',
	});

	return (
		<div className="car-submit-container">
			<CarDataContextProvider>
				{isOnCarBodySelectionPage ? (
					<CarBodySelection
						CarData={CarData}
						setCarData={setCarData}
						setCurrentComponent={setIsOnCarBodySelectionPage}
					/>
				) : (
					<CarSubmitForm
						CarData={CarData}
						setCarData={setCarData}
						setCurrentComponent={setIsOnCarBodySelectionPage}
					/>
				)}
			</CarDataContextProvider>
		</div>
	);
}
