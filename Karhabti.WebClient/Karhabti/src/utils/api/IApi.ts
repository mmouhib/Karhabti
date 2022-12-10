import { ICarPostDto, IUserPostDto } from './Dtos';

export default interface IApi {
	addUser: (data: IUserPostDto) => Promise<void>;
	getUserAuth: (email: string, password: string) => Promise<void>;
	addCar: (data: ICarPostDto) => Promise<void>;
	getCarByUser: (id: number) => Promise<void>;
	getCarGasFills: (id: number) => Promise<void>;
	getCarMileages: (id: number) => Promise<void>;
}
