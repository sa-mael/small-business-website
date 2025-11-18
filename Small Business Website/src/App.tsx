import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { ProductShowcase } from "./components/ProductShowcase";
import { AssemblyGuide } from "./components/AssemblyGuide";
import { Downloads } from "./components/Downloads";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navigation } from "./components/Navigation";
import { Referral } from "./components/Referral";
import { Comments } from "./components/Comments";
import { Support } from "./components/Support";
import { Footer } from "./components/Footer";
import { QuickActions } from "./components/QuickActions";
import { BackgroundText } from "./components/BackgroundText";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ReferralProvider } from "./contexts/ReferralContext";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <ThemeProvider>
      <ReferralProvider>
        <div className="min-h-screen bg-black text-white relative">
          <BackgroundText />
          <div className="relative z-10">
            <Navigation />
            <Hero />
            <Services />
            <ProductShowcase />
            <AssemblyGuide />
            <Downloads />
            <Comments />
            <About />
            <Referral />
            <Support />
            <Contact />
            <Footer />
            <QuickActions />
          </div>
          <Toaster theme="dark" />
        </div>
      </ReferralProvider>
    </ThemeProvider>
  );
}