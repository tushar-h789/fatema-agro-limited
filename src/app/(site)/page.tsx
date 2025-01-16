import React from "react";
import { BannerCarousel } from "./_components/banner-carousel";
import PopularProducts from "./_components/popular-products";

export default function Home() {
  return (
    <div className="container mx-auto">
      <BannerCarousel />
      <PopularProducts/>
    </div>
  );
}
