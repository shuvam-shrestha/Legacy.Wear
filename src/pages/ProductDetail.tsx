import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { allProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Heart, ArrowLeft, Sparkles } from 'lucide-react';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();
  
  const product = allProducts.find(p => p.id === Number(id));
  
  const [selectedColor, setSelectedColor] = useState('original');
  const [selectedSkinTone, setSelectedSkinTone] = useState('medium');
  const [selectedMood, setSelectedMood] = useState('confident');
  const [visualizedImage, setVisualizedImage] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
          <Button onClick={() => navigate('/products')}>
            Back to Products
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = allProducts
    .filter(p => p.country === product.country && p.id !== product.id)
    .slice(0, 4);

  const handleVisualize = async () => {
    if (!product) return;
    
    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('visualize-outfit', {
        body: {
          productImage: product.image,
          color: selectedColor,
          skinTone: selectedSkinTone,
          mood: selectedMood
        }
      });

      if (error) throw error;
      
      if (data?.imageUrl) {
        setVisualizedImage(data.imageUrl);
        toast({
          title: "Visualization Ready!",
          description: "Your personalized outfit visualization has been generated.",
        });
      }
    } catch (error) {
      console.error('Error generating visualization:', error);
      toast({
        title: "Generation Failed",
        description: "Unable to generate visualization. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-8">
        <div className="container mx-auto px-4">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Image */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-hover">
                <img
                  src={visualizedImage || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Personalization Controls */}
              <div className="bg-card rounded-xl p-6 shadow-card space-y-6">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">AI Personalization</h3>
                </div>

                {/* Color Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Dress Color</Label>
                  <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="original" id="original" />
                      <Label htmlFor="original" className="cursor-pointer">Original</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="red" id="red" />
                      <Label htmlFor="red" className="cursor-pointer">Red</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="blue" id="blue" />
                      <Label htmlFor="blue" className="cursor-pointer">Blue</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="green" id="green" />
                      <Label htmlFor="green" className="cursor-pointer">Green</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="gold" id="gold" />
                      <Label htmlFor="gold" className="cursor-pointer">Gold</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Skin Tone Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Skin Tone</Label>
                  <RadioGroup value={selectedSkinTone} onValueChange={setSelectedSkinTone}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="fair" id="fair" />
                      <Label htmlFor="fair" className="cursor-pointer">Fair</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="medium" />
                      <Label htmlFor="medium" className="cursor-pointer">Medium</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="olive" id="olive" />
                      <Label htmlFor="olive" className="cursor-pointer">Olive</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="tan" id="tan" />
                      <Label htmlFor="tan" className="cursor-pointer">Tan</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="deep" id="deep" />
                      <Label htmlFor="deep" className="cursor-pointer">Deep</Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Mood Selection */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Mood</Label>
                  <RadioGroup value={selectedMood} onValueChange={setSelectedMood}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="confident" id="confident" />
                      <Label htmlFor="confident" className="cursor-pointer">Confident</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="elegant" id="elegant" />
                      <Label htmlFor="elegant" className="cursor-pointer">Elegant</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="joyful" id="joyful" />
                      <Label htmlFor="joyful" className="cursor-pointer">Joyful</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="serene" id="serene" />
                      <Label htmlFor="serene" className="cursor-pointer">Serene</Label>
                    </div>
                  </RadioGroup>
                </div>

                <Button 
                  onClick={handleVisualize} 
                  disabled={isGenerating}
                  className="w-full"
                  variant="hero"
                >
                  <Sparkles className="mr-2 h-4 w-4" />
                  {isGenerating ? 'Generating...' : 'Visualize on Model'}
                </Button>
              </div>
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <Badge className="w-fit mb-4 bg-accent text-accent-foreground">
                {product.badge}
              </Badge>
              <h1 className="font-serif text-4xl font-bold mb-4">
                {product.name}
              </h1>
              <p className="text-muted-foreground mb-2">{product.country}</p>
              <p className="text-3xl font-bold text-primary mb-6">
                ${product.price}
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                {product.description}
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm">Authenticity Guaranteed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm">Handcrafted by Master Artisans</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm">Free Worldwide Shipping</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-sm">30-Day Return Policy</span>
                </div>
              </div>

              <div className="flex gap-4">
                <Button
                  size="lg"
                  className="flex-1"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div>
              <h2 className="font-serif text-3xl font-bold mb-8">
                More from {product.country}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(p => (
                  <div
                    key={p.id}
                    className="cursor-pointer group"
                    onClick={() => navigate(`/product/${p.id}`)}
                  >
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4 shadow-card hover:shadow-hover transition-all">
                      <img
                        src={p.image}
                        alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="font-semibold mb-1">{p.name}</h3>
                    <p className="text-primary font-bold">${p.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
