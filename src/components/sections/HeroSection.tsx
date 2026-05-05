import React from 'react';
import { motion, Variants } from 'framer-motion';
import { VideoPlayer } from '@/components/ui/VideoPlayer';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
export function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut" as const 
      }
    }
  };
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 overflow-hidden bg-campaign-black">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888941255-2574b1752175?auto=format&fit=crop&q=80')] opacity-20 bg-cover bg-center" />
      <div className="absolute inset-0 bg-gradient-to-b from-campaign-black/90 via-campaign-black/60 to-campaign-black" />
      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="space-y-4">
          <span className="inline-block px-6 py-2 rounded-full bg-campaign-gold text-white text-xs font-bold uppercase tracking-[0.2em] shadow-lg shadow-campaign-gold/20">
            Prepared. Democratic. Accountable.
          </span>
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-black text-white leading-tight uppercase tracking-tight">
            Tricia Geiger <br />
            <span className="text-campaign-gold italic">for UAW President</span>
          </h1>
          <p className="text-lg md:text-2xl text-campaign-tan max-w-3xl mx-auto font-medium drop-shadow-sm leading-relaxed px-4">
            One Union. One Movement. Building a transparent and accountable future for every member.
          </p>
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="max-w-4xl mx-auto w-full px-2"
        >
          <VideoPlayer
            url="https://www.youtube.com/embed/zh5ejvM71qU"
            title="Tricia Geiger Campaign Launch Speech"
            className="shadow-campaign-gold/5"
          />
        </motion.div>
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center gap-4"
        >
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Button asChild size="lg" className="bg-campaign-gold hover:bg-campaign-gold/90 text-white font-bold h-12 px-8 transition-all active:scale-95 shadow-xl shadow-campaign-gold/20">
              <a href="#involve">Join the Movement</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-campaign-tan text-campaign-tan hover:bg-campaign-tan/10 h-12 px-8 transition-all active:scale-95">
              <a href="#platform">Read the Platform</a>
            </Button>
          </div>
          <a
            href="#about"
            className="text-campaign-tan/40 hover:text-campaign-gold transition-all mt-8 animate-bounce hover:scale-110 active:scale-90 hidden sm:block"
            aria-label="Scroll to about section"
          >
            <ChevronDown size={32} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}