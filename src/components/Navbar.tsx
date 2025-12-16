import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About Us", href: "#about" },
  { name: "Home", href: "#home" },
  { name: "Menu", href: "#menu" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-red-900 via-red-800 to-red-900 rounded-b-2xl shadow-xl">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Desktop Navigation - Centered Links */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white font-medium text-lg hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Order Now Button - Right */}
          <a
            href="tel:+14052851616"
            className="hidden md:flex bg-white text-red-900 px-6 py-2 rounded-full font-bold text-sm hover:scale-105 hover:shadow-lg hover:shadow-white/30 transition-all"
          >
            Order Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2 ml-auto"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 animate-fade-in border-t border-white/20">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-white hover:text-primary font-medium text-lg py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+14052851616"
                className="bg-white text-red-900 px-6 py-3 rounded-full font-bold text-center text-lg mt-2"
                onClick={() => setIsOpen(false)}
              >
                Order Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
