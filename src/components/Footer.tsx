import React from 'react';
import { ArrowUpRight, MapPin, MessageSquare, Phone } from 'lucide-react';
import GimbellLogo from './GimbellLogo';

export default function Footer() {
  return (
    <footer className="border-t border-stone-200/60 dark:border-stone-800 bg-[#FDFCF8] dark:bg-[#141312] pt-16 pb-12 px-4 max-w-7xl mx-auto transition-colors duration-200">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mb-12">
        {/* Brand Lockup */}
        <div>
          <div className="flex items-center gap-2.5 mb-2">
            <div className="w-8 h-8 rounded-full bg-[#FFE4E1] dark:bg-[#FFB7B2]/20 flex items-center justify-center text-[#292524] dark:text-[#FFB7B2]">
              <GimbellLogo size={20} className="text-[#292524] dark:text-[#FFB7B2]" />
            </div>
            <span className="font-outfit font-semibold text-xl tracking-tight text-[#292524] dark:text-[#F5F5F0]">
              Gimbells
            </span>
          </div>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-md font-outfit leading-relaxed">
            Smooth gimbal videography, digital marketing, and social media management for growing businesses. Run with care by Koushik, Rohith, and Krishna.
          </p>
          <div className="flex flex-wrap items-center gap-4 text-xs text-stone-500 dark:text-stone-400 mt-3 font-mono">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-stone-400" />
              Hyderabad & Shamshabad, Telangana
            </span>
            <span aria-hidden="true">·</span>
            <a
              href="https://wa.me/917799001102"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 font-semibold hover:underline"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 7799001102
            </a>
          </div>
        </div>

        {/* Clean Text Links */}
        <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium text-stone-600 dark:text-stone-400 font-outfit">
          <a href="#reels" className="hover:text-stone-900 dark:hover:text-white transition-colors">
            Featured Videos
          </a>
          <a href="#services" className="hover:text-stone-900 dark:hover:text-white transition-colors">
            Services
          </a>
          <a href="#work" className="hover:text-stone-900 dark:hover:text-white transition-colors">
            Client Results
          </a>
          <a href="#team" className="hover:text-stone-900 dark:hover:text-white transition-colors">
            About Us
          </a>
          <a href="#faq" className="hover:text-stone-900 dark:hover:text-white transition-colors">
            FAQ
          </a>
          <a
            href="https://wa.me/917799001102?text=Hi%20Gimbells!%20I%20would%20like%20to%20discuss%20working%20together."
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-800 dark:text-emerald-300 font-semibold flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950/40 px-3 py-1.5 rounded-full border border-emerald-200 dark:border-emerald-800/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>WhatsApp (7799001102)</span>
          </a>
        </div>
      </div>

      {/* Hairline divider & bottom unboxed metadata */}
      <div className="pt-8 border-t border-stone-200/50 dark:border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400 dark:text-stone-500 font-outfit">
        <div className="flex items-center gap-2">
          <span>© 2026 Gimbells</span>
          <span aria-hidden="true">·</span>
          <span>Koushik, Rohith & Krishna</span>
          <span aria-hidden="true">·</span>
          <span>Hyderabad</span>
        </div>

        <div className="flex items-center gap-4">
          <span className="font-reenie text-xl text-stone-500 dark:text-stone-400">
            smooth motion & honest work
          </span>
        </div>
      </div>
    </footer>
  );
}
