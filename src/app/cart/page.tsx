// app/cart/page.tsx
'use client';

import { useState } from 'react';
import { useStore } from '@/store/useStore';
import { ArrowLeft, Trash2, Filter, ShoppingCart } from 'lucide-react';
import { useRouter } from 'next/navigation';
import ProductModal from '@/components/ui/products/ProductModal';

export default function CartPage() {
  const router = useRouter();
  const {
    cart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemsCount,
    products,
  } = useStore();

  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const recentlyViewed = products.slice(0, 1);

  return (
    <div className="min-h-screen bg-[#0a0a1f] text-white">
      {/* Header */}
      <header className="border-b border-gray-800 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold">NEXA</div>

          <div className="flex-1 max-w-xl mx-8">
            <input
              type="text"
              placeholder="Search for items and collections"
              className="w-full bg-transparent border border-gray-700 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-800 rounded-lg px-3 py-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-pink-400 rounded" />
              <span className="text-sm font-semibold">0.2 ETH</span>
            </div>
            <button className="p-2 hover:bg-gray-800 rounded-lg">
              <Filter size={20} />
            </button>
            <button className="p-2 hover:bg-gray-800 rounded-lg relative">
              <ShoppingCart size={20} />
              {getCartItemsCount() > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {getCartItemsCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Back Button and Actions */}
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
              onClick={clearCart}
              className="px-6 py-2 border border-gray-700 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Empty cart
            </button>
            <button
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
              disabled={cart.length === 0}
            >
              Checkout ({getCartItemsCount()})
            </button>
          </div>
        </div>

        {/* Cart Items */}
        {cart.length === 0 ? (
          <div className="text-center py-16">
            <ShoppingCart size={64} className="mx-auto text-gray-600 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-400 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6">Add items to get started</p>
            <button
              onClick={() => router.push('/products')}
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
                className="bg-[#1a1a2e] rounded-xl p-6 relative group hover:bg-[#222238] transition-all"
              >
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="absolute top-4 right-4 p-2 bg-red-500/10 hover:bg-red-500/20 rounded-lg transition-colors"
                >
                  <Trash2 size={18} className="text-red-500" />
                </button>

                <div className="aspect-square bg-[#0a0a1f] rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  <div className="w-full h-full flex items-center justify-center">
                    {item.category === 'fashion accessories' &&
                      index % 3 === 0 && (
                        <div className="w-24 h-24 bg-gradient-to-br from-pink-200 to-white rounded-t-full" />
                      )}
                    {item.category === 'fashion accessories' &&
                      index % 3 === 1 && (
                        <div className="w-20 h-24 bg-gray-300 rounded-full" />
                      )}
                    {(item.category === 'Gadgets' || index % 3 === 2) && (
                      <div className="w-16 h-24 bg-gray-700 rounded-2xl" />
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm text-gray-400 line-clamp-2 h-10">
                    {item.name}
                  </h3>
                  {item.selectedColor && (
                    <p className="text-xs text-gray-500">
                      Color: {item.selectedColor}
                    </p>
                  )}
                  {item.selectedSize && (
                    <p className="text-xs text-gray-500">
                      Size: {item.selectedSize}
                    </p>
                  )}
                  <p className="text-xs text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                  <div className="pt-2">
                    <span className="text-lg font-bold">{item.price}ETH</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Recently Viewed */}
        {cart.length > 0 && (
          <div>
            <h2 className="text-xl font-semibold mb-6">You also viewed</h2>
            <div className="grid grid-cols-2 gap-8">
              {/* Product Preview */}
              <div className="bg-[#1a1a2e] rounded-xl p-8">
                <div className="bg-[#0a0a1f] rounded-lg aspect-square flex items-center justify-center mb-6">
                  <div className="w-48 h-64 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-black rounded-full" />
                  </div>
                </div>
              </div>

              {/* Product Details */}
              <div className="flex flex-col justify-center space-y-6">
                <h3 className="text-2xl font-bold">
                  Retro-Chic Marathon Sneakers for Peak Performance
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Experience the ultimate in retro style and high-performance
                  with the Zephyr Runner. These sneakers combine a classic
                  design with modern technology, featuring a responsive sole for
                  maximum energy return and a breathable upper for superior
                  comfort.
                </p>

                {/* Color Selection */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Choose colour</h4>
                  <div className="flex gap-3">
                    {[
                      'Silver',
                      'Black',
                      'Gold',
                      'Rose gold',
                      'Blue-green',
                      'Diamond',
                    ].map((color) => {
                      const colorMap: Record<string, string> = {
                        Silver: 'bg-gray-300',
                        Black: 'bg-black',
                        Gold: 'bg-yellow-500',
                        'Rose gold': 'bg-rose-400',
                        'Blue-green': 'bg-teal-500',
                        Diamond: 'bg-blue-100',
                      };

                      return (
                        <div
                          key={color}
                          className="flex flex-col items-center gap-1"
                        >
                          <div
                            className={`w-8 h-8 rounded-full border border-gray-600 ${
                              colorMap[color] || 'bg-gray-500'
                            } ${
                              color === 'Silver' ? 'ring-2 ring-blue-500' : ''
                            }`}
                          />
                          <span className="text-xs text-gray-500">{color}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Size Selection */}
                <div className="space-y-3">
                  <h4 className="text-sm font-medium">Choose Size</h4>
                  <div className="flex gap-3">
                    {['S', 'M', 'L', 'XL', '2XL'].map((size) => (
                      <div
                        key={size}
                        className="flex flex-col items-center gap-1"
                      >
                        <div
                          className={`w-10 h-10 rounded-lg border flex items-center justify-center text-sm ${
                            size === 'S'
                              ? 'border-white bg-blue-600'
                              : 'border-gray-600 text-gray-400'
                          }`}
                        >
                          {size}
                        </div>
                        <span className="text-xs text-gray-500">
                          {size === 'S' && 'Small'}
                          {size === 'M' && 'Medium'}
                          {size === 'L' && 'Large'}
                          {size === 'XL' && 'Extra-large'}
                          {size === '2XL' && 'Extra-large'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
}
