import React, { useState } from 'react';
import { AlertTriangle, X } from 'lucide-react';

export const WalletGuard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isWrongNetwork] = useState(true); // Placeholder - would check actual network

  if (!isVisible || !isWrongNetwork) {
    return null;
  }

  return (
    <section className="mb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-playmatez-gold/20 backdrop-blur-sm rounded-2xl p-6 border border-playmatez-gold shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-5 h-5 text-playmatez-gold flex-shrink-0" />
              <div>
                <p className="font-medium text-playmatez-white">
                  Please switch to BNB Smart Chain (BEP-20) to continue.
                </p>
                <p className="text-sm text-playmatez-white/80 mt-1">
                  Your wallet is currently connected to the wrong network.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-playmatez-gold hover:text-playmatez-white transition-colors duration-200"
              aria-label="Dismiss network warning"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};