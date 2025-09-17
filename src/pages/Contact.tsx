import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, Mail, ArrowRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useSafeTranslation } from '../utils/i18nUtils';
import { PageHeader } from '../components/UI/PageHeader';
import * as LucideIcons from 'lucide-react';

interface ContactFormData {
  name: string;
  email: string;
  category: string;
  message: string;
  consent: boolean;
  productType?: string;
  honeypot?: string; // Anti-spam field
}

export const Contact: React.FC = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const location = useLocation();
  const { tt, ready } = useSafeTranslation();

  // Extract category and productName from query parameters
  const searchParams = new URLSearchParams(location.search);
  const prefilledCategory = searchParams.get('category');
  const prefilledProductName = searchParams.get('productName');

  // Generate default message if productName is provided
  const defaultMessage = prefilledProductName 
    ? `I'm interested in the ${prefilledProductName}. Please provide more information about pricing, benefits, and next steps.`
    : '';

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>({
    defaultValues: {
      category: prefilledCategory || '',
      message: defaultMessage,
      productName: prefilledProductName || ''
    }
  });

  const onSubmit = (data: ContactFormData) => {
    // Check honeypot (if filled, it's likely spam)
    if (data.honeypot) {
      console.log('Spam detected');
      return;
    }

    console.log('Contact form submitted:', data);
    
    // Show success message
    setShowSuccessMessage(true);
    reset();
    
    // Hide the success message after 5 seconds
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  const socialLinks = [
    { name: 'Telegram', url: 'https://t.me/+EYZTs2m09785N2Nk', icon: 'MessageCircle' },
    { name: 'Facebook', url: 'https://m.facebook.com/people/Playmatez/61556742454970/', icon: 'Facebook' },
    { name: 'Twitter', url: 'https://x.com/playmatezcasino', icon: 'Twitter' },
    { name: 'YouTube', url: 'https://www.youtube.com/@PlaymatezCasino', icon: 'Youtube' },
    { name: 'Instagram', url: 'https://www.instagram.com/playmatezofficial/', icon: 'Instagram' },
    { name: 'TikTok', url: 'http://tiktok.com', icon: 'Music' },
  ];

  return (
    <>
      {/* Success Toast */}
      {showSuccessMessage && (
        <div className="fixed top-4 right-4 z-50 bg-playmatez-gold text-white p-4 rounded-lg shadow-lg animate-slide-up-fade">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">{tt('contact.successMessage', 'Thanks — we\'ll reply within 1–2 business days (pre-launch).')}</span>
          </div>
        </div>
      )}

      <div className="min-h-screen section-with-top-shade">
        <div className="container mx-auto px-4 py-20">
          <PageHeader
            title={tt('contact.pageTitle', 'Contact Us')}
            description={tt('contact.pageDescription', 'Questions, partnerships, or affiliate inquiries? We\'d love to hear from you.')}
          />

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Honeypot field for spam protection */}
                    <div className="hidden">
                      <label>
                        {tt('contact.honeypotLabel', 'Don\'t fill this out if you\'re human:')}
                        <input {...register('honeypot')} name="bot-field" />
                      </label>
                    </div>

                    <div>
                      <label className="block text-playmatez-white font-medium mb-2">
                        {tt('contact.name', 'Name')} *
                      </label>
                      <input
                        {...register('name', { required: tt('contact.nameRequired', 'Name is required') })}
                        type="text"
                        autoComplete="name"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent min-h-[44px]"
                        placeholder={tt('contact.namePlaceholder', 'Your full name')}
                        aria-describedby={errors.name ? 'name-error' : undefined}
                        aria-invalid={errors.name ? 'true' : 'false'}
                      />
                      {errors.name && (
                        <p id="name-error" className="mt-2 text-red-400 text-sm" role="alert">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-playmatez-white font-medium mb-2">
                        {tt('contact.email', 'Email')} *
                      </label>
                      <input
                        {...register('email', { 
                          required: tt('contact.emailRequired', 'Email is required'),
                          pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: tt('contact.invalidEmail', 'Invalid email address')
                          }
                        })}
                        type="email"
                        autoComplete="email"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent min-h-[44px]"
                        placeholder={tt('contact.emailPlaceholder', 'your@email.com')}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        aria-invalid={errors.email ? 'true' : 'false'}
                      />
                      {errors.email && (
                        <p id="email-error" className="mt-2 text-red-400 text-sm" role="alert">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-playmatez-white font-medium mb-2">
                        {tt('contact.category', 'Category')} *
                      </label>
                      <select
                        {...register('category', { required: tt('contact.categoryRequired', 'Please select a category') })}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent min-h-[44px]"
                        aria-describedby={errors.category ? 'category-error' : undefined}
                        aria-invalid={errors.category ? 'true' : 'false'}
                      >
                        <option value="">{tt('contact.selectCategory', 'Select a category')}</option>
                        <option value="general">{tt('contact.categoryGeneral', 'General')}</option>
                        <option value="partnerships">{tt('contact.categoryPartnerships', 'Partnerships')}</option>
                        <option value="affiliates">{tt('contact.categoryAffiliates', 'Affiliates')}</option>
                        <option value="compliance">{tt('contact.categoryCompliance', 'Compliance')}</option>
                        <option value="bundles">{tt('contact.categoryBundles', 'Bundles')}</option>
                      </select>
                      {errors.category && (
                        <p id="category-error" className="mt-2 text-red-400 text-sm" role="alert">
                          {errors.category.message}
                        </p>
                      )}
                    </div>

                    {/* Product Name Field (if pre-filled) */}
                    {prefilledProductName && (
                      <div>
                        <label className="block text-playmatez-white font-medium mb-2">
                          {tt('contact.productName', 'Product of Interest')}
                        </label>
                        <input
                          {...register('productName')}
                          type="text"
                          readOnly
                          className="w-full px-4 py-3 bg-playmatez-gold/20 border border-playmatez-gold rounded-lg text-playmatez-white font-medium cursor-not-allowed min-h-[44px]"
                        />
                        <p className="mt-1 text-playmatez-gold text-sm">
                          {tt('contact.productNameNote', 'This field has been pre-filled based on your selection.')}
                        </p>
                      </div>
                    )}

                    <div>
                      <label className="block text-playmatez-white font-medium mb-2">
                        {tt('contact.message', 'Message')} *
                      </label>
                      <textarea
                        {...register('message', { required: tt('contact.messageRequired', 'Message is required') })}
                        rows={6}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent resize-none"
                        placeholder={tt('contact.messagePlaceholder', 'Tell us how we can help you...')}
                        aria-describedby={errors.message ? 'message-error' : undefined}
                        aria-invalid={errors.message ? 'true' : 'false'}
                      />
                      {errors.message && (
                        <p id="message-error" className="mt-2 text-red-400 text-sm" role="alert">
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    <div className="flex items-start">
                      <input
                        {...register('consent', { required: tt('contact.consentRequired', 'You must agree to allow us to reply to your inquiry') })}
                        type="checkbox"
                        className="mt-1 mr-3 w-4 h-4 text-playmatez-gold bg-white/10 border-white/20 rounded focus:ring-playmatez-gold focus:ring-2"
                        aria-describedby={errors.consent ? 'consent-error' : undefined}
                        aria-invalid={errors.consent ? 'true' : 'false'}
                      />
                      <label className="text-playmatez-white text-sm">
                        {tt('contact.consentText', 'By submitting, you agree we may use this info to reply to your inquiry.')}
                      </label>
                    </div>
                    {errors.consent && (
                      <p id="consent-error" className="text-red-400 text-sm" role="alert">
                        {errors.consent.message}
                      </p>
                    )}

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center px-6 py-3 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-medium rounded-full transition-colors duration-300 min-h-[44px]"
                    >
                      {tt('contact.sendMessage', 'Send Message')}
                      <Send className="ml-2 w-4 h-4" />
                    </button>
                  </form>

                  {/* Static Email */}
                  <div className="mt-8 pt-6 border-t border-white/20 text-center">
                    <p className="text-playmatez-white/80 text-sm mb-2">
                      {tt('contact.orEmailUs', 'Or email us directly:')}
                    </p>
                    <a
                      href="mailto:support@playmatez.cc"
                      className="inline-flex items-center text-playmatez-gold hover:text-playmatez-white transition-colors duration-300"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      support@playmatez.cc
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
                  <h3 className="text-3xl font-bold text-playmatez-white mb-6">
                    {tt('contact.followUs', 'Follow Us')}
                  </h3>
                  <p className="text-playmatez-white/80 mb-8">
                    {tt('contact.followUsDescription', 'Stay connected with Playmatez across all our social media channels for the latest updates and community discussions.')}
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center p-4 bg-white/5 hover:bg-playmatez-gold/20 rounded-lg transition-all duration-300 hover:scale-105 group min-h-[80px] justify-center"
                        aria-label={tt('contact.followUsOn', 'Follow us on {{platform}}', { platform: tt(`contact.social.${social.name.toLowerCase()}`, social.name) })}
                      >
                        {(() => {
                          const IconComponent = (LucideIcons as any)[social.icon];
                          return IconComponent ? (
                            <IconComponent className="w-8 h-8 text-playmatez-white/80 group-hover:text-playmatez-gold transition-colors duration-300 mb-2" />
                          ) : (
                            <LucideIcons.Globe className="w-8 h-8 text-playmatez-white/80 group-hover:text-playmatez-gold transition-colors duration-300 mb-2" />
                          );
                        })()}
                        <span className="text-sm font-medium text-playmatez-white/80 group-hover:text-playmatez-gold transition-colors duration-300">
                          {tt(`contact.social.${social.name.toLowerCase()}`, social.name)}
                        </span>
                      </a>
                    ))}
                  </div>

                  {/* Additional Contact Info */}
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <h4 className="text-lg font-bold text-playmatez-white mb-4">
                      {tt('contact.businessHours', 'Business Information')}
                    </h4>
                    <div className="space-y-2 text-sm text-playmatez-white/80">
                      <p>{tt('contact.responseTime', 'Response time: Within 1–2 business days')}</p>
                      <p>{tt('contact.phone', 'Phone')}: +442045773683</p>
                      <p>{tt('contact.address', 'Address')}: 167-169 Great Portland Street, London W1W 5PF</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment CTA */}
            <div className="mt-8 text-center">
              <p className="text-playmatez-white/80">
                {tt('contact.investLinkText', 'Looking to invest? → ')}
                <Link
                  to="/how-to-invest"
                  data-cta="invest-from-contact"
                  className="inline-flex items-center text-playmatez-gold hover:text-playmatez-white transition-colors duration-300 font-semibold"
                >
                  {tt('contact.investLinkCta', 'Learn more on our Investment page.')}
                  <ArrowRight className="ml-2 w-4 h-4" aria-hidden="true" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};