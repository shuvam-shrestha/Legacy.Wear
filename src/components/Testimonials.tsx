import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    location: "New York, USA",
    rating: 5,
    text: "The quality and authenticity of the Kimono I purchased is absolutely stunning. I felt the cultural heritage in every thread. Legacy Wear has connected me with traditions I've always admired.",
    product: "Japanese Kimono"
  },
  {
    name: "Michael Chen",
    location: "Singapore",
    rating: 5,
    text: "As someone passionate about sustainable fashion, Legacy Wear is a dream come true. The eco-friendly materials and fair trade practices make every purchase meaningful. Plus, the designs are breathtaking!",
    product: "Nepal Pashmina"
  },
  {
    name: "Priya Sharma",
    location: "Mumbai, India",
    rating: 5,
    text: "I was amazed by the craftsmanship of the Hanbok I ordered. The artisan's story that came with it made me appreciate the garment even more. This is fashion with a soul!",
    product: "Korean Hanbok"
  },
  {
    name: "David Martinez",
    location: "Barcelona, Spain",
    rating: 5,
    text: "Legacy Wear brings the world's cultures to your wardrobe. The Moroccan Kaftan I bought is not just clothing—it's wearable art. Customer service was excellent too!",
    product: "Moroccan Kaftan"
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
                    <p className="font-bold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.location}</p>
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
