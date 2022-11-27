import './navbar.scss';
import Logo from '../../_global/logo/logo';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
	const navigate = useNavigate();

	return (
		<div className="navbar-container">
			<Logo />
			<nav className="nav-links">
				<span className="navbar-item">About Us</span>
				<span className="navbar-item">Explore</span>
				<span className="navbar-item">Download</span>
			</nav>
			<div className="auth_section">
				<span
					className="navbar-login"
					onClick={() => {
						navigate('/login');
					}}
				>
					Log In
				</span>
				<div
					className="navbar-signup"
					onClick={() => {
						navigate('/signup');
					}}
				>
					Register
				</div>
			</div>
		</div>
	);
}
