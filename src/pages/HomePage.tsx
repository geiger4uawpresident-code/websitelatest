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
 * HomePage: The central orchestration component for the Tricia Geiger 2026 UAW Campaign site.
 * 
 * Flow Strategy:
 * 1. Hero: Immediate impact and core message.
 * 2. Bio: Establishing the candidate's history and trustworthiness.
 * 3. Platform: Detailed policy and brand pillar communication.
 * 4. Involve: Clear, dual-funnel calls to action.
 * 5. Endorsements: Validating momentum through peer voices.
 * 6. Resources: Empowering members to organize locally.
 */
export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Accessibility: Priority keyboard navigation skip-link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-campaign-gold text-white px-6 py-3 rounded-lg font-bold shadow-2xl ring-4 ring-white transition-all"
      >
        Skip to main campaign content
      </a>
      {/* Navigation Layer */}
      <Navbar />
      <main id="main-content" role="main" tabIndex={-1} className="outline-none">
        {/* Core Narrative Sections */}
        <HeroSection />
        <BioSection />
        <PlatformSection />
        {/* Action and Social Proof Sections */}
        <InvolveSection />
        <Endorsements />
        <ResourcesSection />
      </main>
      {/* Persistent Footer and Legal Attribution */}
      <Footer />
      {/* Feedback layer positioned to avoid mobile nav conflicts */}
      <Toaster richColors closeButton position="bottom-right" />
    </div>
  );
}