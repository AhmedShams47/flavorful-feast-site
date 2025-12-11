const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Tomatoes */}
      <div className="absolute top-20 right-[10%] w-16 h-16 animate-float-slow" style={{ animationDelay: "0s" }}>
        <div className="w-full h-full rounded-full bg-red-500 shadow-lg relative">
          <div className="absolute inset-2 rounded-full bg-red-400"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-3 h-4 bg-green-600 rounded-t-full"></div>
        </div>
      </div>
      
      <div className="absolute top-[40%] left-[5%] w-12 h-12 animate-float-medium" style={{ animationDelay: "1s" }}>
        <div className="w-full h-full rounded-full bg-red-500 shadow-lg relative">
          <div className="absolute inset-1.5 rounded-full bg-red-400"></div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0.5 w-2 h-3 bg-green-600 rounded-t-full"></div>
        </div>
      </div>

      {/* Floating Chili Peppers */}
      <div className="absolute top-[30%] right-[8%] w-8 h-20 animate-float-fast rotate-45" style={{ animationDelay: "0.5s" }}>
        <div className="w-full h-full bg-gradient-to-b from-red-600 to-red-800 rounded-full transform -rotate-12 shadow-lg">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-4 bg-green-700 rounded-t-full"></div>
        </div>
      </div>

      <div className="absolute bottom-[30%] left-[3%] w-6 h-16 animate-float-slow rotate-[-30deg]" style={{ animationDelay: "2s" }}>
        <div className="w-full h-full bg-gradient-to-b from-red-600 to-red-800 rounded-full shadow-lg">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-0.5 w-1.5 h-3 bg-green-700 rounded-t-full"></div>
        </div>
      </div>

      {/* Floating Basil Leaves */}
      <div className="absolute top-[15%] left-[15%] w-10 h-14 animate-float-medium" style={{ animationDelay: "1.5s" }}>
        <div className="w-full h-full bg-gradient-to-br from-green-500 to-green-700 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] transform rotate-45 shadow-lg"></div>
      </div>

      <div className="absolute bottom-[20%] right-[12%] w-8 h-12 animate-float-fast" style={{ animationDelay: "3s" }}>
        <div className="w-full h-full bg-gradient-to-br from-green-500 to-green-700 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] transform -rotate-30 shadow-lg"></div>
      </div>

      <div className="absolute top-[60%] right-[20%] w-6 h-10 animate-float-slow" style={{ animationDelay: "2.5s" }}>
        <div className="w-full h-full bg-gradient-to-br from-green-500 to-green-700 rounded-[50%_50%_50%_50%/60%_60%_40%_40%] transform rotate-12 shadow-lg"></div>
      </div>

      {/* Glowing Particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full animate-particle blur-[1px]"
          style={{
            left: `${10 + (i * 7)}%`,
            top: `${15 + (i * 6)}%`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingElements;
