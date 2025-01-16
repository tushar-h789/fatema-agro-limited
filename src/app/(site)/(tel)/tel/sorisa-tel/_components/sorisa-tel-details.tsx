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

export default function SorisaTelDetails({
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
                  আপনাদেরকে দিচ্ছে সম্পূর্ণ ভেজাল মুক্ত খাঁটি সরিষার তেল।
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
              <Button className="w-full bg-green-600 text-white hover:bg-green-700">
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
            বাংলার ঐতিহ্যবাহী ঘানি ভাঙ্গা খাঁটি সরিষার তেল{" "}
            <strong className="text-primary">Fatema Agro</strong> থেকে এখন আপনার
            হাতের নাগালে। সরাসরি কৃষকদের কাছ থেকে সংগ্রহ করা খাঁটি সরিষা থেকে
            ঘানি ভাঙ্গা পদ্ধতিতে তৈরি এই তেল সম্পূর্ণ প্রাকৃতিক এবং পুষ্টিগুণে
            ভরপুর।
            <br /> ঘরে বসে অর্ডার করুন এবং উপভোগ করুন সেরা গুণমানের সরিষার তেল।
          </p>
          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-4">
            ঘানি ভাঙ্গা পদ্ধতিতে তৈরি সরিষার তেল সম্পূর্ণ ভেজালমুক্ত এবং
            স্বাস্থ্যসম্মত। সরাসরি কৃষকদের কাছ থেকে সংগ্রহ করা সরিষা থেকে ঘানির
            মাধ্যমে ধীর গতিতে তেল নিষ্কাশন করা হয়। এই প্রক্রিয়ায় তেলের পুষ্টিগুণ
            অক্ষুণ্ন থাকে এবং কোনো ধরনের রাসায়নিক পদার্থ ব্যবহার করা হয় না।{" "}
            <br />
            সরিষার তেল বহু প্রাচীনকাল থেকে রান্না, মালিশ এবং ঔষধি কাজে ব্যবহৃত
            হয়ে আসছে। এর গুণাগুণ এবং স্বাদ আপনার দৈনন্দিন জীবনে এনে দেবে এক নতুন
            মাত্রা।
          </p>
          <p>
            আমাদের সরিষার তেল সরাসরি{" "}
            <span className="font-semibold text-primary">নাটোর এবং পাবনার</span>{" "}
            গ্রামাঞ্চল থেকে সংগ্রহ করা হয়। <br />
            <span className="text-primary">
              দাম সাশ্রয়ী এবং মানের নিশ্চয়তা দিচ্ছি ইনশাআল্লাহ।
            </span>
          </p>{" "}
          <br />
          <p className="font-semibold">
            {" "}
            *আর পিউরিটি নিয়ে নিশ্চয়তা দিচ্ছে FATEMA AGRO কোন প্রোডাক্টে অভিযোগ
            থাকলে আমাদের কে জানালে আমরা ফুল টাকা রিফান্ড করে দিব।
          </p>
          {/* Price List */}
          {/* <div className="mt-6 mb-4">
      <h3 className="text-xl font-semibold mb-3 text-gray-800">
        #এই_শীতে_আপনার_যা_প্রয়োজন –
      </h3>
      <ul className="list-disc list-inside text-gray-700 leading-relaxed">
        <li>
          খাঁটি ঘানি ভাঙ্গা সরিষার তেল ১ লিটার = <strong>৪৫০ টাকা</strong>
        </li>
        <li>
          খাঁটি ঘানি ভাঙ্গা সরিষার তেল ৫ লিটার = <strong>২১০০ টাকা</strong>
        </li>
      </ul>
    </div> */}
          {/* Why Buy Section */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              কেন আমাদের সরিষার তেল নিবেন?
            </h3>
            <p>
              আমরা সরবরাহ করছি একদম খাঁটি এবং ভেজালমুক্ত সরিষার তেলের নিশ্চয়তা।{" "}
              <br />
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>
                  সরাসরি কৃষকদের কাছ থেকে সংগ্রহ করা খাঁটি সরিষা ব্যবহার করা হয়।
                </li>
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
                <li>রান্নায় অতুলনীয় স্বাদ এবং মালিশে আরামদায়ক উপকারিতা দেয়।</li>
              </ul>
            </p>{" "}
            <br />
            <br />
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>✅ ১০০% খাঁটি এবং ভেজালমুক্ত।</li>
              <li>✅ কোনো রাসায়নিক বা কৃত্রিম রং ব্যবহার করা হয়নি।</li>
              <li>✅ পুষ্টিগুণ অক্ষুণ্ন থাকে।</li>
              <li>✅ সরাসরি কৃষকদের থেকে সংগ্রহ।</li>
              <li>✅ স্বাস্থ্যসম্মত প্যাকেজিং এবং কুরিয়ার সাপোর্ট।</li>
            </ul>
            <br /> <br />
          </div>
          {/* benifit */}
          {/* Product Benefits Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              সরিষার তেলের ১৩টি উপকারিতা যা অনেকেরই অজানা:
            </h3>
            <ul className="list-decimal list-inside text-gray-700 leading-relaxed">
              <li>
                <strong>হজম প্রক্রিয়া:</strong> সরিষার তেল হজম প্রক্রিয়াকে
                সহায়তা করে এবং মেটাবলিক রেট বৃদ্ধি করে।
              </li>
              <li>
                <strong>সরিষার তেল ব্যথা কমায়:</strong> সরিষার তেলে থাকা প্রদাহ
                বিরোধী (Anti-inflammatory) উপাদান ব্যথা কমাতে সাহায্য করে।
                হাঁটুর ব্যথা, জয়েন্টের ব্যথা, আর্থ্রাইটিস এবং রিউম্যাটিক ব্যথা
                দূর করে।
              </li>
              <li>
                <strong>ক্যান্সার রোধ:</strong> এই তেলে থাকা গ্লুকোসিনোলেট
                (Glucosinolate) উপাদান মলাশয় ও অন্ত্রের ক্যান্সার রোধে সাহায্য
                করে।
              </li>
              <li>
                <strong>ফুসফুস পরিষ্কার রাখে:</strong> সরিষার তেল এক ধরণের
                ডিকঞ্জেস্টেন্ট বা শ্বাসতন্ত্র পরিষ্কারক। রসুন মিশিয়ে তেল বুকে
                লাগালে কফজনিত সমস্যা দূর হয়।
              </li>
              <li>
                <strong>হৃদিপিন্ড সুস্থ রাখে:</strong> সরিষার তেলের মনো এবং পলি
                আনস্যাচুরেটেড ফ্যাট হৃদরোগের ঝুঁকি ৭০% কমিয়ে আনে।
              </li>
              <li>
                <strong>এজমা রোগে:</strong> এজমা এটাক হলে সরিষার তেল বুকে ঘষলে
                শ্বাস নেয়ার ক্ষমতা বাড়ে এবং রোগ প্রতিরোধ ক্ষমতা বাড়ে।
              </li>
              <li>
                <strong>ত্বক ও চুলের যত্নে:</strong> শীতে ত্বকের শুষ্কতা দূর
                করতে সরিষার তেল ব্যবহার করুন। তেলের ব্যাক্টেরিয়া ও ফাঙ্গাস
                বিরোধী গুণ ত্বক ও চুল উজ্জ্বল করে।
              </li>
              <li>
                <strong>রাতে নাভিতে তেল:</strong> রাতে ঘুমানোর আগে নাভিতে কয়েক
                ফোঁটা সরিষার তেল দিলে সুফল পাওয়া যায়।
              </li>
              <li>
                <strong>স্মরণশক্তি বৃদ্ধি:</strong> সরিষার তেল স্মরণশক্তি ও
                চেতনার উন্নতিতে সহায়তা করে।
              </li>
              <li>
                <strong>মাসিকের ব্যথায়:</strong> মাসিকের ব্যথা, গ্যাস বা বদহজমের
                ব্যথায় পেটে তেল মালিশ করলে উপকার মেলে।
              </li>
              <li>
                <strong>পোকামাকড় তাড়ায়:</strong> সরিষার তেলের গন্ধে পোকামাকড় ও
                মশা কাছে ঘেঁষে না।
              </li>
              <li>
                <strong>ওজন কমাতে:</strong> রিবোফ্ল্যাভিন ও নায়াসিন সমৃদ্ধ
                সরিষার তেল মেটাবলিজম বাড়িয়ে ওজন কমাতে সাহায্য করে।
              </li>
              <li>
                <strong>দাঁতের স্বাস্থ্য:</strong> হলুদ ও লবণ মিশিয়ে সরিষার তেল
                দিয়ে দাঁত ও মাড়ি ঘষলে দাঁতের রোগ প্রতিরোধ হয়।
              </li>
            </ul>
          </div>
          {/* Product Features Section */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              আমাদের তেলের বৈশিষ্ট্য:
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>🌴 নিজস্ব মিল / তত্ত্বাবধায়নে উৎপাদন।</li>
              <li>🌴 দেশি সরিষার তেল।</li>
              <li>🌴 কাঠের ঘানির প্রথম চাপের তেল।</li>
              <li>🌴 সম্পূর্ণ কেমিক্যাল মুক্ত।</li>
              <li>🌴 তেলের ফিল্টারিং ব্যবস্থা আছে।</li>
              <li>🌴 কোল্ড প্রেস সরিষার তেল।</li>
              <li>🛍️ ৫/২/১/০.৫ লিটার বোতল করে নিতে পারেন।</li>
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
