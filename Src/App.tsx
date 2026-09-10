import React, { useState, useEffect } from 'react';
import { PageView } from './types';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { IntroductionSection } from './components/IntroductionSection';
import { ServicesSection } from './components/ServicesSection';
import { WhatWeCanBuildSection } from './components/WhatWeCanBuildSection';
import { ProcessSection } from './components/ProcessSection';
import { PricingSection } from './components/PricingSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TermsOfService } from './pages/TermsOfService';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { MobileQuickBar } from './components/MobileQuickBar';

export default function App() {
  const [currentView, setCurrentView] = useState<PageView>('home');

  // Scroll to top on view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView]);

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1B19] flex flex-col font-sans-body antialiased pb-16 md:pb-0">
      
      {/* Editorial Header */}
      <Header
        currentView={currentView}
        setCurrentView={setCurrentView}
      />

      {/* Main View Area */}
      <main className="flex-grow">
        {currentView === 'home' && (
          <>
            <Hero />
            <IntroductionSection />
            <ServicesSection />
            <WhatWeCanBuildSection />
            <ProcessSection />
            <PricingSection />
            <AboutSection />
            <ContactSection />
          </>
        )}

        {currentView === 'terms' && (
          <TermsOfService setCurrentView={setCurrentView} />
        )}

        {currentView === 'privacy' && (
          <PrivacyPolicy setCurrentView={setCurrentView} />
        )}
      </main>

      {/* Footer */}
      <Footer setCurrentView={setCurrentView} />

      {/* Mobile Fixed Dialer Quick Bar */}
      <MobileQuickBar />

    </div>
  );
}
