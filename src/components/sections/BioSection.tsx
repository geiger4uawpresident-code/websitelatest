import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, Quote } from 'lucide-react';
export function BioSection() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-campaign-gold/10 rounded-full blur-3xl" />
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-campaign-gold/10 border-8 border-white bg-gray-100"
            >
              <img
                src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80"
                alt="Tricia Geiger, UAW Presidential Candidate"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-[4/5]"
                loading="lazy"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 bg-campaign-gold text-white p-8 rounded-xl shadow-xl hidden md:block z-20">
              <p className="text-2xl font-black italic">"Member Power First."</p>
            </div>
          </div>
          <div className="lg:w-1/2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <h2 className="text-3xl md:text-5xl font-display font-black text-campaign-black uppercase">The Journey of Service</h2>
              <div className="h-1.5 w-24 bg-campaign-gold" />
            </motion.div>
            <div className="prose prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
              <p>
                Tricia Geiger is a veteran UAW member and organizer who has spent the last 20 years fighting for the dignity of labor. Her roots in the union aren't just professional—they're personal. Tricia's grandfather was a migrant farmworker who found stability and a middle-class life as a member of <strong>GM Fisher Body Local 598</strong>. That legacy of transformation through collective action drives her every day.
              </p>
              <p>
                For over a decade, Tricia served as an <strong>International Servicing Representative for Region 2B</strong>. She has stood on the front lines of multi-sector fights, managing complex grievances, negotiating high-stakes contracts, and organizing strategic strikes that delivered real wins for <strong>members</strong>.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              <div className="flex gap-4 p-4 rounded-xl bg-campaign-tan/5 border border-campaign-tan/10 hover:bg-campaign-tan/10 transition-colors duration-300">
                <div className="text-campaign-gold"><Award size={28} /></div>
                <div>
                  <h4 className="font-bold text-campaign-black">20 Years of Service</h4>
                  <p className="text-sm text-muted-foreground">Dedicated UAW member with shop floor experience.</p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-campaign-tan/5 border border-campaign-tan/10 hover:bg-campaign-tan/10 transition-colors duration-300">
                <div className="text-campaign-gold"><GraduationCap size={28} /></div>
                <div>
                  <h4 className="font-bold text-campaign-black">Highly Qualified</h4>
                  <p className="text-sm text-muted-foreground">Cornell Union Leadership degree & Strategic Research Cert.</p>
                </div>
              </div>
            </div>
            <div className="relative p-8 bg-campaign-black rounded-2xl text-white shadow-xl">
              <Quote className="absolute top-4 right-4 text-campaign-gold/20" size={48} />
              <p className="text-xl italic font-medium relative z-10">
                "Preparation wins fights. When we are organized, transparent, and democratic, there is no limit to what we can achieve. Let’s write solidarity’s next chapter, together."
              </p>
              <p className="mt-4 text-campaign-gold font-bold uppercase tracking-widest text-sm">— Tricia Geiger</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}