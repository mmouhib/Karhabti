import './loginBanner.scss';
// @ts-ignore
import RedMada from '../../../assets/redMazda.png';

export default function LoginBanner() {
	return (
		<div className="login-banner-container">
			<div className="text">
				<h1>Welcome Back !</h1>
				<p>
					Welcome back! We're Happy to see you again. Please fill in your
					credentials.
				</p>
			</div>
			<img src={RedMada} alt="red mazda" />
		</div>
	);
}
