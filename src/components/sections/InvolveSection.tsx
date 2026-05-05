import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, Megaphone, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
export function InvolveSection() {
  const cards = useMemo(() => [
    {
      title: "Campaign Updates",
      description: "Stay informed about Tricia's mission, legislative wins, and upcoming events in your region.",
      icon: Mail,
      link: "https://tricia-geiger-for-u-a-w-president2026.sender.site/",
      cta: "Sign Up for Updates"
    },
    {
      title: "Campaign Amplifier",
      description: "Ready to lead? Join our network of amplifiers to spread the word and organize in your local.",
      icon: Megaphone,
      link: "https://tricia-geiger-for-u-a-w-president2026-badger.sender.site/",
      cta: "Become an Amplifier"
    }
  ], []);
  return (
    <section id="involve" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-black text-campaign-black uppercase">Get Involved</h2>
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            This movement belongs to the members. Join Tricia in building a <span className="text-campaign-black font-bold">Prepared, Democratic, and Accountable</span> UAW. Choose how you want to participate in rebuilding our union and ensuring every voice is heard.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Card className="h-full border-2 border-campaign-tan/20 hover:border-campaign-gold/40 transition-all shadow-lg overflow-hidden group">
                  <CardHeader className="pb-4">
                    <div className="mb-4 bg-campaign-tan/10 group-hover:bg-campaign-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-all">
                      <Icon className="w-8 h-8 text-campaign-gold group-hover:text-campaign-black transition-colors" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-campaign-black">{card.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{card.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild className="w-full bg-campaign-black hover:bg-campaign-gold text-white font-bold h-12 group transition-all shadow-md hover:shadow-campaign-gold/10">
                      <a href={card.link} target="_blank" rel="noopener noreferrer">
                        {card.cta} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}