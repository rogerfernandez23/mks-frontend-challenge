import { CartContext } from '@/hooks/useCartContext';
import { Product } from '@/types/interfaces';
import { formatMoney } from '@/utils/formatMoney';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContext } from 'react';

import { CardContainer, ProductInfo, Button } from './styles';

export function ProductItem({ product }: { product: Product }) {
  const { addProduct } = useContext(CartContext);

  const addToCart = () => {
    addProduct({ ...product, quantity: 1 });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <CardContainer>
        <Image
          src={product.photo}
          alt={product.name}
          className="product-image"
          width={121}
          height={138}
        />
        <ProductInfo>
          <div>
            <h1>{product.name}</h1>
            <h2>{formatMoney(product.price)}</h2>
          </div>
          <p>{product.brand}</p>
          <p>{product.description}</p>
        </ProductInfo>

        <Button onClick={addToCart}>Comprar</Button>
      </CardContainer>
    </motion.div>
  );
}
