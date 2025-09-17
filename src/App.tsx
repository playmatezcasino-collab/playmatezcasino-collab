import React, { useEffect, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Layout/Header';
import { Footer } from './components/Layout/Footer';
import { LoadingScreen } from './components/UI/LoadingScreen';
import { pageMetadata } from './data/pageMetadata';
import { getSchemaForPath } from './utils/structuredData';

// Simple fallback component for testing
const SimpleFallback = () => <div>Loading...</div>;

// Lazy load page components for better performance
const Home = React.lazy(() => import('./pages/Home').then(module => ({ default: module.Home })).catch(() => ({ default: SimpleFallback })));
const WhatIsPlaymatez = React.lazy(() => import('./pages/WhatIsPlaymatez').then(module => ({ default: module.WhatIsPlaymatez })).catch(() => ({ default: SimpleFallback })));
const PlymToken = React.lazy(() => import('./pages/PlymToken').then(module => ({ default: module.PlymToken })).catch(() => ({ default: SimpleFallback })));
const MembershipPlans = React.lazy(() => import('./pages/MembershipPlans').then(module => ({ default: module.MembershipPlans })).catch(() => ({ default: SimpleFallback })));
const PlaymatezAdvantage = React.lazy(() => import('./pages/PlaymatezAdvantage').then(module => ({ default: module.PlaymatezAdvantage })).catch(() => ({ default: SimpleFallback })));
const RewardsAndReferrals = React.lazy(() => import('./pages/RewardsAndReferrals').then(module => ({ default: module.RewardsAndReferrals })).catch(() => ({ default: SimpleFallback })));
const FAQs = React.lazy(() => import('./pages/FAQs').then(module => ({ default: module.FAQs })).catch(() => ({ default: SimpleFallback })));
const PreLaunch = React.lazy(() => import('./pages/PreLaunch').then(module => ({ default: module.PreLaunch })).catch(() => ({ default: SimpleFallback })));
const ThankYou = React.lazy(() => import('./pages/ThankYou').then(module => ({ default: module.ThankYou })).catch(() => ({ default: SimpleFallback })));
const RegulationCompliance = React.lazy(() => import('./pages/RegulationCompliance').then(module => ({ default: module.RegulationCompliance })).catch(() => ({ default: SimpleFallback })));
const Contact = React.lazy(() => import('./pages/Contact').then(module => ({ default: module.Contact })).catch(() => ({ default: SimpleFallback })));

const TokenRevivalProgram = React.lazy(() => import('./pages/TokenRevivalProgram').then(module => ({ default: module.TokenRevivalProgram })).catch(() => ({ default: SimpleFallback })));
const Presale = React.lazy(() => import('./pages/Presale').then(module => ({ default: module.Presale })).catch(() => ({ default: SimpleFallback })));

// Import Navigate for redirects
import { Navigate } from 'react-router-dom';

// Component to handle scroll to top and meta tags on route change
const ScrollToTopAndMeta: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll to top when route changes
    window.scrollTo(0, 0);

    // Update meta tags
    const currentPath = location.pathname;
    const metaInfo = pageMetadata[currentPath] || pageMetadata['default'];
    
    // Update document title
    document.title = metaInfo.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', metaInfo.description);

    // Update structured data
    const schema = getSchemaForPath(currentPath, metaInfo.title, metaInfo.description);
    
    // Find or create structured data script tag
    let structuredDataScript = document.querySelector('script[type="application/ld+json"]');
    if (!structuredDataScript) {
      structuredDataScript = document.createElement('script');
      structuredDataScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(schema);
  }, [location.pathname]);

  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTopAndMeta />
      <div className="min-h-screen flex flex-col relative z-[1]">
        <Header />
        <main className="flex-1">
          <Suspense fallback={<LoadingScreen />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/what-is-playmatez" element={<WhatIsPlaymatez />} />
              <Route path="/plym-token" element={<PlymToken />} />
              <Route path="/membership-plans" element={<MembershipPlans />} />
              <Route path="/playmatez-advantage" element={<PlaymatezAdvantage />} />
              <Route path="/rewards-and-referrals" element={<RewardsAndReferrals />} />
              <Route path="/faqs" element={<FAQs />} />
              <Route path="/prelaunch" element={<PreLaunch />} />
              <Route path="/thank-you" element={<ThankYou />} />
              <Route path="/regulation" element={<RegulationCompliance />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/token-revival-program" element={<TokenRevivalProgram />} />
              <Route path="/presale" element={<Presale />} />
              {/* Redirects for backward compatibility */}
              <Route path="/rewards" element={<Navigate to="/rewards-and-referrals" replace />} />
              <Route path="/affiliate-programme" element={<Navigate to="/rewards-and-referrals" replace />} />
              <Route path="/how-to-invest" element={<Navigate to="/membership-plans" replace />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;