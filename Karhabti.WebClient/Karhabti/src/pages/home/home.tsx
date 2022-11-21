import './home.scss';
import Navbar from '../../components/home/navbar/navbar';
import HomeContent from '../../components/home/home-content/homeContent';
import HomeFeatures from '../../components/home/home-features/homeFeatures';

export default function Home() {
	return (
		<div className="home-page">
			{/*<Navbar />*/}
			{/*<HomeContent />*/}
			<HomeFeatures />
		</div>
	);
}
