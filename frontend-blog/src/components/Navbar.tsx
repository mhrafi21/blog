// src/components/Navbar.tsx

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Link, NavLink } from "react-router";
import useCategory from "@/hooks/useCategory";
import { CType } from "@/interface";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { data } = useCategory();

  return (
    <header className="sticky top-0 z-50 w-full border-b  bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16  items-center justify-between px-4 mx-auto lg:px-8">
        <Link to="/" className="text-xl font-bold">
          The Learning stack
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden space-x-6 lg:flex">
          <NavLink to="/" className="hover:text-primary">
            Home
          </NavLink>
          <NavLink to="/about" className="hover:text-primary">
            About
          </NavLink>
          <NavLink to="/contact" className="hover:text-primary">
            Contact
          </NavLink>
        </nav>

        {/* Mobile Nav Toggle */}
        <div className="lg:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Toggle Menu">
                {open ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[260px] pt-10">
              <nav className="flex flex-col space-y-4 text-lg">
                <NavLink to="/" onClick={() => setOpen(false)}>
                  Home
                </NavLink>
                <NavLink to="/about" onClick={() => setOpen(false)}>
                  About
                </NavLink>
                <NavLink to="/contact" onClick={() => setOpen(false)}>
                  Contact
                </NavLink>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <div className="container border-b py-2 lg:hidden block mx-auto px-4 lg:px-8">
       <div className="flex overflow-x-auto items-center justify-center">
       {data?.map((cate: CType) => (
          <NavLink
            key={cate.slug}
            to={`/category/${cate.slug}`}
            className={({ isActive }) =>
              `block px-3 py-2 rounded-md transition-colors text-sm font-medium
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
    </header>
  );
};

export default Navbar;
