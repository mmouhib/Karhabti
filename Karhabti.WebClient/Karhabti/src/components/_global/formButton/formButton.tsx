import './formButton.scss';

interface IFormButtonProps {
	width: string;
	text: string;
}

export default function FormButton(props: IFormButtonProps) {
	return (
		<div className="auth-button" style={{ width: props.width }}>
			{props.text}
		</div>
	);
}
