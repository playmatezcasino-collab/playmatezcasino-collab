export interface PageMetaInfo {
  title: string;
  description: string;
}

export const pageMetadata: Record<string, PageMetaInfo> = {
  '/': {
    title: 'Playmatez - The Future of Online Gaming & Crypto Investment',
    description: 'Join Playmatez, the revolutionary gaming platform combining casino games, sports betting, and crypto trading. Invest in $PLYM tokens and earn dividends from our growing ecosystem.'
  },
  '/what-is-playmatez': {
    title: 'About Playmatez - Revolutionary Gaming & Investment Platform',
    description: 'Discover Playmatez, the innovative platform merging gaming, betting, and crypto trading. Learn about our vision, experienced team, and how we\'re revolutionizing online entertainment.'
  },
  '/plym-token': {
    title: '$PLYM Token - Gaming Ecosystem Utility & Investment Token',
    description: 'Learn about $PLYM token - the heart of Playmatez ecosystem. Discover tokenomics, utility features, revenue sharing, governance rights, and investment opportunities.'
  },
  '/membership-plans': {
    title: 'Membership Plans - Exclusive Benefits & Early Access | Playmatez',
    description: 'Join Playmatez exclusive membership program. Choose from Bronze, Silver, or Gold tiers. Get early casino access, $PLYM token priority, bonus credits, VIP support, and more.'
  },
  '/playmatez-advantage': {
    title: 'Playmatez Advantage - Why Choose Our Gaming Platform',
    description: 'Discover what sets Playmatez apart: experienced team, high-growth industry, futures trading integration, VIP programs, and multiple revenue streams for investors.'
  },
  '/rewards-and-referrals': {
    title: 'Rewards & Referrals',
    description: 'Explore pre-launch rewards and our referrals/affiliate programme. Join the waitlist, invite friends, and earn bonus credits.'
  },
  '/faqs': {
    title: 'Playmatez FAQ - Gaming Platform & Investment Questions Answered',
    description: 'Get answers to frequently asked questions about Playmatez gaming platform, $PLYM token investment, security, benefits, and how to get started.'
  },
  '/prelaunch': {
    title: 'Playmatez Pre-Launch Signup',
    description: 'Join our pre-launch waitlist. Enter a referral code for bonus credits at launch.'
  },
  '/thank-you': {
    title: 'Thank You - Welcome to Playmatez Pre-Launch Community',
    description: 'Thank you for joining Playmatez pre-launch! Check your email for confirmation and get ready for exclusive bonuses, early access, and VIP benefits.'
  },
  '/regulation': {
    title: 'Regulation & Compliance — License Pending (Curaçao)',
    description: 'Learn about our regulation and compliance approach. Our Curaçao gaming license is pending approval; authorization will be secured before public launch.'
  },
  '/contact': {
    title: 'Contact Playmatez - Get in Touch with Our Team',
    description: 'Contact Playmatez for questions, partnerships, or affiliate inquiries. Reach out to our team for support, business opportunities, and more information about our gaming platform.'
  },
  '/token-revival-program': {
    title: 'Token Revival Program - Turn Dead Tokens into Rewards | Playmatez',
    description: 'Submit your dead tokens and cash deposit to earn exclusive bonus credits, deposit multipliers, and lottery entries. All rewards redeemable at Playmatez platform launch.'
  },
  '/bundles': {
    title: 'Playmatez Token Bundles Presale - Exclusive $PLYM Investment Packages',
    description: 'Choose from exclusive $PLYM token bundles with bonus tokens, better pricing, and priority access. Starter, Growth, and Whale bundles available with up to 30% bonus tokens.'
  },
  // Default fallback for any unmatched routes
  'default': {
    title: 'Playmatez - The Future of Online Gaming',
    description: 'Playmatez combines gaming, betting, and crypto trading in one revolutionary platform. Join our community and invest in the future of online entertainment.'
  }
};