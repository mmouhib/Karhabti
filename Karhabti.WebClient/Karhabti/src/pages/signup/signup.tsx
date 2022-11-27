import './signup.scss';
import SignupBanner from '../../components/signup/banner/signupBanner';
import SignupContent from '../../components/signup/content/signupContent';

export default function Signup() {
	return (
		<div className="sign-up-container">
			<SignupBanner />
			<SignupContent />
		</div>
	);
}
