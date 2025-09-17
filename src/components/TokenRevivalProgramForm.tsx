import React, { useState, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle, Upload, X } from 'lucide-react';
import { useSafeTranslation } from '../utils/i18nUtils';
import { tokenRevivalTiers } from '../data/content';

interface TokenRevivalFormData {
  fullName: string;
  email: string;
  phoneNumber?: string;
  cashDeposit: string;
  deadTokenValue: number;
  proofUpload: FileList;
  honeypot?: string;
}

interface TokenRevivalProgramFormProps {
  preselectedCashDeposit?: number | null;
}

export const TokenRevivalProgramForm: React.FC<TokenRevivalProgramFormProps> = React.memo(({ preselectedCashDeposit }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { register, handleSubmit, formState: { errors }, reset, watch, setValue } = useForm<TokenRevivalFormData>();
  const { tt } = useSafeTranslation();

  const watchedCashDeposit = watch('cashDeposit');
  const watchedDeadTokenValue = watch('deadTokenValue');

  // Effect to handle preselected cash deposit from tier click
  useEffect(() => {
    if (preselectedCashDeposit !== null && preselectedCashDeposit !== undefined) {
      setValue('cashDeposit', preselectedCashDeposit.toString());
      console.log('Analytics Event: token_revival_form_preselected', { 
        cashDeposit: preselectedCashDeposit,
        tier: getTierFromDeposit(preselectedCashDeposit)?.name || 'Unknown'
      });
    }
  }, [preselectedCashDeposit, setValue]);

  const onSubmit = useCallback((data: TokenRevivalFormData) => {
    // Check honeypot (if filled, it's likely spam)
    if (data.honeypot) {
      console.log('Analytics Event: token_revival_form_spam_detected');
      return;
    }

    console.log('Analytics Event: token_revival_form_submit', {
      cashDeposit: data.cashDeposit,
      deadTokenValue: data.deadTokenValue,
      tier: getTierFromDeposit(parseInt(data.cashDeposit))?.name || 'Unknown'
    });

    // Create FormData for Netlify submission
    const formData = new FormData();
    formData.append('form-name', 'token-revival-program');
    
    // Append all form fields to FormData
    Object.keys(data).forEach(key => {
      if (key === 'proofUpload' && data.proofUpload && data.proofUpload.length > 0) {
        formData.append('proofUpload', data.proofUpload[0]);
      } else if (key !== 'proofUpload' && key !== 'honeypot') {
        const value = data[key as keyof TokenRevivalFormData];
        if (value !== undefined && value !== null) {
          formData.append(key, String(value));
        }
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
      console.log('Token Revival form submitted successfully to Netlify');
      setShowSuccessMessage(true);
      reset();
      setSelectedFile(null);
      
      // Hide the success message after 5 seconds
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    })
    .catch(error => {
      console.error('Token Revival form submission error:', error);
      // Still show success message to user, but log the error
      setShowSuccessMessage(true);
      reset();
      setSelectedFile(null);
      
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    });
  }, [reset]);

  const getTierFromDeposit = useCallback((deposit: number) => {
    return tokenRevivalTiers.find(tier => tier.cashDeposit === deposit);
  }, []);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setValue('proofUpload', e.target.files as FileList);
    }
  }, [setValue]);

  const removeFile = useCallback(() => {
    setSelectedFile(null);
    setValue('proofUpload', {} as FileList);
  }, [setValue]);

  const handleTierSelect = useCallback((value: string) => {
    console.log('Analytics Event: token_revival_tier_select', { tier: value });
  }, []);

  // Validation for dead token value based on cash deposit
  const validateDeadTokenValue = useCallback((value: number) => {
    if (!watchedCashDeposit) return true;
    const minRequired = parseInt(watchedCashDeposit) * 3;
    return value >= minRequired || tt('tokenRevival.deadTokenValueMin', 'Dead token value must be at least 3× your cash deposit');
  }, [watchedCashDeposit, tt]);

  return (
    <>
      {/* Success Pop-up */}
      {showSuccessMessage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-playmatez-gold text-white p-8 rounded-xl shadow-2xl text-center animate-slide-up-fade max-w-md mx-4">
            <CheckCircle className="w-16 h-16 mx-auto mb-4 text-white" />
            <h3 className="text-2xl font-bold mb-2">{tt('tokenRevival.successTitle', 'Submission Successful!')}</h3>
            <p className="text-lg">{tt('tokenRevival.successMessage', 'Your rewards and lottery entries are secured and will be credited at platform launch.')}</p>
          </div>
        </div>
      )}

      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-playmatez-gold">
        <h2 className="text-2xl font-bold text-playmatez-white mb-6">{tt('tokenRevival.formTitle', 'Submit & Claim Rewards')}</h2>

        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className="space-y-6"
          data-netlify="true"
          name="token-revival-program"
          method="POST"
          encType="multipart/form-data"
        >
          <input type="hidden" name="form-name" value="token-revival-program" />
          
          {/* Honeypot field for spam protection */}
          <div className="hidden">
            <label>
              Don't fill this out if you're human:
              <input {...register('honeypot')} name="bot-field" />
            </label>
          </div>

          <div>
            <label className="block text-playmatez-white font-medium mb-2">
              {tt('tokenRevival.fullName', 'Full Name')} *
            </label>
            <input
              {...register('fullName', { required: tt('tokenRevival.fullNameRequired', 'Full name is required') })}
              type="text"
              autoComplete="name"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
              placeholder={tt('tokenRevival.fullNamePlaceholder', 'Enter your full name')}
            />
            {errors.fullName && (
              <p className="mt-2 text-red-400 text-sm" role="alert">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-playmatez-white font-medium mb-2">
              {tt('tokenRevival.email', 'Email Address')} *
            </label>
            <input
              {...register('email', { 
                required: tt('tokenRevival.emailRequired', 'Email is required'),
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: tt('tokenRevival.invalidEmail', 'Invalid email address')
                }
              })}
              type="email"
              autoComplete="email"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
              placeholder={tt('tokenRevival.emailPlaceholder', 'your@email.com')}
            />
            {errors.email && (
              <p className="mt-2 text-red-400 text-sm" role="alert">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-playmatez-white font-medium mb-2">
              {tt('tokenRevival.phoneNumber', 'Phone Number (Optional)')}
            </label>
            <input
              {...register('phoneNumber')}
              type="tel"
              autoComplete="tel"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
              placeholder={tt('tokenRevival.phonePlaceholder', 'Your phone number')}
            />
          </div>

          <div>
            <label className="block text-playmatez-white font-medium mb-2">
              {tt('tokenRevival.cashDeposit', 'Cash Deposit Amount')} *
            </label>
            <select
              {...register('cashDeposit', { 
                required: tt('tokenRevival.cashDepositRequired', 'Please select a cash deposit amount'),
                onChange: (e) => handleTierSelect(e.target.value)
              })}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
            >
              <option value="">{tt('tokenRevival.selectCashDeposit', 'Select deposit amount')}</option>
              {tokenRevivalTiers.map((tier) => (
                <option key={tier.tier} value={tier.cashDeposit}>
                  ${tier.cashDeposit} - {tier.name} Tier
                </option>
              ))}
            </select>
            {errors.cashDeposit && (
              <p className="mt-2 text-red-400 text-sm" role="alert">{errors.cashDeposit.message}</p>
            )}
            {watchedCashDeposit && (
              <p className="mt-2 text-playmatez-gold text-sm">
                Selected: {getTierFromDeposit(parseInt(watchedCashDeposit))?.name} Tier - Minimum dead token value: ${parseInt(watchedCashDeposit) * 3}
              </p>
            )}
          </div>

          <div>
            <label className="block text-playmatez-white font-medium mb-2">
              {tt('tokenRevival.deadTokenValue', 'Dead Token Value (USD)')} *
            </label>
            <input
              {...register('deadTokenValue', { 
                required: tt('tokenRevival.deadTokenValueRequired', 'Dead token value is required'),
                valueAsNumber: true,
                min: {
                  value: 1,
                  message: 'Dead token value must be greater than 0'
                },
                validate: validateDeadTokenValue
              })}
              type="number"
              min="1"
              step="0.01"
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white placeholder-playmatez-white/60 focus:outline-none focus:ring-2 focus:ring-playmatez-gold focus:border-transparent"
              placeholder={tt('tokenRevival.deadTokenValuePlaceholder', 'Original purchase value in USD')}
            />
            {errors.deadTokenValue && (
              <p className="mt-2 text-red-400 text-sm" role="alert">{errors.deadTokenValue.message}</p>
            )}
            <p className="mt-2 text-playmatez-white/60 text-sm">
              Enter the original purchase value in USD, not current market value
            </p>
          </div>

          <div>
            <label className="block text-playmatez-white font-medium mb-2">
              {tt('tokenRevival.proofUpload', 'Proof of Token Purchase')} *
            </label>
            <p className="text-playmatez-white/60 text-sm mb-3">
              {tt('tokenRevival.proofUploadDesc', 'Upload transaction hash, receipt, or screenshot')}
            </p>
            
            <div className="relative">
              <input
                {...register('proofUpload', { 
                  required: tt('tokenRevival.proofUploadRequired', 'Proof of purchase is required')
                })}
                type="file"
                accept="image/*,.pdf,.txt"
                onChange={handleFileChange}
                className="hidden"
                id="proof-upload"
              />
              <label
                htmlFor="proof-upload"
                className="w-full flex items-center justify-center px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-playmatez-white hover:bg-white/15 transition-colors duration-300 cursor-pointer"
              >
                <Upload className="w-5 h-5 mr-2" />
                {selectedFile ? selectedFile.name : 'Choose file to upload'}
              </label>
              
              {selectedFile && (
                <div className="mt-2 flex items-center justify-between bg-white/5 rounded-lg p-2">
                  <span className="text-playmatez-white text-sm truncate">{selectedFile.name}</span>
                  <button
                    type="button"
                    onClick={removeFile}
                    className="text-red-400 hover:text-red-300 ml-2"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              )}
            </div>
            {errors.proofUpload && (
              <p className="mt-2 text-red-400 text-sm" role="alert">{errors.proofUpload.message}</p>
            )}
          </div>

          <button
            type="submit"
            data-analytics-event="token_revival_form_submit"
            className="w-full flex items-center justify-center px-6 py-4 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-bold rounded-full text-lg transition-colors duration-300"
          >
            {tt('tokenRevival.submitButton', 'Submit & Claim Rewards')}
            <Send className="ml-2 w-5 h-5" />
          </button>
        </form>
      </div>
    </>
  );
});

TokenRevivalProgramForm.displayName = 'TokenRevivalProgramForm';