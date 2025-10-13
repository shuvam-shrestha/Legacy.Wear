import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* Content */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-sans text-6xl md:text-8xl lg:text-9xl font-bold leading-tight mb-12">
            <span className="block text-foreground">We Connect</span>
            <span className="block text-foreground">Cultures Through</span>
            <span className="inline-block relative">
              <span className="relative z-10 text-background px-8 md:px-12 py-2 md:py-3">
                Authentic
              </span>
              <span className="absolute inset-0 bg-primary rounded-full" />
            </span>
            {' '}
            <span className="text-foreground">Fashion</span>
            <span className="block text-foreground mt-4">for a Better World.</span>
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
