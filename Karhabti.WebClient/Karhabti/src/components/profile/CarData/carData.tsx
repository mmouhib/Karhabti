import './CarData.scss';
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import ProfileDetail from '../detail/detail';
import { ICarGetDto } from '../../../utils/api/Dtos';
import ProfileButtons from './ProfileButtons/ProfileButtons';
import { useEffect, useState } from 'react';
import { getCarByOwnerId } from '../../../utils/api/api';

export default function CarData({ userId }: { userId: number }) {
	const [carData, setCarData] = useState<ICarGetDto>({} as ICarGetDto);

	useEffect(() => {
		getCarByOwnerId(userId).then((res) => {
			setCarData(res.data);
			localStorage.setItem('car', JSON.stringify(res.data));
		});
	}, []);

	return (
		<div className="car-details-container">
			{carData && (
				<div className="user-car-section">
					<div className="info-section-label">
						<DirectionsCarIcon />
						<p>your car's info:</p>
					</div>
					<div className="car-data-section">
						{Object.keys(carData).map((key: string, index: number) => {
							// if the key is 'id' or 'userId' then its data will not be rendered
							// because we don't want that information to be shown to the users.
							if (['id', 'userId'].includes(key)) return;

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
			)}
			<ProfileButtons />
		</div>
	);
}
