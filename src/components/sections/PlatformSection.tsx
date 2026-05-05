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
  History as HistoryIcon
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
    icon: <HistoryIcon className="w-6 h-6" />,
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-6xl font-display font-black text-campaign-black uppercase tracking-tight">The 2026 Platform</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto mt-6">
              A Member-First blueprint to return power to the floor.
            </p>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {brandPillars.map((bp, i) => (
            <motion.div
              key={bp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border-t-4 border-campaign-gold shadow-xl shadow-campaign-gold/5 flex flex-col h-full"
            >
              <h3 className="text-2xl font-black text-campaign-black mb-4 uppercase tracking-tighter">{bp.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed flex-grow">{bp.desc}</p>
              <div className="pt-6 border-t border-gray-100 mt-auto">
                <p className="text-campaign-gold font-black italic">"{bp.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mb-24 relative">
          <div className="absolute inset-0 bg-campaign-black rounded-3xl -rotate-1 scale-[1.01]" />
          <div className="relative bg-campaign-gold p-10 md:p-20 rounded-3xl text-white text-center shadow-2xl overflow-hidden">
            <Quote className="absolute -top-12 -left-12 text-white/10 w-64 h-64 select-none pointer-events-none" />
            <h3 className="text-2xl md:text-4xl font-black leading-tight max-w-4xl mx-auto relative z-10 italic">
              "We aren't just fighting for a contract; we are fighting for the very soul of the labor movement."
            </h3>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {pillars.map((p, idx) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: (idx % 2) * 0.1, duration: 0.5 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <Card className="h-full border-none shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden bg-white">
                <CardHeader className="bg-campaign-black text-white p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-campaign-gold/30 font-black text-5xl group-hover:text-campaign-gold/100 transition-colors duration-500">{p.id}</span>
                    <div className="bg-campaign-gold/20 p-4 rounded-2xl text-campaign-gold group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                      {p.icon}
                    </div>
                  </div>
                  <CardTitle className="text-2xl md:text-3xl font-black uppercase tracking-tight leading-none">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="space-y-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-campaign-gold">The Challenge</p>
                    <p className="text-muted-foreground italic text-lg leading-relaxed">"{p.problem}"</p>
                  </div>
                  <div className="space-y-5">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-campaign-black">Strategic Commitments</p>
                    <ul className="space-y-4">
                      {p.commitments.map((c, i) => (
                        <li key={i} className="flex gap-4 text-sm md:text-base leading-relaxed text-gray-700 items-start">
                          <div className="mt-1 bg-campaign-gold/10 p-1 rounded-full text-campaign-gold">
                            <ChevronRight size={14} />
                          </div>
                          {c}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-8 border-t border-gray-100">
                    <p className="text-center font-black text-campaign-black text-lg tracking-tight uppercase italic">{p.memberMessage}</p>
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