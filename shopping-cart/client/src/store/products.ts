
import { create } from 'zustand';
import apiClient from '../api';

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  sizes: string[];
}

type State = {
  products: Product[];
  filteredProducts: Product[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  pageSize: number;
  currentSize: string;
  currentSort: 'asc' | 'desc';
  totalProducts: number;
  fetchProducts: (options?: { page?: number; pageSize?: number; size?: string; sort?: 'asc' | 'desc' }) => Promise<void>;
  filterBySize: (size: string) => void;
  sortByPrice: (order: 'asc' | 'desc') => void;
};

export const useProductStore = create<State>((set, get) => ({
  products: [],
  filteredProducts: [],
  loading: false,
  error: null,
  currentPage: 1,
  pageSize: 16, // Display at least 16 products
  currentSize: '',
  currentSort: 'asc',
  totalProducts: 0,
  fetchProducts: async (options) => {
    set({ loading: true, error: null });
    const { page, pageSize, size, sort } = { ...get(), ...options };
    try {
      const response = await apiClient.get('api/products', {
        params: {
          page,
          pageSize,
          size,
          sort,
        },
      });
      set({
        products: response.data.products,
        filteredProducts: response.data.products,
        totalProducts: response.data.total,
        currentPage: response.data.page,
        pageSize: response.data.pageSize,
        loading: false,
      });
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      set({ error: 'Failed to fetch products', loading: false });
    }
  },
  filterBySize: (size) => {
    set({ currentSize: size });
    get().fetchProducts({ size });
  },
  sortByPrice: (order) => {
    set({ currentSort: order });
    get().fetchProducts({ sort: order });
  },
}));
