import { Car } from "lucide-react";

const StickyBadge = () => {
  return (
    <div className="sticky top-[64px] md:top-[80px] z-40 bg-background/95 backdrop-blur-md border-b border-border/30 shadow-sm">
      <div className="container mx-auto px-4 py-2.5 flex justify-center">
        <div className="inline-flex items-center px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full">
          <Car className="h-4 w-4 text-primary mr-2" />
          <span className="text-sm text-primary font-semibold">Japan to Malawi Imports</span>
        </div>
      </div>
    </div>
  );
};

export default StickyBadge;
