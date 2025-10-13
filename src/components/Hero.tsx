import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative h-[75vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Content */}
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-sans text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-8 md:mb-12">
            <span className="block text-foreground">We Connect</span>
            <span className="block text-foreground">Cultures Through</span>
            <span className="inline-block relative">
              <span className="relative z-10 text-background px-4 sm:px-6 md:px-8 py-1 sm:py-1.5 md:py-2">
                Authentic
              </span>
              <span className="absolute inset-0 bg-primary rounded-full" />
            </span>
            {' '}
            <span className="text-foreground">Fashion</span>
            <span className="block text-foreground mt-2 md:mt-3">for a Better World.</span>
          </h1>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-xl">
            <Button 
              size="lg" 
              variant="default" 
              className="text-base"
              onClick={() => navigate('/ai-quiz')}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Get AI Style Recommendations
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-base"
              onClick={() => navigate('/products')}
            >
              Explore Collections
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
