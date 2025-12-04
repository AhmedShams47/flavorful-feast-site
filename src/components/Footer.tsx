import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Pizza House" className="h-16 w-auto" />
          </div>

          <div className="text-center md:text-right">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Pizza House. All rights reserved.
            </p>
            <p className="text-muted-foreground text-sm mt-1">
              Authentic Italian Pizza Made Fresh Daily
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
