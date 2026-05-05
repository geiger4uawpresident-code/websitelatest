import React from 'react';
import { Navbar } from '@/components/layout/Navbar';
import { HeroSection } from '@/components/sections/HeroSection';
import { InvolveSection } from '@/components/sections/InvolveSection';
import { PlatformPreview } from '@/components/sections/PlatformPreview';
import { Endorsements } from '@/components/sections/Endorsements';
import { ResourcesSection } from '@/components/sections/ResourcesSection';
import { Footer } from '@/components/layout/Footer';
import { Toaster } from '@/components/ui/sonner';
import { Award, History } from 'lucide-react';
function BioSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-campaign-gold/10 rounded-full blur-3xl" />
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-gray-100">
              <img
                src="https://images.unsplash.com/photo-1580674239581-3fbc1917ebb0?auto=format&fit=crop&q=80"
                alt="Tricia Geiger on the Picket Line"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5]"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-campaign-gold text-white p-8 rounded-xl shadow-xl hidden md:block">
              <p className="text-3xl font-black italic">"Member Power First."</p>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-display font-black text-campaign-black uppercase">Meet Tricia Geiger</h2>
              <div className="h-1.5 w-24 bg-campaign-gold" />
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tricia Geiger is a veteran union activist with over 15 years of dedicated service in the UAW. Starting on the shop floor, she has witnessed firsthand the challenges and triumphs of our labor movement.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4">
                <div className="bg-campaign-tan/20 p-3 rounded-lg h-fit text-campaign-gold"><Award /></div>
                <div>
                  <h4 className="font-bold text-campaign-black">Proven Leadership</h4>
                  <p className="text-sm text-muted-foreground">Successfully negotiated multiple regional contracts.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-campaign-tan/20 p-3 rounded-lg h-fit text-campaign-gold"><History /></div>
                <div>
                  <h4 className="font-bold text-campaign-black">Rank-and-File Roots</h4>
                  <p className="text-sm text-muted-foreground">Fifteen years experience directly on the production line.</p>
                </div>
              </div>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Her campaign is built on the belief that a union is only as strong as its most informed member. Tricia's vision is to bring modern accountability, digital-first transparency, and unyielding solidarity to the highest level of our organization.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <BioSection />
        <PlatformPreview />
        <InvolveSection />
        <Endorsements />
        <ResourcesSection />
      </main>
      <Footer />
      <Toaster richColors closeButton />
    </div>
  );
}