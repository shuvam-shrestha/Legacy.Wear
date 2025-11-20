import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Globe } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import QRCode from "react-qr-code";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const websiteUrl = window.location.origin;

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-4">
                Get in Touch
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Have questions about our cultural fashion? We'd love to hear from you.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h2 className="font-serif text-2xl font-bold mb-6">Send us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Input
                        name="subject"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[150px]"
                      />
                    </div>
                    <Button type="submit" variant="hero" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Contact Info & QR Code */}
              <div className="space-y-6">
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h2 className="font-serif text-2xl font-bold mb-6">Contact Information</h2>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Mail className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold">Email</p>
                          <p className="text-muted-foreground">contact@legacywear.com</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Phone className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold">Phone</p>
                          <p className="text-muted-foreground">+1 (555) 123-4567</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <MapPin className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold">Address</p>
                          <p className="text-muted-foreground">
                            123 Cultural Street<br />
                            Fashion District, NY 10001
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Globe className="h-5 w-5 text-accent" />
                        </div>
                        <div>
                          <p className="font-semibold">Website</p>
                          <p className="text-muted-foreground">www.legacywear.com</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* QR Code Card */}
                <Card className="shadow-card">
                  <CardContent className="p-8">
                    <h2 className="font-serif text-2xl font-bold mb-4 text-center">
                      Digital Visiting Card
                    </h2>
                    <p className="text-sm text-muted-foreground text-center mb-6">
                      Scan to visit our website
                    </p>
                    <div className="flex justify-center bg-white p-6 rounded-lg">
                      <QRCode
                        value={websiteUrl}
                        size={200}
                        level="H"
                        className="shadow-md"
                      />
                    </div>
                    <p className="text-xs text-center text-muted-foreground mt-4">
                      Share this QR code to connect with Legacy Wear
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;