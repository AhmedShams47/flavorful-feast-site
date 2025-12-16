import chefLogo from "@/assets/chef-logo.png";
import pizzaBackground from "@/assets/pizza-background.jpg";
const productCards = [{
  id: 1,
  name: "Margherita Pizza",
  image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400"
}, {
  id: 2,
  name: "Pepperoni Pizza",
  image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400"
}, {
  id: 3,
  name: "Gyro Wrap",
  image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=400"
}, {
  id: 4,
  name: "Supreme Pizza",
  image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400"
}, {
  id: 5,
  name: "Meat Lovers",
  image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400"
}, {
  id: 6,
  name: "Classic Sub",
  image: "https://images.unsplash.com/photo-1509722747041-616f39b57569?w=400"
}];
const Hero = () => {
  return <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Dark Background with Pizza Board Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{
      backgroundImage: `url(${pizzaBackground})`
    }}>
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen pt-24">
        {/* Centered Logo Badge */}
        <div className="flex justify-center mt-8 mb-6 animate-fade-in">
          <div className="w-28 h-28 md:w-36 md:h-36 rounded-full bg-white p-2 shadow-2xl">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
              <img src={chefLogo} alt="Pizza House Chef" className="w-full h-full object-contain" />
            </div>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center mb-8 animate-fade-in" style={{
        animationDelay: "0.1s"
      }}>
          <h1 className="font-script text-4xl md:text-5xl lg:text-6xl">
            <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">Take The </span>
            <span className="text-primary drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Taste, </span>
            <span className="text-red-600 drop-shadow-[0_0_10px_rgba(220,38,38,0.5)]">Try The </span>
            <span className="text-primary drop-shadow-[0_0_10px_rgba(250,204,21,0.5)]">Best</span>
          </h1>
        </div>

        {/* First Row of Product Cards */}
        <div className="container mx-auto px-4 mb-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto" style={{ perspective: '1000px' }}>
            {productCards.slice(0, 3).map((product, index) => (
              <div 
                key={product.id} 
                style={{ animationDelay: `${0.2 + index * 0.1}s` }} 
                className="group relative animate-fade-in cursor-pointer"
              >
                <div className="relative bg-gradient-to-br from-white/25 via-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-3 shadow-2xl transition-all duration-500 ease-out group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_30px_rgba(250,204,21,0.3)] group-hover:scale-105 group-hover:-translate-y-2" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(0deg) rotateY(0deg)', transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out' }}>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="aspect-square rounded-2xl overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-display text-lg text-center drop-shadow-lg">{product.name}</p>
                    </div>
                  </div>
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/30 via-red-500/20 to-primary/30 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 100% Real Cheese Strip */}
        <div className="w-full bg-black py-3 md:py-4 my-4 animate-fade-in" style={{
        animationDelay: "0.5s"
      }}>
          <p className="text-center font-display text-2xl md:text-3xl lg:text-4xl text-primary tracking-wider">
            100% Real Cheese
          </p>
        </div>

        {/* Second Row of Product Cards */}
        <div className="container mx-auto px-4 mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto" style={{ perspective: '1000px' }}>
            {productCards.slice(3, 6).map((product, index) => (
              <div 
                key={product.id} 
                className="group relative animate-fade-in cursor-pointer" 
                style={{ animationDelay: `${0.6 + index * 0.1}s` }}
              >
                <div className="relative bg-gradient-to-br from-white/25 via-white/15 to-white/5 backdrop-blur-xl rounded-3xl p-3 shadow-2xl transition-all duration-500 ease-out group-hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5),0_0_30px_rgba(250,204,21,0.3)] group-hover:scale-105 group-hover:-translate-y-2" style={{ transformStyle: 'preserve-3d', transform: 'rotateX(0deg) rotateY(0deg)', transition: 'transform 0.5s ease-out, box-shadow 0.5s ease-out' }}>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-primary/10 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="aspect-square rounded-2xl overflow-hidden relative">
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-115 group-hover:brightness-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-white font-display text-lg text-center drop-shadow-lg">{product.name}</p>
                    </div>
                  </div>
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-primary/30 via-red-500/20 to-primary/30 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 -z-10" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Spacer */}
        <div className="flex-grow min-h-[60px]" />

        {/* Hero Footer */}
        <div className="w-full bg-gradient-to-r from-red-900 via-red-800 to-red-900 rounded-t-3xl py-6 mt-auto">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-foreground">
              {/* Phone */}
              <div className="text-center md:text-left">
                <p className="text-sm md:text-base text-white/80">
                  Phone<span className="text-white/50">........................</span>
                </p>
              </div>

              {/* Center - Brand */}
              <div className="text-center">
                <p className="font-display text-xl md:text-2xl text-primary tracking-wider">Pizza House</p>
                <p className="text-sm text-white/80">
                  Web<span className="text-white/50">........................</span>
                </p>
              </div>

              {/* Location */}
              <div className="text-center md:text-right">
                <p className="text-sm md:text-base text-white/80">
                  Location<span className="text-white/50">........................</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;