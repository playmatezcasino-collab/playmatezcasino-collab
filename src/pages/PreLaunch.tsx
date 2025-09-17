import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Shield, Users, Trophy, Globe, Gamepad2, TrendingUp, Gift, Star } from 'lucide-react';
// import { PreLaunchMomentum } from '../components/PreLaunchMomentum';

interface PreLaunchFormData {
  firstName: string;
  lastName: string;
  email: string;
  country: string;
  telegram?: string;
  discord?: string;
  referralCode?: string;
  agreeTerms: boolean;
  sendUpdates?: boolean;
  honeypot?: string; // Anti-spam field
}

export const PreLaunch: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<PreLaunchFormData>();
  const navigate = useNavigate();
  const formRef = useRef<HTMLFormElement>(null);
  const whyJoinRef = useRef<HTMLDivElement>(null);
  const [showReferralInfo, setShowReferralInfo] = useState(false);
  const [showReferralAppliedNote, setShowReferralAppliedNote] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // Sanitize referral code function
  const sanitizeReferralCode = (code: string): string => {
    return code
      .trim()
      .toUpperCase()
      .replace(/[^A-Z0-9\-_]/g, '')
      .substring(0, 32);
  };

  // Auto-fill referral code from URL or localStorage
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const urlRefCode = urlParams.get('ref');
    const storedRefCode = localStorage.getItem('referral_code');
    
    let codeToApply = '';
    
    if (urlRefCode) {
      codeToApply = sanitizeReferralCode(urlRefCode);
    } else if (storedRefCode) {
      codeToApply = sanitizeReferralCode(storedRefCode);
    }
    
    if (codeToApply) {
      setValue('referralCode', codeToApply);
      setShowReferralAppliedNote(true);
      localStorage.setItem('referral_code', codeToApply);
    }
  }, [setValue]);


  const onSubmit = async (data: PreLaunchFormData) => {
    try {
      setSubmitError(false);
      
      // Remove honeypot field before submission
      const { honeypot, ...submitData } = data;
      
      // Check honeypot (if filled, it's likely spam)
      if (honeypot) {
        console.log('Analytics Event: prelaunch_submit_error', { reason: 'spam_detected' });
        return;
      }

      // Sanitize referral code if present
      if (submitData.referralCode) {
        const sanitizedCode = sanitizeReferralCode(submitData.referralCode);
        if (sanitizedCode) {
          submitData.referralCode = sanitizedCode;
          localStorage.setItem('referral_code', sanitizedCode);
        } else {
          delete submitData.referralCode;
          localStorage.removeItem('referral_code');
        }
      } else {
        localStorage.removeItem('referral_code');
      }

      // Create FormData for Netlify submission
      const formData = new FormData();
      formData.append('form-name', 'prelaunch-signup');
      
      // Append all form fields to FormData
      Object.keys(submitData).forEach(key => {
        const value = submitData[key as keyof typeof submitData];
        if (value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
      });
      
      // Append honeypot field with Netlify's expected name
      formData.append('bot-field', honeypot || '');

      // Submit to Netlify
      const response = await fetch('/', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Analytics Event: prelaunch_submit_success', submitData);
      
      // Navigate to thank you page
      navigate('/thank-you');
      
    } catch (error) {
      console.log('Analytics Event: prelaunch_submit_error', { error });
      setSubmitError(true);
    }
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToWhyJoin = () => {
    whyJoinRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const ecosystemFeatures = [
    { icon: <Gamepad2 className="w-6 h-6" />, title: '20,000+ Games', description: 'Massive game library across all categories' },
    { icon: <TrendingUp className="w-6 h-6" />, title: 'Crypto Trading', description: 'Integrated futures trading platform' },
    { icon: <Trophy className="w-6 h-6" />, title: 'Sportsbook', description: 'Comprehensive sports betting options' },
    { icon: <Globe className="w-6 h-6" />, title: 'Prediction Markets', description: 'Bet on real-world events and outcomes' }
  ];

  const bonusHighlights = [
    'No Deposit Bonus', 'Reload Bonuses', 'Deposit Match', 'Cashback Rewards',
    'High Roller Perks', 'Referral Program', 'Live Casino Bonuses', 'Loyalty Points'
  ];

  const faqItems = [
    {
      question: 'When will Playmatez launch?',
      answer: 'We\'re targeting Q2 2024 for our full platform launch. Pre-launch members will get early access 2 weeks before public launch.'
    },
    {
      question: 'What tokens will I receive?',
      answer: 'Early sign-ups will receive $PLYM tokens as part of our pre-launch bonus package. The exact amount depends on your membership tier.'
    },
    {
      question: 'Are there any geographic restrictions?',
      answer: 'Playmatez will be available globally with some regional restrictions. We\'ll notify you if your region has any limitations.'
    },
    {
      question: 'How do I claim my bonuses?',
      answer: 'Once you sign up, you\'ll receive detailed instructions via email on how to claim your pre-launch bonuses when the platform goes live.'
    },
    {
      question: 'Is my information secure?',
      answer: 'Absolutely. We use enterprise-grade security measures and never share your personal information with third parties.'
    },
    {
      question: 'Can I change my mind after signing up?',
      answer: 'Yes, you can unsubscribe at any time using the link in our emails or by contacting our support team.'
    }
  ];

  return (
    <div className="min-h-screen font-raleway section-with-top-shade">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-playmatez-white mb-6">
              Pre-Launch Access: <span className="text-playmatez-gold">Be First. Be Rewarded.</span>
            </h1>
            <p className="text-xl md:text-2xl text-playmatez-white/90 mb-8 leading-relaxed">
              Sign up now to unlock exclusive early-access bonuses and claim your share of Playmatez Tokens before launch.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button
                onClick={scrollToForm}
                className="inline-flex items-center px-8 py-4 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-105 animate-pulse hover:animate-none"
              >
                Sign Up Now
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pre-Launch Momentum Widget - Temporarily removed for debugging */}
      {/* <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <PreLaunchMomentum />
          </div>
        </div>
      </section> */}

      {/* Why Join Early Section */}
      <section ref={whyJoinRef} className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-playmatez-white mb-6">
              Why Join Early?
            </h2>
            <p className="text-xl text-playmatez-white/80 max-w-3xl mx-auto">
              Be part of the gaming revolution and unlock exclusive benefits reserved for our founding members.
            </p>
          </div>

          {/* Ecosystem Features */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-playmatez-gold text-center mb-8">Complete Gaming Ecosystem</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {ecosystemFeatures.map((feature, index) => (
                <div key={index} className="bg-playmatez-grey backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-playmatez-gold">
                  <div className="text-playmatez-gold mb-4 flex justify-center">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold text-playmatez-white mb-2">{feature.title}</h4>
                  <p className="text-playmatez-white/80 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Bonus Highlights */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-playmatez-gold text-center mb-8">Exclusive Pre-Launch Bonuses</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {bonusHighlights.map((bonus, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center border border-playmatez-gold">
                  <Gift className="w-6 h-6 text-playmatez-gold mx-auto mb-2" />
                  <p className="text-playmatez-white font-medium text-sm">{bonus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Trust Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-playmatez-white mb-6">Why Trust Playmatez?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <Shield className="w-12 h-12 text-playmatez-gold mx-auto mb-4" />
              <h4 className="text-xl font-bold text-playmatez-white mb-2">Bank-Grade Security</h4>
              <p className="text-playmatez-white/80">Your data is protected with enterprise-level encryption and security measures.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-playmatez-gold mx-auto mb-4" />
              <h4 className="text-xl font-bold text-playmatez-white mb-2">Privacy First</h4>
              <p className="text-playmatez-white/80">We never share your personal information and respect your privacy completely.</p>
            </div>
            <div className="text-center">
              <Star className="w-12 h-12 text-playmatez-gold mx-auto mb-4" />
              <h4 className="text-xl font-bold text-playmatez-white mb-2">Fair Play Guaranteed</h4>
              <p className="text-playmatez-white/80">Provably fair gaming with transparent algorithms and certified random number generation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sign-Up Form Section */}
      <section id="prelaunch-signup-form" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-playmatez-white mb-4">
                Secure Your Early Access
              </h2>
              <p className="text-lg text-playmatez-white/80">
                Join thousands of players already signed up for exclusive pre-launch benefits.
              </p>
            </div>

            <div className="mb-6">
              <div className="flex items-center mb-2">
                <label className="block text-playmatez-white font-medium">
                  Have a referral code?
                </label>
                <button
                  type="button"
                  onClick={() => setShowReferralInfo(!showReferralInfo)}
                  className="ml-2 text-playmatez-gold hover:text-playmatez-white text-sm underline transition-colors duration-300"
                >
                  What's this?
                </button>
              </div>
              <input
                {...register('referralCode', {
                  validate: (value) => {
                    if (!value) return true; // Optional field
                    const sanitized = sanitizeReferralCode(value);
                    if (sanitized !== value.trim().toUpperCase()) {
                      return 'Please enter a valid referral code (letters, numbers, dashes, underscores).';
                    }
                    return true;
                  }
                })}
                type="text"
                data-field="referral-code"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
                placeholder="Enter code (optional)"
                aria-describedby={errors.referralCode ? 'referral-error' : 'referral-helper'}
                aria-invalid={errors.referralCode ? 'true' : 'false'}
              />
              <p id="referral-helper" className="mt-1 text-playmatez-white/60 text-sm">
                If you followed a friend's link, this may be auto-filled.
              </p>
              {showReferralAppliedNote && (
                <p className="mt-1 text-playmatez-gold text-sm">
                  Referral code applied.
                </p>
              )}
              {errors.referralCode && (
                <p id="referral-error" className="mt-2 text-red-400 text-sm" role="alert">
                  {errors.referralCode.message}
                </p>
              )}
              {showReferralInfo && (
                <div className="mt-2 p-3 bg-white/5 rounded-lg border border-playmatez-gold/30">
                  <p className="text-playmatez-white/80 text-sm">
                    Referral codes credit the inviter and can unlock bonus credits at launch.
                  </p>
                </div>
              )}
            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit(onSubmit)}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-playmatez-gold"
              data-netlify="true"
              name="prelaunch-signup"
              data-cta="signup-submit"
              method="POST"
            >
              <input type="hidden" name="form-name" value="prelaunch-signup" />
              
              {/* Honeypot field for spam protection */}
              <div className="hidden">
                <label>
                  Don't fill this out if you're human:
                  <input {...register('honeypot')} name="bot-field" />
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-playmatez-white font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    {...register('firstName', { required: 'First name is required' })}
                    type="text"
                   autoComplete="given-name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
                    placeholder="Your first name"
                  />
                  {errors.firstName && (
                    <p className="mt-2 text-red-400 text-sm" role="alert">{errors.firstName.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-playmatez-white font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    {...register('lastName', { required: 'Last name is required' })}
                    type="text"
                   autoComplete="family-name"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
                    placeholder="Your last name"
                  />
                  {errors.lastName && (
                    <p className="mt-2 text-red-400 text-sm" role="alert">{errors.lastName.message}</p>
                  )}
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-playmatez-white font-medium mb-2">
                  Email Address *
                </label>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  type="email"
                 autoComplete="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p className="mt-2 text-red-400 text-sm" role="alert">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-6">
                <label className="block text-playmatez-white font-medium mb-2">
                  Country *
                </label>
                <select
                  {...register('country', { required: 'Country is required' })}
                 autoComplete="country"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
                >
                  <option value="">Select your country</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                  <option value="DE">Germany</option>
                  <option value="FR">France</option>
                  <option value="IT">Italy</option>
                  <option value="ES">Spain</option>
                  <option value="NL">Netherlands</option>
                  <option value="SE">Sweden</option>
                  <option value="NO">Norway</option>
                  <option value="DK">Denmark</option>
                  <option value="FI">Finland</option>
                  <option value="JP">Japan</option>
                  <option value="KR">South Korea</option>
                  <option value="SG">Singapore</option>
                  <option value="OTHER">Other</option>
                </select>
                {errors.country && (
                  <p className="mt-2 text-red-400 text-sm" role="alert">{errors.country.message}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-playmatez-white font-medium mb-2">
                    Telegram Handle (Optional)
                  </label>
                  <input
                    {...register('telegram')}
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
                    placeholder="@yourusername"
                  />
                </div>

                <div>
                  <label className="block text-playmatez-white font-medium mb-2">
                    Discord Handle (Optional)
                  </label>
                  <input
                    {...register('discord')}
                    type="text"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
                    placeholder="username#1234"
                  />
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <input
                    {...register('agreeTerms', { required: 'You must agree to the terms and privacy policy' })}
                    type="checkbox"
                    className="mt-1 mr-3 w-4 h-4 text-playmatez-gold bg-white/10 border-white/20 rounded focus:ring-playmatez-gold focus:ring-2"
                  />
                  <label className="text-playmatez-white text-sm">
                    I agree to the{' '}
                    <a href="https://docs.google.com/document/d/1kA4HFIddwu-mTynn2oNhg0PGh6uHCDINa0jhqw-JiCA/edit" target="_blank" rel="noopener noreferrer" className="text-playmatez-gold hover:underline">
                      Terms & Conditions
                    </a>{' '}
                    and Privacy Policy *
                  </label>
                </div>
                {errors.agreeTerms && (
                  <p className="text-red-400 text-sm" role="alert">{errors.agreeTerms.message}</p>
                )}

                <div className="flex items-start">
                  <input
                    {...register('sendUpdates')}
                    type="checkbox"
                    className="mt-1 mr-3 w-4 h-4 text-playmatez-gold bg-white/10 border-white/20 rounded focus:ring-playmatez-gold focus:ring-2"
                  />
                  <label className="text-playmatez-white text-sm">
                    Send me updates about Playmatez launch and exclusive offers
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-4 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-bold rounded-full text-lg transition-colors duration-300"
              >
                Secure My Early Access
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>

              <p className="text-center text-playmatez-white/60 text-sm mt-4">
                We'll never spam you. Unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-bold text-playmatez-white text-center mb-12">
              Frequently Asked Questions
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqItems.map((faq, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-playmatez-gold">
                  <h4 className="text-lg font-bold text-playmatez-gold mb-3">{faq.question}</h4>
                  <p className="text-playmatez-white/80 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legal Footnote */}
      <section className="py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-playmatez-white/60 text-sm leading-relaxed mb-4">
              * Bonuses and token allocations are subject to terms and conditions. Eligibility may vary by region. 
            {submitError && (
              <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm text-center">
                  Something went wrong. Please try again.
                </p>
              </div>
            )}

              Playmatez reserves the right to modify or cancel promotions at any time. 
              Please gamble responsibly and only with funds you can afford to lose.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a
                href="https://docs.google.com/document/d/1kA4HFIddwu-mTynn2oNhg0PGh6uHCDINa0jhqw-JiCA/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-playmatez-white/60 hover:text-playmatez-gold transition-colors"
              >
                Terms & Conditions
              </a>
              <span className="text-playmatez-white/40">•</span>
              <span className="text-playmatez-white/60">Privacy Policy</span>
              <span className="text-playmatez-white/40">•</span>
              <span className="text-playmatez-white/60">Responsible Gaming</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};