import React from 'react';
import { PageHeader } from '../components/UI/PageHeader';
import { FeatureCard } from '../components/UI/FeatureCard';
import { platformFeatures } from '../data/content';

export const WhatIsPlaymatez: React.FC = () => {
  return (
    <div className="min-h-screen section-with-top-shade">
      <div className="container mx-auto px-4 py-20">
        <PageHeader
          title="About Us"
          subtitle="Our Story and Vision"
        />

        {/* Main Content */}
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-playmatez-gold">Our Vision</h3>
            <p className="text-lg text-playmatez-white/80 leading-relaxed mb-6">
              In the fast-growing world of online gaming and digital assets, Playmatez is redefining how investors win. Unlike platforms chasing short-term hype, Playmatez combines proven blockchain technology, transparent operations, and real revenue streams to deliver lasting value.
            </p>
            <p className="text-lg text-playmatez-white/80 leading-relaxed mb-6">
              With a limited-supply token and an ecosystem spanning gaming, trading, and prediction markets, Playmatez offers early investors a rare first-mover advantage. Already attracting a growing global community of early backers, the project is built for momentum.
            </p>
            <p className="text-lg text-playmatez-white/80 leading-relaxed">
              Backed by a team with a proven track record in gaming and fintech, Playmatez is designed for trust, growth, and long-term rewards.
            </p>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-bold text-playmatez-gold mb-8">Our Story</h3>
            <p className="text-lg text-playmatez-white/80 leading-relaxed">
              Playmatez was born from a simple idea: to merge the excitement of gaming, the strategy of trading, and the fairness of blockchain into one seamless experience. What began as a vision to give players more than just a game has grown into a platform where every participant can truly own a piece of the action. We set out to create something bigger — a community-powered ecosystem where entertainment, investment, and innovation meet. At Playmatez, it's not just about playing — it's about winning together.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            Meet Our Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {[
              { name: 'Maverick', role: 'Chief Executive Officer', initials: 'M' },
              { name: 'Sarah Johnson', role: 'Chief Technology Officer', initials: 'SJ' },
              { name: 'Michael Chen', role: 'Head of Operations', initials: 'MC' },
              { name: 'Emily Davis', role: 'Marketing Director', initials: 'ED' },
              { name: 'David Wilson', role: 'Lead Developer', initials: 'DW' }
            ].map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 hover:scale-105 border border-playmatez-gold">
                <img
                  src={(() => {
                    const faceImages = [
                      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2', // Maverick - Male
                      'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2', // Sarah Johnson - Female
                      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2', // Michael Chen - Male
                      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2', // Emily Davis - Female
                      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&dpr=2'  // David Wilson - Male
                    ];
                    return faceImages[index];
                  })()}
                  alt={`${member.name} - ${member.role}`}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-4 border-2 border-playmatez-gold"
                  loading="lazy"
                />
                <h4 className="text-lg font-bold text-playmatez-white mb-2">{member.name}</h4>
                <p className="text-playmatez-gold text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};