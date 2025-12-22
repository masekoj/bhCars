import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Gauge, Fuel, Settings } from "lucide-react";
import WhatsAppButton from "./WhatsAppButton";
import car1 from "@/assets/toyoace-3.jpg";
import car2 from "@/assets/cx5-3.jpg";
import car3 from "@/assets/featured-car-3.jpeg";

const vehicles = [
  {
    id: 1,
    name: "Toyoace 2 Ton",
    price: "Contact for Price",
    image: car1,
    year: "2019",
    mileage: "45,000 km",
    fuel: "Diesel",
    transmission: "manual",
    badge: "New Arrival",
  },
  {
    id: 2,
    name: "CX-5",
    price: "Contact for Price",
    image: car2,
    year: "2015",
    mileage: "68,500 km",
    fuel: "Petrol",
    transmission: "Automatic",
    badge: "Featured",
  },
  {
    id: 3,
    name: "Toyace 2 Ton",
    price: "Contact for Price",
    image: car3,
    year: "2012",
    mileage: "50,000 km",
    fuel: "Diesel",
    transmission: "manual",
    badge: "Best Value",
  },
];

const FeaturedVehicles = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="vehicles" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Featured Vehicles
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our selection of available vehicles, each carefully inspected 
            and certified for quality.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle, index) => (
            <Card
              key={vehicle.id}
              className="group bg-background border-border hover:border-primary hover:shadow-lg transition-all duration-300 overflow-hidden animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-white font-semibold">
                  {vehicle.badge}
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{vehicle.name}</h3>
                    <p className="text-primary font-bold text-lg">{vehicle.price}</p>
                  </div>
                  <span className="text-sm text-foreground bg-secondary px-3 py-1 rounded-full font-medium">
                    {vehicle.year}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="flex items-center space-x-2">
                    <Gauge className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground font-medium">{vehicle.mileage}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Fuel className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground font-medium">{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Settings className="h-4 w-4 text-primary" />
                    <span className="text-sm text-muted-foreground font-medium">{vehicle.transmission}</span>
                  </div>
                </div>

                <WhatsAppButton 
                  vehicleName={`${vehicle.year} ${vehicle.name}`}
                  className="w-full"
                >
                  Inquire via WhatsApp
                </WhatsAppButton>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-foreground/20 hover:bg-secondary hover:border-primary font-semibold"
            onClick={scrollToContact}
          >
            View All Vehicles
            <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;
