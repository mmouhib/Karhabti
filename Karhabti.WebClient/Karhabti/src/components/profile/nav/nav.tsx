import './nav.scss';
import Logo from '../../_global/logo/logo';
import { useNavigate } from 'react-router-dom';

export default function ProfileNav() {
	const navigate = useNavigate();
	return (
		<nav className="profile-nav-container">
			<Logo />
			<p
				className="logout"
				onClick={() => {
					localStorage.clear();
					navigate('/');
				}}
			>
				Logout
			</p>
		</nav>
	);
}
