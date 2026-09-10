import React from 'react';
import { PageView } from '../types';
import { ArrowLeft, Phone } from 'lucide-react';

interface PrivacyProps {
  setCurrentView: (view: PageView) => void;
}

export const PrivacyPolicy: React.FC<PrivacyProps> = ({ setCurrentView }) => {
  return (
    <div className="py-12 sm:py-20 bg-[#FAF7F2] min-h-screen px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Back navigation */}
        <button
          onClick={() => {
            setCurrentView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="inline-flex items-center gap-2 text-xs font-mono font-medium text-[#1C1B19] bg-white border border-[#E6DFD5] hover:border-[#1C1B19] px-4 py-2 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to ZENA DIGITAL</span>
        </button>

        {/* Page header */}
        <div className="bg-white border border-[#E6DFD5] p-6 sm:p-10 space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C85A32]">
            PRIVACY STATEMENT
          </span>
          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#1C1B19] font-normal">
            Privacy Policy
          </h1>
          <p className="text-xs text-[#8A857D] font-mono">
            Founder: Tibebe Solomon • ZENA DIGITAL
          </p>
        </div>

        {/* Policy Sections */}
        <div className="bg-white border border-[#E6DFD5] p-6 sm:p-10 space-y-8 text-sm text-[#5C5852] leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              1. Overview
            </h2>
            <p>
              This website is an informational online presence for ZENA DIGITAL. We respect the privacy of every visitor. This policy describes our practices regarding information on this website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              2. No Contact Forms or Personal Data Collection
            </h2>
            <p>
              This website does not contain contact forms, inquiry submissions, account registration fields, or newsletter subscriptions. We do not collect, store, or process personal names, email addresses, or messages through web forms on this website.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              3. Telephone Inquiries
            </h2>
            <p>
              When you tap a telephone number on this website, your call is handled directly through your phone service provider's dialer application. Any information you discuss during a telephone conversation with Tibebe Solomon is used solely to respond to your project questions and website requirements.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              4. Cookies and Analytics
            </h2>
            <p>
              This website does not use tracking cookies, behavioral tracking mechanisms, or third-party advertising trackers. Standard web server logs may temporarily register basic network connection information (such as IP address or browser user agent) for technical delivery and security purposes.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              5. Third-Party Links
            </h2>
            <p>
              If any external links appear on the website, visiting those external sites is subject to the privacy practices of those third parties.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-[#E6DFD5]">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              6. Contact Information
            </h2>
            <p>
              If you have any questions about this privacy statement or our website, please contact founder Tibebe Solomon:
            </p>
            <div className="p-4 bg-[#FAF7F2] border border-[#E6DFD5] space-y-1 font-mono text-xs text-[#1C1B19]">
              <p className="font-semibold">Tibebe Solomon</p>
              <p>ZENA DIGITAL</p>
              <p>Phone 1: <a href="tel:0920404110" className="underline text-[#C85A32]">0920404110</a></p>
              <p>Phone 2: <a href="tel:0712293731" className="underline text-[#C85A32]">0712293731</a></p>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
};
