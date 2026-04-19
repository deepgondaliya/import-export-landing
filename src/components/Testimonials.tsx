// src/components/Testimonials.tsx
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechExports Inc",
      content: "GlobalTrade transformed our international operations. Their expertise in customs and logistics saved us countless hours and expenses.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Import Manager, RetailCorp",
      content: "Outstanding service from start to finish. They handled complex documentation with ease and kept us informed every step of the way.",
      rating: 5,
    },
    {
      name: "Emma Williams",
      role: "Operations Director, TradeHub",
      content: "The most reliable import-export partner we've worked with. Their global network and local expertise are unmatched.",
      rating: 5,
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Trusted by businesses worldwide for reliable trade solutions.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-2xl border border-gray-300 hover:border-orange-500 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-6 h-6 fill-orange-500 text-orange-500"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 italic text-lg mb-8 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div>
                <div className="font-bold text-black text-lg">
                  {testimonial.name}
                </div>
                <div className="text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}