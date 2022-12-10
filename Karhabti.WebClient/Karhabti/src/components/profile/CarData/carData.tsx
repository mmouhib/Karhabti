import './CarData.scss';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ProfileDetail from '../detail/detail';
import { ICarPostDto } from '../../../utils/api/Dtos';
import ProfileButtons from './ProfileButtons/ProfileButtons';

export default function CarData({ carData }: { carData: ICarPostDto }) {
	return (
		<div className="car-details-container">
			<div className="user-car-section">
				<div className="info-section-label">
					<DirectionsCarIcon />
					<p>your car's info:</p>
				</div>
				<div className="car-data-section">
					{Object.keys(carData).map((key: string, index: number) => {
						return (
							<ProfileDetail
								key={index}
								label={key}
								// @ts-ignore
								content={carData[key]}
							/>
						);
					})}
				</div>
			</div>
			<ProfileButtons />
		</div>
	);
}
