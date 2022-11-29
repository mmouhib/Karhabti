import './item.scss';

interface IItemProps {
	id: number;
	image: any;
	selected: boolean[];
	setSelected: (arg: boolean[]) => void;
}

export default function Item(props: IItemProps) {
	const whenItemIsSelected: React.CSSProperties = {
		backgroundColor: '#ffefef',
	};

	const whenItemIsNoSelected = {};

	const _onClick = (): void => {
		props.setSelected(
			props.selected.map((element: boolean, index: number) => {
				if (index == props.id) return true;
				return false;
			})
		);
	};

	return (
		<div
			className="item-container"
			onClick={_onClick}
			style={
				props.selected[props.id] ? whenItemIsSelected : whenItemIsNoSelected
			}
		>
			<img src={props.image} alt={props.image.toString()} />
		</div>
	);
}
