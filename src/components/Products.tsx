"use client";

import { useState } from "react";
import { Leaf, Star, PawPrint, Package, Ship, FileText, BadgeCheck, MapPin } from "lucide-react";
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
  const [activeGrade, setActiveGrade] = useState(0);
  const grade = grades[activeGrade];
  const Icon = grade.icon;

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
        <div className="bg-white rounded-2xl border border-black overflow-hidden mb-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">

            {/* Image Area */}
            <div className="relative min-h-[320px] lg:min-h-[400px]">
              <Image
                src="/pearl-millet-204098_1280.jpg"
                alt="Pearl Millet (Bajra) — Export Grade"
                fill
                className="object-cover"
              />
              {/* Origin Badge */}
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/80 text-white text-xs px-3 py-2 rounded-full">
                <MapPin className="w-3 h-3 text-red-500" />
                Gujarat, India — Kutch & Ahmedabad Districts
              </div>
            </div>

            {/* Product Info */}
            <div className="p-8 lg:p-10 flex flex-col justify-center gap-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-red-500">
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

              {/* Certification Badges */}
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
                        ? "bg-red-500 text-white border-red-500"
                        : "bg-white text-black border-black"
                    }`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 pt-2 border-t border-gray-100">
                {[
                  { value: "3", label: "Export Grades" },
                  { value: "99.5%", label: "Max Purity" },
                  { value: "26 MT", label: "Per FCL" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl font-bold text-red-500">{stat.value}</div>
                    <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Grade Tabs */}
        <div className="flex gap-3 mb-6 flex-wrap">
          {grades.map((g, i) => {
            const GIcon = g.icon;
            return (
              <button
                key={g.id}
                onClick={() => setActiveGrade(i)}
                className={`flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-300 border ${
                  activeGrade === i
                    ? "bg-red-500 text-white border-red-500 shadow-lg"
                    : "bg-white text-black border-black hover:border-red-500 hover:text-red-500"
                }`}
              >
                <GIcon className="w-4 h-4" />
                {g.label}
              </button>
            );
          })}
        </div>

        {/* Grade Detail Panel */}
        <div className="bg-white rounded-2xl border border-black overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-3">

            {/* Left: Image + Grade Info */}
            <div className="lg:col-span-1 border-b lg:border-b-0 lg:border-r border-gray-100">
              {/* Grade Image */}
              <div className="relative min-h-[200px]">
                <Image
                  src={grade.image}
                  alt={`Pearl Millet — ${grade.label}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                    <Icon className="w-5 h-5 text-red-500" />
                  </div>
                  <div>
                    <div className="font-bold text-black text-sm">{grade.label}</div>
                    <span className="text-xs font-semibold text-red-500 bg-red-50 px-2 py-0.5 rounded-full">
                      {grade.badge}
                    </span>
                  </div>
                </div>

                <p className="text-sm text-gray-600 leading-relaxed">{grade.description}</p>

                {/* Certifications */}
                <div className="space-y-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Certifications</div>
                  {grade.certs.map((cert) => (
                    <div key={cert} className="flex items-center gap-2 text-sm text-black">
                      <BadgeCheck className="w-4 h-4 text-red-500 flex-shrink-0" />
                      {cert}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Specs + Logistics */}
            <div className="lg:col-span-2 p-6 lg:p-8 space-y-8">

              {/* Specs Table */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Quality Specifications
                </h4>
                <div className="rounded-xl overflow-hidden border border-gray-100">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-black text-white">
                        <th className="text-left px-4 py-3 font-semibold">Parameter</th>
                        <th className="text-left px-4 py-3 font-semibold">Specification</th>
                      </tr>
                    </thead>
                    <tbody>
                      {grade.specs.map((row, i) => (
                        <tr key={row.param} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                          <td className="px-4 py-3 text-gray-500 font-medium">{row.param}</td>
                          <td className="px-4 py-3">
                            <span className="font-bold text-black">{row.value}</span>
                            {row.note && (
                              <span className="text-gray-400 text-xs ml-2">({row.note})</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Packaging + Logistics */}
              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-400 mb-4">
                  Packaging & Logistics
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Package className="w-4 h-4 text-red-500" />
                      <span className="text-xs font-bold uppercase text-gray-500">Packaging</span>
                    </div>
                    <p className="text-sm font-semibold text-black">{grade.packaging}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50">
                    <div className="flex items-center gap-2 mb-2">
                      <Ship className="w-4 h-4 text-red-500" />
                      <span className="text-xs font-bold uppercase text-gray-500">Container</span>
                    </div>
                    <p className="text-sm font-semibold text-black">{grade.container}</p>
                    <p className="text-xs text-gray-400 mt-1">{grade.hsCode}</p>
                  </div>
                  <div className="p-4 rounded-xl border border-gray-100 bg-gray-50">
                    <div className="flex items-center gap-2 mb-2">
                      <FileText className="w-4 h-4 text-red-500" />
                      <span className="text-xs font-bold uppercase text-gray-500">Key Documents</span>
                    </div>
                    <ul className="space-y-1">
                      {grade.docs.map((doc) => (
                        <li key={doc} className="text-xs text-black font-medium">• {doc}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-gray-100">
                <Button
                  size="lg"
                  className="bg-red-500 hover:bg-red-600 text-white flex-1 sm:flex-none"
                  onClick={() => {
                    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Request a Quote
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-black text-black hover:bg-black hover:text-white flex-1 sm:flex-none"
                >
                  Download Spec Sheet
                </Button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
