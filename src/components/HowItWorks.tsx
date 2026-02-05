 import { Car, FileText, Key } from "lucide-react";
 
 const steps = [
   {
     icon: Car,
     step: "01",
     title: "SELECT",
     description: "Choose your car from our available stock. Browse our gallery and find your perfect vehicle from Japan.",
   },
   {
     icon: FileText,
     step: "02",
     title: "IMPORT",
     description: "You initiate the transaction, we handle the rest. All MRA paperwork and port logistics are managed by us until clearance.",
   },
   {
     icon: Key,
     step: "03",
     title: "DRIVE",
     description: "Pick up your car in Malawi, fully inspected and documented. Ready for the road with complete peace of mind.",
   },
 ];
 
 const HowItWorks = () => {
   return (
     <section className="py-20 bg-secondary">
       <div className="container mx-auto px-4">
         <div className="text-center mb-16">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
             How It Works
           </h2>
           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
             Importing a car from Japan has never been easier. Three simple steps to your dream vehicle.
           </p>
         </div>
 
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
           {steps.map((step, index) => {
             const Icon = step.icon;
             return (
               <div 
                 key={index}
                 className="relative bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group animate-fade-in"
                 style={{ animationDelay: `${index * 0.15}s` }}
               >
                 {/* Step Number */}
                 <div className="absolute -top-4 left-8 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full">
                   Step {step.step}
                 </div>
 
                 {/* Icon */}
                 <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                   <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors" />
                 </div>
 
                 {/* Content */}
                 <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                 <p className="text-muted-foreground leading-relaxed">{step.description}</p>
 
                 {/* Connector Line (hidden on last item and mobile) */}
                 {index < steps.length - 1 && (
                   <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
                 )}
               </div>
             );
           })}
         </div>
       </div>
     </section>
   );
 };
 
 export default HowItWorks;