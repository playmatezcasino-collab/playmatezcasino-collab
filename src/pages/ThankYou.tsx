import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle, ArrowRight, Gift, Users, Bell } from 'lucide-react';

export const ThankYou: React.FC = () => {

  return (
    <div className="min-h-screen font-raleway">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-playmatez-white mb-4">
              Welcome to the <span className="text-playmatez-gold">Playmatez Family!</span>
            </h1>
            <p className="text-xl text-playmatez-white/80 leading-relaxed">
              Thank you for signing up for early access. You're now part of an exclusive group 
              that will experience the future of online gaming before anyone else.
            </p>
          </div>

          {/* What Happens Next */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-playmatez-gold mb-8">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-playmatez-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Bell className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-playmatez-white mb-2">Confirmation Email</h3>
                <p className="text-playmatez-white/80 text-sm">
                  Check your inbox for a confirmation email with your pre-launch member details.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-playmatez-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-playmatez-white mb-2">Bonus Allocation</h3>
                <p className="text-playmatez-white/80 text-sm">
                  Your exclusive bonuses and $PLYM tokens will be allocated to your account.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-playmatez-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold text-playmatez-white mb-2">Early Access</h3>
                <p className="text-playmatez-white/80 text-sm">
                  Get platform access 2 weeks before public launch with full VIP treatment.
                </p>
              </div>
            </div>
          </div>

          {/* Your Benefits */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-playmatez-white mb-8">Your Pre-Launch Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              {[
                'Exclusive $PLYM token allocation',
                'No deposit bonus package',
                'VIP customer support priority',
                'Early access to new games',
                'Enhanced loyalty program benefits',
                'Invitation to exclusive events',
                'Special reload bonuses',
                'Reduced platform fees'
              ].map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-playmatez-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-playmatez-white mb-6">Stay Connected</h3>
            <p className="text-playmatez-white/80 mb-6">
              Join our community to get the latest updates, exclusive content, and connect with other early members.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://t.me/+EYZTs2m09785N2Nk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-full transition-colors duration-300"
              >
                Join Telegram
              </a>
              <a
                href="https://www.instagram.com/playmatezofficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-medium rounded-full transition-colors duration-300"
              >
                Follow Instagram
              </a>
              <a
                href="https://www.youtube.com/@PlaymatezCasino"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-red-500 hover:bg-red-600 text-white font-medium rounded-full transition-colors duration-300"
              >
                Subscribe YouTube
              </a>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-playmatez-white">Explore More</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/what-is-playmatez"
                className="inline-flex items-center px-6 py-3 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-medium rounded-full transition-colors duration-300"
              >
                Learn About Playmatez
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link
                to="/plym-token"
                className="inline-flex items-center px-6 py-3 border-2 border-playmatez-gold text-playmatez-gold hover:bg-playmatez-gold hover:text-white font-medium rounded-full transition-colors duration-300"
              >
                Discover $PLYM Token
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <p className="text-playmatez-white/60 text-sm">
              Questions? Contact us at{' '}
              <a href="mailto:info@playmatez.cc" className="text-playmatez-gold hover:underline">
                info@playmatez.cc
              </a>{' '}
              or call +442045773683
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};