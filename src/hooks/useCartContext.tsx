import { Product } from '@/types/interfaces';
import React, { createContext, ReactNode, useEffect, useState } from 'react';

interface CartContent {
  products: Product[];
  priceTotal: number;
  addProduct: (product: Product, emptyCart?: boolean) => void;
  increaseQdt: (productId: number) => void;
  decreaseQtd: (productId: number) => void;
  removeProduct: (productId: number) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContent>({
  products: [],
  priceTotal: 0,
  addProduct: () => {},
  increaseQdt: () => {},
  decreaseQtd: () => {},
  removeProduct: () => {},
  clearCart: () => {},
});

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<Product[]>([]);

  const priceTotal = products.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  useEffect(() => {
    localStorage.setItem('cart-mks', JSON.stringify(products));
  }, [products]);

  const addProduct = (product: Product, emptyCart?: boolean) => {
    if (emptyCart) {
      setProducts([product]);

      return;
    }

    const productInCart = products.some(
      (productCart) => productCart.id === product.id,
    );

    if (productInCart) {
      setProducts((item) =>
        item.map((productCart) =>
          productCart.id === product.id
            ? {
                ...productCart,
                quantity: productCart.quantity++,
              }
            : productCart,
        ),
      );
    } else {
      setProducts((item) => [...item, product]);
    }
  };

  const increaseQdt = (productId: number) => {
    setProducts((item) =>
      item.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  };

  const decreaseQtd = (productId: number) => {
    setProducts((item) =>
      item.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    );
  };

  const removeProduct = (productId: number) => {
    setProducts((item) => {
      const updatedProducts = item.filter(
        (product) => product.id !== productId,
      );
      localStorage.setItem('cart-mks', JSON.stringify(updatedProducts));
      return updatedProducts;
    });
  };

  const clearCart = () => {
    setProducts([]);
    localStorage.removeItem('cart-mks');
  };

  return (
    <CartContext.Provider
      value={{
        products,
        priceTotal,
        addProduct,
        increaseQdt,
        decreaseQtd,
        removeProduct,
        clearCart,
      }}
    >
      {' '}
      {children}
    </CartContext.Provider>
  );
};
