import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle } from 'lucide-react';
import { useSafeTranslation } from '../../utils/i18nUtils';
import type { ContactFormData } from '../../types';

export const AffiliateContactForm: React.FC = () => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const { tt, ready } = useSafeTranslation();

  const onSubmit = (data: ContactFormData) => {
    console.log('Affiliate form submitted:', data);
    
    // Create FormData for Netlify submission
    const formData = new FormData();
    formData.append('form-name', 'affiliate-program-signup');
    
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
      console.log('Affiliate form submitted successfully to Netlify');
      setShowSuccessMessage(true);
      reset();
      
      // Hide the success message after 3 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000);
    })
    .catch(error => {
      console.error('Affiliate form submission error:', error);
      // Still show success message to user, but log the error
      setShowSuccessMessage(true);
      reset();
      
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
            <h3 className="text-2xl font-bold mb-2">{tt('affiliate.applicationSubmitted', 'Application Submitted!')}</h3>
            <p className="text-lg">{tt('affiliate.thankYou', 'Thank you for your interest in our affiliate program! We will contact you soon.')}</p>
          </div>
        </div>
      )}

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
        <h2 className="text-2xl font-bold text-playmatez-white mb-6">{tt('affiliate.joinProgram', 'Join Our Affiliate Programme')}</h2>
        <p className="text-playmatez-white/80 mb-8">
          {tt('affiliate.fillForm', 'Fill out the form below to get started with our affiliate program! Or email us at')}{' '}
          <a href="mailto:affiliates@playmatez.cc" className="text-playmatez-gold hover:underline">
            affiliates@playmatez.cc
          </a>
        </p>

        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="space-y-6"
          data-netlify="true"
          name="affiliate-program-signup"
          method="POST"
        >
          <input type="hidden" name="form-name" value="affiliate-program-signup" />

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
              {tt('affiliate.marketingExperience', 'Tell us about your marketing experience')}
            </label>
            <textarea
              {...register('comment')}
              rows={4}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent resize-none"
              placeholder={tt('affiliate.marketingExperiencePlaceholder', 'Describe your marketing channels, audience size, previous affiliate experience...')}
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center px-6 py-3 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-medium rounded-full transition-colors duration-300"
          >
            {tt('affiliate.applyForProgram', 'Apply for Affiliate Program')}
            <Send className="ml-2 w-4 h-4" />
          </button>
        </form>
      </div>
    </>
  );
};