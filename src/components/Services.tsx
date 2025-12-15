import { Card, CardContent } from "@/components/ui/card";
import { Ship, Shield, Wrench, FileText, Phone, Clock } from "lucide-react";

const services = [
  {
    icon: Ship,
    title: "Import Services",
    description: "Complete vehicle import solutions from Japan to Malawi with full documentation support.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Every vehicle undergoes rigorous inspection to ensure top quality and reliability.",
  },
  {
    icon: Wrench,
    title: "Maintenance Support",
    description: "Post-purchase maintenance guidance and support for all imported vehicles.",
  },
  {
    icon: FileText,
    title: "Documentation",
    description: "We handle all paperwork including customs clearance and registration processes.",
  },
  {
    icon: Phone,
    title: "24/7 Support",
    description: "Round-the-clock customer support to answer your questions and concerns.",
  },
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Efficient logistics ensuring your vehicle arrives safely and on time.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive vehicle import services tailored to your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8">
                <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
