import axios from 'axios';
import { IUserSubmit } from '../types/types';

const userEndpoint: string = 'https://localhost:7129/api/user';
const carEndpoint: string = 'https://localhost:7129/api/car';

export async function getAllUsers() {
	const res = await axios.get(userEndpoint);
	return res.data;
}

export async function getAllCars() {
	const res = await axios.get(carEndpoint);
	return res.data;
}

export async function getUser(id: number) {
	const res = await axios.get(`https://localhost:7129/api/user/${id}`);
	return res.data;
}

export async function getCar(id: number) {
	const res = await axios.get(`https://localhost:7129/api/car/${id}`);
	return res.data;
}

export async function addUser(data: IUserSubmit) {
	axios.post(userEndpoint, data).then(() => {
		console.log('data submitted');
		console.log(getAllUsers());
	});
}
