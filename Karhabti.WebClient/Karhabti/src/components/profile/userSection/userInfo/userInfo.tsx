import './userInfo.scss';
import ProfileDetail from '../../detail/detail';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { IUserProfileData } from '../../../../routes/profile';
import ContactsIcon from '@mui/icons-material/Contacts';

export default function UserInfo({ userData }: { userData: IUserProfileData }) {
	return (
		<div className="info-section">
			<div className="info-section-label">
				<ContactsIcon />
				<p>your credentials:</p>
			</div>
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
