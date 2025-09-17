import React from 'react';
import { Play, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSafeTranslation } from '../utils/i18nUtils';
import { FeatureCard } from '../components/UI/FeatureCard';
import { platformFeatures, partnersData } from '../data/content';

export const Home: React.FC = () => {
  const { t } = useTranslation();
  const { tt } = useSafeTranslation();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('YOUR_IMAGE_URL_HERE')] bg-cover bg-center opacity-10"></div>
        <div className="relative container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="mb-6 flex justify-center">
              <img 
                src="/FullLogo_Transparent_NoBuffer (2).png" 
                alt="What is Playmatez Casino?" 
                className="h-24 md:h-40 lg:h-48 w-auto max-w-full object-contain"
                loading="eager"
              />
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-playmatez-white mb-8">
              {t('home.heroTitle')}
            </h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a
                href="https://drive.google.com/file/d/1ZgU2p6OKJv69HTlayKSD_8jsQqFAAeNc/view?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                {t('home.whitepaper')}
              </a>
              <a
                href="https://demo.playmatez.cc/"
                className="inline-flex items-center px-8 py-4 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* How We're Different Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-playmatez-white mb-8">
              {t('home.whyChoose')}
            </h2>
            <div className="relative max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 aspect-video border border-playmatez-gold overflow-hidden">
                <iframe
                  src="https://www.youtube.com/embed/CoNbmy2HN6Y?si=rIiHVQIkoC8qu1iM"
                  title="YouTube video player"
                  className="w-full h-full rounded-xl"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </div>
            <p className="text-lg text-playmatez-white/80 max-w-4xl mx-auto mt-8 leading-relaxed">
              {t('home.ownTheGame')}
            </p>
          </div>
        </div>
      </section>

      {/* In The Media Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-playmatez-white mb-8 text-center">
              {t('home.inTheMedia')}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
                <div className="w-full h-10 md:h-12 lg:h-16 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                  <a
                    href="https://medium.com/@playmatezcasino"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full rounded-lg hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
                  >
                    <img
                      src="/Medium_idI7Bux0Dh_0.svg"
                      alt="Medium - Playmatez Casino"
                      className="h-full w-auto max-w-full object-contain"
                      loading="lazy"
                    />
                  </a>
                </div>
                <h3 className="text-lg font-bold text-playmatez-white mb-2">Medium</h3>
                <p className="text-playmatez-white/80 text-sm">{t('home.readArticles')}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
                <div className="w-full h-10 md:h-12 lg:h-16 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                <a
                  href="https://mirror.xyz/0x74DabD069c200FB1F044A61052792B145c3c00F5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-full rounded-lg hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
                >
                  <img
                    src="/logos/mirror copy.png"
                    alt="Mirror.xyz - Playmatez"
                    className="h-full w-auto max-w-full object-contain"
                    loading="lazy"
                  />
                </a>
                </div>
                <h3 className="text-lg font-bold text-playmatez-white mb-2">Mirror.xyz</h3>
                <p className="text-playmatez-white/80 text-sm">{t('home.readLatestArticles')}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
                <div className="w-full h-10 md:h-12 lg:h-16 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                  <a
                    href="https://hackernoon.com/u/playmatez"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full rounded-lg hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
                  >
                    <img
                      src="/Artboard+3.webp"
                      alt="HackerNoon - Playmatez"
                      className="h-full w-auto max-w-full object-contain"
                      loading="lazy"
                    />
                  </a>
                </div>
                <h3 className="text-lg font-bold text-playmatez-white mb-2">HackerNoon</h3>
                <p className="text-playmatez-white/80 text-sm">{t('home.readHackerNoon')}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/15 transition-colors duration-300">
                <div className="w-full h-10 md:h-12 lg:h-16 bg-white/20 rounded-lg mb-4 flex items-center justify-center">
                  <a
                    href="https://steemit.com/crypto/@playmatez/introducing-playmatez-the-future-of-gaming-betting-and-crypto-innovation"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full rounded-lg hover:bg-white/30 transition-colors duration-300 flex items-center justify-center"
                  >
                    <img
                      src="/logos/Steemit_Logo.svg.png"
                      alt="Steemit - Playmatez"
                      className="h-full object-contain"
                      loading="lazy"
                    />
                  </a>
                </div>
                <h3 className="text-lg font-bold text-playmatez-white mb-2">Steemit</h3>
                <p className="text-playmatez-white/80 text-sm">{t('home.readCryptoArticles')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-playmatez-white text-center mb-16">
            {t('home.platformFeatures')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {platformFeatures.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Partners + Backers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-playmatez-white text-center mb-16">
            {t('home.partners')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {partnersData.map((partner, index) => (
              <FeatureCard key={index} feature={partner} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-playmatez-white mb-8">
              {tt('home.contactUsTitle', 'Contact Us')}
            </h2>
            <p className="text-xl text-playmatez-white/80 mb-8 leading-relaxed max-w-2xl mx-auto">
              {tt('home.contactUsDescription', 'Have questions or partnership inquiries? We\'d love to hear from you.')}
            </p>
            <div className="flex justify-center">
              <Link
                to="/contact"
                data-cta="contact-home"
                className="inline-flex items-center px-8 py-4 bg-playmatez-gold hover:bg-playmatez-gold/80 text-white font-bold rounded-full text-lg transition-all duration-300 hover:scale-105"
              >
                {tt('navigation.contactUs', 'Contact Us')}
                <ArrowRight className="ml-2 w-5 h-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};