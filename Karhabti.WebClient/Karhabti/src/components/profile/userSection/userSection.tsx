import './userSection.scss';
import { IUserSubmit } from '../../../types/types';
import ProfileDetail from '../detail/detail';
// image imports
import AvatarOne from '../../../assets/avatars/1.png';
import AvatarTwo from '../../../assets/avatars/2.png';
import AvatarThree from '../../../assets/avatars/3.png';
import AvatarFour from '../../../assets/avatars/4.png';
import AvatarFive from '../../../assets/avatars/5.png';
import AvatarSix from '../../../assets/avatars/6.png';
import AvatarSeven from '../../../assets/avatars/7.png';
import AvatarEight from '../../../assets/avatars/8.png';
import AvatarNine from '../../../assets/avatars/9.png';

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

export default function UserSection({ data }: { data: IUserSubmit }) {
	return (
		<div className="user-section-container">
			<div className="info-section">
				<p>User Info:</p>
				{Object.keys(data).map((key: string, index: number) => {
					return (
						// @ts-ignore
						<ProfileDetail key={index} label={key} content={data[key]} />
					);
				})}
			</div>
			<div className="avatar-section">
				<img
					src={
						Avatars.length == 1
							? Avatars[0]
							: Avatars[parseInt(data.avatar)]
					}
					alt="avatar"
				/>
				<div className="names-container">
					<p className="full-name">
						{data.firstName + ' ' + data.lastName}
					</p>
					<p className="username">{'@' + data.username}</p>
				</div>
			</div>
			<div className="share-section"></div>
		</div>
	);
}
