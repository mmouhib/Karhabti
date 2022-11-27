import './dropdown.scss';

interface IDropdownProps {
	label: string;
	list: string[];
	width: string;
}

export default function CustomDropdown(props: IDropdownProps) {
	return (
		<div className="dropdown-container" style={{ width: props.width }}>
			{props.label && (
				<div className="label-container">
					<p>{props.label}</p>
				</div>
			)}
			<select name="select" id="select">
				<option value="0">select</option>
				{props.list.map((element: string) => {
					return <option value={element}>{element}</option>;
				})}
			</select>
		</div>
	);
}
