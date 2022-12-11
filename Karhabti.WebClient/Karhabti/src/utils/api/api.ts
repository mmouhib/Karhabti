import axios from 'axios';
import { ICarPostDto, IGasFillPostDto, IUserPostDto } from './Dtos';

const userEndpoint: string = 'https://localhost:7129/api/user';
const carEndpoint: string = 'https://localhost:7129/api/car';
const gasFillsEndpoint: string = 'https://localhost:7129/api/gas';
const mileageEndpoint: string = 'https://localhost:7129/api/mileage';

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

export async function addUser(data: IUserPostDto) {
	await axios.post(userEndpoint, data).then((r) => {
		localStorage.clear();
		localStorage.setItem('user', JSON.stringify(r.data));
	});
}

export async function addCar(data: ICarPostDto): Promise<void> {
	console.log(data);
	axios.post(carEndpoint, data).then(() => {
		console.log('car submitted');
	});
}

export async function addGasFill(data: IGasFillPostDto): Promise<void> {
	console.log(data);
	axios.post(gasFillsEndpoint, data).then(() => {
		console.log('gas fill submitted');
	});
}

export async function getUserAuth(email: string, password: string) {
	let res = await axios.get(
		`https://localhost:7129/api/user/auth?email=${email}&password=${password}`
	);
	return res;
}
