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
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Premium imported vehicles"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Car className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm text-primary font-medium">Premium Vehicle Imports</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-6 leading-tight">
            Your Gateway to
            <span className="block text-primary">Quality Vehicles</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            BH Car Imports specializes in bringing you premium vehicles from Japan to Malawi. 
            Quality, reliability, and exceptional service guaranteed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 animate-glow"
              onClick={() => scrollToSection("vehicles")}
            >
              See Vehicles
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:bg-secondary text-lg px-8 py-6"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Vehicles Imported</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Customer Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
