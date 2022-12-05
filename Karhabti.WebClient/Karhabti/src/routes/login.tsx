import LoginContent from '../components/login/content/loginContent';
import LoginBanner from '../components/login/banner/loginBanner';

const containerStyle = {
	width: '100vw',
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

export default function Login() {
	return (
		<div style={containerStyle}>
			<LoginContent />
			<LoginBanner />
		</div>
	);
}
