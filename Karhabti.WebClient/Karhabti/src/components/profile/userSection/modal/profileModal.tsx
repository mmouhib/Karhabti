import './profileModal.scss';
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
import { deleteUser } from '../../../../utils/api/api';
import { useNavigate } from 'react-router-dom';

interface IModalProps {
	isOpen: boolean;
	setIsOpen: (arg: boolean) => void;
}

export default function ProfileModal({ isOpen, setIsOpen }: IModalProps) {
	const navigate = useNavigate();

	const closeModal = (): void => {
		setIsOpen(false);
	};
	return (
		<Modal isOpen={isOpen} onClose={closeModal}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>Delete account</ModalHeader>
				<ModalCloseButton />
				<ModalBody>
					Are you sure you want to delete your account ?
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="red" mr={3} onClick={closeModal}>
						Close
					</Button>
					<Button
						variant="ghost"
						onClick={() => {
							// @ts-ignore
							deleteUser(JSON.parse(localStorage.getItem('user')).id)
								.then(() => {
									localStorage.clear();
									navigate('/');
								})
								.catch(() => alert('error'));
						}}
					>
						Delete
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
}
