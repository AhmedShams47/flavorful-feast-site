import { useState } from "react";
import { menuData } from "@/data/menuData";
import { cn } from "@/lib/utils";
import ProductCard from "./ProductCard";
import ToppingsSection from "./ToppingsSection";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("pizza");

  const activeMenu = menuData.find((cat) => cat.id === activeCategory);

  return (
    <section id="menu" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="font-script text-primary text-3xl mb-2">Delicious Food</p>
          <h2 className="font-display text-5xl md:text-6xl text-primary mb-4 tracking-wider">
            Our Menu
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
                "px-5 md:px-8 py-2.5 md:py-3 rounded-full font-bold transition-all text-sm md:text-base",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground glow-primary scale-105"
                  : "bg-card text-foreground/80 hover:text-foreground border border-border/50 hover:border-primary/50"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        {activeMenu && (
          <div className="animate-fade-in">
            {/* Special Toppings Section for Pizza */}
            {activeCategory === "pizza" && <ToppingsSection />}

            {/* Category Description */}
            {activeMenu.description && (
              <p className="text-center text-primary/90 font-medium mb-8 text-base md:text-lg bg-card/50 py-4 px-6 rounded-2xl max-w-2xl mx-auto border border-border/30">
                {activeMenu.description}
              </p>
            )}

            {/* Menu Items Grid */}
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
      </div>
    </section>
  );
};

export default MenuSection;
