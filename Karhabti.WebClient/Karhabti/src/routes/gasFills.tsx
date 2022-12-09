import '../styles/gasFills.scss';
import { IGasFill } from '../types/types';
import GasFill from '../components/gasFills/GasFill/gasFill';
import AddIcon from '@mui/icons-material/Add';

const gasFillsList: IGasFill[] = [
	{
		quantity: 1,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
	{
		quantity: 5,
		date: '18/03/2022',
		price: 2,
		unit: 'liter',
	},
];

export default function GasFills() {
	return (
		<div className="gas-fills-container">
			<div className="left-side">
				<div className="add-button">
					<AddIcon fontSize="large" />
				</div>
			</div>
			<div className="items-container">
				{gasFillsList.length == 0 ? (
					<div className="empty-list">
						<span className="empty-title">No data !</span>
						<p>Your Gas Fills list is empty. add data to see the here</p>
					</div>
				) : (
					gasFillsList.map((element: IGasFill, index: number) => {
						return <GasFill id={index} key={index} data={element} />;
					})
				)}
			</div>
		</div>
	);
}
