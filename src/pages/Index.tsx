import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IntroSection from "@/components/IntroSection";
import ComponentShowcase from "@/components/ComponentShowcase";
import Features from "@/components/Features";
import Documentation from "@/components/Documentation";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <IntroSection />
        <ComponentShowcase />
        <Features />
        <Documentation />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
