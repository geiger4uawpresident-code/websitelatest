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
 * Strategic Flow:
 * 1. Hero: Emotional hook and "Prepared. Democratic. Accountable." branding.
 * 2. Bio: Personal history (Flint GM roots) to establish trust.
 * 3. Platform: Concrete 8-pillar policy details for institutional reform.
 * 4. Involve: Conversion funnel for supporters and organizers.
 * 5. Endorsements: Social proof from rank-and-file members.
 * 6. Resources: Practical tools for local organizing.
 */
export function HomePage() {
  return (
    <div className="min-h-screen bg-white selection:bg-campaign-gold selection:text-white">
      {/* Accessibility Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-[100] bg-campaign-black text-white px-6 py-3 rounded-lg font-bold shadow-2xl ring-4 ring-campaign-gold transition-all"
      >
        Skip to content
      </a>
      {/* Global Navigation */}
      <Navbar />
      <main id="main-content" role="main" className="outline-none">
        <HeroSection />
        <BioSection />
        <PlatformSection />
        <InvolveSection />
        <Endorsements />
        <ResourcesSection />
      </main>
      {/* Global Footer & Legal */}
      <Footer />
      {/* User Feedback Notifications */}
      <Toaster 
        richColors 
        closeButton 
        position="bottom-center"
        toastOptions={{
          style: {
            borderRadius: '12px',
            border: '1px solid #D4C4A8',
          }
        }}
      />
    </div>
  );
}