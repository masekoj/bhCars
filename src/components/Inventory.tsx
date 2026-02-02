import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { 
  Gauge, 
  Fuel, 
  Settings, 
  Calendar, 
  Car as CarIcon,
  Filter,
  ChevronDown,
  GitCompare,
  Search,
  X,
  Heart,
  Eye
} from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import VehicleComparison from "./VehicleComparison";
import ImageGallery from "./ImageGallery";
import PhotoGalleryModal from "./PhotoGalleryModal";
import car1 from "@/assets/featured-car-1.jpeg";
import car2 from "@/assets/featured-car-2.jpeg";
import car3 from "@/assets/featured-car-3.jpeg";
import toyoace1 from "@/assets/toyoace-1.jpg";
import toyoace2 from "@/assets/toyoace-2.jpg";
import toyoace3 from "@/assets/toyoace-3.jpg";
import toyoace4 from "@/assets/toyoace-4.jpg";
import cx51 from "@/assets/cx5-1.jpg";
import cx52 from "@/assets/cx5-2.jpg";
import cx53 from "@/assets/cx5-3.jpg";
import cx54 from "@/assets/cx5-4.jpg";

const inventoryData = [
  {
    id: 1,
    make: "Toyota",
    model: "Toyoace 2 Ton",
    year: 2019,
    price: "Contact for Price",
    images: [toyoace1, toyoace2, toyoace3, toyoace4],
    mileage: "45,000 km",
    fuel: "Diesel",
    transmission: "Manual",
    engine: "3.0L Diesel",
    color: "Yellow",
    status: "Available",
    location: "Lilongwe",
    category: "Lorry",
  },
  {
    id: 2,
    make: "Mazda",
    model: "CX-5",
    year: 2015,
    price: "Contact for Price",
    images: [cx51, cx52, cx53, cx54],
    mileage: "68,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "2.0L SkyActiv",
    color: "Dark Blue",
    status: "Available",
    location: "Dar es Salaam",
    category: "SUV",
  },
  {
    id: 3,
    make: "Nissan",
    model: "Juke",
    year: 2015,
    price: "Contact for Price",
    images: [car1],
    mileage: "15,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "1.0L Turbo",
    color: "Black",
    status: "Available",
    location: "Lilongwe",
    category: "SUV",
  },
  {
    id: 4,
    make: "Toyota",
    model: "Ractis",
    year: 2013,
    price: "Contact for Price",
    images: [car2],
    mileage: "18,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "1.3L V6",
    color: "Silver",
    status: "Available",
    location: "Dar es Salaam",
    category: "SUV",
  },
  {
    id: 5,
    make: "Toyota",
    model: "Toyoace 2 Ton",
    year: 2011,
    price: "Contact for Price",
    images: [car3],
    mileage: "22,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "3.0L Diesel",
    color: "White",
    status: "Available",
    location: "Lilongwe",
    category: "Lorry",
  },
  {
    id: 6,
    make: "Nissan",
    model: "Juke",
    year: 2016,
    price: "Contact for Price",
    images: [car1],
    mileage: "5,200 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "1.0L Turbo",
    color: "Black",
    status: "In Transit",
    location: "En Route",
    category: "SUV",
  },
];

const makes = ["All", "Toyota", "Mazda", "Nissan"];
const transmissions = ["All", "Automatic", "Manual"];
const fuelTypes = ["All", "Petrol", "Diesel", "Hybrid"];

const searchHints = [
  "2 Ton Lorry",
  "Toyota Toyoace",
  "Mazda CX-5",
  "SUV",
  "Automatic",
];

