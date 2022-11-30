import './carBodySelection.scss';
import Coupe from '../../../../assets/carBodyType/coupe.png';
import Pickup from '../../../../assets/carBodyType/pickup.png';
import Hatchback from '../../../../assets/carBodyType/hatchback.png';
import Roadster from '../../../../assets/carBodyType/roadster.png';
import Sedan from '../../../../assets/carBodyType/sedan.png';
import Suv from '../../../../assets/carBodyType/suv.png';
import Wagon from '../../../../assets/carBodyType/wagon.png';
import Item from '../item/item';
import { useState } from 'react';

interface IItem {
	image: any;
	description: string;
}

const imageList: IItem[] = [
	{ image: Coupe, description: 'Coupe' },
	{ image: Pickup, description: 'Pickup' },
	{ image: Hatchback, description: 'Hatchback' },
	{ image: Roadster, description: 'Roadster' },
	{ image: Sedan, description: 'Sedan' },
	{ image: Suv, description: 'Suv' },
	{ image: Wagon, description: 'Wagon' },
];

export default function CarBodySelecton() {
	const [selectionList, setSelectionList] = useState<boolean[]>(
		new Array(imageList.length).fill(false)
	);

	return (
		<div className="car-body-container">
			<div className="car-body-content">
				<h1>Choose your car's body type</h1>
				<div className="items-container">
					{imageList.map((element: IItem, index: number) => {
						return (
							<Item
								id={index}
								key={index}
								image={element.image}
								selected={selectionList}
								setSelected={setSelectionList}
								imageDescription={element.description}
							/>
						);
					})}
				</div>
			</div>
		</div>
	);
}
