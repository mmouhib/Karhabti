import '../styles/gasFills.scss';
import GasFill from '../components/gasFills/GasFill/gasFill';
import AddIcon from '@mui/icons-material/Add';
import { IGasFillGetDto } from '../utils/api/Dtos';

const gasFillsList: IGasFillGetDto[] = [
	{
		id: 4,
		quantity: 1,
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
				<p>Click to add a gas fill</p>
			</div>
			<div className="items-container">
				{gasFillsList.length == 0 ? (
					<div className="empty-list">
						<span className="empty-title">No data !</span>
						<p>Your Gas Fills list is empty. add data to see the here</p>
					</div>
				) : (
					gasFillsList.map((element: IGasFillGetDto, index: number) => {
						return <GasFill id={index} key={index} data={element} />;
					})
				)}
			</div>
		</div>
	);
}
