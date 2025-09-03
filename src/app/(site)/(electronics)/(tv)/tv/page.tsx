"use client";

import Image from "next/image";
import Link from "next/link";
import {
  CategoryId,
  getProductsWithSizeSorted,
  Product,
} from "../../../../../../shared/data";

export default function TVListingPage() {
  // Get all products and filter only TV products, then sort by size
  const allProducts = getProductsWithSizeSorted();
  const tvProducts = allProducts.filter(product => product.categoryId === CategoryId.TV);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">টিভি সংগ্রহ</h1>
        <p className="text-sm text-muted-foreground">
          Samsung সহ বাছাইকৃত টিভি মডেল - সাইজ অনুযায়ী সাজানো (Sorted by Size)
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tvProducts.map((p: Product) => (
          <Link
            key={p.id}
            href={`${p.path}/${p.id}`}
            className="group border rounded-lg overflow-hidden hover:shadow-sm transition"
          >
            <div className="relative aspect-video bg-muted">
              <Image
                src={typeof p.image === "string" ? p.image : p.image}
                alt={p.title}
                fill
                className="object-cover"
              />
              {/* Size badge */}
              {p.size && (
                <div className="absolute top-2 left-2 bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
                  {p.size}
                </div>
              )}
              {/* Subcategory badge */}
              <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md">
                {p.subCategoryName}
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium group-hover:text-primary transition">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                Size: {p.size}
              </p>
              <div className="mt-2 font-semibold">
                Price: ৳ {p.price.toLocaleString("bn-BD")}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
