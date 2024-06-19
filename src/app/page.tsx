'use-client';

import AllProducts from '@/components/card-products/showAllProducts';
import Modal from '@/components/form-modal/modal';
import Header from '@/components/header/header';
import Sidebar from '@/components/sidebar/sidebar';
import React, { useState } from 'react';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setShowModal(true);
  };

  const openModal = () => {
    setShowModal(false);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Header openModalOn={openModal} />
      <AllProducts />
      <Sidebar isOpen={isOpen} onClose={closeSidebar} openModalOn={openModal} />
      <Modal isOpen={showModal} onClose={closeModal} />
    </div>
  );
}
