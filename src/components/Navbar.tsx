import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "ABOUT US", href: "#about" },
  { name: "HOME", href: "#home", active: true },
  { name: "MENU", href: "#menu" },
  { name: "CONTACT US", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl">
      <div className="bg-muted/80 backdrop-blur-md rounded-full px-2 py-2">
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center gap-1 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all ${
                  link.active
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:+1234567890"
              className="ml-2 border border-primary text-primary px-6 py-2 rounded-full text-sm font-semibold hover:bg-primary hover:text-primary-foreground transition-all"
            >
              ORDER NOW
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-between w-full px-4">
            <span className="text-foreground font-display text-lg">Pizza House</span>
            <button
              className="text-foreground p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 px-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-all text-center ${
                    link.active
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:+1234567890"
                className="mt-2 border border-primary text-primary px-4 py-3 rounded-lg text-sm font-semibold text-center hover:bg-primary hover:text-primary-foreground transition-all"
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