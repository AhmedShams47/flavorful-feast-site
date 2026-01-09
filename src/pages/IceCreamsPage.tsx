import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { iceCreamItems } from "@/data/menuData";
import storefrontBackground from "@/assets/pizza-house-storefront.png";

const IceCreamsPage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Storefront Background */}
      <div 
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${storefrontBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      </div>

      <div className="relative z-10">
        <Navbar />
        
        <div className="pt-28 pb-16">
          <div className="container mx-auto px-4">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="font-display text-5xl md:text-6xl text-pink-500 mb-4">
                LA Tropicano
              </h1>
              <p className="text-xl text-gray-600">Ice Creams & Sweet Treats</p>
              <p className="text-lg text-pink-400 mt-4 font-medium">
                Visit us in store for pricing!
              </p>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {iceCreamItems.map((item, index) => (
                <div
                  key={item.name}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg border border-pink-200 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="text-4xl mb-3">🍦</div>
                  <h3 className="font-display text-xl text-pink-600 mb-2">{item.name}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default IceCreamsPage;
