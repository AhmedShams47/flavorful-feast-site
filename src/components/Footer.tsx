import pizzaHouseLogo from "@/assets/pizza-house-logo.png";
import { Phone, MapPin, Globe } from "lucide-react";

const Footer = () => {
  const phoneNumber = "4052851616";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=Hi%20Pizza%20House!%20I%20would%20like%20to%20place%20an%20order.`;

  return (
    <footer className="bg-card/80 border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Phone - WhatsApp Link */}
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              405-285-1616
            </a>
          </div>

          {/* Center - Logo and Brand */}
          <div className="flex flex-col items-center gap-3">
            <div className="w-16 h-16 rounded-full overflow-hidden ring-2 ring-primary/80 shadow-lg">
              <img src={pizzaHouseLogo} alt="Pizza House" className="w-full h-full object-cover" />
            </div>
            <h3 className="font-display text-2xl text-primary tracking-wider">Pizza House</h3>
            <div className="flex items-center gap-2">
              <Globe className="w-4 h-4 text-muted-foreground" />
              <p className="text-muted-foreground text-sm">pizzahouse.pizza</p>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span className="text-foreground/80 font-medium">Oklahoma City, OK</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
