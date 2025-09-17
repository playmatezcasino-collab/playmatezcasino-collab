export interface NavigationItem {
  id: string;
  labelKey?: string;
  label: string; // Human-readable English fallback text
  href?: string;
  subItems?: { id: string; labelKey?: string; label: string; href: string }[];
}

export interface ContactFormData {
  firstName: string;
  email: string;
  phone: string;
  countryCode: string;
  comment: string;
  investmentPackage?: string;
}

export interface ContactPageFormData {
  name: string;
  email: string;
  category: string;
  message: string;
  consent: boolean;
  productName?: string;
  honeypot?: string;
}
export interface FeatureItem {
  icon: string;
  title: string;
  description?: string;
}

export interface BenefitItem {
  title: string;
  items: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface InvestmentStep {
  step: string;
  title: string;
  description: string;
}

export interface AdvantageItem {
  title: string;
  features: string[];
}

export interface BundleItem {
  name: string;
  tokenAmount: string;
  bonusPercentage: string;
  price: number;
  priceCurrency: string;
  prelaunchPrice: number;
  listingPrice: number;
  icon: string;
  badgeColor: string;
  isPopular: boolean;
  description: string;
}