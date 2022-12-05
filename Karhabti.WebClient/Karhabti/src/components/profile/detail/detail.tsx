import './detail.scss';

interface IProfileDetailProps {
	label: string;
	content: string;
}

export default function ProfileDetail(props: IProfileDetailProps) {
	return (
		<div className="profile-detail-section">
			<p className="label">{props.label}:</p>
			<p className="content">{props.content}</p>
		</div>
	);
}
