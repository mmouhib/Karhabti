import './carSubmit.scss';
import CarBodySelection from '../../components/carSubmit/bodyChoice/bodySelect/carBodySelection';
import { useState } from 'react';
import CarSubmitForm from '../../components/carSubmit/carSubmitForm/carSubmitForm';
import CarDataContextProvider from '../../context/carDataContext';

export default function CarSubmit() {
	/*
	 * if this state is true the carBodySelection component will be rendered
	 * if not the carData form component will be rendered
	 */
	const [currentPage, setCurrentPage] = useState<boolean>(true);
	return (
		<div className="car-submit-container">
			<CarDataContextProvider>
				{currentPage ? (
					<CarBodySelection changePage={setCurrentPage} />
				) : (
					<CarSubmitForm changePage={setCurrentPage} />
				)}
			</CarDataContextProvider>
		</div>
	);
}
