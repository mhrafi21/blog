import Category from "@/components/category/Category";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar/SearchBar";

import React from "react";
import { Outlet, ScrollRestoration } from "react-router"; 

const RootLayout: React.FC = () => {
  return (
    <div>
      <ScrollRestoration />
      <Navbar /> {/* ✅ Inserted here */}

      <div className="grid grid-cols-1 container mx-auto px-4 lg:px-8 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-[90px] space-y-4">
            <h2 className="font-semibold text-lg">Categories</h2>
            <Category />
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-6 space-y-4">
          <Outlet />
        </div>

        {/* Right Sidebar */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky top-[90px] space-y-4">
            <div>
              <h2 className="font-semibold text-lg">Search</h2>
              <SearchBar />
            </div>
            <div>
              <h3 className="font-semibold text-md mt-6">Follow Me</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li><a href="#" className="hover:underline">Twitter</a></li>
                <li><a href="#" className="hover:underline">GitHub</a></li>
                <li><a href="#" className="hover:underline">LinkedIn</a></li>
              </ul>
            </div>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
