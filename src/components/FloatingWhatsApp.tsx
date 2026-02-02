import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const FloatingWhatsApp = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  useEffect(() => {
    // Show button after a small delay
    const timer = setTimeout(() => setIsVisible(true), 1000);
    
    // Stop pulsing after 5 seconds
    const pulseTimer = setTimeout(() => setIsPulsing(false), 5000);
    
    return () => {
      clearTimeout(timer);
      clearTimeout(pulseTimer);
    };
  }, []);

  const openWhatsApp = () => {
    const phoneNumber = "265991485544";
    const message = encodeURIComponent("Hi, I'm interested in a vehicle from Japan!");
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <button
      onClick={openWhatsApp}
      className={`fixed bottom-20 md:bottom-6 right-6 z-50 group transition-all duration-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
      aria-label="Chat on WhatsApp"
    >
      {/* Pulse Ring */}
      {isPulsing && (
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40" />
      )}
      
      {/* Button */}
      <div className="relative flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-110">
        <MessageCircle className="h-7 w-7 text-white fill-white" />
      </div>

      {/* Tooltip */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-2 bg-foreground text-background text-sm font-medium rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Chat Now
        <span className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-foreground" />
      </div>
    </button>
  );
};

export default FloatingWhatsApp;
