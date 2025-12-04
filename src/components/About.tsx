import { Clock, Award, Heart, Truck } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Fast Delivery",
    description: "Hot and fresh to your door in 30 minutes or less",
  },
  {
    icon: Award,
    title: "Quality Ingredients",
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
    <section id="about" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Why Choose <span className="text-primary">Pizza House</span>?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Family-owned since day one, we bring authentic Italian flavors 
            to your table with every order.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all group"
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-display font-semibold mb-3 text-foreground">
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
