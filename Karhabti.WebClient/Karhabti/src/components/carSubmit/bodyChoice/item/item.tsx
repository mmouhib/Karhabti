import './item.scss';

interface IItemProps {
	id: number;
	image: any;
	selected: boolean[];
	setSelected: (arg: boolean[]) => void;
	imageDescription: string;
}

export default function Item(props: IItemProps) {
	const whenItemIsSelected: React.CSSProperties = {
		backgroundColor: '#ffefef',
		border: '3px solid rgb(212, 83, 83)',
	};

	const whenItemIsNoSelected = {
		border: '2px solid rgb(165, 165, 165)',
	};

	const _onClick = (): void => {
		props.setSelected(
			props.selected.map((_, index: number) => {
				return index == props.id;
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
			<p>{props.imageDescription}</p>
		</div>
	);
}
