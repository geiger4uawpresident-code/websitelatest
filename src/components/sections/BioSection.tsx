import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Quote } from 'lucide-react';
export function BioSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center text-center space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-display font-black text-campaign-black uppercase">The Journey of Service</h2>
            <div className="h-1.5 w-24 bg-gradient-to-r from-campaign-gold to-campaign-tan" />
          </motion.div>
          {/* Narrative Section */}
          <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6 text-center md:text-left">
            <p className="text-lg md:text-xl">
              Tricia Geiger is a veteran UAW member and organizer who has spent the last 20 years fighting for the dignity of labor. Tricia got her start at <strong>GM Local 651 in Flint, Michigan</strong>. Her roots in the union aren't just professional—they're part of a multi-generational legacy. Her grandfather was a migrant farmworker who found stability and a middle-class life as a member of <strong>GM Fisher Body Local 598</strong>.
            </p>
            <p className="text-lg md:text-xl">
              For nearly a decade, Tricia served as an <strong>International Servicing Representative for Region 2B</strong>. She has stood on the front lines of multi-sector fights, managing complex grievances, negotiating high-stakes contracts, and organizing strategic strikes that delivered real wins for <strong>members</strong>.
            </p>
          </div>
          {/* Impact Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 p-6 rounded-xl bg-campaign-tan/5 border border-campaign-tan/10 hover:bg-white hover:border-campaign-gold/30 hover:shadow-lg hover:shadow-campaign-gold/5 transition-all duration-300 group cursor-default">
              <div className="text-campaign-gold shrink-0 group-hover:scale-110 transition-all">
                <Award size={32} />
              </div>
              <div>
                <h4 className="font-bold text-campaign-black text-lg">20 Years of Service</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Proven, member-first shop floor experience across multiple UAW sectors.</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 p-6 rounded-xl bg-campaign-tan/5 border border-campaign-tan/10 hover:bg-white hover:border-campaign-gold/30 hover:shadow-lg hover:shadow-campaign-gold/5 transition-all duration-300 group cursor-default">
              <div className="text-campaign-gold shrink-0 group-hover:scale-110 transition-all">
                <GraduationCap size={32} />
              </div>
              <div>
                <h4 className="font-bold text-campaign-black text-lg">Academic Excellence</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">Union Leadership (NLC) & Strategic Corporate Research (Cornell University).</p>
              </div>
            </div>
          </div>
          {/* Centered Blockquote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative p-10 bg-campaign-black rounded-3xl text-white shadow-2xl border-l-8 border-campaign-gold overflow-hidden"
          >
            <Quote className="absolute top-4 right-4 text-campaign-gold/10" size={64} aria-hidden="true" />
            <div className="relative z-10 text-center space-y-6">
              <p className="text-xl md:text-2xl italic font-medium leading-relaxed max-w-2xl mx-auto">
                "We are one Union. One movement with many groups of members. Prepared. Democratic. Accountable. That's the promise. That's the standard. That's the union we are going to build for all."
              </p>
              <footer className="pt-4 border-t border-white/10 max-w-xs mx-auto">
                <cite className="text-campaign-gold font-bold uppercase tracking-widest text-sm not-italic">
                  — Tricia Geiger
                </cite>
              </footer>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}