import './ProfileButtons.scss';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AddIcon from '@mui/icons-material/Add';
import SpeedIcon from '@mui/icons-material/Speed';
import { useNavigate } from 'react-router-dom';

export default function ProfileButtons() {
	const navigate = useNavigate();

	return (
		<div className="profile-buttons-section">
			<div
				className="gas-fills-buttons"
				onClick={() => {
					navigate('/profile/gas-fills');
				}}
			>
				<div className="button gas-fills-button">
					<span>Gas Fills</span>
					<LocalGasStationIcon />
				</div>
				<div
					className="button add-gas-button"
					onClick={() => {
						navigate('/profile/add-gas');
					}}
				>
					<span>Add Gas</span>
					<AddIcon />
				</div>
			</div>
			<div
				className="mileage-buttons"
				onClick={() => {
					navigate('/profile/mileage');
				}}
			>
				<div className="button mileage-button">
					<span>Mileage</span>
					<SpeedIcon />
				</div>
				<div
					className="button add-mileage-button"
					onClick={() => {
						navigate('/profile/add-mileage');
					}}
				>
					<span>Add Mileage</span>
					<AddIcon />
				</div>
			</div>
		</div>
	);
}
