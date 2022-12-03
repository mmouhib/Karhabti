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
