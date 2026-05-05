import React from 'react';
import { Shield, TrendingUp, Users, Eye } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
export function PlatformPreview() {
  const pillars = [
    {
      title: "Stronger Bargaining",
      desc: "Leveraging our collective power to win contracts that reflect the true value of our labor.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Radical Transparency",
      desc: "Opening the books and ensuring every member knows where their dues are going.",
      icon: <Eye className="w-6 h-6" />
    },
    {
      title: "Internal Democracy",
      desc: "Returning power to the rank-and-file. Your voice is the foundation of our strength.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Modern Organizing",
      desc: "Adapting our strategies for the 21st century to protect our future across all industries.",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];
  return (
    <section id="platform" className="py-24 bg-campaign-tan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-display font-black text-campaign-black uppercase">The Platform</h2>
            <p className="text-muted-foreground text-lg italic">Coming soon: A comprehensive roadmap for our union's transformation.</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <Card key={idx} className="border-none shadow-soft hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-campaign-gold/10 text-campaign-gold w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {pillar.icon}
                </div>
                <CardTitle className="text-xl font-bold">{pillar.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {pillar.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}