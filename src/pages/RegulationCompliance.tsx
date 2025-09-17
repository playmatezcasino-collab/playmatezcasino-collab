import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Shield, FileText, Mail, ArrowRight, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/UI/PageHeader';

export const RegulationCompliance: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const complianceControls = [
    {
      title: 'KYC & AML',
      description: 'Verification and monitoring aligned with regulatory standards.',
      icon: Shield
    },
    {
      title: 'Responsible Gambling',
      description: 'Limits, self-exclusion, time-outs, and support links.',
      icon: AlertCircle
    },
    {
      title: 'Fair Play & RNG',
      description: 'Game fairness and audit pathways where applicable.',
      icon: CheckCircle
    },
    {
      title: 'Data Security',
      description: 'Encryption in transit/at rest; restricted access; regular reviews.',
      icon: Shield
    },
    {
      title: 'Complaints & Disputes',
      description: 'Clear procedure and response SLAs after go-live.',
      icon: FileText
    }
  ];

  const updates = [
    {
      date: 'December 2024',
      status: 'Application submitted to Curaçao Gaming Control Board',
      type: 'submitted'
    },
    {
      date: 'January 2025',
      status: 'Additional documentation provided as requested',
      type: 'progress'
    },
    {
      date: 'February 2025',
      status: 'Regulatory review in progress',
      type: 'pending'
    }
  ];

  const regulationFaqs = [
    {
      question: 'Are you licensed today?',
      answer: 'No. Our Curaçao license is pending approval. We will obtain authorization before public launch.'
    },
    {
      question: 'Will the platform launch without a license?',
      answer: 'No. Public launch requires authorization.'
    },
    {
      question: 'What does the license cover?',
      answer: 'Online gaming operations in accordance with regulatory requirements.'
    },
    {
      question: 'How will you protect players and investors?',
      answer: 'Through KYC/AML checks, responsible gambling tools, data security, and audited processes.'
    },
    {
      question: 'How will you announce approval?',
      answer: 'We will update this page and notify our community channels.'
    }
  ];

  return (
    <div className="min-h-screen section-with-top-shade">
      <div className="container mx-auto px-4 py-20">
        <PageHeader
          title="Regulation & Compliance"
          description="We are committed to operating in full compliance with applicable laws and regulatory requirements. Our gaming license application is currently under review in Curaçao. Authorization will be secured before the public launch of the platform."
        />

        {/* Status Badge */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <img 
              src="/logos/curacoa.jpeg" 
              alt="Curaçao Gaming Control Board logo" 
              className="mx-auto max-w-xs h-auto rounded-lg shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="inline-flex items-center px-6 py-3 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 font-medium">
            <Clock className="w-5 h-5 mr-2" />
            Status: License Pending (Curaçao)
          </div>
        </div>

        {/* Current Status */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-playmatez-white mb-8">Current Status</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-playmatez-gold rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <div>
                  <strong className="text-playmatez-white">Jurisdiction:</strong>
                  <span className="text-playmatez-white/90 ml-2">Curaçao (license application submitted; currently under review).</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-playmatez-gold rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <div>
                  <strong className="text-playmatez-white">Go-Live Requirement:</strong>
                  <span className="text-playmatez-white/90 ml-2">We will not launch publicly until authorization is granted.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-playmatez-gold rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <div>
                  <strong className="text-playmatez-white">Scope:</strong>
                  <span className="text-playmatez-white/90 ml-2">The license will cover our online gaming operations in line with regulator requirements.</span>
                </div>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-playmatez-gold rounded-full mr-4 mt-3 flex-shrink-0"></span>
                <div>
                  <strong className="text-playmatez-white">Transparency:</strong>
                  <span className="text-playmatez-white/90 ml-2">We will post progress updates on this page.</span>
                </div>
              </li>
            </ul>
            <p className="text-playmatez-white/60 text-sm mt-6 italic">
              This page is for information purposes and will be updated as the application progresses.
            </p>
          </div>
        </section>

        {/* Why Regulation Matters */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-playmatez-white mb-8">Why Regulation Matters</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                <span className="text-playmatez-white/90">Player protection through verified fair gaming practices and secure transactions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                <span className="text-playmatez-white/90">Anti-Money Laundering (AML) and Know Your Customer (KYC) compliance</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                <span className="text-playmatez-white/90">Responsible gambling controls and support mechanisms</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                <span className="text-playmatez-white/90">Clear dispute resolution mechanisms and complaint procedures</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 mt-1 flex-shrink-0" />
                <span className="text-playmatez-white/90">Ongoing operational oversight and regulatory compliance monitoring</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Compliance Controls */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-playmatez-white mb-8">Our Compliance Controls</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {complianceControls.map((control, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-playmatez-gold hover:bg-white/15 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <control.icon className="w-8 h-8 text-playmatez-gold mr-3" />
                  <h3 className="text-lg font-bold text-playmatez-white">{control.title}</h3>
                </div>
                <p className="text-playmatez-white/80 text-sm">{control.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline & Next Steps */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-playmatez-white mb-8">Timeline & Next Steps</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <span className="text-playmatez-white font-medium">Application Submitted</span>
              </div>
              <ArrowRight className="text-playmatez-gold w-6 h-6 transform rotate-90 md:rotate-0" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <span className="text-playmatez-white font-medium">Regulatory Review</span>
              </div>
              <ArrowRight className="text-playmatez-gold w-6 h-6 transform rotate-90 md:rotate-0" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-playmatez-white font-medium">Authorization</span>
              </div>
              <ArrowRight className="text-playmatez-gold w-6 h-6 transform rotate-90 md:rotate-0" />
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-500 rounded-full flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-white" />
                </div>
                <span className="text-playmatez-white font-medium">Public Launch</span>
              </div>
            </div>
            <p className="text-playmatez-white/60 text-sm mt-6 text-center">
              Exact timelines are determined by the regulator; we will update this page as milestones are met.
            </p>
          </div>
        </section>

        {/* Investor Information */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-playmatez-white mb-8">Investor Information</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
            <p className="text-lg text-playmatez-white/90 mb-8 leading-relaxed">
              We prioritize regulatory authorization prior to launch to protect stakeholders and ensure long-term sustainability. 
              This approach demonstrates our commitment to operating within established legal frameworks and maintaining the highest 
              standards of compliance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#"
                data-cta="download-fact-sheet"
                className="inline-flex items-center px-6 py-3 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-medium rounded-full transition-colors duration-300"
              >
                <FileText className="w-4 h-4 mr-2" />
                Download Fact Sheet
              </a>
              <a
                href="mailto:compliance@playmatez.cc"
                data-cta="contact-compliance"
                className="inline-flex items-center px-6 py-3 border-2 border-playmatez-gold text-playmatez-gold hover:bg-playmatez-gold hover:text-white font-medium rounded-full transition-colors duration-300"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Compliance
              </a>
              <Link
                to="/prelaunch"
                data-cta="join-early-access"
                className="inline-flex items-center px-6 py-3 border-2 border-playmatez-white text-playmatez-white hover:bg-playmatez-white hover:text-playmatez-green font-medium rounded-full transition-colors duration-300"
              >
                Join Early Access
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </section>

        {/* Updates & Disclosures */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-playmatez-white mb-8">Updates & Disclosures</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
            <div className="space-y-4 mb-6">
              {updates.map((update, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white/5 rounded-lg">
                  <div className={`w-3 h-3 rounded-full mt-2 flex-shrink-0 ${
                    update.type === 'submitted' ? 'bg-green-500' : 
                    update.type === 'progress' ? 'bg-blue-500' : 'bg-yellow-500'
                  }`}></div>
                  <div>
                    <div className="text-playmatez-white/60 text-sm">{update.date}</div>
                    <div className="text-playmatez-white font-medium">{update.status}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-playmatez-white/60 text-sm">
              <strong>Last updated:</strong> February 15, 2025
            </p>
          </div>
        </section>

        {/* Regulation FAQs */}
        <section className="mb-20">
          <h2 className="text-4xl font-bold text-playmatez-white mb-8">Regulation FAQs</h2>
          <div className="space-y-4">
            {regulationFaqs.map((faq, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden border border-playmatez-gold">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors duration-300"
                  aria-expanded={openFaqIndex === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <h3 className="text-xl font-bold text-playmatez-gold pr-4">
                    {faq.question}
                  </h3>
                  {openFaqIndex === index ? (
                    <ChevronUp className="text-playmatez-gold flex-shrink-0" size={24} />
                  ) : (
                    <ChevronDown className="text-playmatez-gold flex-shrink-0" size={24} />
                  )}
                </button>
                
                {openFaqIndex === index && (
                  <div id={`faq-answer-${index}`} className="px-6 pb-6">
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
        </section>

        {/* Legal Disclaimer */}
        <section className="text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <p className="text-playmatez-white/60 text-sm leading-relaxed">
              This page is provided for information only and does not constitute legal advice or a representation of 
              licensure prior to authorization. Operations will commence publicly only after applicable approvals are obtained. 
              Responsible gaming is encouraged.
            </p>
          </div>
        </section>

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
                  "mainEntity": regulationFaqs.map(faq => ({
                    "@type": "Question",
                    "name": faq.question,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": faq.answer
                    }
                  }))
                }
              ]
            })
          }}
        />
      </div>
    </div>
  );
};