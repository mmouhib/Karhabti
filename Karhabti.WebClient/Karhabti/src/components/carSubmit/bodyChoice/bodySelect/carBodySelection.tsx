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

export default function CarBodySelecton() {
	const imageList: any[] = [
		Coupe,
		Pickup,
		Hatchback,
		Roadster,
		Sedan,
		Suv,
		Wagon,
	];

	const [selectionList, setSelectionList] = useState<boolean[]>(
		new Array(imageList.length).fill(false)
	);

	return (
		<div className="car-body-container">
			{imageList.map((element, index) => {
				return (
					<Item
						id={index}
						key={index}
						image={element}
						selected={selectionList}
						setSelected={setSelectionList}
					/>
				);
			})}
		</div>
	);
}
