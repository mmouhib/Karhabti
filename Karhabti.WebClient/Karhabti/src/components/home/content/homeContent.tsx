import './homeContent.scss';
// @ts-ignore
import Image from '../../../assets/homeCar.png';
import Navbar from '../navbar/navbar';

export default function HomeContent() {
	return (
		<div className="home-content-container">
			<Navbar />
			<div className="home-content">
				<div className="left-side">
					<p className="slogan">
						Your cars <span>Maintenance </span>
						is our <span>Mission</span>.
					</p>
					<p className="content">
						We help you keep track of your car's state and help you
						maintain it with ease at no cost.
					</p>
					<div className="links">
						<div className="jump-back-button">Jump Back</div>
						<div className="join-us-button">Join Us</div>
					</div>
				</div>
				<div className="right-side">
					<div className="red-background"></div>
					<img src={Image} alt="car" />
				</div>
			</div>
		</div>
	);
}
