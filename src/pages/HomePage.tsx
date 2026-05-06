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
 * HomePage: The primary orchestration component for Tricia Geiger's 2026 UAW Presidential campaign.
 * 
 * Strategic Narrative Flow:
 * 1. Hero: Branding and launch video.
 * 2. Bio: Establishing trust through Flint GM origins.
 * 3. Platform: In-depth 8-pillar strategic roadmap with full verbatim commitments.
 * 4. Involve: Dual-funnel conversion for updates and activism.
 * 5. Endorsements: Social proof from rank-and-file leadership.
 * 6. Resources: Tools for local organizing and material distribution.
 */
export function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-campaign-gold selection:text-white">
      {/* Accessibility Skip Link for Keyboard Navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-campaign-black text-white px-6 py-3 rounded-lg font-bold shadow-2xl ring-4 ring-campaign-gold transition-all"
      >
        Skip to content
      </a>
      {/* Persistent Global Navigation */}
      <Navbar />
      <main id="main-content" role="main" className="outline-none">
        {/* Sections flow in a continuous, strategic scroll */}
        <HeroSection />
        <BioSection />
        <PlatformSection />
        <InvolveSection />
        <Endorsements />
        <ResourcesSection />
      </main>
      {/* Comprehensive Footer & Social Integration */}
      <Footer />
      {/* Global Toast Provider for User Feedback */}
      <Toaster 
        richColors 
        closeButton 
        position="bottom-center"
        toastOptions={{
          style: {
            borderRadius: '12px',
            border: '1px solid #D4C4A8',
            background: 'white',
            color: '#1A1A1A',
          },
        }}
      />
    </div>
  );
}