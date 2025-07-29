
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { type Product } from '../utils/mockData';

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

type State = {
  cart: CartItem[];
  addToCart: (product: Product, size: string) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  totalPrice: () => number;
};

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product, size) =>
        set((state) => {
          const existingProduct = state.cart.find(
            (item) => item.id === product.id && item.selectedSize === size
          );
          if (existingProduct) {
            return {
              cart: state.cart.map((item) =>
                item.id === product.id && item.selectedSize === size
                  ? { ...item, quantity: item.quantity + 1 }
                  : item
              ),
            };
          }
          return {
            cart: [...state.cart, { ...product, quantity: 1, selectedSize: size }],
          };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        })),
      totalPrice: () =>
        get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
    }),
    {
      name: 'cart-storage', 
    }
  )
);
