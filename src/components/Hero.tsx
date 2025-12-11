import chefLogo from "@/assets/chef-logo.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-red-900/50 via-background to-background" />
      
      {/* Decorative Lines */}
      <div className="absolute top-32 left-1/2 -translate-x-1/2 flex gap-1">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="w-8 h-1 bg-primary/60 rounded-full" />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        {/* Script Tagline */}
        <p className="font-script text-primary text-3xl md:text-4xl mb-4 animate-fade-in">
          Take the Taste
        </p>

        {/* Logo Badge */}
        <div className="relative inline-block mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-red-700 via-red-800 to-red-900 p-2 shadow-2xl mx-auto animate-pulse-glow">
            <div className="w-full h-full rounded-full bg-red-800 flex items-center justify-center overflow-hidden">
              <img
                src={chefLogo}
                alt="Pizza House Chef"
                className="w-3/4 h-3/4 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Script Tagline Bottom */}
        <p className="font-script text-primary text-3xl md:text-4xl mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
          Try the Best
        </p>

        {/* Main Title */}
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary mb-4 tracking-wider animate-fade-in leading-none" style={{ animationDelay: "0.2s" }}>
          PIZZA
        </h1>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-primary mb-8 tracking-wider animate-fade-in leading-none" style={{ animationDelay: "0.25s" }}>
          HOUSE
        </h1>

        {/* Decorative Lines */}
        <div className="flex justify-center gap-1 mb-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-6 md:w-8 h-1 bg-primary/60 rounded-full" />
          ))}
        </div>

        {/* Tagline */}
        <p className="text-foreground/80 text-xl md:text-2xl font-medium mb-10 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.35s" }}>
          100% Real Cheese • Fresh Ingredients • Made to Order
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <a
            href="tel:+14052851616"
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition-all glow-primary inline-flex items-center justify-center gap-2"
          >
            <span className="text-2xl">›</span>
            ORDER NOW
          </a>
          <a
            href="#menu"
            className="border-2 border-primary text-primary px-10 py-4 rounded-full font-bold text-xl hover:bg-primary hover:text-primary-foreground transition-all"
          >
            View Menu
          </a>
        </div>

        {/* Locations */}
        <div className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.5s" }}>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h3 className="text-primary font-bold text-lg mb-2">Oklahoma City Location</h3>
            <p className="text-foreground/80 text-sm mb-1">4908 NW 23rd St, OKC, OK 73127</p>
            <p className="text-primary font-bold">405-285-1616</p>
            <p className="text-muted-foreground text-xs mt-1">Open 11 Am – 2 Am</p>
          </div>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
            <h3 className="text-primary font-bold text-lg mb-2">Edmond Location</h3>
            <p className="text-foreground/80 text-sm mb-1">19417 N. Portland Ave, Edmond, OK 73012</p>
            <p className="text-primary font-bold">405-943-7727</p>
            <p className="text-muted-foreground text-xs mt-1">Open 11 Am – 10 Pm</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
