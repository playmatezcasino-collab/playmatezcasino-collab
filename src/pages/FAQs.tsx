import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { PageHeader } from '../components/UI/PageHeader';
import { faqItems } from '../data/content';

export const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen section-with-top-shade">
      <div className="container mx-auto px-4 py-20">
        <PageHeader
          title="Frequently Asked Questions"
          subtitle="Everything You Need to Know"
        />

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold text-playmatez-gold pr-4">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="text-playmatez-gold flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-playmatez-gold flex-shrink-0" size={24} />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="pt-4 border-t border-white/20">
                      <p className="text-playmatez-white/90 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-20 bg-gradient-gold rounded-2xl p-8 lg:p-12 text-center">
          <h3 className="text-3xl font-bold text-white mb-6">
            Still Have Questions?
          </h3>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Our support team is here to help. Contact us directly for personalized assistance 
            with your investment questions or technical issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@playmatez.cc"
              className="inline-flex items-center px-6 py-3 bg-white text-playmatez-gold font-bold rounded-full hover:bg-gray-100 transition-colors duration-300"
            >
              Email Support
            </a>
            <a
              href="https://t.me/+EYZTs2m09785N2Nk"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-playmatez-gold transition-colors duration-300"
            >
              Join Telegram
            </a>
          </div>
          <div className="mt-6 text-white/80">
            <p>Response time: Within 24 hours</p>
            <p>Phone: +442045773683</p>
          </div>
        </div>
      </div>
    </div>
  );
};