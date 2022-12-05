import './signupContent.scss';
import Logo from '../../_global/logo/logo';
import CustomInput from '../../_global/input/input';
import CustomDropdown from '../../_global/dropdown/dropdown';
import FormButton from '../../_global/formButton/formButton';
import { useState } from 'react';
import { addUser } from '../../../utils/api';
import { Link } from 'react-router-dom';

export function dropdownContentLister(min: number, max: number): string[] {
	let list: string[] = [];
	for (let index = min; index < max; index++) {
		list.push(index + '');
	}
	return list;
}

/*
 * the 'dateFormatter' function formats the date string to the wanted one.
 * in order to submit it, the date should be like this format : "2019-01-06T17:16:40"
 * so this functions takes the day, month and year and formats it
 * */
function dateFormatter(year: string, month: string, day: string): string {
	let localDay: string;
	let localMonth: string;

	day.length == 1 ? (localDay = '0' + day) : (localDay = day);
	month.length == 1 ? (localMonth = '0' + month) : (localMonth = month);
	return `${year}-${localMonth}-${localDay}T17:16:40`;
}

export default function SignupContent() {
	const [username, setUsername] = useState<string>('');
	const [firstName, setFirstName] = useState<string>('');
	const [lastName, setLastName] = useState<string>('');
	const [email, setEmail] = useState<string>('');
	const [gender, setGender] = useState<string>('');
	const [password, setPassword] = useState<string>('');
	const [confirmPassword, setConfirmPassword] = useState<string>('');
	const [day, setDay] = useState<string>('10');
	const [month, setMonth] = useState<string>('10');
	const [year, setYear] = useState<string>('2000');

	function submitHandler(): void {
		addUser({
			username: username,
			firstName: firstName,
			lastName: lastName,
			email: email,
			password: password,
			birthDate: dateFormatter(year, month, day),
			gender: gender,
		});
	}

	function clearFields(): void {
		setUsername('');
		setFirstName('');
		setLastName('');
		setEmail('');
		setGender('');
		setPassword('');
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
						value={firstName}
						setValue={setFirstName}
					/>
					<CustomInput
						label="Last Name"
						width="50%"
						placeholder="Enter your last name"
						type="text"
						value={lastName}
						setValue={setLastName}
					/>
				</div>

				<div className="input-container">
					<CustomInput
						label="Username"
						width="65%"
						placeholder="Enter your username"
						type="text"
						value={username}
						setValue={setUsername}
					/>
					<CustomDropdown
						width="35%"
						label="Gender"
						list={['male', 'female']}
						setValue={setGender}
					/>
				</div>

				<div className="input-container">
					<CustomInput
						label="Email"
						width="100%"
						placeholder="Enter your email"
						type="email"
						value={email}
						setValue={setEmail}
					/>
				</div>

				<div className="input-container">
					<CustomInput
						label="Password"
						width="50%"
						placeholder="Enter your password"
						type="text"
						value={password}
						setValue={setPassword}
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
						<FormButton
							width="60%"
							text="sign up"
							onClick={submitHandler}
						/>
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
