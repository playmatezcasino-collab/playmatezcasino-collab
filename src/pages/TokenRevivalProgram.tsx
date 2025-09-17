import React, { useCallback, useState } from 'react';
import { Gift, TrendingUp, Ticket, DollarSign, FileText, Trophy, ArrowDown } from 'lucide-react';
import { PageHeader } from '../components/UI/PageHeader';
import { useSafeTranslation } from '../utils/i18nUtils';
import { tokenRevivalTiers, tokenRevivalBenefits } from '../data/content';

// Lazy load the form component
const TokenRevivalProgramForm = React.lazy(() => import('../components/TokenRevivalProgramForm').then(module => ({ default: module.TokenRevivalProgramForm })));

export const TokenRevivalProgram: React.FC = React.memo(() => {
  const { tt } = useSafeTranslation();
  const [selectedTierForForm, setSelectedTierForForm] = useState<number | null>(null);

  const scrollToForm = useCallback(() => {
    document.getElementById('token-revival-form')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const handleLotteryClick = useCallback(() => {
    console.log('Analytics Event: token_revival_lottery_click');
    scrollToForm();
  }, [scrollToForm]);

  const handleTierClick = useCallback((tier: typeof tokenRevivalTiers[0]) => {
    console.log('Analytics Event: token_revival_tier_click', { tier: tier.name });
    setSelectedTierForForm(tier.cashDeposit);
    scrollToForm();
  }, [scrollToForm]);

  // Helper function to get Lucide icon component
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'gift': Gift,
      'trending-up': TrendingUp,
      'ticket': Ticket,
      'dollar-sign': DollarSign,
      'file-text': FileText,
      'trophy': Trophy,
    };
    return iconMap[iconName] || Gift;
  };

  return (
    <div className="min-h-screen section-with-top-shade">
      <div className="container mx-auto px-4 py-20">
        <PageHeader
          title={tt('tokenRevival.pageTitle', 'Token Revival Program')}
          subtitle={tt('tokenRevival.pageSubtitle', 'Turn your dead tokens into exclusive rewards at platform launch')}
          description={tt('tokenRevival.pageDescription', 'Submit your dead tokens and cash deposit to claim bonus credits, deposit multipliers, and participate in an exclusive lottery.')}
        />

        {/* Key Benefits Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            {tt('tokenRevival.keyBenefitsTitle', 'Key Benefits')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tokenRevivalBenefits.map((benefit, index) => {
              const IconComponent = getIconComponent(benefit.icon);
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-playmatez-gold">
                  <div className="w-16 h-16 bg-playmatez-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-playmatez-white mb-4">{benefit.title}</h3>
                  <p className="text-playmatez-white/80 leading-relaxed">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Requirements Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            {tt('tokenRevival.requirementsTitle', 'Requirements')}
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-playmatez-gold rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <p className="text-playmatez-white text-lg">
                  {tt('tokenRevival.requirementsCashDeposit', 'Cash deposit: Required for eligibility (tiers $50–$1,000)')}
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-playmatez-gold rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <p className="text-playmatez-white text-lg">
                  {tt('tokenRevival.requirementsProof', 'Proof of original token purchase (tx address, receipt, or screenshot)')}
                </p>
              </div>
              <div className="flex items-start">
                <div className="w-6 h-6 bg-playmatez-gold rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <p className="text-playmatez-white text-lg">
                  {tt('tokenRevival.requirementsSecureSubmission', 'All form submissions are secure and encrypted')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tier System Section */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            {tt('tokenRevival.tierSystem', 'Tier System')}
          </h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-playmatez-gold/30">
                  <th className="pb-4 text-playmatez-white font-bold">{tt('tokenRevival.tier', 'Tier')}</th>
                  <th className="pb-4 text-playmatez-white font-bold">{tt('tokenRevival.cashDepositAmount', 'Cash Deposit')}</th>
                  <th className="pb-4 text-playmatez-white font-bold">{tt('tokenRevival.deadTokenRange', 'Dead Token Value')}</th>
                  <th className="pb-4 text-playmatez-white font-bold">{tt('tokenRevival.rewards', 'Rewards')}</th>
                </tr>
              </thead>
              <tbody>
                {tokenRevivalTiers.map((tier, index) => (
                  <tr 
                    key={index} 
                    className="border-b border-white/10 cursor-pointer hover:bg-white/5 transition-colors duration-200"
                    onClick={() => handleTierClick(tier)}
                    data-analytics-event="token_revival_tier_click"
                    data-tier={tier.name}
                  >
                    <td className="py-4 text-playmatez-gold font-bold hover:text-playmatez-white transition-colors duration-200">{tier.name}</td>
                    <td className="py-4 text-playmatez-white">${tier.cashDeposit}</td>
                    <td className="py-4 text-playmatez-white">${tier.deadTokenMin.toLocaleString()}</td>
                    <td className="py-4 text-playmatez-white text-sm">{tier.rewards}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Lottery Section */}
        <section className="mb-20">
          <div className="bg-gradient-gold rounded-2xl p-8 lg:p-12 text-center border border-playmatez-gold">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Trophy className="w-12 h-12 text-white mr-4" />
                <h2 className="text-4xl font-bold text-white">
                  {tt('tokenRevival.lotteryTitle', 'Exclusive Token Revival Lottery')}
                </h2>
              </div>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                {tt('tokenRevival.lotterySubtitle', 'Turn your dead tokens into a chance to win a share of the rewards pool at platform launch')}
              </p>
              
              <div className="bg-white/20 rounded-xl p-6 mb-8">
                <p className="text-white/90 mb-4 leading-relaxed">
                  {tt('tokenRevival.lotteryDescription', 'Users submitting tokens and cash deposit gain lottery entries. The lottery is tiered, with higher-tier participants receiving more entries and increasing their chances of winning.')}
                </p>
                
                <div className="text-3xl font-bold text-white mb-4">
                  {tt('tokenRevival.lotteryPrizePool', 'Current prize pool: $50,000 and growing')}
                </div>
                
                <p className="text-white/90 mb-4">
                  {tt('tokenRevival.lotteryGuaranteed', 'All other rewards (bonus credits, deposit multipliers) are guaranteed and redeemable at launch')}
                </p>
                
                <p className="text-xl font-bold text-white">
                  {tt('tokenRevival.lotteryEngagement', 'The MORE DEAD TOKENS SUBMITTED, the higher the chances to win')}
                </p>
              </div>
              
              <button
                onClick={handleLotteryClick}
                data-analytics-event="token_revival_lottery_click"
                className="inline-flex items-center px-8 py-4 bg-white text-playmatez-gold font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 hover:bg-white/90"
              >
                {tt('tokenRevival.lotteryButton', 'Enter the Lottery & Claim Rewards')}
                <ArrowDown className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Submission Form Section */}
        <section id="token-revival-form" className="max-w-2xl mx-auto">
          <div className="text-center mb-6">
            <p className="text-playmatez-gold font-medium">
              {tt('tokenRevival.secureSubmissionNotice', '🔒 Your submission is secure and encrypted.')}
            </p>
          </div>
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
            <TokenRevivalProgramForm preselectedCashDeposit={selectedTierForForm} />
          </React.Suspense>
        </section>

        {/* Important Notice */}
        <section className="mt-20">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
            <p className="text-playmatez-white/80 text-sm leading-relaxed">
              <strong>Important:</strong> All rewards (bonus credits, deposit multipliers, lottery winnings) will be credited to your Playmatez account and redeemable at platform launch. 
              Dead token valuation is based on original purchase price (USD), not current market value. 
              Cash deposits ensure serious participation and create upfront revenue for enhanced rewards.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
});

TokenRevivalProgram.displayName = 'TokenRevivalProgram';
