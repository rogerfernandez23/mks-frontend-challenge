'use client';

import { styled } from 'styled-components';

import { CartIndex } from './cart-index';

// interface HeaderProps {}

const HeaderTag = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 80px;
  background-color: #0f52ba;
  gap: 5px;
  width: 100vw;
  height: 101px;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  width: 400px;
  gap: 8px;

  h1 {
    font-size: 40px;
    font-weight: bold;
    color: white;
  }

  p {
    font-size: 20px;
    color: white;
    margin-top: 20px;
    font-weight: 300;
  }
`;

export default function Header() {
  return (
    <HeaderTag>
      <Logo>
        <h1>MKS</h1>
        <p>Sistemas</p>
      </Logo>
      <CartIndex />
    </HeaderTag>
  );
}
