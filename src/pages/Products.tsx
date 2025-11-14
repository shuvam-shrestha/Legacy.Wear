import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ProductCard from '@/components/ProductCard';
import { allProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Products = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedGender, setSelectedGender] = useState<string>('all');
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');
  const searchQuery = searchParams.get('search') || '';

  // Sync filters with URL params
  useEffect(() => {
    const gender = searchParams.get('gender') || 'all';
    const category = searchParams.get('category') || 'all';
    const tag = searchParams.get('tag') || 'all';
    setSelectedGender(gender);
    setSelectedCategory(category);
    setSelectedTag(tag);
  }, [searchParams]);

  const countries = ['all', ...Array.from(new Set(allProducts.map(p => p.country)))];
  const categories = ['all', ...Array.from(new Set(allProducts.map(p => p.category || 'Other')))];
  const genders = ['all', 'men', 'women', 'unisex'];
  const tags = ['all', 'artisan-verified', 'fair-trade', 'eco-friendly', 'trendy'];

  let filteredProducts = allProducts.filter(product => {
    const matchesCountry = selectedCountry === 'all' || product.country === selectedCountry;
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesGender = selectedGender === 'all' || product.gender === selectedGender;
    const matchesTag = selectedTag === 'all' || (product.tags && product.tags.includes(selectedTag));
    
    const matchesSearch = !searchQuery || 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (product.category && product.category.toLowerCase().includes(searchQuery.toLowerCase())) ||
      product.badge.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCountry && matchesCategory && matchesGender && matchesTag && matchesSearch;
  });

  // Sort products
  if (sortBy === 'price-low') {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <section className="py-12 bg-gradient-warm">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'All Products'}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {searchQuery 
                  ? `Found ${filteredProducts.length} product${filteredProducts.length !== 1 ? 's' : ''} matching your search`
                  : 'Explore our complete collection of authentic cultural fashion from around the world'
                }
              </p>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 mb-8 justify-center">
              <Select value={selectedGender} onValueChange={(value) => {
                setSelectedGender(value);
                if (value !== 'all') {
                  searchParams.set('gender', value);
                } else {
                  searchParams.delete('gender');
                }
                setSearchParams(searchParams);
              }}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Gender" />
                </SelectTrigger>
                <SelectContent>
                  {genders.map(gender => (
                    <SelectItem key={gender} value={gender}>
                      {gender === 'all' ? 'All Genders' : gender.charAt(0).toUpperCase() + gender.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCountry} onValueChange={setSelectedCountry}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Country" />
                </SelectTrigger>
                <SelectContent>
                  {countries.map(country => (
                    <SelectItem key={country} value={country}>
                      {country === 'all' ? 'All Countries' : country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedCategory} onValueChange={(value) => {
                setSelectedCategory(value);
                if (value !== 'all') {
                  searchParams.set('category', value);
                } else {
                  searchParams.delete('category');
                }
                setSearchParams(searchParams);
              }}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedTag} onValueChange={(value) => {
                setSelectedTag(value);
                if (value !== 'all') {
                  searchParams.set('tag', value);
                } else {
                  searchParams.delete('tag');
                }
                setSearchParams(searchParams);
              }}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Tag" />
                </SelectTrigger>
                <SelectContent>
                  {tags.map(tag => (
                    <SelectItem key={tag} value={tag}>
                      {tag === 'all' ? 'All Tags' : tag.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No products found matching your filters
                </p>
                  <Button onClick={() => {
                    setSelectedCountry('all');
                    setSelectedCategory('all');
                    setSelectedGender('all');
                    setSelectedTag('all');
                    navigate('/products');
                  }}>
                    Clear Filters
                  </Button>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
