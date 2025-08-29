"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import CheckIcon from "../../../../../../../shared/icons/check-icon";
import bkash from "../../../../../../public/Images/payment/bkash.png";
import nogod from "../../../../../../public/Images/payment/nogod.png";
import rocket from "../../../../../../public/Images/payment/rocket.png";
import PaymentIcon from "../../../../../../../shared/icons/payment-icon";
import DelivaryIcon from "../../../../../../../shared/icons/delivary-icon";
import NaturalIcon from "../../../../../../../shared/icons/natural-icon";
import { Product } from "../../../../../../../shared/data";

interface ProductDetailsClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function PeraSondeshDetails({
  product,
  relatedProducts,
}: ProductDetailsClientProps) {
  const router = useRouter();
  const [quantity, setQuantity] = useState<number>(1);
  const [basePrice, setBasePrice] = useState<number>(650);

  useEffect(() => {
    setBasePrice(650); // Default base price for 1kg Pera Sondesh
  }, [product]);

  const totalPrice = basePrice * quantity;

  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prev) => {
      if (type === "decrease" && prev > 1) return prev - 1;
      if (type === "increase") return prev + 1;
      return prev;
    });
  };

  const handleNavigateToDetails = (id: string) => {
    router.push(`/pera-sondesh/${id}`);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Product Details */}
      <Card className="shadow-lg mt-6">
        <CardContent className="flex flex-col md:flex-row gap-6">
          <div className="relative w-full h-[300px] md:w-1/2 lg:h-[500px] mt-4">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-between md:w-1/2">
            <div>
              <CardTitle className="text-2xl md:text-3xl font-bold mt-4">
                {product.title}
              </CardTitle>

              {/* Price */}
              <div className="mt-4 flex items-center">
                <p className="text-xl md:text-2xl font-medium">Price:</p>
                <p className="text-2xl md:text-3xl font-bold text-green-600 ml-2">
                  {totalPrice}৳
                </p>
              </div>

              {/* Additional Info */}
              <ul className="space-y-2 mt-4">
                <li>
                  👉{" "}
                  <span className="text-primary font-semibold">
                    Fatema Agro
                  </span>{" "}
                  আপনাদেরকে দিচ্ছে নওগাঁ জেলার ঐতিহ্যবাহী খাঁটি{" "}
                  <span className="font-bold">প্যারা সন্দেশ</span>।
                </li>
                <li>
                  📲 অর্ডার করতে আমাদের{" "}
                  <span>
                    <Link
                      href="https://www.facebook.com/fatemaagroo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-blue-600 underline hover:text-blue-800"
                    >
                      পেজে
                    </Link>
                  </span>{" "}
                  মেসেজ করুন অথবা ফোন করুনঃ{" "}
                  <a
                    href="tel:01719355375"
                    className="text-primary font-bold hover:text-primary-dark"
                  >
                    01719355375
                  </a>
                </li>
                <li>🚚 সারা বাংলাদেশে ক্যাশঅন হোম ডেলিভারি দিচ্ছি।</li>
                <li>
                  ☑️ ভালো খান সুস্থ থাকুন{" "}
                  <span className="text-primary font-semibold">
                    Fatema Agro
                  </span>{" "}
                  সার্ভিসের সাথেই থাকুন।
                </li>
                <li className="text-primary font-semibold">
                  ~Enjoy The Real Taste~
                </li>
              </ul>

              {/* Quantity */}
              <div className="mt-4 flex items-center">
                <p className="mr-4 font-medium">Quantity:</p>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    onClick={() => handleQuantityChange("decrease")}
                  >
                    -
                  </Button>
                  <span className="mx-4 text-lg">{quantity}</span>
                  <Button
                    variant="outline"
                    onClick={() => handleQuantityChange("increase")}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4 border-b-2 pb-6">
              <Button className="w-full bg-green-700 text-white px-4 py-2 rounded-md hover:bg-primary_bg transition duration-200">
                Add to Cart
              </Button>
              <Button
                onClick={() =>
                  router.push(
                    `/orders?productName=${encodeURIComponent(
                      product.title
                    )}&quantity=${encodeURIComponent(
                      `Quantity: ${quantity}`
                    )}&price=${encodeURIComponent(`${totalPrice}৳`)}`
                  )
                }
                className="w-full bg-green-600 text-white hover:bg-green-700"
              >
                Buy Now
              </Button>
            </div>

            {/* Categories */}
            <div className="mt-6">
              <h2 className="text-lg">
                Categories:
                <span className="text-primary font-semibold">
                  <Link href="/products/desart"> সকল প্রকার মিষ্টি</Link>
                </span>
                ,
                <span className="text-primary font-semibold">
                  <Link href="/products/pera-sondesh"> প্যারা সন্দেশ</Link>
                </span>
              </h2>
            </div>

            <div>
              <ul className="my-6">
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4" /> No-Risk Money Back
                  Guarantee!
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4" /> No Hassle Refunds
                </li>
                <li className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4" /> Secure Payments
                </li>
              </ul>
            </div>

            <div className="shadow-lg border py-8 w-full">
              <h2 className="text-lg font-medium text-center ">
                Guaranteed Safe Checkout
              </h2>
              <div className="flex items-center justify-center gap-5 mt-3 w-full">
                <Image src={bkash} width={60} height={60} alt="bkash" />
                <Image src={rocket} width={60} height={60} alt="rocket" />
                <Image src={nogod} width={60} height={60} alt="nagad" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Product Description */}
      <Card className="shadow-md mt-8 border border-gray-200 rounded-lg">
        <CardContent className="p-6">
          {/* Title */}
          <div className="text-3xl font-semibold mb-4 text-gray-800 border-b-2 pb-2">
            <h2>{product.title} - সম্পর্কে বিস্তারিত তথ্য</h2>
          </div>
          <CardTitle className="text-2xl font-semibold mb-4 text-gray-800">
            {product.title}
          </CardTitle>
          {/* Product Intro */}
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            নওগাঁ জেলার গর্ব ঐতিহ্যবাহী{" "}
            <strong className="text-primary">প্যারা সন্দেশ</strong> এখন
            <strong className="text-primary"> Fatema Agro</strong> থেকে সহজেই
            পাওয়া যাচ্ছে। ৬ কেজি দুধ দিয়ে তৈরি ১ কেজি সন্দেশের স্বাদ একেবারেই
            অনন্য। এটি সম্পূর্ণ প্রাকৃতিক এবং স্বাস্থ্যসম্মত।
          </p>
          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-4">
            নওগাঁর বিখ্যাত প্যারা সন্দেশ কোন কেমিক্যাল ছাড়াই তৈরি হয়। শিশু থেকে
            শুরু করে সকল বয়সীদের জন্য এটি একটি আদর্শ মিষ্টি। <br />
            বাইরে থেকে কেমিক্যালযুক্ত মিষ্টির পরিবর্তে আপনার পরিবারের জন্য
            নিরাপদ ও অর্গানিক সন্দেশ বেছে নিন।
          </p>
          <p>
            <span className="text-primary font-semibold">
              দাম সাশ্রয়ী এবং মানের নিশ্চয়তা দিচ্ছি ইনশাআল্লাহ।
            </span>
          </p>{" "}
          <br />
          <p className="font-semibold">
            *পণ্যে কোনো সমস্যা হলে আমাদেরকে জানালে আমরা ফুল টাকা রিফান্ড দিয়ে
            দিব।
          </p>
          {/* Why Buy Section */}
          <div className="mb-4 mt-6">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              কেন আমাদের প্যারা সন্দেশ নিবেন?
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>✅ ১০০% বিশুদ্ধ দুধ দিয়ে তৈরি।</li>
              <li>✅ কোন কেমিক্যাল বা প্রিজারভেটিভ নেই।</li>
              <li>✅ শিশু ও বয়স্ক সবার জন্য উপযোগী।</li>
              <li>✅ অর্গানিক ও স্বাস্থ্যসম্মত।</li>
              <li>✅ নওগাঁ জেলার ঐতিহ্যবাহী আসল স্বাদ।</li>
            </ul>
          </div>
          <p>
            **আমাদের এই পণ্যটি সারা বছর পাওয়া যায় তবে স্টক সীমিত। তাই আগেই
            প্রি-অর্ডার করুন।
          </p>
          {/* Call to Action */}
          <div className="text-center mt-6">
            <a
              href="https://forms.google.com/"
              target="_blank"
              className="inline-block bg-blue-600 text-white px-5 py-2 rounded-lg shadow-md hover:bg-blue-700 transition"
            >
              প্রি-অর্ডার করতে এখানে ক্লিক করুন
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Related Products */}
      <h2 className="text-2xl font-semibold mt-10 border-b-2 pb-2 uppercase text-gray-800">
        Related Products
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 mt-8">
        {(relatedProducts ?? []).map((relatedProduct) => (
          <Card
            key={relatedProduct.id}
            onClick={() => handleNavigateToDetails(relatedProduct.id)}
            className="relative group hover:shadow-2xl transition-all duration-500 border border-gray-200 rounded-lg cursor-pointer overflow-hidden"
          >
            <div className="relative w-full h-60 overflow-hidden group-hover:scale-105 transition-all duration-500">
              <Image
                src={relatedProduct.image}
                alt={relatedProduct.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <CardContent className="p-4 bg-white transition-all duration-300 group-hover:bg-gray-50">
              <CardTitle className="text-lg font-semibold text-gray-800 truncate group-hover:text-primary transition-all duration-300">
                {relatedProduct.title}
              </CardTitle>
              <p className="text-sm text-gray-600 mt-2 group-hover:text-gray-800 transition-all duration-200">
                Price: {relatedProduct.price}৳
              </p>
            </CardContent>
            <CardFooter className="transition-all duration-300 group-hover:bg-gray-100">
              <Button
                variant="outline"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNavigateToDetails(relatedProduct.id);
                }}
                className="w-full text-gray-700 transition-all duration-200 group-hover:bg-primary group-hover:text-white group-hover:border-primary"
              >
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Bottom Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-slate-100 py-10 px-10 mt-6 -mb-7 shadow-lg rounded-lg">
        <div>
          <div className="flex items-center gap-2">
            <PaymentIcon className="w-10 h-10" />
            <h2 className="font-semibold text-3xl text-slate-800">
              নিরাপদ পেমেন্ট
            </h2>
          </div>
          <p className="text-slate-600 mt-2">
            বিভিন্ন পেমেন্ট পদ্ধতি থেকে বেছে নিন
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <DelivaryIcon className="w-12 h-12" />
            <h2 className="font-semibold text-3xl text-slate-800">
              গ্রিন ডেলিভারি
            </h2>
          </div>
          <p className="text-slate-600 mt-2">
            ২-৩ দিনের মধ্যে আপনার পণ্য পৌছে যাবে
          </p>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <NaturalIcon className="w-10 h-10" />
            <h2 className="font-semibold text-3xl text-slate-800">
              ১০০% ন্যাচারাল
            </h2>
          </div>
          <p className="text-slate-600 mt-2">
            প্রাকৃতিক উপাদান ব্যবহার করতে আমরা প্রতিশ্রুতিবদ্ধ
          </p>
        </div>
      </div>
    </div>
  );
}
