import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Card, CardContent } from "./ui/card";
import { CheckCircle } from "lucide-react";

const assemblySteps = [
  {
    step: 1,
    title: "Gather Your Tools",
    description: "Prepare all necessary tools: screwdriver, wire cutters, soldering iron, and multimeter.",
    image: "https://images.unsplash.com/photo-1615746363486-92cd8c5e0a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3NlbWJseSUyMGluc3RydWN0aW9ucyUyMHRvb2xzfGVufDF8fHx8MTc2MzQwMjg5OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    step: 2,
    title: "Print All Parts",
    description: "3D print all components using PLA+ filament. Print time: approximately 48-72 hours total.",
    image: "https://images.unsplash.com/photo-1614086138082-8f9f4bed81e4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZXIlMjBwcmludGluZyUyMHBhcnRzfGVufDF8fHx8MTc2MzQwMjg5OXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    step: 3,
    title: "Organize Printed Parts",
    description: "Sort all printed pieces by section. Remove supports and clean up any imperfections with sandpaper.",
    image: "https://images.unsplash.com/photo-1707735325033-af8b8ad6a01f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZWQlMjBwaWVjZXMlMjBjb2xsZWN0aW9ufGVufDF8fHx8MTc2MzQwMjkwMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    step: 4,
    title: "Prepare Electronics",
    description: "Gather RGB LED strips, controller, power supply, and connecting wires. Test all components before installation.",
    image: "https://images.unsplash.com/photo-1614903755064-c8b552516701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwY29tcG9uZW50cyUyMHdpcmluZyUyMExFRHxlbnwxfHx8fDE3NjM0MDI5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    step: 5,
    title: "Install LED Strips",
    description: "Route RGB LED strips through the internal channels. Secure with adhesive backing or hot glue.",
    image: "https://images.unsplash.com/photo-1631259352434-03735f12e3e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSR0IlMjBMRUQlMjBzdHJpcCUyMGxpZ2h0c3xlbnwxfHx8fDE3NjM0MDI5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    step: 6,
    title: "Solder Connections",
    description: "Carefully solder LED connections to the controller. Use heat shrink tubing to insulate all joints.",
    image: "https://images.unsplash.com/photo-1564940675711-ea4bac5109a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2xkZXJpbmclMjBlbGVjdHJvbmljc3xlbnwxfHx8fDE3NjM0MDI5MDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    step: 7,
    title: "Assemble Base Structure",
    description: "Connect the main body pieces starting from the base. Use screws or adhesive as indicated in the manual.",
    image: "https://images.unsplash.com/photo-1653172939373-49abdd68cdd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kcyUyMGFzc2VtYmxpbmclMjBwYXJ0c3xlbnwxfHx8fDE3NjM0MDI5MDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    step: 8,
    title: "Test Electronics",
    description: "Power on the LED system and test all colors and modes. Verify proper function before final assembly.",
    image: "https://images.unsplash.com/photo-1583269566943-98bcd119c0bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZXN0aW5nJTIwZWxlY3Ryb25pY3MlMjBsYW1wfGVufDF8fHx8MTc2MzQwMjkwMnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    step: 9,
    title: "Final Assembly & Enjoy",
    description: "Attach decorative plates and armor pieces. Your CYBER-ONI RGB Lamp is complete!",
    image: "https://images.unsplash.com/photo-1740452009002-a2cd15fc0333?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5pc2hlZCUyMGxhbXAlMjBnbG93aW5nfGVufDF8fHx8MTc2MzQwMjkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function AssemblyGuide() {
  return (
    <section id="assembly" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[rgba(var(--primary-rgb),0.05)] to-black" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="tracking-widest text-[var(--primary-color)] mb-4 text-3xl md:text-4xl">
            ASSEMBLY GUIDE
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Step-by-step instructions to build your CYBER-ONI RGB Lamp
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {assemblySteps.map((item) => (
            <Card
              key={item.step}
              className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm hover:border-[rgba(var(--primary-rgb),0.5)] transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 w-10 h-10 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
                  <span className="text-white font-bold">{item.step}</span>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-white mb-2 text-xl">{item.title}</h3>
                <p className="text-gray-400 text-base">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm inline-block">
            <CardContent className="pt-6">
              <div className="flex items-center gap-3 text-[var(--primary-color)]">
                <CheckCircle className="w-6 h-6" />
                <span className="text-lg">Estimated assembly time: 3-4 hours</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
