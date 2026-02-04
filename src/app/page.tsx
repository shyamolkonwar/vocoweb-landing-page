import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import StepsSection from "@/components/StepsSection";
import WhyStaySection from "@/components/WhyStaySection";
import ProductVisualization from "@/components/ProductVisualization";
import PricingSection from "@/components/PricingSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <StepsSection />
      <WhyStaySection />
      <ProductVisualization />
      <PricingSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
