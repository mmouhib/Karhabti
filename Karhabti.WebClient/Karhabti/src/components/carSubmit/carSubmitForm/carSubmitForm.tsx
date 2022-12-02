import './carSubmitForm.scss';

interface ICarBodySelectonProps {
	setCurrentComponent: (arg: boolean) => void;
}

export default function CarSubmitForm(props: ICarBodySelectonProps) {
	return (
		<div className="car-submit-form-container">
			<div className="left"></div>
			<div className="right">
				<p
					onClick={() => {
						props.setCurrentComponent(true);
					}}
				>
					aaaaa
				</p>
			</div>
		</div>
	);
}
