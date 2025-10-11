import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Silk Kimono - Cherry Blossom",
    country: "Japan",
    price: 289,
    image: "https://images.unsplash.com/photo-1617627143750-d86bc393c562?w=800&q=80",
    badge: "Artisan Verified",
  },
  {
    id: 2,
    name: "Banarasi Silk Saree",
    country: "India",
    price: 245,
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&q=80",
    badge: "Fair Trade",
  },
  {
    id: 3,
    name: "Handwoven Kaftan",
    country: "Morocco",
    price: 195,
    image: "https://images.unsplash.com/photo-1583391265003-17a8a5eb1f1e?w=800&q=80",
    badge: "Eco-Friendly",
  },
  {
    id: 4,
    name: "Ankara Print Dress",
    country: "Ghana",
    price: 165,
    image: "https://images.unsplash.com/photo-1594633313593-bab3825d0caf?w=800&q=80",
    badge: "Artisan Verified",
  },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Featured Pieces
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked selections from master artisans, each piece telling its own cultural story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card
              key={product.id}
              className="group cursor-pointer overflow-hidden border-none shadow-card hover:shadow-hover transition-all duration-300"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-[3/4]">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <Button
                    size="icon"
                    variant="ghost"
                    className="absolute top-4 right-4 bg-background/80 backdrop-blur hover:bg-background"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                    {product.badge}
                  </Badge>
                </div>
                <div className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">{product.country}</p>
                  <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                  <p className="text-2xl font-bold text-primary">${product.price}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
