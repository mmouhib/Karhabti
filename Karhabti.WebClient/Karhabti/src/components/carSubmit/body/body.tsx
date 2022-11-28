import './body.scss';
import Commercial from '../../../assets/carBodyType/commercial.png';
import Coupe from '../../../assets/carBodyType/coupe.png';
import Pickup from '../../../assets/carBodyType/pickup.png';
import Roadster from '../../../assets/carBodyType/roadster.png';
import Sedan from '../../../assets/carBodyType/sedan.png';
import Suv from '../../../assets/carBodyType/suv.png';

interface IItemProps {
	image: any;
}

function Item(props: IItemProps) {
	return (
		<div className="item-container">
			<img src={props.image} alt={props.image.toString()} />
		</div>
	);
}

export default function CarBody() {
	const imageList: any[] = [Commercial, Coupe, Pickup, Roadster, Sedan, Suv];

	return (
		<div className="car-body-container">
			{imageList.map((element, index) => {
				return <Item key={index} image={element} />;
			})}
		</div>
	);
}
