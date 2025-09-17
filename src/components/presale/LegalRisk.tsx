import React from 'react';
import { AlertTriangle, ExternalLink } from 'lucide-react';

export const LegalRisk: React.FC = () => {
  return (
    <section className="mb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-playmatez-gold shadow-lg">
          {/* Risk Disclaimer */}
          <div className="bg-red-500/20 border border-red-500 rounded-xl p-6 mb-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-bold text-red-700 mb-2">Risk Disclosure</h3>
                <p className="text-red-600 leading-relaxed mb-4">
                  All token purchases involve risk. Cryptocurrency investments are highly volatile and may result in partial or total loss of funds. 
                  This is not financial advice. Please conduct your own research and consult with financial advisors before making investment decisions.
                </p>
                <a
                  href="/risk-disclosure"
                  className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors duration-200"
                >
                  Read Full Risk Disclosure
                  <ExternalLink className="ml-1 w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Legal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-playmatez-white/80">
            <div>
              <h4 className="font-semibold text-playmatez-white mb-3">Jurisdiction & Compliance</h4>
              <ul className="space-y-2">
                <li>• Regulated under applicable securities laws</li>
                <li>• KYC/AML compliance required for all participants</li>
                <li>• Geographic restrictions may apply</li>
                <li>• Tax obligations are participant's responsibility</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-playmatez-white mb-3">Important Terms</h4>
              <ul className="space-y-2">
                <li>• All sales are final - no refunds</li>
                <li>• Token distribution subject to vesting schedule</li>
                <li>• Smart contract risks apply</li>
                <li>• Platform development risks exist</li>
              </ul>
            </div>
          </div>

          {/* Footer Links */}
          <div className="mt-8 pt-6 border-t border-white/20 text-center">
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <a href="/terms" className="text-playmatez-gold hover:text-playmatez-white transition-colors duration-200">
                Terms of Service
              </a>
              <a href="/privacy" className="text-playmatez-gold hover:text-playmatez-white transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="/risk-disclosure" className="text-playmatez-gold hover:text-playmatez-white transition-colors duration-200">
                Risk Disclosure
              </a>
              <a href="/contact" className="text-playmatez-gold hover:text-playmatez-white transition-colors duration-200">
                Contact Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};