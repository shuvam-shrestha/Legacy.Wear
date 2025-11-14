import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Sparkles, ArrowRight, ArrowLeft } from 'lucide-react';
import { allProducts } from '@/data/products';

const questions = [
  {
    id: 'mood',
    question: 'What mood do you want your outfit to express?',
    options: [
      { value: 'elegant', label: 'Elegant & Sophisticated' },
      { value: 'romantic', label: 'Romantic & Graceful' },
      { value: 'bold', label: 'Bold & Confident' },
      { value: 'serene', label: 'Peaceful & Serene' },
    ],
  },
  {
    id: 'feeling',
    question: 'How do you want to feel when wearing this dress?',
    options: [
      { value: 'empowered', label: 'Empowered & Strong' },
      { value: 'comfortable', label: 'Comfortable & Relaxed' },
      { value: 'glamorous', label: 'Glamorous & Eye-catching' },
      { value: 'authentic', label: 'Authentic & Connected to heritage' },
    ],
  },
  {
    id: 'colors',
    question: 'What colors resonate with your current mood?',
    options: [
      { value: 'jewel', label: 'Rich jewel tones (Ruby, Sapphire, Emerald)' },
      { value: 'pastel', label: 'Soft pastels (Blush, Lavender, Mint)' },
      { value: 'earth', label: 'Earthy naturals (Terracotta, Sage, Cream)' },
      { value: 'dramatic', label: 'Deep dramatic shades (Burgundy, Navy, Black)' },
    ],
  },
  {
    id: 'atmosphere',
    question: 'What kind of atmosphere are you dressing for?',
    options: [
      { value: 'intimate', label: 'Intimate & Personal gathering' },
      { value: 'celebration', label: 'Grand celebration & Festivities' },
      { value: 'cultural', label: 'Cultural ceremony & Tradition' },
      { value: 'everyday', label: 'Everyday elegance' },
    ],
  },
  {
    id: 'fabric',
    question: 'Which fabric feeling appeals to you most?',
    options: [
      { value: 'silk', label: 'Luxurious silk - smooth & flowing' },
      { value: 'cotton', label: 'Soft cotton - breathable & light' },
      { value: 'brocade', label: 'Rich brocade - textured & ornate' },
      { value: 'linen', label: 'Natural linen - crisp & authentic' },
    ],
  },
  {
    id: 'details',
    question: 'What detail speaks to your style personality?',
    options: [
      { value: 'embroidery', label: 'Intricate embroidery & handwork' },
      { value: 'minimal', label: 'Clean lines & minimal embellishments' },
      { value: 'prints', label: 'Traditional prints & patterns' },
      { value: 'fusion', label: 'Modern fusion of old & new' },
    ],
  },
];

const AIStyleQuiz = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [recommendations, setRecommendations] = useState<typeof allProducts>([]);

  const currentQuestion = questions[currentStep];

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Generate recommendations
      const recommended = allProducts.slice(0, 6);
      setRecommendations(recommended);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [currentQuestion.id]: value });
  };

  if (recommendations.length > 0) {
    return (
      <div className="min-h-screen">
        <Navigation />
        <main className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Sparkles className="h-16 w-16 mx-auto mb-4 text-accent" />
              <h1 className="font-serif text-4xl font-bold mb-4">
                Your Personalized Recommendations
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Based on your preferences, we've curated these perfect pieces just for you
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {recommendations.map(product => (
                <Card
                  key={product.id}
                  className="cursor-pointer shadow-card hover:shadow-hover transition-all"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  <CardContent className="p-0">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-muted-foreground mb-1">
                        {product.country}
                      </p>
                      <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                      <p className="text-2xl font-bold text-primary">${product.price}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Button size="lg" onClick={() => navigate('/products')}>
                Explore All Products
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-12">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="text-center mb-8">
            <Sparkles className="h-12 w-12 mx-auto mb-4 text-accent" />
            <h1 className="font-serif text-4xl font-bold mb-4">
              AI Style Quiz
            </h1>
            <p className="text-muted-foreground">
              Answer a few questions and let our AI find your perfect cultural fashion match
            </p>
          </div>

          {/* Progress */}
          <div className="mb-8">
            <div className="flex justify-between text-sm mb-2">
              <span>Question {currentStep + 1} of {questions.length}</span>
              <span>{Math.round(((currentStep + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div
                className="h-full bg-accent transition-all duration-300"
                style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <Card className="shadow-card">
            <CardContent className="p-8">
              <h2 className="font-serif text-2xl font-bold mb-6">
                {currentQuestion.question}
              </h2>

              <RadioGroup
                value={answers[currentQuestion.id] || ''}
                onValueChange={handleAnswer}
                className="space-y-4"
              >
                {currentQuestion.options.map(option => (
                  <div
                    key={option.value}
                    className="flex items-center space-x-3 p-4 rounded-lg border hover:bg-accent/5 transition-colors cursor-pointer"
                    onClick={() => handleAnswer(option.value)}
                  >
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label
                      htmlFor={option.value}
                      className="flex-1 cursor-pointer text-base"
                    >
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>

              <div className="flex gap-4 mt-8">
                {currentStep > 0 && (
                  <Button
                    variant="outline"
                    onClick={handleBack}
                    className="flex-1"
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                  </Button>
                )}
                <Button
                  onClick={handleNext}
                  disabled={!answers[currentQuestion.id]}
                  className="flex-1"
                >
                  {currentStep === questions.length - 1 ? 'Get Recommendations' : 'Next'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AIStyleQuiz;
