"use client";

import Image from "next/image";
import Link from "next/link";
import { CategoryId, getProductsByCategory, Product } from "../../../../../../shared/data";

export default function TVListingPage() {
  const products = getProductsByCategory(CategoryId.TV);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">টিভি সংগ্রহ</h1>
        <p className="text-sm text-muted-foreground">
          Samsung সহ বাছাইকৃত টিভি মডেল
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p: Product) => (
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
            </div>
            <div className="p-4">
              <h3 className="font-medium group-hover:text-primary transition">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground">{p.quantity}</p>
              <div className="mt-2 font-semibold">
                ৳ {p.price.toLocaleString("bn-BD")}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
