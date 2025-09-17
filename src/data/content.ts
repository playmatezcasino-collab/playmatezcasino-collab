import type { FeatureItem, BenefitItem, FAQItem, InvestmentStep, AdvantageItem } from '../types';
import type { BundleItem } from '../types';

export const membershipTiers = [
  {
    name: 'Bronze Member',
    monthlyPrice: '€9.99',
    priceCurrency: 'EUR',
    isPopular: false,
    badgeColor: 'from-amber-600 to-amber-800',
    benefits: [
      { text: '50 Free Spins every month on featured slots', icon: 'Zap' },
      { text: '1% Rakeback on casino & sportsbook wagers', icon: 'TrendingUp' },
      { text: 'Entry into Monthly Prize Draws (cash & token rewards)', icon: 'Ticket' },
      { text: 'Founders\' Club Badge in your profile', icon: 'Award' }
    ]
  },
  {
    name: 'Silver Member',
    monthlyPrice: '€19.99',
    priceCurrency: 'EUR',
    isPopular: false,
    badgeColor: 'from-gray-400 to-gray-600',
    benefits: [
      { text: '150 Free Spins every month', icon: 'Zap' },
      { text: '3% Rakeback on casino & sportsbook wagers', icon: 'TrendingUp' },
      { text: 'Double Entries into Monthly Prize Draws', icon: 'Ticket' },
      { text: 'Quarterly NFT Loot Box (collectibles, merch discounts)', icon: 'Gift' },
      { text: 'Founders\' Club Badge + Priority Support', icon: 'Award' }
    ]
  },
  {
    name: 'Gold Member (VIP)',
    monthlyPrice: '€49.99',
    priceCurrency: 'EUR',
    isPopular: true,
    badgeColor: 'from-yellow-400 to-yellow-600',
    benefits: [
      { text: '500 Free Spins every month', icon: 'Zap' },
      { text: '5% Rakeback on casino & sportsbook wagers', icon: 'TrendingUp' },
      { text: '5× Entries into Monthly Prize Draws', icon: 'Ticket' },
      { text: 'Monthly NFT Loot Box (exclusive drops, merch, or token bonuses)', icon: 'Gift' },
      { text: 'Exclusive VIP Lounge Access (priority tournaments, VIP-only Telegram channel)', icon: 'Crown' }
    ]
  }
];

export const membershipFaqs = [
  {
    question: 'What is included in each membership tier?',
    answer: 'Each membership tier offers monthly benefits including free spins, rakeback on wagers, prize draw entries, and exclusive perks. Bronze members get 50 free spins and 1% rakeback, Silver members get 150 free spins and 3% rakeback, while Gold VIP members receive 500 free spins, 5% rakeback, and exclusive VIP lounge access.'
  },
  {
    question: 'When will membership benefits be activated?',
    answer: 'Membership benefits will be activated immediately upon subscription and platform launch. Free spins are credited monthly, rakeback is calculated and paid weekly, and prize draws are held monthly with automatic entry for active members.'
  },
  {
    question: 'Are membership spots limited?',
    answer: 'No, membership spots are not limited. However, we maintain high service standards across all tiers to ensure every member receives the premium experience they deserve.'
  },
  {
    question: 'Can I upgrade my membership tier later?',
    answer: 'Yes, you can upgrade or downgrade your membership tier at any time through your account dashboard. Changes take effect at the start of your next billing cycle.'
  },
  {
    question: 'How does rakeback work?',
    answer: 'Rakeback is calculated as a percentage of your total wagers on casino games and sportsbook bets. It\'s calculated weekly and credited to your account automatically. Bronze members receive 1%, Silver members get 3%, and Gold VIP members earn 5% rakeback.'
  },
  {
    question: 'Can I cancel my membership anytime?',
    answer: 'Yes, you can cancel your membership at any time through your account settings. Your benefits will remain active until the end of your current billing period, and no further charges will be applied.'
  }
];

export const partnersData: FeatureItem[] = [
  { icon: 'newspaper', title: 'CoinDesk' },
  { icon: 'blocks', title: 'BSCdaily' },
  { icon: 'bar-chart-2', title: 'CoinMarketCap' },
  { icon: 'line-chart', title: 'CoinGecko' },
];

