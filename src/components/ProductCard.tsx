import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import OrderModal from "./OrderModal";

// Pizza images for different items
const pizzaImages: Record<string, string> = {
  default: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  cheese: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
  pepperoni: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
  veggie: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=400&q=80",
  meat: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
  hawaiian: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80",
  calzone: "https://images.unsplash.com/photo-1536964549204-cce9eab227bd?w=400&q=80",
  sandwich: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80",
  pasta: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
  wings: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&q=80",
  fries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
  drink: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80",
  dessert: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80",
};

const getItemImage = (name: string, category: string): string => {
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes("cheese") && !nameLower.includes("burger")) return pizzaImages.cheese;
  if (nameLower.includes("pepperoni")) return pizzaImages.pepperoni;
  if (nameLower.includes("veggie") || nameLower.includes("vegetable")) return pizzaImages.veggie;
  if (nameLower.includes("meat") || nameLower.includes("bacon")) return pizzaImages.meat;
  if (nameLower.includes("hawaiian")) return pizzaImages.hawaiian;
  if (category === "calzone") return pizzaImages.calzone;
  if (category === "sandwiches") return pizzaImages.sandwich;
  if (category === "pasta") return pizzaImages.pasta;
  if (nameLower.includes("salad")) return pizzaImages.salad;
  if (nameLower.includes("wing")) return pizzaImages.wings;
  if (nameLower.includes("fries") || nameLower.includes("tots")) return pizzaImages.fries;
  if (category === "drinks") return pizzaImages.drink;
  if (category === "desserts") return pizzaImages.dessert;
  
  return pizzaImages.default;
};

interface ProductCardProps {
  item: MenuItem;
  category: string;
  index: number;
}

const ProductCard = ({ item, category, index }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(item.prices[0]);

  const imageUrl = getItemImage(item.name, category);

  return (
    <>
      <div
        className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all group animate-fade-in"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          
          {/* Price Badge */}
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full font-bold text-sm">
            ${selectedSize.price.toFixed(2)}
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="text-lg font-display font-semibold text-foreground mb-1 line-clamp-1">
            {item.name}
          </h3>
          
          {item.description && (
            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
              {item.description}
            </p>
          )}

          {/* Size Selector */}
          {item.prices.length > 1 && (
            <div className="flex flex-wrap gap-1 mb-3">
              {item.prices.map((price, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(price)}
                  className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    selectedSize === price
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {price.size || "Regular"}
                </button>
              ))}
            </div>
          )}

          {/* Order Button */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="w-full bg-primary/10 hover:bg-primary text-primary hover:text-primary-foreground py-2.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all group/btn"
          >
            <ShoppingCart className="w-4 h-4" />
            Order Now
          </button>
        </div>
      </div>

      <OrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        item={item}
        selectedSize={selectedSize}
      />
    </>
  );
};

export default ProductCard;