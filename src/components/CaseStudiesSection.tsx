import React, { useState } from 'react';
import { caseStudies } from '../data/agencyData';
import { Building2, Sparkles, TrendingUp, CheckCircle, ArrowUpRight, MapPin } from 'lucide-react';

export default function CaseStudiesSection() {
  const [activeTab, setActiveTab] = useState(caseStudies[0].id);

  const selectedCase = caseStudies.find(c => c.id === activeTab) || caseStudies[0];

  return (
    <section id="work" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Header */}
      <div className="max-w-2xl mb-12">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-400 dark:text-stone-500 mb-2">
          <span>Client Stories</span>
          <span aria-hidden="true">·</span>
          <span>From Chandanagar to Shamshabad</span>
        </div>
        <h2 className="font-outfit text-3xl sm:text-5xl text-[#292524] dark:text-[#F5F5F0] font-normal tracking-tight">
          How we help local businesses grow.
        </h2>
        <p className="mt-3 text-stone-600 dark:text-stone-400 text-base leading-relaxed">
          Real results for businesses we love working with. From local showrooms to family clinics, here is how we make a difference together.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-stone-200/80 dark:border-stone-800 overflow-x-auto no-scrollbar pb-3 mb-8">
        {caseStudies.map((cs) => (
          <button
            key={cs.id}
            type="button"
            onClick={() => setActiveTab(cs.id)}
            className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-outfit font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === cs.id
                ? 'bg-[#292524] text-white dark:bg-[#F5F5F0] dark:text-[#141312] shadow-xs'
                : 'bg-white dark:bg-[#1E1D1B] text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white border border-stone-200/70 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800'
            }`}
          >
            {cs.clientName}
          </button>
        ))}
      </div>

      {/* Active Case Study Detail Box */}
      <div className="bg-white dark:bg-[#1C1B19] rounded-[2.5rem] p-6 sm:p-12 border border-stone-200/70 dark:border-stone-800 shadow-[0_4px_25px_-2px_rgba(0,0,0,0.06)] dark:shadow-[0_4px_25px_-2px_rgba(0,0,0,0.3)] transition-colors duration-200">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 justify-between">
          
          {/* Left Column: Context, Challenge & Solution */}
          <div className="flex-1 max-w-2xl">
            <div className="flex flex-wrap items-center gap-3 text-xs text-stone-500 dark:text-stone-400 mb-4 font-outfit">
              <span className="font-semibold text-stone-800 dark:text-stone-200">{selectedCase.clientName}</span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-stone-400 dark:text-stone-500" />
                {selectedCase.location}
              </span>
              <span aria-hidden="true">·</span>
              <span className="text-[#292524] dark:text-stone-300 font-medium">{selectedCase.industry}</span>
            </div>

            <h3 className="font-outfit text-2xl sm:text-3xl text-[#292524] dark:text-[#F5F5F0] font-normal leading-snug">
              {selectedCase.headline}
            </h3>

            {/* Deliverables Unboxed list */}
            <div className="mt-4 flex flex-wrap gap-2">
              {selectedCase.services.map((srv, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium"
                >
                  {srv}
                </span>
              ))}
            </div>

            <div className="mt-8 space-y-5 text-sm sm:text-base text-stone-600 dark:text-stone-400 font-normal leading-relaxed">
              <div>
                <strong className="text-stone-900 dark:text-stone-200 block font-medium mb-1">The Challenge:</strong>
                <p>{selectedCase.challenge}</p>
              </div>

              <div>
                <strong className="text-stone-900 dark:text-stone-200 block font-medium mb-1">Our Strategy & Execution:</strong>
                <p>{selectedCase.solution}</p>
              </div>
            </div>

            {/* Quote block */}
            <div className="mt-8 p-5 rounded-2xl bg-[#FDFCF8] dark:bg-[#141312] border border-stone-200/60 dark:border-stone-800 relative">
              <p className="font-reenie text-2xl text-stone-700 dark:text-stone-300 leading-snug">
                "{selectedCase.quote}"
              </p>
              <p className="mt-2 text-xs font-outfit text-stone-500 dark:text-stone-400 font-medium">
                — {selectedCase.spokesperson}
              </p>
            </div>
          </div>

          {/* Right Column: Quantitative Proof Grid */}
          <div className="lg:w-80 flex-shrink-0 flex flex-col justify-between">
            <div>
              <p className="text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 font-medium mb-4">
                Verified Campaign Results
              </p>

              <div className="grid grid-cols-2 lg:grid-cols-1 gap-4">
                {selectedCase.metrics.map((metric, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-900/80 border border-stone-200/50 dark:border-stone-800 flex flex-col justify-between"
                  >
                    <span className="font-outfit text-3xl sm:text-4xl font-normal text-[#292524] dark:text-[#F5F5F0] tabular-nums tracking-tight">
                      {metric.value}
                    </span>
                    <span className="text-xs font-medium text-stone-500 dark:text-stone-400 mt-1 font-outfit">
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-stone-100 dark:border-stone-800">
              <a
                href="#contact"
                className="w-full py-3.5 px-6 rounded-full bg-[#292524] hover:bg-stone-800 dark:bg-[#F5F5F0] dark:hover:bg-white text-white dark:text-[#141312] text-xs sm:text-sm font-medium flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Scale your brand like this</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
