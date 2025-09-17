import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSafeTranslation } from '../../utils/i18nUtils';
import * as LucideIcons from 'lucide-react';
import { LanguageSwitcher } from '../UI/LanguageSwitcher';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const { tt } = useSafeTranslation();

  const socialLinks = [
    { name: 'Telegram', url: 'https://t.me/+EYZTs2m09785N2Nk', icon: 'MessageCircle' },
    { name: 'Facebook', url: 'https://m.facebook.com/people/Playmatez/61556742454970/', icon: 'Facebook' },
    { name: 'Twitter', url: 'https://x.com/playmatezcasino', icon: 'Twitter' },
    { name: 'YouTube', url: 'https://www.youtube.com/@PlaymatezCasino', icon: 'Youtube' },
    { name: 'Instagram', url: 'https://www.instagram.com/playmatezofficial/', icon: 'Instagram' },
    { name: 'TikTok', url: 'http://tiktok.com', icon: 'Music' },
  ];

  return (
    <footer className="bg-playmatez-green text-playmatez-white apply-pulse-glowh-[700px]">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6 h-10 md:h-12 lg:h-16">
              <img 
                src="/FullLogo_Transparent_NoBuffer (2).png" 
                alt="Playmatez Logo" 
                className="h-full w-auto max-w-full object-contain"
                loading="lazy"
              />
            </div>
            <div className="space-y-2 text-sm">
              <p>167-169 Great Portland Street, W1 3</p>
              <p>+442045773683</p>
              <p>
                <a href="mailto:info@playmatez.cc" className="text-playmatez-gold hover:underline">
                  info@playmatez.cc
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-playmatez-gold">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/what-is-playmatez" className="text-playmatez-white/80 hover:text-playmatez-gold transition-colors">
                  {t('navigation.whatisplaymatez')}
                </Link>
              </li>
              <li>
                <Link to="/plym-token" className="text-playmatez-white/80 hover:text-playmatez-gold transition-colors">
                  {t('navigation.plymToken')}
                </Link>
              </li>
              <li>
                <Link to="/membership-plans" className="text-playmatez-white/80 hover:text-playmatez-gold transition-colors">
                  {tt('navigation.membershipPlans', 'Membership Plans')}
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-playmatez-white/80 hover:text-playmatez-gold transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-playmatez-white/80 hover:text-playmatez-gold transition-colors">
                  {tt('navigation.contactUs', 'Contact Us')}
                </Link>
              </li>
              <li>
                <Link to="/whitelabel" className="text-playmatez-white/80 hover:text-playmatez-gold transition-colors">
                  {t('navigation.whitelabel')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-playmatez-gold">{t('footer.followUs')}</h3>
            <div className="grid grid-cols-3 gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-playmatez-white/10 hover:bg-playmatez-gold/20 rounded-lg flex items-center justify-center hover:scale-105 transition-all duration-300 group"
                  title={social.name}
                >
                  {(() => {
                    const IconComponent = (LucideIcons as any)[social.icon];
                    return IconComponent ? (
                      <IconComponent className="w-6 h-6 text-playmatez-white opacity-80 group-hover:opacity-100 group-hover:text-playmatez-gold transition-colors duration-300" />
                    ) : (
                      <LucideIcons.Globe className="w-6 h-6 text-playmatez-white opacity-80 group-hover:opacity-100 group-hover:text-playmatez-gold transition-colors duration-300" />
                    );
                  })()}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-playmatez-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-playmatez-white/60 mb-4 md:mb-0">
              {t('footer.allRightsReserved')}
            </div>
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 text-sm">
              <LanguageSwitcher />
              <div className="flex items-center space-x-6 text-sm">
              <a
                href="https://docs.google.com/document/d/1kA4HFIddwu-mTynn2oNhg0PGh6uHCDINa0jhqw-JiCA/edit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-playmatez-white/60 hover:text-playmatez-gold transition-colors"
              >
                {t('footer.termsAndConditions')}
              </a>
              <a
                href="https://drive.google.com/file/d/1ZgU2p6OKJv69HTlayKSD_8jsQqFAAeNc/view?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="text-playmatez-white/60 hover:text-playmatez-gold transition-colors"
              >
                {t('footer.whitepaper')}
              </a>
              <a
                href="https://drive.google.com/file/d/1oI5hHUHOYVeuJVgs6-2UIHUjFHFXJ5Xz/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-playmatez-white/60 hover:text-playmatez-gold transition-colors"
              >
                {t('footer.presaleAgreement')}
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};