import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Recycle, Heart, TreePine, Droplet, Sun } from "lucide-react";
import { allProducts } from "@/data/products";

const sustainabilitySteps = [
  {
    icon: TreePine,
    title: "Source Sustainable Materials",
    description: "Partner with eco-certified suppliers for organic cotton, hemp, and bamboo fibers. Prioritize natural dyes from plant-based sources.",
  },
  {
    icon: Droplet,
    title: "Water Conservation",
    description: "Implement water-efficient dyeing processes and support artisans using traditional low-water techniques.",
  },
  {
    icon: Recycle,
    title: "Circular Fashion Model",
    description: "Launch clothing recycling programs and upcycling initiatives to give new life to old garments.",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Transition production facilities to solar and wind power, reducing carbon footprint by 70%.",
  },
  {
    icon: Heart,
    title: "Fair Artisan Partnerships",
    description: "Ensure fair wages and safe working conditions while preserving traditional craftsmanship.",
  },
  {
    icon: Leaf,
    title: "Biodegradable Packaging",
    description: "Use 100% compostable packaging materials and eliminate single-use plastics from supply chain.",
  },
];

const SustainabilityPage = () => {
  const ecoFriendlyProducts = allProducts.filter(
    (product) => product.badge === "Eco-Friendly"
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto mb-8">
              <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">
                Our Commitment to Sustainability
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Fashion that honors both heritage and our planet. Every piece we create 
                tells a story of cultural preservation and environmental responsibility.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Leaf className="h-4 w-4 mr-2" />
                  100% Eco-Certified
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Recycle className="h-4 w-4 mr-2" />
                  Carbon Neutral Shipping
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2">
                  <Heart className="h-4 w-4 mr-2" />
                  Fair Trade Verified
                </Badge>
              </div>
            </div>
            
            {/* YouTube Video */}
            <div className="max-w-5xl mx-auto">
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-card">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&loop=1&playlist=dQw4w9WgXcQ&controls=0&modestbranding=1"
                  title="Sustainability Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* Eco-Friendly Products */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Our Eco-Friendly Collection
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These garments are crafted using sustainable materials and traditional 
                techniques that minimize environmental impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {ecoFriendlyProducts.map((product) => (
                <Card key={product.id} className="overflow-hidden shadow-card hover:shadow-hover transition-all">
                  <CardContent className="p-0">
                    <div className="relative aspect-square">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                      <Badge className="absolute top-4 right-4 bg-green-600 text-white">
                        <Leaf className="h-3 w-3 mr-1" />
                        {product.badge}
                      </Badge>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-1">{product.country}</p>
                      <h3 className="font-serif text-xl font-bold mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                      <p className="text-2xl font-bold text-accent">${product.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainability Steps */}
        <section className="py-16 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                Building a Greener Future
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our roadmap to achieving complete sustainability across our entire supply chain.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {sustainabilitySteps.map((step, index) => (
                <Card key={index} className="shadow-card hover:shadow-hover transition-all">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <step.icon className="h-7 w-7 text-accent" />
                    </div>
                    <h3 className="font-serif text-xl font-bold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Impact Statistics */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="shadow-card bg-gradient-hero text-white">
              <CardContent className="p-12">
                <h2 className="font-serif text-4xl font-bold text-center mb-12">
                  Our Environmental Impact
                </h2>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                  <div>
                    <p className="text-5xl font-bold mb-2">70%</p>
                    <p className="text-white/90">Less Water Usage</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold mb-2">100%</p>
                    <p className="text-white/90">Renewable Energy</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold mb-2">5,000+</p>
                    <p className="text-white/90">Trees Planted</p>
                  </div>
                  <div>
                    <p className="text-5xl font-bold mb-2">0</p>
                    <p className="text-white/90">Plastic Packaging</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default SustainabilityPage;