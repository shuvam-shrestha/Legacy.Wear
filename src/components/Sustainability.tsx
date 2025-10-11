import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Award, Package, Users } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Fair Trade Certified",
    description: "Every purchase supports artisan communities with fair wages and ethical practices.",
  },
  {
    icon: Users,
    title: "Artisan Verified",
    description: "Direct partnerships with master craftspeople preserving traditional techniques.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Materials",
    description: "Sustainable fabrics and natural dyes that honor both culture and planet.",
  },
  {
    icon: Package,
    title: "Green Logistics",
    description: "Carbon-neutral shipping with recyclable, biodegradable packaging.",
  },
];

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Authentic. Sustainable. Responsible.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We're committed to preserving cultural heritage while protecting our planet 
            and supporting artisan communities worldwide.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-none shadow-card hover:shadow-hover transition-all duration-300"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-card rounded-2xl p-8 md:p-12 shadow-card">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">2,000+</p>
              <p className="text-muted-foreground">Artisans Supported</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">50+</p>
              <p className="text-muted-foreground">Countries Represented</p>
            </div>
            <div>
              <p className="text-4xl md:text-5xl font-bold text-accent mb-2">100%</p>
              <p className="text-muted-foreground">Authenticity Guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
