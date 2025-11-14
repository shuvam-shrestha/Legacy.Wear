import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    location: "San Francisco, USA",
    rating: 5,
    text: "The quality of the handwoven silk saree I purchased exceeded all expectations. The craftsmanship is absolutely stunning, and I love knowing that my purchase supports traditional artisans.",
    product: "Banarasi Silk Saree",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    name: "Maria Rodriguez",
    location: "Barcelona, Spain",
    rating: 5,
    text: "I wore my traditional kimono to a cultural event and received so many compliments. The fabric is luxurious and the colors are vibrant. Truly a piece of art!",
    product: "Cherry Blossom Kimono",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
  },
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "Finally found authentic cultural wear online! The attention to detail in my Hanbok is remarkable. Fast shipping and beautiful packaging too.",
    product: "Royal Blue Hanbok",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const testimonial = testimonials[currentIndex];

  return (
    <section className="py-16 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from fashion lovers who've discovered the beauty of cultural heritage
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-card border-2 border-accent/20 overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-accent/10 to-primary/10 p-8 md:p-12">
                <div className="flex justify-center items-center gap-4 mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-accent/30 shadow-lg"
                  />
                  <div>
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>

                <div className="flex justify-center mb-6">
                  <Quote className="h-16 w-16 text-accent opacity-50" />
                </div>
                
                <div className="text-center mb-6">
                  <div className="flex justify-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-6 w-6 fill-accent text-accent" />
                    ))}
                  </div>
                  
                  <p className="text-xl md:text-2xl font-serif italic mb-8 text-foreground leading-relaxed">
                    &quot;{testimonial.text}&quot;
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-sm text-accent font-medium">Purchased: {testimonial.product}</p>
                  </div>
                </div>

                <div className="flex justify-center gap-2 mt-8">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentIndex
                          ? "bg-accent w-8"
                          : "bg-accent/30 hover:bg-accent/50"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
