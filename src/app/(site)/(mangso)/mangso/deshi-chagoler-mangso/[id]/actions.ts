"use server";

import { getAllProducts, Product } from "../../../../../../../shared/data";


class ProductNotFoundError extends Error {
  constructor(id: string) {
    super(`Product with ID "${id}" not found`);
    this.name = "ProductNotFoundError";
  }
}

export async function getProductById(id: string): Promise<Product> {
  if (!id) {
    throw new Error("Product ID is required");
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  const product = getAllProducts().find((p) => p.id === id);

  if (!product) {
    throw new ProductNotFoundError(id); // Use the custom error class here
  }

  // Return the found product
  return product;
}
