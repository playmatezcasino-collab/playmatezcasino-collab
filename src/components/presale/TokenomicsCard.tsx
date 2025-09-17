import React from 'react';
import { ExternalLink, Coins } from 'lucide-react';

export const TokenomicsCard: React.FC = () => {
  const tokenomicsData = [
    { label: 'Token', value: '$PLYM' },
    { label: 'Chain', value: 'BNB Smart Chain (BEP-20)' },
    { label: 'Presale Price', value: '$0.004' },
    { label: 'Listing Price', value: '$0.008' },
    { label: 'Total Supply', value: '1,000,000,000 PLYM' },
    { label: 'Presale Allocation', value: '25% (250M tokens)' }
  ];

  const utilities = [
    'Casino platform integration',
    'Governance voting rights',
    'Staking rewards program',
    'Loyalty and cashback benefits',
    'Exclusive platform features'
  ];

  return (
    <section id="tokenomics" className="mb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-playmatez-gold shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-playmatez-white mb-4">
              $PLYM Tokenomics Snapshot
            </h2>
            <p className="text-xl text-playmatez-white/80">
              Built for utility, designed for growth, engineered for the community.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Token Details */}
            <div className="bg-white/20 rounded-xl p-8 border border-playmatez-gold shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-playmatez-gold/20 rounded-full flex items-center justify-center mr-4">
                  <Coins className="w-6 h-6 text-playmatez-gold" />
                </div>
                <h3 className="text-2xl font-bold text-playmatez-white">Token Details</h3>
              </div>
              
              <div className="space-y-4">
                {tokenomicsData.map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-white/20 last:border-b-0">
                    <span className="text-playmatez-white/80 font-medium">{item.label}:</span>
                    <span className={`font-semibold ${
                      item.label.includes('Price') ? 'text-playmatez-gold' : 'text-playmatez-white'
                    }`}>{item.value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Utility Features */}
            <div className="bg-white/20 rounded-xl p-8 border border-playmatez-gold shadow-sm">
              <h3 className="text-2xl font-bold text-playmatez-white mb-6">Token Utility</h3>
              <div className="space-y-4">
                {utilities.map((utility, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-playmatez-gold rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-playmatez-white/80">{utility}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <button className="inline-flex items-center text-playmatez-gold hover:text-playmatez-white font-medium transition-colors duration-200">
                  View Full Tokenomics
                  <ExternalLink className="ml-2 w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};