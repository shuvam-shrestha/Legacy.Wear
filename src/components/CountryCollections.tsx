import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import japanImg from "@/assets/collection-japan.jpg";
import indiaImg from "@/assets/collection-india.jpg";
import moroccoImg from "@/assets/collection-morocco.jpg";
import africaImg from "@/assets/collection-africa.jpg";

const collections = [
  {
    country: "Nepal",
    description: "Himalayan Heritage & Pashmina",
    image: indiaImg,
    items: "4 items",
  },
  {
    country: "Thailand",
    description: "Thai Silk & Traditional Attire",
    image: japanImg,
    items: "4 items",
  },
  {
    country: "India",
    description: "Sarees, Sherwanis & More",
    image: indiaImg,
    items: "4 items",
  },
  {
    country: "Bangladesh",
    description: "Jamdani & Kantha Artistry",
    image: africaImg,
    items: "4 items",
  },
  {
    country: "Russia",
    description: "Folk Costumes & Shawls",
    image: moroccoImg,
    items: "4 items",
  },
  {
    country: "China",
    description: "Qipao, Hanfu & Tang Suits",
    image: japanImg,
    items: "4 items",
  },
  {
    country: "Japan",
    description: "Elegant Kimonos & Yukatas",
    image: japanImg,
    items: "4 items",
  },
  {
    country: "South Korea",
    description: "Traditional & Modern Hanbok",
    image: indiaImg,
    items: "4 items",
  },
];

const CountryCollections = () => {
  const navigate = useNavigate();
  
  return (
    <section id="collections" className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Explore by Country
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Journey through authentic cultural fashion from nations worldwide, 
            each piece carefully curated and verified by local artisans.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {collections.slice(0, 4).map((collection) => (
            <Card
              key={collection.country}
              className="group cursor-pointer overflow-hidden border-none shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in hover-scale"
              onClick={() => navigate('/products')}
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden aspect-square">
                  <img
                    src={collection.image}
                    alt={`${collection.country} traditional fashion`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="font-serif text-2xl font-bold mb-1">
                      {collection.country}
                    </h3>
                    <p className="text-sm text-white/90 mb-2">
                      {collection.description}
                    </p>
                    <p className="text-xs text-white/70">{collection.items}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {collections.length > 4 && (
          <div className="mt-8 overflow-x-auto pb-4">
            <div className="flex gap-4 min-w-max px-4">
              {collections.slice(4).map((collection) => (
                <Card
                  key={collection.country}
                  className="group cursor-pointer overflow-hidden border-none shadow-card hover:shadow-hover transition-all duration-300 w-64 flex-shrink-0 animate-fade-in hover-scale"
                  onClick={() => navigate('/products')}
                >
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        src={collection.image}
                        alt={`${collection.country} traditional fashion`}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                        <h3 className="font-serif text-2xl font-bold mb-1">
                          {collection.country}
                        </h3>
                        <p className="text-sm text-white/90 mb-2">
                          {collection.description}
                        </p>
                        <p className="text-xs text-white/70">{collection.items}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CountryCollections;
