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
 * Follows the strategic user journey: Hook -> Bio -> Platform -> Action -> Social Proof -> Resources.
 */
export function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-campaign-gold/30 selection:text-campaign-black">
      {/* Navigation Layer */}
      <Navbar />
      <main id="main-content">
        {/* Phase 1: The Hook - High impact video and core value proposition */}
        <HeroSection />
        {/* Phase 2: The Candidate - Humanizing the candidate and establishing union roots */}
        <BioSection />
        {/* Phase 3: The Plan - Detailed policy pillars and brand values */}
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