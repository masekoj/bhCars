import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
  X
} from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import VehicleComparison from "./VehicleComparison";
import VehicleGallery from "./VehicleGallery";
import car1 from "@/assets/featured-car-1.jpg";
import car2 from "@/assets/featured-car-2.jpg";
import car3 from "@/assets/featured-car-3.jpg";
import toyoace1 from "@/assets/toyoace-1.jpg";
import toyoace2 from "@/assets/toyoace-2.jpg";
import toyoace3 from "@/assets/toyoace-3.jpg";
import toyoace4 from "@/assets/toyoace-4.jpg";
import mazdaCx51 from "@/assets/mazda-cx5-1.jpg";
import mazdaCx52 from "@/assets/mazda-cx5-2.jpg";
import mazdaCx53 from "@/assets/mazda-cx5-3.jpg";
import mazdaCx54 from "@/assets/mazda-cx5-4.jpg";

const inventoryData = [
  {
    id: 1,
    make: "Toyota",
    model: "Toyoace 2 Ton",
    year: 2018,
    price: "Contact for Price",
    images: [toyoace1, toyoace2, toyoace3, toyoace4],
    mileage: "85,000 km",
    fuel: "Diesel",
    transmission: "Manual",
    engine: "4.0L Diesel",
    color: "Yellow",
    status: "Available",
    location: "Japan",
    category: "Lorry",
  },
  {
    id: 2,
    make: "Mazda",
    model: "CX-5",
    year: 2019,
    price: "Contact for Price",
    images: [mazdaCx51, mazdaCx52, mazdaCx53, mazdaCx54],
    mileage: "42,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "2.2L SkyActiv",
    color: "Deep Crystal Blue",
    status: "Available",
    location: "Japan",
    category: "SUV",
  },
  {
    id: 3,
    make: "Toyota",
    model: "Dyna 2 Ton",
    year: 2020,
    price: "Contact for Price",
    images: [car1],
    mileage: "62,000 km",
    fuel: "Diesel",
    transmission: "Manual",
    engine: "3.0L Diesel",
    color: "White",
    status: "Available",
    location: "Japan",
    category: "Lorry",
  },
  {
    id: 4,
    make: "Isuzu",
    model: "Elf 2 Ton",
    year: 2019,
    price: "Contact for Price",
    images: [car2],
    mileage: "78,000 km",
    fuel: "Diesel",
    transmission: "Manual",
    engine: "3.0L Diesel",
    color: "White",
    status: "In Transit",
    location: "En Route",
    category: "Lorry",
  },
  {
    id: 5,
    make: "Mitsubishi",
    model: "Canter 2 Ton",
    year: 2021,
    price: "Contact for Price",
    images: [car3],
    mileage: "45,000 km",
    fuel: "Diesel",
    transmission: "Manual",
    engine: "3.0L Diesel",
    color: "White",
    status: "Available",
    location: "Japan",
    category: "Lorry",
  },
  {
    id: 6,
    make: "Hino",
    model: "Dutro 2 Ton",
    year: 2018,
    price: "Contact for Price",
    images: [car1],
    mileage: "95,000 km",
    fuel: "Diesel",
    transmission: "Manual",
    engine: "4.0L Diesel",
    color: "Blue",
    status: "Available",
    location: "Japan",
    category: "Lorry",
  },
  {
    id: 7,
    make: "Toyota",
    model: "Hiace Van",
    year: 2020,
    price: "Contact for Price",
    images: [car2],
    mileage: "52,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "2.8L Diesel",
    color: "White",
    status: "Available",
    location: "Japan",
    category: "Van",
  },
  {
    id: 8,
    make: "Nissan",
    model: "Atlas 2 Ton",
    year: 2019,
    price: "Contact for Price",
    images: [car3],
    mileage: "68,000 km",
    fuel: "Diesel",
    transmission: "Manual",
    engine: "3.0L Diesel",
    color: "White",
    status: "Available",
    location: "Japan",
    category: "Lorry",
  },
];

