"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Product } from "../../../../../../../shared/data";
import Link from "next/link";
import CheckIcon from "../../../../../../../shared/icons/check-icon";
import bkash from "../../../../../../public/Images/payment/bkash.png";
import nogod from "../../../../../../public/Images/payment/nogod.png";
import rocket from "../../../../../../public/Images/payment/rocket.png";
import PaymentIcon from "../../../../../../../shared/icons/payment-icon";
import DelivaryIcon from "../../../../../../../shared/icons/delivary-icon";
import NaturalIcon from "../../../../../../../shared/icons/natural-icon";

interface ProductDetailsClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function GorurMangsoDetails({
  product,
  relatedProducts,
}: ProductDetailsClientProps) {
  const router = useRouter(); // To enable programmatic navigation
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedVolume, setSelectedVolume] = useState<string>("1kg");

  const [basePrice, setBasePrice] = useState<number>(750);

  useEffect(() => {
    setBasePrice(750); // Default base price for 1L mustard oil
  }, [product]);

  const totalPrice = basePrice * quantity;

  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prev) => {
      if (type === "decrease" && prev > 1) return prev - 1;
      if (type === "increase") return prev + 1;
      return prev;
    });
  };

  const handleVolumeChange = (volume: string) => {
    setSelectedVolume(volume);

    if (volume === "1kg") setBasePrice(750);
    else if (volume === "2kg") setBasePrice(1490);
    else if (volume === "5kg") setBasePrice(3700);

    setQuantity(1); // Reset quantity when changing volume
  };

  const handleNavigateToDetails = (id: string) => {
    router.push(`/mangso/deshi-gorur-mangso/${id}`);
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

              {/* Volume Selector */}
              <ul className="flex gap-4 mt-4 flex-wrap">
                <li>
                  <Button
                    className={`px-4 py-2 text-xs font-semibold rounded-full text-white ${
                      selectedVolume === "1kg" ? "bg-primary" : "bg-gray-400"
                    }`}
                    onClick={() => handleVolumeChange("1kg")}
                  >
                    ১ কেজি
                  </Button>
                </li>
                <li>
                  <Button
                    className={`px-4 py-2 text-xs font-semibold rounded-full text-white ${
                      selectedVolume === "2kg" ? "bg-primary" : "bg-gray-400"
                    }`}
                    onClick={() => handleVolumeChange("2kg")}
                  >
                    ২ কেজি
                  </Button>
                </li>
                <li>
                  <Button
                    className={`px-4 py-2 text-xs font-semibold rounded-full text-white ${
                      selectedVolume === "5kg" ? "bg-primary" : "bg-gray-400"
                    }`}
                    onClick={() => handleVolumeChange("5kg")}
                  >
                    ৫ কেজি
                  </Button>
                </li>
              </ul>

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
                  আপনাদের জন্য এনেছে সম্পূর্ণ প্রাকৃতিক ও ভেজালমুক্ত দেশি গরুর
                  মাংস। আমাদের গরুর মাংস শতভাগ হালাল এবং স্বাস্থ্যসম্মত।
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
                  ☑️ ভালো খাবার খান, সুস্থ থাকুন।{" "}
                  <span className="text-primary font-semibold">
                    Fatema Agro
                  </span>{" "}
                  এর সাথে থাকুন।
                </li>
                <li className="text-primary font-semibold">
                  ~স্বাস্থ্যকর খাবারের আসল স্বাদ নিন!~
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
                      `${selectedVolume}, Quantity: ${quantity}`
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
                  <Link href="/mangso"> সকল প্রকার মাংস </Link>
                </span>
                |
                <span className="text-primary font-semibold">
                  <Link href="/mangso/deshi-gorur-mangso"> গরুর মাংস </Link>
                </span>
                |
                <span className="text-primary font-semibold">
                  <Link href="/mangso/deshi-chagoler-mangso">
                    {" "}
                    ছাগলের মাংস{" "}
                  </Link>
                </span>
                |
                <span className="text-primary font-semibold">
                  <Link href="/mangso/deshi-murgir-mangso"> মুরগির মাংস </Link>
                </span>
                |
                <span className="text-primary font-semibold">
                  <Link href="/mangso/deshi-haser-mangso"> হাঁসের মাংস</Link>
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
            খাঁটি গরুর মাংস{" "}
            <strong className="text-primary">Fatema Agro</strong> থেকে এখন আপনার
            হাতের নাগালে। গরুর মাংস সরাসরি আমাদের নির্ভরযোগ্য খামার থেকে সংগ্রহ
            করা হয় এবং পেশাদারীভাবে প্রস্তুত করা হয়, যাতে আপনি পেয়ে যান অত্যন্ত
            সুস্বাদু এবং স্বাস্থ্যকর মাংস।
            <br /> ঘরে বসে অর্ডার করুন এবং উপভোগ করুন সেরা গুণমানের গরুর মাংস।
          </p>
          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-4">
            আমাদের গরুর মাংস ১০০% খাঁটি এবং রাসায়নিক মুক্ত। এটি উচ্চ গুণমানের,
            স্বাস্থ্যকর এবং পুষ্টিকর, যা আপনার সারা দিনের প্রয়োজনীয় প্রোটিন এবং
            পুষ্টি সরবরাহ করবে। আমরা গরুর মাংস সংগ্রহ করি আমাদের নির্ভরযোগ্য
            খামার থেকে, যেখানে পশুদের প্রাকৃতিক ও স্বাস্থ্যসম্মতভাবে পোষণ করা
            হয়।
          </p>
          <p>
            আমাদের গরুর মাংস{" "}
            <span className="font-semibold text-primary">
              রাজশাহী এবং নওগাঁ
            </span>{" "}
            অঞ্চল থেকে সংগ্রহ করা হয়। <br />
            <span className="text-primary">
              দাম সাশ্রয়ী এবং মানের নিশ্চয়তা দিচ্ছি ইনশাআল্লাহ।
            </span>
          </p>{" "}
          <br />
          <p className="font-semibold">
            *আর পিউরিটি নিয়ে নিশ্চয়তা দিচ্ছে FATEMA AGRO কোন প্রোডাক্টে অভিযোগ
            থাকলে আমাদের কে জানালে আমরা ফুল টাকা রিফান্ড করে দিব।
          </p>
          {/* Why Buy Section */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              কেন আমাদের গরুর মাংস নিবেন?
            </h3>
            <p>
              আমরা সরবরাহ করছি একদম খাঁটি এবং স্বাস্থ্যসম্মত গরুর মাংসের
              নিশ্চয়তা। <br />
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>আমাদের মাংস ১০০% খাঁটি এবং রাসায়নিক মুক্ত।</li>
                <li>
                  গরুর মাংস খামারে সুস্থভাবে পালিত পশু থেকে সংগ্রহ করা হয়।
                </li>
                <li>সর্বোচ্চ স্বাস্থ্যবিধি মেনে মাংস প্রস্তুত করা হয়।</li>
                <li>রান্নায় অতুলনীয় স্বাদ এবং পুষ্টিকর।</li>
              </ul>
            </p>{" "}
            <br />
            <br />
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>✅ ১০০% খাঁটি এবং রাসায়নিক মুক্ত।</li>
              <li>✅ স্বাস্থ্যসম্মত পদ্ধতিতে প্রস্তুত করা।</li>
              <li>✅ প্রাকৃতিক এবং টাটকা গরুর মাংস।</li>
              <li>✅ প্যাকেজিং এবং কুরিয়ার সাপোর্ট নিশ্চিত।</li>
              <li>✅ সাশ্রয়ী মূল্য এবং উন্নত মান।</li>
            </ul>
            <br /> <br />
          </div>
          {/* Product Benefits Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              গরুর মাংসের ১২টি উপকারিতা যা অনেকেরই অজানা:
            </h3>
            <ul className="list-decimal list-inside text-gray-700 leading-relaxed">
              <li>
                <strong>প্রোটিনের উৎস:</strong> গরুর মাংস উচ্চমানের প্রোটিন
                সরবরাহ করে, যা পেশী গঠন এবং শরীরের অন্যান্য গুরুত্বপূর্ণ কাজের
                জন্য উপকারী।
              </li>
              <li>
                <strong>রক্তের আয়রন:</strong> গরুর মাংসে থাকা আয়রন রক্তের
                সঞ্চালন বাড়ায় এবং অ্যানিমিয়া প্রতিরোধে সাহায্য করে।
              </li>
              <li>
                <strong>বৃদ্ধি উন্নয়ন:</strong> শিশুর বৃদ্ধি এবং উন্নয়ন জন্য
                গরুর মাংস অত্যন্ত উপকারী।
              </li>
              <li>
                <strong>হৃদরোগের ঝুঁকি কমানো:</strong> গরুর মাংসে থাকা Omega-3
                ফ্যাটি অ্যাসিড হৃদরোগের ঝুঁকি কমাতে সাহায্য করে।
              </li>
              <li>
                <strong>চর্মের স্বাস্থ্য:</strong> গরুর মাংসে থাকা ভিটামিন B12
                ত্বকের স্বাস্থ্যের জন্য উপকারী।
              </li>
              <li>
                <strong>শক্তিশালী হাড়:</strong> গরুর মাংসে উপস্থিত ক্যালসিয়াম
                এবং ফসফরাস হাড় শক্তিশালী করতে সাহায্য করে।
              </li>
              <li>
                <strong>এনার্জি প্রদান:</strong> গরুর মাংস শরীরের এনার্জি স্তর
                বজায় রাখতে সহায়ক।
              </li>
              <li>
                <strong>মাংসপেশীর উন্নয়ন:</strong> গরুর মাংসে প্রোটিন থাকায়
                মাংসপেশী গঠন ও উন্নতি সহজ হয়।
              </li>
              <li>
                <strong>অ্যান্টি-অক্সিডেন্ট:</strong> গরুর মাংসে থাকা সেলেনিয়াম
                এবং জিঙ্ক উপাদান অ্যান্টি-অক্সিডেন্ট হিসেবে কাজ করে।
              </li>
              <li>
                <strong>মাংসপেশীর তন্তু:</strong> গরুর মাংস শরীরে শক্তি যোগানোর
                পাশাপাশি পেশীগুলিকে মজবুত করে।
              </li>
              <li>
                <strong>ডায়াবেটিস নিয়ন্ত্রণ:</strong> গরুর মাংসের কিছু উপাদান
                ডায়াবেটিস নিয়ন্ত্রণে সহায়তা করে।
              </li>
              <li>
                <strong>দৃষ্টিশক্তি:</strong> গরুর মাংসে উপস্থিত ভিটামিন A
                দৃষ্টিশক্তি বাড়াতে সাহায্য করে।
              </li>
            </ul>
          </div>
          {/* Product Features Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              আমাদের গরুর মাংসের বৈশিষ্ট্য:
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>🌴 খাঁটি গরুর মাংস, কোন ভেজাল নেই।</li>
              <li>🌴 স্বাস্থ্যকর এবং পুষ্টিকর মাংস।</li>
              <li>🌴 সাশ্রয়ী মূল্য এবং দ্রুত ডেলিভারি সেবা।</li>
              <li>🌴 ১০০% কেমিক্যাল মুক্ত মাংস।</li>
              <li>🌴 প্রাকৃতিক এবং তাজা গরুর মাংস।</li>
              <li>🛍️ ১ কেজি, ৫ কেজি, ১০ কেজি প্যাকেজ পাওয়া যায়।</li>
            </ul>
          </div>
          <br /> <br />
          <p>
            **আমাদের এই পণ্যটি সারা বছর উপলভ্য থাকে তবে স্টক সীমিত। তাই আগেই
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
      <div className="flex items-center justify-between bg-slate-100 py-10 px-10 mt-6 -mb-7 shadow-lg rounded-lg">
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
