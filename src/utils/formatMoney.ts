export const formatMoney = (value: number): string => {
  return `R$${Intl.NumberFormat('pt-br', {
    currency: 'BRL',
  }).format(value)}`;
};
