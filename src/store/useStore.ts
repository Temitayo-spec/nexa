import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  colors?: string[];
  sizes?: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedColor?: string;
  selectedSize?: string;
}

interface StoreState {
  products: Product[];
  selectedCategory: string;
  favorites: string[];

  cart: CartItem[];

  setSelectedCategory: (category: string) => void;
  toggleFavorite: (productId: string) => void;
  addToCart: (product: Product, color?: string, size?: string) => void;
  removeFromCart: (productId: string) => void;
  updateCartItemQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;

  getCartTotal: () => number;
  getCartItemsCount: () => number;
}

const initialProducts: Product[] = [
  {
    id: '1',
    name: 'Retro-Chic Marathon Sneakers for Peak Performance',
    description:
      'Experience the ultimate in retro style and high-performance with the Zephyr Runner. These sneakers combine a classic design with modern technology, featuring a responsive sole for maximum energy return and a breathable upper for superior comfort.',
    price: 0.06,
    image: '/images/sneakers.png',
    category: 'fashion accessories',
    colors: ['Silver', 'Black', 'Gold', 'Rose gold', 'Blue-green', 'Diamond'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
  },
  {
    id: '2',
    name: 'Retro-Chic Marathon Sneakers for Peak Performance',
    description: 'Premium luxury watch with chronograph functionality',
    price: 0.06,
    image: '/images/watch.png',
    category: 'fashion accessories',
    colors: ['Silver', 'Black', 'Gold', 'Rose gold', 'Blue-green', 'Diamond'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
  },
  {
    id: '3',
    name: 'Retro-Chic Marathon Sneakers for Peak Performance',
    description: 'Professional smartphone with advanced features',
    price: 0.06,
    image: '/images/iphone.png',
    category: 'Gadgets',
    colors: ['Silver', 'Black', 'Gold', 'Rose gold', 'Blue-green', 'Diamond'],
    sizes: ['S', 'M', 'L', 'XL', '2XL'],
  },
];

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      products: initialProducts,
      selectedCategory: 'All categories',
      favorites: [],
      cart: [],

      setSelectedCategory: (category) => set({ selectedCategory: category }),

      toggleFavorite: (productId) =>
        set((state) => ({
          favorites: state.favorites.includes(productId)
            ? state.favorites.filter((id) => id !== productId)
            : [...state.favorites, productId],
        })),

      addToCart: (product, color, size) =>
        set((state) => {
          const existingItem = state.cart.find(
            (item) =>
              item.id === product.id &&
              item.selectedColor === color &&
              item.selectedSize === size
          );

          if (existingItem) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id &&
                item.selectedColor === color &&
                item.selectedSize === size
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }

          return {
            cart: [
              ...state.cart,
              {
                ...product,
                quantity: 1,
                selectedColor: color,
                selectedSize: size,
              },
            ],
          };
        }),

      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),

      updateCartItemQuantity: (productId, quantity) =>
        set((state) => ({
          cart:
            quantity <= 0
              ? state.cart.filter((item) => item.id !== productId)
              : state.cart.map((item) =>
                  item.id === productId ? { ...item, quantity } : item
                ),
        })),

      clearCart: () => set({ cart: [] }),

      getCartTotal: () => {
        const state = get();
        return state.cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        );
      },

      getCartItemsCount: () => {
        const state = get();
        return state.cart.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'nexa-store',
    }
  )
);
