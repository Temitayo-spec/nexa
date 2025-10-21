'use client';

import { useState } from 'react';
import { Product, useStore } from '@/store/useStore';
import { ArrowLeft, Trash2, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ProductModal from '@/components/ui/products/ProductModal';
import Image from 'next/image';
import { BasketIcon, ListHeart } from '@/components/shared/Icons';
import { toast } from 'sonner';
import FavoritesSidebar from '@/components/ui/products/FavoritesSidebar';

export default function CartPage() {
  const router = useRouter();
  const {
    cart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemsCount,
   // products,
    favorites,
  } = useStore();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleRemoveFromCart = (productId: string, productName: string) => {
    removeFromCart(productId);
    toast.error('Removed from cart', {
      description: productName,
    });
  };

  const handleClearCart = () => {
    clearCart();
    toast.success('Cart cleared', {
      description: 'All items have been removed',
    });
  };

  const handleCheckout = () => {
    toast.success('Proceeding to checkout', {
      description: `${getCartItemsCount()} items - ${getCartTotal().toFixed(
        2
      )} ETH`,
    });
  };

  const [isFavoritesSidebarOpen, setIsFavoritesSidebarOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white">
      <FavoritesSidebar
        isOpen={isFavoritesSidebarOpen}
        onClose={() => setIsFavoritesSidebarOpen(false)}
      />
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
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer relative">
              <ListHeart />
              {favorites.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {favorites.length}
                </span>
              )}
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg transition-colors cursor-pointer relative">
              <BasketIcon />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => router.back()}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={20} />
            <span>My Cart</span>
          </button>

          <div className="flex gap-4">
            <button
              onClick={handleClearCart}
              disabled={cart.length === 0}
              className="flex items-center justify-center gap-[0.625rem] py-2 px-[1.8125rem] border-[0.5px] border-nexa-border rounded-[2.5rem] hover:bg-gray-700 transition-colors text-xs font-light cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Empty cart
            </button>
            <button
              onClick={handleCheckout}
              className="flex items-center justify-center gap-[0.625rem] py-2 px-[1.8125rem] bg-nexa-blue hover:bg-nexa-blue/80 rounded-[2.5rem] transition-colors text-xs font-light cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={cart.length === 0}
            >
              Checkout ({getCartItemsCount()})
            </button>
          </div>
        </div>

        {cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart size={64} className="mx-auto text-gray-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-400 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6">Add items to get started</p>
            <button
              onClick={() => router.push('/marketplace')}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-4 gap-6 mb-12">
            {cart.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="bg-[#060432] rounded-2xl hover:bg-[#060432]/90 hover:-translate-y-4 transition-all ease-in-out group relative"
              >
                <button
                  onClick={() => handleRemoveFromCart(item.id, item.name)}
                  className="absolute top-4 right-4 p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors cursor-pointer z-10"
                >
                  <Trash2 size={18} className="text-white hover:text-red-500" />
                </button>

                <div className="relative mb-4">
                  <div className="aspect-square flex items-center justify-center">
                    <div className="w-full h-full flex items-center justify-center">
                      {item.category === 'fashion accessories' &&
                        index % 3 === 0 && (
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={150}
                            height={150}
                            className="object-contain h-[9.375rem] w-full"
                            quality={100}
                          />
                        )}
                      {item.category === 'fashion accessories' &&
                        index % 3 === 1 && (
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={150}
                            height={150}
                            className="object-contain h-[9.375rem] w-full"
                            quality={100}
                          />
                        )}
                      {(item.category === 'Gadgets' || index % 3 === 2) && (
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={150}
                          height={150}
                          className="object-contain h-[9.375rem] w-full"
                          quality={100}
                        />
                      )}
                    </div>
                  </div>
                </div>

                <div className="space-y-[1.53rem] px-[0.69rem] py-[2.37rem] rounded-b-2xl bg-[#07053E]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs text-white line-clamp-2 max-w-[12rem]">
                      {item.name}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-base font-semibold">
                      {item.price}ETH
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
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
