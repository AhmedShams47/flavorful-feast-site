import pizzaHouseLogo from "@/assets/pizza-house-logo.png";
import { Phone, MapPin, Globe, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  const phoneNumber = "14059437727";
  const whatsappLink = `https://wa.me/${phoneNumber}`;
  const email = "pizzahouse528@gmail.com";

  return (
    <footer className="bg-card/80 border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Contact Block */}
          <div className="flex flex-col gap-3">
            <h4 className="font-display text-lg text-primary tracking-wide mb-1">Contact Us</h4>
            <a 
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              <Mail className="w-4 h-4 text-primary" />
              {email}
            </a>
            <a 
              href="tel:+14059437727"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              <Phone className="w-4 h-4 text-primary" />
              +1 405 943 7727
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              <MessageCircle className="w-4 h-4 text-primary" />
              Chat on WhatsApp
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
          <div className="flex flex-col gap-2">
            <h4 className="font-display text-lg text-primary tracking-wide mb-1">Locations</h4>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground/80 font-medium">Oklahoma City, OK</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-foreground/80 font-medium">Edmond, OK</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
