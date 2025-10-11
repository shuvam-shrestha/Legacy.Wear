import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-cultural-fashion.jpg";

const Hero = () => {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Cultural fashion collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Authentic Cultural Fashion from Around the World
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground">
            Discover genuine traditional apparel from master artisans across the globe. 
            From Japanese Kimonos to Moroccan Kaftans, explore heritage fashion with modern convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" variant="hero" className="text-base">
              <Sparkles className="mr-2 h-5 w-5" />
              Get AI Style Recommendations
            </Button>
            <Button size="lg" variant="outline" className="text-base">
              Explore Collections
            </Button>
          </div>
          <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Fair Trade Certified
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Artisan Verified
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full" />
              Eco-Friendly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
