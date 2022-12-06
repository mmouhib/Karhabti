import './userSection.scss';
import { IUserProfileData } from '../../../routes/profile';
import { ICarSubmitData } from '../../../types/types';
import UserInfo from './userInfo/userInfo';
import CarInfo from './carInfo/carInfo';
import UserAvatar from './userAvatar/userAvatar';

interface IUserSectionProps {
	userData: IUserProfileData;
	carData: ICarSubmitData;
}

export default function UserSection({ userData, carData }: IUserSectionProps) {
	return (
		<div className='user-section-container'>
			<UserInfo userData={userData} />
			<UserAvatar userData={userData} />
			<CarInfo carData={carData} />
		</div>
	);
}
