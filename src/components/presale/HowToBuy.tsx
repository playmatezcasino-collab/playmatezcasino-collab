import React from 'react';
import { Wallet, Users } from 'lucide-react';

export const HowToBuy: React.FC = () => {
  const steps = [
    {
      icon: Wallet,
      title: 'Buy with Wallet',
      description: 'Use a BSC-compatible wallet such as MetaMask or Trust Wallet. Ensure you\'re connected to the BNB Smart Chain network, then use the presale widget to choose your amount and pay directly.',
      note: 'Minimum: $50 • Maximum: $10,000'
    },
    {
      icon: Users,
      title: 'Buy Token Bundles',
      description: 'Register an account and purchase token bundles directly from your dashboard. This method provides higher rewards and additional platform benefits.',
      note: 'Available once the platform launches'
    }
  ];

  return (
    <section id="how-to-buy-section">
    <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-playmatez-gold shadow-lg">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-playmatez-white mb-4">
          How to Buy $PLYM Tokens
        </h2>
        <p className="text-xl text-playmatez-white/80">
          Choose the method that works best for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {steps.map((step, index) => (
          <div key={index} className="relative">
            {/* Step Number */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-playmatez-gold text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
              {index + 1}
            </div>
            
            {/* Card */}
            <div className="bg-white/20 rounded-xl p-6 border border-playmatez-gold h-full">
              <div className="w-12 h-12 bg-playmatez-gold/20 rounded-full flex items-center justify-center mb-4">
                <step.icon className="w-6 h-6 text-playmatez-gold" />
              </div>
              
              <h3 className="text-xl font-bold text-playmatez-white mb-3">{step.title}</h3>
              <p className="text-playmatez-white/80 mb-4 leading-relaxed">{step.description}</p>
              
              <div className="bg-playmatez-gold/20 border border-playmatez-gold rounded-lg p-3">
                <p className="text-sm text-playmatez-white font-medium">{step.note}</p>
              </div>
            </div>

            {/* Arrow (desktop only) */}
            {index < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                <div className="w-8 h-0.5 bg-playmatez-gold"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-playmatez-gold border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Important Note */}
      <div className="mt-12 bg-playmatez-gold/20 border border-playmatez-gold rounded-xl p-6">
        <h4 className="font-bold text-playmatez-white mb-2">Important:</h4>
        <p className="text-playmatez-white/80">
          All withdrawals must use BEP-20 (BSC) addresses. Sending to other networks may result in permanent loss of funds.
        </p>
      </div>
    </div>
    </section>
  );
};