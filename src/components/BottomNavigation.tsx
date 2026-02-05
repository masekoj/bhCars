import { useState, useEffect } from "react";
import { Home, Car, Wrench, Info, MessageCircle } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "inventory", label: "Inventory", icon: Car },
  { id: "services", label: "Services", icon: Wrench },
  { id: "about", label: "About", icon: Info },
  { id: "contact", label: "Contact", icon: MessageCircle },
];

const BottomNavigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide on scroll down, show on scroll up
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Detect active section
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = currentScrollY + window.innerHeight / 2;

      sections.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(navItems[index].id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 transition-all duration-300 md:hidden ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
      }`}
    >
      <div className="flex items-center gap-1 px-3 py-2 bg-white/80 backdrop-blur-xl border border-white/20 rounded-full shadow-lg">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative flex flex-col items-center justify-center px-3 py-2 rounded-2xl transition-all duration-300 min-w-[52px] ${
                isActive 
                  ? "bg-primary text-white" 
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Icon className={`h-5 w-5 transition-transform ${isActive ? "scale-110" : ""} mb-0.5`} />
              <span className={`text-[10px] font-medium leading-none ${isActive ? "text-white" : "text-muted-foreground"}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNavigation;
