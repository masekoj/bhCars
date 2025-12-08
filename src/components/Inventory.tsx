import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
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
  GitCompare
} from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import VehicleComparison from "./VehicleComparison";
import car1 from "@/assets/featured-car-1.jpg";
import car2 from "@/assets/featured-car-2.jpg";
import car3 from "@/assets/featured-car-3.jpg";

const inventoryData = [
  {
    id: 1,
    make: "Toyota",
    model: "Land Cruiser Prado",
    year: 2022,
    price: "Contact for Price",
    image: car1,
    mileage: "15,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "2.8L Turbo",
    color: "Pearl White",
    status: "Available",
    location: "Dar es Salaam",
  },
  {
    id: 2,
    make: "Mercedes-Benz",
    model: "GLE 350",
    year: 2023,
    price: "Contact for Price",
    image: car2,
    mileage: "8,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "3.0L V6",
    color: "Obsidian Black",
    status: "Available",
    location: "Dar es Salaam",
  },
  {
    id: 3,
    make: "BMW",
    model: "X5 xDrive40i",
    year: 2021,
    price: "Contact for Price",
    image: car3,
    mileage: "22,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "3.0L Twin-Turbo",
    color: "Carbon Black",
    status: "Available",
    location: "Dar es Salaam",
  },
  {
    id: 4,
    make: "Toyota",
    model: "Hilux Double Cab",
    year: 2023,
    price: "Contact for Price",
    image: car1,
    mileage: "5,200 km",
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "2.8L GD-6",
    color: "Attitude Black",
    status: "In Transit",
    location: "En Route",
  },
  {
    id: 5,
    make: "Nissan",
    model: "Patrol Y62",
    year: 2022,
    price: "Contact for Price",
    image: car2,
    mileage: "18,000 km",
    fuel: "Petrol",
    transmission: "Automatic",
    engine: "5.6L V8",
    color: "Moonlight White",
    status: "Available",
    location: "Dar es Salaam",
  },
  {
    id: 6,
    make: "Range Rover",
    model: "Sport HSE",
    year: 2021,
    price: "Contact for Price",
    image: car3,
    mileage: "28,000 km",
    fuel: "Diesel",
    transmission: "Automatic",
    engine: "3.0L TDV6",
    color: "Santorini Black",
    status: "Available",
    location: "Dar es Salaam",
  },
];

const makes = ["All", "Toyota", "Mercedes-Benz", "BMW", "Nissan", "Range Rover"];
const transmissions = ["All", "Automatic", "Manual"];
const fuelTypes = ["All", "Petrol", "Diesel", "Hybrid"];

const Inventory = () => {
  const [selectedMake, setSelectedMake] = useState("All");
  const [selectedTransmission, setSelectedTransmission] = useState("All");
  const [selectedFuel, setSelectedFuel] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [compareList, setCompareList] = useState<number[]>([]);

  const filteredInventory = inventoryData.filter((car) => {
    const makeMatch = selectedMake === "All" || car.make === selectedMake;
    const transmissionMatch = selectedTransmission === "All" || car.transmission === selectedTransmission;
    const fuelMatch = selectedFuel === "All" || car.fuel === selectedFuel;
    return makeMatch && transmissionMatch && fuelMatch;
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

  return (
    <section id="inventory" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Browse Our Inventory
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Swipe through our selection of premium vehicles available for import from Dar es Salaam to Malawi.
          </p>

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
                      <img
                        src={car.image}
                        alt={`${car.make} ${car.model}`}
                        className="w-full h-56 object-cover hover:scale-110 transition-transform duration-500"
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
                      <div className="absolute bottom-4 right-4">
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
                          <span className="text-sm text-muted-foreground">{car.make}</span>
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
