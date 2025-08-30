"use client";

import Image from "next/image";
import logo from "../../public/logo.png";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Implement your search logic here (e.g., redirect or filter)
    console.log("Searching for:", searchQuery);
  };

  return (
    <header className="shadow-md mt-14 bg-[#1E293B]">
      <section className="bg-[#1E293B] container mx-auto py-4 px-4 md:px-8">
        <div className="flex flex-col bg-[#1E293B] md:flex-row items-center justify-between">
          {/* Logo */}
          <div className="mb-4 md:mb-0">
            <Link href="/">
              <Image src={logo} alt="Company Logo" width={60} height={50} />
            </Link>
          </div>

          {/* Search Bar */}
          <div className="w-full md:w-auto flex items-center">
            <form
              onSubmit={handleSearchSubmit}
              className="w-full md:w-auto flex"
            >
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={handleSearchChange}
                className="border-2 border-gray-300 p-2 rounded-md w-full md:w-64 lg:w-80 flex-grow focus:outline-none focus:ring-2 focus:bg-primary_bg focus:border-transparent transition duration-200"
                aria-label="Search"
              />
              <button
                type="submit"
                className="ml-2 bg-primary_bg text-white px-4 py-2 rounded-md hover:bg-green-700 transition duration-200"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
    </header>
  );
}
