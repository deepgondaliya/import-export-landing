// src/components/Trust.tsx
import { Package2 } from "lucide-react";

export default function Trust() {
  const brands = [
    "TechCorp",
    "GlobalBrand",
    "TradeMax",
    "ShipFast",
    "ExportPro",
    "WorldLink",
  ];

  return (
    <section className="py-20 bg-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-2">
            Trusted Worldwide
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Trusted by 250+ Global Brands
          </h2>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="group flex items-center justify-center p-8 bg-white rounded-2xl border border-gray-300 hover:border-gray-700/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className="text-center">
                <span className="text-2xl font-bold text-gray-500/80 group-hover:text-gray-900 transition-colors">
                  {brand}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}