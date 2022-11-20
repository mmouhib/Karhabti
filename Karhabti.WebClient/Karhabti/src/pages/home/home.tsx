import './home.scss';
import Navbar from '../../components/navbar/navbar';
import HomeContent from '../../components/home-content/homeContent';

export default function Home() {
	return (
		<div className="home-page">
			<Navbar />
			<HomeContent />
		</div>
	);
}
