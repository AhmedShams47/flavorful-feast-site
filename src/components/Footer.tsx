import chefLogo from "@/assets/chef-logo.png";

const Footer = () => {
  return (
    <footer className="bg-card/80 border-t border-border/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo and Brand */}
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-700 to-red-900 p-1 shadow-lg">
              <img 
                src={chefLogo} 
                alt="Pizza House" 
                className="w-full h-full object-contain rounded-full bg-red-800" 
              />
            </div>
            <div>
              <h3 className="font-display text-2xl text-primary tracking-wider">Pizza House</h3>
              <p className="text-muted-foreground text-sm">Take the Taste, Try the Best</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-8 text-center">
            <a href="#home" className="text-foreground/80 hover:text-primary transition-colors font-medium">Home</a>
            <a href="#menu" className="text-foreground/80 hover:text-primary transition-colors font-medium">Menu</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors font-medium">About</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors font-medium">Contact</a>
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Pizza House. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              www.PizzaHouseUSA.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
