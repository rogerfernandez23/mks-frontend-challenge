import { CartIcon } from '@/components/icon-cart';
import { styled } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: white;
  width: 90px;
  height: 45px;
  border-radius: 6px;
  gap: 10px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export function CartIndex() {
  return (
    <Container>
      <CartIcon />
      <p>0</p>
    </Container>
  );
}
