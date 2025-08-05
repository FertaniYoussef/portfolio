import React from 'react';

const Loader = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        {/* Main loading animation */}
        <div className="flex space-x-2">
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="w-3 h-3 bg-accent rounded-full animate-bounce"
              style={{
                animationDelay: `${i * 0.1}s`,
                animationDuration: '1s'
              }}
            />
          ))}
        </div>
        
        {/* Loading text */}
        <div className="mt-8 text-center">
          <p className="text-accent text-lg font-mono animate-pulse">
            Loading...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loader;
