import React from 'react';
import { ArrowDown, Play, MessageSquare, MapPin, ArrowRight } from 'lucide-react';
import GimbellLogo from './GimbellLogo';

interface HeroSectionProps {
  onOpenContact: () => void;
  onExploreReels: () => void;
}

export default function HeroSection({ onOpenContact, onExploreReels }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center pt-32 pb-20 px-4 text-center overflow-hidden">
      {/* Background soft pastel blurred blobs with dark mode optical adjustment */}
      <div
        aria-hidden="true"
        className="absolute top-12 left-1/2 -translate-x-[65%] w-[380px] sm:w-[560px] h-[380px] sm:h-[560px] rounded-full bg-[#FFE4E1] dark:bg-[#FFB7B2] opacity-60 dark:opacity-20 blur-[110px] dark:blur-[130px] pointer-events-none animate-float-1"
      />
      <div
        aria-hidden="true"
        className="absolute top-28 left-1/2 -translate-x-[35%] w-[360px] sm:w-[520px] h-[360px] sm:h-[520px] rounded-full bg-[#E8EFE8] dark:bg-[#A7C1A5] opacity-65 dark:opacity-15 blur-[120px] dark:blur-[140px] pointer-events-none animate-float-2"
      />

      {/* Main Container */}
      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        
        {/* Logo Badge */}
        <div className="mb-6 flex items-center gap-3 bg-white/90 dark:bg-[#1C1B19]/90 border border-stone-200/80 dark:border-stone-800 px-4 py-2 rounded-full shadow-xs">
          <div className="w-6 h-6 rounded-full bg-[#FFE4E1] dark:bg-[#FFB7B2]/20 flex items-center justify-center text-[#292524] dark:text-[#FFB7B2]">
            <GimbellLogo size={16} className="text-[#292524] dark:text-[#FFB7B2]" />
          </div>
          <span className="font-outfit font-semibold text-sm tracking-tight text-[#292524] dark:text-[#F5F5F0]">
            Gimbells
          </span>
          <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
          <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
            Koushik, Rohith & Krishna
          </span>
          <span aria-hidden="true" className="text-stone-300 dark:text-stone-700">·</span>
          <span className="text-xs text-stone-500 dark:text-stone-400 font-medium flex items-center gap-1">
            <MapPin className="w-3 h-3 text-stone-400" />
            Hyderabad
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-outfit text-4xl sm:text-6xl md:text-[68px] lg:text-[72px] font-normal leading-[1.1] tracking-[-0.025em] text-[#292524] dark:text-[#F5F5F0] max-w-4xl mx-auto text-balance">
          Helping great businesses grow through smooth{' '}
          <span className="font-reenie text-[#FFB7B2] text-5xl sm:text-7xl md:text-8xl inline-block -rotate-2 mx-1.5 hover:rotate-1 transition-transform cursor-pointer select-none">
            gimbal
          </span>{' '}
          videos and real customer leads.
        </h1>

        {/* Sub-headline */}
        <p className="mt-6 text-base sm:text-lg text-[#78716C] dark:text-stone-400 max-w-[580px] mx-auto font-normal leading-relaxed text-pretty">
          We bring our iPhones and smooth gimbal setup right to your showroom, clinic, or job site. Friendly, reliable videography, Meta & Google ads, and full social media management.
        </p>

        {/* Dual CTA buttons */}
        <div className="mt-9 flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          {/* Primary pill in Coral #FFB7B2 with soft shadow */}
          <button
            type="button"
            onClick={onExploreReels}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#FFB7B2] text-[#292524] text-sm sm:text-base font-outfit font-medium transition-all duration-300 shadow-[0_4px_20px_-2px_rgba(255,183,178,0.55)] hover:shadow-[0_8px_25px_-2px_rgba(255,183,178,0.7)] hover:-translate-y-0.5 active:translate-y-0 cursor-pointer flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-[#292524]" />
            <span>Watch Our 3 Featured Videos</span>
          </button>

          {/* Secondary pill directly messaging on WhatsApp 7799001102 */}
          <a
            href="https://wa.me/917799001102?text=Hi%20Gimbells!%20I%20would%20like%20to%20discuss%20working%20together."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white dark:bg-[#1C1B19] border border-stone-200 dark:border-stone-800 text-[#292524] dark:text-stone-200 text-sm sm:text-base font-outfit font-medium transition-all duration-200 hover:bg-stone-50 dark:hover:bg-stone-800/80 hover:border-stone-300 dark:hover:border-stone-700 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 group shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>Chat on WhatsApp: 7799001102</span>
          </a>
        </div>

        {/* Client trust proof bar */}
        <div className="mt-14 pt-8 border-t border-stone-200/60 dark:border-stone-800/80 w-full max-w-3xl">
          <p className="text-xs uppercase tracking-wider text-stone-400 dark:text-stone-500 font-mono mb-4">
            Proudly Working With Local Leaders
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-stone-700 dark:text-stone-300 text-sm sm:text-base font-outfit font-medium">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FFB7B2]" />
              Vaastu Italian Marble
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E8EFE8] dark:bg-[#A7C1A5]" />
              Stone Culture (Shamshabad)
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#EFEDF4] dark:bg-purple-900/50" />
              Nest Fertility (Chandanagar)
            </span>
            <span className="text-stone-400 dark:text-stone-500">
              + Local Home Services & Real Estate
            </span>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="mt-12 animate-bounce">
          <a
            href="#reels"
            aria-label="Scroll to featured videos"
            className="p-2 rounded-full text-stone-400 dark:text-stone-500 hover:text-stone-700 dark:hover:text-stone-300 transition-colors inline-block"
          >
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
