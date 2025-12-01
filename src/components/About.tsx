import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Why Choose BH Car Imports?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              With years of experience in vehicle importation between Dar es Salaam and Malawi, 
              we've built a reputation for reliability, quality, and exceptional customer service. 
              Our commitment is to make your car import experience smooth and hassle-free.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Trusted Expertise</h4>
                  <p className="text-muted-foreground">
                    Years of experience in international vehicle imports
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Competitive Pricing</h4>
                  <p className="text-muted-foreground">
                    Best value for premium quality vehicles
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Complete Service</h4>
                  <p className="text-muted-foreground">
                    From selection to delivery, we handle everything
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Customer First</h4>
                  <p className="text-muted-foreground">
                    Your satisfaction is our top priority
                  </p>
                </div>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              onClick={scrollToContact}
            >
              Start Your Journey
            </Button>
          </div>

          <div className="relative animate-fade-in">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl p-8 border border-border">
              <div className="space-y-6">
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">500+</div>
                  <div className="text-foreground font-semibold">Happy Customers</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Satisfied clients across Malawi
                  </div>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">10+</div>
                  <div className="text-foreground font-semibold">Years Experience</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    In vehicle import industry
                  </div>
                </div>
                <div className="bg-card p-6 rounded-xl border border-border">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-foreground font-semibold">Quality Guarantee</div>
                  <div className="text-sm text-muted-foreground mt-2">
                    Every vehicle inspected and certified
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
