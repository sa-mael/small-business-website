import heroImage from "figma:asset/e6c342178f85cb3fac3b62815dddd7d1f8f45d63.png";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-gradient-radial from-[rgba(var(--primary-rgb),0.2)] via-transparent to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[rgba(var(--primary-rgb),0.1)] blur-[120px] rounded-full" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="tracking-widest text-[var(--primary-color)] text-5xl md:text-6xl lg:text-7xl">
              CYBER-ONI RGB LAMP
            </h1>
            <p className="text-gray-400 max-w-lg text-lg md:text-xl">
              Fully 3D-printable designer sculpture with integrated RGB lighting. 
              32cm × 40cm × 20cm of futuristic cyber-armor aesthetic for your space.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/80 text-white text-lg px-8 py-6"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                className="border-[var(--primary-color)] text-[var(--primary-color)] hover:bg-[rgba(var(--primary-rgb),0.1)] text-lg px-8 py-6"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              >
                Learn More
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-[rgba(var(--primary-rgb),0.2)] blur-3xl rounded-full" />
            <img 
              src={heroImage} 
              alt="Cyber-Oni" 
              className="relative z-10 w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}