import { Link } from "react-router-dom";
import pizzaHouseLogo from "@/assets/pizza-house-logo.png";
import pizzaBackground from "@/assets/pizza-background.jpg";
import FloatingToppings from "./FloatingToppings";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Dark Background with Pizza Board Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${pizzaBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
      </div>

      {/* Floating Toppings */}
      <FloatingToppings />

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen pt-24">
        {/* Centered Logo Badge with Glow */}
        <div className="flex justify-center mt-8 mb-8 animate-fade-in">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-primary/30 blur-2xl scale-150" />
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-2xl animate-pulse-glow ring-4 ring-primary/80">
              <img 
                src={pizzaHouseLogo} 
                alt="Pizza House" 
                className="w-full h-full object-cover" 
              />
            </div>
          </div>
        </div>

        {/* Main Content - Split Layout */}
        <div className="container mx-auto px-4 flex-1 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Left Side - Text & Buttons */}
          <div className="text-center lg:text-left lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-4 leading-tight">
              <span className="text-primary font-bold drop-shadow-[0_0_30px_hsl(45,100%,50%,0.6)]">𝑷𝒊𝒛𝒛𝒂 𝑯𝒐𝒖𝒔𝒆</span>
            </h1>
            <p className="text-foreground/80 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
              Authentic Italian flavors with 100% real cheese, fresh ingredients, and recipes perfected over generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/menu"
                className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 glow-btn inline-flex items-center justify-center"
              >
                Order Now
              </Link>
              <Link
                to="/menu"
                className="bg-foreground/10 text-foreground border-2 border-foreground/30 px-10 py-4 rounded-full font-bold text-lg hover:bg-foreground/20 transition-all duration-300 inline-flex items-center justify-center"
              >
                View Menu
              </Link>
            </div>
          </div>

          {/* Right Side - Product Collage */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 max-w-lg animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="col-span-2 rounded-3xl overflow-hidden shadow-2xl card-hover">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80" 
                alt="Pizza" 
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl card-hover">
              <img 
                src="https://images.unsplash.com/photo-1536964549204-cce9eab227bd?w=400&q=80" 
                alt="Calzone" 
                className="w-full h-40 object-cover"
              />
            </div>
            <div className="rounded-3xl overflow-hidden shadow-2xl card-hover">
              <img 
                src="https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80" 
                alt="Gyro" 
                className="w-full h-40 object-cover"
              />
            </div>
          </div>
        </div>

        {/* 100% Real Cheese Strip */}
        <div className="w-full bg-black/80 py-4 mt-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
          <p className="text-center font-display text-3xl md:text-4xl text-primary tracking-wider">
            100% Real Cheese
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
