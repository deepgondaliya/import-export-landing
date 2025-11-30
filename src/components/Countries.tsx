// src/components/Countries.tsx
import { Globe } from "lucide-react";

export default function Countries() {
  const countries = [
    { name: "United States", flag: "US" },
    { name: "UAE", flag: "UAE" },
    { name: "China", flag: "CN" },
    { name: "United Kingdom", flag: "UK" },
    { name: "Germany", flag: "DE" },
    { name: "Singapore", flag: "SG" },
    { name: "Australia", flag: "AU" },
    { name: "Canada", flag: "CA" },
    { name: "India", flag: "IN" },
    { name: "Saudi Arabia", flag: "SA" },
  ];

  return (
    <section id="countries" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-red-200/70 rounded-full mb-6">
            <Globe className="w-10 h-10 text-red-500" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Countries We Serve
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Operating across major trade hubs worldwide with established networks.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-8 bg-card rounded-2xl border border-gray-300 hover:border-red-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {country.flag}
              </div>
              <h3 className="text-sm font-bold text-gray-600 tracking-wide">
                {country.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}