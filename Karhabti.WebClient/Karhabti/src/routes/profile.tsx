import React from 'react';
import UserSection from '../components/profile/userSection/userSection';
import ProfileNav from '../components/profile/nav/nav';
import CarDetails from '../components/profile/carDetails/carDetails';
import { ICarSubmitData, IUserSubmit } from '../types/types';

const containerStyle: React.CSSProperties = {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',
	backgroundColor: '#eeeffd',
	width: '100vw',
	height: '100vh',
	flexDirection: 'column',
	padding: '0 2vw 5vh 2vw',
};

const carData: ICarSubmitData = {
	Model: '',
	Power: 1,
	Year: 222,
	Color: '',
	EngineSize: 2,
	GasType: 'diesel',
	BodyType: '',
};

const userData: IUserSubmit = {
	username: 'deflect',
	firstName: 'mouhib',
	lastName: 'ouni',
	email: 'mouhib@gmail.com',
	password: 'xdd',
	birthDate: '2019-01-06',
	gender: 'male',
	avatar: '4',
};

export default function Profile() {
	return (
		<div style={containerStyle}>
			<ProfileNav />
			<UserSection data={userData} />
			<CarDetails data={carData} />
		</div>
	);
}
