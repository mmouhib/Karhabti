import '../styles/mileage.scss';
import AddIcon from '@mui/icons-material/Add';
import { IMileageGetDto } from '../utils/api/Dtos';
import React, { useEffect, useState } from 'react';
import { getMileagesByCarId } from '../utils/api/api';
import {
	Table,
	Thead,
	Tbody,
	Tfoot,
	Tr,
	Th,
	Td,
	TableCaption,
	TableContainer,
} from '@chakra-ui/react';
import MileageModal from '../components/mileage/modal/mileageModal';

export default function Mileage() {
	// @ts-ignore
	let car = JSON.parse(localStorage.getItem('car')).id;
	const [mileage, setMileage] = useState<IMileageGetDto[]>([]);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		getMileagesByCarId(car).then((r) => setMileage(r));
	}, []);

	return (
		<div className="gas-fills-container">
			<MileageModal open={isOpen} setOpen={setIsOpen} />
			<div className="left-side">
				<div
					className="add-button"
					onClick={() => {
						setIsOpen(true);
					}}
				>
					<AddIcon fontSize="large" />
				</div>
				<p>Click to add a Mileage</p>
			</div>
			{mileage.length == 0 ? (
				<div className="empty-list">
					<span className="empty-title">No data !</span>
					<p>Your Gas Fills list is empty. add data to see the here</p>
				</div>
			) : (
				<TableContainer style={{ width: '50%' }}>
					<h1 className="gas-fills-table-header">Mileages</h1>
					<Table variant="striped" colorScheme="blue" size={'lg'}>
						<TableCaption>Mileages</TableCaption>
						<Thead>
							<Tr>
								<Th>#</Th>
								<Th>date</Th>
								<Th isNumeric>quantity</Th>
								<Th>unit</Th>
							</Tr>
						</Thead>

						<Tbody>
							{mileage.map((element: IMileageGetDto, index: number) => {
								// return <GasFill id={index} key={index} data={element} />;

								return (
									<Tr>
										<Td>{index}</Td>
										<Td>{element.date.substring(0, 10)}</Td>
										<Td isNumeric>{element.quantity}</Td>
										<Td isNumeric>{element.unit}</Td>
									</Tr>
								);
							})}
						</Tbody>

						<Tfoot>
							<Tr>
								<Th>#</Th>
								<Th>date</Th>
								<Th isNumeric>quantity</Th>
								<Th>unit</Th>
							</Tr>
						</Tfoot>
					</Table>
				</TableContainer>
			)}
		</div>
	);
}
