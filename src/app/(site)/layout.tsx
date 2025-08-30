import Footer from "@/app/_components/footer";
import Navbar from "@/app/_components/navbar";
import React, { ReactNode } from "react";
import Header from "../_components/header";

interface SiteLayoutProps {
  children: ReactNode;
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <div>
      {/* <TopBar/> */}
      <div className="bg-[#1E293B]">
        {/* <Header /> */}
        <Navbar />
      </div>
      <main className="container mx-auto">{children}</main>
      <Footer />
    </div>
  );
}
