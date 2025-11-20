import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage1 from "@/assets/hero-cultural-fashion.jpg";
import heroImage2 from "@/assets/hero-traditional-1.jpg";
import heroImage3 from "@/assets/hero-traditional-2.jpg";
import heroImage4 from "@/assets/hero-traditional-3.jpg";

const Hero = () => {
  const navigate = useNavigate();
  const heroImages = [heroImage1, heroImage2, heroImage3, heroImage4];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 1500);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Cultural fashion collection ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl space-y-6">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-foreground leading-tight animate-fade-in">
            Authentic Cultural Fashion from Around the World
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: '100ms' }}>
            Discover genuine traditional apparel from master artisans across the globe. 
            From Japanese Kimonos to Moroccan Kaftans, explore heritage fashion with modern convenience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
            <Button 
              size="lg" 
              variant="hero" 
              className="text-base transition-all duration-300 hover:scale-105 hover:shadow-lg group"
              onClick={() => navigate('/ai-quiz')}
            >
              <Sparkles className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
              Get AI Style Recommendations
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => navigate('/products')}
            >
              Explore Collections
            </Button>
          </div>
          <div className="flex items-center gap-8 pt-4 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center gap-2 transition-all duration-300 hover:scale-110 cursor-pointer">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
              Fair Trade Certified
            </div>
            <div className="flex items-center gap-2 transition-all duration-300 hover:scale-110 cursor-pointer">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '150ms' }} />
              Artisan Verified
            </div>
            <div className="flex items-center gap-2 transition-all duration-300 hover:scale-110 cursor-pointer">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
              Eco-Friendly
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
