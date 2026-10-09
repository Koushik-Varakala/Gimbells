import React from 'react';
import { Play, Eye, Film, MessageSquare, Sparkles } from 'lucide-react';
import { reelItems } from '../data/agencyData';
import { ReelItem } from '../types';

interface ReelsShowcaseProps {
  onSelectReel: (reel: ReelItem) => void;
}

export default function ReelsShowcase({ onSelectReel }: ReelsShowcaseProps) {
  // Exactly the 3 uploaded client videos
  const showcaseVideos = reelItems.slice(0, 3);

  return (
    <section id="reels" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-400 dark:text-stone-500 mb-2">
            <span>Client Video Showcase</span>
            <span aria-hidden="true">·</span>
            <span>Smooth Gimbal Motion</span>
          </div>
          <h2 className="font-outfit text-3xl sm:text-5xl text-[#292524] dark:text-[#F5F5F0] font-normal tracking-tight">
            Our 3 featured client videos.
          </h2>
          <p className="mt-3 text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
            Real videos produced for Vaastu Italian Marble and Stone Culture in Shamshabad. Click any video to play the walkthrough, explore the script, and inspect the customer response.
          </p>
        </div>

        {/* Clean indicator */}
        <div className="mt-4 md:mt-0 flex items-center gap-2 text-xs font-mono text-stone-600 dark:text-stone-300 bg-stone-100/90 dark:bg-stone-800/90 px-4 py-2 rounded-full border border-stone-200/50 dark:border-stone-700/60 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-[#FFB7B2] animate-pulse" />
          <span>3 Ready to Play with Motion & Sound</span>
        </div>
      </div>

      {/* Grid of exactly 3 9:16 Vertical Reel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
        {showcaseVideos.map((reel) => (
          <div
            key={reel.id}
            onClick={() => onSelectReel(reel)}
            className="group relative bg-white dark:bg-[#1E1D1B] rounded-[2rem] overflow-hidden border border-stone-200/70 dark:border-stone-800 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] hover:shadow-[0_16px_36px_-4px_rgba(0,0,0,0.2)] dark:hover:border-stone-700 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col"
          >
            {/* 9:16 Image / Video Container */}
            <div className="relative aspect-[9/14] w-full overflow-hidden bg-stone-900">
              <img
                src={reel.thumbnail}
                alt={reel.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
                referrerPolicy="no-referrer"
              />

              {/* Scrim Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/95 via-stone-950/30 to-stone-950/20" />

              {/* Top Bar inside card */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white text-xs z-10">
                <span className="bg-white/25 backdrop-blur-md px-3 py-1 rounded-full font-medium text-[11px] shadow-xs">
                  {reel.client}
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px] bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-full text-white">
                  <Eye className="w-3 h-3 text-[#FFB7B2]" />
                  {reel.views}
                </span>
              </div>

              {/* Center Play Button Prompt */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white transform group-hover:scale-115 group-hover:bg-[#FFB7B2] group-hover:text-[#292524] transition-all duration-300 shadow-xl">
                  <Play className="w-6 h-6 ml-0.5 fill-current" />
                </div>
              </div>

              {/* Bottom Card Copy */}
              <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                <p className="font-outfit text-lg font-semibold leading-snug line-clamp-2 mb-1 group-hover:text-[#FFB7B2] transition-colors">
                  {reel.title}
                </p>
                <p className="text-xs text-stone-300 line-clamp-2 italic leading-relaxed">
                  "{reel.hook}"
                </p>
                <div className="mt-3 pt-2.5 border-t border-white/20 flex items-center justify-between text-[11px] font-mono text-stone-300">
                  <span>Duration: {reel.duration}</span>
                  <span className="text-[#FFB7B2] font-semibold">{reel.inquiries}</span>
                </div>
              </div>
            </div>

            {/* Footer details underneath */}
            <div className="p-4 bg-white dark:bg-[#1E1D1B] flex items-center justify-between text-xs text-stone-600 dark:text-stone-300 font-outfit border-t border-stone-100 dark:border-stone-800">
              <span className="font-medium text-stone-800 dark:text-stone-200">{reel.language || 'English'}</span>
              <span className="text-[#FFB7B2] font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                Play video with sound →
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Friendly Bottom Banner with WhatsApp 7799001102 */}
      <div className="mt-12 p-6 rounded-[2rem] bg-[#E8EFE8]/70 dark:bg-stone-900/70 border border-stone-200/60 dark:border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-white dark:bg-stone-800 flex items-center justify-center text-stone-800 dark:text-stone-200 shadow-xs flex-shrink-0">
            <Film className="w-6 h-6 text-stone-700 dark:text-stone-300" />
          </div>
          <div>
            <p className="font-outfit text-base font-semibold text-[#292524] dark:text-[#F5F5F0]">
              Want videos like these shot for your business or showroom?
            </p>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400">
              We visit your location in Hyderabad and Shamshabad with our gimbal and mobile setup. Quick, friendly, and zero hassle.
            </p>
          </div>
        </div>
        <a
          href="https://wa.me/917799001102?text=Hi%20Gimbells!%20I%20saw%20your%203%20videos%20for%20Vaastu%20and%20Stone%20Culture.%20I%20would%20love%20something%20similar%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-2.5 rounded-full bg-[#292524] dark:bg-[#F5F5F0] dark:text-[#141312] text-white text-xs sm:text-sm font-medium hover:bg-stone-800 dark:hover:bg-white transition-colors whitespace-nowrap cursor-pointer flex items-center gap-2"
        >
          <MessageSquare className="w-4 h-4 text-[#FFB7B2] dark:text-stone-900" />
          <span>Chat on WhatsApp: 7799001102</span>
        </a>
      </div>
    </section>
  );
}
