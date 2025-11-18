import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface Referral {
  id: string;
  name: string;
  email: string;
  status: "pending" | "active";
  date: string;
}

interface ReferralContextType {
  referrals: Referral[];
  addReferral: (name: string, email: string) => void;
  markAsActive: (id: string) => void;
  cashbackPercentage: number;
  referralCode: string;
}

const ReferralContext = createContext<ReferralContextType | undefined>(undefined);

export function ReferralProvider({ children }: { children: ReactNode }) {
  const [referrals, setReferrals] = useState<Referral[]>(() => {
    const saved = localStorage.getItem("referrals");
    return saved ? JSON.parse(saved) : [];
  });

  const [referralCode] = useState(() => {
    const saved = localStorage.getItem("referralCode");
    if (saved) return saved;
    const code = `CYBER${Math.random().toString(36).substring(2, 8).toUpperCase()}`;
    localStorage.setItem("referralCode", code);
    return code;
  });

  useEffect(() => {
    localStorage.setItem("referrals", JSON.stringify(referrals));
  }, [referrals]);

  const addReferral = (name: string, email: string) => {
    const newReferral: Referral = {
      id: Math.random().toString(36).substring(2),
      name,
      email,
      status: "pending",
      date: new Date().toISOString(),
    };
    setReferrals(prev => [...prev, newReferral]);
  };

  const markAsActive = (id: string) => {
    setReferrals(prev =>
      prev.map(ref => (ref.id === id ? { ...ref, status: "active" as const } : ref))
    );
  };

  const activeCount = referrals.filter(ref => ref.status === "active").length;
  
  // Calculate cashback: 1 friend = 20%, 3+ friends = 35%
  const cashbackPercentage = activeCount >= 3 ? 35 : activeCount >= 1 ? 20 : 0;

  return (
    <ReferralContext.Provider value={{ 
      referrals, 
      addReferral, 
      markAsActive, 
      cashbackPercentage,
      referralCode 
    }}>
      {children}
    </ReferralContext.Provider>
  );
}

export function useReferral() {
  const context = useContext(ReferralContext);
  if (!context) {
    throw new Error("useReferral must be used within ReferralProvider");
  }
  return context;
}
