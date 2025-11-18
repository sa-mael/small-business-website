import { X, ShoppingCart, Check, Package, Zap, Printer, MapPin, CreditCard } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { useState } from "react";
import { toast } from "sonner@2.0.3";
import { useReferral } from "../contexts/ReferralContext";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface BuyProductModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const products = [
  {
    id: 1,
    name: "CYBER-ONI RGB Lamp - Digital Files",
    price: 20,
    image: "https://images.unsplash.com/photo-1656473202973-74c5b687e1b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwbGFtcCUyMFJHQiUyMGxpZ2h0aW5nfGVufDF8fHx8MTc2MzMzMzAxMXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Complete 3D printing files package",
    features: [
      "All STL files for home 3D printing",
      "Assembly instructions PDF",
      "RGB LED wiring guide",
      "Lifetime download access",
      "Free updates & new variants"
    ],
    badge: "Digital Download",
    shippingRequired: false,
  },
  {
    id: 2,
    name: "CYBER-ONI RGB Lamp - Pre-Printed",
    price: 299,
    image: "https://images.unsplash.com/photo-1631305501732-42f5fd97a9a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwzRCUyMHByaW50ZWQlMjBzY3VscHR1cmUlMjBtb2Rlcm58ZW58MXx8fHwxNjMzMzMzMDEyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Fully assembled and ready to display",
    features: [
      "Professional 3D printed & assembled",
      "RGB LED system pre-installed",
      "Premium PLA+ material",
      "32cm × 40cm × 20cm dimensions",
      "Remote control included",
      "2-year warranty"
    ],
    badge: "Most Popular",
    shippingRequired: true,
  },
  {
    id: 3,
    name: "CYBER-ONI RGB Lamp - Deluxe Edition",
    price: 449,
    image: "https://images.unsplash.com/photo-1728473577296-309fa0ac619b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBkZXNrJTIwbGFtcHxlbnwxfHx8fDE3NjMzMzMwMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Premium edition with smart features",
    features: [
      "All Pre-Printed Edition features",
      "Smart WiFi RGB control via app",
      "Voice assistant compatible",
      "Custom color programming",
      "Premium packaging & certificate",
      "Exclusive color variants"
    ],
    badge: "Premium",
    shippingRequired: true,
  },
];

const shippingRates = {
  canada: {
    cost: 25,
    time: "5-7 business days"
  },
  international: {
    cost: 75,
    time: "3-4 weeks (up to 1 month)"
  }
};

const canadianProvinces = [
  "Alberta", "British Columbia", "Manitoba", "New Brunswick", 
  "Newfoundland and Labrador", "Nova Scotia", "Ontario", 
  "Prince Edward Island", "Quebec", "Saskatchewan"
];

