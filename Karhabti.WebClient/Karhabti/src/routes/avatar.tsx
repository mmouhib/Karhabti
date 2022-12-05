import '../styles/avatar.scss';
import { useContext, useEffect, useState } from 'react';
// image imports
import AvatarOne from '../assets/avatars/1.png';
import AvatarTwo from '../assets/avatars/2.png';
import AvatarThree from '../assets/avatars/3.png';
import AvatarFour from '../assets/avatars/4.png';
import AvatarFive from '../assets/avatars/5.png';
import AvatarSix from '../assets/avatars/6.png';
import AvatarSeven from '../assets/avatars/7.png';
import AvatarEight from '../assets/avatars/8.png';
import AvatarNine from '../assets/avatars/9.png';
import AvatarItem from '../components/avatar/item';
import FormButton from '../components/_global/formButton/formButton';
import { addUser } from '../utils/api';
import { IUserContext, userContext } from '../context/userContext';

export interface IAvatar {
	image: any;
	name: string;
}

const Avatars: IAvatar[] = [
	{ image: AvatarOne, name: 'AvatarOne' },
	{ image: AvatarTwo, name: 'AvatarTwo' },
	{ image: AvatarThree, name: 'AvatarThree' },
	{ image: AvatarFour, name: 'AvatarFour' },
	{ image: AvatarFive, name: 'AvatarFive' },
	{ image: AvatarSix, name: 'AvatarSix' },
	{ image: AvatarSeven, name: 'AvatarSeven' },
	{ image: AvatarEight, name: 'AvatarEight' },
	{ image: AvatarNine, name: 'AvatarNine' },
];

export default function Avatar() {
	const userDataContext: IUserContext = useContext(userContext);

	const [avatarSelection, setAvatarSelection] = useState<boolean[]>(
		new Array(Avatars.length).fill(false)
	);

	useEffect(() => {
		userDataContext.setUserData({
			...userDataContext.userData,
			avatar: avatarSelection.indexOf(true).toString(),
		});
	}, [avatarSelection]);

	function submitHandler(): void {
		addUser(userDataContext.userData);
	}

	return (
		<div className="avatar-container">
			<h1>Choose Your Avatar</h1>
			<div className="avatars">
				{Avatars.map((element: IAvatar, index: number) => {
					return (
						<AvatarItem
							id={index}
							key={index}
							avatarSelection={avatarSelection}
							setAvatarSelection={setAvatarSelection}
							image={element}
						/>
					);
				})}
			</div>
			<FormButton width="20%" text="Proceed" onClick={submitHandler} />
		</div>
	);
}
