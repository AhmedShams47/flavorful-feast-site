interface PizzaToppingsSectionProps {
  toppings: string[];
  cheesePizzaPrices: { size: string; price: number }[];
  toppingPrices: { size: string; price: number }[];
}

const PizzaToppingsSection = ({ toppings, cheesePizzaPrices, toppingPrices }: PizzaToppingsSectionProps) => {
  return (
    <div className="container mx-auto px-4 mt-10">
      {/* Toppings Section */}
      <div className="bg-card/80 rounded-3xl p-8 border border-border/30 mb-8">
        <h2 className="font-display text-3xl md:text-4xl text-primary text-center mb-6">
          Pizza House Toppings
        </h2>
        
        {/* Toppings Grid */}
        <div className="flex flex-wrap justify-center gap-3 mb-6">
          {toppings.map((topping) => (
            <span key={topping} className="topping-badge">
              {topping}
            </span>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-muted-foreground text-sm italic">
          Some toppings cost extra and are subject to availability; prices may change at any time.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* Cheese Pizza Pricing */}
        <div className="bg-card rounded-3xl p-6 border border-primary/30 shadow-lg">
          <h3 className="font-display text-2xl text-primary text-center mb-4">
            Cheese Pizza
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {cheesePizzaPrices.map((price) => (
              <div key={price.size} className="text-center">
                <div className="bg-secondary/50 rounded-2xl py-3 px-2">
                  <p className="text-muted-foreground text-sm">{price.size}</p>
                  <p className="text-primary font-bold text-xl">${price.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Additional Topping Pricing */}
        <div className="bg-card rounded-3xl p-6 border border-accent/30 shadow-lg">
          <h3 className="font-display text-2xl text-accent text-center mb-4">
            Each Additional Topping
          </h3>
          <div className="grid grid-cols-4 gap-2">
            {toppingPrices.map((price) => (
              <div key={price.size} className="text-center">
                <div className="bg-secondary/50 rounded-2xl py-3 px-2">
                  <p className="text-muted-foreground text-sm">{price.size}</p>
                  <p className="text-accent font-bold text-xl">${price.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Specialty Pizzas Header */}
      <div className="text-center mb-8">
        <h2 className="font-display text-3xl text-foreground">Specialty Pizzas</h2>
        <p className="text-muted-foreground mt-2">Our signature creations with premium toppings</p>
      </div>
    </div>
  );
};

export default PizzaToppingsSection;
