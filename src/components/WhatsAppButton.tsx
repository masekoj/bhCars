import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WhatsAppButtonProps {
  vehicleName?: string;
  className?: string;
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg" | "icon";
  children?: React.ReactNode;
}

const WhatsAppButton = ({ 
  vehicleName, 
  className = "", 
  variant = "default",
  size = "default",
  children 
}: WhatsAppButtonProps) => {
  const phoneNumber = "265995193635"; // +265 99 519 3635 formatted for WhatsApp
  
  const getMessage = () => {
    if (vehicleName) {
      return `Hello BH Car Imports! I'm interested in the ${vehicleName}. Could you please provide more details about availability, pricing, and import timeline from Japan to Malawi?`;
    }
    return "Hello BH Car Imports! I'm interested in importing a vehicle from Japan to Malawi. Could you please help me with available options?";
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(getMessage());
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      variant={variant}
      size={size}
      className={`bg-[#25D366] hover:bg-[#20BD5A] text-white ${className}`}
    >
      <MessageCircle className="mr-2 h-4 w-4" />
      {children || "WhatsApp Inquiry"}
    </Button>
  );
};

export default WhatsAppButton;
