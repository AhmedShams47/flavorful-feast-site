import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import pizzaHouseLogo from "@/assets/pizza-house-logo.png";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
  { name: "LA Tropicano", href: "/ice-creams" },
  { name: "Tacos", href: "/tacos" },
  { name: "About Us", href: "/about" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#8B1E1E] via-[#6B1515] to-[#1a0808]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg animate-pulse-glow ring-2 ring-primary/80">
              <img src={pizzaHouseLogo} alt="Pizza House" className="w-full h-full object-cover" />
            </div>
            <span className="font-display text-xl md:text-2xl text-primary hidden sm:block">Pizza House</span>
          </Link>

          {/* Desktop Navigation - Center */}
          <div className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`px-5 py-2.5 text-foreground font-semibold text-base transition-all duration-300 rounded-full hover:bg-foreground/10 ${
                  location.pathname === link.href 
                    ? "bg-foreground/10 text-primary" 
                    : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Order Now Button - Right */}
          <Link
            to="/menu"
            className="hidden lg:flex bg-primary text-primary-foreground px-8 py-3 rounded-full font-bold text-base hover:scale-105 transition-all duration-300 glow-btn"
          >
            Order Now
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-foreground p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-6 animate-fade-in border-t border-foreground/20">
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-foreground font-semibold text-lg py-3 px-6 rounded-full text-center transition-all ${
                    location.pathname === link.href 
                      ? "bg-foreground/10 text-primary" 
                      : "hover:bg-foreground/5"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/menu"
                className="bg-primary text-primary-foreground px-6 py-3 rounded-full font-bold text-center text-lg mt-2 glow-btn"
                onClick={() => setIsOpen(false)}
              >
                Order Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
