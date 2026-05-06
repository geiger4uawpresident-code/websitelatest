import React from 'react';
import { Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
export function Endorsements() {
  const testimonials = [
    {
      quote: "Tricia is the leader that the UAW has needed for a very long time. Her focus on education and empowerment for members is second to none. She understands that a union's strength comes from its educated and active membership.",
      author: "Tresa Clark",
      position: "Local 888"
    },
    {
      quote: "Strategic, empathetic, and fearless. Tricia isn't afraid to take on the tough fights for our benefits and our futures. She has been on the front lines and knows what it takes to win.",
      author: "Lonnie Scott",
      position: "Local 1588"
    },
    {
      quote: "We need a leader who actually listens to the floor and understands our daily struggles. Tricia's roots are in Flint, and she has never forgotten where she came from. She is one of us.",
      author: "Chuck Snyder",
      position: "Local 1588"
    }
  ];
  return (
    <section id="endorsements" className="py-24 bg-campaign-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
          <Quote size={200} />
        </div>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase tracking-tight">Voices from the Floor</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <Card key={idx} className="bg-white/5 border-white/10 text-white backdrop-blur-sm hover:scale-[1.02] transition-transform duration-300">
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