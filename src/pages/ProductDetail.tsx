import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { allProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { ShoppingCart, Heart, ArrowLeft } from 'lucide-react';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  
  const product = allProducts.find(p => p.id === Number(id));

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
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-hover">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
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
