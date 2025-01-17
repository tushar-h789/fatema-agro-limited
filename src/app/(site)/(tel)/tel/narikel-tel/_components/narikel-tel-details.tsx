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

export default function NarikelTelDetails({
  product,
  relatedProducts,
}: ProductDetailsClientProps) {
  const router = useRouter(); // To enable programmatic navigation
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedVolume, setSelectedVolume] = useState<string>("1L");

  const [basePrice, setBasePrice] = useState<number>(300);

  useEffect(() => {
    setBasePrice(300); // Default base price for 1L mustard oil
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

    if (volume === "1L") setBasePrice(300);
    else if (volume === "2L") setBasePrice(590);
    else if (volume === "5L") setBasePrice(1450);

    setQuantity(1); // Reset quantity when changing volume
  };

  const handleNavigateToDetails = (id: string) => {
    router.push(`/tel/sorisa-tel/${id}`);
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
                      selectedVolume === "1L" ? "bg-primary" : "bg-gray-400"
                    }`}
                    onClick={() => handleVolumeChange("1L")}
                  >
                    ১ লিটার
                  </Button>
                </li>
                <li>
                  <Button
                    className={`px-4 py-2 text-xs font-semibold rounded-full text-white ${
                      selectedVolume === "2L" ? "bg-primary" : "bg-gray-400"
                    }`}
                    onClick={() => handleVolumeChange("2L")}
                  >
                    ২ লিটার
                  </Button>
                </li>
                <li>
                  <Button
                    className={`px-4 py-2 text-xs font-semibold rounded-full text-white ${
                      selectedVolume === "5L" ? "bg-primary" : "bg-gray-400"
                    }`}
                    onClick={() => handleVolumeChange("5L")}
                  >
                    ৫ লিটার
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
                  আপনাদেরকে দিচ্ছে সম্পূর্ণ ভেজাল মুক্ত খাঁটি নারিকেলর তেল।
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
                  <Link href="/products"> সকল প্রকার তেল</Link>
                </span>
                ,
                <span className="text-primary font-semibold">
                  <Link href="/products/mustard-oil"> সরিষার তেল</Link>
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

      {/* product description */}
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
          <div>
            <p className="text-gray-700 leading-relaxed text-lg mb-4">
              বাংলার ঐতিহ্যবাহী ঘানি ভাঙ্গা খাঁটি নারিকেল তেল{" "}
              <strong className="text-primary">Fatema Agro</strong> থেকে এখন
              আপনার হাতের নাগালে। সম্পূর্ণ প্রাকৃতিক উপায়ে ঘানি ভাঙ্গা পদ্ধতিতে
              তৈরি এই তেল পুষ্টিগুণে ভরপুর এবং ব্যবহারে অতুলনীয়।
              <br /> ঘরে বসে অর্ডার করুন এবং উপভোগ করুন সেরা গুণমানের নারিকেল
              তেল।
            </p>
            {/* Description */}
            <p className="text-gray-600 leading-relaxed mb-4">
              ঘানি ভাঙ্গা পদ্ধতিতে তৈরি নারিকেল তেল সম্পূর্ণ ভেজালমুক্ত এবং
              স্বাস্থ্যসম্মত। নিজস্ব তত্ত্বাবধানে বাছাই করা নারিকেল থেকে ধীর
              গতিতে তেল নিষ্কাশন করা হয়। কোনো রাসায়নিক বা প্রিজারভেটিভ ব্যবহার
              করা হয় না।
            </p>
            <br />
            <p>
              নারিকেল তেল বহু প্রাচীনকাল থেকে ত্বক, চুল এবং রান্নার কাজে ব্যবহৃত
              হয়ে আসছে। এর পুষ্টিগুণ এবং গুণাবলি আপনার দৈনন্দিন জীবনে এক নতুন
              মাত্রা এনে দেবে।
            </p>
          </div>
          <div>
            <p>
              আমাদের নারিকেল তেল সরাসরি{" "}
              <span className="font-semibold text-primary">
                নাটোর এবং নওগাঁ
              </span>{" "}
              থেকে সংগ্রহ করা হয়। <br />
              <span className="text-primary">
                দাম সাশ্রয়ী এবং মানের নিশ্চয়তা দিচ্ছি ইনশাআল্লাহ।
              </span>
            </p>
            <br />
            <p className="font-semibold">
              *আর পিউরিটি নিয়ে নিশ্চয়তা দিচ্ছে FATEMA AGRO। কোনো প্রোডাক্টে
              অভিযোগ থাকলে আমাদের জানালে আমরা ফুল টাকা রিফান্ড করে দিব।
            </p>
          </div>
          {/* Why Buy Section */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              কেন আমাদের নারিকেল তেল নিবেন?
            </h3>
            <p>
              আমরা সরবরাহ করছি একদম খাঁটি এবং ভেজালমুক্ত নারিকেল তেলের নিশ্চয়তা।{" "}
            </p>
            <br />
            <div>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>নিজস্ব তত্ত্বাবধানে বাছাই করা নারিকেল ব্যবহার করা হয়।</li>
                <li>
                  ঘানি ভাঙ্গা পদ্ধতিতে ধীর গতিতে তেল নিষ্কাশন করে তেলের গুণাগুণ
                  অক্ষুণ্ন রাখা হয়।
                </li>
                <li>
                  কোনো প্রকার রাসায়নিক, কৃত্রিম রং বা প্রিজারভেটিভ ব্যবহার করা
                  হয় না।
                </li>
                <li>
                  সম্পূর্ণ স্বাস্থ্যসম্মত পদ্ধতিতে তৈরি এবং প্যাকেজিং করা।
                </li>
                <li>
                  রান্নায় অতুলনীয় স্বাদ এবং ত্বক ও চুলে ব্যবহারে উপকারিতা
                  নিশ্চিত।
                </li>
              </ul>
            </div>
            <br />
            <br />
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>✅ ১০০% খাঁটি এবং ভেজালমুক্ত।</li>
              <li>✅ কোনো রাসায়নিক বা কৃত্রিম রং ব্যবহার করা হয়নি।</li>
              <li>✅ ত্বক এবং চুলের যত্নে আদর্শ।</li>
              <li>✅ পুষ্টিগুণ অক্ষুণ্ন থাকে।</li>
              <li>✅ স্বাস্থ্যসম্মত প্যাকেজিং এবং কুরিয়ার সাপোর্ট।</li>
            </ul>
            <br /> <br />
          </div>
          {/* Product Benefits Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              নারিকেল তেলের ১০টি উপকারিতা যা অনেকেরই অজানা:
            </h3>
            <ul className="list-decimal list-inside text-gray-700 leading-relaxed">
              <li>
                <strong>ত্বক মসৃণ রাখে:</strong> নারিকেল তেল ত্বকের শুষ্কতা দূর
                করে এবং ত্বককে মসৃণ ও উজ্জ্বল করে।
              </li>
              <li>
                <strong>চুলের স্বাস্থ্য:</strong> চুলে নারিকেল তেল লাগালে চুলের
                গোড়া মজবুত হয় এবং চুল পড়া কমায়।
              </li>
              <li>
                <strong>শরীরের ময়েশ্চারাইজার:</strong> শীতকালে ত্বকের শুষ্কতা
                দূর করতে নারিকেল তেল ব্যবহার অত্যন্ত কার্যকর।
              </li>
              <li>
                <strong>অ্যান্টি-ব্যাকটেরিয়াল:</strong> এর অ্যান্টি-ব্যাকটেরিয়াল
                এবং অ্যান্টি-ফাঙ্গাল গুণাগুণ ত্বকের ইনফেকশন দূর করতে সাহায্য
                করে।
              </li>
              <li>
                <strong>হজম সহায়ক:</strong> রান্নায় নারিকেল তেল ব্যবহার করলে হজম
                প্রক্রিয়া সহজ হয়।
              </li>
              <li>
                <strong>ওজন কমায়:</strong> নারিকেল তেলের মিডিয়াম-চেইন ফ্যাটি
                অ্যাসিড মেটাবলিজম বাড়িয়ে ওজন কমাতে সাহায্য করে।
              </li>
              <li>
                <strong>ইমিউন সিস্টেম:</strong> নারিকেল তেলে থাকা লরিক অ্যাসিড
                শরীরের রোগ প্রতিরোধ ক্ষমতা বাড়ায়।
              </li>
              <li>
                <strong>পোকামাকড় তাড়ায়:</strong> ত্বকে নারিকেল তেল লাগালে মশা ও
                পোকামাকড় দূরে থাকে।
              </li>
              <li>
                <strong>দাঁতের যত্ন:</strong> নারিকেল তেল দিয়ে প্রতিদিন ওরাল
                ক্লিনজিং করলে দাঁতের স্বাস্থ্য ভালো থাকে।
              </li>
              <li>
                <strong>প্রাকৃতিক ডিওডোরেন্ট:</strong> ত্বকে ব্যবহার করলে
                নারিকেল তেল ঘামের দুর্গন্ধ দূর করে।
              </li>
            </ul>
          </div>
          {/* Product Features Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              আমাদের তেলের বৈশিষ্ট্য:
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>🌴 নিজস্ব তত্ত্বাবধানে উৎপাদন।</li>
              <li>🌴 বিশুদ্ধ দেশি নারিকেল তেল।</li>
              <li>🌴 ঘানি ভাঙ্গা পদ্ধতিতে নিষ্কাশিত।</li>
              <li>🌴 সম্পূর্ণ কেমিক্যাল মুক্ত।</li>
              <li>🌴 স্বাস্থ্যসম্মত প্যাকেজিং।</li>
              <li>🌴 ৫/২/১/০.৫ লিটার বোতল করে নেওয়ার সুবিধা।</li>
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
