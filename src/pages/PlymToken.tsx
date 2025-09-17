import React from 'react';
import { Link } from 'react-router-dom';
import * as LucideIcons from 'lucide-react';
import { PageHeader } from '../components/UI/PageHeader';
import { FeatureCard } from '../components/UI/FeatureCard';
import { TokenCoreIdentifiers } from '../components/TokenCoreIdentifiers';
import { tokenFeatures, tokenomicsBlurb, tokenomicsData, distributionData, tokenomicsMechanics } from '../data/content';
import { BundleCard } from '../components/BundleCard';
import { tokenBundles } from '../data/content';
import { ArrowRight } from 'lucide-react';

export const PlymToken: React.FC = () => {
  // Helper function to get Lucide icon component
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'building': LucideIcons.Building,
      'rocket': LucideIcons.Rocket,
      'gamepad-2': LucideIcons.Gamepad2,
      'trending-up': LucideIcons.TrendingUp,
      'globe': LucideIcons.Globe,
      'crown': LucideIcons.Crown,
    };
    return iconMap[iconName] || LucideIcons.Circle;
  };

  const roadmapPhases = [
    {
      phase: 'Phase 1',
      title: 'Foundation, Demo & Private Sale',
      subtitle: '(Current Stage)',
      status: 'In Progress',
      icon: 'building',
      items: [
        'Token development and smart contract deployment (BNB Chain)',
        'Website, brand identity, and investor landing page launch',
        'Private Sale live — exclusive early backer access with bonus rewards',
        'Demo release of Playmatez Casino & Sportsbook to showcase platform features',
        'Strategic partnerships & early marketing push',
        'Security audits initiated for transparency and trust'
      ]
    },
    {
      phase: 'Phase 2',
      title: 'Public Launch & Exchange Listings',
      subtitle: '',
      status: 'Upcoming',
      icon: 'rocket',
      items: [
        'Initial DEX Offering (IDO) and liquidity pool launch',
        'Listing on PancakeSwap and other Tier-2 exchanges',
        'Token claim + distribution for private sale investors',
        'First wave of influencer + PR campaigns',
        'Launch of Playmatez ROI Calculator & Dashboard for investors'
      ]
    },
    {
      phase: 'Phase 3',
      title: 'Platform Launch — Gaming & Betting Hub',
      subtitle: '',
      status: 'Planned',
      icon: 'gamepad-2',
      items: [
        'Release of Playmatez Casino (slots, roulette, poker, blackjack)',
        'Launch of Sportsbook with live betting & odds',
        'Prediction Market integration (sports, elections, events with Buy YES / Buy NO options)',
        'Seamless crypto payments: USDT, USDC, BTC, ETH, BNB, SOL',
        'Loyalty + bonus program rollout'
      ]
    },
    {
      phase: 'Phase 4',
      title: 'Trading & DeFi Expansion',
      subtitle: '',
      status: 'Planned',
      icon: 'trending-up',
      items: [
        'Launch of Playmatez 100x Futures Trading Platform',
        'Staking pools (earn passive rewards with Playmatez Token)',
        'Revenue-sharing system for token holders',
        'Governance voting rights — investors help shape the future of Playmatez',
        'Expanded token listings on Tier-1 exchanges (Binance, Coinbase, etc.)'
      ]
    },
    {
      phase: 'Phase 5',
      title: 'Global Growth & Ecosystem Building',
      subtitle: '',
      status: 'Planned',
      icon: 'globe',
      items: [
        'Mobile app release (iOS & Android)',
        'VIP investor experiences + global events',
        'Integration of metaverse partnerships & NFT gaming assets',
        'Multi-chain expansion (Ethereum, Polygon, Solana, Base)',
        'Aggressive scaling into worldwide gaming & betting markets'
      ]
    },
    {
      phase: 'Phase 6',
      title: 'B2B Expansion & Long-Term Vision',
      subtitle: '',
      status: 'Planned',
      icon: 'crown',
      items: [
        'White-labeling the Playmatez 100x Futures Trading Platform for other online casinos and operators',
        'Continuous token buyback & burn — deflationary model for long-term holders',
        'Expansion into real-world partnerships & sponsorships',
        'Positioning Playmatez as the No.1 community-owned online entertainment empire'
      ]
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed': return 'bg-green-500';
      case 'In Progress': return 'bg-playmatez-gold';
      case 'Upcoming': return 'bg-blue-500';
      case 'Planned': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen section-with-top-shade">
      <div className="container mx-auto px-4 py-20">
        <PageHeader
          title="$PLYM Token"
          subtitle="The Heart of the Playmatez Ecosystem"
          description="Discover the utility, benefits, and tokenomics of the $PLYM token - your gateway to exclusive features, governance rights, and revenue sharing in the Playmatez platform."
        />

        {/* Token Overview */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <h3 className="text-3xl font-bold text-playmatez-white mb-8">
            Token Overview
          </h3>
          <div className="space-y-6">
            <p className="text-lg text-playmatez-white/80 leading-relaxed">
              The $PLYM token is the native utility token of the Playmatez ecosystem, designed to provide 
              holders with exclusive access to platform features, governance rights, and revenue sharing opportunities.
            </p>
            <p className="text-lg text-playmatez-white/80 leading-relaxed">
              Built on a deflationary model with buyback and burn mechanisms, $PLYM tokens are designed 
              to appreciate in value as the platform grows and generates revenue.
            </p>
          </div>
        </div>

        {/* Core Token Identifiers */}
        <TokenCoreIdentifiers />

        {/* Current Investment Opportunity */}
        <div className="text-center mb-20">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 lg:p-12 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-playmatez-white mb-8">Current Investment Opportunity</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-sm text-playmatez-white/60 mb-2">Current Price</div>
                <div className="text-4xl font-bold text-playmatez-gold">$0.004</div>
              </div>
              <div>
                <div className="text-sm text-playmatez-white/60 mb-2">Listing Price</div>
                <div className="text-4xl font-bold text-playmatez-gold">$0.008</div>
              </div>
            </div>
            <div className="mt-8 p-6 bg-playmatez-gold/20 rounded-xl">
              <h4 className="text-2xl font-bold text-playmatez-gold mb-2">🚀 2x Growth Potential</h4>
              <p className="text-playmatez-white">Expected return from current price to listing price</p>
            </div>
          </div>
        </div>

        {/* Token Features */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            Token Features & Utilities
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tokenFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>

        {/* Tokenomics */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            Tokenomics
          </h3>
          
          {/* Tokenomics Blurb */}
          <div className="text-center mb-12">
            <p className="text-lg text-playmatez-white/80 max-w-4xl mx-auto leading-relaxed">
              {tokenomicsBlurb}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {tokenomicsData.map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-playmatez-gold">
                <h4 className="text-lg font-bold text-playmatez-gold mb-2">{item.category}</h4>
                <div className="text-2xl font-bold text-playmatez-white mb-2">{item.value}</div>
                <p className="text-playmatez-white/60 text-sm">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Token Distribution */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <h4 className="text-3xl font-bold text-playmatez-white text-center mb-8">
              Token Distribution
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {distributionData.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-playmatez-gold">
                  <div className="flex items-center mb-4">
                    <div className={`w-4 h-4 ${item.color} rounded-full mr-3`}></div>
                    <h5 className="text-lg font-bold text-playmatez-white">{item.category}</h5>
                  </div>
                  <div className="text-2xl font-bold text-playmatez-gold mb-1">{item.percentage}</div>
                  <div className="text-playmatez-white/60 text-sm">{item.amount} tokens</div>
                  {item.note && (
                    <div className="text-playmatez-white/50 text-xs italic">{item.note}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Token Mechanics */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <h4 className="text-3xl font-bold text-playmatez-white text-center mb-8">
              Token Mechanics
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tokenomicsMechanics.map((mechanic, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-playmatez-gold hover:bg-white/15 transition-all duration-300">
                  <h5 className="text-xl font-bold text-playmatez-gold mb-4">{mechanic.title}</h5>
                  <p className="text-playmatez-white/80 leading-relaxed">{mechanic.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bundle Teaser Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-playmatez-white mb-6">
              Maximize Your $PLYM Investment
            </h3>
            <p className="text-xl text-playmatez-white/80 max-w-2xl mx-auto leading-relaxed">
              Get more tokens for your investment with our exclusive bundles. 
              Bonus tokens, better pricing, and priority access included.
            </p>
          </div>

          {/* Growth Bundle Preview */}
          <div className="max-w-md mx-auto mb-8">
            {(() => {
              const growthBundle = tokenBundles.find(bundle => bundle.isPopular);
              return growthBundle ? <BundleCard bundle={growthBundle} /> : null;
            })()}
          </div>
        </div>

        {/* Token Roadmap */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-playmatez-gold">
          <PageHeader
            title="Roadmap"
            subtitle="Our Journey to Gaming Excellence"
            description="Follow our strategic roadmap as we build the future of online gaming and investment opportunities."
          />

          {/* Roadmap Timeline */}
          <div className="relative max-w-6xl mx-auto">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-playmatez-gold via-playmatez-gold/50 to-playmatez-gold/20"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              {roadmapPhases.map((phase, index) => (
                <div key={index} className={`relative ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8 md:col-start-2'}`}>
                  {/* Timeline Dot */}
                  <div className={`hidden md:block absolute ${index % 2 === 0 ? '-right-5' : '-left-5'} top-7 w-10 h-10 ${getStatusColor(phase.status)} rounded-full border-2 border-playmatez-gold z-10 flex items-center justify-center shadow-lg`}>
                    <span className="text-playmatez-white text-sm font-bold">{index + 1}</span>
                  </div>

                  {/* Content Card */}
                  <div className="w-full">
                    <div className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-500 border border-playmatez-gold hover:border-playmatez-gold/80 hover:shadow-lg hover:shadow-playmatez-gold/30 hover:scale-105">
                      {/* Icon */}
                      <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-br from-playmatez-gold/20 to-playmatez-green/20 rounded-full flex items-center justify-center border border-playmatez-gold/30 group-hover:border-playmatez-gold/60 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110">
                          {(() => {
                            const IconComponent = getIconComponent(phase.icon);
                            return <IconComponent className="w-8 h-8 text-playmatez-gold group-hover:text-playmatez-white transition-colors duration-500" strokeWidth={2} />;
                          })()}
                        </div>
                      </div>

                      <div className="text-center mb-6">
                        <div className="flex items-center justify-center mb-3">
                          <h3 className="text-xl font-bold text-playmatez-white mr-3">{phase.phase}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold text-white ${getStatusColor(phase.status)}`}>
                            {phase.status}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-playmatez-gold mb-1">
                          {phase.title}
                          {phase.subtitle && <span className="text-playmatez-white/80 ml-1">{phase.subtitle}</span>}
                        </h4>
                      </div>

                      <ul className="space-y-3 text-left">
                        {phase.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start text-playmatez-white/90 text-sm leading-relaxed">
                            <span className="w-2 h-2 bg-playmatez-gold rounded-full mr-3 mt-2 flex-shrink-0 group-hover:bg-playmatez-white transition-colors duration-300"></span>
                            <span className="group-hover:text-playmatez-white transition-colors duration-300">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};