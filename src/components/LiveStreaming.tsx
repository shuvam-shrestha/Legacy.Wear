import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Youtube, Music2 } from 'lucide-react';

const LiveStreaming = () => {
  // These would be dynamic in production - fetched from YouTube/TikTok APIs
  const isYoutubeLive = false;
  const isTikTokLive = false;
  
  // Replace with actual channel IDs
  const youtubeChannelId = 'UCxxxxxxxxxxxxxx';
  const tiktokUsername = 'legacywear';

  if (!isYoutubeLive && !isTikTokLive) {
    return null;
  }

  return (
    <section className="py-20 bg-gradient-cultural">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-red-500 text-white animate-pulse">
            🔴 LIVE NOW
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
            Watch Our Live Shows
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join us live as we showcase new collections, meet artisans, and explore cultural fashion
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {isYoutubeLive && (
            <Card className="shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-video bg-black">
                    <iframe
                      className="w-full h-full"
                      src={`https://www.youtube.com/embed/live_stream?channel=${youtubeChannelId}&autoplay=1`}
                      title="YouTube Live Stream"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Youtube className="h-6 w-6 text-red-500" />
                      <h3 className="font-semibold text-lg">YouTube Live</h3>
                      <Badge className="bg-red-500 text-white">LIVE</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Watch our live fashion show and cultural celebration
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {isTikTokLive && (
            <Card className="shadow-card overflow-hidden">
              <CardContent className="p-0">
                <div className="relative">
                  <div className="aspect-video bg-black flex items-center justify-center">
                    {/* TikTok doesn't support direct embedding, show link instead */}
                    <div className="text-center p-8">
                      <Music2 className="h-16 w-16 mx-auto mb-4 text-white" />
                      <p className="text-white mb-4">We're live on TikTok!</p>
                      <a
                        href={`https://www.tiktok.com/@${tiktokUsername}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                      >
                        Watch on TikTok
                      </a>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Music2 className="h-6 w-6" />
                      <h3 className="font-semibold text-lg">TikTok Live</h3>
                      <Badge className="bg-black text-white">LIVE</Badge>
                    </div>
                    <p className="text-muted-foreground">
                      Join our interactive live session on TikTok
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
};

export default LiveStreaming;
