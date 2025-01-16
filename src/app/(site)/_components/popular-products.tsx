'use client';

import React from 'react';
import { getAllProducts } from '../../../../shared/data'; // Importing the function to get all products
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import bgImg from "../../../public/title-bg.jpg";

export default function PopularProducts() {
  const router = useRouter();

  // Get all products from categories
  const products = getAllProducts();
  // console.log(products);
  

  // Helper function to truncate description to 8 words
  const truncateDescription = (description: string) => {
    return description.split(' ').slice(0, 8).join(' ') + '...';
  };

  const handleCardClick = (id: string, path: string) => {
    router.push(`${path}/${id}`);
  };

  return (
    <section className="bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Title */}
        <div
          className="relative bg-cover bg-center bg-no-repeat rounded-r-full lg:w-[1000px]"
          style={{ backgroundImage: `url(${bgImg.src})` }}
        >
          <h2 className="text-center mb-8 text-2xl font-bold text-slate-100 border-b-2 py-10 bg-gradient-to-r from-green-700  bg-opacity-40">
          পপুলার পণ্য
          </h2>
        </div>


        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer group relative transform transition duration-300 ease-in-out hover:scale-105"
              onClick={() => handleCardClick(product.id, product.path)}
            >
              <Card className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 ease-in-out hover:shadow-2xl">
                {/* Image Section */}
                <div className="relative w-full h-60 overflow-hidden rounded-t-xl">
                  <Image
                    src={product.image}
                    alt={product.title}
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                    {product.subCategoryName}
                  </div>
                </div>

                {/* Card Content */}
                <CardHeader className="p-4 bg-gray-50">
                  <CardTitle className="text-xl font-semibold text-gray-800">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-600 mt-2">
                    {truncateDescription(product.description)}
                  </CardDescription>
                </CardHeader>

                {/* Price and Quantity */}
                <div className="px-4 py-2 bg-white">
                  <p className="text-sm font-medium text-gray-800">
                    Price: <span className="text-green-600">{product.price}৳</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Quantity: {product.quantity}
                  </p>
                </div>

                {/* Card Footer with Buttons */}
                <CardFooter className="flex justify-between gap-3 items-center px-6 py-3 bg-gray-50 rounded-b-xl">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-green-600 text-white border-green-600 hover:bg-green-700 hover:border-green-700 transition duration-200 ease-in-out"
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full bg-green-500 text-white hover:bg-green-600 transition duration-200 ease-in-out"
                  >
                    Buy Now
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}