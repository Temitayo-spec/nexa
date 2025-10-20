// components/ProductModal.tsx
'use client';

import { useState } from 'react';
import { useStore, Product } from '@/store/useStore';
import { X, Heart, ShoppingCart, Minus, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import {BasketIcon} from '@/components/shared/Icons'

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

const colorMap: Record<string, string> = {
  Silver: 'bg-gray-300',
  Black: 'bg-black',
  Gold: 'bg-yellow-500',
  'Rose gold': 'bg-rose-400',
  'Blue-green': 'bg-teal-500',
  Diamond: 'bg-blue-100',
};

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const router = useRouter();
  const { addToCart, toggleFavorite, favorites } = useStore();

  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || 'Silver'
  );
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'S');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart(product, selectedColor, selectedSize);
  };

  const handleCheckout = () => {
    addToCart(product, selectedColor, selectedSize);
    router.push('/cart');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <button
        onClick={onClose}
        className="p-2 hover:bg-gray-700 rounded-lg transition-colors"
      >
        <X size={24} className="text-gray-400" />
      </button>
      <div className="bg-[#1a1a2e] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex gap-8 h-full">
          {/* Product Image */}
          <div className="flex-1 h-full">
            <div className="bg-[#0a0a1f] flex items-center justify-center h-full">
              {product.category === 'fashion accessories' &&
              product.id === '2' ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              ) : product.category === 'Gadgets' ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={150}
                  height={150}
                  className="object-contain"
                />
              ) : (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="object-contain"
                />
              )}
            </div>
          </div>

          {/* Product Details */}

          <div className="flex-1 max-w-[29.9375rem] py-[2.19rem] px-[1.19rem] bg-[#07053E] rounded-r-2xl">
            <div className="flex flex-col items-start justify-between space-y-[1.06rem] mb-[1.81rem]">
              <h2 className="text-xl text-white max-w-[22.125rem]">
                {product.name}
              </h2>

              <p className="text-white/[46%] text-xs font-light leading-[138%]">
                {product.description}
              </p>
            </div>

            {/* Color Selection */}
            <div className="space-y-3 mb-[1.81rem]">
              <h3 className="text-xs font-light text-white">Choose colour</h3>
              <div className="flex gap-3">
                {product.colors?.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className="flex flex-col items-center gap-2 group cursor-pointer"
                  >
                    <div
                      className={`p-2 rounded-full border-2
${
  selectedColor === color
    ? 'border-white ring-2 ring-blue-500'
    : 'border-gray-600 hover:border-gray-400'
}
                        `}
                    >
                      <div
                        className={`w-4 h-4 rounded-full transition-all  ${
                          colorMap[color] || 'bg-gray-500'
                        }`}
                      />
                    </div>
                    <span className="text-xs text-white/[46%]">{color}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3 mb-[1.81rem]">
              <h3 className="text-xs font-medium text-white">Choose Size</h3>
              <div className="flex gap-5">
                {product.sizes?.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className="flex flex-col items-center gap-2 cursor-pointer"
                  >
                    <div
                      className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center text-xs  font-light transition-all ${
                        selectedSize === size
                          ? 'border-white bg-blue-600 text-white'
                          : 'border-gray-600 text-white/[46%] hover:border-gray-400'
                      }`}
                    >
                      {size}
                    </div>
                    <span className="text-xs text-white/[46%]">
                      {size === 'S' && 'Small'}
                      {size === 'M' && 'Medium'}
                      {size === 'L' && 'Large'}
                      {size === 'XL' && 'Extra-large'}
                      {size === '2XL' && 'Extra-large'}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3 mb-[4.63rem]">
              <h3 className="text-xs font-medium text-white">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-gray-600 hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                  <Minus size={18} className="text-gray-400" />
                </button>
                <div className="w-16 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-medium">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-gray-600 hover:bg-gray-700 flex items-center justify-center transition-colors"
                >
                  <Plus size={18} className="text-gray-400" />
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-4 ml-auto">
              <button
                onClick={() => toggleFavorite(product.id)}
                className="p-2 border border-nexa-border rounded-full hover:bg-gray-700 transition-colors"
              >
                <Heart
                  size={16}
                  className={
                    favorites.includes(product.id)
                      ? 'fill-red-500 text-red-500'
                      : 'text-gray-400'
                  }
                />
              </button>
              <button
                onClick={handleAddToCart}
                className="flex items-center justify-center gap-[0.625rem] py-2 px-4 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors text-xs font-light"
              >
                <span>Add to cart</span>
                <BasketIcon className="w-4" />
              </button>
              <button
                onClick={handleCheckout}
                className="flex-1 bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-medium transition-colors"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
