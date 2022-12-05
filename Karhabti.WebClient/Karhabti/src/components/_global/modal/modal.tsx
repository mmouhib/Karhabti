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
import React, { useContext, useState } from 'react';
import CustomInput from '../input/input';
import { CarDataContext, ICarContext } from '../../../context/carDataContext';

interface IModalProps {
	modalState: boolean;
	setModalState: (arg: boolean) => void;
	modalTitle: string;
	carBodyList: boolean[];
	carBodySetter: (arg: boolean[]) => void;
}

export default function CustomModal(props: IModalProps) {
	const carContext: ICarContext = useContext(CarDataContext);

	const [inputValue, setInputValue] = useState<string>('');

	const closeModal = (): void => {
		props.setModalState(false);
		setInputValue('');
	};

	const onModalSaveClose = (): void => {
		if (inputValue.length == 0) {
			props.setModalState(false);
			props.carBodySetter(
				props.carBodyList.map(() => {
					return false;
				})
			);
		} else {
			carContext.setCarData({ ...carContext.carData, BodyType: inputValue });
		}
		closeModal();
	};

	return (
		<Modal isOpen={props.modalState} onClose={closeModal}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{props.modalTitle}</ModalHeader>
				<ModalCloseButton />
				<ModalBody display="flex" justifyContent="center">
					<CustomInput
						width="90%"
						placeholder="Enter your car's body type"
						type="text"
						value={inputValue}
						setValue={setInputValue}
					/>
				</ModalBody>

				<ModalFooter>
					<Button variant="ghost" onClick={closeModal}>
						Close
					</Button>
					<Button colorScheme="red" ml={1} onClick={onModalSaveClose}>
						Save
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
