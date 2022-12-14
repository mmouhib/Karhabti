import '../styles/gasFills.scss';
import AddIcon from '@mui/icons-material/Add';
import { IGasFillGetDto } from '../utils/api/Dtos';
import React, { useEffect, useState } from 'react';
import { getGasFillsByCarId } from '../utils/api/api';
import GasFillsModal from '../components/gasFills/modal/GasFillsModal';
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

export default function GasFills() {
	// @ts-ignore
	let car = JSON.parse(localStorage.getItem('car')).id;
	const [gasFills, setGasFills] = useState<IGasFillGetDto[]>([]);
	const [isOpen, setIsOpen] = useState<boolean>(false);

	useEffect(() => {
		getGasFillsByCarId(car).then((r) => setGasFills(r));
	}, []);

	return (
		<div className="gas-fills-container">
			<GasFillsModal open={isOpen} setOpen={setIsOpen} />
			<div className="left-side">
				<div
					className="add-button"
					onClick={() => {
						setIsOpen(true);
					}}
				>
					<AddIcon fontSize="large" />
				</div>
				<p>Click to add a gas fill</p>
			</div>
			{gasFills.length == 0 ? (
				<div className="empty-list">
					<span className="empty-title">No data !</span>
					<p>Your Gas Fills list is empty. add data to see the here</p>
				</div>
			) : (
				<TableContainer style={{ width: '70%' }}>
					<h1 className="gas-fills-table-header">Gas FIlls</h1>
					<Table variant="striped" colorScheme="blue" size={'lg'}>
						<TableCaption>Gas fills</TableCaption>
						<Thead>
							<Tr>
								<Th>#</Th>
								<Th>date</Th>
								<Th isNumeric>quantity</Th>
								<Th isNumeric>price</Th>
								<Th>unit</Th>
							</Tr>
						</Thead>

						<Tbody>
							{gasFills.map((element: IGasFillGetDto, index: number) => {
								// return <GasFill id={index} key={index} data={element} />;

								return (
									<Tr>
										<Td>{index}</Td>
										<Td>{element.date.substring(0, 10)}</Td>
										<Td isNumeric>{element.quantity}</Td>
										<Td isNumeric>{element.price}</Td>
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
								<Th isNumeric>price</Th>
								<Th>unit</Th>
							</Tr>
						</Tfoot>
					</Table>
				</TableContainer>
			)}
		</div>
	);
}
