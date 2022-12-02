import './carSubmit.scss';
import CarBodySelecton from '../../components/carSubmit/bodyChoice/bodySelect/carBodySelection';
import { useEffect, useState } from 'react';
import CarSubmitForm from '../../components/carSubmit/carSubmitForm/carSubmitForm';

export interface ICarSubmitForm {
	Model: string; // string
	Power: number; // slider
	Year: number; // list
	Color: string; // constants
	EngineSize: number; // slider
	GasType: 'gasoline' | 'diesel'; // switch button
	BodyType: string; // chosen before
}

export default function CarSubmit() {
	const [isOnCarBodySelectionPage, setIsOnCarBodySelectionPage] =
		useState<boolean>(true);

	const [CarData, setCarData] = useState<ICarSubmitForm>({
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
			{isOnCarBodySelectionPage ? (
				<CarBodySelecton
					CarData={CarData}
					setCarData={setCarData}
					setCurrentComponent={setIsOnCarBodySelectionPage}
				/>
			) : (
				<CarSubmitForm setCurrentComponent={setIsOnCarBodySelectionPage} />
			)}
		</div>
	);
}
