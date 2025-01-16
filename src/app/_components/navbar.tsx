"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { usePathname, useRouter } from "next/navigation"; // Add useRouter to handle navigation
import { categories } from "../../../shared/data";
import Link from "next/link";
import CartIcon from "../../../shared/icons/cart-icon";
import BarIcon from "../../../shared/icons/bar-icon";

const Navbar = () => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const dropdownRef = useRef<HTMLUListElement>(null);

  const currentPath = usePathname(); // Get the current path dynamically
  const router = useRouter(); // Use for programmatic navigation

  // Memoized function to count products by category
  const categoryProductCounts = useMemo(() => {
    return categories.reduce((counts: { [key: string]: number }, category) => {
      const productCount = category.subCategories.reduce(
        (sum, subCategory) => sum + subCategory.products.length,
        0
      );
      counts[category.name] = productCount;
      return counts;
    }, {});
  }, []);

  // Toggle mobile menu visibility
  const handleMobileMenuToggle = () => {
    setMobileMenuVisible((prev) => !prev);
    setDropdownVisible(false); // Ensure dropdown closes when mobile menu opens
  };

  // Handle clicking on subcategory in mobile menu
  const handleSubcategoryClick = (path: string) => {
    setMobileMenuVisible(false); // Close mobile menu
    router.push(path); // Navigate to the subcategory path
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownVisible(false);
        setHoveredCategory(null); // Close subcategories
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className=" bg-[#1E293B] text-white fixed top-0 left-0 z-10 w-full">
      <div className="container rounded mx-auto flex items-center justify-between py-2 px-5 lg:px-10">
        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={handleMobileMenuToggle}
            aria-label="Toggle mobile menu"
          >
            <BarIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Categories dropdown for desktop */}
        <div className="relative hidden md:block z-10">
          <button
            className="btn btn-outline p-2 bg-slate-600 px-3 py-2 rounded-xl hover:bg-slate-700 ease-linear duration-150"
            aria-haspopup="true"
            aria-expanded={isDropdownVisible}
            onMouseEnter={() => setDropdownVisible(true)}
            onMouseLeave={() => setDropdownVisible(false)}
            onClick={() => setDropdownVisible((prev) => !prev)}
          >
            সকল ক্যাটাগরী
          </button>

          {isDropdownVisible && (
            <ul
              ref={dropdownRef}
              className="absolute left-0 w-72 menu p-2 bg-white border border-gray-200 shadow-lg rounded-lg"
              onMouseEnter={() => setDropdownVisible(true)}
              onMouseLeave={() => {
                setDropdownVisible(false);
                setHoveredCategory(null); // Hide subcategories when leaving the dropdown
              }}
            >
              {categories.map((category) => (
                <li
                  key={category.label}
                  className={`flex items-center justify-between py-2 px-4 border-b relative ${
                    currentPath === category.path
                      ? "bg-primary text-white"
                      : "hover:bg-slate-100"
                  }`}
                  onMouseEnter={() => setHoveredCategory(category.name)}
                  onMouseLeave={() => setHoveredCategory(null)}
                >
                  <Link
                    href={category.path}
                    className={`${
                      currentPath === category.path
                        ? "font-bold text-white"
                        : "text-gray-700"
                    }`}
                  >
                    {category.name}
                  </Link>
                  <span
                    className={
                      currentPath === category.path
                        ? "text-white"
                        : "text-gray-500"
                    }
                  >
                    ({categoryProductCounts[category.name] || 0})
                  </span>

                  {/* Subcategories dropdown */}
                  {hoveredCategory === category.name && (
                    <ul className="absolute top-0 left-full w-72 menu p-2 bg-white border border-gray-200 shadow-lg rounded-lg">
                      {category.subCategories.map((subCategory) => (
                        <li
                          key={subCategory.id}
                          className={`py-2 px-4 border-b relative ${
                            currentPath === subCategory.path
                              ? "bg-primary text-white"
                              : "hover:bg-slate-50"
                          }`}
                        >
                          <Link
                            href={subCategory.path}
                            className={`${
                              currentPath === subCategory.path
                                ? "font-bold text-white"
                                : "text-gray-700"
                            }`}
                          >
                            {subCategory.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Desktop navigation */}
        <div className="hidden md:block lg:flex">
          <ul className="flex justify-center items-center gap-5">
            <li
              className={`font-roboto ${
                currentPath === "/"
                  ? "bg-primary px-4 py-1 rounded-lg text-slate-100 font-bold"
                  : ""
              }`}
            >
              <Link href="/">হোম</Link>
            </li>
            <li
              className={`mx-2 font-roboto ${
                currentPath === "/gur"
                  ? "bg-primary px-4 py-1 rounded-lg text-slate-100 font-bold"
                  : ""
              }`}
            >
              <Link href="/gur">গুড়</Link>
            </li>
            <li
              className={`font-roboto ${
                currentPath === "/tel"
                  ? "bg-primary px-4 py-1 rounded-lg text-slate-100 font-bold"
                  : ""
              }`}
            >
              <Link href="/tel">তেল</Link>
            </li>
            <li
              className={`font-roboto ${
                currentPath === "/mangso"
                  ? "bg-primary px-4 py-1 rounded-lg text-slate-100 font-bold"
                  : ""
              }`}
            >
              <Link href="/mangso">মাংস</Link>
            </li>
            <li
              className={`font-roboto font-semibold ${
                currentPath === "/contact"
                  ? "bg-primary px-4 py-1 rounded-lg text-slate-100 font-bold"
                  : ""
              }`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Cart and contact info */}
        <div className="hidden md:flex gap-6 items-center">
          <div className="flex items-center gap-1">
            <CartIcon className="w-6 h-6" />
            <a className="font-semibold font-roboto" href="tel:+8801719355375">
              +8801719355375
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuVisible && (
        <div className="px-4 py-4 bg-slate-100 rounded-lg lg:hidden">
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category.label} className="border-b pb-2 flex flex-col">
                <div className="flex justify-between">
                  <Link
                    href={category.path}
                    className={`${
                      currentPath === category.path
                        ? "text-primary font-bold"
                        : "text-gray-700"
                    }`}
                  >
                    {category.name}
                  </Link>
                  <span
                    className={`${
                      currentPath === category.path
                        ? "text-primary"
                        : "text-gray-500"
                    }`}
                  >
                    ({categoryProductCounts[category.name] || 0})
                  </span>
                </div>
                {/* Subcategories for mobile */}
                <ul className="pl-4 mt-2 space-y-2">
                  {category.subCategories.map((subCategory) => (
                    <li key={subCategory.id}>
                      <button
                        onClick={() => handleSubcategoryClick(subCategory.path)}
                        className={`${
                          currentPath === subCategory.path
                            ? "text-primary font-bold"
                            : "text-gray-700"
                        }`}
                      >
                        {subCategory.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
