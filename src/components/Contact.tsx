import { MapPin, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Visit <span className="text-primary">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Stop by or give us a call to place your order
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-8 rounded-2xl bg-card border border-border">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <MapPin className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
              Location
            </h3>
            <p className="text-muted-foreground">
              123 Pizza Street<br />
              Your City, ST 12345
            </p>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card border border-border">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Phone className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
              Phone
            </h3>
            <a
              href="tel:+1234567890"
              className="text-primary hover:text-primary/80 transition-colors text-lg font-semibold"
            >
              (123) 456-7890
            </a>
          </div>

          <div className="text-center p-8 rounded-2xl bg-card border border-border">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
              <Clock className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-xl font-display font-semibold mb-2 text-foreground">
              Hours
            </h3>
            <p className="text-muted-foreground">
              Mon - Thu: 11am - 10pm<br />
              Fri - Sat: 11am - 11pm<br />
              Sun: 12pm - 9pm
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:+1234567890"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary/90 transition-all hover:scale-105 glow-primary"
          >
            <Phone className="w-5 h-5" />
            Call to Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
