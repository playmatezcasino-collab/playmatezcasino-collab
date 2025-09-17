import React from 'react';
import * as LucideIcons from 'lucide-react';
import { isEmoji } from '../../utils/iconHelpers';
import type { FeatureItem } from '../../types';

interface FeatureCardProps {
  feature: FeatureItem;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ feature, className = '' }) => {
  // Convert kebab-case to PascalCase for Lucide icon names
  const getIconComponent = (iconName: string) => {
    const pascalCase = iconName
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join('');
    
    return (LucideIcons as any)[pascalCase] || LucideIcons.Circle;
  };

  const IconComponent = getIconComponent(feature.icon);

  return (
    <div className={`group bg-playmatez-grey rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-playmatez-gold/20 border border-playmatez-gold ${className}`}>
      <div className="mb-4 flex justify-center items-center h-16 relative">
        <div className="relative">
          {/* Glow effect background */}
          <div className="absolute inset-0 bg-gradient-to-r from-playmatez-green to-playmatez-gold rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg scale-150"></div>
          
          {/* Icon container with animations */}
          <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-playmatez-gold/20 to-playmatez-green/20 border border-playmatez-gold/30 group-hover:border-playmatez-gold/60 transition-all duration-500 group-hover:rotate-6 animate-float">
            {isEmoji(feature.icon) ? (
              <span 
                className="text-3xl group-hover:scale-110 transition-transform duration-500"
                role="img"
                aria-label={feature.title}
              >
                {feature.icon}
              </span>
            ) : (
              <IconComponent 
                className="w-6 h-6 text-playmatez-gold group-hover:text-playmatez-white transition-colors duration-500 group-hover:scale-110" 
                strokeWidth={2}
              />
            )}
          </div>
        </div>
      </div>
      <h3 className="text-lg font-semibold text-playmatez-white mb-2 group-hover:text-playmatez-gold transition-colors duration-300">{feature.title}</h3>
      {feature.description && (
        <p className="text-playmatez-white/80 text-sm group-hover:text-playmatez-white/90 transition-colors duration-300">{feature.description}</p>
      )}
    </div>
  );
};