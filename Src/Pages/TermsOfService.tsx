import React from 'react';
import { PageView } from '../types';
import { ArrowLeft, Phone } from 'lucide-react';

interface TermsProps {
  setCurrentView: (view: PageView) => void;
}

export const TermsOfService: React.FC<TermsProps> = ({ setCurrentView }) => {
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
            LEGAL INFORMATION
          </span>
          <h1 className="font-serif-editorial text-3xl sm:text-5xl text-[#1C1B19] font-normal">
            Terms of Service
          </h1>
          <p className="text-xs text-[#8A857D] font-mono">
            Founder: Tibebe Solomon • ZENA DIGITAL
          </p>
        </div>

        {/* Terms Sections */}
        <div className="bg-white border border-[#E6DFD5] p-6 sm:p-10 space-y-8 text-sm text-[#5C5852] leading-relaxed">
          
          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              1. Service Scope
            </h2>
            <p>
              ZENA DIGITAL provides website design, building, and deployment services for businesses. We create informational and promotional websites to present business information, offerings, menus, photos, and direct telephone contact links.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              2. Client-Provided Information
            </h2>
            <p>
              Clients are responsible for providing all necessary business text, details, hours of operation, price lists, and photographs to be included on their website. Clients must verify the accuracy of all information provided for publication.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              3. Client Responsibility for Content Rights
            </h2>
            <p>
              Clients must hold the legal rights, permissions, or licenses for any logos, brand marks, photography, text, and materials provided to ZENA DIGITAL. Clients agree not to provide copyrighted or protected material without proper authorization.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              4. Payments
            </h2>
            <p>
              Prices are agreed upon upfront in Ethiopian Birr (ETB) based on the project scope (Starter: 5,000 ETB, Professional: 10,000 ETB, Custom: 15,000+ ETB). Payment terms and milestones are confirmed directly with the client before work begins.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              5. Revisions
            </h2>
            <p>
              Revisions are included to ensure the completed website matches the agreed project requirements. Revisions allow clients to request text changes, image updates, and layout refinements within the agreed scope.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              6. Project Scope
            </h2>
            <p>
              The specific pages, sections, and features included in each website are defined in the agreed project scope. Any requests for additional sections, custom functionality, or major restructuring outside the initial agreement may require an adjusted scope and fee.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              7. Third-Party Hosting and Domain Services
            </h2>
            <p>
              Websites require domain registration and web hosting services, which are supplied by third-party providers. ZENA DIGITAL helps set up and configure these services, but is not responsible for outages, technical downtime, or policy changes made by third-party infrastructure hosts.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              8. Intellectual Property
            </h2>
            <p>
              Upon full settlement of agreed project payments, the client owns the final website content and design created for their business. Client-supplied logos and assets remain the exclusive property of the client.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              9. Website Availability
            </h2>
            <p>
              While we aim to configure reliable web hosting, no internet service is guaranteed to achieve 100% uninterrupted uptime. Server maintenance, telecom network disruptions, or external service interruptions may occasionally affect website availability.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              10. Limitation of Liability
            </h2>
            <p>
              ZENA DIGITAL is not liable for indirect, incidental, or commercial losses arising from temporary website downtime, inaccurate client-supplied content, or issues originating from third-party hosting, domain registrars, or internet connectivity providers.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              11. Termination
            </h2>
            <p>
              Either party may conclude the engagement according to agreed terms if a project cannot proceed. In the event of early termination, payment remains due for work already completed up to the date of cancellation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              12. Changes to Terms
            </h2>
            <p>
              ZENA DIGITAL may update these general business terms as necessary. Updated versions will be posted directly to this page.
            </p>
          </section>

          <section className="space-y-2 pt-4 border-t border-[#E6DFD5]">
            <h2 className="font-serif-editorial text-2xl text-[#1C1B19]">
              13. Contact
            </h2>
            <p>
              For questions regarding these terms, contact founder Tibebe Solomon:
            </p>
            <div className="p-4 bg-[#FAF7F2] border border-[#E6DFD5] space-y-1 font-mono text-xs text-[#1C1B19]">
              <p className="font-semibold">Tibebe Solomon</p>
              <p>ZENA DIGITAL</p>
              <p>Phone 1: <a href="tel:0920404110" className="underline text-[#C85A32]">0920404110</a></p>
              <p>Phone 2: <a href="tel:0712293731" className="underline text-[#C85A32]">0712293731</a></p>
            </div>
          </section>

        </div>

        {/* Required Disclaimer */}
        <div className="p-6 bg-[#1C1B19] text-[#DDD5C7] border border-[#2D2B28] text-xs">
          <p className="italic">
            "These terms are general business terms and are not legal advice."
          </p>
        </div>

      </div>
    </div>
  );
};
