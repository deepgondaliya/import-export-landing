"use client";

import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-7xl px-4">
      <div className="bg-white backdrop-blur border border-gray-200 rounded-full shadow-lg">
        <nav className="flex items-center justify-between px-2 py-2">
          {/* Logo */}
          <div className="flex items-center pl-3 gap-3">
            <Image
              src="/logo.svg"
              alt="GlobalTrade Logo"
              width={150}
              height={150}
              className="rounded-lg"
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            {["Services", "Process", "Countries", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-red-500 font-medium text-sm transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* CTA */}
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all">
            Get a Quote
          </button>
        </nav>
      </div>
    </header>
  );
}