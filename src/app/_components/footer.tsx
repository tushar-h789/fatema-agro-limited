import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa";
import logo from "../../public/logo.png";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1E293B] text-gray-300 py-8 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Section 1: Logo and Company Information */}
        <div className="flex flex-col items-start">
          <Image src={logo} width={120} height={120} alt="Fatema Agro Logo" />
          <p className="mt-4 text-sm">
            Providing high-quality, organic agricultural products that are grown and served by nature.
          </p>
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h3 className="text-md font-semibold text-white">Quick Links</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
            <li><a href="/products" className="hover:text-blue-400">Products</a></li>
            <li><a href="/contact" className="hover:text-blue-400">Contact Us</a></li>
            <li><a href="/blog" className="hover:text-blue-400">Blog</a></li>
          </ul>
        </div>
        
        {/* Section 3: Product Categories */}
        <div>
          <h3 className="text-md font-semibold text-white">Product Categories</h3>
          <ul className="mt-2 space-y-2 text-sm">
            <li><a href="/products/fruits" className="hover:text-blue-400">Fruits</a></li>
            <li><a href="/products/vegetables" className="hover:text-blue-400">Vegetables</a></li>
            <li><a href="/products/grains" className="hover:text-blue-400">Grains</a></li>
            <li><a href="/products/herbs" className="hover:text-blue-400">Herbs</a></li>
          </ul>
        </div>
        
        {/* Section 4: Social Media & Contact */}
        <div>
          <h3 className="text-md font-semibold text-white">Connect with Us</h3>
          <div className="flex space-x-4 mt-2 text-lg">
            <a href="https://www.facebook.com/fatemaagroo" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaFacebook />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-400">
              <FaInstagram />
            </a>
            <a href="https://wa.me/8801719355375" target="_blank" rel="noopener noreferrer" className="hover:text-green-400">
              <FaWhatsapp />
            </a>
          </div>
          <p className="mt-4 text-sm">Call us: <a href="tel:01719-355375" className="text-blue-400 hover:text-blue-600">01719-355375</a></p>
        </div>

      </div>
      <div className="mt-8 text-center text-xs text-gray-500">
        &copy; {new Date().getFullYear()} Fatema Agro. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
