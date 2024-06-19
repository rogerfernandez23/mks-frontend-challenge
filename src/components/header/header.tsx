'use client';

import Sidebar from '@/components/sidebar/sidebar';
import { CartContext } from '@/hooks/useCartContext';
import { motion } from 'framer-motion';
import React, { useContext, useState } from 'react';

import { HeaderTag, Logo, Card } from './styles';

interface HeaderProps {
  openModalOn: () => void;
}

export const Header = ({ openModalOn }: HeaderProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { products } = useContext(CartContext);

  const sidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <HeaderTag>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'tween', duration: 0.5 }}
      >
        <Logo>
          <h1>MKS</h1>
          <h3>Sistemas</h3>
        </Logo>
      </motion.div>

      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ type: 'tween', duration: 0.5 }}
      >
        <Card onClick={sidebarToggle}>
          <span>{products.length > 0 ? products.length : 0}</span>
        </Card>
      </motion.div>

      <Sidebar
        isOpen={sidebarOpen}
        onClose={sidebarToggle}
        openModalOn={openModalOn}
      />
    </HeaderTag>
  );
};

export default Header;
