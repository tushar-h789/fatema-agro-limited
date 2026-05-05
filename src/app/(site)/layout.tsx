import Footer from "@/app/_components/footer";
import Navbar from "@/app/_components/navbar";
import React, { ReactNode } from "react";
import { CartProvider } from "@/components/cart/cart-store";

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <CartProvider>
      <div>
        {/* <TopBar/> */}
        <div className="bg-[#1E293B]">
          {/* <Header /> */}
          <Navbar />
        </div>
        <main className="container mx-auto">{children}</main>
        <Footer />
      </div>
    </CartProvider>
  );
}
