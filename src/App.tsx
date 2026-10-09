/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import GrainOverlay from './components/GrainOverlay';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ReelsShowcase from './components/ReelsShowcase';
import ReelsModal from './components/ReelsModal';
import CaseStudiesSection from './components/CaseStudiesSection';
import ServicesSection from './components/ServicesSection';
import TeamSection from './components/TeamSection';
import FaqAccordion from './components/FaqAccordion';
import ProjectScopeCalculator from './components/ProjectScopeCalculator';
import Footer from './components/Footer';
import { ReelItem } from './types';
import { ThemeProvider } from './context/ThemeContext';

export default function App() {
  const [selectedReel, setSelectedReel] = useState<ReelItem | null>(null);
  const [preselectedClient, setPreselectedClient] = useState<string>('');

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToReels = () => {
    const el = document.getElementById('reels');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectProjectFromReel = (clientName: string) => {
    setPreselectedClient(clientName);
    scrollToContact();
  };

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[#FDFCF8] dark:bg-[#141312] text-[#292524] dark:text-[#F5F5F0] font-outfit selection:bg-[#FFB7B2]/30 selection:text-[#292524] dark:selection:text-white overflow-x-hidden transition-colors duration-300">
        {/* Persistent 0.35 opacity fractal noise grain overlay */}
        <GrainOverlay />

        {/* Floating pill navigation */}
        <Navbar onOpenContact={scrollToContact} />

        {/* Main Agency Content Flow */}
        <main>
          {/* Hero Section */}
          <HeroSection
            onOpenContact={scrollToContact}
            onExploreReels={scrollToReels}
          />

          {/* 01. Interactive 9:16 Client Reels Showcase */}
          <ReelsShowcase onSelectReel={(reel) => setSelectedReel(reel)} />

          {/* 02. In-Depth Case Studies (Vaastu, Stone Culture, Nest Fertility, Local Services) */}
          <CaseStudiesSection />

          {/* 03. Core Capabilities / Services (Videography, Digital Marketing, All-in-One, SMMA) */}
          <ServicesSection />

          {/* 04. The Founders: Koushik, Rohith, Krishna */}
          <TeamSection />

          {/* 05. Interactive Project Scope Builder & Inquiry Form */}
          <ProjectScopeCalculator preselectedClient={preselectedClient} />

          {/* 06. Interactive FAQ Accordion */}
          <FaqAccordion />
        </main>

        {/* Quiet Footer */}
        <Footer />

        {/* Interactive Vertical 9:16 Reel Player Modal */}
        <ReelsModal
          reel={selectedReel}
          onClose={() => setSelectedReel(null)}
          onSelectProject={handleSelectProjectFromReel}
        />
      </div>
    </ThemeProvider>
  );
}
