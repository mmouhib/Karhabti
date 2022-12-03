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
import React, { useState } from 'react';
import { ICarSubmitData } from "../../../types/types";

import CustomInput from '../input/input';

interface IModalProps {
	modalState: boolean;
	setModalState: (arg: boolean) => void;
	data: ICarSubmitData;
	setData: (arg: ICarSubmitData) => void;
	modalTitle: string;
	carBodyList: boolean[];
	carBodySetter: (arg: boolean[]) => void;
}

const flexStyle: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

export default function CustomModal(props: IModalProps) {
	const [inputValue, setInputValue] = useState<string>(props.data.BodyType);

	const closeModal = (): void => {
		if (props.data.BodyType.length > 0) {
			props.carBodySetter(
				props.carBodyList.map(() => {
					return false;
				})
			);
		}
		setInputValue(props.data.BodyType);
		props.setModalState(false);
	};

	const onModalSaveClose = (): void => {
		if (props.data.BodyType.length > 0) {
			props.setData({ ...props.data, BodyType: inputValue });
		} else {
			props.carBodySetter(
				props.carBodyList.map(() => {
					return false;
				})
			);
		}
		setInputValue(props.data.BodyType);
		props.setModalState(false);
	};

	return (
		<Modal isOpen={props.modalState} onClose={closeModal}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{props.modalTitle}</ModalHeader>
				<ModalCloseButton />
				<ModalBody style={flexStyle}>
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
