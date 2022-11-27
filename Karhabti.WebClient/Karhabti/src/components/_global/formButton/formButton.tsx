import './formButton.scss';

interface IFormButtonProps {
	width: string;
	text: string;
	onClick: (data: any) => void;
}

export default function FormButton(props: IFormButtonProps) {
	return (
		<div
			className="auth-button"
			style={{ width: props.width }}
			onClick={props.onClick}
		>
			{props.text}
		</div>
	);
}
