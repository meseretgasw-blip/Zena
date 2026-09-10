import React from 'react';
import { PageView } from '../types';

interface FooterProps {
  setCurrentView: (view: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView }) => {
  return (
    <footer className="bg-[#1C1B19] text-[#FAF7F2] py-14 px-4 sm:px-6 lg:px-8 border-t border-[#E6DFD5]">
      <div className="max-w-6xl mx-auto space-y-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Brand & Tagline */}
          <div className="md:col-span-6 space-y-2">
            <button
              onClick={() => {
                setCurrentView('home');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-left cursor-pointer"
            >
              <span className="font-serif-editorial text-3xl text-white block">
                ZENA DIGITAL
              </span>
            </button>
            <p className="text-sm text-[#DDD5C7]">
              Websites that make your business stand out.
            </p>
          </div>

          {/* Founder & Direct Phone Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-mono text-[11px] font-semibold text-[#8A857D] uppercase tracking-wider block">
              Founder
            </span>
            <p className="text-sm font-medium text-white">Tibebe Solomon</p>
            <div className="pt-1 space-y-1 font-mono text-[#DDD5C7]">
              <p>
                <a href="tel:0920404110" className="hover:text-white transition-colors">
                  0920404110
                </a>
              </p>
              <p>
                <a href="tel:0712293731" className="hover:text-white transition-colors">
                  0712293731
                </a>
              </p>
            </div>
          </div>

          {/* Legal Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <span className="font-mono text-[11px] font-semibold text-[#8A857D] uppercase tracking-wider block">
              Information
            </span>
            <div className="space-y-2">
              <p>
                <button
                  onClick={() => {
                    setCurrentView('terms');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#DDD5C7] hover:text-white transition-colors cursor-pointer"
                >
                  Terms of Service
                </button>
              </p>
              <p>
                <button
                  onClick={() => {
                    setCurrentView('privacy');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="text-[#DDD5C7] hover:text-white transition-colors cursor-pointer"
                >
                  Privacy Policy
                </button>
              </p>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-[#2D2B28] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8A857D]">
          <span>ZENA DIGITAL</span>
          <div className="flex gap-4 font-mono">
            <a href="tel:0920404110" className="hover:text-white">0920404110</a>
            <span>•</span>
            <a href="tel:0712293731" className="hover:text-white">0712293731</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
