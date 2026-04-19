"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navItems = ["Services", "Products", "Process", "Countries", "About", "Contact"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <div className="relative">
        {/* Pill navbar */}
        <div className="bg-white border border-gray-200 rounded-full shadow-lg">
          <nav className="flex items-center justify-between px-2 py-2">
            {/* Logo */}
            <div className="flex items-center pl-3">
              <Image
                src="/Swastik-WEB-01.png"
                alt="Swastik Global Exim Logo"
                width={160}
                height={52}
                className="object-contain"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-orange-500 font-medium text-sm transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <a
              href="#contact"
              className="hidden lg:block bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-semibold text-sm shadow-md hover:shadow-lg transition-all"
            >
              Get a Quote
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden mr-2 w-10 h-10 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50 transition"
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </nav>
        </div>

        {/* Mobile Dropdown — floats BELOW the pill, separate card */}
        {menuOpen && (
          <div className="lg:hidden absolute top-full mt-3 left-0 right-0 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            <div className="p-3 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 hover:text-orange-500 font-medium text-sm py-3 px-4 rounded-xl hover:bg-orange-50 transition-colors"
                >
                  {item}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-1 bg-orange-500 hover:bg-orange-600 text-white text-center py-3 rounded-xl font-semibold text-sm transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
