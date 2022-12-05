export default interface IHomeFeatures {
	icon: any;
	title: string;
	text: string;
}

export interface ICarSubmitData {
	Model: string;
	Power: number;
	Year: number;
	Color: string;
	EngineSize: number;
	GasType: 'gasoline' | 'diesel';
	BodyType: string;
}

export interface IUserSubmit {
	username: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	birthDate: string;
	gender: string;
	avatar: string;
}
