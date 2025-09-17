import React from 'react';
import { PresaleHero } from '../components/presale/PresaleHero';
import { TrustBadges } from '../components/presale/TrustBadges';
import { ProgressStrip } from '../components/presale/ProgressStrip';
import { PresaleBenefits } from '../components/presale/PresaleBenefits';
import { TokenomicsCard } from '../components/presale/TokenomicsCard';
import { PresaleTabs } from '../components/presale/PresaleTabs';
import { FAQ } from '../components/presale/FAQ';
import { LegalRisk } from '../components/presale/LegalRisk';
import { BundleCard } from '../components/BundleCard';
import { tokenBundles } from '../data/content';

export const Presale: React.FC = () => {
  return (
    <div className="min-h-screen section-with-top-shade">
      <div className="container mx-auto px-4 py-20">
        {/* Hero Section */}
        <PresaleHero>
          <PresaleTabs />
        </PresaleHero>
      </div>

      <div className="container mx-auto px-4">
        {/* Trust Badges */}
        <TrustBadges />

        {/* Progress Strip */}
        <ProgressStrip />

        {/* Benefits */}
        <PresaleBenefits />

        {/* Tokenomics */}
        <TokenomicsCard />

        {/* FAQ */}
        <FAQ />

        {/* Token Bundles Section */}
        <section id="bundles" className="mb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-playmatez-white mb-6">
                Exclusive Investment Bundles
              </h2>
              <p className="text-xl text-playmatez-white/80 max-w-3xl mx-auto leading-relaxed">
                Maximize your $PLYM investment with our exclusive token bundles. Get bonus tokens, 
                better pricing, and priority access to platform features.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {tokenBundles.map((bundle, index) => (
                <BundleCard key={index} bundle={bundle} />
              ))}
            </div>

            {/* Bundle Benefits */}
            <div className="mt-16 bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-playmatez-gold/30">
              <h3 className="text-2xl font-bold text-playmatez-white text-center mb-8">
                Why Choose Token Bundles?
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-playmatez-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎁</span>
                  </div>
                  <h4 className="text-lg font-bold text-playmatez-white mb-2">Bonus Tokens</h4>
                  <p className="text-playmatez-white/80 text-sm">Get up to 30% bonus tokens with larger bundles</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-playmatez-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">💰</span>
                  </div>
                  <h4 className="text-lg font-bold text-playmatez-white mb-2">Better Value</h4>
                  <p className="text-playmatez-white/80 text-sm">Pre-launch pricing with significant upside potential</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-playmatez-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">⭐</span>
                  </div>
                  <h4 className="text-lg font-bold text-playmatez-white mb-2">Priority Access</h4>
                  <p className="text-playmatez-white/80 text-sm">Early platform access and exclusive features</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Legal & Risk */}
        <LegalRisk />
      </div>
    </div>
  );
};

export default Presale;