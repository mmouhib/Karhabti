import './signupContent.scss';
import Logo from '../../_global/logo/logo';
import CustomInput from '../../_global/input/input';
import CustomDropdown from '../../_global/dropdown/dropdown';
import FormButton from '../../_global/formButton/formButton';
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IUserContext, userContext } from '../../../context/userContext';
import { dropdownContentLister } from '../../../static/functions';

/*
 * the 'dateFormatter' function formats the date string to the wanted one.
 * in order to submit it, the date should be like this format : "2019-01-06T17:16:40"
 * so this functions takes the day, month and year and formats it
 * */
export function dateFormatter(
	year: string,
	month: string,
	day: string
): string {
	let localDay: string;
	let localMonth: string;

	day.length == 1 ? (localDay = '0' + day) : (localDay = day);
	month.length == 1 ? (localMonth = '0' + month) : (localMonth = month);
	return `${year}-${localMonth}-${localDay}T17:16:40`;
}

export default function SignupContent() {
	const userDataContext: IUserContext = useContext(userContext);

	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [day, setDay] = useState<string>('10');
	const [month, setMonth] = useState<string>('10');
	const [year, setYear] = useState<string>('2000');

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
			birthDate: '2019-01-06T17:16:40',
			gender: 'male',
			avatar: '',
		});
		setConfirmPassword('');
		setDay('');
		setMonth('');
		setYear('');
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
						width="32%"
						label="day"
						list={dropdownContentLister(1, 32)}
						setValue={setDay}
					/>
					<CustomDropdown
						width="32%"
						label="month"
						list={dropdownContentLister(1, 13)}
						setValue={setMonth}
					/>
					<CustomDropdown
						width="36%"
						label="year"
						list={dropdownContentLister(1920, 2015)}
						setValue={setYear}
					/>
				</div>

				<div className="button-container">
					<Link to={'avatar'}>
						<FormButton width="100%" text="sign up" onClick={() => {}} />
					</Link>
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
