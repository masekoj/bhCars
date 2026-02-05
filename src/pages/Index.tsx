import { useEffect } from "react";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import Inventory from "@/components/Inventory";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import BottomNavigation from "@/components/BottomNavigation";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollToTop from "@/components/ScrollToTop";

const Index = () => {
  // Smooth scroll behavior for the entire page
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Marquee />
      <main className="overflow-hidden">
        <Hero />
        <HowItWorks />
        <FeaturedVehicles />
        <Inventory />
        <Services />
        <About />
        <ContactForm />
        <Newsletter />
      </main>
      <Footer />
      
      {/* Floating Elements */}
      <BottomNavigation />
      <FloatingWhatsApp />
      <ScrollToTop />
    </div>
  );
};

export default Index;
