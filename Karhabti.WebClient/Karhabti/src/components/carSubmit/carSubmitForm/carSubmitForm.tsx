import './carSubmitForm.scss';
import AddCarImage from '../../../assets/addCar.png';

interface ICarBodySelectonProps {
	setCurrentComponent: (arg: boolean) => void;
}

export default function CarSubmitForm(props: ICarBodySelectonProps) {
	const changeComponent = (): void => {
		props.setCurrentComponent(true);
	};

	return (
		<div className="car-submit-form-container">
			<div className="left">
				<div className="text">
					<h1>Add your car</h1>
					<p>Fill in your car informations</p>
				</div>
				<img src={AddCarImage} alt="AddCarImage" />
			</div>
			<div className="right">
				<p onClick={changeComponent}></p>
			</div>
		</div>
	);
}
