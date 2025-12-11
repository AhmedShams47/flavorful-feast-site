import { Clock, Award, Heart, Truck } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Hot and fresh to your door in 30 minutes or less",
  },
  {
    icon: Award,
    title: "100% Real Cheese",
    description: "Only the finest, freshest ingredients in every dish",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Every pizza crafted with passion and tradition",
  },
  {
    icon: Truck,
    title: "Free Delivery",
    description: "On orders over $25 within our delivery zone",
  },
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="font-script text-primary text-2xl mb-2">Our Story</p>
          <h2 className="font-display text-4xl md:text-5xl text-primary tracking-wider mb-4">
            Why Choose Pizza House?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Family-owned since day one, we bring authentic Italian flavors 
            to your table with every order.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-card border border-border/50 card-hover group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-xl text-primary mb-3 tracking-wide">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
