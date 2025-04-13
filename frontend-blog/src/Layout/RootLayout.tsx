import Category from "@/components/category/Category";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { Card } from "@/components/ui/card";

import React from "react";
import { Outlet, ScrollRestoration } from "react-router"; 

const RootLayout: React.FC = () => {
  return (
    <div>
      <ScrollRestoration />
      <Navbar /> {/* ✅ Inserted here */}

      <div className="grid grid-cols-1 container mx-auto px-4 lg:px-8 lg:grid-cols-12 gap-6">
        {/* Left Sidebar */}
        <aside className="lg:col-span-3 h-screen hidden lg:block">
          <div className="sticky mt-4 space-y-4">
          
            <Category />
          </div>
        </aside>

        {/* Main Content */}
        <div className="lg:col-span-6 space-y-4">
          <Outlet />
        </div>

        {/* Right Sidebar */}
        <aside className="lg:col-span-3 hidden lg:block">
          <div className="sticky pt-4 space-y-4">
            <Card className="p-4">
            <div className="">
              <h2 className="font-semibold text-lg mb-3">Search</h2>
              <SearchBar />
            </div>
            <div>
              <h3 className="font-semibold text-md mt-4">Follow Me</h3>
              <ul className="space-y-4 text-muted-foreground text-sm">
                <li className="mt-4"><a href="https://github.com/mhrafi21" className="hover:underline" target="_blank">GitHub</a></li>
                <li><a href="https://www.linkedin.com/in/mhrafi21" className="hover:underline" target="_blank">LinkedIn</a></li>
                <li><a href="https://www.facebook.com/mhrafi22" target="_blank" className="hover:underline">Facebook</a></li>
              </ul>
            </div>
            </Card>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
