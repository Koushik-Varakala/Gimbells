import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, MessageSquare, ArrowUpRight, Sun, Moon } from 'lucide-react';
import { ambientSound } from '../utils/ambientAudio';
import { AmbientSoundType } from '../types';
import GimbellLogo from './GimbellLogo';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenContact: () => void;
}

export default function Navbar({ onOpenContact }: NavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [activeSound, setActiveSound] = useState<AmbientSoundType>('none');
  const [isScrolled, setIsScrolled] = useState(false);
  const [soundMenuOpen, setSoundMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToggleSound = (type: 'rain' | 'hearth' | 'chime') => {
    if (activeSound === type) {
      ambientSound.stop();
      setActiveSound('none');
    } else {
      ambientSound.play(type);
      setActiveSound(type);
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-40 flex justify-center px-4 pointer-events-none">
      <nav
        aria-label="Primary navigation"
        className={`pointer-events-auto w-[calc(100%-2rem)] max-w-5xl bg-white/85 dark:bg-[#1C1B19]/90 backdrop-blur-[20px] rounded-full px-4 sm:px-6 py-2.5 sm:py-3 border border-stone-200/70 dark:border-stone-800/80 flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'shadow-[0_8px_30px_-4px_rgba(0,0,0,0.15)]' : 'shadow-[0_4px_20px_-2px_rgba(0,0,0,0.06)]'
        }`}
      >
        {/* Zone 1: Gimbells Logo + Brand Name */}
        <a
          href="#"
          className="flex items-center gap-2.5 text-stone-900 dark:text-stone-100 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFB7B2] rounded-full"
        >
          <div
            className="w-8 h-8 rounded-full bg-[#FFE4E1] dark:bg-[#FFB7B2]/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-xs text-[#292524] dark:text-[#FFB7B2]"
            aria-hidden="true"
          >
            <GimbellLogo size={22} className="text-[#292524] dark:text-[#FFB7B2]" />
          </div>
          <span className="font-outfit font-semibold text-lg tracking-tight text-[#292524] dark:text-[#F5F5F0]">
            Gimbells
          </span>
        </a>

        {/* Zone 2: Clean text links */}
        <div className="hidden md:flex items-center gap-7 text-[14px] font-outfit font-medium text-stone-600 dark:text-stone-300">
          <a
            href="#reels"
            className="hover:text-[#292524] dark:hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#FFB7B2] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Videos
          </a>
          <a
            href="#services"
            className="hover:text-[#292524] dark:hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#FFB7B2] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Services
          </a>
          <a
            href="#work"
            className="hover:text-[#292524] dark:hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#FFB7B2] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            Results
          </a>
          <a
            href="#team"
            className="hover:text-[#292524] dark:hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#FFB7B2] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            About Us
          </a>
          <a
            href="#faq"
            className="hover:text-[#292524] dark:hover:text-white transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[1.5px] after:bg-[#FFB7B2] after:origin-left after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
          >
            FAQ
          </a>
        </div>

        {/* Zone 3: Dark/Light Mode + Audio button + Action CTA */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          
          {/* Dark / Light Mode Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            className="p-2 rounded-full border transition-all duration-200 flex items-center justify-center bg-stone-50/90 dark:bg-stone-800/80 border-stone-200/70 dark:border-stone-700 text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-700/80 cursor-pointer shadow-2xs"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-300 animate-in spin-in-90 duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-stone-600 animate-in spin-in-90 duration-300" />
            )}
          </button>

          {/* Ambient Sound Toggle */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSoundMenuOpen(!soundMenuOpen)}
              className={`p-2 rounded-full border transition-all duration-200 flex items-center justify-center ${
                activeSound !== 'none'
                  ? 'bg-[#E8EFE8] dark:bg-stone-800 border-stone-300 dark:border-stone-700 text-stone-800 dark:text-stone-100'
                  : 'bg-stone-50/80 dark:bg-stone-800/80 border-stone-200/70 dark:border-stone-700 text-stone-500 dark:text-stone-400 hover:text-stone-800 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-700/80'
              }`}
              title="Toggle ambient background sound"
              aria-label="Toggle ambient background sound"
            >
              {activeSound !== 'none' ? (
                <Volume2 className="w-4 h-4 text-stone-700 dark:text-[#FFB7B2] animate-pulse" />
              ) : (
                <VolumeX className="w-4 h-4 text-stone-500 dark:text-stone-400" />
              )}
            </button>

            {soundMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white/95 dark:bg-[#1E1D1B]/95 backdrop-blur-md rounded-2xl p-2 shadow-lg border border-stone-200/80 dark:border-stone-800 z-50 animate-in fade-in zoom-in-95 duration-150">
                <p className="text-[11px] font-medium text-stone-400 dark:text-stone-500 px-3 py-1 font-mono">
                  Calm Atmosphere
                </p>
                <button
                  type="button"
                  onClick={() => {
                    handleToggleSound('hearth');
                    setSoundMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                    activeSound === 'hearth'
                      ? 'bg-[#FFE4E1] dark:bg-stone-800 text-stone-900 dark:text-[#FFB7B2]'
                      : 'hover:bg-stone-50 dark:hover:bg-stone-800/60 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  <span>Warm Studio Beat</span>
                  {activeSound === 'hearth' && <span className="w-1.5 h-1.5 rounded-full bg-stone-700 dark:bg-[#FFB7B2]" />}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleToggleSound('rain');
                    setSoundMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-1.5 rounded-xl text-xs font-medium flex items-center justify-between ${
                    activeSound === 'rain'
                      ? 'bg-[#E8EFE8] dark:bg-stone-800 text-stone-900 dark:text-[#A7C1A5]'
                      : 'hover:bg-stone-50 dark:hover:bg-stone-800/60 text-stone-700 dark:text-stone-300'
                  }`}
                >
                  <span>Soft Rain</span>
                  {activeSound === 'rain' && <span className="w-1.5 h-1.5 rounded-full bg-stone-700 dark:bg-[#A7C1A5]" />}
                </button>
                {activeSound !== 'none' && (
                  <button
                    type="button"
                    onClick={() => {
                      ambientSound.stop();
                      setActiveSound('none');
                      setSoundMenuOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 mt-1 rounded-xl text-xs text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 border-t border-stone-100 dark:border-stone-800"
                  >
                    Mute sound
                  </button>
                )}
              </div>
            )}
          </div>

          {/* WhatsApp Direct Link (7799001102) */}
          <a
            href="https://wa.me/917799001102?text=Hi%20Gimbells%20team!%20I%20would%20like%20to%20discuss%20services%20for%20my%20business."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 text-xs font-medium border border-emerald-200/80 dark:border-emerald-800/50 transition-colors shadow-2xs"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-700 dark:text-emerald-400" />
            <span>WhatsApp</span>
          </a>

          {/* Dark/Light Pill CTA Button */}
          <button
            type="button"
            onClick={onOpenContact}
            className="bg-[#292524] hover:bg-[#1c1917] dark:bg-[#F5F5F0] dark:hover:bg-white dark:text-[#141312] active:scale-[0.98] text-white text-[13px] sm:text-[14px] font-outfit font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-full transition-all duration-200 shadow-sm whitespace-nowrap cursor-pointer flex items-center gap-1.5"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </button>
        </div>
      </nav>
    </header>
  );
}
