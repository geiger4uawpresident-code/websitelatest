import React from 'react';
import { motion } from 'framer-motion';
import { VideoPlayer } from '@/components/ui/VideoPlayer';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-campaign-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888941255-2574b1752175?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-campaign-black/90 via-campaign-black/60 to-campaign-black" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <span className="inline-block px-6 py-2 rounded-full bg-campaign-gold text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-campaign-gold/20">
            Prepared. Democratic. Accountable.
          </span>
          <h1 className="text-4xl md:text-7xl font-display font-black text-white leading-tight uppercase tracking-tight">
            Tricia Geiger <br />
            <span className="text-campaign-gold italic">for UAW President</span>
          </h1>
          <p className="text-xl md:text-2xl text-campaign-tan max-w-2xl mx-auto font-medium drop-shadow-sm">
            Building a stronger, more transparent, and united future for our members.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <VideoPlayer
            url="https://www.youtube.com/embed/zh5ejvM71qU"
            title="Tricia Geiger Campaign Launch Speech"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-campaign-gold hover:bg-campaign-gold/90 text-white font-bold h-12 px-8 transition-all active:scale-95 shadow-xl shadow-campaign-gold/20">
              <a href="#involve">Join the Movement</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-campaign-tan text-campaign-tan hover:bg-campaign-tan/10 h-12 px-8 transition-all active:scale-95">
              <a href="#platform">Read the Platform</a>
            </Button>
          </div>
          <a 
            href="#about" 
            className="text-campaign-tan/60 hover:text-campaign-gold transition-all mt-8 animate-bounce hover:scale-110 active:scale-90"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}