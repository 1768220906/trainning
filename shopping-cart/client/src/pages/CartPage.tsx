
import React, { useEffect } from 'react';
import { useCartStore } from '@/store/cart';
import { formatPrice } from '@/utils/price';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, fetchCart, loading, error, clearCart } = useCartStore();

  useEffect(() => {
    fetchCart();
  }, [fetchCart]);

  const handleCheckout = () => {
    if (window.confirm('Are you sure you want to proceed to checkout?')) {
      alert('Thank you for your purchase!');
      clearCart();
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <div className="container mx-auto p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Your Cart</h1>
      {cart.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-xl text-gray-500 mb-4">Your cart is empty.</p>
          <Link to="/" className="bg-white text-secondary font-bold py-3 px-6 rounded-md hover:bg-brand transition-colors duration-300">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b border-gray-200 py-3 last:border-b-0"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div>
                    <h2 className="text-lg font-semibold text-primary">{item.name}</h2>
                    <p className="text-gray-500">Size: {item.selectedSize}</p>
                    <p className="text-brand font-bold">{formatPrice(item.price)}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    min="1"
                    value={item.quantity}
                    onChange={(e) =>
                      updateQuantity(item.id, parseInt(e.target.value), item.selectedSize)
                    }
                    className="border border-gray-300 rounded-md p-2 w-20 text-center focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-all duration-300"
                  />
                  <button
                    onClick={() => removeFromCart(item.id, item.selectedSize)}
                    className="text-gray-400 hover:text-brand transition-colors duration-300"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
            <h2 className="text-xl font-bold text-primary mb-4">Order Summary</h2>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-600">Subtotal</p>
              <p className="font-semibold">{formatPrice(totalPrice())}</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-gray-600">Shipping</p>
              <p className="font-semibold">Free</p>
            </div>
            <div className="border-t border-gray-200 my-4"></div>
            <div className="flex justify-between items-center font-bold text-xl text-primary">
              <p>Total</p>
              <p>{formatPrice(totalPrice())}</p>
            </div>
            <button
              onClick={handleCheckout}
              className="mt-6 w-full bg-white text-secondary font-bold py-3 px-4 rounded-md hover:bg-brand transition-colors duration-300"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
