import { MapPin, Phone, Clock, Mail, MessageCircle } from "lucide-react";

const Contact = () => {
  const email = "pizzahouse528@gmail.com";
  const whatsappLink = "https://wa.me/14059437727";
  const phoneNumber = "+14059437727";

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="font-script text-primary text-2xl mb-2">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary tracking-wider mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground text-lg mb-6">
            Reach out via email, WhatsApp, or phone to place your order
          </p>
          
          {/* Primary Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a 
              href={`mailto:${email}`}
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              <Mail className="w-5 h-5 text-primary" />
              {email}
            </a>
            <span className="hidden sm:inline text-muted-foreground">|</span>
            <a 
              href={`tel:${phoneNumber}`}
              className="flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium"
            >
              <Phone className="w-5 h-5 text-primary" />
              +1 405 943 7727
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all glow-primary"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a 
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 text-white px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all shadow-lg hover:shadow-green-500/30"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </a>
            <a 
              href={`tel:${phoneNumber}`}
              className="inline-flex items-center gap-2 bg-foreground/10 text-foreground border-2 border-foreground/30 px-8 py-4 rounded-full font-bold text-lg hover:bg-foreground/20 transition-all"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* OKC Location */}
          <div className="p-8 rounded-2xl bg-card border border-border/50 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-primary tracking-wide">
                Oklahoma City
              </h3>
            </div>
            <p className="text-foreground/80 mb-2">
              4908 NW 23rd St, OKC, OK 73127
            </p>
            <a href="tel:+14059437727" className="text-primary hover:text-primary/80 transition-colors text-xl font-bold flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5" />
              405-943-7727
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Open 11 a.m. – 2 a.m.</span>
            </div>
          </div>

          {/* Edmond Location */}
          <div className="p-8 rounded-2xl bg-card border border-border/50 card-hover">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-primary tracking-wide">
                Edmond
              </h3>
            </div>
            <p className="text-foreground/80 mb-2">
              19417 N. Portland Ave, Edmond, OK 73012
            </p>
            <a href="tel:+14052851616" className="text-primary hover:text-primary/80 transition-colors text-xl font-bold flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5" />
              405-285-1616
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Open 11 a.m. – 10 p.m.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
