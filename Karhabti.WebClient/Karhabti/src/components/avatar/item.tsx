import './item.scss';
import { IAvatar } from '../../pages/Avatar/avatar';

interface IAvatarItemProps {
	id: number;
	image: IAvatar;

	avatarSelection: boolean[];
	setAvatarSelection: (arg: boolean[]) => void;
}

export default function AvatarItem(props: IAvatarItemProps) {
	const _onClick = () => {
		props.setAvatarSelection(
			props.avatarSelection.map((element: boolean, index: number) => {
				return index == props.id;
			})
		);
	};

	const dynamicStyle = {
		border: props.avatarSelection[props.id] ? '8px solid #FE6B6B' : '',
	};

	return (
		<div className="single-avatar" onClick={_onClick} style={dynamicStyle}>
			<img src={props.image.image} alt={props.image.name} />
		</div>
	);
}
