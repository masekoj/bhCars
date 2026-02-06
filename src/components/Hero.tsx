import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight, Car, Clock, ThumbsUp } from "lucide-react";
import heroImage from "@/assets/hero-lorry.jpeg";
import heroBg from "@/assets/hero-cars.jpg";

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
    <section id="home" className="relative min-h-screen bg-background overflow-hidden">
      {/* Subtle Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-[0.03]"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Hero Content Container */}
      <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
        {/* Text Content */}
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight max-w-4xl mx-auto">
            Import Your Dream Car from Japan
            <span className="block text-primary mt-2">Delivered to Malawi</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto font-medium">
            Quality vehicles, transparent pricing, and exceptional service.
          </p>
          <p className="text-base md:text-lg text-foreground/80 mb-6 max-w-2xl mx-auto font-semibold">
            Safe, duty-free assistance, and door-to-door delivery in Lilongwe, Blantyre, and Mzuzu.
          </p>

          {/* Glassmorphic Stat Buttons */}
          <div 
            ref={statsRef}
            className="flex flex-wrap justify-center gap-3 mb-8"
          >
            <div className="stat-button animate-glow">
              <Car className="h-4 w-4 text-primary" />
              <span className="text-primary font-bold">{vehiclesCount}+</span>
              <span className="text-muted-foreground">Vehicles</span>
            </div>
            <div className="stat-button animate-glow" style={{ animationDelay: "0.3s" }}>
              <ThumbsUp className="h-4 w-4 text-primary" />
              <span className="text-primary font-bold">{satisfactionCount}%</span>
              <span className="text-muted-foreground">Satisfaction</span>
            </div>
            <div className="stat-button animate-glow" style={{ animationDelay: "0.6s" }}>
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-primary font-bold">{supportCount}/7</span>
              <span className="text-muted-foreground">Support</span>
            </div>
          </div>

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
      </div>
    </section>
  );
};

export default Hero;
