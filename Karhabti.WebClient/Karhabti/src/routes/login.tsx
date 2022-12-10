import '../styles/login.scss';
import LoginContent from '../components/login/content/loginContent';
import LoginBanner from '../components/login/banner/loginBanner';

export default function Login() {
	return (
		<div className="login-container">
			<LoginContent />
			<LoginBanner />
		</div>
	);
}
