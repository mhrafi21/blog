import Category from "@/components/category/Category";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SearchBar } from "@/components/SearchBar/SearchBar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";

import React from "react";
import { Outlet, ScrollRestoration } from "react-router"; 


const RootLayout: React.FC = () => {
  return (
    <div>
      <ScrollRestoration />
      <Navbar /> 
      <div className="container mx-auto px-4 lg:px-8">
  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
    {/* Left Sidebar */}
    <aside className="lg:col-span-3 mt-4 hidden lg:block">
      <div className="sticky top-4 h-[calc(100vh-1rem)] space-y-4">
        <Category />
      </div>
    </aside>

    {/* Main Content */}
    <main className="lg:col-span-6 space-y-4">
      <Outlet />
      <Toaster />
    </main>

    {/* Right Sidebar */}
    <aside className="lg:col-span-3 mt-4  hidden lg:block">
      <div className="sticky top-4 h-[calc(100vh-1rem)] overflow-y-auto space-y-4">
        <Card className="p-4">
          <div>
            <CardHeader className="pt-0 text-center">
              <CardTitle>
                Search
              </CardTitle>
            </CardHeader>
            <SearchBar />
          </div>
          <div>
            <h3 className="font-semibold text-md mt-4">Follow Me</h3>
            <ul className="space-y-4 text-muted-foreground text-sm">
              <li className="mt-4">
                <a href="https://github.com/mhrafi21" className="hover:underline" target="_blank">GitHub</a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mhrafi21" className="hover:underline" target="_blank">LinkedIn</a>
              </li>
              <li>
                <a href="https://www.facebook.com/mhrafi22" className="hover:underline" target="_blank">Facebook</a>
              </li>
            </ul>
          </div>
        </Card>
      </div>
    </aside>
  </div>
</div>


      <Footer />
    </div>
  );
};

export default RootLayout;
