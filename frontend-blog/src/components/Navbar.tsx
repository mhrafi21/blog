// src/components/Navbar.tsx

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, NavLink } from "react-router";
import useCategory from "@/hooks/useCategory";
import ModeToggle from "./ModeToogle";
import { SearchBar } from "./SearchBar/SearchBar";
import { TCategory } from "@/interface";

const Navbar:React.FunctionComponent = () => {
  const [open, setOpen] = useState(false);
  const { data } = useCategory();

  return (
    <div>

    <header className="sticky top-0 z-50 lg:border-b w-full   bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-10 items-center justify-between px-4 mx-auto lg:px-8">
        <Link to="/" className="text-xl font-bold">
          The Learning stack
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden h-10 space-x-6 lg:flex lg:items-center">
          <NavLink to="/" className="hover:text-primary">
            Home
          </NavLink>
          <ModeToggle />
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden">
          <span className="mr-2"><ModeToggle /></span>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              
              <Button variant="outline" size="icon" aria-label="Toggle Menu">
                {open ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px] pt-10">
              <nav className="flex flex-col space-y-4 text-lg">
                <NavLink to="/" onClick={() => setOpen(false)}>
                  Home
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
    <div className="lg:hidden block mt-1 pb-2 container mx-auto px-4 lg:px-8">
          <SearchBar />
    </div>
    <div className="container border-b  lg:border-none  lg:hidden block mx-auto px-4 lg:px-8">
        <div className="flex items-center ">
          {data?.map((cate: TCategory) => (
            <NavLink
              key={cate.slug}
              to={`/category/${cate.slug}`}
              className={({ isActive }) =>
                `block px-3 py-2 uppercase rounded-md transition-colors text-sm 
                           ${
                             isActive
                               ? "bg-primary text-primary-foreground"
                               : "hover:bg-muted"
                           }`
              }
            >
              {cate.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>

  );
};

export default Navbar;
