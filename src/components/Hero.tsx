import { ChevronDown } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-background to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <img
            src={logo}
            alt="Pizza House"
            className="w-64 md:w-80 mb-8 animate-float"
          />
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
            Authentic{" "}
            <span className="text-gradient">Italian Pizza</span>
            <br />
            Made Fresh Daily
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
            Experience the taste of traditional recipes with premium ingredients. 
            From classic Margherita to gourmet specialties, every bite tells a story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 glow-primary"
            >
              View Our Menu
            </a>
            <a
              href="tel:+1234567890"
              className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Call to Order
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#menu" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
