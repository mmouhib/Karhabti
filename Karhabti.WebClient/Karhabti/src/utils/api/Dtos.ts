export interface IUserPostDto {
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	birthDate: string;
	gender: string;
	avatar: string;
}

export interface IUserGetDto extends IUserPostDto {
	id: number;
}

export interface ICarPostDto {
	Model: string;
	Power: number;
	Year: number;
	Color: string;
	EngineSize: number;
	GasType: 'gasoline' | 'diesel';
	BodyType: string;
	userId: number;
}

export interface ICarGetDto extends ICarPostDto {
	id: number;
}

export interface IGasFillPostDto {
	quantity: number;
	date: string;
	price: number;
	unit: string;

	carId: number
}

export interface IGasFillGetDto extends IGasFillPostDto {
	id: number;
}
