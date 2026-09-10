import React from 'react';
import { Phone, ArrowRight, CheckCircle2 } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="top" className="py-12 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD5] bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#F1F4F0] border border-[#D8DFD7] text-[#4E5D4E] text-xs font-medium">
              <span className="w-2 h-2 rounded-full bg-[#4E5D4E]"></span>
              <span>Independent Digital Studio</span>
            </div>

            <div className="space-y-4">
              <h1 className="font-serif-editorial text-4xl sm:text-6xl lg:text-7xl text-[#1C1B19] font-normal leading-[1.08] tracking-tight">
                Websites that make your business stand out.
              </h1>
              <p className="text-base sm:text-lg text-[#5C5852] font-normal leading-relaxed max-w-xl">
                Modern, fast and affordable websites for businesses that want a professional presence online.
              </p>
            </div>

            {/* Direct Call CTAs - No forms, direct phone links */}
            <div className="pt-2 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
              <a
                href="tel:0920404110"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#C85A32] hover:bg-[#AF4A24] text-white px-7 py-3.5 text-sm font-semibold tracking-wide transition-colors shadow-xs"
              >
                <Phone className="w-4 h-4" />
                <span>CALL ZENA DIGITAL</span>
              </a>

              <a
                href="tel:0712293731"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FFFFFF] hover:bg-[#F4EFEA] text-[#1C1B19] border border-[#E6DFD5] hover:border-[#1C1B19] px-6 py-3.5 text-sm font-medium font-mono transition-colors"
              >
                <Phone className="w-4 h-4 text-[#C85A32]" />
                <span>0712293731</span>
              </a>
            </div>

            {/* Verified Studio Details */}
            <div className="pt-4 border-t border-[#E6DFD5] grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#5C5852]">
              <div>
                <span className="block text-[11px] font-semibold text-[#8A857D] uppercase tracking-wider">FOUNDER</span>
                <span className="font-medium text-[#1C1B19]">Tibebe Solomon</span>
              </div>
              <div>
                <span className="block text-[11px] font-semibold text-[#8A857D] uppercase tracking-wider">DIRECT CONTACT</span>
                <span className="font-mono text-[#1C1B19]">0920404110 / 0712293731</span>
              </div>
            </div>

          </div>

          {/* Right Hero Column: Editorial Visual Showcase (Design Concept Architecture) */}
          <div className="lg:col-span-5">
            <div className="bg-[#FFFFFF] border border-[#E6DFD5] p-5 sm:p-7 space-y-5 shadow-xs relative">
              
              {/* Visual header label */}
              <div className="flex items-center justify-between border-b border-[#E6DFD5] pb-3 text-xs">
                <span className="font-mono text-[11px] text-[#8A857D] uppercase tracking-wider">
                  DESIGN CONCEPT
                </span>
                <span className="inline-flex items-center gap-1.5 px-2 py-0.5 bg-[#FBF2ED] text-[#C85A32] font-mono text-[11px] font-semibold">
                  STUDIO PREVIEW
                </span>
              </div>

              {/* Visual Layout Representation */}
              <div className="space-y-4 text-xs">
                <div className="bg-[#FAF7F2] p-4 border border-[#E6DFD5] space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-[#8A857D]">
                    <span className="font-mono font-medium text-[#1C1B19]">YOUR BRAND IDENTITY</span>
                    <span>ONLINE 24/7</span>
                  </div>
                  <h3 className="font-serif-editorial text-xl text-[#1C1B19]">
                    Clear information for your customers
                  </h3>
                  <p className="text-[#5C5852] leading-relaxed text-[12px]">
                    Every website is built with fast loading times, clean typography, mobile responsiveness, and one-tap calling.
                  </p>
                </div>

                <div className="space-y-2 pt-1">
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF7F2] border border-[#E6DFD5] text-[#1C1B19]">
                    <CheckCircle2 className="w-4 h-4 text-[#4E5D4E] shrink-0" />
                    <span>Single home for services, menus, and photos</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF7F2] border border-[#E6DFD5] text-[#1C1B19]">
                    <CheckCircle2 className="w-4 h-4 text-[#4E5D4E] shrink-0" />
                    <span>Clickable telephone links for immediate customer calls</span>
                  </div>
                  <div className="flex items-center gap-2 p-2.5 bg-[#FAF7F2] border border-[#E6DFD5] text-[#1C1B19]">
                    <CheckCircle2 className="w-4 h-4 text-[#4E5D4E] shrink-0" />
                    <span>Optimized for fast browsing on mobile phones</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:0920404110"
                    className="block text-center py-2.5 bg-[#1C1B19] hover:bg-[#C85A32] text-white text-xs font-semibold tracking-wide transition-colors"
                  >
                    Direct Call: 0920404110
                  </a>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
