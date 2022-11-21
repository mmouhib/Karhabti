import './homeFeaturesCard.scss';
import IHomeFeatures from '../../../types/types';

interface IHomeFeaturesCard {
	data: IHomeFeatures;
}

export default function HomeFeaturesCard({ data }: IHomeFeaturesCard) {
	return (
		<div className="features-card-container">
			<div className="icon-container">
				<data.icon fontSize="inherit" color="red" />
			</div>
			<p className="title">{data.title}</p>
			<p className="content">{data.text}</p>
		</div>
	);
}
