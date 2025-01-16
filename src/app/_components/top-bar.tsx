// components/TopBar.tsx
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";

const TopBar: React.FC = () => {
  return (
    <div className="bg-[#1E293B] text-gray-300 py-2 px-4 mt-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-2 md:gap-0">
        
        {/* Contact Information */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold">
            Call us:{" "}
            <a
              href="tel:01719-355375"
              className="underline text-blue-400 hover:text-blue-600"
            >
              01719-355375
            </a>
          </span>
        </div>
        
        {/* Slogan */}
        <div>
          <span className="text-lg italic font-bold">
            Grown by nature & served by nature
          </span>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-3 text-xl">
          <a
            href="https://www.facebook.com/fatemaagroo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaFacebook />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-400"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/8801719355375"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400"
          >
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
