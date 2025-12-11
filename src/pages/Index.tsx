import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SignatureItems from "@/components/SignatureItems";
import MenuSection from "@/components/MenuSection";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <FloatingElements />
      <Navbar />
      <Hero />
      <SignatureItems />
      <MenuSection />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
