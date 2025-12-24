import { MapPin, Phone, Clock } from "lucide-react";
const Contact = () => {
  return <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-script text-primary text-2xl mb-2">Get in Touch</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary tracking-wider mb-4">
            Visit Us
          </h2>
          <p className="text-muted-foreground text-lg">
            Stop by or give us a call to place your order
          </p>
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
            <a href="tel:+14052851616" className="text-primary hover:text-primary/80 transition-colors text-xl font-bold flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5" />
              405-285-1616
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
            <a href="tel:+14059437727" className="text-primary hover:text-primary/80 transition-colors text-xl font-bold flex items-center gap-2 mb-2">
              <Phone className="w-5 h-5" />
              405-943-7727
            </a>
            <div className="flex items-center gap-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Open 11 a.m. – 10 p.m.</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="tel:+14052851616" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-10 py-4 rounded-full font-bold text-xl hover:scale-105 transition-all glow-primary">
            <Phone className="w-5 h-5" />
            Call to Order Now
          </a>
        </div>
      </div>
    </section>;
};
export default Contact;