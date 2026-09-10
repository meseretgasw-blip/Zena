import React from 'react';
import { Phone } from 'lucide-react';

export const MobileQuickBar: React.FC = () => {
  return (
    <aside className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#1C1B19] border-t border-[#2D2B28] p-2.5 px-3">
      <div className="flex items-center justify-between gap-2 text-xs">
        
        {/* Direct Call 1 */}
        <a
          href="tel:0920404110"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#C85A32] hover:bg-[#AF4A24] text-white py-3 px-2 font-mono font-semibold text-xs tracking-wide"
        >
          <Phone className="w-3.5 h-3.5 shrink-0" />
          <span>Call 0920404110</span>
        </a>

        {/* Direct Call 2 */}
        <a
          href="tel:0712293731"
          className="flex-1 inline-flex items-center justify-center gap-2 bg-[#FAF7F2] text-[#1C1B19] border border-[#E6DFD5] py-3 px-2 font-mono font-semibold text-xs tracking-wide"
        >
          <Phone className="w-3.5 h-3.5 text-[#C85A32] shrink-0" />
          <span>Call 0712293731</span>
        </a>

      </div>
    </aside>
  );
};
