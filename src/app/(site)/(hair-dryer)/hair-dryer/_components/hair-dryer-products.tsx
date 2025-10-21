'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '../../../../../../shared/data';

interface HairDryerProductsProps {
  products: Product[];
}

export default function HairDryerProducts({ products }: HairDryerProductsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div className="relative h-64">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {product.title}
            </h3>
            <p className="text-gray-600 mb-4 line-clamp-3">
              {product.description.split('\n')[0]}
            </p>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold text-green-600">
                ৳{product.price}
              </span>
              <span className="text-sm text-gray-500">
                {product.quantity}
              </span>
            </div>
            <Link
              href={`/hair-dryer/philips-hair-dryer/${product.id}`}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-200 text-center block"
            >
              বিস্তারিত দেখুন
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
