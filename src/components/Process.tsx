// src/components/Process.tsx
import { MessageCircle, Search, FileCheck2, Ship, Package } from "lucide-react";
import Card3D from "@/components/Card3D";

export default function Process() {
  const steps = [
    {
      icon: MessageCircle,
      title: "Tell Us Your Requirement",
      description: "Share your import/export needs and we'll create a custom solution.",
    },
    {
      icon: Search,
      title: "Product Sourcing & Price Validation",
      description: "We find the best suppliers and negotiate competitive pricing.",
    },
    {
      icon: FileCheck2,
      title: "Compliance & Documentation",
      description: "Handle all legal requirements, permits, and trade documents.",
    },
    {
      icon: Ship,
      title: "Shipping & Customs Clearance",
      description: "Manage logistics and clear customs at both ends seamlessly.",
    },
    {
      icon: Package,
      title: "Final Delivery",
      description: "Track your shipment until it reaches your warehouse safely.",
    },
  ];

  return (
    <section id="process" className="py-24 bg-gray-200/50 section-depth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A simple, transparent process from inquiry to delivery.
          </p>
        </div>

        <div className="relative">
          <div className="hidden lg:block absolute left-0 right-0 top-25 h-2 bg-gray-200/70 -z-10"
               style={{ width: '90%', margin: '0 auto', left: '5%', right: '5%' }} />

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <Card3D
                  key={index}
                  className="relative flex flex-col items-center text-center group p-6 bg-white rounded-2xl border border-gray-200 shadow-3d card-glow cursor-default"
                  intensity={8}
                  style={{ animation: `fadeIn 0.8s ease-out ${index * 0.12}s both` } as React.CSSProperties}
                >
                  <div className="relative mb-6" style={{ transform: "translateZ(20px)" }}>
                    <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center shadow-xl group-hover:scale-110 transition-all duration-300 animate-float">
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-10 h-10 bg-blue-900 text-white rounded-full flex items-center justify-center text-lg font-bold shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  <div style={{ transform: "translateZ(10px)" }}>
                    <h3 className="text-xl font-bold text-black mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm max-w-xs">
                      {step.description}
                    </p>
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
