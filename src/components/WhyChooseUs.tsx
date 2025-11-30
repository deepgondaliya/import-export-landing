// src/components/WhyChooseUs.tsx
import { CheckCircle2 } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    "Verified International Network",
    "End-to-End Logistics Management",
    "Hassle-free Documentation",
    "Competitive Pricing",
    "Expert Trade Consultants",
    "24/7 Customer Support",
  ];

  const stats = [
    { value: "250+", label: "Global Clients", color: "bg-gray-700 text-white" },
    { value: "50+", label: "Countries", color: "bg-gray-700 text-white" },
    { value: "15+", label: "Years Experience", color: "bg-gray-700 text-white" },
    { value: "10k+", label: "Shipments", color: "bg-gray-700 text-white" },
  ];

  return (
    <section id="about" className="py-24 bg-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text + Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Why Choose Us?
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We combine global expertise with local knowledge to deliver seamless import-export solutions that drive your business forward.
              </p>
            </div>

            <div className="space-y-5">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-lg font-medium text-black">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Stats Grid */}
          <div className="grid grid-cols-2 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`${stat.color} p-10 rounded-2xl text-left shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300`}
              >
                <div className="text-5xl md:text-4xl font-bold mb-3">{stat.value}</div>
                <div className="text-xl font-medium opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}