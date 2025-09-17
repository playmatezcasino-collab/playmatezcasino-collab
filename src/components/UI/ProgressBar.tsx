import React, { useEffect, useState } from 'react';
import { TrendingUp } from 'lucide-react';

interface ProgressBarProps {
  percentage: number;
  label: string;
  className?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ 
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
          // Analytics tracking for progress bar visibility
          console.log('Analytics Event: progress_bar_view', { 
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

    const element = document.getElementById('progress-bar-container');
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
      id="progress-bar-container"
      className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-playmatez-gold ${className}`}
    >
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <TrendingUp className="w-5 h-5 text-playmatez-gold" />
          <span className="text-playmatez-white font-semibold">{label}</span>
        </div>
        <span className="text-playmatez-gold font-bold text-lg">
          {animatedPercentage}%
        </span>
      </div>
      
      <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-playmatez-green to-playmatez-gold transition-all duration-2000 ease-out rounded-full"
          style={{ width: `${animatedPercentage}%` }}
        />
      </div>
      
      <div className="mt-2 text-sm text-playmatez-white/80 text-center">
        Limited time opportunity - secure your position today
      </div>
    </div>
  );
};