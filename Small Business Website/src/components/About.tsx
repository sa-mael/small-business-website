import { CheckCircle } from "lucide-react";

const features = [
  "Professional 3D design optimized for printing",
  "High-quality STL files with lifetime access",
  "Detailed assembly and wiring guides",
  "Pre-assembled options available",
  "Custom design commissions accepted",
  "Worldwide shipping on physical products",
];

export function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="tracking-widest text-[var(--primary-color)] mb-4 text-3xl md:text-4xl">
              ABOUT CYBER-ONI
            </h2>
            <p className="text-gray-400 mb-6 text-base md:text-lg">
              We create cutting-edge 3D-printable designer sculptures that blend futuristic aesthetics 
              with functional lighting. Our flagship CYBER-ONI RGB Lamp combines smooth organic shapes, 
              layered mechanical plates, and internal engineered structures — all optimized for home 3D printing.
            </p>
            <p className="text-gray-400 mb-8 text-base md:text-lg">
              Whether you're a maker looking for premium STL files or a collector wanting a professionally 
              assembled piece, we deliver impressive interior art that transforms any space into a cyberpunk haven.
            </p>
            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--primary-color)] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-300 text-base">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(var(--primary-rgb),0.2)] to-transparent blur-3xl" />
            <div className="relative bg-black/40 border border-[rgba(var(--primary-rgb),0.3)] rounded-lg p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(var(--primary-rgb),0.3)]">
                  <span className="text-gray-400 text-base">Files Downloaded</span>
                  <span className="text-[var(--primary-color)] text-2xl font-bold">1,200+</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(var(--primary-rgb),0.3)]">
                  <span className="text-gray-400 text-base">Lamps Shipped</span>
                  <span className="text-[var(--primary-color)] text-2xl font-bold">350+</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-[rgba(var(--primary-rgb),0.3)]">
                  <span className="text-gray-400 text-base">Happy Makers</span>
                  <span className="text-[var(--primary-color)] text-2xl font-bold">800+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-base">Countries Reached</span>
                  <span className="text-[var(--primary-color)] text-2xl font-bold">45+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}