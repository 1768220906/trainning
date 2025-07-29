import React, { useState, useEffect } from 'react';
import { useProductStore } from '@/store/products';
import ProductCard from '@/components/ProductCard';
import LoadingSkeleton from '@/components/LoadingSkeleton';

const HomePage: React.FC = () => {
  const { filteredProducts, filterBySize, sortByPrice } = useProductStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm">
        <div className="flex items-center space-x-4 mb-4 sm:mb-0">
          <label htmlFor="size-filter" className="text-primary font-semibold">Filter by size:</label>
          <select
            id="size-filter"
            onChange={(e) => filterBySize(e.target.value)}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
          >
            <option value="">All</option>
            <option value="S">S</option>
            <option value="M">M</option>
            <option value="L">L</option>
            <option value="XL">XL</option>
            <option value="One Size">One Size</option>
          </select>
        </div>
        <div className="flex items-center space-x-4">
          <label htmlFor="price-sort" className="text-primary font-semibold">Sort by price:</label>
          <select
            id="price-sort"
            onChange={(e) => sortByPrice(e.target.value as 'asc' | 'desc')}
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
          >
            <option value="asc">Price: Low to High</option>
            <option value="desc">Price: High to Low</option>
          </select>
        </div>
      </div>
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomePage;