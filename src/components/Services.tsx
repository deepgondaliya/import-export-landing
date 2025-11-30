// src/components/Services.tsx
import {
  ArrowDownUp,
  ArrowUpRight,
  Search,
  Plane,
  FileCheck,
  Warehouse,
  FileText,
  Network,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: ArrowDownUp,
      title: "Import Services",
      description: "Seamless import solutions with end-to-end customs clearance and delivery.",
    },
    {
      icon: ArrowUpRight,
      title: "Export Services",
      description: "Expand your reach globally with our comprehensive export management.",
    },
    {
      icon: Search,
      title: "Global Sourcing",
      description: "Find verified suppliers worldwide and negotiate the best prices.",
    },
    {
      icon: Plane,
      title: "Freight Forwarding",
      description: "Air and sea freight solutions tailored to your business needs.",
    },
    {
      icon: FileCheck,
      title: "Customs Clearance",
      description: "Expert handling of all customs documentation and compliance.",
    },
    {
      icon: Warehouse,
      title: "Warehousing",
      description: "Secure storage facilities at strategic global locations.",
    },
    {
      icon: FileText,
      title: "Documentation Support",
      description: "Complete assistance with bills, certificates, and trade documents.",
    },
    {
      icon: Network,
      title: "Supply Chain Management",
      description: "Optimize your entire supply chain for maximum efficiency.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete import-export solutions designed to help your business thrive in global markets.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-2xl border border-black hover:border-red-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animation: `fadeIn 0.8s ease-out ${index * 0.1}s both` }}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-red-200/70 rounded-2xl flex items-center justify-center group-hover:bg-red-500 group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-8 h-8 text-red-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-black leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}