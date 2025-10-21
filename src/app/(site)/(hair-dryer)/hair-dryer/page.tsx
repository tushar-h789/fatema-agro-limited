import React from "react";
import { getProductsByCategory, CategoryId } from "../../../../../shared/data";
import HairDryerProducts from "./_components/hair-dryer-products";

export default function HairDryerPage() {
  const hairDryerProducts = getProductsByCategory(CategoryId.HairDryer);

  return (
    <div className="container mx-auto py-8 pt-20">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          হেয়ার ড্রায়ার (Hair Dryer)
        </h1>
        <p className="text-lg text-gray-600">
          আধুনিক জীবনের জন্য নিরাপদ ও দ্রুত চুল শুকানোর সুবিধা
        </p>
      </div>

      <HairDryerProducts products={hairDryerProducts} />
    </div>
  );
}
