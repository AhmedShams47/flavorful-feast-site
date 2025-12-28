import { useState } from "react";
import { X, Mail, MessageCircle, Phone } from "lucide-react";
import { MenuItem } from "@/data/menuData";
import { toast } from "@/hooks/use-toast";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: MenuItem;
  selectedSize: { size: string; price: number };
}

const OrderModal = ({ isOpen, onClose, item, selectedSize }: OrderModalProps) => {
  const email = "pizzahouse528@gmail.com";
  const whatsappNumber = "14059437727";
  const phoneNumber = "+14059437727";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    quantity: 1,
    notes: "",
  });

  if (!isOpen) return null;

  const totalPrice = (selectedSize.price * formData.quantity).toFixed(2);

  const orderDetails = `
Order Details:
- Item: ${item.name}
- Size: ${selectedSize.size || "Regular"}
- Quantity: ${formData.quantity}
- Total: $${totalPrice}

Customer Info:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Address: ${formData.address}
${formData.notes ? `- Special Instructions: ${formData.notes}` : ""}
  `.trim();

  const handleEmailOrder = () => {
    if (!formData.name || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and phone number",
        variant: "destructive",
      });
      return;
    }

    const subject = encodeURIComponent(`Pizza Order - ${item.name}`);
    const body = encodeURIComponent(orderDetails);
    window.open(`mailto:${email}?subject=${subject}&body=${body}`, "_blank");
    
    toast({
      title: "Opening Email",
      description: "Your email app will open with the order details. For faster service, message us on WhatsApp!",
    });
  };

  const handleWhatsAppOrder = () => {
    if (!formData.name || !formData.phone) {
      toast({
        title: "Missing Information",
        description: "Please fill in your name and phone number",
        variant: "destructive",
      });
      return;
    }

    const message = encodeURIComponent(`🍕 *New Order from Pizza House*\n\n${orderDetails}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");
    
    toast({
      title: "Opening WhatsApp",
      description: "WhatsApp will open with your order",
    });
  };

  const handleCallOrder = () => {
    window.open(`tel:${phoneNumber}`, "_blank");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-card border border-border rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-fade-in">
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 flex items-center justify-between">
          <h2 className="text-xl font-display font-bold text-foreground">
            Order {item.name}
          </h2>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 space-y-4">
          {/* Order Summary */}
          <div className="bg-muted rounded-xl p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-muted-foreground">Item:</span>
              <span className="font-semibold text-foreground">{item.name}</span>
            </div>
            {selectedSize.size && (
              <div className="flex justify-between items-center mb-2">
                <span className="text-muted-foreground">Size:</span>
                <span className="text-foreground">{selectedSize.size}</span>
              </div>
            )}
            <div className="flex justify-between items-center mb-2">
              <span className="text-muted-foreground">Price:</span>
              <span className="text-primary font-bold">${selectedSize.price.toFixed(2)}</span>
            </div>
          </div>

          {/* Form */}
          <div className="space-y-3">
            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Your Name *</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Phone Number *</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your phone"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Delivery Address</label>
              <input
                type="text"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors"
                placeholder="Enter your address"
              />
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Quantity</label>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setFormData({ ...formData, quantity: Math.max(1, formData.quantity - 1) })}
                  className="w-10 h-10 rounded-lg bg-muted border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  -
                </button>
                <span className="text-xl font-bold text-foreground w-12 text-center">
                  {formData.quantity}
                </span>
                <button
                  onClick={() => setFormData({ ...formData, quantity: formData.quantity + 1 })}
                  className="w-10 h-10 rounded-lg bg-muted border border-border text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  +
                </button>
                <span className="ml-auto text-xl font-bold text-primary">
                  ${totalPrice}
                </span>
              </div>
            </div>

            <div>
              <label className="text-sm text-muted-foreground mb-1 block">Special Instructions</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full bg-muted border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                rows={2}
                placeholder="Any special requests?"
              />
            </div>
          </div>

          {/* Order Buttons */}
          <div className="space-y-2 pt-2">
            <button
              onClick={handleWhatsAppOrder}
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              Order via WhatsApp
            </button>

            <button
              onClick={handleEmailOrder}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
            >
              <Mail className="w-5 h-5" />
              Order via Email
            </button>

            <button
              onClick={handleCallOrder}
              className="w-full bg-muted hover:bg-muted/80 text-foreground py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all border border-border"
            >
              <Phone className="w-5 h-5" />
              Call to Order
            </button>

            <p className="text-center text-sm text-muted-foreground pt-2">
              Prefer to call? <a href={`tel:${phoneNumber}`} className="text-primary hover:underline font-medium">+1 405 943 7727</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderModal;
