import React from "react";
import {
  getProductsBySubCategory,
  SubCategoryId,
} from "../../../../../../shared/data";
import HairDryerProducts from "../_components/hair-dryer-products";

export default function PhilipsHairDryerPage() {
  const philipsHairDryerProducts = getProductsBySubCategory(
    SubCategoryId.PhilipsHairDryer
  );

  return (
    <div className="container mx-auto py-8 pt-20">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          ফিলিপস হেয়ার ড্রায়ার (Philips Hair Dryer)
        </h1>
        <p className="text-lg text-gray-600">
          আধুনিক জীবনের জন্য নিরাপদ ও দ্রুত চুল শুকানোর সুবিধা
        </p>
      </div>

      <HairDryerProducts products={philipsHairDryerProducts} />
    </div>
  );
}
