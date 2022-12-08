import React from 'react';
import '../styles/profile.scss';
import UserSection from '../components/profile/userSection/userSection';
import ProfileNav from '../components/profile/nav/nav';
import CarData from '../components/profile/CarData/carData';
import { ICarSubmitData } from '../types/types';

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
		<div className="profile-container">
			<ProfileNav />
			<UserSection userData={userData} />
			<CarData carData={carData} />
		</div>
	);
}
