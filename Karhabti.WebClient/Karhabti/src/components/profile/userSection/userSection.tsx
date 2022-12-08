import './userSection.scss';
import { IUserProfileData as UserDto } from '../../../routes/profile';
import UserInfo from './userInfo/userInfo';
import UserAvatar from './userAvatar/userAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';

export default function UserSection({ userData }: { userData: UserDto }) {
	return (
		<div className="user-section-container">
			<UserInfo userData={userData} />
			<UserAvatar userData={userData} />
			<div className="user-actions">
				<div className="profile-action-button share">
					Share <ShareIcon fontSize={'small'} />
				</div>
				<div className="profile-action-button delete">
					Delete <DeleteIcon fontSize={'small'} />
				</div>
			</div>
		</div>
	);
}
