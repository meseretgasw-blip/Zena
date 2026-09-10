import React from 'react';
import { Phone, ArrowRight, Store, Utensils, Scissors, Hotel, Building2, ShoppingBag } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const categories = [
    {
      title: 'Business websites',
      description: 'Clean, multi-section web presence tailored to your enterprise. Displays essential company information, services, working hours, and direct telephone links.',
      icon: Store,
      elements: ['Overview & about', 'Service breakdown', 'Opening hours', 'Direct call links'],
    },
    {
      title: 'Restaurant websites',
      description: 'Organized presentation for restaurants, cafes, and bakeries. Showcases menu items, prices, daily offerings, location details, and direct contact.',
      icon: Utensils,
      elements: ['Digital food & beverage menu', 'Item pricing display', 'Operating schedule', 'Phone orders & inquiries'],
    },
    {
      title: 'Salon and beauty websites',
      description: 'Polished layouts for hair salons, barber shops, and beauty lounges. Presents comprehensive service pricelists, styling photos, and appointment calling.',
      icon: Scissors,
      elements: ['Service & treatments list', 'Price guides', 'Photo presentation', 'Direct appointment phone'],
    },
    {
      title: 'Hotel and guesthouse websites',
      description: 'Dedicated web presence for boutique hotels and guesthouses. Features room categories, accommodation amenities, gallery views, and direct phone reservations.',
      icon: Hotel,
      elements: ['Room types & rates', 'Amenities overview', 'Property photos', 'Direct phone reservations'],
    },
    {
      title: 'Company websites',
      description: 'Structured corporate websites for construction, trading, logistics, and professional firms. Highlights corporate capabilities, project archives, and credentials.',
      icon: Building2,
      elements: ['Corporate profile', 'Project portfolio displays', 'Services & expertise', 'Direct office phone'],
    },
    {
      title: 'Retail websites',
      description: 'Catalog-driven sites for stores, boutiques, and retail shops. Displays current product selections, descriptions, specifications, and customer inquiry numbers.',
      icon: ShoppingBag,
      elements: ['Product catalog layout', 'Descriptions & specs', 'Store hours', 'Direct telephone inquiries'],
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD5] bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C85A32]">
            SERVICES
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#1C1B19] font-normal leading-tight">
            What ZENA DIGITAL offers.
          </h2>
          <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
            We build custom, purposeful websites designed specifically around the daily operations and communication needs of businesses.
          </p>
        </div>

        {/* 6 Categories in Varied Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div
                key={idx}
                className="bg-white border border-[#E6DFD5] p-6 flex flex-col justify-between space-y-6 hover:border-[#C85A32] transition-colors"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="p-2.5 bg-[#FAF7F2] border border-[#E6DFD5] text-[#C85A32]">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs text-[#8A857D]">
                      0{idx + 1}
                    </span>
                  </div>

                  <h3 className="font-serif-editorial text-2xl text-[#1C1B19]">
                    {cat.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                    {cat.description}
                  </p>

                  <div className="pt-2 border-t border-[#E6DFD5] space-y-1.5">
                    <span className="block text-[11px] font-mono font-semibold text-[#8A857D] uppercase">
                      Includes:
                    </span>
                    <ul className="space-y-1 text-xs text-[#1C1B19]">
                      {cat.elements.map((elem, eIdx) => (
                        <li key={eIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#C85A32]"></span>
                          <span>{elem}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="tel:0920404110"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C85A32] hover:text-[#AF4A24] transition-colors"
                  >
                    <span>Call to discuss {cat.title.toLowerCase()}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note on Scope */}
        <div className="p-5 bg-white border border-[#E6DFD5] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs">
          <p className="text-[#5C5852]">
            Have a specific business model or custom requirement? Every website structure is adjusted to your exact operations.
          </p>
          <a
            href="tel:0920404110"
            className="inline-flex items-center gap-2 text-[#1C1B19] font-mono font-semibold hover:text-[#C85A32] shrink-0"
          >
            <Phone className="w-3.5 h-3.5 text-[#C85A32]" />
            <span>Call 0920404110</span>
          </a>
        </div>

      </div>
    </section>
  );
};
