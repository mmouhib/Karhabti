import './nav.scss';
import Logo from '../../_global/logo/logo';

export default function ProfileNav() {
	return (
		<nav className="profile-nav-container">
			<Logo />
			<p>Logout</p>
		</nav>
	);
}
