import CarBodySelection from '../components/carSubmit/bodyChoice/bodySelect/carBodySelection';
import { useState } from 'react';
import CarSubmitForm from '../components/carSubmit/carSubmitForm/carSubmitForm';
import CarDataContextProvider from '../context/carDataContext';

const containerStyle = {
	width: '100vw',
	height: '100vh',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	backgroundColor: '#f1f5f9',
};

export default function CarSubmit() {
	// 'currentPage' is here to help us toggle between the two components
	const [currentPage, setCurrentPage] = useState<boolean>(true);
	return (
		<div style={containerStyle}>
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
