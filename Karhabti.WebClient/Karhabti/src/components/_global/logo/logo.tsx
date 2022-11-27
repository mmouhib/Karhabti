import './logo.scss';
import CarRentalIcon from '@mui/icons-material/CarRental';
import { useNavigate } from 'react-router-dom';

export default function Logo() {
	const navigate = useNavigate();

	return (
		<div
			className="logo-container"
			onClick={() => {
				navigate('/');
			}}
		>
			<CarRentalIcon />
			<p>Karhabti</p>
		</div>
	);
}
