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
import NaturalIcon from "../../../../../../../shared/icons/natural-icon";
import DelivaryIcon from "../../../../../../../shared/icons/delivary-icon";
import PaymentIcon from "../../../../../../../shared/icons/payment-icon";

interface ProductDetailsClientProps {
  product: Product;
  relatedProducts: Product[];
}

const specialGurTitles = [
  "পাটালি খেজুর গুড়",
  "পাটালি তালের গুড়",
  "পাটালি আখের গুড়",
];

export default function ProductDetailsClient({
  product,
  relatedProducts,
}: ProductDetailsClientProps) {
  const router = useRouter(); // To enable programmatic navigation
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedWeight, setSelectedWeight] = useState<string>("1kg");

  const [basePrice, setBasePrice] = useState<number>(
    specialGurTitles.includes(product.title) ? 300 : 300
  );

  useEffect(() => {
    setBasePrice(specialGurTitles.includes(product.title) ? 300 : 300);
  }, [product]);

  const totalPrice = basePrice * quantity;

  const handleQuantityChange = (type: "increase" | "decrease") => {
    setQuantity((prev) => {
      if (type === "decrease" && prev > 1) return prev - 1;
      if (type === "increase") return prev + 1;
      return prev;
    });
  };

  const handleWeightChange = (weight: string) => {
    setSelectedWeight(weight);

    if (specialGurTitles.includes(product.title)) {
      if (weight === "1kg") setBasePrice(300);
      else if (weight === "2kg") setBasePrice(590);
      else if (weight === "5kg") setBasePrice(1450);
    } else {
      if (weight === "1kg") setBasePrice(300);
      else if (weight === "2kg") setBasePrice(590);
      else if (weight === "5kg") setBasePrice(1450);
    }

    setQuantity(1); // Reset quantity when changing weight
  };

  const handleNavigateToDetails = (id: string) => {
    router.push(`/gur/khejur-gur/${id}`);
  };

  return (
    <div className="container mx-auto px-4">
      {/* Product Details */}
      <Card className="shadow-lg mt-6">
        <CardContent className="flex flex-col  md:flex-row gap-6">
          <div className="relative mt-4 w-full h-[300px] md:w-1/2 lg:h-[500px]">
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

              {/* Weight Selector */}
              <ul className="flex gap-4 mt-4 flex-wrap">
                <li>
                  <Button
                    className={`px-4 py-2 text-xs font-semibold rounded-full text-white ${
                      selectedWeight === "1kg" ? "bg-primary" : "bg-gray-400"
                    }`}
                    onClick={() => handleWeightChange("1kg")}
                  >
                    ১ কেজি
                  </Button>
                </li>
                <li>
                  <Button
                    className={`px-4 py-2 text-xs font-semibold rounded-full text-white ${
                      selectedWeight === "2kg" ? "bg-primary" : "bg-gray-400"
                    }`}
                    onClick={() => handleWeightChange("2kg")}
                  >
                    ২ কেজি
                  </Button>
                </li>
                <li>
                  <Button
                    className={`px-4 py-2 text-xs font-semibold rounded-full text-white ${
                      selectedWeight === "5kg" ? "bg-primary" : "bg-gray-400"
                    }`}
                    onClick={() => handleWeightChange("5kg")}
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
                  আপনাদেরকে দিচ্ছে সম্পূর্ণ ভেজাল মুক্ত নিরাপদ অর্গানিক গুড়।
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
                  <Link href="/gur"> সকল ধরণের গুড়</Link>
                </span>
                ,
                <span className="text-primary font-semibold">
                  <Link href="/gur/khejur-gur"> খেজুরের গুড়</Link>
                </span>
                ,
                <span className="text-primary font-semibold">
                  <Link href="/gur/tal-gur"> তালের গুড়</Link>
                </span>
                ,
                <span className="text-primary font-semibold">
                  <Link href="/gur/akh-gur"> আখের গুড়</Link>
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

      {/* product Description */}
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
            বাংলার প্রকৃতি প্রত্যেক ঋতু বিশেষে নতুন সাজে সেজে ওঠে তন্মধ্যে শীত
            ঋতু যেন একটু স্পেশাল! প্রিয় শীতকালের আগমনে{" "}
            <strong>Fatema Agro</strong> থেকে পাওয়া যাবে শীতের স্পেশাল খাদ্য
            সামগ্রী। <br />
            প্রি-অর্ডার করে রাখতে পারেন আপনার প্রিয় শীতের স্পেশাল খাবারটি।
          </p>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed mb-4">
            খেজুরের রস থেকে খেজুরের গুড় তৈরি করা হয়। বাংলার অগ্রহায়ণ মাস থেকে
            ফাল্গুন মাস পর্যন্ত খেজুরের রস সংগ্রহ করে এই রস করে জ্বাল বা উত্তাপে
            ঘন করে শক্ত পাটালি গুড়ে পরিনত করা হয়। <br />
            খেজুরের রস যেমন সুস্বাদু তেমনি রস থেকে তৈরি হওয়া খেজুরের গুড়ও। ভাপা
            পিঠা সহ শীতকালীন বিভিন্ন ধরনের সুস্বাদু পিঠা, তালের পিঠা, খেজুর
            গুড়ের জিলাপি, মিষ্টি, খেজুরের গুড়ের র-চা, মুড়ির সাথে খেজুরের গুড়,{" "}
            <br />
            পায়েস ইত্যাদি তৈরিতে ব্যবহার করা হয়ে আসছে অনেক আগে থেকে। এছাড়াও
            গুড়ের তৈরি বিশেষ অনেক খাবার তৈরি ব্যবহার করা হয় খেজুরের গুড়। যা অন্য
            কোন গুড়ে, স্বাদ তেমন ভালো লাগে না।
          </p>
          <p>
            আমাদের খেজুরের গুড় বৃহত্তর{" "}
            <span className="font-semibold">নওগাঁ, রাজশাহীর</span>। <br />
            দাম সস্থা ও কোয়ালি অনেক ভালো হবে ইনশাআল্লাহ।
          </p>

          {/* Price List */}
          <div className="mt-6 mb-4">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">
              #এই_শীতে_যা_পাবেন –
            </h3>
            <ul className="list-disc list-inside text-gray-700 leading-relaxed">
              <li>
                খেজুরের ঝোলা গুড় ১.২ কেজির বয়াম = <strong>২৫০ টাকা</strong>
              </li>
              <li>
                খেজুরের দানা গুড় ১.২ কেজির বয়াম = <strong>২৫০ টাকা</strong>
              </li>
              <li>
                খেজুরের পাটালি গুড় ১ কেজি = <strong>৩০০ টাকা</strong>
              </li>
            </ul>
          </div>

          {/* Why Buy Section */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold mb-2 text-gray-800">
              খেজুরের গুড় কেন নিবেন?
            </h3>
            <p>
              আমরা দিচ্ছি রেগুলার খাটি খেজুর গুড়ের নিশ্চয়তা। কোন প্রকার ভেজাল বা
              কেমিক্যাল ব্যবহার না করে এই খেজুর গুড় একদম কৃষক পর্যায় থেকে
              আপনাদের কাছে বাসায় পৌঁছে দিয়ে থাকি। <br /> <br />
              <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                <li>
                  আমাদের খাটি খেজুরের গুড় ভেজালমুক্ত ও ক্ষতিকর কোন কেমিক্যাল
                  ব্যবহার করা হয় না। সম্পূর্ন নিজেদের তত্ত্বাবধানে প্রস্তুত করা
                  হয়।
                </li>
                <li>
                  খেজুরের রস গুলো ভালো করে ছেঁকে এরপর পরিষ্কার পাত্রে ঢেলে গুড়
                  তৈরি করা হয়।{" "}
                </li>
                <li>
                  {" "}
                  সঠিকমাত্রায় জ্বাল দিয়ে প্রস্তুত করা হয় বলে পুষ্টিগুন বজায়
                  থাকে।
                </li>
                <li>
                  কৃত্রিম চিনি, রাসায়নিক রঙ, হাইড্রোজ, ফিটকিরি সহ অন্যান্য
                  রাসায়নিক পদার্থ ব্যবহার করা হয় নি। তাই ১০০ ভাগ খাটি ও
                  প্রাকৃতিক।{" "}
                </li>
                <li>
                  {" "}
                  স্বাস্থ্যবিধি মেনে গুড় প্রস্তুত করা হয় বলে ১০০%
                  স্বাস্থ্যসম্মত।
                </li>
                <li>
                  পরিষ্কার পরিচ্ছন্ন পাত্রে তৈরি করে ভালো করে প্যাকেজিং করে
                  কুরিয়ারে পাঠানো হয়। যেন গুড়ের মান ঠিক থাকে ও গুড় গুলো অক্ষত
                  অবস্থায় হাতে পান।
                </li>
              </ul>
            </p>{" "}
            <br />
            <br />
            <ul className="list-disc list-inside text-gray-600 leading-relaxed">
              <li>✅ ১০০% খাটি ও ভেজালমুক্ত।</li>
              <li>✅ কোন চিনি বা ক্ষতিকর কেমিক্যাল ব্যবহার করা হয়নি।</li>
              <li>✅ স্বাস্থ্যসম্মত পদ্ধতিতে প্রস্তুত।</li>
              <li>✅ কৃষকের কাছ থেকে সরাসরি সংগ্রহ করা।</li>
              <li>✅ পরিষ্কার প্যাকেজিং ও কুরিয়ার সাপোর্ট।</li>
            </ul>
            <br /> <br />
            <p>
              **যেহেতু আমাদের এই আইটেম গুলোর স্টক কম থাকে তাই প্রি-অর্ডার করে
              রাখতে পারেন।
            </p>
          </div>

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
