'use client';

import React from 'react';
import { Card, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { getProductsByCategory, CategoryId } from '../../../../../../shared/data';

export default function GurProducts() {
  const router = useRouter();
  const categoryId = CategoryId.Jaggery; // "Jaggery" ক্যাটাগরি নির্বাচন

  // ফাংশন থেকে সকল গুড়ের পণ্য লোড করা
  const gurProducts = getProductsByCategory(categoryId);

  if (gurProducts.length === 0) {
    return <p className="text-center my-6">কিছু সমস্যা হয়েছে। পণ্য পাওয়া যায়নি।</p>;
  }

  // Handler to navigate to the product details page
  const handleCardClick = (id: string) => {
    router.push(`/gur/khejur-gur/${id}`);
  };

  return (
    <section>
      <div>
        <h2 className='text-center my-6 text-xl font-semibold border-b pb-2 shadow-md'>
          খেজুর গুড়
        </h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-3'>
          {gurProducts.map(product => (
            <div key={product.id} className='cursor-pointer' onClick={() => handleCardClick(product.id)}>
              <Card className='hover:shadow-lg transition-shadow duration-300'>
                {/* Image Section */}
                <div className='relative w-full h-48'>
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className='object-cover rounded-t-lg'
                  />
                </div>

                {/* Card Content */}
                <CardHeader>
                  <CardTitle>{product.title}</CardTitle>
                  <CardDescription>
                    {product.description.split(' ').slice(0, 8).join(' ') + '...'}
                  </CardDescription>
                </CardHeader>

                <div className='px-4 py-2'>
                  <p className='text-sm font-medium'>Price: {product.price}৳</p>
                  <p className='text-sm text-gray-500'>Quantity: {product.quantity}</p>
                </div>

                {/* Card Footer with Buttons */}
                <CardFooter className='flex justify-between p-4'>
                  <Button variant='solid' size='sm'>
                    Add to Cart
                  </Button>
                  <Button variant='solid' size='sm'>
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
