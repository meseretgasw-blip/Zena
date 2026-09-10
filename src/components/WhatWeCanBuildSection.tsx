import React from 'react';
import { Phone, Check, Clock, Utensils, Scissors, Hotel, ShoppingBag } from 'lucide-react';

export const WhatWeCanBuildSection: React.FC = () => {
  const concepts = [
    {
      category: 'Restaurant & Cafe Website',
      label: 'Design concept',
      purpose: 'Clear food menus, daily offerings, opening hours, and direct phone orders.',
      icon: Utensils,
      architecture: [
        'Organized breakfast, lunch, and dinner menus with transparent prices',
        'Clear daily operating hours and location details',
        'Direct telephone button for table reservations and takeaway orders',
      ],
      previewSample: {
        title: 'Sample Food Menu Layout',
        items: [
          { name: 'Special Breakfast Combo', detail: 'Freshly prepared daily selection', price: 'Example Price' },
          { name: 'Traditional Lunch Platter', detail: 'Served with signature sides', price: 'Example Price' },
          { name: 'Fresh House Beverages', detail: 'Natural juices and hot drinks', price: 'Example Price' },
        ],
      },
    },
    {
      category: 'Salon & Beauty Lounge Website',
      label: 'Design concept',
      purpose: 'Complete treatment lists, service pricelists, and one-tap appointment calling.',
      icon: Scissors,
      architecture: [
        'Structured catalog of hair, nail, skin, and grooming treatments',
        'Clear pricing breakdown so clients know what to expect',
        'Direct tap-to-call link for quick appointment scheduling',
      ],
      previewSample: {
        title: 'Sample Service List Layout',
        items: [
          { name: 'Hair Styling & Treatment', detail: 'Wash, conditioning, and custom style', price: 'Example Price' },
          { name: 'Nail Care & Manicure', detail: 'Complete clean, shape, and polish', price: 'Example Price' },
          { name: 'Relaxing Facial Therapy', detail: 'Deep cleansing and skin care', price: 'Example Price' },
        ],
      },
    },
    {
      category: 'Hotel & Guesthouse Website',
      label: 'Design concept',
      purpose: 'Room classifications, rates, accommodation amenities, and phone booking.',
      icon: Hotel,
      architecture: [
        'Room type showcases with inclusions (Wi-Fi, breakfast, parking)',
        'Clear nightly pricing and check-in/check-out policies',
        'Direct reception phone link for reservation inquiries',
      ],
      previewSample: {
        title: 'Sample Room Showcase Layout',
        items: [
          { name: 'Standard Single Room', detail: 'Queen bed, workspace, private bath', price: 'Example Price' },
          { name: 'Deluxe Suite', detail: 'Balcony view, lounge area, breakfast included', price: 'Example Price' },
          { name: 'Family Accommodation', detail: 'Two connecting rooms, full amenities', price: 'Example Price' },
        ],
      },
    },
    {
      category: 'Retail & Commercial Store Website',
      label: 'Design concept',
      purpose: 'Product selections, inventory highlights, store location, and inquiry calling.',
      icon: ShoppingBag,
      architecture: [
        'Categorized product catalog with clear specifications',
        'High-contrast photo galleries displaying available stock',
        'Direct telephone numbers for stock checks and purchases',
      ],
      previewSample: {
        title: 'Sample Product Catalog Layout',
        items: [
          { name: 'Featured Commercial Item A', detail: 'Full manufacturer specifications', price: 'Example Price' },
          { name: 'Popular Retail Product B', detail: 'Multiple sizes and colors available', price: 'Example Price' },
          { name: 'Custom Order Package C', detail: 'Bulk inquiries and direct delivery', price: 'Example Price' },
        ],
      },
    },
  ];

  return (
    <section id="work" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD5] bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-8 border-b border-[#E6DFD5]">
          <div className="md:col-span-8 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C85A32]">
              WHAT WE CAN BUILD
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#1C1B19] font-normal leading-tight">
              Website types and design concepts.
            </h2>
            <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed max-w-2xl">
              Below are examples of how ZENA DIGITAL structures information for different industries. Every website is built from scratch according to your specific business needs.
            </p>
          </div>

          <div className="md:col-span-4 flex md:justify-end">
            <div className="p-3 bg-[#FAF7F2] border border-[#E6DFD5] text-xs text-[#5C5852] font-mono">
              <span className="font-semibold text-[#1C1B19] block mb-1">NOTE ON EXAMPLES:</span>
              <span>All layouts shown below are design concepts demonstrating page structure.</span>
            </div>
          </div>
        </div>

        {/* 4 Design Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {concepts.map((concept, idx) => {
            const Icon = concept.icon;
            return (
              <div
                key={idx}
                className="bg-[#FAF7F2] border border-[#E6DFD5] p-6 sm:p-8 flex flex-col justify-between space-y-6"
              >
                {/* Top Label */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#E6DFD5] pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-white border border-[#E6DFD5] text-[#C85A32]">
                        <Icon className="w-4 h-4" />
                      </div>
                      <span className="font-mono text-xs font-semibold text-[#1C1B19] uppercase tracking-wide">
                        {concept.category}
                      </span>
                    </div>

                    <span className="inline-block px-2.5 py-0.5 bg-[#FBF2ED] border border-[#E9CCBE] text-[#C85A32] text-[11px] font-mono font-semibold">
                      {concept.label}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                    {concept.purpose}
                  </p>

                  {/* Architecture Checklist */}
                  <div className="space-y-2 pt-2">
                    <span className="block text-[11px] font-mono font-semibold text-[#8A857D] uppercase">
                      Layout structure includes:
                    </span>
                    <ul className="space-y-1.5 text-xs text-[#1C1B19]">
                      {concept.architecture.map((item, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-[#4E5D4E] mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual Example Wireframe Box */}
                  <div className="bg-white border border-[#E6DFD5] p-4 space-y-3 pt-3">
                    <div className="flex items-center justify-between text-[11px] font-mono border-b border-[#E6DFD5] pb-2 text-[#8A857D]">
                      <span>{concept.previewSample.title}</span>
                      <span className="text-[#C85A32] font-semibold">Example</span>
                    </div>

                    <div className="space-y-2">
                      {concept.previewSample.items.map((sampleItem, sIdx) => (
                        <div
                          key={sIdx}
                          className="p-2.5 bg-[#FAF7F2] border border-[#E6DFD5] flex items-center justify-between gap-2 text-xs"
                        >
                          <div>
                            <span className="font-medium text-[#1C1B19] block">
                              {sampleItem.name}
                            </span>
                            <span className="text-[11px] text-[#8A857D]">
                              {sampleItem.detail}
                            </span>
                          </div>
                          <span className="font-mono text-[11px] text-[#5C5852] px-2 py-0.5 bg-white border border-[#E6DFD5]">
                            {sampleItem.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Link */}
                <div className="pt-2 border-t border-[#E6DFD5] flex items-center justify-between">
                  <span className="text-xs text-[#5C5852]">
                    Interested in this type of site?
                  </span>
                  <a
                    href="tel:0920404110"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#C85A32] hover:text-[#AF4A24] transition-colors"
                  >
                    <Phone className="w-3 h-3" />
                    <span>Call 0920404110</span>
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
