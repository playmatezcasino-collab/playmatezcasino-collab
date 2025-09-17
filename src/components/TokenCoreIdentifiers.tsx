import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const TokenCoreIdentifiers: React.FC = () => {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied'>('idle');

  const identifiers = [
    {
      label: 'Token Name',
      value: 'Playmatez Token',
      type: 'filled'
    },
    {
      label: 'Token Symbol',
      value: '$PLYM',
      type: 'filled'
    },
    {
      label: 'Network',
      value: 'Binance Smart Chain',
      type: 'filled'
    },
    {
      label: 'Token Standard',
      value: 'BEP-20',
      type: 'filled'
    },
    {
      label: 'Contract Address',
      value: '0xE6Dd9141C0Da9557759A82Ef68cadF3a0Bca72FA',
      type: 'filled',
      hasCopyButton: true
    },
    {
      label: 'Decimals',
      value: '18',
      type: 'filled'
    },
    {
      label: 'Explorer Link',
      value: 'View on BSCScan',
      type: 'link',
      href: 'https://bscscan.com/token/0xe6dd9141c0da9557759a82ef68cadf3a0bca72fa'
    }
  ];

  const handleCopy = async (value: string) => {
    if (!value || value === 'Coming Soon') return;
    
    try {
      await navigator.clipboard.writeText(value);
      setCopyStatus('copied');
      setTimeout(() => setCopyStatus('idle'), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="mb-20">
      <h3 className="text-4xl font-bold text-playmatez-white text-center mb-12 font-raleway">
        Core Token Identifiers
      </h3>
      
      <dl className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {identifiers.map((identifier, index) => (
          <div 
            key={index} 
            className="bg-playmatez-grey rounded-xl p-4 shadow-lg border border-white/10 h-full flex flex-col"
          >
            <dt className="text-playmatez-gold uppercase text-sm font-medium mb-2 font-raleway">
              {identifier.label}
            </dt>
            <dd className="flex-1 flex items-center justify-between">
              {identifier.type === 'link' ? (
                <a
                  href={identifier.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-lg font-raleway text-playmatez-gold hover:text-playmatez-white transition-colors duration-300 underline"
                >
                  {identifier.value}
                </a>
              ) : (
                <span 
                  className={`font-bold text-lg font-raleway ${
                    identifier.type === 'placeholder' 
                      ? 'text-playmatez-white/50 italic' 
                     : identifier.label === 'Contract Address' 
                       ? 'text-playmatez-white text-sm break-all'
                       : 'text-playmatez-white text-lg'
                  }`}
                >
                  {identifier.value}
                </span>
              )}
              
              {identifier.hasCopyButton && (
                <button
                  onClick={() => handleCopy(identifier.value)}
                  disabled={identifier.type === 'placeholder'}
                  aria-label="Copy contract address"
                  className={`ml-3 px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1 ${
                    identifier.type === 'placeholder'
                      ? 'bg-gray-500 text-gray-300 cursor-not-allowed opacity-50'
                      : 'bg-playmatez-green text-playmatez-white hover:bg-playmatez-green/80 hover:scale-105'
                  }`}
                >
                  {copyStatus === 'copied' ? (
                    <>
                      <Check className="w-3 h-3" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
};