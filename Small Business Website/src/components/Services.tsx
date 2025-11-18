import { Shield, Zap, Code, Server, Printer, Palette, Package, Lightbulb } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const services = [
  {
    icon: Lightbulb,
    title: "CYBER-ONI RGB Lamp",
    description: "Our signature 3D-printable designer lamp with integrated RGB lighting system.",
  },
  {
    icon: Printer,
    title: "3D Printing Files",
    description: "Professional STL files optimized for home 3D printing with detailed instructions.",
  },
  {
    icon: Package,
    title: "Pre-Assembled Units",
    description: "Fully assembled lamps printed with premium materials and pre-installed electronics.",
  },
  {
    icon: Palette,
    title: "Custom Designs",
    description: "Commission custom cyber-themed sculptures and lamps tailored to your vision.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[rgba(var(--primary-rgb),0.05)] to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="tracking-widest text-[var(--primary-color)] mb-4 text-3xl md:text-4xl">
            OUR SERVICES
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm hover:border-[rgba(var(--primary-rgb),0.5)] transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(var(--primary-rgb),0.2)]"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-[rgba(var(--primary-rgb),0.2)] flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-[var(--primary-color)]" />
                </div>
                <CardTitle className="text-white text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 text-base">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}