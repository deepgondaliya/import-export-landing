// src/components/WhyChooseUs.tsx
import { CheckCircle2, ShieldCheck, Handshake, FileCheck2, Timer } from "lucide-react";
import Card3D from "@/components/Card3D";

export default function WhyChooseUs() {
  const benefits = [
    "Verified International Network",
    "End-to-End Logistics Management",
    "Hassle-free Documentation",
    "Competitive Pricing",
    "Expert Trade Consultants",
    "24/7 Customer Support",
  ];

  const trustCards = [
    {
      icon: ShieldCheck,
      title: "Certified Quality",
      description: "Every product is NPOP & APEDA certified — meeting international standards before it leaves our hands.",
    },
    {
      icon: Handshake,
      title: "Long-term Partnerships",
      description: "We build lasting relationships with buyers and suppliers built on transparency and mutual growth.",
    },
    {
      icon: FileCheck2,
      title: "Transparent Process",
      description: "Clear documentation, honest pricing, and full compliance at every step of the shipment.",
    },
    {
      icon: Timer,
      title: "Reliable Delivery",
      description: "On-time, compliant shipments with real-time updates so you always know where your order stands.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-gray-200/50 section-depth">
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
                  <CheckCircle2 className="w-7 h-7 text-orange-500 flex-shrink-0 mt-0.5" />
                  <span className="text-lg font-medium text-black">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Trust Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustCards.map((card, index) => {
              const Icon = card.icon;
              return (
                <Card3D
                  key={index}
                  className="group p-6 bg-white rounded-2xl border border-black shadow-3d card-glow cursor-default"
                  intensity={10}
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors duration-300"
                    style={{ transform: "translateZ(16px)" }}>
                    <Icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div style={{ transform: "translateZ(8px)" }}>
                    <h3 className="font-bold text-black text-base mb-2">{card.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{card.description}</p>
                  </div>
                </Card3D>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
