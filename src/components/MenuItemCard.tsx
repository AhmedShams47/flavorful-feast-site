import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import OrderModal from "./OrderModal";

interface MenuItemCardProps {
  item: MenuItem;
  index: number;
  categoryId: string;
}

const MenuItemCard = ({ item, index, categoryId }: MenuItemCardProps) => {
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleAddToCart = () => {
    setIsAnimating(true);
    setSelectedItem(item);
    setTimeout(() => setIsAnimating(false), 200);
  };

  const hasMultipleSizes = item.prices.length > 1;

  return (
    <>
      <div
        className="bg-card rounded-3xl p-6 border border-border/30 card-hover animate-fade-in"
        style={{ animationDelay: `${index * 50}ms` }}
      >
        {/* Item Name */}
        <h3 className="font-display text-xl text-primary mb-2">{item.name}</h3>
        
        {/* Description */}
        {item.description && (
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
            {item.description}
          </p>
        )}

        {/* Subtitle (for items like Chilaquiles) */}
        {item.subtitle && (
          <p className="text-accent text-sm font-medium mb-3 italic">
            {item.subtitle}
          </p>
        )}

        {/* Prices */}
        <div className="mb-4">
          {hasMultipleSizes ? (
            <div className="flex flex-wrap gap-2">
              {item.prices.map((price) => (
                <div
                  key={price.size}
                  className="bg-secondary/50 px-3 py-1.5 rounded-full text-sm"
                >
                  <span className="text-muted-foreground">{price.size}</span>
                  <span className="text-primary font-bold ml-1">
                    ${price.price.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <span className="text-2xl font-display text-primary">
              ${item.prices[0]?.price.toFixed(2)}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button
          onClick={handleAddToCart}
          className={`w-full bg-primary text-primary-foreground py-3 rounded-2xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 ${
            isAnimating ? "animate-btn-pop" : ""
          }`}
        >
          <ShoppingCart className="w-5 h-5" />
          Add to Cart
        </button>
      </div>

      {selectedItem && (
        <OrderModal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          item={selectedItem}
          selectedSize={selectedItem.prices[0]}
        />
      )}
    </>
  );
};

export default MenuItemCard;
