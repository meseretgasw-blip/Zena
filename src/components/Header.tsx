import React, { useState } from 'react';
import { PageView } from '../types';
import { Phone, Menu, X } from 'lucide-react';

interface HeaderProps {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentView, setCurrentView }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigateTo = (sectionId: string) => {
    setMobileMenuOpen(false);
    if (currentView !== 'home') {
      setCurrentView('home');
      setTimeout(() => {
        if (sectionId === 'top') {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 50);
    } else {
      if (sectionId === 'top') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF7F2]/95 backdrop-blur-xs border-b border-[#E6DFD5]">
      {/* Top verified contact bar */}
      <div className="bg-[#1C1B19] text-[#FAF7F2] px-4 py-2 text-xs">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C85A32]"></span>
            <span className="font-semibold tracking-wide text-white">ZENA DIGITAL</span>
            <span className="text-[#8A857D] hidden sm:inline">•</span>
            <span className="text-[#DDD5C7] hidden sm:inline">Founder: Tibebe Solomon</span>
          </div>
          <div className="flex items-center gap-4 text-[#DDD5C7]">
            <a
              href="tel:0920404110"
              className="hover:text-white transition-colors flex items-center gap-1.5 font-mono"
            >
              <Phone className="w-3 h-3 text-[#C85A32]" />
              <span>0920404110</span>
            </a>
            <span className="text-[#6B665E]">/</span>
            <a
              href="tel:0712293731"
              className="hover:text-white transition-colors flex items-center gap-1.5 font-mono"
            >
              <Phone className="w-3 h-3 text-[#C85A32]" />
              <span>0712293731</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-18 flex items-center justify-between">
        {/* Brand */}
        <button
          onClick={() => navigateTo('top')}
          className="text-left cursor-pointer group"
        >
          <span className="font-serif-editorial text-2xl sm:text-3xl text-[#1C1B19] tracking-tight group-hover:text-[#C85A32] transition-colors">
            ZENA DIGITAL
          </span>
        </button>

        {/* Desktop Nav Items */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#1C1B19]">
          <button
            onClick={() => navigateTo('top')}
            className="hover:text-[#C85A32] transition-colors cursor-pointer py-1"
          >
            Home
          </button>
          <button
            onClick={() => navigateTo('services')}
            className="hover:text-[#C85A32] transition-colors cursor-pointer py-1"
          >
            Services
          </button>
          <button
            onClick={() => navigateTo('process')}
            className="hover:text-[#C85A32] transition-colors cursor-pointer py-1"
          >
            Process
          </button>
          <button
            onClick={() => navigateTo('pricing')}
            className="hover:text-[#C85A32] transition-colors cursor-pointer py-1"
          >
            Pricing
          </button>
          <button
            onClick={() => navigateTo('about')}
            className="hover:text-[#C85A32] transition-colors cursor-pointer py-1"
          >
            About
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className="hover:text-[#C85A32] transition-colors cursor-pointer py-1"
          >
            Contact
          </button>
        </nav>

        {/* Primary CTA: CALL */}
        <div className="flex items-center gap-3">
          <a
            href="tel:0920404110"
            className="inline-flex items-center justify-center gap-2 bg-[#C85A32] hover:bg-[#AF4A24] text-white px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-semibold tracking-wide transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>CALL</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1C1B19] hover:bg-[#F4EFEA] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF7F2] border-b border-[#E6DFD5] px-4 py-4 space-y-3">
          <button
            onClick={() => navigateTo('top')}
            className="block w-full text-left py-2 text-[#1C1B19] font-medium border-b border-[#E6DFD5]"
          >
            Home
          </button>
          <button
            onClick={() => navigateTo('services')}
            className="block w-full text-left py-2 text-[#1C1B19] font-medium border-b border-[#E6DFD5]"
          >
            Services
          </button>
          <button
            onClick={() => navigateTo('process')}
            className="block w-full text-left py-2 text-[#1C1B19] font-medium border-b border-[#E6DFD5]"
          >
            Process
          </button>
          <button
            onClick={() => navigateTo('pricing')}
            className="block w-full text-left py-2 text-[#1C1B19] font-medium border-b border-[#E6DFD5]"
          >
            Pricing
          </button>
          <button
            onClick={() => navigateTo('about')}
            className="block w-full text-left py-2 text-[#1C1B19] font-medium border-b border-[#E6DFD5]"
          >
            About
          </button>
          <button
            onClick={() => navigateTo('contact')}
            className="block w-full text-left py-2 text-[#1C1B19] font-medium border-b border-[#E6DFD5]"
          >
            Contact
          </button>

          <div className="pt-2 flex flex-col gap-2">
            <a
              href="tel:0920404110"
              className="flex items-center justify-center gap-2 bg-[#1C1B19] text-white py-3 text-xs font-mono font-medium"
            >
              <Phone className="w-4 h-4 text-[#C85A32]" />
              <span>Call: 0920404110</span>
            </a>
            <a
              href="tel:0712293731"
              className="flex items-center justify-center gap-2 bg-[#F4EFEA] border border-[#E6DFD5] text-[#1C1B19] py-3 text-xs font-mono font-medium"
            >
              <Phone className="w-4 h-4 text-[#C85A32]" />
              <span>Call: 0712293731</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
