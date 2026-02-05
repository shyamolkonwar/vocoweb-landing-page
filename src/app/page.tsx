import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BentoGridSection from "@/components/BentoGridSection";
import XRaySection from "@/components/XRaySection";
import PricingSection from "@/components/PricingSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Navbar />
      <main className="min-h-screen bg-void-black">
        <HeroSection />
        <BentoGridSection />
        <XRaySection />
        <PricingSection />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