const Inventory = () => {
  const [selectedMake, setSelectedMake] = useState("All");
  const [selectedTransmission, setSelectedTransmission] = useState("All");
  const [selectedFuel, setSelectedFuel] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showHints, setShowHints] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [galleryTitle, setGalleryTitle] = useState("");

  const filteredInventory = inventoryData.filter((car) => {
    const makeMatch = selectedMake === "All" || car.make === selectedMake;
    const transmissionMatch = selectedTransmission === "All" || car.transmission === selectedTransmission;
    const fuelMatch = selectedFuel === "All" || car.fuel === selectedFuel;
    
    const searchMatch = searchQuery === "" || 
      car.make.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      car.category?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      `${car.make} ${car.model}`.toLowerCase().includes(searchQuery.toLowerCase());
    
    return makeMatch && transmissionMatch && fuelMatch && searchMatch;
  });

  const comparedVehicles = inventoryData.filter((car) => compareList.includes(car.id));

  const toggleCompare = (id: number) => {
    setCompareList((prev) =>
      prev.includes(id)
        ? prev.filter((carId) => carId !== id)
        : prev.length < 4
        ? [...prev, id]
        : prev
    );
  };

  const toggleFavorite = (id: number) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((carId) => carId !== id)
        : [...prev, id]
    );
  };

  const removeFromCompare = (id: number) => {
    setCompareList((prev) => prev.filter((carId) => carId !== id));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const handleHintClick = (hint: string) => {
    setSearchQuery(hint);
    setShowHints(false);
  };

  const openGallery = (images: string[], title: string) => {
    setGalleryImages(images);
    setGalleryTitle(title);
    setGalleryOpen(true);
  };

  return (
    <section id="inventory" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Browse Our Inventory
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Explore our selection of quality vehicles available for import.
          </p>

          {/* Search Bar */}
          <div className="max-w-xl mx-auto mb-6">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowHints(true)}
                onBlur={() => setTimeout(() => setShowHints(false), 200)}
                className="pl-12 pr-10 py-6 text-lg bg-card border-border focus:border-primary shadow-sm rounded-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-5 w-5" />
                </button>
              )}
              
              {/* Search Hints */}
              {showHints && !searchQuery && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-xl shadow-lg z-20 p-4">
                  <p className="text-xs text-muted-foreground mb-3 px-2">Popular searches</p>
                  <div className="flex flex-wrap gap-2">
                    {searchHints.map((hint) => (
                      <button
                        key={hint}
                        onClick={() => handleHintClick(hint)}
                        className="px-4 py-2 text-sm bg-secondary text-foreground hover:bg-primary hover:text-white rounded-full transition-all font-medium"
                      >
                        {hint}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Filter Toggle & Compare Button */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="border-border bg-card hover:bg-secondary font-medium rounded-xl"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </Button>
            
            {compareList.length > 0 && (
              <Button
                variant="default"
                onClick={() => document.getElementById('comparison-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary text-white font-semibold rounded-xl"
              >
                <GitCompare className="mr-2 h-4 w-4" />
                Compare ({compareList.length})
              </Button>
            )}
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="bg-card border border-border rounded-2xl p-6 mb-8 animate-fade-in max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <span className="text-sm text-muted-foreground mb-3 block font-medium">Make</span>
                  <div className="flex flex-wrap gap-2">
                    {makes.map((make) => (
                      <Button
                        key={make}
                        variant={selectedMake === make ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedMake(make)}
                        className={`rounded-full ${selectedMake === make ? "bg-primary" : "border-border"}`}
                      >
                        {make}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-sm text-muted-foreground mb-3 block font-medium">Transmission</span>
                  <div className="flex flex-wrap gap-2">
                    {transmissions.map((trans) => (
                      <Button
                        key={trans}
                        variant={selectedTransmission === trans ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedTransmission(trans)}
                        className={`rounded-full ${selectedTransmission === trans ? "bg-primary" : "border-border"}`}
                      >
                        {trans}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-sm text-muted-foreground mb-3 block font-medium">Fuel Type</span>
                  <div className="flex flex-wrap gap-2">
                    {fuelTypes.map((fuel) => (
                      <Button
                        key={fuel}
                        variant={selectedFuel === fuel ? "default" : "outline"}
                        size="sm"
                        onClick={() => setSelectedFuel(fuel)}
                        className={`rounded-full ${selectedFuel === fuel ? "bg-primary" : "border-border"}`}
                      >
                        {fuel}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredInventory.map((car, index) => (
            <Card 
              key={car.id}
              className={`group bg-card border-border rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 animate-fade-in ${
                compareList.includes(car.id) ? "ring-2 ring-primary" : ""
              }`}
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <div className="group-hover:scale-105 transition-transform duration-500">
                  <ImageGallery 
                    images={car.images} 
                    alt={`${car.make} ${car.model}`} 
                  />
                </div>
                
                {/* Badges */}
                <Badge 
                  className={`absolute top-4 left-4 font-semibold ${
                    car.status === "Available" 
                      ? "bg-green-500 text-white" 
                      : "bg-amber-500 text-white"
                  }`}
                >
                  {car.status}
                </Badge>
                
                {/* Quick Actions on Hover */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button
                    onClick={() => toggleFavorite(car.id)}
                    className={`p-2 rounded-full shadow-md transition-colors ${
                      favorites.includes(car.id) 
                        ? "bg-primary text-white" 
                        : "bg-white text-foreground hover:bg-primary hover:text-white"
                    }`}
                  >
                    <Heart className={`h-4 w-4 ${favorites.includes(car.id) ? "fill-current" : ""}`} />
                  </button>
                  <button
                    onClick={() => openGallery(car.images, `${car.year} ${car.make} ${car.model}`)}
                    className="p-2 bg-white text-foreground rounded-full shadow-md hover:bg-primary hover:text-white transition-colors"
                  >
                    <Eye className="h-4 w-4" />
                  </button>
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Title & Price */}
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <CarIcon className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground font-medium">{car.make} • {car.year}</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{car.model}</h3>
                  <p className="text-primary font-bold text-lg">{car.price}</p>
                </div>

                {/* Specs Row */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Gauge className="h-4 w-4" />
                    <span>{car.mileage}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Fuel className="h-4 w-4" />
                    <span>{car.fuel}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Settings className="h-4 w-4" />
                    <span>{car.transmission}</span>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <WhatsAppButton 
                    vehicleName={`${car.year} ${car.make} ${car.model}`}
                    className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                  />
                  
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => openGallery(car.images, `${car.year} ${car.make} ${car.model}`)}
                      className="flex-1 border-border hover:bg-secondary rounded-lg"
                    >
                      <Eye className="mr-1 h-4 w-4" />
                      Details
                    </Button>
                    <label 
                      className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer transition-all flex-1 justify-center text-sm font-medium ${
                        compareList.includes(car.id)
                          ? "bg-primary text-white"
                          : "bg-secondary text-foreground hover:bg-primary hover:text-white"
                      }`}
                    >
                      <Checkbox
                        checked={compareList.includes(car.id)}
                        onCheckedChange={() => toggleCompare(car.id)}
                        disabled={!compareList.includes(car.id) && compareList.length >= 4}
                        className="border-current data-[state=checked]:bg-transparent data-[state=checked]:text-current h-4 w-4"
                      />
                      Compare
                    </label>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredInventory.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No vehicles match your filters.</p>
          </div>
        )}

        {/* Comparison Section */}
        {comparedVehicles.length > 0 && (
          <div id="comparison-section" className="mt-16 scroll-mt-24">
            <VehicleComparison
              vehicles={comparedVehicles}
              onRemove={removeFromCompare}
              onClear={clearCompare}
            />
          </div>
        )}

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for? Contact us for custom orders!
          </p>
          <WhatsAppButton className="bg-[#25D366] hover:bg-[#128C7E] text-white" />
        </div>
      </div>

      {/* Photo Gallery Modal */}
      <PhotoGalleryModal
        isOpen={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        images={galleryImages}
        title={galleryTitle}
      />
    </section>
  );
};

export default Inventory;
