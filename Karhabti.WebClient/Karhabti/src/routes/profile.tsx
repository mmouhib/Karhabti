import React, { useEffect, useState } from 'react';
import '../styles/profile.scss';
import UserSection from '../components/profile/userSection/userSection';
import ProfileNav from '../components/profile/nav/nav';
import CarData from '../components/profile/CarData/carData';
import { ICarGetDto, IUserGetDto } from '../utils/api/Dtos';
import { getCarByOwnerId } from '../utils/api/api';

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

	const [carData, setCarData] = useState<ICarGetDto>({} as ICarGetDto);

	useEffect(() => {
		getCarByOwnerId(userData.id).then((res) => {
			setCarData(res.data);
			localStorage.setItem('car', JSON.stringify(res.data));
		});
	}, []);

	return (
		<div className="profile-container">
			<ProfileNav />
			<UserSection userData={userData} />
			<CarData carData={carData} />
		</div>
	);
}
