import React from 'react';
import { getProductById } from './actions';
import { getProductsBySubCategory, Product } from '../../../../../../../shared/data';
import SorisaTelDetails from '../_components/sorisa-tel-details';

export default async function ProductDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  // Fetch the product details using the provided ID
  const product: Product | null = await getProductById(params.id);

  // Handle product not found
  if (!product) {
    return (
      <div className="container mx-auto my-10 text-center">
        <h1 className="text-3xl font-bold">Product Not Found</h1>
        <p className="mt-4 text-gray-500">
          Sorry, we could not find the product you are looking for.
        </p>
      </div>
    );
  }

  // Fetch related products
  const relatedProducts = getProductsBySubCategory(product.subCategoryId).filter(
    (relatedProduct) => relatedProduct.id !== product.id
  );

  return (
    <SorisaTelDetails product={product} relatedProducts={relatedProducts} />
  );
}
