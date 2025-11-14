import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, Search, Menu, LogOut, LogIn, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-sm font-medium">
                    Category
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-1 p-4 bg-popover">
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate('/products')}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                          >
                            <div className="text-sm font-medium leading-none">All Products</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Browse our entire collection
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate('/products?gender=men')}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                          >
                            <div className="text-sm font-medium leading-none">Men Apparels</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Explore men's cultural fashion
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate('/products?gender=women')}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                          >
                            <div className="text-sm font-medium leading-none">Women Apparels</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Discover women's traditional wear
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate('/products?category=Traditional%20Wear')}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                          >
                            <div className="text-sm font-medium leading-none">Traditional</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Authentic traditional attire
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate('/products?category=Casual%20Wear')}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                          >
                            <div className="text-sm font-medium leading-none">Casual</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Comfortable everyday wear
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate('/products?tag=trendy')}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                          >
                            <div className="text-sm font-medium leading-none">Trendy</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Modern cultural fusion pieces
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate('/products?tag=artisan-verified')}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                          >
                            <div className="text-sm font-medium leading-none">Artisan Verified</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Handcrafted by master artisans
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate('/products?tag=fair-trade')}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                          >
                            <div className="text-sm font-medium leading-none">Fair Trade</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Ethically sourced products
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <button
                            onClick={() => navigate('/products?tag=eco-friendly')}
                            className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground w-full text-left"
                          >
                            <div className="text-sm font-medium leading-none">Eco-Friendly</div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                              Sustainable and eco-conscious
                            </p>
                          </button>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
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
                    All Products
                  </button>
                  <button 
                    onClick={() => navigate('/products?gender=men')}
                    className="text-base hover:text-primary transition-colors text-left pl-4"
                  >
                    Men Apparels
                  </button>
                  <button 
                    onClick={() => navigate('/products?gender=women')}
                    className="text-base hover:text-primary transition-colors text-left pl-4"
                  >
                    Women Apparels
                  </button>
                  <button 
                    onClick={() => navigate('/products?category=Traditional%20Wear')}
                    className="text-base hover:text-primary transition-colors text-left pl-4"
                  >
                    Traditional
                  </button>
                  <button 
                    onClick={() => navigate('/products?category=Casual%20Wear')}
                    className="text-base hover:text-primary transition-colors text-left pl-4"
                  >
                    Casual
                  </button>
                  <button 
                    onClick={() => navigate('/products?tag=trendy')}
                    className="text-base hover:text-primary transition-colors text-left pl-4"
                  >
                    Trendy
                  </button>
                  <button 
                    onClick={() => navigate('/products?tag=artisan-verified')}
                    className="text-base hover:text-primary transition-colors text-left pl-4"
                  >
                    Artisan Verified
                  </button>
                  <button 
                    onClick={() => navigate('/products?tag=fair-trade')}
                    className="text-base hover:text-primary transition-colors text-left pl-4"
                  >
                    Fair Trade
                  </button>
                  <button 
                    onClick={() => navigate('/products?tag=eco-friendly')}
                    className="text-base hover:text-primary transition-colors text-left pl-4"
                  >
                    Eco-Friendly
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
