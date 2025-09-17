import React from 'react';
import { TrendingUp, Gift, Shield, Users } from 'lucide-react';

export const PresaleBenefits: React.FC = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Early Advantage',
      description: 'Buy before listing to maximize upside potential with exclusive presale pricing.',
      highlight: '100% potential upside'
    },
    {
      icon: Gift,
      title: 'Exclusive Rewards',
      description: 'Loyalty staking, quarterly distributions, and premium platform perks for early supporters.',
      highlight: 'VIP access included'
    },
    {
      icon: Shield,
      title: 'Trusted Ecosystem',
      description: 'Fully audited smart contracts, transparent roadmap, and dedicated community support.',
      highlight: 'Security first'
    },
    {
      icon: Users,
      title: 'Community Power',
      description: 'Governance voting rights and exclusive member-only access to platform features.',
      highlight: 'Shape the future'
    }
  ];

  return (
    <section className="mb-20">
      <div className="container mx-auto px-4">
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-playmatez-gold shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-playmatez-white mb-4">
              Why Join the Presale?
            </h2>
            <p className="text-xl text-playmatez-white/80 max-w-2xl mx-auto">
              Secure your position in the Playmatez ecosystem with exclusive early-bird advantages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-transparent rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-playmatez-gold">
                <div className="w-12 h-12 bg-transparent border border-playmatez-gold rounded-full flex items-center justify-center mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-playmatez-white mb-3">{benefit.title}</h3>
                <p className="text-playmatez-white/80 mb-4 leading-relaxed">{benefit.description}</p>
                <div className="inline-flex items-center px-3 py-1 bg-transparent border border-playmatez-gold text-white text-sm font-medium rounded-full">
                  {benefit.highlight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};