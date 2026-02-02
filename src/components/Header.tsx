import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import bhLogo from "@/assets/bh-logo.jpeg";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  // Auto-close on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      if (window.scrollY > 50) {
        setMobileMenuOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
      setSearchOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "vehicles", label: "Vehicles" },
    { id: "inventory", label: "Inventory" },
    { id: "services", label: "Services" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-sm" 
          : "bg-background"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Left spacer for centering */}
          <div className="w-20 md:hidden" />

          {/* Centered Logo */}
          <div className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0">
            <img 
              src={bhLogo} 
              alt="BH Car Imports Logo" 
              className="h-10 md:h-14 w-auto cursor-pointer transition-transform hover:scale-105" 
              onClick={() => scrollToSection("home")}
            />
          </div>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center flex-1 space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium text-sm uppercase tracking-wide"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Icons */}
          <div className="flex items-center space-x-2">
            {/* Search Icon */}
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                setMobileMenuOpen(false);
              }}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle search"
            >
              {searchOpen ? <X size={22} /> : <Search size={22} />}
            </button>

            {/* Hamburger Menu */}
            <button
              onClick={() => {
                setMobileMenuOpen(!mobileMenuOpen);
                setSearchOpen(false);
              }}
              className="p-2 text-foreground hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Search Dropdown */}
        {searchOpen && (
          <div className="absolute left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <div className="container mx-auto px-4 py-4">
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search vehicles, models, types..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-3 text-base bg-secondary border-border focus:border-primary"
                  autoFocus
                />
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {["2 Ton Lorry", "Toyota Toyoace", "Mazda CX-5", "SUV", "Automatic"].map((hint) => (
                  <button
                    key={hint}
                    onClick={() => {
                      setSearchQuery(hint);
                      scrollToSection("inventory");
                    }}
                    className="px-3 py-1.5 text-sm bg-secondary hover:bg-primary hover:text-white text-foreground rounded-full transition-colors font-medium"
                  >
                    {hint}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Mobile/Desktop Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="absolute left-0 right-0 bg-background border-b border-border shadow-lg animate-fade-in">
            <nav className="container mx-auto px-4 py-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground hover:text-primary transition-colors font-medium text-left py-3 px-4 rounded-lg hover:bg-secondary"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <button
                    onClick={() => scrollToSection("contact")}
                    className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors text-center"
                  >
                    Get a Quote
                  </button>
                  <a
                    href="tel:+265991485544"
                    className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-secondary transition-colors text-center"
                  >
                    Call: +265 991 485 544
                  </a>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