const makes = ["All", "Toyota", "Mazda", "Isuzu", "Mitsubishi", "Hino", "Nissan"];
const transmissions = ["All", "Automatic", "Manual"];
const fuelTypes = ["All", "Petrol", "Diesel"];
const categories = ["All", "Lorry", "SUV", "Van"];

const topSearches = [
  "2 Ton Lorry",
  "Toyota Toyoace",
  "Mazda CX-5",
  "Isuzu Elf",
  "Canter",
  "Hiace Van",
];

const Inventory = () => {
  const [selectedMake, setSelectedMake] = useState("All");
  const [selectedTransmission, setSelectedTransmission] = useState("All");
  const [selectedFuel, setSelectedFuel] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [compareList, setCompareList] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearchHints, setShowSearchHints] = useState(false);

  const filteredInventory = inventoryData.filter((car) => {
    const makeMatch = selectedMake === "All" || car.make === selectedMake;
    const transmissionMatch = selectedTransmission === "All" || car.transmission === selectedTransmission;
    const fuelMatch = selectedFuel === "All" || car.fuel === selectedFuel;
    const categoryMatch = selectedCategory === "All" || car.category === selectedCategory;
    const searchMatch = searchQuery === "" || 
      `${car.make} ${car.model} ${car.category}`.toLowerCase().includes(searchQuery.toLowerCase());
    return makeMatch && transmissionMatch && fuelMatch && categoryMatch && searchMatch;
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

  const removeFromCompare = (id: number) => {
    setCompareList((prev) => prev.filter((carId) => carId !== id));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const handleSearchHintClick = (hint: string) => {
    setSearchQuery(hint);
    setShowSearchHints(false);
  };

  return (
    <section id="inventory" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Browse Our Inventory
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Swipe through our selection of premium vehicles available for import from Japan to Malawi.
          </p>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mb-6 relative">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search vehicles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSearchHints(true)}
                onBlur={() => setTimeout(() => setShowSearchHints(false), 200)}
                className="pl-10 pr-10 bg-background border-border"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            
            {/* Search Hints Dropdown */}
            {showSearchHints && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-card border border-border rounded-lg shadow-lg z-20 animate-fade-in">
                <div className="p-3">
                  <p className="text-xs text-muted-foreground mb-2 text-left">Top Searches</p>
                  <div className="flex flex-wrap gap-2">
                    {topSearches.map((hint) => (
                      <button
                        key={hint}
                        onClick={() => handleSearchHintClick(hint)}
                        className="px-3 py-1.5 text-sm bg-secondary hover:bg-primary hover:text-primary-foreground rounded-full transition-colors text-foreground"
                      >
                        {hint}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Filter Toggle & Compare Button */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="border-border"
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter Vehicles
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </Button>
            
            {compareList.length > 0 && (
              <Button
                variant="default"
                onClick={() => document.getElementById('comparison-section')?.scrollIntoView({ behavior: 'smooth' })}
                className="bg-primary"
              >
                <GitCompare className="mr-2 h-4 w-4" />
                Compare ({compareList.length})
              </Button>
            )}
          </div>
          
          <p className="text-sm text-muted-foreground mb-4">
            Select up to 4 vehicles to compare specifications side by side
          </p>

          {/* Filters */}
          {showFilters && (
            <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in">
              <div className="flex flex-col items-start">
                <span className="text-sm text-muted-foreground mb-2">Category</span>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <Button
                      key={cat}
                      variant={selectedCategory === cat ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(cat)}
                      className={selectedCategory === cat ? "bg-primary" : "border-border"}
                    >
                      {cat}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start">
                <span className="text-sm text-muted-foreground mb-2">Make</span>
                <div className="flex flex-wrap gap-2">
                  {makes.map((make) => (
                    <Button
                      key={make}
                      variant={selectedMake === make ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedMake(make)}
                      className={selectedMake === make ? "bg-primary" : "border-border"}
                    >
                      {make}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start">
                <span className="text-sm text-muted-foreground mb-2">Transmission</span>
                <div className="flex flex-wrap gap-2">
                  {transmissions.map((trans) => (
                    <Button
                      key={trans}
                      variant={selectedTransmission === trans ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTransmission(trans)}
                      className={selectedTransmission === trans ? "bg-primary" : "border-border"}
                    >
                      {trans}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-start">
                <span className="text-sm text-muted-foreground mb-2">Fuel Type</span>
                <div className="flex flex-wrap gap-2">
                  {fuelTypes.map((fuel) => (
                    <Button
                      key={fuel}
                      variant={selectedFuel === fuel ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedFuel(fuel)}
                      className={selectedFuel === fuel ? "bg-primary" : "border-border"}
                    >
                      {fuel}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Carousel */}
        <div className="px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {filteredInventory.map((car) => (
                <CarouselItem key={car.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className={`bg-card border-2 transition-all duration-300 overflow-hidden h-full ${
                    compareList.includes(car.id) 
                      ? "border-primary ring-2 ring-primary/20" 
                      : "border-border hover:border-primary/50"
                  }`}>
                    <div className="relative overflow-hidden">
                      <VehicleGallery 
                        images={car.images} 
                        vehicleName={`${car.make} ${car.model}`} 
                      />
                      <Badge 
                        className={`absolute top-4 right-4 ${
                          car.status === "Available" 
                            ? "bg-green-600 text-white" 
                            : "bg-amber-600 text-white"
                        }`}
                      >
                        {car.status}
                      </Badge>
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {car.location}
                      </Badge>
                      
                      {/* Compare Checkbox */}
                      <div className="absolute bottom-14 right-2 z-10">
                        <label 
                          className={`flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer transition-all ${
                            compareList.includes(car.id)
                              ? "bg-primary text-primary-foreground"
                              : "bg-background/90 text-foreground hover:bg-background"
                          }`}
                        >
                          <Checkbox
                            checked={compareList.includes(car.id)}
                            onCheckedChange={() => toggleCompare(car.id)}
                            disabled={!compareList.includes(car.id) && compareList.length >= 4}
                            className="border-current data-[state=checked]:bg-transparent data-[state=checked]:text-current"
                          />
                          <span className="text-xs font-medium">
                            {compareList.includes(car.id) ? "Added" : "Compare"}
                          </span>
                        </label>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="mb-4">
                        <div className="flex items-center gap-2 mb-1">
                          <CarIcon className="h-4 w-4 text-primary" />
                          <span className="text-sm text-muted-foreground">{car.make} • {car.category}</span>
                        </div>
                        <h3 className="text-xl font-bold text-foreground">{car.model}</h3>
                        <p className="text-primary font-semibold">{car.price}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{car.year}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Gauge className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{car.mileage}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Fuel className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{car.fuel}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Settings className="h-4 w-4 text-muted-foreground" />
                          <span className="text-muted-foreground">{car.transmission}</span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mb-4 text-sm">
                        <span className="text-muted-foreground">Engine:</span>
                        <span className="text-foreground font-medium">{car.engine}</span>
                      </div>

                      <WhatsAppButton 
                        vehicleName={`${car.year} ${car.make} ${car.model}`}
                        className="w-full"
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="border-border bg-background hover:bg-secondary" />
            <CarouselNext className="border-border bg-background hover:bg-secondary" />
          </Carousel>
        </div>

        {filteredInventory.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">No vehicles match your filters. Try adjusting your criteria.</p>
          </div>
        )}

        {/* Comparison Section */}
        {comparedVehicles.length > 0 && (
          <div id="comparison-section" className="mt-12 scroll-mt-24">
            <VehicleComparison
              vehicles={comparedVehicles}
              onRemove={removeFromCompare}
              onClear={clearCompare}
            />
          </div>
        )}

        <div className="text-center mt-8">
          <p className="text-muted-foreground">
            Can't find what you're looking for? Contact us for custom orders!
          </p>
          <WhatsAppButton className="mt-4" />
        </div>
      </div>
    </section>
  );
};

export default Inventory;
