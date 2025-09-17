import React from 'react';
import { TrendingUp } from 'lucide-react';

export const ProgressStrip: React.FC = () => {
  const progressPercentage = 14; // Placeholder
  const currentPrice = 0.004;
  const listingPrice = 0.008;
  const cap = 2000000;

  return (
    <section className="mb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-playmatez-gold shadow-lg">
          {/* Progress Header */}
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-playmatez-white mb-2">Presale Progress</h2>
            <div className="flex items-center justify-center space-x-2 text-sm text-playmatez-white">
              <TrendingUp className="w-4 h-4" />
              <span>Updated just now</span>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-playmatez-white">Progress: {progressPercentage}%</span>
              <span className="text-sm text-playmatez-white">Cap: ${cap.toLocaleString()}</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-playmatez-green to-playmatez-gold transition-all duration-1000 ease-out rounded-full"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>

          {/* Price Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/20 rounded-xl p-6 border border-playmatez-gold shadow-sm">
              <h3 className="text-lg font-semibold text-playmatez-white mb-2">Current Price</h3>
              <div className="text-3xl font-bold text-playmatez-gold">${currentPrice}</div>
              <p className="text-sm text-playmatez-white mt-1">Per $PLYM token</p>
            </div>
            <div className="bg-white/20 rounded-xl p-6 border border-playmatez-gold shadow-sm">
              <h3 className="text-lg font-semibold text-playmatez-white mb-2">Listing Price</h3>
              <div className="text-3xl font-bold text-playmatez-gold">${listingPrice}</div>
              <p className="text-sm text-playmatez-white mt-1">
                <span className="text-playmatez-gold font-medium">
                  {Math.round(((listingPrice - currentPrice) / currentPrice) * 100)}% potential upside
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};