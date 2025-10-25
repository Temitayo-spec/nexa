'use client';

import { useState } from 'react';
import { Product, useStore } from '@/store/useStore';
import { Heart, Filter } from 'lucide-react';
import ProductModal from '@/components/ui/products/ProductModal';
import Image from 'next/image';
import { BasketIcon, CaretDown, ListHeart } from '@/components/shared/Icons';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import FavoritesSidebar from '@/components/ui/products/FavoritesSidebar';

const categories = [
  'All categories',
  'Gadgets',
  'fashion accessories',
  'Clothes',
  'Home',
  'Sports',
  'Health and fitness',
  'Music',
  'Gaming',
];

export default function ProductsPage() {
  const {
    products,
    selectedCategory,
    setSelectedCategory,
    favorites,
    toggleFavorite,
    cart,
    addToCart,
    removeFromCart,
    getCartItemsCount,
  } = useStore();

  const router = useRouter();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showPriceRange, setShowPriceRange] = useState(false);
  const [showBrands, setShowBrands] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [isFavoritesSidebarOpen, setIsFavoritesSidebarOpen] = useState<boolean>(false);

  // ✅ New toggle state
  const [isSeller, setIsSeller] = useState(false);

  const toggleMode = () => {
    if (isSeller) {
      router.push('/marketplace');
    } else {
      router.push('/dashboard/sellers');
    }
    setIsSeller(!isSeller);
  };

  const filteredProducts =
    selectedCategory === 'All categories'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const displayProducts = [...filteredProducts, ...filteredProducts];

  const handleToggleFavorite = (productId: string, productName: string) => {
    const isFavorite = favorites.includes(productId);
    toggleFavorite(productId);

    if (isFavorite) {
      toast.error('Removed from favorites', {
        description: productName,
      });
    } else {
      toast.success('Added to favorites', {
        description: productName,
      });
    }
  };

  const handleAddToCart = (product: Product) => {
    const isInCart = cart.some((item) => item.id === product.id);

    if (isInCart) {
      removeFromCart(product.id);
      toast.error('Removed from cart', {
        description: product.name,
      });
    } else {
      addToCart(product);
      toast.success('Added to cart', {
        description: product.name,
      });
    }
  };

  const isProductInCart = (productId: string) => {
    return cart.some((item) => item.id === productId);
  };

  return (
    <div className="min-h-screen bg-nexa-deep-blue text-white">
      <FavoritesSidebar isOpen={isFavoritesSidebarOpen} onClose={() => setIsFavoritesSidebarOpen(false)} />

      {/* ======= HEADER ======= */}
      <header className="border-b-[0.5px] border-nexa-border px-6 py-4">
        <div className="wrapper max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-[1.08206rem] font-semibold leading-[120%] inline-flex items-center">
            <Image
              src="/images/nexa_logo.png"
              alt="Nexa Logo"
              width={40}
              height={40}
            />
            EXA
          </div>

          <div className="flex-1 max-w-xl mx-8">
            <input
              type="text"
              placeholder="Search for items and collections"
              className="max-w-[28.5625rem] w-full bg-transparent border border-nexa-border rounded-[0.25rem] p-[0.625rem] text-sm focus:outline-none focus:border-nexa-copyright-blue transition-colors placeholder:text-nexa-border placeholder:font-light"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-[0.625rem] bg-transparent rounded-sm p-[0.625rem] border border-nexa-border">
              <div className="w-6 h-6 overflow-hidden">
                <Image
                  src="/images/profile.png"
                  alt="Profile"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
              <span className="text-base font-light">0.2 ETH</span>
            </div>

            <button
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer relative"
              onClick={() => setIsFavoritesSidebarOpen(true)}
            >
              <ListHeart />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>

            <button
              className="p-2 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer relative"
              onClick={() => router.push('/cart')}
            >
              <BasketIcon />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </button>

            {/* ✅ Become a Seller toggle */}
            <button
              onClick={toggleMode}
              className="ml-4 bg-[#004CEB] hover:bg-[#003bbd] text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
            >
              {isSeller ? 'Go to Marketplace' : 'Become a Seller'}
            </button>
          </div>
        </div>
      </header>

      {/* ======= CATEGORIES ======= */}
      <div className="py-[2.06rem] wrapper flex items-center justify-between gap-4">
        <div className="space-x-[0.6875rem] flex items-center ">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`w-auto inline-flex items-center justify-center text-xs px-4 py-2 rounded-[2.5rem] transition-colors cursor-pointer ${
                selectedCategory === category
                  ? 'bg-nexa-blue text-white'
                  : 'text-gray-400 bg-[#07053E] hover:bg-gray-800/50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <button className="flex items-center gap-[0.625rem] p-[0.625rem] border-[0.5px] border-nexa-border rounded-sm hover:bg-gray-800/50 transition-colors cursor-pointer">
          <span>Filter</span>
          <Filter size={18} />
        </button>
      </div>

      {/* ======= PRODUCTS ======= */}
      <div className="wrapper mx-auto px-6 py-8">
        <div className="flex gap-8">
          <aside className="w-64 space-y-6">
            {/* Price Range Filter */}
            <div className="space-y-4">
              <div className="bg-[#07053E] rounded-[0.5rem] py-[0.8125rem] px-[0.9375rem]">
                <button
                  onClick={() => setShowPriceRange(!showPriceRange)}
                  className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors text-xs cursor-pointer"
                >
                  <span>Price range</span>
                  <span>
                    {showPriceRange ? (
                      <CaretDown className="rotate-180" />
                    ) : (
                      <CaretDown />
                    )}
                  </span>
                </button>

                {showPriceRange && (
                  <div className="mt-4 space-y-4 animate-in slide-in-from-top-2">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>${priceRange[0]}</span>
                        <span>${priceRange[1]}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="100"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([
                            priceRange[0],
                            parseInt(e.target.value),
                          ])
                        }
                        className="w-full h-1 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-nexa-copyright-blue"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([
                            parseInt(e.target.value) || 0,
                            priceRange[1],
                          ])
                        }
                        className="bg-gray-800 border border-nexa-border rounded px-3 py-2 text-sm focus:outline-none focus:border-nexa-copyright-blue"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([
                            priceRange[0],
                            parseInt(e.target.value) || 100,
                          ])
                        }
                        className="bg-gray-800 border border-nexa-border rounded px-3 py-2 text-sm focus:outline-none focus:border-nexa-copyright-blue"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* Brands */}
              <div className="bg-[#07053E] rounded-[0.5rem] py-[0.8125rem] px-[0.9375rem]">
                <button
                  onClick={() => setShowBrands(!showBrands)}
                  className="flex items-center justify-between w-full text-left text-gray-300 hover:text-white transition-colors text-xs cursor-pointer"
                >
                  <span>Brands</span>
                  <span>
                    {showBrands ? (
                      <CaretDown className="rotate-180" />
                    ) : (
                      <CaretDown />
                    )}
                  </span>
                </button>

                {showBrands && (
                  <div className="mt-4 space-y-3 animate-in slide-in-from-top-2">
                    {['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance'].map(
                      (brand) => (
                        <label
                          key={brand}
                          className="flex items-center gap-2 cursor-pointer group"
                        >
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-gray-700 bg-gray-800 text-nexa-copyright-blue focus:ring-nexa-copyright-blue focus:ring-offset-0"
                          />
                          <span className="text-sm text-gray-400 group-hover:text-gray-300">
                            {brand}
                          </span>
                        </label>
                      )
                    )}
                  </div>
                )}
              </div>
            </div>
          </aside>

          {/* Product Cards */}
          <main className="flex-1">
            <div className="grid grid-cols-3 gap-6">
              {displayProducts.map((product, index) => (
                <div
                  key={`${product.id}-${index}`}
                  className="bg-[#060432] rounded-2xl hover:bg-[#060432]/90 hover:-translate-y-4 transition-all ease-in-out group"
                >
                  <div className="relative mb-4">
                    <div className="aspect-square flex items-center justify-center">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={150}
                        height={150}
                        className="object-contain h-[9.375rem] w-full"
                        quality={100}
                      />
                    </div>
                    <button
                      onClick={() =>
                        handleToggleFavorite(product.id, product.name)
                      }
                      className={`absolute top-[0.87rem] right-[0.81rem] rounded-full transition-all cursor-pointer p-2 ${
                        favorites.includes(product.id)
                          ? 'bg-red-500/20 hover:bg-red-500/30'
                          : 'bg-[#07053E] hover:bg-gray-700'
                      }`}
                    >
                      <Heart
                        size={16}
                        className={`w-4 h-4 transition-all ${
                          favorites.includes(product.id)
                            ? 'fill-red-500 text-red-500 scale-110'
                            : 'text-gray-400'
                        }`}
                      />
                    </button>
                  </div>

                  <div className="space-y-[1.53rem] px-[0.69rem] py-[2.37rem] rounded-b-2xl bg-[#07053E]">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xs text-white line-clamp-2 max-w-[12rem]">
                        {product.name}
                      </h3>

                      <button
                        onClick={() => handleAddToCart(product)}
                        className={`flex items-center justify-center p-2 rounded-full cursor-pointer transition-all ${
                          isProductInCart(product.id)
                            ? 'bg-red-500/20 hover:bg-red-500/30'
                            : 'bg-[#060432] hover:bg-gray-700'
                        }`}
                      >
                        <BasketIcon
                          className={`w-4 h-4 ${
                            isProductInCart(product.id) ? 'text-red-500' : ''
                          }`}
                        />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-base font-semibold">
                        {product.price}ETH
                      </span>
                      <button
                        onClick={() => setSelectedProduct(product)}
                        className="bg-nexa-blue hover:bg-nexa-blue/80 px-4 py-2 rounded-[2.5rem] transition-colors text-xs cursor-pointer"
                      >
                        Buy
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}