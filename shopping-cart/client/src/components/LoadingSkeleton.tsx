import React from 'react';

const LoadingSkeleton: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(16)].map((_, i) => (
        <div key={i} className="bg-white rounded-lg overflow-hidden shadow-card">
          <div className="animate-pulse">
            <div className="w-full h-64 bg-gray-200"></div>
            <div className="p-4">
              <div className="w-3/4 h-6 bg-gray-200 rounded mb-2"></div>
              <div className="w-1/2 h-8 bg-gray-200 rounded"></div>
              <div className="w-full h-10 bg-gray-200 rounded mt-4"></div>
              <div className="w-full h-12 bg-gray-200 rounded mt-2"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LoadingSkeleton;