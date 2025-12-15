import { Facebook, Mail, Phone, MapPin } from "lucide-react";
import bhLogo from "@/assets/bh-logo.jpeg";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img src={bhLogo} alt="BH Car Imports" className="h-16 w-auto mb-4" />
            <p className="text-muted-foreground mb-4">
              Your trusted partner for premium vehicle imports from Japan to Malawi.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("vehicles")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Vehicles
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Our Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>Vehicle Import</li>
              <li>Quality Inspection</li>
              <li>Documentation</li>
              <li>Customs Clearance</li>
              <li>Delivery Service</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="tel:+265995193635"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +265 99 519 3635
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@bhcarimports.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  info@bhcarimports.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  Japan to Malawi
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} BH Car Imports. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
