import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import chefLogo from "@/assets/chef-logo.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
  { name: "About Us", href: "#about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartShake, setCartShake] = useState(false);

  const handleOrderClick = () => {
    setCartShake(true);
    setTimeout(() => setCartShake(false), 500);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-background/95 to-background/80 backdrop-blur-md border-b border-border/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-700 to-red-900 p-1 shadow-lg animate-pulse-glow">
              <img
                src={chefLogo}
                alt="Pizza House Chef"
                className="w-full h-full object-contain rounded-full bg-red-800"
              />
            </div>
            <span className="font-display text-2xl md:text-3xl text-primary tracking-wider">
              Pizza House
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-foreground/90 hover:text-primary font-medium text-lg transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a
              href="tel:+14052851616"
              onClick={handleOrderClick}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-all glow-primary flex items-center gap-2"
            >
              <ShoppingCart className={`w-5 h-5 ${cartShake ? "animate-cart-shake" : ""}`} />
              ORDER NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 animate-fade-in border-t border-border/30">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-foreground/90 hover:text-primary font-medium text-lg py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+14052851616"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-center text-lg mt-2 glow-primary"
                onClick={() => setIsOpen(false)}
              >
                ORDER NOW
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
