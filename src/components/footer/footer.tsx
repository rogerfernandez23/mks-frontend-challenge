import { motion } from 'framer-motion';
import styled from 'styled-components';

const ContainerFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  width: 100%;
  height: 2.125rem;

  h2 {
    font-size: 0.914rem;
    font-weight: 400;
    color: black;
  }
`;

export default function Footer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <ContainerFooter>
        <h2>MKS sistemas© Todos os direitos reservados</h2>
      </ContainerFooter>
    </motion.div>
  );
}
