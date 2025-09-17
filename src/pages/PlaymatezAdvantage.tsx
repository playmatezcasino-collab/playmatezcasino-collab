import React from 'react';
import { TrendingUp, Users, DollarSign, BarChart2, Crown, RefreshCw } from 'lucide-react';
import { PageHeader } from '../components/UI/PageHeader';
import { playmatezAdvantages } from '../data/content';

export const PlaymatezAdvantage: React.FC = () => {
  // Helper function to get Lucide icon component
  const getIconComponent = (iconName: string) => {
    const iconMap: { [key: string]: React.ComponentType<any> } = {
      'trending-up': TrendingUp,
      'users': Users,
      'dollar-sign': DollarSign,
      'bar-chart-2': BarChart2,
      'crown': Crown,
      'refresh-cw': RefreshCw,
    };
    return iconMap[iconName] || TrendingUp;
  };

  return (
    <div className="min-h-screen section-with-top-shade">
      <div className="container mx-auto px-4 py-20">
        <PageHeader
          title="The Playmatez Advantage"
          subtitle="What Sets Us Apart"
          description="Discover the unique advantages that make Playmatez the premier choice for both players and investors in the online gaming industry."
        />

        {/* Main Advantages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div className="relative">
            <div className="bg-gradient-gold rounded-2xl p-8 h-full border border-playmatez-gold">
              <div className="h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-6">🎯</div>
                  <h3 className="text-3xl font-bold mb-4">Market Leadership</h3>
                  <p className="text-xl opacity-90">
                    Positioning ourselves as the leading innovation in online gaming and investment
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {[
            {
              title: 'High Growth Industry',
              description: 'The online gaming industry is experiencing unprecedented growth, with projections showing continued expansion over the next decade.',
              icon: 'trending-up',
              stats: '$180B+ Market Size'
            },
            {
              title: 'Experienced Team',
              description: 'Our leadership team brings decades of combined experience in gaming, technology, and financial services.',
              icon: 'users',
              stats: '50+ Years Combined'
            },
            {
              title: 'High Returns for Players',
              description: 'We offer some of the highest return rates and most generous bonus structures in the industry.',
              icon: 'dollar-sign',
              stats: '98.5% RTP Average'
            },
            {
              title: 'Futures Trading Integration',
              description: 'First platform to seamlessly integrate futures trading capabilities within a gaming environment.',
              icon: 'bar-chart-2',
              stats: 'Patent Pending'
            },
            {
              title: 'VIP & Loyalty Programs',
              description: 'Exclusive programs designed to reward our most valued players and investors with premium benefits.',
              icon: 'crown',
              stats: '4 Tier System'
            },
            {
              title: 'Multiple Revenue Streams',
              description: 'Diversified revenue model including gaming, trading commissions, affiliate programs, and token appreciation.',
              icon: 'refresh-cw',
              stats: '6 Revenue Sources'
            }
          ].map((advantage, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="flex justify-center mb-3">
                  {(() => {
                    const IconComponent = getIconComponent(advantage.icon);
                    return <IconComponent className="w-12 h-12 text-playmatez-gold" strokeWidth={1.5} />;
                  })()}
                </div>
                <h4 className="text-xl font-bold text-playmatez-white mb-2">{advantage.title}</h4>
                <div className="text-playmatez-gold font-bold text-sm">{advantage.stats}</div>
              </div>
              <p className="text-playmatez-white/80 text-sm leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>

        {/* Competitive Analysis */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-playmatez-gold">
          <h3 className="text-4xl font-bold text-playmatez-white text-center mb-12">
            Competitive Advantages
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-playmatez-gold/30">
                  <th className="pb-4 text-playmatez-white font-bold">Feature</th>
                  <th className="pb-4 text-playmatez-gold font-bold text-center">Playmatez</th>
                  <th className="pb-4 text-playmatez-white/60 font-bold text-center">Traditional Casinos</th>
                </tr>
              </thead>
              <tbody className="space-y-4">
                {[
                  { feature: 'Futures Trading', playmatez: '✅', competitors: '❌' },
                  { feature: 'Virtual Hosts', playmatez: '✅', competitors: '❌' },
                  { feature: 'Revenue Sharing', playmatez: '✅', competitors: '❌' },
                  { feature: 'Governance Rights', playmatez: '✅', competitors: '❌' },
                  { feature: 'Anti-Inflation Mechanics', playmatez: '✅', competitors: '❌' },
                  { feature: 'Multi-tier VIP System', playmatez: '✅', competitors: 'Limited' },
                ].map((row, index) => (
                  <tr key={index} className="border-b border-white/10">
                    <td className="py-4 text-playmatez-white">{row.feature}</td>
                    <td className="py-4 text-center text-2xl">{row.playmatez}</td>
                    <td className="py-4 text-center text-playmatez-white/60">{row.competitors}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};