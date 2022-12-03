import {
	Slider,
	SliderTrack,
	SliderFilledTrack,
	SliderThumb,
	Box,
} from '@chakra-ui/react';
import './carSubmitForm.scss';
import AddCarImage from '../../../assets/addCar.png';
import CustomInput from '../../_global/input/input';
import { AiFillCar } from 'react-icons/ai';
import { dropdownContentLister } from '../../signup/content/signupContent';
import CustomDropdown from '../../_global/dropdown/dropdown';
import { ICarSubmitData } from '../../../types/types';
import { CarDataContext, IContext } from '../../../context/carDataContext';
import { useContext } from 'react';

interface ICarBodySelectionProps {
	setCurrentComponent: (arg: boolean) => void;
	CarData: ICarSubmitData;
	setCarData: (arg: ICarSubmitData) => void;
}

export default function CarSubmitForm(props: ICarBodySelectionProps) {
	const carContext: IContext | null = useContext(CarDataContext);
	console.log(carContext?.carData.Power);

	return (
		<div className="car-submit-form-container">
			<div className="left">
				<div className="text">
					<h1>Add your car</h1>
					<p>Fill in your car infos</p>
				</div>
				<img src={AddCarImage} alt="AddCarImage" />
			</div>
			<div className="right">
				<div className="form-container">
					<CustomInput
						width="100%"
						placeholder="Enter your car model"
						label="Model"
						type="text"
						value={''}
						setValue={function (arg: string): void {
							throw new Error('Function not implemented.');
						}}
					/>
					<div className="slider-container">
						<div className="power">{props.CarData.Power}</div>
						<Slider
							min={0}
							max={500}
							aria-label="slider-ex-4"
							defaultValue={30}
							onChange={(value) => {
								props.setCarData({ ...props.CarData, Power: value });
							}}
						>
							<SliderTrack bg="red.100">
								<SliderFilledTrack bg="tomato" />
							</SliderTrack>
							<SliderThumb boxSize={6}>
								<Box color="tomato" as={AiFillCar} />
							</SliderThumb>
						</Slider>
					</div>

					<CustomDropdown
						width="100%"
						label="year"
						list={dropdownContentLister(1920, 2024)}
						setValue={() => {}}
					/>
				</div>
			</div>
		</div>
	);
}
