import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Crown } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import type { BundleItem } from '../types';

interface BundleCardProps {
  bundle: BundleItem;
  className?: string;
}

export const BundleCard: React.FC<BundleCardProps> = ({ bundle, className = '' }) => {
  const navigate = useNavigate();

  // Helper function to get Lucide icon component
  const getIconComponent = (iconName: string) => {
    const pascalCase = iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    return (LucideIcons as any)[pascalCase] || LucideIcons.Circle;
  };

  const IconComponent = getIconComponent(bundle.icon);
  const potentialUpside = Math.round(((bundle.listingPrice - bundle.prelaunchPrice) / bundle.prelaunchPrice) * 100);

  const handleBuyBundle = () => {
    console.log('Analytics Event: bundle_buy_click', { bundle: bundle.name });
    navigate(`/contact?category=bundles&productName=${encodeURIComponent(bundle.name)}`);
  };

  return (
    <div 
      className={`relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
        bundle.isPopular ? 'transform scale-105' : ''
      } ${className}`}
      onClick={handleBuyBundle}
      data-analytics-event="bundle_card_click"
      data-bundle={bundle.name}
    >
      {/* Most Popular Badge */}
      {bundle.isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <div className="bg-playmatez-gold text-white px-4 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
            <Crown className="w-4 h-4 mr-1" />
            Most Popular
          </div>
        </div>
      )}

      <div className={`bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border-2 transition-all duration-300 hover:bg-white/15 hover:shadow-xl h-full flex flex-col ${
        bundle.isPopular ? 'border-playmatez-gold shadow-lg shadow-playmatez-gold/20 mt-4' : 'border-white/20 hover:border-playmatez-gold/50'
      }`}>

        {/* Bundle Header */}
        <div className={`text-center mb-6 ${bundle.isPopular ? 'mt-2' : ''}`}>
          {/* Bundle Badge */}
          <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${bundle.badgeColor} flex items-center justify-center shadow-lg`}>
            <IconComponent className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          
          <h3 className="text-2xl font-bold text-playmatez-white mb-2">{bundle.name}</h3>
          <p className="text-playmatez-white/60 text-sm mb-4">{bundle.description}</p>
          
          {/* Token Amount */}
          <div className="text-3xl font-bold text-playmatez-gold mb-2">
            {bundle.tokenAmount}
          </div>
          <div className="text-playmatez-gold text-sm font-medium mb-4">
            {bundle.bonusPercentage}
          </div>
        </div>

        {/* Price Information */}
        <div className="mb-6 flex-1">
          <div className="text-center mb-4">
            <div className="text-2xl font-bold text-playmatez-white mb-1">
              €{bundle.price.toLocaleString()}
            </div>
            <p className="text-playmatez-white/60 text-sm">(Pre-Launch Price)</p>
          </div>

          {/* Price Comparison */}
          <div className="bg-white/5 rounded-lg p-4 border border-playmatez-gold/30">
            <div className="flex justify-between items-center text-sm">
              <span className="text-playmatez-white/80">Pre-launch:</span>
              <span className="text-playmatez-white font-medium">€{bundle.prelaunchPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between items-center text-sm mt-2">
              <span className="text-playmatez-white/80">Expected value:</span>
              <span className="text-playmatez-gold font-medium">€{bundle.listingPrice.toLocaleString()}</span>
            </div>
            <div className="mt-3 pt-3 border-t border-white/20">
              <div className="text-center">
                <span className="text-playmatez-gold font-bold text-lg">
                  {potentialUpside}% Potential Upside
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-auto">
          <button
            onClick={handleBuyBundle}
            className={`w-full py-4 px-6 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 ${
              bundle.isPopular
                ? 'bg-playmatez-gold text-white hover:bg-playmatez-gold/80'
                : 'bg-white/10 text-playmatez-white border border-playmatez-gold hover:bg-playmatez-gold hover:text-white'
            }`}
          >
            Buy Bundle
          </button>
        </div>
      </div>
    </div>
  );
};