export function BuyProductModal({ isOpen, onClose }: BuyProductModalProps) {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null);
  const [shippingRegion, setShippingRegion] = useState<"canada" | "international">("canada");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    province: "",
    postalCode: "",
    country: "Canada",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const { cashbackPercentage } = useReferral();

  const handlePurchase = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedProduct !== null) {
      const product = products.find(p => p.id === selectedProduct);
      toast.success(`Payment processing for ${product?.name}! You'll receive confirmation via email.`);
      onClose();
    }
  };

  const calculateFinalPrice = (price: number) => {
    const discount = (price * cashbackPercentage) / 100;
    return price - discount;
  };

  const getSelectedProduct = () => products.find(p => p.id === selectedProduct);
  const selectedProductData = getSelectedProduct();
  const needsShipping = selectedProductData?.shippingRequired;
  const shippingCost = needsShipping ? shippingRates[shippingRegion].cost : 0;
  const productPrice = selectedProductData ? calculateFinalPrice(selectedProductData.price) : 0;
  const totalPrice = productPrice + shippingCost;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-black/60 backdrop-blur-xl border border-[rgba(var(--primary-rgb),0.3)] rounded-2xl shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/50 hover:bg-black/70 flex items-center justify-center transition-colors"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="tracking-widest text-[var(--primary-color)] mb-2">
              CYBER-ONI RGB LAMP
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Fully 3D-Printable Designer Light – 32cm × 40cm × 20cm
            </p>
            <p className="text-gray-500 text-sm mt-2">
              Futuristic cyber-armor aesthetic with integrated RGB lighting
            </p>
            {cashbackPercentage > 0 && (
              <div className="mt-4 inline-block px-4 py-2 bg-[rgba(var(--primary-rgb),0.2)] border border-[rgba(var(--primary-rgb),0.3)] rounded-lg">
                <p className="text-[var(--primary-color)]">
                  🎉 Your active cashback: {cashbackPercentage}% off all purchases!
                </p>
              </div>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {products.map((product) => {
              const finalPrice = calculateFinalPrice(product.price);
              const savings = product.price - finalPrice;
              
              return (
                <Card
                  key={product.id}
                  className={`bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm cursor-pointer transition-all hover:border-[rgba(var(--primary-rgb),0.6)] ${
                    selectedProduct === product.id ? 'ring-2 ring-[var(--primary-color)]' : ''
                  }`}
                  onClick={() => setSelectedProduct(product.id)}
                >
                  <CardHeader className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      {product.badge && (
                        <div className="absolute top-3 right-3 px-3 py-1 bg-[var(--primary-color)] text-white text-xs rounded-full">
                          {product.badge}
                        </div>
                      )}
                      {selectedProduct === product.id && (
                        <div className="absolute top-3 left-3 w-6 h-6 rounded-full bg-[var(--primary-color)] flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-4">
                    <CardTitle className="text-white mb-2">{product.name}</CardTitle>
                    <CardDescription className="text-gray-400 mb-4">
                      {product.description}
                    </CardDescription>
                    
                    <div className="mb-4">
                      {cashbackPercentage > 0 ? (
                        <div>
                          <p className="text-gray-500 line-through text-sm">${product.price}</p>
                          <p className="text-[var(--primary-color)]">
                            ${finalPrice.toFixed(2)}
                          </p>
                          <p className="text-green-400 text-xs">Save ${savings.toFixed(2)}</p>
                        </div>
                      ) : (
                        <p className="text-[var(--primary-color)]">${product.price}</p>
                      )}
                    </div>
                    
                    <ul className="space-y-2">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary-color)] mt-1.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {selectedProduct && (
            <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Complete Your Purchase</CardTitle>
                <CardDescription className="text-gray-400">
                  Enter your details to proceed with payment
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={handlePurchase}>
                  {/* Contact Information */}
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold">Contact Information</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input
                        placeholder="Full Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                      />
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                      />
                    </div>
                  </div>

                  {/* Shipping Information */}
                  {needsShipping && (
                    <div className="space-y-4">
                      <h4 className="text-white font-semibold flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        Shipping Address
                      </h4>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                          <Select
                            value={shippingRegion}
                            onValueChange={(value: "canada" | "international") => {
                              setShippingRegion(value);
                              setFormData({ 
                                ...formData, 
                                country: value === "canada" ? "Canada" : "",
                                province: ""
                              });
                            }}
                          >
                            <SelectTrigger className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white">
                              <SelectValue placeholder="Select region" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/95 border-[rgba(var(--primary-rgb),0.3)]">
                              <SelectItem value="canada" className="text-white">
                                Canada (${shippingRates.canada.cost} - {shippingRates.canada.time})
                              </SelectItem>
                              <SelectItem value="international" className="text-white">
                                International (${shippingRates.international.cost} - {shippingRates.international.time})
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <Input
                          placeholder="Street Address"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          required
                          className="md:col-span-2 bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                        />

                        <Input
                          placeholder="City"
                          value={formData.city}
                          onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                          required
                          className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                        />

                        {shippingRegion === "canada" ? (
                          <Select
                            value={formData.province}
                            onValueChange={(value) => setFormData({ ...formData, province: value })}
                          >
                            <SelectTrigger className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white">
                              <SelectValue placeholder="Province" />
                            </SelectTrigger>
                            <SelectContent className="bg-black/95 border-[rgba(var(--primary-rgb),0.3)]">
                              {canadianProvinces.map(province => (
                                <SelectItem key={province} value={province} className="text-white">
                                  {province}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        ) : (
                          <Input
                            placeholder="State/Province"
                            value={formData.province}
                            onChange={(e) => setFormData({ ...formData, province: e.target.value })}
                            required
                            className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                          />
                        )}

                        <Input
                          placeholder={shippingRegion === "canada" ? "Postal Code" : "ZIP/Postal Code"}
                          value={formData.postalCode}
                          onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                          required
                          className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                        />

                        {shippingRegion === "international" && (
                          <Input
                            placeholder="Country"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            required
                            className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                          />
                        )}
                      </div>
                    </div>
                  )}

                  {/* Payment Information */}
                  <div className="space-y-4">
                    <h4 className="text-white font-semibold flex items-center gap-2">
                      <CreditCard className="w-4 h-4" />
                      Payment Information
                    </h4>
                    <div className="grid gap-4">
                      <Input
                        placeholder="Card Number"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        required
                        maxLength={16}
                        className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                      />
                      <div className="grid grid-cols-2 gap-4">
                        <Input
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                          required
                          maxLength={5}
                          className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                        />
                        <Input
                          placeholder="CVV"
                          value={formData.cvv}
                          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                          required
                          maxLength={3}
                          className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Order Summary */}
                  <div className="space-y-3 p-4 bg-[rgba(var(--primary-rgb),0.1)] border border-[rgba(var(--primary-rgb),0.3)] rounded-lg">
                    <h4 className="text-white font-semibold">Order Summary</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between text-gray-400">
                        <span>Product</span>
                        <span className="text-white">${selectedProductData?.price}</span>
                      </div>
                      {cashbackPercentage > 0 && (
                        <div className="flex justify-between text-green-400">
                          <span>Cashback ({cashbackPercentage}%)</span>
                          <span>-${((selectedProductData?.price || 0) * cashbackPercentage / 100).toFixed(2)}</span>
                        </div>
                      )}
                      {needsShipping && (
                        <div className="flex justify-between text-gray-400">
                          <span>Shipping ({shippingRegion === "canada" ? "Canada" : "International"})</span>
                          <span className="text-white">${shippingCost}</span>
                        </div>
                      )}
                      <div className="border-t border-[rgba(var(--primary-rgb),0.3)] pt-2 mt-2">
                        <div className="flex justify-between text-lg">
                          <span className="text-white font-bold">Total</span>
                          <span className="text-[var(--primary-color)] font-bold">${totalPrice.toFixed(2)} CAD</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/80 text-white text-lg py-6"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Complete Purchase - ${totalPrice.toFixed(2)} CAD
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Secure payment processing. Your card will be charged immediately.
                    {needsShipping && ` Delivery: ${shippingRates[shippingRegion].time}`}
                  </p>
                </form>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}