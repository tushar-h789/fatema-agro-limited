import { getProductById as getProductByIdFromData, Product } from '../../../../../../../shared/data';

export async function getProductById(id: string): Promise<Product | null> {
  // Simulate async operation
  return new Promise((resolve) => {
    setTimeout(() => {
      const product = getProductByIdFromData(id);
      resolve(product || null);
    }, 100);
  });
}
