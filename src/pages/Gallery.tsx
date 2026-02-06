import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Import all vehicle images
import toyoace1 from "@/assets/toyoace-1.jpg";
import toyoace2 from "@/assets/toyoace-2.jpg";
import toyoace3 from "@/assets/toyoace-3.jpg";
import toyoace4 from "@/assets/toyoace-4.jpg";
import cx51 from "@/assets/cx5-1.jpg";
import cx52 from "@/assets/cx5-2.jpg";
import cx53 from "@/assets/cx5-3.jpg";
import cx54 from "@/assets/cx5-4.jpg";
import car1 from "@/assets/featured-car-1.jpeg";
import car2 from "@/assets/featured-car-2.jpeg";
import car3 from "@/assets/featured-car-3.jpeg";
import heroLorry from "@/assets/hero-lorry.jpeg";
import heroCars from "@/assets/hero-cars.jpg";

const allImages = [
  { src: toyoace1, title: "Toyota Toyoace 2 Ton", category: "Lorry" },
  { src: toyoace2, title: "Toyota Toyoace 2 Ton", category: "Lorry" },
  { src: toyoace3, title: "Toyota Toyoace 2 Ton", category: "Lorry" },
  { src: toyoace4, title: "Toyota Toyoace 2 Ton", category: "Lorry" },
  { src: cx51, title: "Mazda CX-5", category: "SUV" },
  { src: cx52, title: "Mazda CX-5", category: "SUV" },
  { src: cx53, title: "Mazda CX-5", category: "SUV" },
  { src: cx54, title: "Mazda CX-5", category: "SUV" },
  { src: car1, title: "Nissan Juke", category: "SUV" },
  { src: car2, title: "Toyota Ractis", category: "SUV" },
  { src: car3, title: "Toyota Toyoace", category: "Lorry" },
  { src: heroLorry, title: "Featured Lorry", category: "Lorry" },
  { src: heroCars, title: "Fleet Overview", category: "Collection" },
];

const categories = ["All", "Lorry", "SUV", "Collection"];

const Gallery = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const filteredImages = selectedCategory === "All" 
    ? allImages 
    : allImages.filter(img => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
    setIsZoomed(false);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setIsZoomed(false);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);
    setIsZoomed(false);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length);
    setIsZoomed(false);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Home
          </Button>
          <h1 className="text-xl font-bold text-foreground">Vehicle Gallery</h1>
          <div className="w-24" /> {/* Spacer for centering */}
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full ${selectedCategory === category ? "bg-primary" : "border-border"}`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
              onClick={() => openLightbox(index)}
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold text-sm">{image.title}</p>
                  <p className="text-white/70 text-xs">{image.category}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center animate-fade-in">
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors z-10"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Title */}
          <div className="absolute top-4 left-4 text-white z-10">
            <h3 className="text-xl font-bold">{filteredImages[currentIndex].title}</h3>
            <p className="text-white/60 text-sm">
              {currentIndex + 1} / {filteredImages.length}
            </p>
          </div>

          {/* Zoom Toggle */}
          <button
            onClick={() => setIsZoomed(!isZoomed)}
            className="absolute top-4 right-16 p-2 text-white/80 hover:text-white transition-colors z-10"
          >
            {isZoomed ? <ZoomOut className="h-6 w-6" /> : <ZoomIn className="h-6 w-6" />}
          </button>

          {/* Main Image */}
          <div className="relative w-full h-full flex items-center justify-center p-4 md:p-16">
            <img
              src={filteredImages[currentIndex].src}
              alt={filteredImages[currentIndex].title}
              className={`max-w-full max-h-full object-contain transition-transform duration-300 ${
                isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            />
          </div>

          {/* Navigation Arrows */}
          {filteredImages.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
              >
                <ChevronRight className="h-8 w-8" />
              </button>
            </>
          )}

          {/* Thumbnail Strip */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 p-2 bg-black/50 rounded-lg overflow-x-auto max-w-[90vw]">
            {filteredImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setCurrentIndex(idx);
                  setIsZoomed(false);
                }}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  idx === currentIndex 
                    ? "border-primary ring-2 ring-primary/50" 
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={img.src} alt="" className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
