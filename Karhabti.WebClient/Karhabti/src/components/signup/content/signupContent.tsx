import './signupContent.scss';
import Logo from '../../_global/logo/logo';
import CustomInput from '../../_global/input/input';
import CustomDropdown from '../../_global/dropdown/dropdown';
import FormButton from '../../_global/formButton/formButton';

export default function SignupContent() {
	return (
		<div className="signup-content-container">
			<div className="logo-container">
				<Logo />
			</div>

			<div className="form">
				<h2>Sign Up</h2>
				<div className="input-container">
					<CustomInput
						label="First Name"
						width="50%"
						placeholder="enter your name"
						type="text"
						value=""
						setValue={() => {}}
					/>
					<CustomInput
						label="Last Name"
						width="50%"
						placeholder="enter your name"
						type="text"
						value=""
						setValue={() => {}}
					/>
				</div>

				<div className="input-container">
					<CustomInput
						label="Email"
						width="65%"
						placeholder="enter your email"
						type="email"
						value=""
						setValue={() => {}}
					/>
					<CustomDropdown
						width="35%"
						label="Gender"
						list={['male', 'female']}
					/>
				</div>

				<div className="input-container">
					<CustomInput
						label="First Name"
						width="50%"
						placeholder="enter your name"
						type="text"
						value=""
						setValue={() => {}}
					/>
					<CustomInput
						label="First Name"
						width="50%"
						placeholder="enter your name"
						type="text"
						value=""
						setValue={() => {}}
					/>
				</div>

				<div className="input-container">
					<CustomDropdown
						width="32%"
						label="day"
						list={['male', 'female']}
					/>
					<CustomDropdown
						width="32%"
						label="month"
						list={['male', 'female']}
					/>
					<CustomDropdown
						width="36%"
						label="year"
						list={['male', 'female']}
					/>
				</div>

				<div className="button-container">
					<FormButton width="60%" text="sign up" />
					<div className="clear-button">Clear</div>
				</div>

				<div className="bottom-section">
					<div className="line-break">
						<div className="line"></div>
						<span>Or</span>
						<div className="line"></div>
					</div>
					<p>
						Already a member? <span className="login-text">Log In</span>
					</p>
				</div>
			</div>
		</div>
	);
}
