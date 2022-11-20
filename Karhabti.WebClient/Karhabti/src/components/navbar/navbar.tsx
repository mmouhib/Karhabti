import './navbar.scss';

export default function Navbar() {
	return (
		<div className="navbar-container">
			<div className="nav-logo">
				<p>Karhabti</p>
			</div>
			<nav className="nav-links">
				<span className="navbar-item">About Us</span>
				<span className="navbar-item">Explore</span>
				<span className="navbar-item">Download</span>
			</nav>
		</div>
	);
}
