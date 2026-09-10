import React from 'react';
import { Phone } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Tell us what your business needs.',
      description: 'You share your services, products, photos, and information.',
    },
    {
      number: '02',
      title: 'We design and build the website.',
      description: 'We structure the pages, apply typography, and prepare the site for all devices.',
    },
    {
      number: '03',
      title: 'You review the website.',
      description: 'You check the layout, information, and details before launch.',
    },
    {
      number: '04',
      title: 'We launch it.',
      description: 'Your website goes live and is ready for your customers to visit.',
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD5] bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Section Header */}
        <div className="max-w-2xl space-y-3">
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C85A32]">
            PROCESS
          </span>
          <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#1C1B19] font-normal leading-tight">
            How we work together.
          </h2>
          <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
            A straightforward four-step workflow from initial conversation to official website launch.
          </p>
        </div>

        {/* 4 Steps Editorial Sequence */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E6DFD5] p-6 flex flex-col justify-between space-y-6"
            >
              <div className="space-y-3">
                <span className="font-serif-editorial text-4xl sm:text-5xl text-[#C85A32] font-normal block leading-none">
                  {step.number}
                </span>
                <h3 className="font-serif-editorial text-xl sm:text-2xl text-[#1C1B19] leading-snug">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#E6DFD5] text-[11px] font-mono text-[#8A857D]">
                Step {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>

        {/* Direct Call Action */}
        <div className="p-6 bg-[#FFFFFF] border border-[#E6DFD5] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-serif-editorial text-xl text-[#1C1B19]">
              Ready to start Step 01?
            </h4>
            <p className="text-xs text-[#5C5852]">
              Call Tibebe directly to discuss what you need for your website.
            </p>
          </div>

          <a
            href="tel:0920404110"
            className="inline-flex items-center gap-2 bg-[#C85A32] hover:bg-[#AF4A24] text-white px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide transition-colors shrink-0"
          >
            <Phone className="w-4 h-4" />
            <span>Call 0920404110</span>
          </a>
        </div>

      </div>
    </section>
  );
};
