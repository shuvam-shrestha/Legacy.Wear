import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, LogOut, LogIn } from "lucide-react";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { useCart } from '@/contexts/CartContext';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/hooks/use-toast';

const Navigation = () => {
  const navigate = useNavigate();
  const { getCartCount } = useCart();
  const { user, signOut } = useAuth();
  const [searchQuery, setSearchQuery] = useState('');
  const cartCount = getCartCount();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleSignOut = async () => {
    await signOut();
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    navigate('/');
  };
  
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => navigate('/')} 
            className="flex items-center space-x-2 cursor-pointer"
          >
            <img src={logo} alt="Legacy Wear Logo" className="h-10 w-10" />
            <span className="font-serif text-2xl font-bold text-primary">Legacy Wear</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => navigate('/products')}
              className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative group"
            >
              Collections
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => navigate('/about')}
              className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => navigate('/sustainability')}
              className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative group"
            >
              Sustainability
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </button>
            <button 
              onClick={() => navigate('/contact')}
              className="text-sm font-medium hover:text-primary transition-all duration-300 hover:scale-110 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
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
              className="relative transition-all duration-300 hover:scale-110 group"
            >
              <ShoppingCart className="h-5 w-5 group-hover:animate-pulse" />
              {cartCount > 0 && (
                <Badge 
                  className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs animate-scale-in"
                  variant="destructive"
                >
                  {cartCount}
                </Badge>
              )}
            </Button>

            {user ? (
              <Button
                onClick={handleSignOut}
                variant="ghost"
                size="sm"
                className="hidden md:flex gap-2 transition-all duration-300 hover:scale-105"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </Button>
            ) : (
              <Button
                onClick={() => navigate('/auth')}
                variant="default"
                size="sm"
                className="hidden md:flex gap-2 transition-all duration-300 hover:scale-105"
              >
                <LogIn className="h-4 w-4" />
                Sign In
              </Button>
            )}

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
                    onClick={() => navigate('/sustainability')}
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    Sustainability
                  </button>
                  <button 
                    onClick={() => navigate('/contact')}
                    className="text-lg font-medium hover:text-primary transition-colors text-left"
                  >
                    Contact
                  </button>

                  {user ? (
                    <Button
                      onClick={handleSignOut}
                      variant="ghost"
                      size="sm"
                      className="w-full justify-start gap-2"
                    >
                      <LogOut className="h-4 w-4" />
                      Sign Out
                    </Button>
                  ) : (
                    <Button
                      onClick={() => navigate('/auth')}
                      variant="default"
                      size="sm"
                      className="w-full justify-start gap-2"
                    >
                      <LogIn className="h-4 w-4" />
                      Sign In
                    </Button>
                  )}
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
