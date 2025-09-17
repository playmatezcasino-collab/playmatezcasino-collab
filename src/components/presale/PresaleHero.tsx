import React from 'react';
import { Shield, Flame } from 'lucide-react';

interface PresaleHeroProps {
  children?: React.ReactNode;
}

export const PresaleHero: React.FC<PresaleHeroProps> = ({ children }) => {
  return (
    <section className="mb-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-playmatez-gold shadow-lg">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-playmatez-white mb-6 leading-tight flex items-center justify-center flex-wrap gap-4">
            <Flame className="w-8 h-8 md:w-12 md:h-12 text-playmatez-gold animate-pulse" />
            <span>Secure Your <span className="text-playmatez-gold">$PLYM</span> Tokens Now</span>
            <Flame className="w-8 h-8 md:w-12 md:h-12 text-playmatez-gold animate-pulse" />
          </h1>
          
          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-playmatez-white/80 mb-4 leading-relaxed">
            Join the Playmatez movement — early access, exclusive rewards, real utility.
          </p>
          
          {/* Trust Line */}
          <div className="flex items-center justify-center space-x-2 mb-8 text-sm text-playmatez-gold font-medium">
            <Shield className="w-4 h-4 text-playmatez-gold" />
            <span>Audited • BNB Smart Chain (BEP-20) • Investor-Friendly</span>
          </div>
          
          {/* Social Proof */}
          <p className="text-sm text-playmatez-white/60 font-medium mt-6">
            3,415 early supporters and counting.
          </p>

          {/* Tabs Content */}
          {children && (
            <div className="mt-8">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};