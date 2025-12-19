const toppingImages = [
  { emoji: "🍕", delay: 0, left: "5%", top: "20%" },
  { emoji: "🍅", delay: 1, left: "15%", top: "60%" },
  { emoji: "🧀", delay: 2, left: "85%", top: "25%" },
  { emoji: "🌿", delay: 0.5, left: "90%", top: "70%" },
  { emoji: "🫑", delay: 1.5, left: "10%", top: "80%" },
  { emoji: "🧄", delay: 2.5, left: "80%", top: "50%" },
  { emoji: "🍄", delay: 0.8, left: "25%", top: "30%" },
  { emoji: "🥓", delay: 1.8, left: "75%", top: "85%" },
];

const FloatingToppings = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {toppingImages.map((topping, index) => (
        <div
          key={index}
          className="absolute text-4xl md:text-5xl opacity-20 animate-float-slow"
          style={{
            left: topping.left,
            top: topping.top,
            animationDelay: `${topping.delay}s`,
          }}
        >
          {topping.emoji}
        </div>
      ))}
      
      {/* Glowing particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full bg-primary/40 animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingToppings;
