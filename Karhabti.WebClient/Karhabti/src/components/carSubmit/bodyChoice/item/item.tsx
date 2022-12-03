import React, { useContext } from 'react';
import './item.scss';
import { CarDataContext, IContext } from '../../../../context/carDataContext';

interface IItemProps {
	id: number;
	image: any;
	selected: boolean[];
	setSelected: (arg: boolean[]) => void;
	imageDescription: string;
	setModalState: (arg: boolean) => void;
}

const itemIsSelected: React.CSSProperties = {
	backgroundColor: '#ffefef',
	border: '3px solid #e55353',
};

const itemIsNotSelected: React.CSSProperties = {
	border: '2px solid rgb(165, 165, 165)',
};

export default function Item(props: IItemProps) {
	const carContext: IContext = useContext(CarDataContext);

	const _onClick = (): void => {
		// in case the last item is selected which is the "Other" box
		if (props.id == props.selected.length - 1) props.setModalState(true);
		// in case on of the body types boxes is selected
		else {
			carContext.setCarData({
				...carContext.carData,
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
			style={props.selected[props.id] ? itemIsSelected : itemIsNotSelected}
		>
			{props.image && <img src={props.image} alt={props.imageDescription} />}
			<p>{props.imageDescription}</p>
		</div>
	);
}
