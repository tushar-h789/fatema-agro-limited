'use client';

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import emailjs from "emailjs-com";

export default function OrderForm() {
  const [params, setParams] = useState({
    productName: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    setParams({
      productName: searchParams.get("productName") || "",
      quantity: searchParams.get("quantity") || "",
      price: searchParams.get("price") || "",
    });
  }, []);

  const [formData, setFormData] = useState({
    fullName: "",
    fullAddress: "",
    phoneNumber: "",
    comments: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const sendEmail = () => {
    const templateParams = {
      productName: params.productName,
      quantity: params.quantity,
      price: params.price,
      fullName: formData.fullName,
      fullAddress: formData.fullAddress,
      phoneNumber: formData.phoneNumber,
      comments: formData.comments || "N/A",
    };

    emailjs
      .send(
        "service_9npt1t8",
        "template_l3sjxo8",
        templateParams,
        "1AXSdbPWEXJF4rnjo"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          alert("আপনার অর্ডার সফলভাবে পাঠানো হয়েছে!");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("দুঃখিত, অর্ডার পাঠাতে সমস্যা হয়েছে। পরে আবার চেষ্টা করুন।");
        }
      );
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail();
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-10 px-4">
      <Card className="max-w-3xl w-full shadow-xl border border-gray-300 rounded-lg">
        <CardHeader className="text-center bg-gradient-to-r from-green-400 to-blue-400 py-6 rounded-t-lg">
          <CardTitle className="text-3xl font-bold text-white">
            আপনার অর্ডার নিশ্চিত করুন
          </CardTitle>
          <p className="text-white mt-2">
            নিচের ফর্মটি পূরণ করুন। পণ্যের তথ্য অগ্রিম পূরণ করা হয়েছে।
          </p>
        </CardHeader>
        <CardContent className="bg-white py-8 px-6 rounded-b-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
                পণ্যের নাম
              </label>
              <Input
                id="productName"
                name="productName"
                value={params.productName}
                readOnly
                className="mt-1 bg-gray-100 border-gray-300 text-gray-700"
              />
            </div>

            <div>
              <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">
                পরিমাণ
              </label>
              <Input
                id="quantity"
                name="quantity"
                value={params.quantity}
                readOnly
                className="mt-1 bg-gray-100 border-gray-300 text-gray-700"
              />
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                মূল্য
              </label>
              <Input
                id="price"
                name="price"
                value={params.price}
                readOnly
                className="mt-1 bg-gray-100 border-gray-300 text-gray-700"
              />
            </div>

            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                আপনার নাম
              </label>
              <Input
                id="fullName"
                name="fullName"
                placeholder="আপনার নাম লিখুন"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 border-gray-300"
                required
              />
            </div>

            <div>
              <label htmlFor="fullAddress" className="block text-sm font-medium text-gray-700">
                পূর্ণ ঠিকানা
              </label>
              <Input
                id="fullAddress"
                name="fullAddress"
                placeholder="আপনার ঠিকানা লিখুন"
                value={formData.fullAddress}
                onChange={handleChange}
                className="mt-1 border-gray-300"
                required
              />
            </div>

            <div>
              <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">
                ফোন নম্বর
              </label>
              <Input
                id="phoneNumber"
                name="phoneNumber"
                placeholder="আপনার ফোন নম্বর লিখুন"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="mt-1 border-gray-300"
                required
              />
            </div>

            <div>
              <label htmlFor="comments" className="block text-sm font-medium text-gray-700">
                মন্তব্য (ঐচ্ছিক)
              </label>
              <Textarea
                id="comments"
                name="comments"
                placeholder="বিশেষ নির্দেশনা লিখুন (যদি থাকে)"
                rows={4}
                value={formData.comments}
                onChange={handleChange}
                className="mt-1 border-gray-300"
              />
            </div>

            <div className="text-center">
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-lg font-medium rounded-lg shadow-md hover:opacity-90 py-2"
              >
                অর্ডার সম্পন্ন করুন
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
