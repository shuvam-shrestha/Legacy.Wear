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
import { useState, useEffect } from 'react';
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
  const [aiDescription, setAiDescription] = useState('');
  const [isLoadingDescription, setIsLoadingDescription] = useState(false);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

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

  // Set default size when product loads
  useEffect(() => {
    if (product.sizes && product.sizes.length > 0 && !selectedSize) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product, selectedSize]);

  // Load AI description on mount
  useEffect(() => {
    const generateDescription = async () => {
      // Check if we have a cached description for this product
      const cacheKey = `product_desc_${product.id}`;
      const cached = localStorage.getItem(cacheKey);
      
      if (cached) {
        const { description, timestamp } = JSON.parse(cached);
        // Cache valid for 24 hours
        if (Date.now() - timestamp < 24 * 60 * 60 * 1000) {
          setAiDescription(description);
          return;
        }
      }

      setIsLoadingDescription(true);
      setAiDescription('');
      
      try {
        // Get user preferences from localStorage (from AI Style Quiz)
        const storedAnswers = localStorage.getItem('styleQuizAnswers');
        const userPreferences = storedAnswers ? JSON.parse(storedAnswers) : null;

        const response = await fetch(
          `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/generate-product-description`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
            },
            body: JSON.stringify({
              productName: product.name,
              productCountry: product.country,
              productCategory: product.category,
              userPreferences,
            }),
          }
        );

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          if (response.status === 429) {
            toast({
              title: "Too Many Requests",
              description: "Please wait a moment before trying again.",
              variant: "destructive",
            });
            setAiDescription(product.description);
            return;
          }
          throw new Error(errorData.error || 'Failed to generate description');
        }

        if (!response.body) {
          throw new Error('No response body');
        }

        const reader = response.body.getReader();
        const decoder = new TextDecoder();
        let textBuffer = '';
        let streamDone = false;
        let fullText = '';

        while (!streamDone) {
          const { done, value } = await reader.read();
          if (done) break;
          textBuffer += decoder.decode(value, { stream: true });

          let newlineIndex: number;
          while ((newlineIndex = textBuffer.indexOf('\n')) !== -1) {
            let line = textBuffer.slice(0, newlineIndex);
            textBuffer = textBuffer.slice(newlineIndex + 1);

            if (line.endsWith('\r')) line = line.slice(0, -1);
            if (line.startsWith(':') || line.trim() === '') continue;
            if (!line.startsWith('data: ')) continue;

            const jsonStr = line.slice(6).trim();
            if (jsonStr === '[DONE]') {
              streamDone = true;
              break;
            }

            try {
              const parsed = JSON.parse(jsonStr);
              const content = parsed.choices?.[0]?.delta?.content as string | undefined;
              if (content) {
                fullText += content;
                // Split into words and stream word by word with 1ms delay
                const words = content.split(' ');
                for (const word of words) {
                  await new Promise(resolve => setTimeout(resolve, 1));
                  setAiDescription(prev => prev + (prev ? ' ' : '') + word);
                }
              }
            } catch {
              textBuffer = line + '\n' + textBuffer;
              break;
            }
          }
        }

        // Cache the full description
        if (fullText) {
          localStorage.setItem(cacheKey, JSON.stringify({
            description: fullText,
            timestamp: Date.now()
          }));
        }
      } catch (error) {
        console.error('Error generating description:', error);
        setAiDescription(product.description); // Fallback to original description
      } finally {
        setIsLoadingDescription(false);
      }
    };

    generateDescription();
  }, [product, toast]);

  const convertImageToBase64 = async (imageSrc: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          reject(new Error('Failed to get canvas context'));
          return;
        }
        ctx.drawImage(img, 0, 0);
        resolve(canvas.toDataURL('image/jpeg', 0.9));
      };
      img.onerror = () => reject(new Error('Failed to load image'));
      img.src = imageSrc;
    });
  };

  const handleVisualize = async () => {
    if (!product) return;
    
    setIsGenerating(true);
    try {
      // Convert image to base64
      const base64Image = await convertImageToBase64(product.image);
      
      const { data, error } = await supabase.functions.invoke('visualize-outfit', {
        body: {
          productImage: base64Image,
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

  const handleBuyNow = () => {
    if (product) {
      addToCart(product);
      navigate('/checkout');
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
            {/* Image Gallery */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-hover">
                <img
                  src={visualizedImage || (product.images && product.images[selectedImageIndex]) || product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Thumbnail Images */}
              {product.images && product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-3">
                  {product.images.slice(0, 4).map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`relative aspect-[3/4] rounded-lg overflow-hidden cursor-pointer transition-all ${
                        selectedImageIndex === index 
                          ? 'ring-2 ring-primary shadow-lg' 
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} view ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
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
              <div className="mb-8">
                <p className="text-lg text-muted-foreground min-h-[4rem]">
                  {isLoadingDescription && !aiDescription && (
                    <span className="inline-block animate-pulse">Generating personalized description...</span>
                  )}
                  {aiDescription || product.description}
                </p>
              </div>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="mb-6">
                  <Label className="text-sm font-medium mb-3 block">Select Size</Label>
                  <div className="flex gap-2 flex-wrap">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`px-4 py-2 border rounded-lg transition-all ${
                          selectedSize === size
                            ? 'bg-primary text-primary-foreground border-primary'
                            : 'bg-background border-border hover:border-primary'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

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

              {/* Action Buttons */}
              <div className="flex gap-4 mb-8">
                <Button
                  size="lg"
                  className="flex-1"
                  onClick={() => addToCart(product)}
                >
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
                <Button 
                  size="lg" 
                  className="flex-1"
                  variant="hero"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </Button>
                <Button size="lg" variant="outline">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* AI Personalization - Horizontal Layout */}
              <div className="bg-card rounded-xl p-6 shadow-card">
                <div className="flex items-center gap-2 mb-6">
                  <Sparkles className="h-5 w-5 text-primary" />
                  <h3 className="font-semibold text-lg">AI Personalization</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
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
