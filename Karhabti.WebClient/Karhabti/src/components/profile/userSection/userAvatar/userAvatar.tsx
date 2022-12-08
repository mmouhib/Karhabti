import './userAvatar.scss';
import AvatarOne from '../../../../assets/avatars/1.png';
import AvatarTwo from '../../../../assets/avatars/2.png';
import AvatarThree from '../../../../assets/avatars/3.png';
import AvatarFour from '../../../../assets/avatars/4.png';
import AvatarFive from '../../../../assets/avatars/5.png';
import AvatarSix from '../../../../assets/avatars/6.png';
import AvatarSeven from '../../../../assets/avatars/7.png';
import AvatarEight from '../../../../assets/avatars/8.png';
import AvatarNine from '../../../../assets/avatars/9.png';
import { IUserProfileData as UserDto } from '../../../../routes/profile';

const Avatars = [
	AvatarOne,
	AvatarTwo,
	AvatarThree,
	AvatarFour,
	AvatarFive,
	AvatarSix,
	AvatarSeven,
	AvatarEight,
	AvatarNine,
];

export default function UserAvatar({ userData }: { userData: UserDto }) {
	return (
		<div className="avatar-section">
			<img
				src={
					Avatars.length == 1
						? Avatars[0]
						: Avatars[parseInt(userData.avatar)]
				}
				alt="avatar"
			/>
			<div className="names-container">
				<p className="full-name">
					{`${userData.firstName} ${userData.lastName}`}
				</p>
				<p className="username">{'@' + userData.username}</p>
			</div>
		</div>
	);
}
