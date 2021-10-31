import React from 'react';
import Modal from 'react-modal';

interface ModalProps {
    modalIsOpen: boolean
    setIsOpen: Function
}

const ItemModal: React.FC<ModalProps> = ({modalIsOpen, setIsOpen}) => {

    const openModal = () => {
        setIsOpen(true)
    }

    const closeModal = () => {
        setIsOpen(false)
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel={"Example"}
            className={'w-1000 h-100'}
        >
            <h1>Yo</h1>
        </Modal>
    );
};

export default ItemModal;