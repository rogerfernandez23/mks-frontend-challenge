import { ProductResponse } from '@/types/interfaces';
import { useQuery } from '@tanstack/react-query';

const fetchProducts = async (): Promise<ProductResponse> => {
  const url = process.env.PUBLIC_URL_ACESS as string;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error('Not response from server');
  }

  return await response.json();
};

export function useDataProduct() {
  const query = useQuery({
    queryFn: fetchProducts,
    queryKey: ['product-data'],
  });

  return query;
}
