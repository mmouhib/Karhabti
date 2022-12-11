import React from 'react';
import '../styles/profile.scss';
import UserSection from '../components/profile/userSection/userSection';
import ProfileNav from '../components/profile/nav/nav';
import CarData from '../components/profile/CarData/carData';
import {  IUserGetDto } from '../utils/api/Dtos';

export interface IUserProfileData {
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	birthDate: string;
	gender: string;
	avatar: string;
}

export default function Profile() {
	// @ts-ignore
	const userData: IUserGetDto = JSON.parse(localStorage.getItem('user'));

	return (
		<div className="profile-container">
			<ProfileNav />
			<UserSection userData={userData} />
			<CarData userId={userData.id} />
		</div>
	);
}
