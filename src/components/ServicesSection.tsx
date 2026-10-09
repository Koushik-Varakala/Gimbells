import React from 'react';
import { agencyServices } from '../data/agencyData';
import { Video, Target, Sparkles, Share2, Check, ArrowRight } from 'lucide-react';

const icons = [Video, Target, Sparkles, Share2];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-400 dark:text-stone-500 mb-2">
          <span>What We Do</span>
          <span aria-hidden="true">·</span>
          <span>Clear & Simple Packages</span>
        </div>
        <h2 className="font-outfit text-3xl sm:text-5xl text-[#292524] dark:text-[#F5F5F0] font-normal tracking-tight">
          Services tailored for growing businesses.
        </h2>
        <p className="mt-4 text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed">
          Whether you just need smooth video shoots, targeted online ads, or our full all-in-one monthly support, we take care of everything so you can focus on running your business.
        </p>
      </div>

      {/* 4 Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {agencyServices.map((srv, idx) => {
          const Icon = icons[idx % icons.length];
          const isFeatured = srv.id === 'srv-allinone';
          const bgColors = [
            'bg-[#FFE4E1]/30 dark:bg-[#1C1B19]',
            'bg-[#E8EFE8]/40 dark:bg-[#1C1B19]',
            'bg-[#EFEDF4]/60 dark:bg-[#201D24]',
            'bg-stone-50/90 dark:bg-[#1C1B19]'
          ];

          return (
            <div
              key={srv.id}
              className={`rounded-[2.5rem] p-8 sm:p-10 border shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_12px_32px_-4px_rgba(0,0,0,0.12)] hover:-translate-y-1 relative ${
                isFeatured
                  ? 'border-[#FFB7B2] ring-2 ring-[#FFB7B2]/40 bg-[#EFEDF4]/70 dark:bg-[#201D24] dark:border-[#FFB7B2]/70'
                  : `border-stone-200/70 dark:border-stone-800 ${bgColors[idx]}`
              }`}
            >
              <div>
                {/* Header Icon + Optional Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200/60 dark:border-stone-700 flex items-center justify-center text-stone-800 dark:text-stone-200 shadow-xs">
                    <Icon className="w-6 h-6 text-stone-700 dark:text-[#FFB7B2]" />
                  </div>
                  {srv.badge && (
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-[#FFB7B2] text-[#292524] shadow-xs">
                      {srv.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-outfit text-2xl sm:text-3xl font-normal text-[#292524] dark:text-[#F5F5F0] tracking-tight">
                  {srv.title}
                </h3>

                <p className="mt-3 text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
                  {srv.description}
                </p>

                {/* Deliverables checklist */}
                <div className="mt-6 space-y-2.5 pt-6 border-t border-stone-200/50 dark:border-stone-800">
                  {srv.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300">
                      <div className="w-4 h-4 rounded-full bg-[#FFB7B2] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-2.5 h-2.5 text-[#292524]" />
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
                <a
                  href={`https://wa.me/917799001102?text=Hi%20Gimbells!%20I%20am%20interested%20in%20learning%20more%20about%20your%20${encodeURIComponent(srv.title)}%20service.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-stone-800 dark:text-stone-200 hover:text-stone-950 dark:hover:text-white underline underline-offset-4 flex items-center gap-1"
                >
                  <span>Chat on WhatsApp about this</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
