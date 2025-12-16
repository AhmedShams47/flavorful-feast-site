import { toppings } from "@/data/menuData";

const ToppingsSection = () => {
  return (
    <div className="mb-12 animate-fade-in">
      {/* Section Header */}
      <div className="text-center mb-8">
        <h3 className="font-display text-3xl md:text-4xl text-primary mb-4 tracking-wide">
          Pizza House Toppings
        </h3>
        <p className="text-muted-foreground text-sm max-w-2xl mx-auto mb-4">
          Build your perfect pizza with our fresh, quality toppings
        </p>
        <p className="text-foreground/80 text-sm max-w-4xl mx-auto leading-relaxed">
          Pepperoni, Beef, Sausage, Canadian Bacon, Anchovies, Ham, Meatballs, Gyro Meat, Shrimp, Philly Steak, Chicken, Onions, Red Onions, Mushrooms, Bell Peppers, Black Olives, Green Olives, Jalapeños, Pineapple, Tomatoes, Banana Peppers, Spinach, Fresh Garlic, Basil, Extra Cheese, Cheddar Cheese & Double Cheese.
        </p>
      </div>

      {/* Toppings Grid */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6 max-w-4xl mx-auto">
        {toppings.map((topping) => (
          <span
            key={topping}
            className="bg-secondary/80 text-foreground px-4 py-2 rounded-full text-sm font-medium border border-border/50 hover:border-primary/50 hover:bg-secondary transition-all cursor-default"
          >
            {topping}
          </span>
        ))}
      </div>

      {/* Disclaimer */}
      <p className="text-center text-muted-foreground text-xs italic mb-8">
        Some toppings cost extra and are subject to availability; prices may change at any time.
      </p>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {/* Cheese Pizza Pricing */}
        <div className="bg-card rounded-2xl p-6 border border-border/50">
          <h4 className="font-display text-2xl text-primary mb-4 text-center">Cheese Pizza</h4>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-secondary/50 rounded-xl p-3">
              <p className="text-primary font-bold text-lg">Small</p>
              <p className="text-foreground font-semibold">$7.99</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-3">
              <p className="text-primary font-bold text-lg">Medium</p>
              <p className="text-foreground font-semibold">$9.99</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-3">
              <p className="text-primary font-bold text-lg">Large</p>
              <p className="text-foreground font-semibold">$10.99</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-3">
              <p className="text-primary font-bold text-lg">X-Large</p>
              <p className="text-foreground font-semibold">$12.99</p>
            </div>
          </div>
        </div>

        {/* Additional Toppings Pricing */}
        <div className="bg-card rounded-2xl p-6 border border-border/50">
          <h4 className="font-display text-2xl text-primary mb-4 text-center">Each Additional Topping</h4>
          <div className="grid grid-cols-4 gap-2 text-center">
            <div className="bg-secondary/50 rounded-xl p-3">
              <p className="text-primary font-bold text-lg">Small</p>
              <p className="text-foreground font-semibold">$1.79</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-3">
              <p className="text-primary font-bold text-lg">Medium</p>
              <p className="text-foreground font-semibold">$1.99</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-3">
              <p className="text-primary font-bold text-lg">Large</p>
              <p className="text-foreground font-semibold">$2.29</p>
            </div>
            <div className="bg-secondary/50 rounded-xl p-3">
              <p className="text-primary font-bold text-lg">X-Large</p>
              <p className="text-foreground font-semibold">$2.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToppingsSection;
