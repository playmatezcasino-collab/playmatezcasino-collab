import React from 'react';
import { Shield, CheckCircle, Globe, Users } from 'lucide-react';

export const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: Shield,
      title: 'Security Audit Verified',
      description: 'Smart contract audited'
    },
    {
      icon: CheckCircle,
      title: 'BSC BEP-20',
      description: 'Binance Smart Chain'
    },
    {
      icon: Users,
      title: 'KYC Required',
      description: 'Identity verification'
    },
    {
      icon: Globe,
      title: 'Global Access*',
      description: 'Worldwide availability'
    }
  ];

  return (
    <section className="mb-20">
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-playmatez-gold shadow-lg max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6"> 
            {badges.map((badge, index) => {
              const IconComponent = badge.icon;
              return (
                <div key={index} className="text-center"> 
                  <div className="w-12 h-12 bg-transparent border border-playmatez-gold rounded-full flex items-center justify-center mx-auto mb-3"> 
                    <IconComponent className="w-6 h-6 text-white" /> 
                  </div> 
                  <h3 className="font-semibold text-playmatez-white text-sm mb-1">{badge.title}</h3> 
                  <p className="text-xs text-playmatez-white/80">{badge.description}</p> 
                </div>
              );
            })}
          </div>
          <p className="text-center text-xs text-playmatez-gold mt-8 font-medium">
            *Subject to regional restrictions.
          </p>
        </div>
      </div>
    </section>
  );
};