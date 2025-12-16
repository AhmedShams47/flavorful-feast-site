import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
import ToppingsSection from "@/components/ToppingsSection";
import SignatureItems from "@/components/SignatureItems";

const MenuPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-950 via-red-900 to-red-950">
      <Navbar />
      <div className="pt-24">
        <ToppingsSection />
        <SignatureItems />
        <MenuSection />
      </div>
      <Footer />
    </div>
  );
};

export default MenuPage;
