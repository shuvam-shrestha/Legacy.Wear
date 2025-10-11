import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import CountryCollections from "@/components/CountryCollections";
import FeaturedProducts from "@/components/FeaturedProducts";
import AIPersonalization from "@/components/AIPersonalization";
import Sustainability from "@/components/Sustainability";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <CountryCollections />
        <FeaturedProducts />
        <AIPersonalization />
        <Sustainability />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
