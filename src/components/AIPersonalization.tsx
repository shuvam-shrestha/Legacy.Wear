import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sparkles, Calendar, TrendingUp, Heart } from "lucide-react";

const AIPersonalization = () => {
  const navigate = useNavigate();
  
  return (
    <section className="py-20 bg-gradient-cultural">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">AI-Powered Experience</span>
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
              Your Perfect Cultural Match, Powered by AI
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our intelligent style advisor understands your preferences, occasion, and current trends 
              to recommend authentic cultural fashion that matches your unique taste.
            </p>
            <Button 
              size="lg" 
              variant="hero"
              onClick={() => navigate('/ai-quiz')}
            >
              <Sparkles className="mr-2 h-5 w-5" />
              Start Your Style Quiz
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Heart className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Mood-Based</h3>
                <p className="text-sm text-muted-foreground">
                  Tell us how you feel, we'll match your vibe
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-all duration-300 mt-8">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Calendar className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Occasion-Perfect</h3>
                <p className="text-sm text-muted-foreground">
                  From weddings to daily wear
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Trend-Aware</h3>
                <p className="text-sm text-muted-foreground">
                  Current cultural fashion trends
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-hover transition-all duration-300 mt-8">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="h-6 w-6 text-accent" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Smart Matching</h3>
                <p className="text-sm text-muted-foreground">
                  AI-curated just for you
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIPersonalization;
