import React from 'react';
import UserSection from '../components/profile/userSection/userSection';
import ProfileNav from '../components/profile/nav/nav';
import CarDetails from '../components/profile/carDetails/carDetails';
import { ICarSubmitData } from '../types/types';

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

export interface IUserProfileData {
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	birthDate: string;
	gender: string;
	avatar: string;
}

const carData: ICarSubmitData = {
	Model: '2010 ford mustang',
	Power: 1,
	Year: 2010,
	Color: 'Red',
	EngineSize: 2,
	GasType: 'diesel',
	BodyType: 'Suv',
};

const userData: IUserProfileData = {
	username: 'deflect',
	firstName: 'mouhib',
	lastName: 'ouni',
	email: 'mouhib@gmail.com',
	birthDate: '2019-01-06',
	gender: 'male',
	avatar: '4',
};

export default function Profile() {
	return (
		<div style={containerStyle}>
			<ProfileNav />
			<UserSection userData={userData} carData={carData} />
			<CarDetails data={carData} />
		</div>
	);
}
