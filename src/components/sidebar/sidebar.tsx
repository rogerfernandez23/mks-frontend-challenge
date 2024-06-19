import { CartContext } from '@/hooks/useCartContext';
import { formatMoney } from '@/utils/formatMoney';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useContext } from 'react';

import {
  ContainerSidebar,
  ContentSideBar,
  HeaderSideBar,
  Content,
  CardProduct,
  ButtonQtd,
  TotalValue,
} from './styles';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  openModalOn: () => void;
}

const Sidebar = ({ isOpen, onClose, openModalOn }: SidebarProps) => {
  const {
    products,
    priceTotal,
    increaseQdt,
    decreaseQtd,
    removeProduct,
    clearCart,
  } = useContext(CartContext);

  const checkout = () => {
    onClose();
    clearCart();
    openModalOn();
  };

  return (
    <ContainerSidebar>
      <motion.div
        initial={{ x: '100%' }}
        animate={{ x: isOpen ? 0 : '100%' }}
        transition={{ type: 'tween', duration: 0.5 }}
      >
        <ContentSideBar>
          <HeaderSideBar>
            <h1>Carrinho</h1>
            <button onClick={onClose}>X</button>
          </HeaderSideBar>

          <Content>
            {products.length === 0 ? (
              <h1>Carrinho vazio</h1>
            ) : (
              <>
                {products &&
                  products.map((product) => (
                    <CardProduct key={product.id}>
                      <button
                        className="button-delete"
                        onClick={() => removeProduct(product.id)}
                      >
                        X
                      </button>
                      <Image
                        src={product.photo}
                        alt={product.name}
                        width={60}
                        height={60}
                        layout="intrinsic"
                      />

                      <p>{product.name}</p>

                      <ButtonQtd>
                        <h3>Qtd:</h3>
                        <div>
                          <button onClick={() => decreaseQtd(product.id)}>
                            -
                          </button>

                          <span>{product.quantity}</span>
                          <button onClick={() => increaseQdt(product.id)}>
                            +
                          </button>
                        </div>
                      </ButtonQtd>

                      <h2>{formatMoney(product.price)}</h2>
                    </CardProduct>
                  ))}
              </>
            )}
          </Content>

          {products.length > 0 && (
            <TotalValue>
              <div>
                <h1>TOTAL</h1>
                <h1>{formatMoney(priceTotal)}</h1>
              </div>
            </TotalValue>
          )}
        </ContentSideBar>

        {products.length > 0 && <button onClick={checkout}>COMPRAR</button>}
      </motion.div>
    </ContainerSidebar>
  );
};

export default Sidebar;
