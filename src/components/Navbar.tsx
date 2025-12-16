import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "About Us", href: "/about" },
  { name: "Home", href: "/" },
  { name: "Menu", href: "/menu" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#961818] to-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Navigation - Centered Links */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-16">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={`relative px-6 py-2 text-white font-medium text-lg transition-all duration-300 rounded-full border border-white/30 hover:border-white/60 hover:bg-white/10 ${
                  location.pathname === link.href ? "border-white/60 bg-white/10" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Order Now Button - Right */}
          <Link
            to="/menu"
            className="hidden md:flex bg-white text-red-900 px-8 py-2.5 rounded-full font-bold text-sm hover:scale-105 hover:shadow-lg hover:shadow-white/30 transition-all"
          >
            Order Now
          </Link>

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
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-white font-medium text-lg py-3 px-6 rounded-full border border-white/30 text-center transition-all ${
                    location.pathname === link.href ? "border-white/60 bg-white/10" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/menu"
                className="bg-white text-red-900 px-6 py-3 rounded-full font-bold text-center text-lg mt-2"
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
