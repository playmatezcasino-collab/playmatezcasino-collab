import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, description }) => {
  return (
    <div className="text-center mb-16">
      <h1 className="text-4xl md:text-6xl font-bold text-playmatez-white mb-4">
        {title}
      </h1>
      {subtitle && (
        <h2 className="text-xl md:text-2xl font-medium text-playmatez-gold mb-6">
          {subtitle}
        </h2>
      )}
      {description && (
        <p className="text-lg text-playmatez-white/80 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};