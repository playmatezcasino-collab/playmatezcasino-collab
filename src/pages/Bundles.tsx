import React from 'react';
import { ArrowRight, Gift, TrendingUp, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/UI/PageHeader';
import { BundleCard } from '../components/BundleCard';
import { StockMeter } from '../components/UI/StockMeter';
import { tokenBundles } from '../data/content';

export const Bundles: React.FC = () => {
  return (
    <div className="min-h-screen section-with-top-shade">
      <div className="container mx-auto px-4 py-20">
        <PageHeader
          title="Choose Your Token Bundle"
          subtitle="Maximize Your $PLYM Investment"
          description="Get exclusive bonus tokens, better pricing, and priority access to platform features with our carefully designed investment bundles."
        />

        {/* Stock Meter for Scarcity */}
        <section className="mb-20">
          <StockMeter 
            percentage={72} 
            label="Bundle Allocation Claimed"
            className="max-w-4xl mx-auto"
          />
        </section>

        {/* Token Bundles Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tokenBundles.map((bundle, index) => (
              <BundleCard key={index} bundle={bundle} />
            ))}
          </div>
        </section>

        {/* Why Choose Token Bundles */}
        <section className="mb-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-playmatez-gold/30">
            <h2 className="text-3xl font-bold text-playmatez-white text-center mb-8">
              Why Choose Token Bundles?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-playmatez-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-6 h-6 text-playmatez-gold" />
                </div>
                <h3 className="text-lg font-bold text-playmatez-white mb-2">Bonus Tokens</h3>
                <p className="text-playmatez-white/80 text-sm">Get up to 30% bonus tokens with larger bundles</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-playmatez-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-6 h-6 text-playmatez-gold" />
                </div>
                <h3 className="text-lg font-bold text-playmatez-white mb-2">Better Value</h3>
                <p className="text-playmatez-white/80 text-sm">Pre-launch pricing with significant upside potential</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-playmatez-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-playmatez-gold" />
                </div>
                <h3 className="text-lg font-bold text-playmatez-white mb-2">Priority Access</h3>
                <p className="text-playmatez-white/80 text-sm">Early platform access and exclusive features</p>
              </div>
            </div>
          </div>
        </section>

        {/* Investment Benefits */}
        <section className="mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-playmatez-gold">
            <h2 className="text-3xl font-bold text-playmatez-white text-center mb-8">
              Investment Benefits
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-playmatez-gold mb-4">Immediate Benefits</h3>
                <ul className="space-y-3 text-playmatez-white/90">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-playmatez-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Bonus tokens added to your allocation
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-playmatez-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Pre-launch pricing advantage
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-playmatez-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Priority access to platform features
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-playmatez-gold mb-4">Long-term Value</h3>
                <ul className="space-y-3 text-playmatez-white/90">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-playmatez-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Revenue sharing from platform profits
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-playmatez-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Governance voting rights
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-playmatez-gold rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    Staking rewards and loyalty benefits
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-gold rounded-2xl p-8 lg:p-12 border border-playmatez-gold">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Secure Your Bundle?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              Join thousands of investors who have already secured their $PLYM tokens. 
              Limited availability - don't miss your chance to be part of the gaming revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/presale"
                className="inline-flex items-center px-8 py-4 bg-white text-playmatez-gold font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-white/90"
              >
                Start Your Investment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-full text-lg transition-all duration-300 hover:bg-white hover:text-playmatez-gold"
              >
                Have Questions?
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};