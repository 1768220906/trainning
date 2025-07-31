import React, { useState } from 'react';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/utils/price';
import type { Product } from '@/store/products';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = React.memo(({ product }) => {
  const [selectedSize, setSelectedSize] = useState<string>('');
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    if (selectedSize) {
      addToCart(product, selectedSize);
    } else {
      alert('Please select a size');
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-card hover:-translate-y-1 transition-transform duration-300 group">
      <div className="bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4 flex flex-col items-start">
        <h2 className="text-lg font-semibold text-primary mb-1">{product.name}</h2>
        <p className="text-brand font-bold text-xl">{formatPrice(product.price)}</p>
        <div className="mt-4 w-full">
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
          >
            <option value="">Select Size</option>
            {product.sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>
        <button
          onClick={handleAddToCart}
          className="mt-4 w-full bg-white text-secondary font-bold py-2 px-4 rounded-md hover:bg-brand transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={!selectedSize}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
});

export default ProductCard;