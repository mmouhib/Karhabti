import './carSubmitForm.scss';
import AddCarImage from '../../../assets/addCar.png';
import CustomInput from '../../_global/input/input';
import CustomDropdown from '../../_global/dropdown/dropdown';
import { CarDataContext, ICarContext } from '../../../context/carDataContext';
import { useContext } from 'react';
import { Switch } from '@chakra-ui/react';
import FormButton from '../../_global/formButton/formButton';
import CustomSlider from './slider/slider';
import { dropdownContentLister } from '../../../static/functions';
import { addCar } from '../../../utils/api/api';

interface ICarBodySelectionProps {
	changePage: (arg: boolean) => void;
}

export default function CarSubmitForm(props: ICarBodySelectionProps) {
	const carContext: ICarContext = useContext(CarDataContext);

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
					<p className="form-label">Please fill in your car's info</p>
					<CustomInput
						width="100%"
						placeholder="Enter your car model"
						label="Model"
						type="text"
						value={carContext.carData.Model}
						setValue={(arg: string) => {
							carContext.setCarData({
								...carContext.carData,
								Model: arg,
							});
						}}
					/>

					<CustomSlider
						label="Power"
						min={0}
						max={500}
						value={carContext.carData.Power}
						onChange={(value) => {
							carContext.setCarData({
								...carContext.carData,
								Power: value,
							});
						}}
					/>

					<CustomDropdown
						width="100%"
						label="year"
						list={dropdownContentLister(1920, 2024)}
						setValue={(arg: string) => {
							carContext.setCarData({
								...carContext.carData,
								Year: parseInt(arg),
							});
						}}
					/>

					<CustomInput
						width="100%"
						placeholder="Enter your car's color"
						label="Color"
						type="text"
						value={carContext.carData.Color}
						setValue={(arg: string) => {
							carContext.setCarData({
								...carContext.carData,
								Color: arg,
							});
						}}
					/>

					<CustomSlider
						label="Engine Size"
						min={1}
						max={10}
						value={carContext.carData.EngineSize}
						onChange={(value) => {
							carContext.setCarData({
								...carContext.carData,
								EngineSize: value,
							});
						}}
					/>

					<div className="switch-container">
						<span className="gas-type">Gas Type:</span>
						<div>
							<span>Diesel</span>
							<Switch
								id="email-alerts"
								onChange={() => {
									if (carContext.carData.GasType == 'gasoline') {
										carContext.setCarData({
											...carContext.carData,
											GasType: 'diesel',
										});
										return;
									}
									carContext.setCarData({
										...carContext.carData,
										GasType: 'gasoline',
									});
								}}
							/>
							<span>Gasoline</span>
						</div>
					</div>

					<div className="input-container">
						<div
							className="previous-button"
							onClick={() => {
								props.changePage(true);
							}}
						>
							Previous
						</div>
						<FormButton
							width="60%"
							text="submit"
							onClick={() => {
								addCar(carContext.carData);
							}}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
