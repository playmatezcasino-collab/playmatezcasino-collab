import type { NavigationItem } from '../types';

export const headerNavigation: NavigationItem[] = [
  {
    id: 'about',
    labelKey: 'navigation.about',
    label: 'About',
    subItems: [
      { id: 'aboutPlaymatez', labelKey: 'navigation.aboutPlaymatez', label: 'About Playmatez', href: '/what-is-playmatez' },
      { id: 'playmatezAdvantage', labelKey: 'navigation.playmatezAdvantage', label: 'Playmatez Advantage', href: '/playmatez-advantage' },
      { id: 'contactUs', labelKey: 'navigation.contactUs', label: 'Contact Us', href: '/contact' }
    ]
  },
  {
    id: 'tokenInvestment',
    labelKey: 'navigation.tokenInvestment',
    label: 'Token & Investment',
    subItems: [
      { id: 'membershipPlans', labelKey: 'navigation.membershipPlans', label: 'Membership Plans', href: '/membership-plans' },
      { id: 'plymToken', labelKey: 'navigation.plymToken', label: '$PLYM Token', href: '/plym-token' },
      { id: 'presale', labelKey: 'navigation.presale', label: 'Presale', href: '/presale' },
    ]
  },
  {
    id: 'rewards',
    labelKey: 'navigation.rewards',
    label: 'Rewards & Referrals',
    href: '/rewards-and-referrals',
    subItems: [
      { id: 'tokenRevival', labelKey: 'navigation.tokenRevival', label: 'Token Revival Program', href: '/token-revival-program' }
    ]
  },
  {
    id: 'regulation',
    labelKey: 'navigation.regulation',
    label: 'Regulation & Compliance',
    href: '/regulation'
  }
];

// Legacy navigation items for backward compatibility
export const navigationItems: NavigationItem[] = [
  { id: 'whatisplaymatez', labelKey: 'navigation.aboutUs', label: 'About Us', href: '/what-is-playmatez' },
  { id: 'plymtoken', labelKey: 'navigation.plymToken', label: '$PLYM Token', href: '/plym-token' },
  { id: 'howtoinvest', labelKey: 'navigation.howToInvest', label: 'How to Invest', href: '/how-to-invest' },
  { id: 'playmatezadvantage', labelKey: 'navigation.playmatezAdvantage', label: 'Playmatez Advantage', href: '/playmatez-advantage' },
  { id: 'rewardsandreferrals', labelKey: 'navigation.rewardsAndReferrals', label: 'Rewards & Referrals', href: '/rewards-and-referrals' },
  { id: 'prelaunch', labelKey: 'navigation.prelaunch', label: 'Pre-Launch Sign-Up', href: '/prelaunch' },
  { id: 'regulation', labelKey: 'navigation.regulation', label: 'Regulation & Compliance', href: '/regulation' },
  { id: 'contact', labelKey: 'navigation.contactUs', label: 'Contact Us', href: '/contact' },
];