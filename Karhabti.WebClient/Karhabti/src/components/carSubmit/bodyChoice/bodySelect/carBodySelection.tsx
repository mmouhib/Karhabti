import './carBodySelection.scss';
import Commercial from '../../../../assets/carBodyType/commercial.png';
import Coupe from '../../../../assets/carBodyType/coupe.png';
import Pickup from '../../../../assets/carBodyType/pickup.png';
import Roadster from '../../../../assets/carBodyType/roadster.png';
import Sedan from '../../../../assets/carBodyType/sedan.png';
import Suv from '../../../../assets/carBodyType/suv.png';
import Item from '../item/item';
import { useState } from 'react';

export default function CarBodySelecton() {
	const imageList: any[] = [Coupe, Pickup, Roadster, Suv];

	const [selectionList, setSelectionList] = useState<boolean[]>([
		false,
		true,
		false,
		false,
	]);

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
