import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { tacoMenuItems } from "@/data/menuData";

const TacosPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/20 to-background">
      <Navbar />
      
      <div className="pt-28 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl md:text-6xl text-primary mb-4">
              Tacos
            </h1>
            <p className="text-muted-foreground text-lg">Authentic Mexican Flavors</p>
          </div>

          {/* Menu Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {tacoMenuItems.map((item, index) => (
              <div
                key={item.name}
                className="bg-card rounded-3xl p-6 border border-border/30 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="font-display text-2xl text-primary mb-2">{item.name}</h3>
                {item.description && (
                  <p className="text-muted-foreground text-sm mb-2">{item.description}</p>
                )}
                {item.subtitle && (
                  <p className="text-accent text-sm font-medium italic mb-3">{item.subtitle}</p>
                )}
                <p className="text-3xl font-display text-primary">
                  ${item.prices[0].price.toFixed(2)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TacosPage;
