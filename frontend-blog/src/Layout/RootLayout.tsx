import Category from "@/components/category/Category";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import { Outlet, ScrollRestoration } from "react-router";

const RootLayout: React.FC = () => {
  return (
    <div>
      <ScrollRestoration />
      <Navbar />
      <div className="mt-[80px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex gap-3">
          <div className="md:w-[30%]">
            <Category />
          </div>
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RootLayout;
