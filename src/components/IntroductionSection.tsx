import React from 'react';
import { Layers, Globe, Eye, Image, PhoneCall, Share2, Search } from 'lucide-react';

export const IntroductionSection: React.FC = () => {
  const benefits = [
    {
      title: 'One place for important information',
      description: 'Keep your hours, offerings, and details organized in a single central destination.',
      icon: Layers,
    },
    {
      title: 'A professional online presence',
      description: 'Present your business cleanly with dedicated design and thoughtful typography.',
      icon: Globe,
    },
    {
      title: 'A place to show services and products',
      description: 'Display exactly what you do or sell so potential customers can browse easily.',
      icon: Eye,
    },
    {
      title: 'A place to display photos',
      description: 'Showcase your work, premises, or items with clear, authentic visuals.',
      icon: Image,
    },
    {
      title: 'Contact information in one location',
      description: 'Provide direct telephone numbers that customers can tap to call immediately.',
      icon: PhoneCall,
    },
    {
      title: 'A place customers can visit from social media',
      description: 'Give followers from social platforms an official, reliable link to explore.',
      icon: Share2,
    },
    {
      title: 'Better discoverability online',
      description: 'Make it straightforward for people searching for your business to find verified information.',
      icon: Search,
    },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 border-b border-[#E6DFD5] bg-[#FFFFFF]">
      <div className="max-w-6xl mx-auto">
        
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end pb-12 border-b border-[#E6DFD5]">
          <div className="md:col-span-7 space-y-3">
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#C85A32]">
              WHY A WEBSITE
            </span>
            <h2 className="font-serif-editorial text-3xl sm:text-5xl text-[#1C1B19] font-normal leading-tight">
              A reliable foundation for your business online.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm sm:text-base text-[#5C5852] leading-relaxed">
              When business information is scattered across different places, customers can struggle to find basic details. A clean website gives your business one dedicated home.
            </p>
          </div>
        </div>

        {/* Varied Asymmetric Layout for Benefits */}
        <div className="pt-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Highlight Callout */}
          <div className="md:col-span-5 bg-[#FAF7F2] border border-[#E6DFD5] p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="inline-block px-2.5 py-1 bg-[#FBF2ED] text-[#C85A32] text-xs font-mono font-medium">
                PRACTICAL VALUE
              </span>
              <h3 className="font-serif-editorial text-2xl sm:text-3xl text-[#1C1B19] leading-snug">
                Clear details when customers need them.
              </h3>
              <p className="text-xs sm:text-sm text-[#5C5852] leading-relaxed">
                A website does not rely on algorithms or feed changes. It stays available day and night so customers can find your phone number, review your services, and make contact.
              </p>
            </div>

            <div className="pt-4 border-t border-[#E6DFD5]">
              <a
                href="tel:0920404110"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#C85A32] hover:text-[#AF4A24] transition-colors"
              >
                <span>Discuss your website requirements</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* List of 7 Genuine Benefits */}
          <div className="md:col-span-7 space-y-3">
            {benefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-4 bg-[#FAF7F2]/60 hover:bg-[#FAF7F2] border border-[#E6DFD5] transition-colors flex items-start gap-4"
                >
                  <div className="p-2 bg-white border border-[#E6DFD5] text-[#C85A32] shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-sm font-semibold text-[#1C1B19]">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#5C5852] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
