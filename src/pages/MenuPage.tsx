import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { menuData, toppings, cheesePizzaPrices, toppingPrices } from "@/data/menuData";
import MenuCategoryTabs from "@/components/MenuCategoryTabs";
import MenuItemCard from "@/components/MenuItemCard";
import PizzaToppingsSection from "@/components/PizzaToppingsSection";

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState("pizza");
  const currentCategory = menuData.find(cat => cat.id === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <Navbar />
      
      <div className="pt-28 pb-16">
        {/* Header */}
        <div className="container mx-auto px-4 mb-12">
          <div className="text-center">
            <h1 className="font-display text-5xl md:text-6xl text-primary mb-4">Our Menu</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Freshly made with 100% real cheese and the finest ingredients
            </p>
          </div>
        </div>

        {/* Category Tabs */}
        <MenuCategoryTabs 
          categories={menuData} 
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Pizza Special Section */}
        {activeCategory === "pizza" && (
          <PizzaToppingsSection 
            toppings={toppings}
            cheesePizzaPrices={cheesePizzaPrices}
            toppingPrices={toppingPrices}
          />
        )}

        {/* Category Description */}
        {currentCategory?.description && (
          <div className="container mx-auto px-4 mt-8 mb-6">
            <p className="text-center text-muted-foreground text-lg italic bg-card/50 py-4 px-6 rounded-2xl inline-block mx-auto">
              {currentCategory.description}
            </p>
          </div>
        )}

        {/* Menu Items Grid */}
        <div className="container mx-auto px-4 mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategory?.items.map((item, index) => (
              <MenuItemCard 
                key={item.name} 
                item={item} 
                index={index}
                categoryId={activeCategory}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MenuPage;
