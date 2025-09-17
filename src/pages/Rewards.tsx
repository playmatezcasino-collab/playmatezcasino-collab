import React, { useState, useEffect } from 'react';
import { Copy, Check, ExternalLink, X } from 'lucide-react';
import { PageHeader } from '../components/UI/PageHeader';

export const Rewards: React.FC = () => {
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
            title="Rewards"
            description="Welcome to our Rewards Hub — simple, transparent perks for early supporters. These benefits are designed for the pre-launch phase and won't change your experience or our site's design."
          />

          {/* Founders Waitlist Bonus */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-playmatez-white mb-6">
              Founders Waitlist Bonus
            </h2>
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
          </section>

          {/* Referral Rewards */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-playmatez-white mb-6">
              Referral Rewards
            </h2>
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
          </section>

          {/* Community Leaderboard */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-playmatez-white mb-6">
              Community Leaderboard
            </h2>
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
                  href="#telegram"
                  data-cta="telegram"
                  className="inline-flex items-center px-6 py-3 border-2 border-playmatez-gold text-playmatez-gold hover:bg-playmatez-gold hover:text-white font-medium rounded-full transition-colors duration-300"
                >
                  Join Telegram
                  <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </section>

          {/* Early Access Perks */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-playmatez-white mb-6">
              Early Access Perks
            </h2>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
              <p className="text-lg text-playmatez-white mb-4">
                Founders get <strong className="text-playmatez-gold">exclusive early access</strong> + <strong className="text-playmatez-gold">0.5% permanent cashback boost</strong> once the platform goes live.
              </p>
              <p className="text-sm text-playmatez-white/60">
                Charge: You could later monetize this as a VIP entry pass ($50–$100 one-time fee).
              </p>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-playmatez-white mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-playmatez-gold">
                <h3 className="text-xl font-bold text-playmatez-gold mb-3">
                  When do rewards get credited?
                </h3>
                <p className="text-playmatez-white/90">
                  At public launch. Credits appear in your account dashboard.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-playmatez-gold">
                <h3 className="text-xl font-bold text-playmatez-gold mb-3">
                  Is there a cap on referrals?
                </h3>
                <p className="text-playmatez-white/90">
                  Yes — up to 10 referrals for pre-launch rewards.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-playmatez-gold">
                <h3 className="text-xl font-bold text-playmatez-gold mb-3">
                  What if I don't have Discord or Telegram?
                </h3>
                <p className="text-playmatez-white/90">
                  You can still claim the Waitlist Bonus and referrals.
                </p>
              </div>
            </div>
          </section>

          {/* Footer Note */}
          <div className="text-center">
            <p className="text-sm text-playmatez-white/60">
              Terms apply. Bonuses are promotional credits, non-withdrawable until wagering criteria are met.
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
                    "mainEntity": [
                      {
                        "@type": "Question",
                        "name": "When do rewards get credited?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "At public launch. Credits appear in your account dashboard."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "Is there a cap on referrals?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "Yes — up to 10 referrals for pre-launch rewards."
                        }
                      },
                      {
                        "@type": "Question",
                        "name": "What if I don't have Discord or Telegram?",
                        "acceptedAnswer": {
                          "@type": "Answer",
                          "text": "You can still claim the Waitlist Bonus and referrals."
                        }
                      }
                    ]
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