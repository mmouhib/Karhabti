import { ICarSubmitForm } from '../../../../pages/carSubmit/carSubmit';
import './item.scss';

interface IItemProps {
	id: number;
	image: any;
	selected: boolean[];
	setSelected: (arg: boolean[]) => void;
	imageDescription: string;
	setModalState: (arg: boolean) => void;
	CarData: ICarSubmitForm;
	setCarBodyValue: (arg: ICarSubmitForm) => void;
}

const whenItemIsSelected: React.CSSProperties = {
	backgroundColor: '#ffefef',
	border: '3px solid #e55353',
};

const whenItemIsNoSelected: React.CSSProperties = {
	border: '2px solid rgb(165, 165, 165)',
};

export default function Item(props: IItemProps) {
	const _onClick = (): void => {
		if (props.id == props.selected.length - 1) props.setModalState(true);
		else {
			props.setCarBodyValue({
				...props.CarData,
				BodyType: props.imageDescription,
			});
		}

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
			{props.image && <img src={props.image} alt={props.imageDescription} />}
			<p>{props.imageDescription}</p>
		</div>
	);
}