export const platformFeatures: FeatureItem[] = [
  { icon: 'gamepad-2', title: '+2000 Games' },
  { icon: 'dice-6', title: 'Live Casino' },
  { icon: 'trophy', title: 'Sports Betting' },
  { icon: 'trending-up', title: 'Crypto Trading' },
  { icon: 'users', title: 'Virtual Hosts' },
  { icon: 'target', title: 'Bingo' },
  { icon: 'coins', title: 'Jackpot' },
  { icon: 'bar-chart-3', title: 'Prediction Market' },
  { icon: 'globe', title: 'Web 3' },
];

export const playmatezAdvantages: AdvantageItem = {
  title: 'The Playmatez Advantage',
  features: [
    'High Growth Industry',
    'Experienced Team',
    'High Returns and Bonuses For Players',
    'Implementation of Futures Trading',
    'Exclusive VIP and Loyalty Plans',
    'Multiple Revenue Sharing Opportunities',
  ],
};

export const tokenFeatures: FeatureItem[] = [
  { icon: '🔄', title: 'Buy Back System', description: 'Automated token buyback mechanism' },
  { icon: '💰', title: 'Dividend Options', description: 'Regular dividend distributions' },
  { icon: '💵', title: 'Revenue Sharing', description: 'Share in platform revenues' },
  { icon: '🔥', title: 'Burnable', description: 'Deflationary token mechanics' },
  { icon: '🗳️', title: 'Voting Rights', description: 'Governance participation' },
  { icon: '📉', title: 'Anti Inflationary', description: 'Built-in inflation protection' },
  { icon: 'gamepad-2', title: 'Play with Token', description: 'Use the token directly for gaming, betting, and unlocking exclusive features' },
  { icon: 'award', title: 'Play to Earn', description: 'Earn tokens as rewards by participating in games, challenges, and community activities' },
];

export const faqItems: FAQItem[] = [
  {
    question: 'What is Playmatez?',
    answer: 'Discover Playmatez, the cutting-edge online casino and sportsbook platform revolutionizing the gaming industry with a wide array of interactive betting options and futures trading application.',
  },
  {
    question: 'How does investing in Playmatez work?',
    answer: 'Uncover the flexible investment opportunities at Playmatez, where investors can acquire tokens or shares for potential profits and dividends in our secure and innovative gaming environment.',
  },
  {
    question: 'What are the benefits of investing in Playmatez?',
    answer: 'The unparalleled benefits of investing in Playmatez, includes lucrative returns, diversified investment portfolios, and exclusive access to groundbreaking gaming innovations.',
  },
  {
    question: 'Is Playmatez secure?',
    answer: 'Rest assured, Playmatez prioritizes top-tier security measures to safeguard user data, financial transactions, and platform integrity, ensuring a safe and seamless gaming experience.',
  },
  {
    question: 'What investment opportunities are available on Playmatez?',
    answer: 'Delve into the diverse investment options at Playmatez, from tokenized revenue streams to shares in specific games and betting markets, offering unparalleled opportunities for financial growth.',
  },
  {
    question: 'How do I get started with investing in Playmatez?',
    answer: 'Completing the form and explore our innovative investment options, seizing the opportunity to maximize your financial potential.',
  },
  {
    question: 'What sets Playmatez apart from other online gambling platforms?',
    answer: 'Our commitment to innovation, unparalleled user experience, and transparent investment opportunities, setting us apart as industry leaders in online gaming.',
  },
];

export const tokenomicsBlurb = "Playmatez Tokenomics are designed for growth, transparency, and long-term value. With balanced distribution, built-in scarcity, and strong utility across gaming, trading, and prediction markets, every holder is part of a sustainable ecosystem built to win together.";

export const tokenomicsData = [
  { category: 'Total Supply', value: '1,000,000,000', description: 'Fixed Maximum Supply' },
  { category: 'Circulating Supply', value: '250,000,000', description: 'Currently in circulation' },
  { category: 'Token Type', value: 'Utility & Governance', description: 'Platform utility and governance' }
];

export const distributionData = [
  { category: 'Public Sale', percentage: '38%', amount: '380,000,000', color: 'bg-blue-500' },
  { category: 'Team & Advisors', percentage: '12%', amount: '120,000,000', color: 'bg-green-500', note: 'vested over 36 months, 6-month cliff' },
  { category: 'Development', percentage: '15%', amount: '150,000,000', color: 'bg-purple-500' },
  { category: 'Marketing & Growth', percentage: '15%', amount: '150,000,000', color: 'bg-yellow-500' },
  { category: 'Liquidity', percentage: '10%', amount: '100,000,000', color: 'bg-red-500' },
  { category: 'Reserve & Strategic Partnerships', percentage: '10%', amount: '100,000,000', color: 'bg-gray-500' }
];

