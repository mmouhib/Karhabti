import './homeFeatures.scss';
import features from '../../../static/features';
import IHomeFeatures from '../../../types/types';
import HomeFeaturesCard from '../features-card/homeFeaturesCard';

export default function HomeFeatures() {
	return (
		<div className="home-features-container">
			<div className="features-title">
				<span>features</span>
				<p>Why choose us ?</p>
			</div>
			<div className="features-content">
				{features.map((element: IHomeFeatures, index: number) => {
					return <HomeFeaturesCard key={index} data={element} />;
				})}
			</div>
		</div>
	);
}
