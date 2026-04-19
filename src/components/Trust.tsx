import { ShieldCheck, Award, Leaf, FileCheck, Globe2, Wheat } from "lucide-react";

const certifications = [
  { icon: Leaf, label: "NPOP Certified", sub: "India Organic" },
  { icon: FileCheck, label: "APEDA Registered", sub: "Govt. of India" },
  { icon: ShieldCheck, label: "Phytosanitary", sub: "Certified Export" },
  { icon: Award, label: "Grade A Quality", sub: "Sortex Cleaned" },
  { icon: Globe2, label: "Global Export", sub: "10+ Countries" },
  { icon: Wheat, label: "Gujarat Origin", sub: "Premium Source" },
];

export default function Trust() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500 mb-2">
            Our Credentials
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Certified Quality You Can Trust
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-4">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <div
                key={index}
                className="group flex items-center gap-3 px-5 py-4 bg-gray-50 hover:bg-orange-50 rounded-2xl border border-gray-200 hover:border-orange-400 transition-all duration-300 w-full sm:w-auto"
              >
                <div className="w-10 h-10 bg-orange-100 group-hover:bg-orange-500 rounded-xl flex items-center justify-center transition-colors duration-300 shrink-0">
                  <Icon className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="font-bold text-sm text-gray-900">{cert.label}</div>
                  <div className="text-xs text-gray-500">{cert.sub}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
