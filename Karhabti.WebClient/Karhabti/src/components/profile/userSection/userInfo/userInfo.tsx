import './userInfo.scss';
import ProfileDetail from '../../detail/detail';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { IUserProfileData } from '../../../../routes/profile';

export default function UserInfo({ userData }: { userData: IUserProfileData }) {
	return (
		<div className="info-section">
			<div className="container">
				<ProfileDetail label="email" content={userData.email} />
				<ProfileDetail label="birth date" content={userData.birthDate} />
				<ProfileDetail
					label="gender"
					content={userData.gender}
					icon={userData.gender == 'male' ? MaleIcon : FemaleIcon}
				/>
			</div>
		</div>
	);
}
