import './input.scss';

interface ICustomInputProps {
	width: string;
	placeholder: string;
	type: string;
	value: string;
	setValue: (arg: string) => void;
	label?: string;
	error?: boolean;
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
				value={props.value}
				onChange={(e) => {
					props.setValue(e.target.value);
				}}
				className="custom-input"
				style={{
					border: props.error ? '2px solid #f3c2c2' : '',
					backgroundColor: props.error ? '#ffe0e0' : '',
				}}
				type={props.type}
				placeholder={props.placeholder}
			/>
		</div>
	);
}
