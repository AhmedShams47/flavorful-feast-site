import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureItems from "@/components/SignatureItems";
import About from "@/components/About";
import Contact from "@/components/Contact";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <FloatingElements />
      <Navbar />
      <Hero />
      <SignatureItems />
      <About />
      <Contact />
    </div>
  );
};

export default Index;
