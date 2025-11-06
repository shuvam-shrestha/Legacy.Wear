import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Globe, Heart, Award, Users } from 'lucide-react';
import nepalPashmina from "@/assets/products/nepal-pashmina.jpg";
import indiaBaranasiSaree from "@/assets/products/india-banarasi-saree.jpg";
import japanKimonoSakura from "@/assets/products/japan-kimono-sakura.jpg";
import koreaHanbokRoyal from "@/assets/products/korea-hanbok-royal.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-20 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-6">
                Our Story
              </h1>
              <p className="text-lg text-muted-foreground">
                Legacy Wear was born from a passion for preserving cultural heritage and connecting 
                artisans with a global audience. We believe that traditional fashion tells stories 
                that transcend borders and generations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="shadow-card overflow-hidden">
                <div className="relative aspect-video">
                  <img src={nepalPashmina} alt="Global Marketplace" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-8">
                  <Globe className="h-12 w-12 text-accent mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    Global Marketplace
                  </h3>
                  <p className="text-muted-foreground">
                    We connect authentic cultural fashion from over 50 countries, bringing the 
                    world&apos;s heritage to your doorstep. Each piece is carefully curated and verified 
                    by local experts.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card overflow-hidden">
                <div className="relative aspect-video">
                  <img src={indiaBaranasiSaree} alt="Artisan Partnerships" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-8">
                  <Users className="h-12 w-12 text-accent mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    Artisan Partnerships
                  </h3>
                  <p className="text-muted-foreground">
                    We work directly with master craftspeople, ensuring fair wages and preserving 
                    traditional techniques passed down through generations. Your purchase supports 
                    entire communities.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card overflow-hidden">
                <div className="relative aspect-video">
                  <img src={japanKimonoSakura} alt="Sustainability First" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-8">
                  <Heart className="h-12 w-12 text-accent mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    Sustainability First
                  </h3>
                  <p className="text-muted-foreground">
                    Every item is made from eco-friendly materials with natural dyes. We use 
                    carbon-neutral shipping and biodegradable packaging to minimize our environmental 
                    impact.
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-card overflow-hidden">
                <div className="relative aspect-video">
                  <img src={koreaHanbokRoyal} alt="Authenticity Guaranteed" className="w-full h-full object-cover" />
                </div>
                <CardContent className="p-8">
                  <Award className="h-12 w-12 text-accent mb-4" />
                  <h3 className="font-serif text-2xl font-bold mb-4">
                    Authenticity Guaranteed
                  </h3>
                  <p className="text-muted-foreground">
                    Every piece comes with a certificate of authenticity and detailed information 
                    about its origin, the artisan who made it, and the cultural significance it holds.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-card rounded-2xl p-12 shadow-card text-center">
              <h2 className="font-serif text-3xl font-bold mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                To preserve and celebrate the world&apos;s cultural fashion heritage by creating a 
                sustainable marketplace that empowers artisans, educates consumers, and connects 
                communities across the globe. We&apos;re not just selling clothes—we&apos;re sharing stories, 
                traditions, and the beauty of human creativity.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
