export interface IUserPostDto {
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	birthDate: Date;
}

export interface IUserGetDto {
	id: number;
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	birthDate: Date;
}

export interface ICarPostDto {
	model: string;
	power: number;
	year: number;
	color: string;
	engineSize: number;
	gasType: string;
	bodyType: string;
	userId: number;
}

export interface ICarGetDto {
	id: number;
	model: string;
	power: number;
	year: number;
	color: string;
	engineSize: number;
	gasType: string;
	bodyType: string;
	userId: number;
}
