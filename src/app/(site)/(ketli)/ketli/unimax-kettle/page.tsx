import React from 'react';
import { getProductsBySubCategory, SubCategoryId } from '../../../../../../shared/data';
import KetliProducts from '../_components/ketli-products';

export default function UnimaxKettlePage() {
  const unimaxKettleProducts = getProductsBySubCategory(SubCategoryId.UnimaxKettle);

  return (
    <div className="container mx-auto py-8 pt-20">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ইউনিম্যাক্স কেটলি (Unimax Kettle)
        </h1>
        <p className="text-lg text-gray-600">
          আধুনিক জীবনের জন্য নিরাপদ ও দ্রুত পানি গরম করার সুবিধা
        </p>
      </div>
      
      <KetliProducts products={unimaxKettleProducts} />
    </div>
  );
}
