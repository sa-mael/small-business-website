import { Ruler, Layers, Zap, Download } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const specs = [
  {
    icon: Ruler,
    label: "Dimensions",
    value: "32 × 40 × 20 cm",
  },
  {
    icon: Layers,
    label: "Print Parts",
    value: "Modular Design",
  },
  {
    icon: Zap,
    label: "Lighting",
    value: "RGB LED System",
  },
  {
    icon: Download,
    label: "Format",
    value: "STL Files",
  },
];

export function ProductShowcase() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[rgba(var(--primary-rgb),0.1)] to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="tracking-widest text-[var(--primary-color)] mb-4 text-3xl md:text-4xl">
            TECHNICAL SPECIFICATIONS
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Engineered for perfection, designed for makers
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="absolute inset-0 bg-[rgba(var(--primary-rgb),0.3)] blur-3xl rounded-full" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1631305501732-42f5fd97a9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZWQlMjBzY3VscHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMzMzMDEyfDA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="CYBER-ONI 3D Print"
              className="relative z-10 w-full h-auto rounded-2xl border border-[rgba(var(--primary-rgb),0.3)]"
            />
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-white mb-4 text-2xl">Design Features</h3>
              <ul className="space-y-3 text-gray-400 text-base">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary-color)] mt-2 flex-shrink-0" />
                  <span>Smooth organic shapes combined with layered mechanical plates</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary-color)] mt-2 flex-shrink-0" />
                  <span>Internal engineered structures for stability and cable management</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary-color)] mt-2 flex-shrink-0" />
                  <span>Optimized for home FDM 3D printers (no supports needed on most parts)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary-color)] mt-2 flex-shrink-0" />
                  <span>Modular design allows for easy printing and assembly</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--primary-color)] mt-2 flex-shrink-0" />
                  <span>Integrated cable channels and LED mounting points</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <Card
              key={index}
              className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm"
            >
              <CardContent className="pt-6 text-center">
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--primary-rgb),0.2)] flex items-center justify-center mx-auto mb-4">
                  <spec.icon className="w-6 h-6 text-[var(--primary-color)]" />
                </div>
                <p className="text-gray-400 text-sm mb-1">{spec.label}</p>
                <p className="text-white text-lg font-semibold">{spec.value}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}