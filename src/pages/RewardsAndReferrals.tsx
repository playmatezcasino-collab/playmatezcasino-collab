import React, { useState, useEffect } from 'react';
import { Copy, Check, ExternalLink, X, ArrowRight, DollarSign, Gem, Globe, Sparkles, BarChart2, LifeBuoy, Palette, Rocket, Mail, Smartphone, Settings } from 'lucide-react';
import { PageHeader } from '../components/UI/PageHeader';
import { AffiliateContactForm } from '../components/UI/AffiliateContactForm';
import { affiliateFeatures, commissionTiers, faqItems, rewardsFaqItems } from '../data/content';

export const RewardsAndReferrals: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');
  const [showHowItWorksModal, setShowHowItWorksModal] = useState(false);

  const handleCopyReferralLink = async () => {
    try {
      const referralLink = 'https://example.com?ref=YOURCODE123';
      await navigator.clipboard.writeText(referralLink);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch (err) {
      console.error('Failed to copy referral link:', err);
    }
  };

  const openHowItWorksModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowHowItWorksModal(true);
  };

  const closeHowItWorksModal = () => {
    setShowHowItWorksModal(false);
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showHowItWorksModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showHowItWorksModal]);

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

  // Merge and deduplicate FAQ items
  const mergedFaqItems = [...rewardsFaqItems, ...faqItems.filter(item => 
    !rewardsFaqItems.some(rewardItem => rewardItem.question === item.question)
  )];

  return (
    <>
      {/* How It Works Modal */}
      {showHowItWorksModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
          onClick={closeHowItWorksModal}
        >
          <div 
            className="bg-playmatez-grey rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-playmatez-gold relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeHowItWorksModal}
              className="absolute top-4 right-4 text-playmatez-white hover:text-playmatez-gold transition-colors duration-300"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Content */}
            <h3 className="text-3xl font-bold text-playmatez-gold mb-8">How It Works</h3>
            
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-playmatez-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-playmatez-white mb-2">Join the Waitlist</h4>
                  <p className="text-playmatez-white/80 mb-2">Click the Join Waitlist button → it takes you to our pre-launch sign-up page.</p>
                  <p className="text-playmatez-white/80">Enter your email (and username if required) to secure your spot.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-playmatez-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-playmatez-white mb-2">Confirm Your Spot</h4>
                  <p className="text-playmatez-white/80 mb-2">You'll receive a quick confirmation email.</p>
                  <p className="text-playmatez-white/80">This locks in your $10 bonus credit, ready for launch.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-playmatez-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-playmatez-white mb-2">Get Early Access</h4>
                  <p className="text-playmatez-white/80">When we go live, waitlist members get priority access to the platform before the public.</p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-playmatez-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-playmatez-white mb-2">Claim Your Bonus</h4>
                  <p className="text-playmatez-white/80 mb-2">At launch, your account dashboard will automatically show your $10 bonus credit.</p>
                  <p className="text-playmatez-white/80">Credits are non-withdrawable until you play — but can be used like real funds on the platform.</p>
                </div>
              </div>
            </div>

            {/* Close Button at Bottom */}
            <div className="mt-8 text-center">
              <button
                onClick={closeHowItWorksModal}
                className="px-6 py-3 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-medium rounded-full transition-colors duration-300"
              >
                Got it!
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="min-h-screen section-with-top-shade">
        <div className="container mx-auto px-4 py-20">
          <PageHeader
            title="Rewards & Referrals"
            description="Explore pre-launch rewards and our referrals/affiliate programme. Join the waitlist, invite friends, and earn bonus credits while building your network."
          />

          {/* SECTION A - REWARDS */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-playmatez-white mb-12 text-center">
              Rewards
            </h2>

            {/* Founders Waitlist Bonus */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-playmatez-white mb-6">
                Founders Waitlist Bonus
              </h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
                <p className="text-lg text-playmatez-white mb-4">
                  Join the waitlist → get <strong className="text-playmatez-gold">$10 in bonus credits</strong> at launch.
                </p>
                <p className="text-sm text-playmatez-white/60 mb-6">
                  Charge: Free (this is an acquisition incentive).
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/prelaunch#prelaunch-signup-form"
                    data-cta="waitlist"
                    className="inline-flex items-center px-6 py-3 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-medium rounded-full transition-colors duration-300"
                  >
                    Join Waitlist
                  </a>
                  <a
                    href="#how-it-works"
                    onClick={openHowItWorksModal}
                    className="text-playmatez-gold hover:text-playmatez-white text-sm underline transition-colors duration-300"
                  >
                    How it works
                  </a>
                </div>
              </div>
            </div>

            {/* Referral Rewards */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-playmatez-white mb-6">
                Referral Rewards
              </h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
                <p className="text-lg text-playmatez-white mb-4">
                  Invite friends → earn <strong className="text-playmatez-gold">$5 bonus credits</strong> per signup (capped at 10).
                </p>
                <p className="text-sm text-playmatez-white/60 mb-6">
                  Charge: Free now, cost is just the credit you give on launch.
                </p>
                <div className="mb-6">
                  <p className="text-sm text-playmatez-white/80 mb-2">Your referral code:</p>
                  <code className="bg-white/20 px-3 py-1 rounded text-playmatez-gold font-mono">
                    YOURCODE123
                  </code>
                </div>
                <button
                  onClick={handleCopyReferralLink}
                  data-cta="copy-referral"
                  className="inline-flex items-center px-6 py-3 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-medium rounded-full transition-colors duration-300"
                >
                  {copyStatus === 'copied' ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Referral Link
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Community Leaderboard */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-playmatez-white mb-6">
                Community Leaderboard
              </h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
                <p className="text-lg text-playmatez-white mb-4">
                  Be active in our Discord/Telegram → <strong className="text-playmatez-gold">Top 10 each week</strong> earn <strong className="text-playmatez-gold">$25 bonus credits</strong>.
                </p>
                <p className="text-sm text-playmatez-white/60 mb-6">
                  Charge: Free now (this is marketing).
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#discord"
                    data-cta="discord"
                    className="inline-flex items-center px-6 py-3 border-2 border-playmatez-gold text-playmatez-gold hover:bg-playmatez-gold hover:text-white font-medium rounded-full transition-colors duration-300"
                  >
                    Join Discord
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="https://t.me/+EYZTs2m09785N2Nk"
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cta="telegram"
                    className="inline-flex items-center px-6 py-3 border-2 border-playmatez-gold text-playmatez-gold hover:bg-playmatez-gold hover:text-white font-medium rounded-full transition-colors duration-300"
                  >
                    Join Telegram
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>

            {/* Early Access Perks */}
            <div className="mb-16">
              <h3 className="text-3xl font-bold text-playmatez-white mb-6">
                Early Access Perks
              </h3>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
                <p className="text-lg text-playmatez-white mb-4">
                  Founders get <strong className="text-playmatez-gold">exclusive early access</strong> + <strong className="text-playmatez-gold">0.5% permanent cashback boost</strong> once the platform goes live.
                </p>
                <p className="text-sm text-playmatez-white/60">
                  Charge: You could later monetize this as a VIP entry pass ($50–$100 one-time fee).
                </p>
              </div>
            </div>
          </section>

          {/* SECTION B - REFERRALS & AFFILIATE PROGRAMME */}
          <section className="mb-20">
            <h2 className="text-4xl font-bold text-playmatez-white mb-12 text-center">
              Affiliate Programme
            </h2>

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
              <h3 className="text-3xl font-bold text-playmatez-white mb-8">
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
              <h3 className="text-3xl font-bold text-playmatez-white mb-8">
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
              <h3 className="text-3xl font-bold text-playmatez-white mb-8">
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
              <h3 className="text-3xl font-bold text-playmatez-white mb-8">
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
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-4xl font-bold text-playmatez-white mb-12 text-center">
              FAQs
            </h2>
            <div className="space-y-6">
              {mergedFaqItems.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-playmatez-gold">
                  <h3 className="text-xl font-bold text-playmatez-gold mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-playmatez-white/90">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Legal / Terms */}
          <div className="text-center">
            <p className="text-sm text-playmatez-white/60">
              Terms apply. Bonuses are promotional credits, non-withdrawable until wagering criteria are met. 
              Affiliate commissions subject to terms and conditions. Please gamble responsibly.
            </p>
          </div>

          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@graph": [
                  {
                    "@type": "Organization",
                    "name": "Playmatez",
                    "url": typeof window !== 'undefined' ? window.location.origin : "https://www.playmatez.cc"
                  },
                  {
                    "@type": "FAQPage",
                    "mainEntity": mergedFaqItems.map(faq => ({
                      "@type": "Question",
                      "name": faq.question,
                      "acceptedAnswer": {
                        "@type": "Answer",
                        "text": faq.answer
                      }
                    }))
                  }
                ]
              })
            }}
          />
        </div>
      </div>
    </>
  );
};