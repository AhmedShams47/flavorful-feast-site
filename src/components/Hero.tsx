import pizzaHero from "@/assets/pizza-hero.jpg";

const featuredDishes = [
  { name: "Margherita", image: pizzaHero },
  { name: "Pepperoni", image: pizzaHero },
  { name: "Supreme", image: pizzaHero },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex flex-col"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={pizzaHero}
          alt="Delicious Pizza"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 pb-48 px-4">
        <p className="font-script text-primary text-2xl md:text-3xl mb-4 animate-fade-in">
          Authentic Italian Pizza
        </p>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-display italic text-foreground text-center max-w-3xl mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          From Our Kitchen To Your Heart, Every Bite Is A Blessing.
        </h1>
        
        <a
          href="#menu"
          className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 transition-transform glow-primary animate-fade-in"
          style={{ animationDelay: "0.2s" }}
        >
          View Full Menu
        </a>
      </div>

      {/* Featured Dishes */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 w-full max-w-2xl px-4">
        <div className="flex justify-center gap-4 md:gap-6">
          {featuredDishes.map((dish, index) => (
            <div
              key={dish.name}
              className="w-28 h-28 md:w-36 md:h-36 rounded-2xl overflow-hidden border-2 border-border/50 bg-card/80 backdrop-blur-sm shadow-xl hover:scale-105 transition-transform cursor-pointer animate-fade-in"
              style={{ animationDelay: `${0.3 + index * 0.1}s` }}
            >
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;