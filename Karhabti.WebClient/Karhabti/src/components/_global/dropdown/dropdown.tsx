import './dropdown.scss';

interface IDropdownProps {
	width: string;
	label: string;
	list: string[];
	setValue: (arg: string) => void;
}

export default function CustomDropdown(props: IDropdownProps) {
	return (
		<div className="dropdown-container" style={{ width: props.width }}>
			{props.label && (
				<div className="label-container">
					<p>{props.label}</p>
				</div>
			)}
			<select
				name="select"
				id="select"
				onChange={(e) => {
					props.setValue(e.target.value);
				}}
			>
				<option value="0">select</option>
				{props.list.map((element: string, index: number) => {
					return (
						<option key={index} value={element}>
							{element}
						</option>
					);
				})}
			</select>
		</div>
	);
}
