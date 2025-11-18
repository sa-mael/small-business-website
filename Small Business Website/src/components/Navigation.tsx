import { Menu, X } from "lucide-react";
import { useState } from "react";
import { ColorPicker } from "./ColorPicker";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-[rgba(var(--primary-rgb),0.2)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="tracking-wider text-xl font-bold">
            CYBER-ONI
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="hover:text-[var(--primary-color)] transition-colors text-base"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="hover:text-[var(--primary-color)] transition-colors text-base"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("assembly")}
              className="hover:text-[var(--primary-color)] transition-colors text-base"
            >
              Assembly
            </button>
            <button
              onClick={() => scrollToSection("downloads")}
              className="hover:text-[var(--primary-color)] transition-colors text-base"
            >
              Downloads
            </button>
            <button
              onClick={() => scrollToSection("comments")}
              className="hover:text-[var(--primary-color)] transition-colors text-base"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="hover:text-[var(--primary-color)] transition-colors text-base"
            >
              Contact
            </button>
            <ColorPicker />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-black/95 border-t border-[rgba(var(--primary-rgb),0.2)]">
          <div className="px-4 pt-2 pb-4 space-y-2">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 hover:text-[var(--primary-color)] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 hover:text-[var(--primary-color)] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("assembly")}
              className="block w-full text-left py-2 hover:text-[var(--primary-color)] transition-colors"
            >
              Assembly
            </button>
            <button
              onClick={() => scrollToSection("downloads")}
              className="block w-full text-left py-2 hover:text-[var(--primary-color)] transition-colors"
            >
              Downloads
            </button>
            <button
              onClick={() => scrollToSection("comments")}
              className="block w-full text-left py-2 hover:text-[var(--primary-color)] transition-colors"
            >
              Reviews
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2 hover:text-[var(--primary-color)] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("referral")}
              className="block w-full text-left py-2 hover:text-[var(--primary-color)] transition-colors"
            >
              Referrals
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 hover:text-[var(--primary-color)] transition-colors"
            >
              Contact
            </button>
            <div className="pt-2">
              <ColorPicker />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}