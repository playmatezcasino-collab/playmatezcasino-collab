import React, { useState, useRef, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';
import { useSafeTranslation } from '../../utils/i18nUtils';
import type { ContactFormData } from '../../types';

interface ContactFormProps {
  initialPackage?: string | null;
  showPackageSelector?: boolean;
}

export const ContactForm: React.FC<ContactFormProps> = ({ initialPackage, showPackageSelector = false }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showSelectedPackageMessage, setShowSelectedPackageMessage] = useState(false);
  const [selectedPackageName, setSelectedPackageName] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors }, reset, setValue } = useForm<ContactFormData>();
  const formRef = useRef<HTMLDivElement>(null);
  const { tt, ready } = useSafeTranslation();

  useEffect(() => {
    if (initialPackage) {
      setValue('investmentPackage', initialPackage);
      setSelectedPackageName(initialPackage);
      setShowSelectedPackageMessage(true);
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      setTimeout(() => {
        setShowSelectedPackageMessage(false);
        setSelectedPackageName(null);
      }, 3000);
    }
  }, [initialPackage, setValue]);

  const onSubmit = (data: ContactFormData) => {
    console.log('Form submitted:', data);
    
    // Create FormData for Netlify submission
    const formData = new FormData();
    formData.append('form-name', 'contact-form');
    
    // Append all form fields to FormData
    Object.keys(data).forEach(key => {
      const value = data[key as keyof ContactFormData];
      if (value !== undefined && value !== null) {
        formData.append(key, String(value));
      }
    });

    // Submit to Netlify
    fetch('/', {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      console.log('Form submitted successfully to Netlify');
      setShowSuccessMessage(true);
      reset();
      setValue('investmentPackage', '');
      
      // Hide the success message after 3 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    })
    .catch(error => {
      console.error('Form submission error:', error);
      // Still show success message to user, but log the error
      setShowSuccessMessage(true);
      reset();
      setValue('investmentPackage', '');
      
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    });
  };

  return (
    <>
      {/* Success Pop-up */}
      {showSuccessMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-playmatez-gold text-white p-8 rounded-xl shadow-2xl text-center animate-slide-up-fade">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-2">{tt('contact.formSubmitted', 'Form Submitted!')}</h3>
            <p className="text-lg">{tt('contact.thankYou', 'Thank you for your interest! We will contact you soon.')}</p>
          </div>
        </div>
      )}

      {/* Selected Package Toast */}
      {showSelectedPackageMessage && selectedPackageName && (
        <div className="fixed top-4 right-4 z-50 bg-playmatez-gold text-white p-4 rounded-lg shadow-lg animate-slide-up-fade">
          <div className="flex items-center">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span className="font-medium">{tt('contact.selected', 'Selected')}: {selectedPackageName}</span>
          </div>
        </div>
      )}

      <div ref={formRef} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
        <h2 className="text-2xl font-bold text-playmatez-white mb-6">{tt('contact.contactUs', 'Contact Us')}</h2>
        <p className="text-playmatez-white/80 mb-8">
          {tt('contact.useForm', 'Use the form or email us at')}{' '}
          <a href="mailto:info@playmatez.cc" className="text-playmatez-gold hover:underline">
            info@playmatez.cc
          </a>
        </p>

        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="space-y-6"
          data-netlify="true"
          name="contact-form"
          method="POST"
        >
          <input type="hidden" name="form-name" value="contact-form" />

          <div>
            <label className="block text-playmatez-white font-medium mb-2">
              {tt('contact.firstName', 'First Name')}
            </label>
            <input
              {...register('firstName', { required: tt('contact.firstNameRequired', 'First name is required') })}
              type="text"
              autoComplete="given-name"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
              placeholder={tt('contact.yourFirstName', 'Your first name')}
            />
            {errors.firstName && (
              <p className="mt-2 text-red-400 text-sm">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-playmatez-white font-medium mb-2">
              {tt('contact.email', 'Email')}
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
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
              placeholder={tt('contact.yourEmail', 'your@email.com')}
            />
            {errors.email && (
              <p className="mt-2 text-red-400 text-sm">{errors.email.message}</p>
            )}
          </div>

          {showPackageSelector && (
            <div>
              <label htmlFor="packageSelect" className="block text-playmatez-white font-medium mb-2">
                {tt('contact.interestedIn', 'I\'m most interested in')} *
              </label>
              <select
                {...register('investmentPackage', { required: showPackageSelector ? tt('contact.selectPackageRequired', 'Please select an investment package') : false })}
                id="packageSelect"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
              >
                <option value="" disabled hidden>{tt('contact.selectPackage', 'Select a package…')}</option>
                <option value="Silver – Entry Level">{tt('contact.packageSilver', 'Silver – Entry Level')}</option>
                <option value="Gold – Growth Focused (Most Popular)">{tt('contact.packageGold', 'Gold – Growth Focused (Most Popular)')}</option>
                <option value="Platinum – Premium Access">{tt('contact.packagePlatinum', 'Platinum – Premium Access')}</option>
                <option value="VIP – Elite Status (By Application Only)">{tt('contact.packageVip', 'VIP – Elite Status (By Application Only)')}</option>
              </select>
              {errors.investmentPackage && (
                <p className="mt-2 text-red-400 text-sm" role="alert">{errors.investmentPackage.message}</p>
              )}
              <p className="mt-2 text-playmatez-white/70 text-sm">{tt('contact.expressionOfInterest', 'This is an expression of interest and not a commitment.')}</p>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-playmatez-white font-medium mb-2">
                {tt('contact.countryCode', 'Country Code')}
              </label>
              <select
                {...register('countryCode', { required: tt('contact.countryCodeRequired', 'Country code is required') })}
                autoComplete="tel-country-code"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
              >
                <option value="">{tt('contact.selectCountry', 'Select country')}</option>
                <option value="+1">+1 United States</option>
                <option value="+44">+44 United Kingdom</option>
                <option value="+49">+49 Germany</option>
                <option value="+33">+33 France</option>
                <option value="+39">+39 Italy</option>
                <option value="+34">+34 Spain</option>
              </select>
              {errors.countryCode && (
                <p className="mt-2 text-red-400 text-sm">{errors.countryCode.message}</p>
              )}
            </div>

            <div>
              <label className="block text-playmatez-white font-medium mb-2">
                {tt('contact.phoneNumber', 'Phone Number')}
              </label>
              <input
                {...register('phone', { required: tt('contact.phoneRequired', 'Phone number is required') })}
                type="tel"
                autoComplete="tel"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
                placeholder={tt('contact.yourPhoneNumber', 'Your phone number')}
              />
              {errors.phone && (
                <p className="mt-2 text-red-400 text-sm">{errors.phone.message}</p>
              )}
            </div>
          </div>

          <div>
            <label className="block text-playmatez-white font-medium mb-2">
              {tt('contact.comment', 'Comment')}
            </label>
            <textarea
              {...register('comment')}
              rows={4}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent resize-none"
              placeholder={tt('contact.tellUsAbout', 'Tell us about your investment interests...')}
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-medium rounded-full transition-colors duration-300"
          >
            {tt('contact.sendMessage', 'Send Message')}
            <Send className="ml-2 w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
};