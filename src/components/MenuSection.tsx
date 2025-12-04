import { useState } from "react";
import { menuData, MenuCategory } from "@/data/menuData";
import { cn } from "@/lib/utils";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("pizza");

  const activeMenu = menuData.find((cat) => cat.id === activeCategory);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fresh ingredients, authentic recipes, and made-to-order perfection
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground glow-primary"
                  : "bg-card text-foreground hover:bg-muted"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        {activeMenu && (
          <div className="animate-fade-in">
            {activeMenu.description && (
              <p className="text-center text-secondary font-medium mb-8 text-sm md:text-base">
                {activeMenu.description}
              </p>
            )}

            <div className="grid gap-4 md:gap-6 max-w-5xl mx-auto">
              {activeMenu.items.map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-4 md:p-6 border border-border hover:border-primary/50 transition-all group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.name}
                      </h3>
                      {item.description && (
                        <p className="text-muted-foreground text-sm mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {item.prices.map((price, priceIndex) => (
                        <div
                          key={priceIndex}
                          className="bg-muted px-3 py-1.5 rounded-lg text-center min-w-[70px]"
                        >
                          {price.size && (
                            <span className="text-xs text-muted-foreground block">
                              {price.size}
                            </span>
                          )}
                          <span className="text-primary font-bold">
                            ${price.price.toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Toppings Note */}
        {activeCategory === "pizza" && (
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground">
              <span className="text-secondary font-semibold">Each Additional Topping:</span>{" "}
              S: $1.79 | M: $1.89 | L: $1.99 | XL: $2.99
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;
