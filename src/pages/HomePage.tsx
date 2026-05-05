import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { BioSection } from '@/components/sections/BioSection';
import { PlatformSection } from '@/components/sections/PlatformSection';
import { InvolveSection } from '@/components/sections/InvolveSection';
import { Endorsements } from '@/components/sections/Endorsements';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';
/**
 * HomePage: The central orchestration component for the single-page campaign site.
 * This component structures the user journey to build trust and momentum before the call to action.
 */
export function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-campaign-gold/30 selection:text-campaign-black">
      {/* Accessibility: Skip to main content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-[100] bg-campaign-gold text-white px-4 py-2 rounded-md font-bold shadow-lg ring-2 ring-white"
      >
        Skip to content
      </a>
      {/* Navigation Layer */}
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1}>
        {/* Phase 1: The Hook - High impact video and core value proposition */}
        <HeroSection />
        {/* Phase 2: The Candidate - establishing union roots and personal history */}
        <BioSection />
        {/* Phase 3: The Plan - Detailed policy pillars and verbatim brand values */}
        <PlatformSection />
        {/* Phase 4: The Call to Action - Dual-funnel involvement tracks */}
        <InvolveSection />
        {/* Phase 5: Social Proof - Member testimonials and floor voices */}
        <Endorsements />
        {/* Phase 6: Empowerment - Downloadable materials for local organizing */}
        <ResourcesSection />
      </main>
      {/* Persistent Footer and Legal Information */}
      <Footer />
      {/* Global Toast notifications for interaction feedback */}
      <Toaster richColors closeButton position="bottom-right" />
    </div>
  );
}