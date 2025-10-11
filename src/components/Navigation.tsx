import { ShoppingCart, Search, Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navigation = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2">
            <Globe className="h-6 w-6 text-primary" />
            <span className="font-serif text-2xl font-bold text-primary">Legacy Wear</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#collections" className="text-sm font-medium hover:text-primary transition-colors">
              Collections
            </a>
            <a href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#sustainability" className="text-sm font-medium hover:text-primary transition-colors">
              Sustainability
            </a>
          </div>

          {/* Search & Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:flex items-center">
              <Input
                type="search"
                placeholder="Search cultural fashion..."
                className="w-64"
              />
            </div>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5" />
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
                  <a href="#collections" className="text-lg font-medium hover:text-primary transition-colors">
                    Collections
                  </a>
                  <a href="#about" className="text-lg font-medium hover:text-primary transition-colors">
                    About
                  </a>
                  <a href="#sustainability" className="text-lg font-medium hover:text-primary transition-colors">
                    Sustainability
                  </a>
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
