import './userSection.scss';
import { IUserProfileData as UserDto } from '../../../routes/profile';
import UserInfo from './userInfo/userInfo';
import UserAvatar from './userAvatar/userAvatar';
import DeleteIcon from '@mui/icons-material/Delete';
import ShareIcon from '@mui/icons-material/Share';
import ProfileModal from './modal/profileModal';
import { useState } from 'react';

export default function UserSection({ userData }: { userData: UserDto }) {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<div className="user-section-container">
			<ProfileModal isOpen={isOpen} setIsOpen={setIsOpen} />
			<UserInfo userData={userData} />
			<UserAvatar userData={userData} />
			<div className="user-actions">
				<div className="profile-action-button share">
					Share <ShareIcon fontSize={'small'} />
				</div>
				<div
					className="profile-action-button delete"
					onClick={() => {
						setIsOpen(true);
					}}
				>
					Delete <DeleteIcon fontSize={'small'} />
				</div>
			</div>
		</div>
	);
}
