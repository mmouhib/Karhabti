import './carInfo.scss';
import ProfileDetail from '../../detail/detail';
import { ICarSubmitData } from '../../../../types/types';

export default function CarInfo({ carData }: { carData: ICarSubmitData }) {
	return (
		<div className="user-car-section">
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
	);
}
