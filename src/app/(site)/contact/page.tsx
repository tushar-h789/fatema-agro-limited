'use client'

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { InstagramLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setResponseMessage("আপনার বার্তা পাঠানো হয়েছে। ধন্যবাদ!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const data = await response.json();
        setResponseMessage(data.error || "কিছু ভুল হয়েছে, আবার চেষ্টা করুন।");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setResponseMessage("ফর্ম জমা দিতে ব্যর্থ হয়েছে।");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-10 px-4">
      <Card className="max-w-4xl w-full shadow-lg border border-gray-200 rounded-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gray-800">
            প্রয়োজনে যোগাযোগ করুন
          </CardTitle>
          <p className="text-gray-600 mt-2">
            আপনার প্রশ্ন, পরামর্শ বা যেকোনো সহায়তার জন্য আমাদের সাথে যোগাযোগ করুন।
            নিচের ফর্মটি পূরণ করে বার্তা পাঠান, আমরা দ্রুত সাড়া দেব।
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  আপনার নাম
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="আপনার নাম লিখুন"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  ইমেইল
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="আপনার ইমেইল লিখুন"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>
            </div>

            {/* Subject Field */}
            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700"
              >
                বিষয়
              </label>
              <Input
                id="subject"
                name="subject"
                placeholder="বার্তার বিষয় লিখুন"
                value={formData.subject}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                বার্তা
              </label>
              <Textarea
                id="message"
                name="message"
                placeholder="আপনার বার্তা লিখুন"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="mt-1"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="w-full bg-primary text-white text-lg font-medium rounded-lg shadow-md"
              >
                বার্তা পাঠান
              </Button>
            </div>
          </form>

          {/* Response Message */}
          {responseMessage && (
            <p
              className={`mt-6 text-center text-lg ${
                responseMessage.includes("ধন্যবাদ")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {responseMessage}
            </p>
          )}

          {/* Contact Info */}
          <div className="mt-8 border-t pt-6 text-center space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">
              Contact Information
            </h3>
            <p className="text-gray-600">
              📍 Naogaon Sadar, Naogaon, Rajshahi, Bangladesh <br />
              📞 (+880 )1719355375 <br />
              ✉️ fatemaagroo@gmail.com
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.facebook.com/fatemaagroo"
                className="text-blue-600 hover:text-blue-700"
                aria-label="Facebook"
                target="blank"
              >
                <FaFacebook className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                className="text-pink-500 hover:text-pink-600"
                aria-label="Instagram"
              >
                <InstagramLogoIcon className="h-6 w-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/tushar-h789/"
                className=" text-blue-700"
                aria-label="Instagram"
              >
                <LinkedInLogoIcon className="h-6 w-6" />
              </a>
              <a
                href="https://wa.me/8801719355375"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 text-2xl"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
