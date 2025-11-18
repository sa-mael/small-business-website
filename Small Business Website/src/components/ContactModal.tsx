import { Mail, Phone, MapPin, X } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-black/60 backdrop-blur-xl border border-[rgba(var(--primary-rgb),0.3)] rounded-2xl shadow-2xl">
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
              GET IN TOUCH
            </h2>
            <p className="text-gray-400">
              Ready to take your business to the next level? Contact us today.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white">Send us a message</CardTitle>
                  <CardDescription className="text-gray-400">
                    Fill out the form below and we'll get back to you within 24 hours
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="bg-black/50 border-[rgba(var(--primary-rgb),0.3)] text-white placeholder:text-gray-500"
                      />
                    </div>
                    <Button 
                      type="submit"
                      className="w-full bg-[var(--primary-color)] hover:bg-[var(--primary-color)]/80 text-white"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(var(--primary-rgb),0.2)] flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-[var(--primary-color)]" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">Email</h3>
                      <p className="text-gray-400">contact@cyber-oni.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(var(--primary-rgb),0.2)] flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-[var(--primary-color)]" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">Phone</h3>
                      <p className="text-gray-400">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-[rgba(var(--primary-rgb),0.3)] backdrop-blur-sm">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[rgba(var(--primary-rgb),0.2)] flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-[var(--primary-color)]" />
                    </div>
                    <div>
                      <h3 className="text-white mb-1">Location</h3>
                      <p className="text-gray-400">San Francisco, CA</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
