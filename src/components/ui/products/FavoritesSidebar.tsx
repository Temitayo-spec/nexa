'use client';

import { Product, useStore } from '@/store/useStore';
import { X, Heart, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import { BasketIcon } from '@/components/shared/Icons';
import { toast } from 'sonner';

interface FavoritesSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FavoritesSidebar({
  isOpen,
  onClose,
}: FavoritesSidebarProps) {
  const { products, favorites, toggleFavorite, addToCart, cart } = useStore();

  const favoriteProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  const handleRemoveFavorite = (productId: string, productName: string) => {
    toggleFavorite(productId);
    toast.error('Removed from favorites', {
      description: productName,
    });
  };

  const handleAddToCart = (product: Product) => {
    const isInCart = cart.some((item) => item.id === product.id);

    if (isInCart) {
      toast.info('Already in cart', {
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
    <>
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[28rem] bg-[#07053E] z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-nexa-border">
            <div className="flex items-center gap-3">
              <Heart className="text-red-500 fill-red-500" size={24} />
              <h2 className="text-xl font-semibold">My Favorites</h2>
              {favorites.length > 0 && (
                <span className="bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-700/50 rounded-lg transition-colors"
            >
              <X size={24} className="text-gray-400" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {favoriteProducts.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <Heart size={64} className="text-gray-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-400 mb-2">
                  No favorites yet
                </h3>
                <p className="text-gray-500 text-sm">
                  Start adding items you love to your favorites
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {favoriteProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-[#060432] rounded-xl p-4 hover:bg-[#060432]/80 transition-all group"
                  >
                    <div className="flex gap-4">
                      <div className="w-24 h-24 flex-shrink-0 bg-[#07053E] rounded-lg flex items-center justify-center">
                        <Image
                          src={product.image}
                          alt={product.name}
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>

                      <div className="flex-1 flex flex-col justify-between">
                        <div>
                          <h3 className="text-sm font-medium text-white line-clamp-2 mb-2">
                            {product.name}
                          </h3>
                          <p className="text-xs text-gray-400 line-clamp-1">
                            {product.category}
                          </p>
                        </div>
                        <div className="flex items-center justify-between mt-2">
                          <span className="text-base font-semibold text-white">
                            {product.price} ETH
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2 mt-4">
                      <button
                        onClick={() => handleAddToCart(product)}
                        disabled={isProductInCart(product.id)}
                        className={`flex-1 flex items-center justify-center gap-2 py-2 px-4 rounded-lg text-xs font-light transition-all ${
                          isProductInCart(product.id)
                            ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                            : 'bg-nexa-blue hover:bg-nexa-blue/80 text-white'
                        }`}
                      >
                        <BasketIcon className="w-4 h-4" />
                        {isProductInCart(product.id)
                          ? 'In Cart'
                          : 'Add to Cart'}
                      </button>
                      <button
                        onClick={() =>
                          handleRemoveFavorite(product.id, product.name)
                        }
                        className="p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors"
                      >
                        <Heart
                          size={18}
                          className="text-red-500 fill-red-500"
                        />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {favoriteProducts.length > 0 && (
            <div className="p-6 border-t border-nexa-border">
              <button
                onClick={() => {
                  favoriteProducts.forEach((product) => {
                    if (!isProductInCart(product.id)) {
                      addToCart(product);
                    }
                  });
                  toast.success('All favorites added to cart', {
                    description: `${favoriteProducts.length} items`,
                  });
                }}
                className="w-full py-3 bg-nexa-blue hover:bg-nexa-blue/80 rounded-lg text-sm font-medium transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart size={18} />
                Add All to Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
