import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import OrderModal from "./OrderModal";

// Food images for different items
const foodImages: Record<string, string> = {
  default: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  cheese: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&q=80",
  pepperoni: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&q=80",
  veggie: "https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=400&q=80",
  meat: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&q=80",
  hawaiian: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80",
  calzone: "https://images.unsplash.com/photo-1536964549204-cce9eab227bd?w=400&q=80",
  gyro: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400&q=80",
  sandwich: "https://images.unsplash.com/photo-1553909489-cd47e0907980?w=400&q=80",
  burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80",
  pasta: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&q=80",
  lasagna: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&q=80",
  alfredo: "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?w=400&q=80",
  salad: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80",
  wings: "https://images.unsplash.com/photo-1608039755401-742074f0548d?w=400&q=80",
  fries: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&q=80",
  drink: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?w=400&q=80",
  dessert: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80",
  cheesecake: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=400&q=80",
  chocolate: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80",
};

const getItemImage = (name: string, category: string): string => {
  const nameLower = name.toLowerCase();
  
  if (nameLower.includes("cheese") && !nameLower.includes("burger") && category === "pizza") return foodImages.cheese;
  if (nameLower.includes("pepperoni")) return foodImages.pepperoni;
  if (nameLower.includes("veggie") || nameLower.includes("vegetable")) return foodImages.veggie;
  if (nameLower.includes("meat") || nameLower.includes("bacon")) return foodImages.meat;
  if (nameLower.includes("hawaiian")) return foodImages.hawaiian;
  if (nameLower.includes("gyro")) return foodImages.gyro;
  if (nameLower.includes("burger")) return foodImages.burger;
  if (nameLower.includes("lasagna")) return foodImages.lasagna;
  if (nameLower.includes("alfredo") || nameLower.includes("carbonara")) return foodImages.alfredo;
  if (nameLower.includes("cheesecake")) return foodImages.cheesecake;
  if (nameLower.includes("chocolate")) return foodImages.chocolate;
  if (category === "calzone") return foodImages.calzone;
  if (category === "sandwiches") return foodImages.sandwich;
  if (category === "pasta") return foodImages.pasta;
  if (nameLower.includes("salad")) return foodImages.salad;
  if (nameLower.includes("wing")) return foodImages.wings;
  if (nameLower.includes("fries") || nameLower.includes("tots")) return foodImages.fries;
  if (category === "drinks") return foodImages.drink;
  if (category === "desserts") return foodImages.dessert;
  
  return foodImages.default;
};

interface ProductCardProps {
  item: MenuItem;
  category: string;
  index: number;
}

const ProductCard = ({ item, category, index }: ProductCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState(item.prices[0]);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const imageUrl = getItemImage(item.name, category);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
      setIsModalOpen(true);
    }, 200);
  };

  return (
    <>
      <div
        className="bg-card rounded-2xl overflow-hidden border border-border/50 card-hover group animate-fade-in"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        {/* Image */}
        <div className="relative h-44 overflow-hidden">
          <img
            src={imageUrl}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
          
          {/* Price Badge */}
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-4 py-1.5 rounded-full font-bold text-lg shadow-lg">
            ${selectedSize.price.toFixed(2)}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="text-xl font-display text-primary mb-2 tracking-wide line-clamp-1">
            {item.name}
          </h3>
          
          {item.description && (
            <p className="text-muted-foreground text-sm mb-4 line-clamp-2 leading-relaxed">
              {item.description}
            </p>
          )}

          {/* Size Selector */}
          {item.prices.length > 1 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {item.prices.map((price, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSize(price)}
                  className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                    selectedSize === price
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary/70 text-foreground/80 hover:bg-secondary border border-border/50"
                  }`}
                >
                  {price.size || "Regular"}
                </button>
              ))}
            </div>
          )}

          {/* Order Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 ${
              isAddingToCart ? "scale-95" : ""
            }`}
          >
            <ShoppingCart className="w-5 h-5" />
            Add to Cart
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
