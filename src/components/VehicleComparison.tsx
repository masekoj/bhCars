import { X, Gauge, Fuel, Settings, Calendar, Car as CarIcon, Palette, MapPin, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import WhatsAppButton from "./WhatsAppButton";

interface Vehicle {
  id: number;
  make: string;
  model: string;
  year: number;
  price: string;
  image: string;
  mileage: string;
  fuel: string;
  transmission: string;
  engine: string;
  color: string;
  status: string;
  location: string;
}

interface VehicleComparisonProps {
  vehicles: Vehicle[];
  onRemove: (id: number) => void;
  onClear: () => void;
}

const VehicleComparison = ({ vehicles, onRemove, onClear }: VehicleComparisonProps) => {
  if (vehicles.length === 0) return null;

  const specs = [
    { key: "year", label: "Year", icon: Calendar },
    { key: "mileage", label: "Mileage", icon: Gauge },
    { key: "fuel", label: "Fuel Type", icon: Fuel },
    { key: "transmission", label: "Transmission", icon: Settings },
    { key: "engine", label: "Engine", icon: Zap },
    { key: "color", label: "Color", icon: Palette },
    { key: "status", label: "Status", icon: CarIcon },
    { key: "location", label: "Location", icon: MapPin },
  ];

  return (
    <Card className="bg-card border-border animate-fade-in">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-2xl font-display text-foreground">
          Compare Vehicles ({vehicles.length})
        </CardTitle>
        <Button variant="ghost" size="sm" onClick={onClear} className="text-muted-foreground hover:text-foreground">
          Clear All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left p-3 text-muted-foreground font-medium w-40">Specification</th>
                {vehicles.map((vehicle) => (
                  <th key={vehicle.id} className="p-3 min-w-[200px]">
                    <div className="relative">
                      <button
                        onClick={() => onRemove(vehicle.id)}
                        className="absolute -top-2 -right-2 p-1 bg-destructive text-destructive-foreground rounded-full hover:bg-destructive/80 transition-colors z-10"
                        aria-label={`Remove ${vehicle.make} ${vehicle.model} from comparison`}
                      >
                        <X className="h-3 w-3" />
                      </button>
                      <div className="relative overflow-hidden rounded-lg mb-3">
                        <img
                          src={vehicle.image}
                          alt={`${vehicle.make} ${vehicle.model}`}
                          className="w-full h-32 object-cover"
                        />
                      </div>
                      <h4 className="font-bold text-foreground text-sm">{vehicle.make}</h4>
                      <p className="text-primary font-semibold">{vehicle.model}</p>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, index) => {
                const Icon = spec.icon;
                return (
                  <tr key={spec.key} className={index % 2 === 0 ? "bg-secondary/30" : ""}>
                    <td className="p-3 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        {spec.label}
                      </div>
                    </td>
                    {vehicles.map((vehicle) => (
                      <td key={vehicle.id} className="p-3 text-center text-foreground font-medium">
                        {vehicle[spec.key as keyof Vehicle]}
                      </td>
                    ))}
                  </tr>
                );
              })}
              <tr className="border-t border-border">
                <td className="p-3 text-muted-foreground font-medium">Price</td>
                {vehicles.map((vehicle) => (
                  <td key={vehicle.id} className="p-3 text-center">
                    <span className="text-primary font-bold">{vehicle.price}</span>
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-3"></td>
                {vehicles.map((vehicle) => (
                  <td key={vehicle.id} className="p-3 text-center">
                    <WhatsAppButton
                      vehicleName={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                      className="w-full"
                    />
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
};

export default VehicleComparison;
