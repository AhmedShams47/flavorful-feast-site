import { useState } from "react";
import { menuData } from "@/data/menuData";
import { cn } from "@/lib/utils";
import ProductCard from "./ProductCard";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("pizza");

  const activeMenu = menuData.find((cat) => cat.id === activeCategory);

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-script text-primary text-2xl mb-2">Delicious Food</p>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Our <span className="text-primary">Menu</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Fresh ingredients, authentic recipes, and made-to-order perfection
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12">
          {menuData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-4 md:px-6 py-2 md:py-3 rounded-full font-semibold transition-all text-sm md:text-base",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground glow-primary"
                  : "bg-card text-muted-foreground hover:text-foreground border border-border"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        {activeMenu && (
          <div>
            {activeMenu.description && (
              <p className="text-center text-primary/80 font-medium mb-8 text-sm md:text-base">
                {activeMenu.description}
              </p>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {activeMenu.items.map((item, index) => (
                <ProductCard
                  key={index}
                  item={item}
                  category={activeMenu.id}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}

        {/* Toppings Note */}
        {activeCategory === "pizza" && (
          <div className="mt-12 text-center bg-card rounded-2xl p-6 border border-border max-w-2xl mx-auto">
            <h3 className="font-display text-lg font-semibold text-foreground mb-2">
              Additional Toppings
            </h3>
            <p className="text-muted-foreground text-sm">
              <span className="text-primary font-semibold">S:</span> $1.79 |{" "}
              <span className="text-primary font-semibold">M:</span> $1.89 |{" "}
              <span className="text-primary font-semibold">L:</span> $1.99 |{" "}
              <span className="text-primary font-semibold">XL:</span> $2.99
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MenuSection;