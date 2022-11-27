import './signupBanner.scss';
// @ts-ignore
import ImageSrc from '../../../assets/signup.png';

export default function SignupBanner() {
	return (
		<div className="signup-banner-container">
			<div>
				<h2>Get Started.</h2>
				<p>Join Us and let us take care of your car</p>
			</div>
			<img src={ImageSrc} alt="sign up banner" />
		</div>
	);
}
