"use client";

import { Leaf, Star, PawPrint, Package, Ship, BadgeCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const grades = [
  {
    id: "organic",
    icon: Leaf,
    label: "Organic Grade",
    badge: "NPOP Certified",
    image: "/millet-1.jpg",
    description:
      "Export-quality organic pearl millet with complete absence of synthetic chemicals. NPOP (India Organic) certified with Transaction Certificate (TC) issued by APEDA.",
    specs: [
      { param: "Purity", value: "99% – 99.5%", note: "Max 0.5% Admixture" },
      { param: "Moisture", value: "10% – 12% Max", note: "Critical for sea transit" },
      { param: "Damaged Grains", value: "Max 1% – 2%", note: "" },
      { param: "Broken Ratio", value: "Max 1% – 2%", note: "" },
      { param: "Color", value: "Distinct uniform green / grey-green / yellowish-grey", note: "" },
      { param: "Infestation", value: "Nil", note: "Free from live or dead insects" },
    ],
    certs: ["NPOP (India Organic)", "Transaction Certificate (TC)", "APEDA Issued", "No Synthetic Chemicals"],
    packaging: "25 kg or 50 kg PP / Jute woven bags",
    container: "22 – 26 MT per 20ft FCL",
    hsCode: "HS Code: 10082920",
    docs: ["APEDA RCMC", "Phytosanitary Certificate", "Certificate of Origin"],
  },
  {
    id: "premium",
    icon: Star,
    label: "Premium Export",
    badge: "Sortex Cleaned",
    image: "/millet-2.jpg",
    description:
      "Premium Sortex cleaned pearl millet with minimum 99.5% purity. Undergoes optical color sorting to ensure uniform green or golden-green appearance for top-tier retail markets.",
    specs: [
      { param: "Purity", value: "Min 99.5%", note: "Optical color sorted" },
      { param: "Moisture", value: "11% – 12% Max", note: "Prevents mold" },
      { param: "Aflatoxin", value: "< 20 ppb", note: "International standard" },
      { param: "Damaged / Discoloured", value: "Max 1% – 2%", note: "" },
      { param: "Foreign Matter", value: "Max 1%", note: "Admixture" },
      { param: "Appearance", value: "Uniform green / golden-green", note: "Premium retail" },
    ],
    certs: ["APEDA RCMC", "Phytosanitary Certificate", "Certificate of Origin"],
    packaging: "25 kg or 50 kg PP woven bags",
    container: "22 – 26 MT per 20ft FCL",
    hsCode: "HS Code: 10082920",
    docs: ["APEDA RCMC", "Phytosanitary Certificate", "Certificate of Origin"],
  },
  {
    id: "animal",
    icon: PawPrint,
    label: "Animal Feed Grade",
    badge: "Bird Feed",
    image: "/millet-3.jpg",
    description:
      "Machine cleaned pearl millet for animal and bird feed export. Clean, bright greenish-grey hue with natural smell and strict aflatoxin control for avian health compliance.",
    specs: [
      { param: "Purity", value: "98% – 99%", note: "Machine Cleaned" },
      { param: "Moisture", value: "14% Max", note: "Higher levels risk fungal growth" },
      { param: "Aflatoxin", value: "20 ppb Max", note: "Critical for avian health" },
      { param: "Broken Grains", value: "Max 1% – 3%", note: "" },
      { param: "Foreign Matter", value: "Max 1% – 3%", note: "Includes dust & other seeds" },
      { param: "Appearance", value: "Bright greenish-grey, natural smell", note: "" },
    ],
    certs: ["Phytosanitary Certificate", "Certificate of Analysis (COA)"],
    packaging: "25 kg / 40 kg / 50 kg PP woven bags",
    container: "24 MT per 20ft FCL",
    hsCode: "HS Code: 100829 / 230990",
    docs: ["Phytosanitary Certificate", "Certificate of Analysis (COA)"],
  },
];

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gray-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Export Products
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Premium agricultural commodities sourced directly from certified farms across India.
          </p>
        </div>

        {/* Product Overview Card */}
        <div className="bg-white rounded-2xl border border-black overflow-hidden mb-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Image Area */}
            <div className="relative min-h-[320px] lg:min-h-[400px]">
              <Image
                src="/pearl-millet-204098_1280.jpg"
                alt="Pearl Millet (Bajra) — Export Grade"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/80 text-white text-xs px-3 py-2 rounded-full">
                <MapPin className="w-3 h-3 text-orange-500" />
                Gujarat, India — Kutch & Ahmedabad Districts
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8 lg:p-10 flex flex-col justify-center gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
                  Export Product
                </span>
                <h3 className="text-3xl md:text-4xl font-bold text-black mt-2 mb-3">
                  Pearl Millet
                  <span className="text-gray-500 font-medium text-2xl ml-2">(Bajra)</span>
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  High-energy, drought-tolerant grain available in three export grades. Sourced
                  from premium growing regions of Gujarat, India — known for superior green varieties
                  with consistent quality.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { label: "NPOP Certified", highlight: true },
                  { label: "APEDA Registered", highlight: false },
                  { label: "Gujarat Origin", highlight: false },
                  { label: "Grade A / Sortex", highlight: false },
                ].map((badge) => (
                  <span
                    key={badge.label}
                    className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${
                      badge.highlight
                        ? "bg-orange-500 text-white border-orange-500"
                        : "bg-white text-black border-black"
                    }`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-gray-100">
                {[
                  { value: "3", label: "Export Grades" },
                  { value: "99.5%", label: "Max Purity" },
                  { value: "26 MT", label: "Per FCL" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-orange-500">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grade Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {grades.map((grade) => {
            const Icon = grade.icon;
            return (
              <div
                key={grade.id}
                className="bg-white rounded-2xl border border-black overflow-hidden flex flex-col hover:border-orange-500 hover:shadow-2xl transition-all duration-300"
              >
                {/* Grade Image */}
                <div className="relative h-48">
                  <Image
                    src={grade.image}
                    alt={`Pearl Millet — ${grade.label}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Grade Header */}
                <div className="p-5 border-b border-gray-100 flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-orange-500" />
                  </div>
                  <div>
                    <div className="font-bold text-black">{grade.label}</div>
                    <span className="text-xs font-semibold text-orange-500 bg-orange-50 px-2 py-0.5 rounded-full">
                      {grade.badge}
                    </span>
                  </div>
                </div>

                {/* Specs Table */}
                <div className="p-5 flex-1 space-y-4">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2">
                    Quality Specifications
                  </div>
                  <div className="rounded-xl overflow-hidden border border-gray-100">
                    <table className="w-full text-xs">
                      <thead>
                        <tr className="bg-blue-900 text-white">
                          <th className="text-left px-3 py-2 font-semibold">Parameter</th>
                          <th className="text-left px-3 py-2 font-semibold">Value</th>
                        </tr>
                      </thead>
                      <tbody>
                        {grade.specs.map((row, i) => (
                          <tr key={row.param} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-3 py-2 text-gray-500">{row.param}</td>
                            <td className="px-3 py-2 font-semibold text-black">{row.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* Packaging */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-2">
                      <Package className="w-3.5 h-3.5 text-orange-500" />
                      <span className="text-xs text-gray-500 font-semibold">{grade.packaging}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Ship className="w-3.5 h-3.5 text-orange-500" />
                      <span className="text-xs text-gray-500 font-semibold">{grade.container} · {grade.hsCode}</span>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="space-y-1.5">
                    {grade.certs.map((cert) => (
                      <div key={cert} className="flex items-center gap-2 text-xs text-black">
                        <BadgeCheck className="w-3.5 h-3.5 text-orange-500 shrink-0" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <div className="p-5 border-t border-gray-100">
                  <Button
                    size="sm"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                    onClick={() => {
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Request a Quote
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
