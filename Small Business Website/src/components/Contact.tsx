import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useState } from "react";
import { toast } from "sonner@2.0.3";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-[rgba(var(--primary-rgb),0.1)] to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="tracking-widest text-[var(--primary-color)] mb-4 text-3xl md:text-4xl">
            GET IN TOUCH
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Ready to take your business to the next level? Contact us today for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
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

        <div className="mt-16 text-center text-gray-500 border-t border-[rgba(var(--primary-rgb),0.2)] pt-8">
          <p>© 2025 Cyber-Oni. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
}