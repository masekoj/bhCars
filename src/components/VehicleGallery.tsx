import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface VehicleGalleryProps {
  images: string[];
  vehicleName: string;
}

const VehicleGallery = ({ images, vehicleName }: VehicleGalleryProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const openGallery = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  return (
    <>
      {/* Thumbnail Strip */}
      <div className="relative">
        <img
          src={images[0]}
          alt={vehicleName}
          className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
          onClick={() => openGallery(0)}
        />
        
        {/* Image Count Badge */}
        {images.length > 1 && (
          <div className="absolute bottom-2 left-2 flex gap-1">
            {images.map((img, idx) => (
              <button
                key={idx}
                onClick={() => openGallery(idx)}
                className={`w-10 h-10 rounded border-2 overflow-hidden transition-all ${
                  idx === 0 ? "border-primary" : "border-border hover:border-primary/50"
                }`}
              >
                <img
                  src={img}
                  alt={`${vehicleName} view ${idx + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        )}
        
        {images.length > 1 && (
          <span className="absolute bottom-2 right-2 bg-background/80 text-foreground text-xs px-2 py-1 rounded">
            {images.length} photos
          </span>
        )}
      </div>

      {/* Fullscreen Gallery Modal */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setIsOpen(false)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setIsOpen(false)}
          >
            <X className="h-6 w-6" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            className="absolute left-4 text-white hover:bg-white/20"
            onClick={prevImage}
          >
            <ChevronLeft className="h-8 w-8" />
          </Button>

          <div className="max-w-4xl max-h-[80vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[currentIndex]}
              alt={`${vehicleName} - Image ${currentIndex + 1}`}
              className="max-w-full max-h-[70vh] object-contain rounded-lg"
            />
            <p className="text-white text-center mt-4">
              {vehicleName} - {currentIndex + 1} of {images.length}
            </p>
            
            {/* Thumbnail Navigation */}
            <div className="flex justify-center gap-2 mt-4">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  className={`w-16 h-12 rounded border-2 overflow-hidden transition-all ${
                    idx === currentIndex ? "border-primary" : "border-white/30 hover:border-white"
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="absolute right-4 text-white hover:bg-white/20"
            onClick={nextImage}
          >
            <ChevronRight className="h-8 w-8" />
          </Button>
        </div>
      )}
    </>
  );
};

export default VehicleGallery;
