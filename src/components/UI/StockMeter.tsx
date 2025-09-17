import React, { useEffect, useState } from 'react';
import { TrendingUp, Clock } from 'lucide-react';

interface StockMeterProps {
  percentage: number;
  label: string;
  className?: string;
}

export const StockMeter: React.FC<StockMeterProps> = ({ 
  percentage, 
  label, 
  className = '' 
}) => {
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Analytics tracking for stock meter visibility
          console.log('Analytics Event: stock_meter_view', { 
            percentage, 
            label,
            timestamp: new Date().toISOString()
          });
          
          // Animate the progress bar
          setTimeout(() => {
            setAnimatedPercentage(percentage);
          }, 200);
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('stock-meter-container');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [percentage, label, isVisible]);

  return (
    <div 
      id="stock-meter-container"
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-playmatez-gold ${className}`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-playmatez-gold" />
          <span className="text-playmatez-white font-semibold">{label}</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock className="w-4 h-4 text-playmatez-gold" />
          <span className="text-playmatez-gold font-bold text-lg">
            {animatedPercentage}%
          </span>
        </div>
      </div>
      
      <div className="w-full bg-white/20 rounded-full h-4 overflow-hidden mb-3">
        <div 
          className="h-full bg-gradient-to-r from-playmatez-green to-playmatez-gold transition-all duration-2000 ease-out rounded-full relative"
          style={{ width: `${animatedPercentage}%` }}
        >
          {/* Animated shine effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
      
      <div className="flex justify-between items-center text-sm">
        <span className="text-playmatez-white/80">
          Limited availability - secure your bundle today
        </span>
        <span className="text-playmatez-gold font-medium">
          {100 - animatedPercentage}% remaining
        </span>
      </div>
    </div>
  );
};