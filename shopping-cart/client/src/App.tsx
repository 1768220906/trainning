
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { useCartStore } from "@/store/cart";
import AppRoutes from '@/components/AppRoutes';

const App: React.FC = () => {
  const { cart } = useCartStore();

  return (
    <BrowserRouter>
      <header className="bg-white text-secondary sticky top-0 z-10 shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <Link
            to="/home"
            className="text-2xl font-bold hover:text-brand transition-colors duration-300"
          >
            Shop
          </Link>
          <Link
            to="/cart"
            className="flex items-center space-x-2 hover:text-brand transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            <span>Cart ({cart.length})</span>
          </Link>
        </nav>
      </header>
      <main className="bg-secondary">
        <AppRoutes />
      </main>
    </BrowserRouter>
  );
};

export default App;
