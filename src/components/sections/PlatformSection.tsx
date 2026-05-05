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
  History as HistoryIcon,
  LucideIcon
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
interface Pillar {
  id: string;
  title: string;
  icon: LucideIcon;
  problem: string;
  commitments: string[];
  memberMessage: string;
}
const pillars: Pillar[] = [
  {
    id: "01",
    title: "Clean Governance",
    icon: Shield,
    problem: "The Promise Was Reform. For decades, a 'club culture' at the top of the UAW allowed bureaucracy and opaque financial reporting to erode the fundamental trust between leadership and the shop floor. Members were treated as spectators rather than owners. To build a powerful union, we must first get our own house under control.",
    commitments: [
      "Implement real-time forensic auditing of all international and regional expenditures accessible via a secure member portal.",
      "Establish an independent Member Oversight Committee with the constitutional power to subpoena financial records.",
      "Mandatory 'Constitutional Town Halls' held 30 days prior to any major Executive Board vote on policy changes.",
      "Strict 'No-Gift' policy for all elected officials with immediate removal for violations."
    ],
    memberMessage: "Members voted for reform because they wanted their union back. We will deliver that transparency on day one."
  },
  {
    id: "02",
    title: "Strategic Bargaining",
    icon: Handshake,
    problem: "The 'Crisis of Tiers' was born from a lack of strategic preparation and transparency. For too long, corporations used complex contracts to hide concessions, while members were the last to know the details of the deals that define their lives. We need a bargaining strategy that uses our full economic power.",
    commitments: [
      "Adopt 'Open Bargaining' protocols: Daily digital updates to the membership throughout the negotiation process.",
      "Establish a Pre-Strike 'Economic War Room' staffed by world-class labor economists to counter corporate misinformation.",
      "A binding commitment to eliminate ALL tiered wage and benefit systems in the first year of any new contract.",
      "Full contract language must be released to the membership 7 days before any ratification vote."
    ],
    memberMessage: "We don't just ask for a fair share; we prepare to take what we've earned through strength and strategy."
  },
  {
    id: "03",
    title: "Staff Development",
    icon: Users,
    problem: "Our representatives are often outmatched not by talent, but by the modern digital tools and legal resources deployed by multi-national corporations. A lack of standardized training for stewards and servicing reps leads to inconsistent enforcement of our hard-won rights across different locals.",
    commitments: [
      "Launch the 'UAW Leadership Institute'—a mandatory certification program for all servicing reps and local stewards.",
      "Implement a Universal Digital Grievance Tracking System allowing members to see the status of their case in real-time.",
      "Expand specialized legal and safety support staff to provide 24/7 assistance for complex industrial hazards.",
      "Recruitment initiatives focused on reflecting the full multi-sector breadth of our modern membership."
    ],
    memberMessage: "A professional, highly-trained staff is our first line of defense against corporate greed and contract violations."
  },
  {
    id: "04",
    title: "Political Action (CAP)",
    icon: Landmark,
    problem: "Labor's voice has been treated as a 'transactional' asset by politicians who take our V-CAP money and then fail to deliver on worker protections. We have been too quick to endorse and too slow to hold elected officials accountable to our specific legislative agenda and the needs of our families.",
    commitments: [
      "Tie all V-CAP endorsements strictly to a 'Labor-First' scorecard focused on anti-tier and anti-scab legislation.",
      "Grant local councils Veto Power over regional endorsements that conflict with local member priorities.",
      "Aggressive lobbying for the 'Worker Freedom Act' to end forced captive audience meetings nationwide.",
      "Direct member-led development of the biennial UAW National Legislative Agenda."
    ],
    memberMessage: "Politicians work for us, or they don't get our support. We are ending the era of blank-check politics."
  },
  {
    id: "05",
    title: "Healthcare Security",
    icon: Heart,
    problem: "Healthcare is a fundamental human right, yet it is being used by corporations as a tool of coercion during negotiations. Rising premiums and shrinking networks are effectively rolling back the wage increases we fight so hard to win, leaving families vulnerable when they are most in need.",
    commitments: [
      "Create a National UAW Healthcare Trust Defense Fund to aggressively fight off network reductions and cost-shifts.",
      "Contractual guarantees for Healthcare Cost-Caps: No member's take-home pay should ever decrease due to premium hikes.",
      "Mandatory mental health and substance abuse support parity in every multi-sector agreement.",
      "Establish a Retiree Healthcare Advocacy Board to protect VEBA and traditional plans from inflation."
    ],
    memberMessage: "Your health is not a bargaining chip. We will protect your care as fiercely as we protect your paycheck."
  },
  {
    id: "06",
    title: "Campaign Finance",
    icon: PieChart,
    problem: "The 'Dues Dollar' is too often lost in administrative overhead and non-essential spending. We need to shift our financial power from the mahogany offices of the International to the picket lines and organizing drives where it actually builds power for the members on the ground.",
    commitments: [
      "Restructure the Strike Fund to ensure benefit payments match 100% of a member's base take-home pay.",
      "Commitment to a 30% reduction in non-essential administrative overhead at Solidarity House within 24 months.",
      "Redirection of saved funds directly to 'Ground-War' organizing and local servicing budgets.",
      "Quarterly 'Dues Transparency Reports' mailed to every member's home."
    ],
    memberMessage: "Building a war chest that makes CEOs tremble requires a lean, focused, and transparent treasury."
  },
  {
    id: "07",
    title: "Retiree Dignity",
    icon: HistoryIcon,
    problem: "The giants whose shoulders we stand on are being left behind in a changing economy. Solidarity is a lifelong bond, yet our retirees often feel disconnected from the active leadership and vulnerable to pension erosion. We must honor the promises made to those who built this union.",
    commitments: [
      "Negotiate Automatic COLA (Cost of Living Adjustments) for all retiree pensions in every future contract.",
      "Create a permanent, voting seat on the International Executive Board for a Retiree Council Representative.",
      "Launch a National Retiree Mentorship program to connect veteran experience with new-hire organizing.",
      "Protect and expand surviving spouse benefits to ensure no UAW family is left in poverty."
    ],
    memberMessage: "Solidarity doesn't end at retirement. We will honor and protect those who built the foundation of our strength."
  },
  {
    id: "08",
    title: "Aggressive Organizing",
    icon: Network,
    problem: "Falling union density is the single greatest threat to our collective bargaining power. If we don't organize the new industries—especially the EV and battery sectors—we will lose the leverage required to protect existing standards and the future of our trades.",
    commitments: [
      "Authorize a $100 Million Strategic Organizing Fund specifically targeted at the non-union South and EV sector.",
      "Deploy 'Tiger Teams'—elite, rapid-response organizing units of rank-and-file members—for new plant drives.",
      "Implement a 'Sector-Wide Solidarity' model to organize the entire supply chain, not just the assembly lines.",
      "Leverage digital-first organizing tools to reach workers in tech-manufacturing and new industrial hubs."
    ],
    memberMessage: "To protect our standards, we must grow our movement. We will organize the unorganized and lead the transition."
  }
];
const brandPillars = [
  {
    title: "Prepared",
    desc: "Preparation is the foundation of power. It is how you earn respect in rooms that weren't built for you. Every commitment in this platform—trained bargainers, developed leaders, and data-driven organizing—flows from the belief that the people counting on you deserve someone who did the work before they showed up.",
    quote: "Preparation is the foundation of power"
  },
  {
    title: "Democratic",
    desc: "Member democracy is our governing principle. Bargaining agendas set by members, not presidents. Strike authorizations that require member votes, not press releases. This union belongs to its members. Every decision this leadership makes will reflect the will of the floor.",
    quote: "Your power. Your choice. Your union."
  },
  {
    title: "Accountable",
    desc: "Accountability starts with the person asking for your trust. It means transparency, follow-through, and the integrity to acknowledge failure and fix it. We will replace excuses with action and ensure every leader answers for their decisions to the membership.",
    quote: "No excuses. Not for yourself. Not for this union."
  }
];
export function PlatformSection() {
  return (
    <section id="platform" className="py-24 bg-campaign-tan/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-6xl font-display font-black text-campaign-black uppercase tracking-tight">The 2026 Platform</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto mt-6">
              A Member-First blueprint to return power to the membership.
            </p>
          </motion.div>
        </div>
        {/* Brand Pillars Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 items-stretch">
          {brandPillars.map((bp, i) => (
            <motion.div
              key={bp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border-t-4 border-campaign-gold shadow-xl shadow-campaign-gold/5 flex flex-col h-full transition-all hover:shadow-2xl hover:shadow-campaign-gold/10"
            >
              <h3 className="text-2xl font-black text-campaign-black mb-4 uppercase tracking-tighter shrink-0">{bp.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed flex-grow text-sm md:text-base">
                {bp.desc}
              </p>
              <div className="pt-6 border-t border-gray-100 mt-auto shrink-0">
                <p className="text-campaign-gold font-black italic text-lg">"{bp.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Strategic Pillars Grid */}
        <div className="grid grid-cols-1 gap-12 lg:gap-16">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Card className="border-none shadow-2xl hover:shadow-campaign-gold/10 transition-all duration-500 overflow-hidden bg-white">
                  <div className="flex flex-col lg:flex-row">
                    <div className="lg:w-1/3 bg-campaign-black text-white px-6 py-10 md:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-8">
                          <span className="text-campaign-gold/20 font-black text-6xl md:text-8xl">{p.id}</span>
                          <div className="bg-campaign-gold/20 p-4 rounded-2xl text-campaign-gold">
                            <Icon className="w-6 h-6" />
                          </div>
                        </div>
                        <CardTitle className="text-3xl md:text-4xl lg:text-5xl font-black uppercase tracking-tight leading-[1.1] mb-6">
                          {p.title}
                        </CardTitle>
                      </div>
                      <div className="pt-8 border-t border-white/10">
                        <p className="text-campaign-gold font-black uppercase tracking-widest text-sm mb-2">Member Impact</p>
                        <p className="text-lg italic leading-tight text-white/90">"{p.memberMessage}"</p>
                      </div>
                    </div>
                    <CardContent className="lg:w-2/3 px-6 py-10 md:p-12 space-y-10 flex flex-col justify-center">
                      <div className="problem-block-refined">
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-campaign-gold mb-2">The Challenge</p>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                          {p.problem}
                        </p>
                      </div>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="commitments" className="border-none">
                          <AccordionTrigger className="hover:no-underline py-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-campaign-black">View Strategic Commitments</span>
                          </AccordionTrigger>
                          <AccordionContent className="pt-4">
                            <ul className="space-y-6">
                              {p.commitments.map((c, i) => (
                                <li key={i} className="flex gap-4 text-base md:text-lg leading-relaxed text-gray-800 items-start group">
                                  <div className="mt-1.5 bg-campaign-gold/10 p-1 rounded-full text-campaign-gold group-hover:bg-campaign-gold group-hover:text-white transition-all shrink-0">
                                    <ChevronRight size={16} strokeWidth={3} />
                                  </div>
                                  <span>{c}</span>
                                </li>
                              ))}
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
        {/* Closing Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 text-center p-12 bg-campaign-black rounded-3xl text-white shadow-2xl border-b-8 border-campaign-gold"
        >
          <Quote className="mx-auto text-campaign-gold mb-6" size={48} />
          <h3 className="text-2xl md:text-4xl font-black italic mb-6 max-w-4xl mx-auto leading-tight">
            "We are not just electing a president. We are deciding if we want a union that works for the members, or a union that works for the status quo."
          </h3>
          <p className="text-campaign-gold font-black uppercase tracking-[0.3em]">Tricia Geiger, 2026</p>
        </motion.div>
      </div>
    </section>
  );
}