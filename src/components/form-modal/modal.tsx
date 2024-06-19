import React from 'react';

import {
  ContainerModal,
  ContentModal,
  ButtonClose,
  ModalTitte,
} from './styles';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const Modal = ({ isOpen, onClose }: ModalProps) => {
  if (!isOpen) return;

  return (
    <ContainerModal onClick={onClose}>
      <ContentModal onClick={(event) => event?.stopPropagation()}>
        <ButtonClose onClick={onClose}>X</ButtonClose>
        <ModalTitte>Compra Realizada</ModalTitte>
        <p>Sua compra foi feita com sucesso!</p>
      </ContentModal>
    </ContainerModal>
  );
};

export default Modal;
