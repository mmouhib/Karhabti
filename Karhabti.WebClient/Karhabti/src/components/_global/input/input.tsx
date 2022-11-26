import './input.scss';

interface ICustomInputProps {
	width: string;
	placeholder: string;
	type: string;
	value: string;
	setValue: (arg: string) => void;
	label?: string;
}

export default function CustomInput(props: ICustomInputProps) {
	const styleFromProps: object = {
		width: props.width,
	};

	return (
		<div className="custom-input-container" style={styleFromProps}>
			{props.label && (
				<div className="label-container">
					<p>{props.label}</p>
				</div>
			)}
			<input
				className="custom-input"
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>
	);
}
