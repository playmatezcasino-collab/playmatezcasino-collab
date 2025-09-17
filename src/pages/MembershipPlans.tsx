import React, { useCallback, useState } from 'react';
import { Check, Crown, ArrowDown, Star } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { PageHeader } from '../components/UI/PageHeader';
import { FeatureCard } from '../components/UI/FeatureCard';
import { useSafeTranslation } from '../utils/i18nUtils';
import { membershipTiers, membershipFaqs } from '../data/content';

// Lazy load the form component
const MembershipApplicationForm = React.lazy(() => import('../components/MembershipApplicationForm').then(module => ({ default: module.MembershipApplicationForm })));

export const MembershipPlans: React.FC = React.memo(() => {
  const { tt } = useSafeTranslation();
  const [selectedTierForForm, setSelectedTierForForm] = useState<string | null>(null);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const scrollToForm = useCallback(() => {
    document.getElementById('membership-application-form')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, []);

  const handleTierClick = useCallback((tier: typeof membershipTiers[0]) => {
    console.log('Analytics Event: membership_tier_click', { tier: tier.name });
    setSelectedTierForForm(tier.name);
    scrollToForm();
  }, [scrollToForm]);

  // Helper function to get Lucide icon component
  const getIconComponent = (iconName: string) => {
    return (LucideIcons as any)[iconName] || LucideIcons.Check;
  };

  const toggleFaq = useCallback((index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  }, [openFaqIndex]);

  return (
    <div className="min-h-screen section-with-top-shade">
      <div className="container mx-auto px-4 py-20">
        <PageHeader
          title={tt('membership.pageTitle', 'Membership Plans')}
          subtitle={tt('membership.pageSubtitle', 'Unlock exclusive benefits, early access, and launch privileges')}
          description={tt('membership.pageDescription', 'Join our exclusive membership program and gain access to premium benefits, early platform access, and special rewards designed for our most valued community members.')}
        />

        {/* Membership Tiers Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            {tt('membership.tiersTitle', 'Choose Your Membership')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {membershipTiers.map((tier, index) => (
              <div 
                key={index} 
                className={`relative cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  tier.isPopular ? 'transform scale-105' : ''
                }`}
                onClick={() => handleTierClick(tier)}
                data-analytics-event="membership_tier_click"
                data-tier={tier.name}
              >
                {/* Most Popular Badge */}
                {tier.isPopular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <div className="bg-playmatez-gold text-white px-4 py-2 rounded-full text-sm font-bold flex items-center">
                      <Crown className="w-4 h-4 mr-1" />
                      {tt('membership.mostPopular', 'Most Popular')}
                    </div>
                  </div>
                )}

                <div className={`bg-white/10 backdrop-blur-sm rounded-xl shadow-lg p-8 border-2 transition-all duration-300 hover:bg-white/15 hover:shadow-xl h-full flex flex-col ${
                  tier.isPopular ? 'border-playmatez-gold shadow-lg shadow-playmatez-gold/20 scale-105' : 'border-white/20 hover:border-playmatez-gold/50'
                }`}>

                  {/* Tier Header */}
                  <div className={`text-center mb-6 ${tier.isPopular ? 'mt-2' : ''}`}>
                    {/* Tier Badge */}
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${tier.badgeColor} flex items-center justify-center shadow-lg`}>
                      <span className="text-white text-2xl font-bold">
                        {tier.name.charAt(0)}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-playmatez-white mb-2">{tier.name}</h3>
                    <div className="text-4xl font-bold text-playmatez-gold mb-1">
                      {tier.monthlyPrice}
                    </div>
                    <p className="text-playmatez-white/60 text-sm">per month</p>
                    <p className="text-playmatez-gold text-xs font-medium mt-1">(Pre-Launch Price)</p>
                  </div>

                  {/* Benefits List */}
                  <div className="space-y-4 mb-8 flex-1">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-start">
                        {(() => {
                          const IconComponent = getIconComponent(benefit.icon);
                          return <IconComponent className="w-5 h-5 text-playmatez-gold mr-3 mt-0.5 flex-shrink-0" />;
                        })()}
                        <span className="text-playmatez-white/90 leading-relaxed">{benefit.text}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <button
                      onClick={() => handleTierClick(tier)}
                      className={`w-full py-4 px-6 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 ${
                        tier.isPopular
                          ? 'bg-playmatez-gold text-white hover:bg-playmatez-gold/80'
                          : 'bg-white/10 text-playmatez-white border border-playmatez-gold hover:bg-playmatez-gold hover:text-white'
                      }`}
                    >
                      {tt('membership.subscribeNow', 'Subscribe Now')}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mb-20">
          <div className="bg-gradient-gold rounded-2xl p-8 lg:p-12 text-center border border-playmatez-gold">
            <h2 className="text-4xl font-bold text-white mb-6">
              {tt('membership.ctaTitle', 'Questions About Membership?')}
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
              {tt('membership.ctaDescription', 'Need help choosing the right tier or have questions about our membership benefits? Contact our team for personalized assistance.')}
            </p>
            <button
              onClick={scrollToForm}
              data-analytics-event="membership_cta_click"
              className="inline-flex items-center px-8 py-4 bg-white text-playmatez-gold font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-white/90"
            >
              {tt('membership.ctaButton', 'Contact Us')}
              <ArrowDown className="ml-2 w-5 h-5" />
            </button>
          </div>
        </section>

        {/* Application Form Section */}
        <section id="membership-application-form" className="max-w-2xl mx-auto mb-20">
          <React.Suspense fallback={
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
              <div className="animate-pulse">
                <div className="h-8 bg-white/20 rounded mb-6"></div>
                <div className="space-y-4">
                  <div className="h-12 bg-white/20 rounded"></div>
                  <div className="h-12 bg-white/20 rounded"></div>
                  <div className="h-12 bg-white/20 rounded"></div>
                  <div className="h-12 bg-white/20 rounded"></div>
                </div>
              </div>
            </div>
          }>
            <MembershipApplicationForm preselectedTier={selectedTierForForm} />
          </React.Suspense>
        </section>

        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            {tt('membership.faqTitle', 'Frequently Asked Questions')}
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {membershipFaqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-playmatez-gold">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                  aria-expanded={openFaqIndex === index}
                  aria-controls={'faq-answer-' + index}
                >
                  <h3 className="text-xl font-bold text-playmatez-gold pr-4">
                    {faq.question}
                  </h3>
                  <div className="text-playmatez-gold flex-shrink-0">
                    {openFaqIndex === index ? '−' : '+'}
                  </div>
                </button>
                
                {openFaqIndex === index && (
                  <div id={`faq-answer-${index}`} className="px-6 pb-6">
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-playmatez-white/90 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Important Notice */}
        <section>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <p className="text-playmatez-white/80 text-sm leading-relaxed">
              <strong>Important:</strong> Membership subscriptions will be available at platform launch. 
              Pre-launch pricing is limited time only. All benefits are subject to terms and conditions. 
              Memberships can be cancelled at any time through your account dashboard.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
});

MembershipPlans.displayName = 'MembershipPlans';