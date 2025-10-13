import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCart } from '@/contexts/CartContext';

const Navigation = () => {
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const [searchQuery, setSearchQuery] = useState('');
  const cartCount = getCartCount();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };
  
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center cursor-pointer"
          >
            <span className="font-sans text-xl md:text-2xl font-bold tracking-tight">
              LEGACY<span className="inline-block relative ml-1">
                <span className="relative z-10 text-background px-2 md:px-3 py-0.5 md:py-1 text-sm md:text-lg">WEAR</span>
                <span className="absolute inset-0 bg-primary rounded-full" />
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/products')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Collections
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => navigate('/#sustainability')}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Sustainability
            </button>
          </div>

          {/* Search & Cart */}
          <div className="flex items-center space-x-4">
            <form onSubmit={handleSearch} className="hidden lg:flex items-center">
              <Input
                type="search"
                placeholder="Search cultural fashion..."
                className="w-64"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/products')}
            >
              <Search className="h-5 w-5" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/cart')}
              className="relative"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  variant="destructive"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <button 
                    onClick={() => navigate('/products')}
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    Collections
                  </button>
                  <button 
                    onClick={() => navigate('/about')}
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    About
                  </button>
                  <button 
                    onClick={() => navigate('/#sustainability')}
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    Sustainability
                  </button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
