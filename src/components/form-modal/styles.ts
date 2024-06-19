import styled from 'styled-components';

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;

  p {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1rem;
    color: #2c2c2c;
  }
`;

export const ContentModal = styled.div`
  position: relative;
  background: white;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  width: 1.5rem;
  height: 1.5rem;
  text-align: center;
  border-radius: 50%;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 0.7rem;
  font-weight: 400;
  line-height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  padding: 5px;
  display: flex;

  &:hover {
    opacity: 0.75;
  }
`;

export const ModalTitte = styled.h1`
  margin-bottom: 20px;
  color: #0f52ba;
  font-weight: 700;
  font-size: 1.6rem;
  line-height: 2.057rem;
  width: 100%;
  padding-left: 1rem;
`;
