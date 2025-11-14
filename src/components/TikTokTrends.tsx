import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const trendingVideos = [
  {
    id: 1,
    title: "Elegant Silk Saree Styling",
    creator: "@TraditionalChic",
    views: "3.2M",
    thumbnail: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&h=600&fit=crop",
    url: "https://www.tiktok.com/@traditionalchic",
    description: "How to style silk sarees for modern occasions"
  },
  {
    id: 2,
    title: "Hanbok Dress Collection 2024",
    creator: "@KoreanElegance",
    views: "2.8M",
    thumbnail: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=400&h=600&fit=crop",
    url: "https://www.tiktok.com/@koreanelegance",
    description: "Modern hanbok designs perfect for any event"
  },
  {
    id: 3,
    title: "Summer Kimono Looks",
    creator: "@JapanFashionDaily",
    views: "4.1M",
    thumbnail: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=400&h=600&fit=crop",
    url: "https://www.tiktok.com/@japanfashiondaily",
    description: "Beautiful kimono styling ideas for summer"
  }
];

const TikTokTrends = () => {
  return (
    <section className="py-20 bg-gradient-warm">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Latest Fashion Trends
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how people around the world are styling traditional cultural fashion
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {trendingVideos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden border-none shadow-card hover:shadow-hover transition-all duration-300 group cursor-pointer"
              onClick={() => window.open(video.url, '_blank')}
            >
              <div className="relative overflow-hidden aspect-[9/16]">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <div className="flex items-center gap-2 mb-2">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5 fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
                    </svg>
                    <span className="text-xs font-medium">{video.views} views</span>
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{video.title}</h3>
                  <p className="text-xs text-white/80 mb-2">{video.creator}</p>
                  <p className="text-xs text-white/70 line-clamp-2">{video.description}</p>
                </div>
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button
                    size="icon"
                    variant="secondary"
                    className="rounded-full"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('https://www.tiktok.com/@legacywear', '_blank')}
            className="gap-2"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-5 h-5 fill-current"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
            Follow @LegacyWear on TikTok
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TikTokTrends;
