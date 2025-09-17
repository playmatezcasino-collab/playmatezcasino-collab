import React from 'react';

export const LoadingScreen: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-playmatez-green/90 backdrop-blur-sm animate-fade-in">
      {/* Visually hidden text for screen readers */}
      <span className="sr-only" role="status" aria-live="polite">
        Loading
      </span>
      
      {/* Loading image with animation */}
      <div className="flex flex-col items-center">
        <img
          src="/PLAYMATEZ_flame copy copy.png"
          alt="Loading"
          className="w-16 h-16 md:w-24 md:h-24 lg:w-32 lg:h-32 object-contain animate-flame-lift-off"
          loading="eager"
        />
      </div>
    </div>
  );
};