import { Car, FileText, Key } from "lucide-react";

const steps = [
  {
    icon: Car,
    step: "01",
    title: "SELECT",
    description: "Choose your car from our available stock",
  },
  {
    icon: FileText,
    step: "02",
    title: "IMPORT",
    description: "We handle all MRA paperwork and port logistics",
  },
  {
    icon: Key,
    step: "03",
    title: "DRIVE",
    description: "Pick up your fully inspected car in Malawi",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-3">
            How It Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Three simple steps to your dream vehicle
          </p>
        </div>

        {/* Glassmorphic Container */}
        <div className="max-w-4xl mx-auto bg-card/40 backdrop-blur-xl border border-border/30 rounded-3xl p-6 md:p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div 
                  key={index}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/20 hover:border-primary/30 transition-all duration-300 group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-105 transition-all">
                    <Icon className="h-6 w-6 text-primary group-hover:text-white transition-colors" />
                  </div>

                  {/* Content */}
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-primary/60">{step.step}</span>
                      <h3 className="text-lg font-bold text-foreground">{step.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
