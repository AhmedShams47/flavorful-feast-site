import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import About from "@/components/About";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-red-950">
      <Navbar />
      <div className="pt-24">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
