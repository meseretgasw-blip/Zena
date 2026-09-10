import React from 'react';
import { Phone, User } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD5] bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C85A32]">
            ABOUT
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#1C1B19] font-normal leading-tight">
            About ZENA DIGITAL
          </h2>
        </div>

        {/* Core Statement Box */}
        <div className="bg-white border border-[#E6DFD5] p-6 sm:p-10 space-y-6">
          <p className="font-serif-editorial text-2xl sm:text-3xl text-[#1C1B19] leading-relaxed">
            ZENA DIGITAL is a small digital studio focused on creating modern, affordable websites for businesses.
          </p>

          <div className="pt-6 border-t border-[#E6DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-[#FAF7F2] border border-[#E6DFD5] text-[#C85A32]">
                <User className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-[11px] font-mono text-[#8A857D] uppercase tracking-wider">
                  Founder
                </span>
                <span className="font-serif-editorial text-xl text-[#1C1B19]">
                  Tibebe Solomon
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono">
              <a
                href="tel:0920404110"
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#FAF7F2] hover:bg-[#FBF2ED] border border-[#E6DFD5] hover:border-[#C85A32] text-[#1C1B19] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>0920404110</span>
              </a>
              <a
                href="tel:0712293731"
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#FAF7F2] hover:bg-[#FBF2ED] border border-[#E6DFD5] hover:border-[#C85A32] text-[#1C1B19] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#C85A32]" />
                <span>0712293731</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
