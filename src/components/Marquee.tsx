const Marquee = () => {
  const text = "Quality Used Japanese Cars • Trusted Imports to Malawi • Wide Selection of Toyotas, Hondas, Nissans • Fast & Reliable Shipping • Transparent Pricing • Contact Us Today! • ";

  return (
    <div 
      className="w-full overflow-hidden relative"
      style={{ 
        backgroundColor: 'hsl(0, 0%, 8%)',
        minHeight: '36px'
      }}
    >
      <div 
        className="py-2 flex whitespace-nowrap hover:[animation-play-state:paused]"
        style={{
          animation: 'marquee 35s linear infinite',
          width: 'max-content'
        }}
      >
        {[...Array(6)].map((_, i) => (
          <span 
            key={i} 
            className="text-sm font-medium px-4 inline-block"
            style={{ color: 'rgba(255, 255, 255, 0.9)' }}
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
