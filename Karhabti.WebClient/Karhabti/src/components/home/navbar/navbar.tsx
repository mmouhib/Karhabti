import './navbar.scss';
import Logo from '../../_global/logo';

export default function Navbar() {
	return (
		<div className="navbar-container">
			<div className="nav-logo">
				<Logo />
			</div>
			<nav className="nav-links">
				<span className="navbar-item">About Us</span>
				<span className="navbar-item">Explore</span>
				<span className="navbar-item">Download</span>
			</nav>
			<div className="auth_section">
				<span className="navbar-login">Log In</span>
				<div className="navbar-signup">Register</div>
			</div>
		</div>
	);
}
