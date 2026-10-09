import React from 'react';
import { teamMembers } from '../data/agencyData';
import { Smartphone, Sparkles, HeartHandshake, Smile } from 'lucide-react';
import GimbellLogo from './GimbellLogo';

export default function TeamSection() {
  return (
    <section id="team" className="py-24 px-4 max-w-7xl mx-auto">
      {/* Editorial Title */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-stone-400 dark:text-stone-500 mb-2">
          <span>About Us</span>
          <span aria-hidden="true">·</span>
          <span>Hands-on & Friendly</span>
        </div>
        <h2 className="font-outfit text-3xl sm:text-5xl text-[#292524] dark:text-[#F5F5F0] font-normal tracking-tight">
          Three friends dedicated to helping your business thrive.
        </h2>
        <p className="mt-4 text-stone-600 dark:text-stone-400 text-base sm:text-lg leading-relaxed">
          Koushik, Rohith, and Krishna started Gimbells to bring genuine care, smooth mobile videography, and dependable marketing to local businesses and clinics across Hyderabad.
        </p>
      </div>

      {/* Warm Philosophy Banner - Simple & Mobile Friendly */}
      <div className="mb-14 bg-white dark:bg-[#1C1B19] rounded-[2.5rem] p-8 sm:p-12 border border-stone-200/70 dark:border-stone-800 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_-2px_rgba(0,0,0,0.25)] grid grid-cols-1 md:grid-cols-12 gap-8 items-center transition-colors duration-200">
        <div className="md:col-span-8">
          <div className="flex items-center gap-2.5 text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-3">
            <Smartphone className="w-4 h-4 text-stone-600 dark:text-stone-400" />
            <span>Mobile & Gimbal Shoots</span>
          </div>
          <h3 className="font-outfit text-2xl sm:text-3xl font-normal text-[#292524] dark:text-[#F5F5F0] leading-snug">
            Simple, hassle-free video shoots that respect your time.
          </h3>
          <p className="mt-4 text-stone-600 dark:text-stone-400 text-sm sm:text-base leading-relaxed">
            We don't bring heavy, intimidating studio equipment that blocks your customers. We shoot with clean, high-resolution iPhones and a handheld gimbal. It’s fast, natural, and creates videos people actually enjoy watching on their phones.
          </p>
        </div>

        <div className="md:col-span-4 flex flex-col items-center justify-center p-6 bg-[#FFE4E1]/30 dark:bg-stone-900/80 rounded-3xl border border-[#FFB7B2]/40 dark:border-stone-800 text-center">
          <div className="w-16 h-16 rounded-full bg-white dark:bg-stone-800 flex items-center justify-center shadow-xs mb-3 text-[#292524] dark:text-[#FFB7B2]">
            <GimbellLogo size={36} className="text-[#292524] dark:text-[#FFB7B2]" />
          </div>
          <p className="font-outfit font-semibold text-stone-800 dark:text-stone-100 text-base">
            The Gimbells Way
          </p>
          <p className="text-xs text-stone-600 dark:text-stone-400 mt-1">
            Smooth motion, honest marketing, and direct communication.
          </p>
        </div>
      </div>

      {/* 3 Team Member Cards - Family Friendly & Grounded */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {teamMembers.map((member, idx) => {
          const colors = [
            'bg-[#FFE4E1]/30 dark:bg-[#1E1D1B]',
            'bg-[#E8EFE8]/40 dark:bg-[#1E1D1B]',
            'bg-[#EFEDF4]/40 dark:bg-[#1E1D1B]'
          ];

          return (
            <div
              key={idx}
              className={`rounded-[2.2rem] p-8 border border-stone-200/60 dark:border-stone-800 shadow-xs flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${colors[idx]}`}
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-stone-800 border border-stone-200/60 dark:border-stone-700 flex items-center justify-center text-stone-800 dark:text-[#FFB7B2] shadow-2xs mb-6">
                  {idx === 0 && <Sparkles className="w-6 h-6" />}
                  {idx === 1 && <HeartHandshake className="w-6 h-6" />}
                  {idx === 2 && <Smile className="w-6 h-6" />}
                </div>

                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-outfit text-2xl font-semibold text-[#292524] dark:text-[#F5F5F0]">
                    {member.name}
                  </h3>
                </div>

                <p className="text-xs font-semibold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-mono mb-4">
                  {member.role}
                </p>

                <p className="text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-normal">
                  {member.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-stone-200/60 dark:border-stone-800">
                <span className="text-xs text-stone-500 dark:text-stone-400 font-medium">
                  Direct & dependable support
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
