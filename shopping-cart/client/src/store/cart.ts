
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import apiClient from '../api';
import type { Product } from './products';

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}

type State = {
  cart: CartItem[];
  loading: boolean;
  error: string | null;
  fetchCart: () => Promise<void>;
  addToCart: (product: Product, size: string) => Promise<void>;
  removeFromCart: (productId: number, selectedSize: string) => Promise<void>;
  updateQuantity: (productId: number, quantity: number, selectedSize: string) => Promise<void>;
  clearCart: () => Promise<void>;
  totalPrice: () => number;
};

export const useCartStore = create<State>()(
  persist(
    (set, get) => ({
      cart: [],
      loading: false,
      error: null,
      fetchCart: async () => {
        set({ loading: true, error: null });
        try {
          const response = await apiClient.get('api/cart');
          set({ cart: response.data, loading: false });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          set({ error: 'Failed to fetch cart', loading: false });
        }
      },
      addToCart: async (product, size) => {
        try {
          await apiClient.post('api/cart/add', { productId: product.id, selectedSize: size });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          set({ error: 'Failed to add to cart' });
        }
      },
      removeFromCart: async (productId, selectedSize) => {
        try {
          await apiClient.post('api/cart/delete', { productId, selectedSize });
          set((state) => ({ cart: state.cart.filter((item) => item.id !== productId) }));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          set({ error: 'Failed to remove from cart' });
        }
      },
      updateQuantity: async (productId, quantity, selectedSize) => {
        try {
          await apiClient.post('api/cart/modify', { productId, quantity, selectedSize });
          set((state) => ({
            cart: state.cart.map((item) =>
              item.id === productId ? { ...item, quantity } : item
            ),
          }));
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          set({ error: 'Failed to update quantity' });
        }
      },
      totalPrice: () =>
        get().cart.reduce((total, item) => total + item.price * item.quantity, 0),
      clearCart: async () => {
        set({ loading: true, error: null });
        try {
          await apiClient.post('api/cart/clear');
          set({ cart: [], loading: false });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        } catch (error) {
          set({ error: 'Failed to clear cart', loading: false });
        }
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
