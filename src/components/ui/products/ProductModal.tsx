'use client';

import { useState } from 'react';
import { useStore, Product } from '@/store/useStore';
import { X, Heart, Minus, Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BasketIcon } from '@/components/shared/Icons';
import product_pattern from '@/images/product_pattern.png';
import { toast } from 'sonner';

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
  const { addToCart, removeFromCart, toggleFavorite, favorites, cart } =
    useStore();

  const [selectedColor, setSelectedColor] = useState(
    product.colors?.[0] || 'Silver'
  );
  const [selectedSize, setSelectedSize] = useState(product.sizes?.[0] || 'S');
  const [quantity, setQuantity] = useState(1);

  const isInCart = cart.some((item) => item.id === product.id);
  const isFavorite = favorites.includes(product.id);

  const handleToggleCart = () => {
    if (isInCart) {
      removeFromCart(product.id);
      toast.error('Removed from cart', {
        description: product.name,
      });
    } else {
      addToCart(product, selectedColor, selectedSize);
      toast.success('Added to cart', {
        description: product.name,
      });
    }
  };

  const handleCheckout = () => {
    if (!isInCart) {
      addToCart(product, selectedColor, selectedSize);
    }
    toast.success('Proceeding to checkout', {
      description: product.name,
    });
    router.push('/cart');
    onClose();
  };

  const handleToggleFavorite = () => {
    toggleFavorite(product.id);
    if (isFavorite) {
      toast.error('Removed from favorites', {
        description: product.name,
      });
    } else {
      toast.success('Added to favorites', {
        description: product.name,
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-white/10 backdrop-blur-sm flex flex-col justify-center z-50 p-4">
      <div className="max-w-4xl mx-auto w-full flex justify-end mb-4">
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-700 rounded-full transition-colors cursor-pointer"
        >
          <X size={24} className="text-gray-400" />
        </button>
      </div>
      <div className="bg-[#1a1a2e] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto mx-auto">
        <div className="flex h-full">
          <div className="flex-1 flex items-center justify-center relative">
            <Image
              src={product_pattern}
              alt="pattern"
              className="absolute inset-0 w-full h-full object-cover rounded-l-2xl"
            />
            <div>
              {product.category === 'fashion accessories' &&
              product.id === '2' ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={470}
                  className="object-contain"
                />
              ) : product.category === 'Gadgets' ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={470}
                  className="object-contain"
                />
              ) : (
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={470}
                  className="object-contain"
                />
              )}
            </div>
          </div>


          <div className="flex-1 max-w-[29.9375rem] py-[2.19rem] px-[1.19rem] bg-[#07053E] rounded-r-2xl flex flex-col">
            <div className="flex flex-col items-start justify-between space-y-[1.06rem] mb-[1.81rem]">
              <h2 className="text-xl text-white max-w-[22.125rem]">
                {product.name}
              </h2>

              <p className="text-white/[46%] text-xs font-light leading-[138%]">
                {product.description}
              </p>
            </div>

            <div className="space-y-3 mb-[1.81rem]">
              <h3 className="text-xs font-light text-white">Choose colour</h3>
              <div className="flex gap-3 justify-between">
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
                                ? 'border-white ring-2 ring-nexa-blue'
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

            <div className="space-y-3 mb-[1.81rem]">
              <h3 className="text-xs font-medium text-white">Choose Size</h3>
              <div className="flex gap-3 justify-between">
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

            <div className="space-y-3 mb-[4.63rem]">
              <h3 className="text-xs font-medium text-white">Quantity</h3>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-gray-600 hover:bg-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Minus size={18} className="text-gray-400" />
                </button>
                <div className="w-16 h-10 rounded-lg bg-blue-600 flex items-center justify-center font-medium">
                  {quantity}
                </div>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 rounded-lg border border-gray-600 hover:bg-gray-700 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <Plus size={18} className="text-gray-400" />
                </button>
              </div>
            </div>

            <div className="flex gap-4 ml-auto">
              <button
                onClick={handleToggleFavorite}
                className={`p-2 px-3 border rounded-full transition-all cursor-pointer ${
                  isFavorite
                    ? 'border-red-500 bg-red-500/20 hover:bg-red-500/30'
                    : 'border-nexa-border hover:bg-gray-700'
                }`}
              >
                <Heart
                  size={16}
                  className={`transition-all ${
                    isFavorite
                      ? 'fill-red-500 text-red-500 scale-110'
                      : 'text-gray-400'
                  }`}
                />
              </button>
              <button
                onClick={handleToggleCart}
                className={`flex items-center justify-center gap-[0.625rem] py-2 px-[1.8125rem] border-[0.5px] rounded-[2.5rem] transition-all text-xs font-light cursor-pointer ${
                  isInCart
                    ? 'border-red-500 bg-red-500/20 hover:bg-red-500/30 text-red-400'
                    : 'border-nexa-border hover:bg-gray-700'
                }`}
              >
                <span>{isInCart ? 'Remove from cart' : 'Add to cart'}</span>
                <BasketIcon
                  className={`w-4 ${isInCart ? 'text-red-400' : ''}`}
                />
              </button>
              <button
                onClick={handleCheckout}
                className="flex items-center justify-center gap-[0.625rem] py-2 px-[1.8125rem] bg-nexa-blue hover:bg-nexa-blue/80 rounded-[2.5rem] transition-colors text-xs font-light cursor-pointer"
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
