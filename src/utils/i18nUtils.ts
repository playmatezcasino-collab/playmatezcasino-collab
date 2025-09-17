import { useTranslation } from 'react-i18next';

/**
 * Safe translation helper that never returns raw keys or empty strings
 * @param key - Translation key
 * @param englishFallback - English fallback text to use if translation is missing
 * @param options - Optional interpolation options
 * @returns Translated text or English fallback, never raw keys or empty strings
 */
export const useSafeTranslation = () => {
  const { t, ready } = useTranslation();
  
  const tt = (key: string, englishFallback: string, options?: any): string => {
    // If i18n is not ready, return English fallback
    if (!ready) {
      return englishFallback;
    }
    
    // Get translation
    const translation = t(key, options);
    
    // If translation is missing (returns the key) or empty, return English fallback
    if (!translation || translation === key || translation.trim() === '') {
      return englishFallback;
    }
    
    return translation;
  };
  
  return { tt, ready };
};