import React from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
export function Endorsements() {
  const testimonials = [
    {
      quote: "Tricia has been a tireless advocate for her fellow workers for over a decade. She's the leader the UAW needs right now.",
      author: "Local Member A",
      position: "Production Specialist"
    },
    {
      quote: "Her commitment to transparency is exactly what we've been missing. We need someone who listens to the floor.",
      author: "Local Member B",
      position: "Steward"
    },
    {
      quote: "Strategic, empathetic, and fearless. Tricia isn't afraid to take on the tough fights for our benefits.",
      author: "Local Member C",
      position: "Journeyman"
    }
  ];
  return (
    <section id="endorsements" className="py-24 bg-campaign-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Quote size={200} />
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase">Voices from the Floor</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="bg-white/5 border-white/10 text-white backdrop-blur-sm">
              <CardContent className="pt-8 flex flex-col justify-between h-full">
                <div>
                  <Quote className="text-campaign-gold mb-4" size={32} />
                  <p className="text-lg italic mb-6 leading-relaxed">"{t.quote}"</p>
                </div>
                <div className="border-t border-white/10 pt-4">
                  <p className="font-bold text-campaign-gold">{t.author}</p>
                  <p className="text-sm text-white/60 uppercase tracking-wider">{t.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}