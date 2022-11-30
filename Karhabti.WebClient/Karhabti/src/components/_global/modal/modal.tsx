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
import { useState } from 'react';
import CustomInput from '../input/input';

interface IModalProps {
	modalState: boolean;
	setModalState: (arg: boolean) => void;
	data: string;
	setData: (arg: string) => void;
	modalTitle: string;
	carBodyList: boolean[];
	carBodyResetter: (arg: boolean[]) => void;
}

const flexStyle: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
};

export default function CustomModal(props: IModalProps) {
	const [inputValue, setInputValue] = useState<string>(props.data);

	const closeModal = (): void => {
		if (inputValue.length < 0) {
			props.carBodyResetter(
				props.carBodyList.map(() => {
					return false;
				})
			);
		}
		setInputValue(props.data);
		props.setModalState(false);
	};

	const onModalSaveClose = (): void => {
		if (inputValue.length > 0) {
			props.setData(inputValue);
		} else {
			props.carBodyResetter(
				props.carBodyList.map(() => {
					return false;
				})
			);
		}
		setInputValue(props.data);
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
