import { Button } from "@/components/ui/button";
import { ChevronRight, Car } from "lucide-react";
import heroImage from "@/assets/hero-cars.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay - dark overlay for white text readability */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium imported vehicles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/50"></div>
      </div>

      {/* Content - white text on dark overlay */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/20 border border-primary/40 rounded-full mb-6">
            <Car className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm text-primary font-semibold">Premium Vehicle Imports</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Your Gateway to
            <span className="block text-primary">Quality Vehicles</span>
          </h1>

          <p className="text-xl text-white/80 mb-8 max-w-2xl font-medium">
            BH Car Imports specializes in bringing you premium vehicles from Dar es Salaam to Malawi. 
            Quality, reliability, and exceptional service guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 font-bold shadow-lg animate-glow"
              onClick={() => scrollToSection("vehicles")}
            >
              Browse Vehicles
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-white/10 hover:bg-white/20 text-white text-lg px-8 py-6 font-semibold"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-white/70 font-medium">Vehicles Imported</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-white/70 font-medium">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-white/70 font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
