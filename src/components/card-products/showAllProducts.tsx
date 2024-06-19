'use-client';

import { useDataProduct } from '@/services/api';
import SkeletonProduct from '@/styles/skeleton';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { clearTimeout } from 'timers';

import { ProductItem } from '../product-item/productItem';

const ContainerProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 5rem 10rem;
  background-color: #f9f9f9;

  @media (max-width: 1030px) {
    padding: 5rem 5rem;
  }
  @media (max-width: 870px) {
    padding: 5rem 4rem;
  }

  @media (max-width: 576px) {
    padding: 5rem 1rem;
  }
`;

const AllProducts = () => {
  const [showProducts, setShowProducts] = useState(false);
  const { data, isLoading } = useDataProduct();

  useEffect(() => {
    const countdown = setTimeout(() => {
      setShowProducts(true);
    }, 1000);

    return () => clearTimeout(countdown);
  }, []);

  if (isLoading || !showProducts) {
    return (
      <ContainerProducts>
        {[...Array(10)].map((__, index) => (
          <SkeletonProduct key={index} />
        ))}
      </ContainerProducts>
    );
  }

  return (
    <ContainerProducts>
      {data?.products.map((product) => (
        <div key={product.id}>
          <ProductItem product={product} />
        </div>
      ))}
    </ContainerProducts>
  );
};

export default AllProducts;
