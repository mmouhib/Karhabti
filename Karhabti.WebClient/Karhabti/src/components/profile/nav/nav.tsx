import './nav.scss';
import Logo from '../../_global/logo/logo';
import { useNavigate } from 'react-router-dom';

export default function ProfileNav() {
	const navigate = useNavigate();

	function clickHandler() {
		localStorage.clear();
		navigate('/');
	}

	return (
		<nav className="profile-nav-container">
			<Logo />
			<p className="logout" onClick={clickHandler}>Logout</p>
		</nav>
	);
}
