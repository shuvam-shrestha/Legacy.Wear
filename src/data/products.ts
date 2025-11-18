import nepalDhakaTopi from '@/assets/products/nepal-dhaka-topi.jpg';
import nepalGurungDress from '@/assets/products/nepal-gurung-dress.jpg';
import nepalPashmina from '@/assets/products/nepal-pashmina.jpg';
import nepalHempKurta from '@/assets/products/nepal-hemp-kurta.jpg';
import thailandChakri from '@/assets/products/thailand-chakri.jpg';
import thailandChutThai from '@/assets/products/thailand-chut-thai.jpg';
import thailandFishermanPants from '@/assets/products/thailand-fisherman-pants.jpg';
import thailandMudmeeScarf from '@/assets/products/thailand-mudmee-scarf.jpg';
import indiaBaranasiSaree from '@/assets/products/india-banarasi-saree.jpg';
import indiaSherwani from '@/assets/products/india-sherwani.jpg';
import indiaKhadiKurta from '@/assets/products/india-khadi-kurta.jpg';
import indiaBlockPrint from '@/assets/products/india-block-print.jpg';
import bangladeshJamdani from '@/assets/products/bangladesh-jamdani.jpg';
import bangladeshPunjabi from '@/assets/products/bangladesh-punjabi.jpg';
import bangladeshKantha from '@/assets/products/bangladesh-kantha.jpg';
import bangladeshTantSaree from '@/assets/products/bangladesh-tant-saree.jpg';
import russiaSarafan from '@/assets/products/russia-sarafan.jpg';
import russiaKaftan from '@/assets/products/russia-kaftan.jpg';
import russiaPosadShawl from '@/assets/products/russia-posad-shawl.jpg';
import russiaRubakha from '@/assets/products/russia-rubakha.jpg';
import chinaQipao from '@/assets/products/china-qipao.jpg';
import chinaTangSuit from '@/assets/products/china-tang-suit.jpg';
import chinaHanfu from '@/assets/products/china-hanfu.jpg';
import chinaTaiChi from '@/assets/products/china-taichi.jpg';
import japanKimonoSakura from '@/assets/products/japan-kimono-sakura.jpg';
import japanHakama from '@/assets/products/japan-hakama.jpg';
import japanYukata from '@/assets/products/japan-yukata.jpg';
import japanHaori from '@/assets/products/japan-haori.jpg';
import koreaHanbokRoyal from '@/assets/products/korea-hanbok-royal.jpg';
import koreaModernHanbok from '@/assets/products/korea-modern-hanbok.jpg';
import koreaJeogori from '@/assets/products/korea-jeogori.jpg';
import koreaDurumagi from '@/assets/products/korea-durumagi.jpg';

export interface Product {
  id: number;
  name: string;
  country: string;
  price: number;
  image: string;
  badge: string;
  description: string;
  category: string;
  gender?: 'men' | 'women' | 'unisex';
  tags?: string[];
  sizes?: string[];
  images?: string[];
}

