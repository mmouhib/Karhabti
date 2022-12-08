import './ProfileButtons.scss';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import AddIcon from '@mui/icons-material/Add';
import SpeedIcon from '@mui/icons-material/Speed';

export default function ProfileButtons() {
	return (
		<div className="profile-buttons-section">
			<div className="gas-fills-buttons">
				<div className="button gas-fills-button">
					<span>Gas Fills</span>
					<LocalGasStationIcon />
				</div>
				<div className="button add-gas-button">
					<span>Add Gas</span>
					<AddIcon />
				</div>
			</div>
			<div className="mileage-buttons">
				<div className="button mileage-button">
					<span>Mileage</span>
					<SpeedIcon />
				</div>
				<div className="button add-mileage-button">
					<span>Add Mileage</span>
					<AddIcon />
				</div>
			</div>
		</div>
	);
}
