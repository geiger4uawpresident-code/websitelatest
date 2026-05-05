import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield, 
  Users, 
  Handshake,
  Heart, 
  PieChart, 
  Landmark, 
  Network,
  ChevronRight, 
  Quote,
  History
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
const pillars = [
  {
    id: "01",
    title: "Clean Governance",
    icon: <Shield className="w-6 h-6" />,
    problem: "Trust has been eroded by top-down decision making and lack of transparency.",
    commitments: [
      "Implement real-time digital auditing of international expenditures.",
      "Mandatory town halls before major executive board votes.",
      "Strengthen Ethics Officer independence with member-led oversight."
    ],
    memberMessage: "Your dues, your union, your right to know."
  },
  {
    id: "02",
    title: "Strategic Bargaining",
    icon: <Handshake className="w-6 h-6" />,
    problem: "Contracts are becoming more complex while members feel less informed.",
    commitments: [
      "Open bargaining protocols: Keep members updated throughout the process.",
      "Invest in world-class economic research teams to out-negotiate corporations.",
      "End the era of tiered systems once and for all across all sectors."
    ],
    memberMessage: "We don't just ask for more; we prepare to take it."
  },
  {
    id: "03",
    title: "Staff Development",
    icon: <Users className="w-6 h-6" />,
    problem: "Our representatives need modern tools and training to fight modern corporate tactics.",
    commitments: [
      "Establish a UAW Leadership Institute for servicing reps and stewards.",
      "Standardize grievance handling with digital tracking for faster resolution.",
      "Diversify staff to reflect the full breadth of our multi-sector membership."
    ],
    memberMessage: "A professional staff for a professional fight."
  },
  {
    id: "04",
    title: "Political Action (CAP)",
    icon: <Landmark className="w-6 h-6" />,
    problem: "Labor's voice is often treated as secondary in the halls of power.",
    commitments: [
      "Tie endorsements strictly to labor-first voting records.",
      "Direct member participation in setting legislative priorities.",
      "Massive investment in state-level worker protection laws."
    ],
    memberMessage: "Politicians should work for us, not the other way around."
  },
  {
    id: "05",
    title: "Healthcare Security",
    icon: <Heart className="w-6 h-6" />,
    problem: "Rising costs are eating away at every hard-won wage increase.",
    commitments: [
      "Launch a national UAW Healthcare Taskforce to fight for cost-caps.",
      "Protect retiree healthcare benefits against inflation and corporate shell games.",
      "Expand mental health and wellness support in every contract."
    ],
    memberMessage: "Healthcare is a right, not a bargaining chip."
  },
  {
    id: "06",
    title: "Campaign Finance",
    icon: <PieChart className="w-6 h-6" />,
    problem: "The financial power of our union must be deployed more effectively.",
    commitments: [
      "Create a robust Strike Fund that ensures no member is starved back to work.",
      "Transparent reporting on investment returns and fund allocations.",
      "Shift resources from administrative overhead to direct organizing."
    ],
    memberMessage: "Building a war chest that makes CEOs tremble."
  },
  {
    id: "07",
    title: "Retiree Dignity",
    icon: <History className="w-6 h-6" />,
    problem: "The giants whose shoulders we stand on are being left behind.",
    commitments: [
      "Automatic COLA for retiree pensions in all future negotiations.",
      "Dedicated retiree representation on the International Executive Board.",
      "Strengthen the connection between current members and retiree locals."
    ],
    memberMessage: "Solidarity doesn't end at retirement."
  },
  {
    id: "08",
    title: "Aggressive Organizing",
    icon: <Network className="w-6 h-6" />,
    problem: "Union density is falling, weakening our collective bargaining power.",
    commitments: [
      "Deploy 'Tiger Teams' for rapid response in non-union sector drives.",
      "Leverage digital organizing tools to reach workers where they are.",
      "Focus on new industries including EV battery plants and tech-manufacturing."
    ],
    memberMessage: "Grow the union, grow the power."
  }
];
const brandPillars = [
  {
    title: "Prepared",
    desc: "Wins aren't accidental. We use data, research, and strategy to out-think the boss.",
    quote: "Preparation is the foundation of power."
  },
  {
    title: "Democratic",
    desc: "Every member is an owner. We restore the 'U' in Union through direct participation.",
    quote: "The floor is the highest authority."
  },
  {
    title: "Accountable",
    desc: "Transparency is our default setting. We answer to the membership, always.",
    quote: "Sunlight is the best disinfectant."
  }
];
export function PlatformSection() {
  return (
    <section id="platform" className="py-24 bg-campaign-tan/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-3xl md:text-6xl font-display font-black text-campaign-black uppercase tracking-tight">The 2026 Platform</h2>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto">
            A comprehensive blueprint to revitalize the UAW and return power to the hands that do the work.
          </p>
        </div>
        {/* Brand Pillars */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {brandPillars.map((bp, i) => (
            <motion.div
              key={bp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl border-t-4 border-campaign-gold shadow-xl shadow-campaign-gold/5"
            >
              <h3 className="text-2xl font-black text-campaign-black mb-4 uppercase">{bp.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{bp.desc}</p>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-campaign-gold font-bold italic">"{bp.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Unifying Statement */}
        <div className="mb-24 relative">
          <div className="absolute inset-0 bg-campaign-black rounded-3xl -rotate-1 scale-[1.02]" />
          <div className="relative bg-campaign-gold p-12 md:p-20 rounded-3xl text-white text-center overflow-hidden">
            <Quote className="absolute -top-10 -left-10 text-white/10 w-64 h-64" />
            <h3 className="text-2xl md:text-4xl font-black leading-tight max-w-4xl mx-auto relative z-10">
              "We aren't just fighting for a contract; we are fighting for the very soul of the labor movement. Our unity is our greatest weapon, and our preparation is our greatest shield."
            </h3>
          </div>
        </div>
        {/* Policy Pillars */}
        <div className="grid lg:grid-cols-2 gap-6">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <Card className="h-full border-none shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden">
                <CardHeader className="bg-campaign-black text-white p-6">
                  <div className="flex items-center justify-between">
                    <span className="text-campaign-gold font-black text-4xl opacity-50 group-hover:opacity-100 transition-opacity">{p.id}</span>
                    <div className="bg-campaign-gold/20 p-3 rounded-xl text-campaign-gold group-hover:scale-110 transition-transform">{p.icon}</div>
                  </div>
                  <CardTitle className="text-2xl font-black uppercase mt-4">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                  <div className="space-y-2">
                    <p className="text-xs font-bold uppercase tracking-widest text-campaign-gold">The Problem</p>
                    <p className="text-muted-foreground italic">"{p.problem}"</p>
                  </div>
                  <div className="space-y-4">
                    <p className="text-xs font-bold uppercase tracking-widest text-campaign-black">Our Commitment</p>
                    <ul className="space-y-3">
                      {p.commitments.map((c, i) => (
                        <li key={i} className="flex gap-3 text-sm leading-relaxed text-gray-700">
                          <ChevronRight className="w-4 h-4 text-campaign-gold shrink-0 mt-0.5" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-6 border-t border-gray-100">
                    <p className="text-center font-black text-campaign-black tracking-tight">{p.memberMessage}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}