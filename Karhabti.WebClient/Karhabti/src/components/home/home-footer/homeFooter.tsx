import './homeFooter.scss';
import CarRentalIcon from '@mui/icons-material/CarRental';

export default function HomeFooter() {
	return (
		<div className="home-footer-container">
			<p className="copyrights">© 2022 Karhabti</p>
			<div className="logo">
				<CarRentalIcon />
				<p>Karhabti</p>
			</div>
			<div className="auth_section">
				<span>Log In</span>
				<div>Register</div>
			</div>
		</div>
	);
}
