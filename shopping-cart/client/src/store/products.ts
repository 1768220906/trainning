
import { create } from 'zustand';
import { products, type Product } from '../utils/mockData';

type State = {
  products: Product[];
  filteredProducts: Product[];
  filterBySize: (size: string) => void;
  sortByPrice: (order: 'asc' | 'desc') => void;
};

export const useProductStore = create<State>((set) => ({
  products,
  filteredProducts: products,
  filterBySize: (size) =>
    set((state) => ({
      filteredProducts: state.products.filter(
        (product) => size === '' || product.sizes.includes(size)
      ),
    })),
  sortByPrice: (order) =>
    set((state) => ({
      filteredProducts: [...state.filteredProducts].sort((a, b) =>
        order === 'asc' ? a.price - b.price : b.price - a.price
      ),
    })),
}));
