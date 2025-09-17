import React from 'react';
import { ArrowRight, DollarSign, Gem, Globe, Sparkles, BarChart2, LifeBuoy, Palette, Rocket, Mail, Smartphone, Settings } from 'lucide-react';
import { PageHeader } from '../components/UI/PageHeader';
import { AffiliateContactForm } from '../components/UI/AffiliateContactForm';

export const AffiliateProgramme: React.FC = () => {
  // Helper function to get Lucide icon component
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'dollar-sign': DollarSign,
      'gem': Gem,
      'globe': Globe,
      'sparkles': Sparkles,
      'bar-chart-2': BarChart2,
      'life-buoy': LifeBuoy,
      'palette': Palette,
      'rocket': Rocket,
      'mail': Mail,
      'smartphone': Smartphone,
      'settings': Settings,
    };
    return iconMap[iconName] || DollarSign;
  };

  const affiliateFeatures = [
    {
      icon: 'dollar-sign',
      title: 'Lucrative Commission Structure',
      description: 'Earn generous commissions for every player/investor you refer'
    },
    {
      icon: 'gem',
      title: 'Multiple Revenue Streams',
      description: 'Diversify your income with revenue share, CPA, and hybrid deals'
    },
    {
      icon: 'globe',
      title: 'Global Reach',
      description: 'Tap into our global player base and expand your reach worldwide'
    },
    {
      icon: 'sparkles',
      title: 'Exclusive Promotions',
      description: 'Access to exclusive bonuses and incentives for players'
    },
    {
      icon: 'bar-chart-2',
      title: 'Real-Time Tracking',
      description: 'Monitor your clicks, conversions, and earnings in real-time'
    },
    {
      icon: 'life-buoy',
      title: 'Dedicated Support',
      description: 'Receive assistance from our dedicated affiliate support team'
    }
  ];

  const commissionTiers = [
    {
      tier: 'Bronze',
      referrals: '1-25',
      commission: '25%',
      bonus: 'Welcome Package',
      color: 'from-amber-600 to-amber-800'
    },
    {
      tier: 'Silver',
      referrals: '26-100',
      commission: '35%',
      bonus: 'Marketing Materials',
      color: 'from-gray-400 to-gray-600'
    },
    {
      tier: 'Gold',
      referrals: '101-500',
      commission: '45%',
      bonus: 'Personal Manager',
      color: 'from-yellow-400 to-yellow-600'
    },
    {
      tier: 'Platinum',
      referrals: '500+',
      commission: '55%',
      bonus: 'Custom Solutions',
      color: 'from-purple-400 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen section-with-top-shade">
      <div className="container mx-auto px-4 py-20">
        <PageHeader
          title="Affiliate Programme"
          subtitle="Earn While You Promote"
          description="Join our lucrative affiliate program and start earning commissions by referring players and investors to the Playmatez platform."
        />

        {/* Program Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h3 className="text-3xl font-bold text-playmatez-white mb-8">
              Why Join Our Affiliate Programme?
            </h3>
            <div className="space-y-6">
              {affiliateFeatures.map((feature, index) => (
                <div key={index} className="group flex items-start bg-white/5 backdrop-blur-sm rounded-lg p-4 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="mr-4 flex-shrink-0 relative">
                    {/* Glow effect background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-playmatez-green to-playmatez-gold rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-lg scale-150"></div>
                    
                    {/* Icon container with animations */}
                    <div className="relative w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-playmatez-gold/20 to-playmatez-green/20 border border-playmatez-gold/30 group-hover:border-playmatez-gold/60 transition-all duration-500 group-hover:rotate-6">
                      {(() => {
                        const IconComponent = getIconComponent(feature.icon);
                        return (
                          <IconComponent 
                            className="w-6 h-6 text-playmatez-gold group-hover:text-playmatez-white transition-colors duration-500 group-hover:scale-110" 
                            strokeWidth={2}
                          />
                        );
                      })()}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-playmatez-white mb-2 group-hover:text-playmatez-gold transition-colors duration-300">{feature.title}</h4>
                    <p className="text-playmatez-white/80 group-hover:text-playmatez-white/90 transition-colors duration-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <AffiliateContactForm />
          </div>
        </div>

        {/* Commission Structure */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            Commission Tiers
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {commissionTiers.map((tier, index) => (
              <div key={index} className="relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} rounded-xl opacity-20`}></div>
                <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <h4 className="text-2xl font-bold text-playmatez-white mb-2">{tier.tier}</h4>
                  <p className="text-playmatez-white/60 mb-4">{tier.referrals} Referrals</p>
                  <div className="text-4xl font-bold text-playmatez-gold mb-4">{tier.commission}</div>
                  <p className="text-sm text-playmatez-white/80">Revenue Share</p>
                  <div className="mt-4 pt-4 border-t border-white/20">
                    <p className="text-sm text-playmatez-gold font-medium">{tier.bonus}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            How It Works
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '1',
                title: 'Sign Up',
                description: 'Complete our simple affiliate registration form',
                icon: '📝'
              },
              {
                step: '2',
                title: 'Promote',
                description: 'Share your unique referral links and marketing materials',
                icon: '📢'
              },
              {
                step: '3',
                title: 'Earn',
                description: 'Get paid for every successful referral and player activity',
                icon: '💰'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-playmatez-gold rounded-full flex items-center justify-center mx-auto mb-6 hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{step.icon}</span>
                </div>
                <h4 className="text-2xl font-bold text-playmatez-white mb-4">
                  Step {step.step}: {step.title}
                </h4>
                <p className="text-playmatez-white/80">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Marketing Tools */}
        <div className="mb-20 bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
          <h3 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            Marketing Tools & Resources
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Banners & Graphics',
                description: 'High-quality promotional banners in various sizes',
                icon: 'palette'
              },
              {
                title: 'Landing Pages',
                description: 'Optimized landing pages for better conversions',
                icon: 'rocket'
              },
              {
                title: 'Email Templates',
                description: 'Professional email marketing templates',
                icon: 'mail'
              },
              {
                title: 'Social Media Assets',
                description: 'Ready-to-use social media promotional content',
                icon: 'smartphone'
              },
              {
                title: 'Analytics Dashboard',
                description: 'Detailed performance tracking and reporting',
                icon: 'bar-chart-2'
              },
              {
                title: 'API Integration',
                description: 'Advanced integration options for developers',
                icon: 'settings'
              }
            ].map((tool, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
                {(() => {
                  const IconComponent = getIconComponent(tool.icon);
                  return <IconComponent className="w-10 h-10 text-playmatez-gold mb-4" strokeWidth={2} />;
                })()}
                <h4 className="text-xl font-bold text-playmatez-white mb-2">{tool.title}</h4>
                <p className="text-playmatez-white/80">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-playmatez-white mb-12">
            Payment Methods
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { method: 'Bank Transfer', icon: '🏦' },
              { method: 'Cryptocurrency', icon: '₿' },
              { method: 'PayPal', icon: '💳' },
              { method: 'Skrill', icon: '💰' }
            ].map((payment, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-4xl mb-3">{payment.icon}</div>
                <p className="text-playmatez-white font-medium">{payment.method}</p>
              </div>
            ))}
          </div>
          <p className="text-playmatez-white/80 mt-8">
            Monthly payments on the 1st of each month. Minimum payout: $100
          </p>
        </div>
      </div>
    </div>
  );
};