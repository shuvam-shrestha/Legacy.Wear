import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, ShoppingCart } from 'lucide-react';
import { useCart, Product } from '@/contexts/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  return (
    <Card className="group cursor-pointer overflow-hidden border-none shadow-card hover:shadow-hover transition-all duration-300 animate-fade-in hover-scale">
      <CardContent className="p-0">
        <div 
          className="relative overflow-hidden aspect-[3/4]"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute top-4 right-4 bg-background/80 backdrop-blur hover:bg-background"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Heart className="h-5 w-5" />
          </Button>
          {product.badge && (
            <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
              {product.badge}
            </Badge>
          )}
        </div>
        <div className="p-6">
          <p className="text-sm text-muted-foreground mb-1">{product.country}</p>
          <h3 className="font-semibold text-lg mb-2 line-clamp-1">{product.name}</h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-primary">${product.price}</p>
            <Button
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                addToCart(product);
              }}
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Add
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
