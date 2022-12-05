import SignupBanner from '../components/signup/banner/signupBanner';
import SignupContent from '../components/signup/content/signupContent';

const containerStyle = {
	width: '100vw',
	height: '100vh',
	padding: '10px',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
};

export default function Signup() {
	return (
		<div style={containerStyle}>
			<SignupBanner />
			<SignupContent />
		</div>
	);
}
