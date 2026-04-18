// src/components/Footer.tsx
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.svg"
                alt="GlobalTrade Logo"
                width={120}
                height={120}
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Your trusted partner for seamless global import & export solutions. 
              We connect businesses to the world with reliability and expertise.
            </p>

            <div className="flex gap-4 mt-8">
              <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center hover:bg-red-600 transition-all duration-300 hover:scale-110">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-4">
              {["Services", "Process", "Countries", "About", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-red-500 transition-colors duration-300 text-base"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Our Services</h3>
            <ul className="space-y-4 text-gray-400">
              <li>Import & Export Management</li>
              <li>Trade Documentation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">Get in Touch</h3>
            <div className="space-y-5 text-gray-400">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
                <span>123 Trade Plaza, Global City<br />New York, NY 10001</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-red-500" />
                <span>+91 (999) 802-3639</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-red-500" />
                <span>swastikinternationalexim@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 GlobalTrade. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-red-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-red-500 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}