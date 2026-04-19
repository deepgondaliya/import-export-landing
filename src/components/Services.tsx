import { ArrowDownUp, ArrowUpRight, FileText } from "lucide-react";
import Card3D from "@/components/Card3D";

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
      icon: FileText,
      title: "Documentation Support",
      description: "Complete assistance with bills, certificates, and trade documents.",
    },
  ];

  return (
    <section id="services" className="py-24 bg-white section-depth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Complete import-export solutions designed to help your business thrive in global markets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card3D
                key={index}
                className="group p-8 bg-white rounded-2xl border border-gray-200 shadow-3d card-glow cursor-default"
                style={{ animation: `fadeIn 0.8s ease-out ${index * 0.15}s both` } as React.CSSProperties}
              >
                <div className="mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300"
                    style={{ transform: "translateZ(20px)" }}>
                    <Icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                </div>
                <div style={{ transform: "translateZ(10px)" }}>
                  <h3 className="text-xl font-bold text-black mb-3">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </Card3D>
            );
          })}
        </div>
      </div>
    </section>
  );
}
