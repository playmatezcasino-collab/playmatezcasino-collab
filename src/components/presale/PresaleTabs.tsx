import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { HowToBuyContent } from './HowToBuyContent';

type TabType = 'howToBuy' | 'whitepaper';

export const PresaleTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('howToBuy');

  return (
    <>
      {/* Tab Navigation */}
      <div className="mb-8">
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
          {/* How to Buy Tab */}
          <button
            onClick={() => {
              setActiveTab('howToBuy');
              setTimeout(() => {
                document.getElementById('how-to-buy-section')?.scrollIntoView({ behavior: 'smooth' });
              }, 100);
            }}
            className={`flex-1 sm:flex-none px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 min-w-[200px] ${
              activeTab === 'howToBuy'
                ? 'bg-playmatez-gold text-white shadow-lg'
                : 'bg-white/10 text-playmatez-white hover:bg-white/20 border border-playmatez-gold'
            }`}
          >
            <div className="text-center">
              <div className="font-bold">How to Buy</div>
              <div className="text-sm opacity-80">Purchase $PLYM tokens</div>
            </div>
          </button>

          {/* Whitepaper Direct Link */}
          <a
            href="https://docs.google.com/presentation/d/1swCUSm5kAGBfyd_aULceMbYzZir2xduW/edit?usp=drive_link&ouid=113772215348363508195&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 sm:flex-none px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 min-w-[200px] bg-white/10 text-playmatez-white hover:bg-white/20 border border-playmatez-gold"
          >
            <div className="text-center">
              <div className="font-bold flex items-center justify-center">
                Whitepaper
                <ExternalLink className="w-4 h-4 ml-2" />
              </div>
              <div className="text-sm opacity-80">Read our vision</div>
            </div>
          </a>
        </div>
      </div>

      {/* Tab Content */}
      <div className="transition-all duration-300">
        <HowToBuyContent />
      </div>
    </>
  );
};