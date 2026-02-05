import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Car, Shield, Clock, ThumbsUp } from "lucide-react";
import heroImage from "@/assets/hero-lorry.jpeg";

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);
  const [countersVisible, setCountersVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  
  // Counter animation values
  const [vehiclesCount, setVehiclesCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);
  const [supportCount, setSupportCount] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection observer for counter animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !countersVisible) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [countersVisible]);

  // Animate counters when visible
  useEffect(() => {
    if (!countersVisible) return;

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3); // Ease out cubic

      setVehiclesCount(Math.floor(500 * eased));
      setSatisfactionCount(Math.floor(100 * eased));
      setSupportCount(Math.floor(24 * eased));

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [countersVisible]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Calculate zoom based on scroll (10-20% zoom)
  const zoomScale = 1 + Math.min(scrollY / 3000, 0.2);

  return (
    <section id="home" className="relative min-h-screen bg-background pt-16 md:pt-20 overflow-hidden">
      {/* Hero Content Container */}
      <div className="container mx-auto px-4 py-12 md:py-20">
        {/* Text Content */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Car className="h-4 w-4 text-primary mr-2" />
            <span className="text-sm text-primary font-semibold">Japan to Malawi Imports</span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight max-w-4xl mx-auto">
            Import Your Dream Car from Japan
            <span className="block text-primary mt-2">Delivered to Malawi</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto font-medium">
            Quality vehicles, transparent pricing, and exceptional service.
          </p>
          <p className="text-base md:text-lg text-foreground/80 mb-8 max-w-2xl mx-auto font-semibold">
            Safe, duty-free assistance, and door-to-door delivery in Lilongwe, Blantyre, and Mzuzu.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 font-bold shadow-lg hover:shadow-xl transition-all w-auto"
              onClick={() => scrollToSection("vehicles")}
            >
              See Vehicles
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-foreground/20 hover:bg-secondary text-foreground text-lg px-8 py-6 font-semibold w-auto"
              onClick={() => scrollToSection("contact")}
            >
              Contact Us
            </Button>
          </div>
        </div>

        {/* Hero Image with Parallax Zoom */}
        <div className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
          <div 
            className="aspect-[16/9] w-full transition-transform duration-700 ease-out"
            style={{ transform: `scale(${zoomScale})` }}
          >
            <img
              src={heroImage}
              alt="Premium imported vehicles from Japan"
              className="w-full h-full object-contain bg-secondary"
            />
          </div>
          
          {/* Subtle overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Stats Section - Reorganized Layout */}
        <div 
          ref={statsRef}
          className="mt-16 max-w-4xl mx-auto"
        >
          {/* Main Stat - Centered on Top */}
          <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in mb-6 max-w-md mx-auto">
            <div className="flex items-center justify-center gap-4">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                <Car className="h-6 w-6 text-primary" />
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl md:text-5xl font-bold text-primary">{vehiclesCount}+</span>
                <span className="text-muted-foreground font-medium">Vehicles Imported</span>
              </div>
            </div>
          </div>

          {/* Secondary Stats - Side by Side */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                  <ThumbsUp className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-primary">{satisfactionCount}%</span>
                  <span className="text-muted-foreground font-medium">Satisfaction</span>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full flex-shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl md:text-4xl font-bold text-primary">{supportCount}/7</span>
                  <span className="text-muted-foreground font-medium">Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
