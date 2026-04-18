// src/components/Countries.tsx
import { Globe } from "lucide-react";

export default function Countries() {
  const countries = [
    { name: "United States", code: "us" },
    { name: "UAE", code: "ae" },
    { name: "China", code: "cn" },
    { name: "United Kingdom", code: "gb" },
    { name: "Germany", code: "de" },
    { name: "Singapore", code: "sg" },
    { name: "Australia", code: "au" },
    { name: "Canada", code: "ca" },
    { name: "India", code: "in" },
    { name: "Saudi Arabia", code: "sa" },
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
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {countries.map((country, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:border-red-500 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 aspect-4/3"
            >
              {/* Flag Image — full card background */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://flagcdn.com/w320/${country.code}.png`}
                alt={`${country.name} flag`}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Dark gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

              {/* Text overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-3 text-center">
                <h3 className="text-xs font-bold text-white tracking-wide leading-tight">
                  {country.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}