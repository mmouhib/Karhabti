import './detail.scss';

interface IProfileDetailProps {
	label: string;
	content: string;
	icon?: any;
}

export default function ProfileDetail(props: IProfileDetailProps) {
	return (
		<div className="profile-detail-section">
			<p className="label">{props.label}:</p>
			<div className="data">
				<p className="content">{props.content}</p>
				{props.icon && <props.icon />}
			</div>
		</div>
	);
}
