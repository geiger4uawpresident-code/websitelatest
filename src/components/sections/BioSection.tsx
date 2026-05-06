import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Quote } from 'lucide-react';
export function BioSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 relative w-full">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-campaign-gold/10 rounded-full blur-3xl" />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white bg-gray-100 aspect-[4/5]"
            >
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80"
                alt="Tricia Geiger, UAW Presidential Candidate"
                className="w-full h-full transition-all duration-700 object-cover object-[center_20%]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-campaign-black/40 via-transparent to-transparent pointer-events-none" />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 bg-campaign-gold text-white p-6 md:p-8 rounded-xl shadow-xl hidden md:block z-20 max-w-xs shadow-campaign-gold/20">
              <p className="text-lg md:text-xl font-black italic leading-tight">
                "Let's write solidarity's next chapter together"
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8 mt-12 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-5xl font-display font-black text-campaign-black uppercase">The Journey of Service</h2>
              <div className="h-1.5 w-24 bg-gradient-to-r from-campaign-gold to-campaign-tan" />
            </motion.div>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                Tricia Geiger is a veteran UAW member and organizer who has spent the last 20 years fighting for the dignity of labor. Tricia got her start at <strong>GM Local 651 in Flint, Michigan</strong>, where she first learned the power of the union and became passionate about the labor movement. Her roots in the union aren't just professional—they're part of a multi-generational legacy. Her grandfather was a migrant farmworker who found stability and a middle-class life as a member of <strong>GM Fisher Body Local 598</strong>.
              </p>
              <p>
                For nearly a decade, Tricia served as an <strong>International Servicing Representative for Region 2B</strong>. She has stood on the front lines of multi-sector fights, managing complex grievances, negotiating high-stakes contracts, and organizing strategic strikes that delivered real wins for <strong>members</strong>.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4 p-4 rounded-xl bg-campaign-tan/5 border border-campaign-tan/10 hover:bg-campaign-tan/10 hover:border-campaign-gold/30 transition-all duration-300 group cursor-default">
                <div className="text-campaign-gold shrink-0 group-hover:scale-110 transition-all"><Award size={28} /></div>
                <div>
                  <h4 className="font-bold text-campaign-black">20 Years of Service</h4>
                  <p className="text-sm text-muted-foreground">Dedicated UAW member with proven, member-first shop floor experience.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-campaign-tan/5 border border-campaign-tan/10 hover:bg-campaign-tan/10 hover:border-campaign-gold/30 transition-all duration-300 group cursor-default">
                <div className="text-campaign-gold shrink-0 group-hover:scale-110 transition-all"><GraduationCap size={28} /></div>
                <div>
                  <h4 className="font-bold text-campaign-black">Academic Excellence</h4>
                  <p className="text-sm text-muted-foreground leading-snug">Union Leadership & Administration (National Labor College) & Strategic Corporate Research (Cornell).</p>
                </div>
              </div>
            </div>
            <blockquote className="relative p-8 bg-campaign-black rounded-2xl text-white shadow-2xl">
              <Quote className="absolute top-4 right-4 text-campaign-gold/20" size={48} aria-hidden="true" />
              <p className="text-xl italic font-medium relative z-10 leading-relaxed">
                "We are one Union. One movement with many groups of members. Prepared. Democratic. Accountable. That's the promise. That's the standard. That's the union we are going to build for all."
              </p>
              <footer className="mt-6 relative z-10">
                <cite className="text-campaign-gold font-bold uppercase tracking-widest text-sm not-italic">
                  — Tricia Geiger, UAW President Candidate
                </cite>
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}