import './loginContent.scss';
import Logo from '../../_global/logo/logo';
// @ts-ignore
import LoginImage from '../../../assets/login.png';
import CustomInput from '../../_global/input/input';
import FormButton from '../../_global/formButton/formButton';
import { getUserAuth } from '../../../utils/api/api';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginContent() {
	const navigate = useNavigate();

	const [email, setEmail] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [emailError, setEmailError] = useState<boolean>(false);
	const [passwordError, setPasswordError] = useState<boolean>(false);

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
							label="email"
							value={email}
							setValue={setEmail}
						/>
						<CustomInput
							width="60%"
							placeholder="Enter your password"
							type="password"
							label="password"
							value={password}
							setValue={setPassword}
						/>
					</div>
					<div className="additions">
						<div className="remember-login">
							<input type="checkbox" />
							<p>remember my account</p>
						</div>

						<span>Reset Password</span>
					</div>
					<FormButton
						width="50%"
						text="Log In"
						onClick={() => {
							getUserAuth(email, password)
								.then((r) => {
									localStorage.clear();
									localStorage.setItem('user', JSON.stringify(r.data));
									navigate('/profile');
								})
								.catch(() => {
									setEmailError(true);
									setPasswordError(true);
									alert('user not found');
								});
						}}
					/>

					<p className="create-account">
						Don't have an account ? <span>Create One</span>
					</p>
				</div>
			</div>
		</div>
	);
}
