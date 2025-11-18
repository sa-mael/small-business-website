import { Gift, ShoppingCart, Mail, HelpCircle } from "lucide-react";
import { useState } from "react";
import { ReferralModal } from "./ReferralModal";
import { BuyProductModal } from "./BuyProductModal";
import { ContactModal } from "./ContactModal";

export function QuickActions() {
  const [referralOpen, setReferralOpen] = useState(false);
  const [buyProductOpen, setBuyProductOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const scrollToSupport = () => {
    const element = document.getElementById("support");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
        <button
          onClick={() => setReferralOpen(true)}
          className="group w-14 h-14 rounded-full bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/80 shadow-lg shadow-[rgba(var(--primary-rgb),0.3)] flex items-center justify-center transition-all hover:scale-110"
          title="Referral Program"
        >
          <Gift className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={() => setBuyProductOpen(true)}
          className="group w-14 h-14 rounded-full bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/80 shadow-lg shadow-[rgba(var(--primary-rgb),0.3)] flex items-center justify-center transition-all hover:scale-110"
          title="Buy Products"
        >
          <ShoppingCart className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={() => setContactOpen(true)}
          className="group w-14 h-14 rounded-full bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/80 shadow-lg shadow-[rgba(var(--primary-rgb),0.3)] flex items-center justify-center transition-all hover:scale-110"
          title="Contact Us"
        >
          <Mail className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={scrollToSupport}
          className="group w-14 h-14 rounded-full bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/80 shadow-lg shadow-[rgba(var(--primary-rgb),0.3)] flex items-center justify-center transition-all hover:scale-110"
          title="Support & FAQ"
        >
          <HelpCircle className="w-6 h-6 text-white" />
        </button>
      </div>

      <ReferralModal isOpen={referralOpen} onClose={() => setReferralOpen(false)} />
      <BuyProductModal isOpen={buyProductOpen} onClose={() => setBuyProductOpen(false)} />
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </>
  );
}