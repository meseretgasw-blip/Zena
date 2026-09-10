import React from 'react';
import { Phone, Check } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const tiers = [
    {
      name: 'STARTER',
      price: '5,000 ETB',
      description: 'Essential online presence for businesses needing a clean single-page or simple overview.',
      scope: [
        'Website design & layout',
        'Business overview section',
        'Services or products overview',
        'Operating hours & details',
        'Direct telephone contact link',
        'Mobile device responsiveness',
      ],
      featured: false,
    },
    {
      name: 'PROFESSIONAL',
      price: '10,000 ETB',
      description: 'Comprehensive website for businesses needing detailed sections, menus, or galleries.',
      scope: [
        'Complete website architecture',
        'Detailed services or full catalog/menu',
        'Photo showcase presentation',
        'Location & operating information',
        'Direct telephone contact buttons',
        'Full mobile optimization',
      ],
      featured: true,
    },
    {
      name: 'CUSTOM',
      price: '15,000+ ETB',
      description: 'For businesses with unique layouts, multiple categories, or specific custom requirements.',
      scope: [
        'Custom layout specifications',
        'Extended sections & content needs',
        'Tailored visual styling',
        'Multi-category architecture',
        'Direct consultation & planning',
        'Final scope depends on project requirements',
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD5] bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C85A32]">
            PRICING
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#1C1B19] font-normal leading-tight">
            Straightforward pricing in ETB.
          </h2>
          <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
            Transparent pricing without hidden fees. Final scope can depend on project requirements.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-8 border flex flex-col justify-between space-y-6 ${
                tier.featured
                  ? 'bg-[#FAF7F2] border-[#C85A32] relative'
                  : 'bg-[#FAF7F2]/60 border-[#E6DFD5]'
              }`}
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-[#E6DFD5] pb-3">
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-[#1C1B19]">
                    {tier.name}
                  </span>
                  {tier.featured && (
                    <span className="px-2 py-0.5 bg-[#C85A32] text-white text-[10px] font-mono uppercase tracking-wider font-semibold">
                      POPULAR
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <div className="font-serif-editorial text-4xl sm:text-5xl text-[#1C1B19]">
                    {tier.price}
                  </div>
                  <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#E6DFD5] space-y-2">
                  <span className="block text-[11px] font-mono font-semibold text-[#8A857D] uppercase">
                    Scope includes:
                  </span>
                  <ul className="space-y-2 text-xs text-[#1C1B19]">
                    {tier.scope.map((item, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#C85A32] mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-[#E6DFD5]">
                <a
                  href="tel:0920404110"
                  className={`w-full inline-flex items-center justify-center gap-2 py-3 px-4 text-xs font-semibold tracking-wide transition-colors ${
                    tier.featured
                      ? 'bg-[#C85A32] hover:bg-[#AF4A24] text-white'
                      : 'bg-[#1C1B19] hover:bg-[#C85A32] text-white'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call to discuss {tier.name}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Scope Note */}
        <div className="p-5 bg-[#FAF7F2] border border-[#E6DFD5] text-xs text-[#5C5852] leading-relaxed space-y-1">
          <span className="font-semibold text-[#1C1B19] block">
            Project Scope Note:
          </span>
          <p>
            Final scope can depend on project requirements, specific content volume, and custom layout requests. Pricing is agreed clearly before any work begins.
          </p>
        </div>

      </div>
    </section>
  );
};
