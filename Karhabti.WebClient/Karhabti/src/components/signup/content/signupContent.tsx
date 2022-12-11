import './signupContent.scss';
import Logo from '../../_global/logo/logo';
import CustomInput from '../../_global/input/input';
import CustomDropdown from '../../_global/dropdown/dropdown';
import FormButton from '../../_global/formButton/formButton';
import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IUserContext, userContext } from '../../../context/userContext';
import {
	dateFormatter,
	dropdownContentLister,
} from '../../../static/functions';

export default function SignupContent() {
	const navigate = useNavigate();

	const userDataContext: IUserContext = useContext(userContext);

	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [day, setDay] = useState<string>('');
	const [month, setMonth] = useState<string>('');
	const [year, setYear] = useState<string>('');

	const [firstNameError, setFirstNameError] = useState<boolean>(false);
	const [lastNameError, setLastNameError] = useState<boolean>(false);
	const [usernameError, setUsernameError] = useState<boolean>(false);
	const [dayError, setDayError] = useState<boolean>(false);
	const [monthError, setMonthError] = useState<boolean>(false);
	const [yearError, setYearError] = useState<boolean>(false);
	const [passwordError, setPasswordError] = useState<boolean>(false);
	const [confirmPasswordError, setConfirmPasswordError] =
		useState<boolean>(false);
	const [genderError, setGenderError] = useState<boolean>(false);
	const [emailError, setEmailError] = useState<boolean>(false);

	function formValidator() {
		let res: boolean = true;

		if (userDataContext.userData.firstName == '') {
			setFirstNameError(true);
			res = false;
		}

		if (userDataContext.userData.lastName == '') {
			setLastNameError(true);
			res = false;
		}

		if (userDataContext.userData.username == '') {
			setUsernameError(true);
			res = false;
		}

		if (
			userDataContext.userData.gender == '' ||
			userDataContext.userData.gender == '0'
		) {
			setGenderError(true);
			res = false;
		}

		if (
			!userDataContext.userData.email
				.toLowerCase()
				.match(
					/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				) ||
			userDataContext.userData.email == ''
		) {
			setEmailError(true);
			res = false;
		}

		if (userDataContext.userData.password == '') {
			setPasswordError(true);
			res = false;
		}

		if (
			confirmPassword != userDataContext.userData.password ||
			confirmPassword == ''
		) {
			setConfirmPasswordError(true);
			res = false;
		}

		if (day == '' || day == '0') {
			setDayError(true);
			res = false;
		}

		if (month == '' || month == '0') {
			setMonthError(true);
			res = false;
		}
		if (year == '' || year == '0') {
			setYearError(true);
			res = false;
		}

		return res;
	}

	/*
	 * change the birthDate field in the userContext whenever
	 * one of the date (year, month, day) data changes
	 * */
	useEffect(() => {
		userDataContext.setUserData({
			...userDataContext.userData,
			birthDate: dateFormatter(year, month, day),
		});
	}, [day, month, year]);

	function clearFields(): void {
		userDataContext.setUserData({
			username: '',
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			birthDate: '',
			gender: '',
			avatar: '',
		});
		setConfirmPassword('');
		setDay('');
		setMonth('');
		setYear('');
	}

	function validateSubmit() {
		let res = formValidator();

		setInterval(() => {
			setFirstNameError(false);
			setLastNameError(false);
			setUsernameError(false);
			setDayError(false);
			setMonthError(false);
			setYearError(false);
			setPasswordError(false);
			setConfirmPasswordError(false);
			setGenderError(false);
			setEmailError(false);
		}, 2000);

		if (res) {
			navigate('/signup/avatar');
		}
	}

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
						placeholder="Enter your first name"
						type="text"
						value={userDataContext.userData.firstName}
						error={firstNameError}
						setValue={(arg: string) => {
							userDataContext.setUserData({
								...userDataContext.userData,
								firstName: arg,
							});
						}}
					/>
					<CustomInput
						label="Last Name"
						width="50%"
						placeholder="Enter your last name"
						type="text"
						error={lastNameError}
						value={userDataContext.userData.lastName}
						setValue={(arg: string) => {
							userDataContext.setUserData({
								...userDataContext.userData,
								lastName: arg,
							});
						}}
					/>
				</div>

				<div className="input-container">
					<CustomInput
						label="Username"
						width="65%"
						placeholder="Enter your username"
						error={usernameError}
						type="text"
						value={userDataContext.userData.username}
						setValue={(arg: string) => {
							userDataContext.setUserData({
								...userDataContext.userData,
								username: arg,
							});
						}}
					/>
					<CustomDropdown
						error={genderError}
						width="35%"
						label="Gender"
						list={['male', 'female']}
						setValue={(arg: string) => {
							userDataContext.setUserData({
								...userDataContext.userData,
								gender: arg,
							});
						}}
					/>
				</div>

				<div className="input-container">
					<CustomInput
						error={emailError}
						label="Email"
						width="100%"
						placeholder="Enter your email"
						type="email"
						value={userDataContext.userData.email}
						setValue={(arg: string) => {
							userDataContext.setUserData({
								...userDataContext.userData,
								email: arg,
							});
						}}
					/>
				</div>

				<div className="input-container">
					<CustomInput
						error={passwordError}
						label="Password"
						width="50%"
						placeholder="Enter your password"
						type="text"
						value={userDataContext.userData.password}
						setValue={(arg: string) => {
							userDataContext.setUserData({
								...userDataContext.userData,
								password: arg,
							});
						}}
					/>
					<CustomInput
						error={confirmPasswordError}
						label="Confirm"
						width="50%"
						placeholder="Confirm your password"
						type="text"
						value={confirmPassword}
						setValue={setConfirmPassword}
					/>
				</div>

				<div className="input-container">
					<CustomDropdown
						error={dayError}
						width="32%"
						label="day"
						list={dropdownContentLister(1, 32)}
						setValue={setDay}
					/>
					<CustomDropdown
						error={monthError}
						width="32%"
						label="month"
						list={dropdownContentLister(1, 13)}
						setValue={setMonth}
					/>
					<CustomDropdown
						error={yearError}
						width="36%"
						label="year"
						list={dropdownContentLister(1920, 2015)}
						setValue={setYear}
					/>
				</div>

				<div className="button-container">
					<FormButton
						width="80%"
						text="sign up"
						onClick={validateSubmit}
					/>
					<div
						className="clear-button"
						onClick={() => {
							clearFields();
						}}
					>
						Clear
					</div>
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
