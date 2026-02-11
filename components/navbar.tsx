"use client";
import Link from "next/dist/client/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
const navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#aboutUs" },
    { name: "Services", href: "#shop" },
    { name: "Our work", href: "#services" },
    { name: "Questions", href: "#questions" },
    
  ];

  return (
    <nav className="w-full bg-navbar sticky z-50 top-0 border-b border-white h-16">
      <div className="px-4 sm:px-6 lg:px-20">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="#home" className="text-2xl font-bold text-white">
              GreenNest
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-white hover:text-grey-600 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="flex gap-4 items-center">
              <Link href="#contact">
                <Button className="bg-white text-black px-5 py-2 rounded-none hover:bg-white hover:cursor-pointer">
                  Contact
                </Button>
              </Link>
            </div>
            {/* <Button className="bg-transparent text-white rounded-none" variant="outline" >
              Contact
            </Button>
            <Button className="bg-white text-black px-5 py-2 rounded-none hover:bg-white hover:cursor-pointer" >
              Menu
            </Button> */}
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="block px-3 py-2 text-gray-600 hover:bg-gray-50 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <button className="w-full text-left px-3 py-2 text-blue-600 font-bold">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default navbar;
