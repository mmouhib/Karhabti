import {
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
} from '@chakra-ui/react';
import './gasFillsModal.scss';
import React, { useState } from 'react';
import CustomSlider from '../../carSubmit/carSubmitForm/slider/slider';
import CustomInput from '../../_global/input/input';
import { Switch } from '@chakra-ui/react';
import CustomDropdown from '../../_global/dropdown/dropdown';
import { dropdownContentLister } from '../../../static/functions';
import { IGasFillPostDto } from '../../../utils/api/Dtos';
import { addGasFill } from '../../../utils/api/api';
import {dateFormatter} from '../../../static/functions';

interface IGasFillModalProps {
	open: boolean;
	setOpen: (arg: boolean) => void;
}

export default function GasFillsModal({ open, setOpen }: IGasFillModalProps) {
	const [quantity, setQuantity] = useState(1);
	const [now, setNow] = useState(false);
	const [price, setPrice] = useState('');
	const [unit, setUnit] = useState<'liter' | 'gallon'>('liter');
	const [day, setDay] = useState<string>('');
	const [month, setMonth] = useState<string>('');
	const [year, setYear] = useState<string>('');

	const submitHandler = () => {
		const data: IGasFillPostDto = {
			quantity: quantity,
			date: now
				? `${new Date().getFullYear()}-${new Date().getUTCMonth()}-${new Date().getUTCDate()}T17:16:40`
				: dateFormatter(year, month, day),
			price: parseInt(price),
			unit: unit,
			// @ts-ignore
			carId: JSON.parse(localStorage.getItem('car')).id,
		};

		console.log(data);

		addGasFill(data);
	};

	const closeModal = (): void => setOpen(false);

	return (
		<Modal isOpen={open} onClose={closeModal}>
			<ModalOverlay />
			<ModalContent className="modal-content">
				<ModalHeader>Submit a Gas fill</ModalHeader>
				<ModalCloseButton />
				<ModalBody className="gas-fills-modal-section">
					<CustomSlider
						label={'quantity'}
						min={1}
						max={200}
						value={quantity}
						onChange={setQuantity}
					/>

					<CustomInput
						width="100%"
						placeholder={'price'}
						type="number"
						value={price}
						setValue={setPrice}
					/>

					<div className="now-section">
						<span>Now: </span>
						<Switch
							onChange={() => {
								setNow(!now);
							}}
						/>
					</div>

					{!now && (
						<div className="gas-fills-data-container">
							<CustomDropdown
								width="32%"
								label="day"
								list={dropdownContentLister(1, 32)}
								setValue={setDay}
							/>

							<CustomDropdown
								width="32%"
								label="month"
								list={dropdownContentLister(1, 13)}
								setValue={setMonth}
							/>
							<CustomDropdown
								width="36%"
								label="year"
								list={dropdownContentLister(2015, 2022)}
								setValue={setYear}
							/>
						</div>
					)}

					<div className="gas-fills-unit-section">
						<span>Liter</span>
						<Switch
							onChange={() => {
								unit == 'gallon' ? setUnit('liter') : setUnit('gallon');
							}}
						/>
						<span>Gallon</span>
					</div>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={closeModal}>
						Close
					</Button>
					<Button variant="ghost" onClick={submitHandler}>
						Submit
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
