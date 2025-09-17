import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: 'How do I participate in the presale?',
      answer: 'Connect a BSC-compatible wallet (MetaMask, Trust Wallet), ensure you\'re on BNB Smart Chain, select your investment amount, and complete payment through our secure widget.'
    },
    {
      question: 'When do I receive my tokens?',
      answer: 'Token distribution begins 24 hours after the presale ends. Tokens will be sent directly to your wallet address used for purchase.'
    },
    {
      question: 'Which wallets are supported?',
      answer: 'We support all BSC-compatible wallets including MetaMask, Trust Wallet, Binance Chain Wallet, and any WalletConnect-enabled wallet.'
    },
    {
      question: 'What happens if the cap is reached?',
      answer: 'Once the $2M cap is reached, the presale will automatically close. No additional purchases will be accepted after this point.'
    },
    {
      question: 'Is there a refund policy?',
      answer: 'Due to the nature of blockchain transactions, all sales are final. Please ensure you understand the risks before participating.'
    },
    {
      question: 'Are there regional restrictions?',
      answer: 'Yes, residents of certain jurisdictions may be restricted from participating. KYC verification is required for all participants.'
    },
    {
      question: 'What\'s the difference between presale and listing price?',
      answer: 'Presale price is $0.004 per token, while listing price will be $0.008 - offering early supporters a 100% potential upside at launch.'
    }
  ];

  const toggleFAQ = (index: number) => {
    console.log({
      evt: 'presale_faq_toggled',
      at: new Date().toISOString(),
      meta: { question_index: index, question: faqItems[index].question }
    });
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-playmatez-gold shadow-lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-playmatez-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-playmatez-white/80">
              Everything you need to know about the $PLYM presale
            </p>
          </div>

          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white/20 rounded-xl border border-playmatez-gold shadow-sm overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/10 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-lg font-semibold text-playmatez-white pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-playmatez-gold flex-shrink-0" size={20} />
                  ) : (
                    <ChevronDown className="text-playmatez-gold flex-shrink-0" size={20} />
                  )}
                </button>
                
                {openIndex === index && (
                  <div id={`faq-answer-${index}`} className="px-6 pb-6">
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-playmatez-white/80 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};