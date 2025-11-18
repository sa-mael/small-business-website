import { ChevronDown, Shield, Lock, CreditCard, Package, FileText, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./ui/collapsible";
import { useState } from "react";

const faqs = [
  {
    question: "What file formats are included in the digital download?",
    answer: "The digital package includes all parts in STL format, which is compatible with all major 3D printing software. We also provide slicing profiles for Cura and PrusaSlicer, assembly instructions in PDF format, and high-resolution wiring diagrams."
  },
  {
    question: "What 3D printer do I need?",
    answer: "The CYBER-ONI lamp is optimized for FDM printers with a build volume of at least 220x220x250mm. Most common printers like Ender 3, Prusa i3 MK3, and similar models work perfectly. The design minimizes support requirements for easier printing."
  },
  {
    question: "How long does shipping take?",
    answer: "For Canadian orders, shipping typically takes 5-7 business days. International orders take 3-4 weeks (up to 1 month) depending on customs clearance and destination country."
  },
  {
    question: "What's included with the pre-assembled lamp?",
    answer: "The pre-assembled version comes fully built with RGB LEDs installed, remote control, power adapter, premium PLA+ finish, professional packaging, assembly certificate, and a 2-year warranty."
  },
  {
    question: "Can I get a refund if I'm not satisfied?",
    answer: "Digital downloads are non-refundable due to the nature of digital products. For physical products, we offer a 30-day return policy if the item is unused and in original packaging. Shipping costs are non-refundable."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes! We ship worldwide. Shipping costs and delivery times vary by location. International orders incur a $75 CAD shipping fee and typically arrive within 3-4 weeks."
  },
  {
    question: "What materials do I need for assembly?",
    answer: "You'll need: PLA+ or PLA filament (~1kg), RGB LED strips (WS2812B recommended), LED controller, 5V power supply, wiring, soldering iron, screwdriver, and optional: hot glue gun and sandpaper for finishing."
  },
  {
    question: "Is technical support included?",
    answer: "Yes! All purchases include lifetime email support. We typically respond within 24 hours. Digital file purchasers get access to our community forum and regular updates."
  },
  {
    question: "Can I sell prints made from your files?",
    answer: "The digital files are for personal use only. Commercial use requires a commercial license. Please contact us at contact@cyber-oni.com for licensing inquiries."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards (Visa, Mastercard, American Express) and debit cards. All transactions are processed securely through our encrypted payment gateway."
  }
];

export function Support() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="support" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[rgba(var(--primary-rgb),0.05)] to-black" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="tracking-widest text-[var(--primary-color)] mb-4 text-3xl md:text-4xl">
            SUPPORT CENTER
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Frequently asked questions and policies
          </p>
        </div>

        {/* FAQ Section */}
        <div className="mb-16">
          <h3 className="text-white text-2xl mb-6 flex items-center gap-2">
            <FileText className="w-6 h-6 text-[var(--primary-color)]" />
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <Collapsible
                key={index}
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm">
                  <CollapsibleTrigger className="w-full">
                    <CardHeader className="cursor-pointer hover:bg-[rgba(var(--primary-rgb),0.05)] transition-colors">
                      <CardTitle className="text-white text-left flex items-center justify-between text-lg">
                        <span>{faq.question}</span>
                        <ChevronDown 
                          className={`w-5 h-5 text-[var(--primary-color)] transition-transform ${
                            openItems.includes(index) ? 'rotate-180' : ''
                          }`}
                        />
                      </CardTitle>
                    </CardHeader>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <CardContent className="text-gray-400 text-base">
                      {faq.answer}
                    </CardContent>
                  </CollapsibleContent>
                </Card>
              </Collapsible>
            ))}
          </div>
        </div>

        {/* Privacy Policy */}
        <div>
          <h3 className="text-white text-2xl mb-6 flex items-center gap-2">
            <Shield className="w-6 h-6 text-[var(--primary-color)]" />
            Privacy Policy
          </h3>
          <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm">
            <CardContent className="pt-6 space-y-6 text-gray-400 text-base">
              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Lock className="w-4 h-4 text-[var(--primary-color)]" />
                  Information We Collect
                </h4>
                <p>
                  We collect information necessary to process your orders and provide services, including:
                  name, email address, shipping address, and payment information. Digital downloads 
                  require email verification for delivery.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-[var(--primary-color)]" />
                  Payment Security
                </h4>
                <p>
                  All payment information is processed through secure, encrypted channels. We never 
                  store complete credit card information on our servers. Card details are transmitted 
                  directly to our payment processor using industry-standard SSL/TLS encryption.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Package className="w-4 h-4 text-[var(--primary-color)]" />
                  How We Use Your Information
                </h4>
                <p>
                  Your information is used exclusively to: process and fulfill orders, send order 
                  confirmations and shipping updates, provide customer support, send product updates 
                  (if opted in), and improve our services. We never sell your personal information 
                  to third parties.
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[var(--primary-color)]" />
                  Contact & Data Rights
                </h4>
                <p>
                  You have the right to access, modify, or delete your personal data at any time. 
                  To exercise these rights or for privacy-related inquiries, contact us at 
                  privacy@cyber-oni.com. We respond to all requests within 30 days.
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(var(--primary-rgb),0.3)]">
                <p className="text-sm text-gray-500">
                  Last updated: November 17, 2025. This privacy policy is subject to change. 
                  We will notify customers of significant changes via email.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
