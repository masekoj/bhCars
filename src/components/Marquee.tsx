const Marquee = () => {
  const text = "Quality Used Japanese Cars • Trusted Imports to Malawi • Wide Selection of Toyotas, Hondas, Nissans • Fast & Reliable Shipping • Transparent Pricing • Contact Us Today! • ";

  return (
    <div className="bg-foreground border-b border-border overflow-hidden">
      <div className="py-2 flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused]">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-sm font-medium text-background/90 mx-4">
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
