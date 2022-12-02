import './carSubmit.scss';
import CarBodySelecton from '../../components/carSubmit/bodyChoice/bodySelect/carBodySelection';
import { useState } from 'react';
import CarSubmitForm from '../../components/carSubmit/carSubmitForm/carSubmitForm';

interface ICarSubmitForm {
	Model: string; // string
	Power: number; // slider
	Year: number; // list
	Color: string; // constants
	EngineSize: number; // slider
	GasType: string; // switch button
	BodyType: string; // chosen before
	UserId: number; // internal
}

export default function CarSubmit() {
	const [isOnCarBodySelectionPage, setIsOnCarBodySelectionPage] =
		useState<boolean>(true);

	const [carBodyType, setCarBodyType] = useState<string>('');
	const [Model, setModel] = useState<string>('');
	const [Power, setPower] = useState<number>(0);
	const [Year, setYear] = useState<number>(2012);
	const [color, setColor] = useState<string>('string');
	const [EngineSize, setEngineSize] = useState<number>();
	const [gasType, setGasType] = useState<'gasoline' | 'diesel'>();

	return (
		<div className="car-submit-container">
			{isOnCarBodySelectionPage ? (
				<CarBodySelecton
					carBodyType={carBodyType}
					setCarBodyType={setCarBodyType}
					setCurrentComponent={setIsOnCarBodySelectionPage}
				/>
			) : (
				<CarSubmitForm setCurrentComponent={setIsOnCarBodySelectionPage} />
			)}
		</div>
	);
}
