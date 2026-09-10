import React from 'react';
import { Phone } from 'lucide-react';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD5] bg-[#FFFFFF]">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        
        <div className="space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-widest text-[#C85A32]">
            ZENA DIGITAL
          </span>
          <h2 className="font-serif-editorial text-4xl sm:text-6xl text-[#1C1B19] font-normal leading-tight">
            Ready to build your website?
          </h2>
          <p className="font-serif-editorial text-2xl sm:text-3xl text-[#5C5852] italic font-normal">
            Call Tibebe.
          </p>
        </div>

        {/* Direct Telephone Numbers - Both clickable */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:0920404110"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#C85A32] hover:bg-[#AF4A24] text-white px-8 py-4 text-lg font-mono font-semibold transition-colors shadow-xs"
          >
            <Phone className="w-5 h-5" />
            <span>0920404110</span>
          </a>

          <a
            href="tel:0712293731"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#FAF7F2] hover:bg-[#F4EFEA] text-[#1C1B19] border border-[#E6DFD5] hover:border-[#1C1B19] px-8 py-4 text-lg font-mono font-semibold transition-colors"
          >
            <Phone className="w-5 h-5 text-[#C85A32]" />
            <span>0712293731</span>
          </a>
        </div>

        <p className="text-xs text-[#8A857D] font-mono pt-2">
          Tap either number to open your phone dialer directly.
        </p>

      </div>
    </section>
  );
};