export const tokenomicsMechanics = [
  {
    title: 'Staking Rewards Pool',
    description: 'Incentives for long-term holders from Reserve allocation'
  },
  {
    title: 'Deflationary Model',
    description: 'Periodic buyback & burn for scarcity'
  },
  {
    title: 'Governance Utility',
    description: 'Voting rights for community-driven decisions'
  }
];

export const affiliateFeatures = [
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

export const commissionTiers = [
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

export const tokenRevivalTiers = [
  {
    tier: 1,
    name: 'Bronze', 
    cashDeposit: 50,
    deadTokenMin: 1500,
    deadTokenMax: 1500,
    rewards: 'Bonus credits + 1 lottery entry + deposit multiplier ×1.05',
    lotteryEntries: 1
  },
  {
    tier: 2,
    name: 'Silver',
    cashDeposit: 100,
    deadTokenMin: 3000,
    deadTokenMax: 3000,
    rewards: 'Enhanced bonus credits + 3 lottery entries + deposit multiplier ×1.1',
    lotteryEntries: 3
  },
  {
    tier: 3,
    name: 'Gold',
    cashDeposit: 250,
    deadTokenMin: 7500,
    deadTokenMax: 7500,
    rewards: 'Premium bonus credits + 7 lottery entries + deposit multiplier ×1.25',
    lotteryEntries: 7
  },
  {
    tier: 4,
    name: 'Platinum', 
    cashDeposit: 500,
    deadTokenMin: 15000,
    deadTokenMax: 15000,
    rewards: 'Maximum bonus credits + 15 lottery entries + deposit multiplier ×1.5',
    lotteryEntries: 15
  },
  {
    tier: 5,
    name: 'Diamond',
    cashDeposit: 1000,
    deadTokenMin: 30000,
    deadTokenMax: 30000,
    rewards: 'Ultimate bonus credits + 30 lottery entries + deposit multiplier ×2',
    lotteryEntries: 30
  }
];

export const tokenBundles: BundleItem[] = [
  {
    name: 'Starter Bundle',
    tokenAmount: '25,000 $PLYM',
    bonusPercentage: '+10% Bonus Tokens',
    price: 1000,
    priceCurrency: 'EUR',
    prelaunchPrice: 1000,
    listingPrice: 2000,
    icon: 'rocket',
    badgeColor: 'from-amber-600 to-amber-800',
    isPopular: false,
    description: 'Perfect for getting started with $PLYM tokens'
  },
  {
    name: 'Growth Bundle',
    tokenAmount: '75,000 $PLYM',
    bonusPercentage: '+20% Bonus Tokens',
    price: 2500,
    priceCurrency: 'EUR',
    prelaunchPrice: 2500,
    listingPrice: 6000,
    icon: 'trending-up',
    badgeColor: 'from-gray-400 to-gray-600',
    isPopular: true,
    description: 'Most popular choice for serious investors'
  },
  {
    name: 'Whale Bundle',
    tokenAmount: '200,000 $PLYM',
    bonusPercentage: '+30% Bonus Tokens',
    price: 5000,
    priceCurrency: 'EUR',
    prelaunchPrice: 5000,
    listingPrice: 16000,
    icon: 'crown',
    badgeColor: 'from-yellow-400 to-yellow-600',
    isPopular: false,
    description: 'Maximum allocation for whale investors'
  }
];

export const tokenRevivalBenefits = [
  {
    icon: 'gift',
    title: 'Bonus Credits',
    description: 'Added to your Playmatez account, redeemable at launch'
  },
  {
    icon: 'trending-up',
    title: 'Deposit Multipliers',
    description: 'Boost future deposits with exclusive multipliers'
  },
  {
    icon: 'ticket',
    title: 'Lottery Entry',
    description: 'Chance to win extra rewards from the Token Revival Lottery'
  }
];

export const rewardsFaqItems: FAQItem[] = [
  {
    question: 'When do rewards get credited?',
    answer: 'At public launch. Credits appear in your account dashboard.'
  },
  {
    question: 'Is there a cap on referrals?',
    answer: 'Yes — up to 10 referrals for pre-launch rewards.'
  },
  {
    question: 'What if I don\'t have Discord or Telegram?',
    answer: 'You can still claim the Waitlist Bonus and referrals.'
  }
];