import './loginContent.scss';
import Logo from '../../_global/logo/logo';
// @ts-ignore
import LoginImage from '../../../assets/login.png';
import CustomInput from '../../_global/input/input';
import FormButton from '../../_global/formButton/formButton';

export default function LoginContent() {
	return (
		<div className="login-content-container">
			<div className="top-section">
				<Logo />
			</div>
			<div className="content-section">
				<div className="login-text">
					<img src={LoginImage} alt="login image" />
					<h2>Log In</h2>
					<p>Buckle Up! and let us take care of your car.</p>
				</div>

				<div className="form">
					<div className="input-container">
						<CustomInput
							width="60%"
							placeholder="Enter your email"
							type="email"
							value=""
							label="email"
							setValue={() => {}}
						/>
						<CustomInput
							width="60%"
							placeholder="Enter your password"
							type="password"
							value=""
							label="password"
							setValue={() => {}}
						/>
					</div>
					<div className="additions">
						<div className="remember-login">
							<input type="checkbox" />
							<p>remember my account</p>
						</div>

						<span>Reset Password</span>
					</div>
					<FormButton width="50%" text="Log In" />

					<p className="create-account">
						Don't have an account ? <span>Create One</span>
					</p>
				</div>
			</div>
		</div>
	);
}