export const allProducts: Product[] = [
  // Nepal - Traditional Wear
  {
    id: 1,
    name: "Dhaka Topi & Daura Suruwal Set",
    country: "Nepal",
    price: 189,
    image: nepalDhakaTopi,
    badge: "Artisan Verified",
    description: "Traditional Nepali men's outfit with handwoven Dhaka fabric topi. Crafted by artisans in Kathmandu.",
    category: "Traditional Wear",
    gender: "men",
    tags: ["artisan-verified", "traditional"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: [nepalDhakaTopi, nepalDhakaTopi, nepalDhakaTopi, nepalDhakaTopi],
  },
  {
    id: 2,
    name: "Gurung Traditional Dress",
    country: "Nepal",
    price: 215,
    image: nepalGurungDress,
    badge: "Fair Trade",
    description: "Elegant Gurung ethnic dress with intricate embroidery. Preserving indigenous Himalayan heritage.",
    category: "Traditional Wear",
    gender: "women",
    tags: ["fair-trade", "traditional"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: [nepalGurungDress, nepalGurungDress, nepalGurungDress, nepalGurungDress],
  },

  // Nepal - Casual Wear
  {
    id: 3,
    name: "Nepali Pashmina Shawl",
    country: "Nepal",
    price: 165,
    image: nepalPashmina,
    badge: "Eco-Friendly",
    description: "Luxurious handwoven pashmina from Himalayan goats. Sustainable and incredibly soft.",
    category: "Casual Wear",
    gender: "unisex",
    tags: ["eco-friendly", "casual"],
    sizes: ["One Size"],
    images: [nepalPashmina, nepalPashmina, nepalPashmina, nepalPashmina],
  },
  {
    id: 4,
    name: "Hemp Kurta",
    country: "Nepal",
    price: 125,
    image: nepalHempKurta,
    badge: "Eco-Friendly",
    description: "Comfortable kurta made from organic Himalayan hemp. Breathable and sustainable.",
    category: "Casual Wear",
    gender: "unisex",
    tags: ["eco-friendly", "casual"],
    sizes: ["S", "M", "L", "XL"],
    images: [nepalHempKurta, nepalHempKurta, nepalHempKurta, nepalHempKurta],
  },

  // Thailand - Traditional Wear
  {
    id: 5,
    name: "Thai Silk Chakri Set",
    country: "Thailand",
    price: 295,
    image: thailandChakri,
    badge: "Artisan Verified",
    description: "Exquisite Thai silk traditional formal wear. Handwoven using ancient royal techniques.",
    category: "Traditional Wear",
    gender: "women",
    tags: ["artisan-verified", "traditional"],
  },
  {
    id: 6,
    name: "Chut Thai Dress",
    country: "Thailand",
    price: 265,
    image: thailandChutThai,
    badge: "Fair Trade",
    description: "Elegant Thai national dress with golden patterns. Perfect for special occasions.",
    category: "Traditional Wear",
    gender: "women",
    tags: ["fair-trade", "traditional"],
  },

  // Thailand - Casual Wear
  {
    id: 7,
    name: "Fisherman Pants",
    country: "Thailand",
    price: 75,
    image: thailandFishermanPants,
    badge: "Eco-Friendly",
    description: "Comfortable Thai fisherman pants made from organic cotton. Perfect for travel.",
    category: "Casual Wear",
  },
  {
    id: 8,
    name: "Mudmee Silk Scarf",
    country: "Thailand",
    price: 95,
    image: thailandMudmeeScarf,
    badge: "Artisan Verified",
    description: "Traditional tie-dye silk scarf from Northeast Thailand. Unique patterns in every piece.",
    category: "Casual Wear",
  },

  // India - Traditional Wear
  {
    id: 9,
    name: "Banarasi Silk Saree",
    country: "India",
    price: 345,
    image: indiaBaranasiSaree,
    badge: "Fair Trade",
    description: "Luxurious Banarasi silk saree with intricate gold zari work. Handwoven in Varanasi.",
    category: "Traditional Wear",
  },
  {
    id: 10,
    name: "Embroidered Sherwani",
    country: "India",
    price: 425,
    image: indiaSherwani,
    badge: "Artisan Verified",
    description: "Regal sherwani with intricate embroidery. Perfect for weddings and celebrations.",
    category: "Traditional Wear",
  },

  // India - Casual Wear
  {
    id: 11,
    name: "Khadi Cotton Kurta",
    country: "India",
    price: 89,
    image: indiaKhadiKurta,
    badge: "Eco-Friendly",
    description: "Hand-spun khadi cotton kurta. Supporting traditional Indian spinning heritage.",
    category: "Casual Wear",
  },
  {
    id: 12,
    name: "Block Print Palazzo Set",
    country: "India",
    price: 135,
    image: indiaBlockPrint,
    badge: "Eco-Friendly",
    description: "Beautiful hand block-printed outfit with natural dyes from Rajasthan.",
    category: "Casual Wear",
  },

  // Bangladesh - Traditional Wear
  {
    id: 13,
    name: "Jamdani Saree",
    country: "Bangladesh",
    price: 385,
    image: bangladeshJamdani,
    badge: "Artisan Verified",
    description: "UNESCO-recognized Jamdani weaving technique. Each piece takes weeks to create.",
    category: "Traditional Wear",
  },
  {
    id: 14,
    name: "Punjabi-Pajama Set",
    country: "Bangladesh",
    price: 145,
    image: bangladeshPunjabi,
    badge: "Fair Trade",
    description: "Traditional Bangladeshi men's formal wear with fine embroidery details.",
    category: "Traditional Wear",
  },

  // Bangladesh - Casual Wear
  {
    id: 15,
    name: "Nakshi Kantha Shawl",
    country: "Bangladesh",
    price: 95,
    image: bangladeshKantha,
    badge: "Eco-Friendly",
    description: "Hand-embroidered kantha stitch shawl. Each piece tells a unique story.",
    category: "Casual Wear",
  },
  {
    id: 16,
    name: "Tant Cotton Saree",
    country: "Bangladesh",
    price: 115,
    image: bangladeshTantSaree,
    badge: "Eco-Friendly",
    description: "Lightweight handloom cotton saree. Perfect for tropical climates.",
    category: "Casual Wear",
  },

  // Russia - Traditional Wear
  {
    id: 17,
    name: "Sarafan Dress with Kokoshnik",
    country: "Russia",
    price: 315,
    image: russiaSarafan,
    badge: "Artisan Verified",
    description: "Traditional Russian folk costume with ornate headdress. Rich cultural heritage.",
    category: "Traditional Wear",
  },
  {
    id: 18,
    name: "Cossack Kaftan",
    country: "Russia",
    price: 285,
    image: russiaKaftan,
    badge: "Fair Trade",
    description: "Authentic Cossack-style kaftan with traditional embroidery patterns.",
    category: "Traditional Wear",
  },

  // Russia - Casual Wear
  {
    id: 19,
    name: "Pavlovo Posad Shawl",
    country: "Russia",
    price: 175,
    image: russiaPosadShawl,
    badge: "Artisan Verified",
    description: "Iconic Russian wool shawl with floral patterns. Warm and elegant.",
    category: "Casual Wear",
  },
  {
    id: 20,
    name: "Linen Rubakha Shirt",
    country: "Russia",
    price: 125,
    image: russiaRubakha,
    badge: "Eco-Friendly",
    description: "Traditional Russian linen shirt. Breathable and naturally antibacterial.",
    category: "Casual Wear",
  },

  // China - Traditional Wear
  {
    id: 21,
    name: "Qipao Cheongsam",
    country: "China",
    price: 295,
    image: chinaQipao,
    badge: "Artisan Verified",
    description: "Elegant silk qipao with dragon embroidery. Timeless Chinese elegance.",
    category: "Traditional Wear",
  },
  {
    id: 22,
    name: "Tang Suit",
    country: "China",
    price: 245,
    image: chinaTangSuit,
    badge: "Fair Trade",
    description: "Classic Tang-style jacket with mandarin collar. Symbol of Chinese culture.",
    category: "Traditional Wear",
  },

  // China - Casual Wear
  {
    id: 23,
    name: "Hanfu Casual Set",
    country: "China",
    price: 185,
    image: chinaHanfu,
    badge: "Eco-Friendly",
    description: "Modern interpretation of ancient Hanfu. Flowing and comfortable.",
    category: "Casual Wear",
  },
  {
    id: 24,
    name: "Silk Tai Chi Uniform",
    country: "China",
    price: 145,
    image: chinaTaiChi,
    badge: "Eco-Friendly",
    description: "Premium silk martial arts uniform. Lightweight and breathable.",
    category: "Casual Wear",
  },

  // Japan - Traditional Wear
  {
    id: 25,
    name: "Silk Kimono - Cherry Blossom",
    country: "Japan",
    price: 425,
    image: japanKimonoSakura,
    badge: "Artisan Verified",
    description: "Elegant silk kimono with sakura patterns. Hand-stitched by Kyoto artisans.",
    category: "Traditional Wear",
  },
  {
    id: 26,
    name: "Formal Hakama Set",
    country: "Japan",
    price: 385,
    image: japanHakama,
    badge: "Fair Trade",
    description: "Traditional hakama pants with matching haori jacket. Ceremonial excellence.",
    category: "Traditional Wear",
  },

  // Japan - Casual Wear
  {
    id: 27,
    name: "Yukata Cotton Kimono",
    country: "Japan",
    price: 165,
    image: japanYukata,
    badge: "Eco-Friendly",
    description: "Lightweight summer yukata with indigo dyeing. Perfect for festivals.",
    category: "Casual Wear",
  },
  {
    id: 28,
    name: "Haori Jacket",
    country: "Japan",
    price: 195,
    image: japanHaori,
    badge: "Eco-Friendly",
    description: "Traditional short jacket with crane motifs. Versatile and stylish.",
    category: "Casual Wear",
  },

  // South Korea - Traditional Wear
  {
    id: 29,
    name: "Hanbok - Royal Edition",
    country: "South Korea",
    price: 395,
    image: koreaHanbokRoyal,
    badge: "Artisan Verified",
    description: "Luxurious silk hanbok with vibrant colors. Traditional Korean elegance.",
    category: "Traditional Wear",
  },
  {
    id: 30,
    name: "Modern Hanbok Fusion",
    country: "South Korea",
    price: 285,
    image: koreaModernHanbok,
    badge: "Fair Trade",
    description: "Contemporary hanbok design blending tradition with modern aesthetics.",
    category: "Traditional Wear",
  },

  // South Korea - Casual Wear
  {
    id: 31,
    name: "Modernized Jeogori Top",
    country: "South Korea",
    price: 135,
    image: koreaJeogori,
    badge: "Eco-Friendly",
    description: "Casual hanbok-inspired top with organic cotton. Everyday elegance.",
    category: "Casual Wear",
  },
  {
    id: 32,
    name: "Ramie Linen Durumagi",
    country: "South Korea",
    price: 165,
    image: koreaDurumagi,
    badge: "Eco-Friendly",
    description: "Traditional Korean overcoat in sustainable ramie fabric. Lightweight luxury.",
    category: "Casual Wear",
  },
];
