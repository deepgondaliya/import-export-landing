// src/components/Footer.tsx
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo + Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/Swastik-WEB-01.png"
                alt="Swastik Global Exim Logo"
                width={180}
                height={60}
                className="rounded-lg"
              />
            </div>
            <p className="text-gray-400 leading-relaxed max-w-xs">
              Your trusted partner for seamless global import & export solutions. 
              We connect businesses to the world with reliability and expertise.
            </p>

            <div className="flex gap-4 mt-8">
              <a href="#" className="w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110">
                {/* Facebook */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110">
                {/* X / Twitter */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110">
                {/* LinkedIn */}
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" className="w-12 h-12 bg-blue-950 rounded-full flex items-center justify-center hover:bg-orange-600 transition-all duration-300 hover:scale-110">
                {/* Instagram */}
                <svg className="w-5 h-5 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/></svg>
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
                    className="text-gray-400 hover:text-orange-500 transition-colors duration-300 text-base"
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
                <MapPin className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <span>Shitiratna Avenue, Shop No 3, A-Block,<br />New C G Road, Chandkheda, Gandhinagar 382424, Gujarat, India</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-orange-500" />
                <span>+91 (999) 802-3639</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-orange-500" />
                <span>swastikinternationalexim@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
          <p>© 2025 Swastik Global Exim. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-orange-500 transition">Privacy Policy</a>
            <a href="#" className="hover:text-orange-500 transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}