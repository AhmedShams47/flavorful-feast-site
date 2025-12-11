import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import OrderModal from "./OrderModal";
import { MenuItem } from "@/data/menuData";

const signatureItems: (MenuItem & { image: string })[] = [
  {
    name: "Pizza House Special",
    description: "Pepperoni, Sausage, Onions, Mushrooms, Green Pepper and Cheese",
    prices: [{ size: "Large", price: 15.99 }],
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=500&q=80",
  },
  {
    name: "Calzone",
    description: "Our famous calzone, rolled burrito-style, baked to toasty brown",
    prices: [{ size: "Small", price: 9.99 }],
    image: "https://images.unsplash.com/photo-1536964549204-cce9eab227bd?w=500&q=80",
  },
  {
    name: "Gyro",
    description: "Gyro Meat, Cucumber Sauce, Onions, Lettuce, Tomatoes on Pita Bread",
    prices: [{ size: "", price: 8.99 }],
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&q=80",
  },
  {
    name: "Meat Lovers",
    description: "Piled High with Pepperoni, Sausage, Beef, Canadian Bacon and Cheese",
    prices: [{ size: "Large", price: 16.99 }],
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80",
  },
];

const SignatureItems = () => {
  const [selectedItem, setSelectedItem] = useState<(MenuItem & { image: string }) | null>(null);

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-10">
          <p className="font-script text-primary text-2xl mb-2">Customer Favorites</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary tracking-wider">
            Signature Items
          </h2>
        </div>

        {/* Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {signatureItems.map((item, index) => (
            <div
              key={item.name}
              className="bg-card rounded-2xl overflow-hidden border border-border/50 card-hover group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                
                {/* Price Badge */}
                <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-4 py-1.5 rounded-full font-bold text-lg shadow-lg">
                  ${item.prices[0].price.toFixed(2)}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-display text-primary mb-2 tracking-wide">
                  {item.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {item.description}
                </p>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95"
                >
                  <ShoppingCart className="w-5 h-5" />
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedItem && (
        <OrderModal
          isOpen={!!selectedItem}
          onClose={() => setSelectedItem(null)}
          item={selectedItem}
          selectedSize={selectedItem.prices[0]}
        />
      )}
    </section>
  );
};

export default SignatureItems;
