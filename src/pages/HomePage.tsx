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
export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* Hero Hook */}
        <HeroSection />
        {/* Candidate Bio & History */}
        <BioSection />
        {/* Detailed Campaign Platform */}
        <PlatformSection />
        {/* Action Funnels */}
        <InvolveSection />
        {/* Social Proof */}
        <Endorsements />
        {/* Materials & Downloads */}
        <ResourcesSection />
      </main>
      <Footer />
      <Toaster richColors closeButton />
    </div>
  );
}