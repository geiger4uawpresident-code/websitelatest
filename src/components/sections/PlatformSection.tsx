import React, { useMemo } from 'react';
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
  type LucideIcon
} from 'lucide-react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
interface Pillar {
  id: string;
  title: string;
  icon: LucideIcon;
  problem: string;
  commitments: string[];
  memberMessage: string;
}
export function PlatformSection() {
  const pillars: Pillar[] = useMemo(() => [
    {
      id: "01",
      title: "Clean Governance & Institutional Reform",
      icon: Shield,
      problem: "The Promise Was Reform. For decades, a 'club culture' at the top of the UAW allowed bureaucracy and opaque financial reporting to erode the fundamental trust between leadership and the shop floor. While we are transitioning out of a period of federal oversight, the risk of backsliding into old habits remains high. Members were treated as spectators rather than owners. To build a powerful union, we must first get our own house under control and ensure the members are the ultimate monitor.",
      commitments: [
        "Implement real-time forensic auditing of all international and regional expenditures accessible via a secure member portal.",
        "Establish an independent Member Oversight Committee with the constitutional power to subpoena financial records and report directly to the membership.",
        "Mandatory 'Constitutional Town Halls' held 30 days prior to any major Executive Board vote on policy changes or administrative expenditures.",
        "Strict 'No-Gift' policy for all elected officials with immediate removal for violations and a ban on corporate-funded travel.",
        "Direct election of all international representatives to ensure they answer to the members they service, not the people who appoint them."
      ],
      memberMessage: "Members voted for reform because they wanted their union back. We will deliver that transparency on day one."
    },
    {
      id: "02",
      title: "Bargaining: Preparing for the Fights Ahead",
      icon: Handshake,
      problem: "The 'Crisis of Tiers' was born from a lack of strategic preparation and transparency. Corporations have spent years refining their ability to use complex contracts to hide concessions, while members were often the last to know the details of the deals that define their lives. We are entering a bargaining climate where automation and 'green transition' are being used as threats. We need a strategy that uses our full economic power and puts the corporation on the defensive.",
      commitments: [
        "Adopt 'Open Bargaining' protocols: Daily digital updates and summarized transcripts of negotiations provided to the membership.",
        "Establish a Pre-Strike 'Economic War Room' staffed by labor economists and industry experts to counter corporate misinformation.",
        "A binding constitutional commitment to eliminate ALL tiered wage and benefit systems in the first contract negotiated under this administration.",
        "Full contract language must be released to the membership in a searchable digital format 7 days before any ratification vote.",
        "Standardized 'Solidarity Clauses' in all sector contracts to allow for common expiration dates and coordinated industrial action.",
        "Mandatory strike-readiness training for every local 12 months prior to contract expiration."
      ],
      memberMessage: "The fights ahead require a union that is steps ahead of the boss. We will lead by leading the way."
    },
    {
      id: "03",
      title: "Staff & Local Leader Development",
      icon: Users,
      problem: "Our representatives are often outmatched not by talent, but by the modern digital tools, legal resources, and data analytics deployed by multi-national corporations. A lack of standardized, high-level training for stewards and servicing reps leads to inconsistent enforcement of our hard-won rights. We cannot win tomorrow's grievances with yesterday's training. We must build a culture where preparation is the baseline for every leader.",
      commitments: [
        "Launch the 'UAW Leadership Institute'—a mandatory, rigorous certification program for all servicing reps and local stewards.",
        "Implement a Universal Digital Grievance Tracking System allowing members to see the status, history, and notes of their case in real-time.",
        "Expand specialized legal and safety support staff to provide 24/7 assistance for complex industrial hazards and legal challenges.",
        "Create a 'Best Practices' digital library where locals can share successful strategies, contract language, and organizing wins.",
        "Institutionalize 'Shadowing Programs' where new stewards learn from veteran leaders on the shop floor before taking office."
      ],
      memberMessage: "Every member deserves representation that is trained to the highest level. We will settle for nothing less."
    },
    {
      id: "04",
      title: "Reimagining National Political Action & CAP",
      icon: Landmark,
      problem: "Walter Reuther once said the 'bread box' is tied to the 'ballot box.' But labor's voice has been treated as a 'transactional' asset by politicians who take our V-CAP money and then fail to deliver on fundamental worker protections. We have been too quick to endorse and too slow to hold elected officials accountable. We must return to a model where we use our political weight to move the needle for all workers, not just to gain access to the halls of power.",
      commitments: [
        "Tie all V-CAP endorsements strictly to a 'Labor-First' scorecard focused on anti-tier, anti-scab, and card-check legislation.",
        "Grant local councils Veto Power over regional endorsements that conflict with local member priorities or candidate records.",
        "Aggressive, member-led lobbying for the 'Worker Freedom Act' to end forced captive audience meetings and 'right-to-work' laws.",
        "Establish a 'UAW Political Fellowships' program to train rank-and-file members to run for local and state offices.",
        "Direct member-led development of the biennial UAW National Legislative Agenda through regional summits."
      ],
      memberMessage: "It's time we stop being a junior partner to political parties and start being a lead negotiator at the bargaining table."
    },
    {
      id: "05",
      title: "Healthcare: Bargaining, Standards & the Issue Campaign",
      icon: Heart,
      problem: "Healthcare is a fundamental human right, yet it is being used by corporations as a tool of coercion during negotiations. The 'healthcare cliff'—where rising premiums and shrinking networks roll back wage increases—is a deliberate corporate strategy. We must treat healthcare not just as a benefit to be defended, but as a national issue campaign that we lead for the entire working class.",
      commitments: [
        "Create a National UAW Healthcare Trust Defense Fund to aggressively litigate and fight off network reductions and cost-shifts.",
        "Contractual guarantees for Healthcare Cost-Caps: Ensuring take-home pay never decreases due to premium or deductible hikes.",
        "Mandatory mental health and substance abuse support parity in every multi-sector agreement, including onsite support where possible.",
        "Establish a Retiree Healthcare Advocacy Board to protect VEBA and traditional plans from inflationary erosion."
      ],
      memberMessage: "Every member has a right to health and dignity. We will fight for it at the table and in the streets."
    },
    {
      id: "06",
      title: "Internal Campaign Finance Reform & Union Integrity",
      icon: PieChart,
      problem: "The move to Direct Elections was a victory for the members, but the 'incumbency advantage' remains a barrier to true democracy. When dues dollars are used to fund the public relations of sitting officers during election cycles, it creates an unlevel playing field. We need strict rules that separate the work of the union from the work of campaigning, ensuring that every member has a fair shot at leading.",
      commitments: [
        "Strict separation of union communication assets from campaign activities during election periods.",
        "Commitment to a 30% reduction in non-essential administrative overhead at Solidarity House within 24 months.",
        "Redirection of saved administrative funds directly to 'Ground-War' organizing and local servicing budgets.",
        "Quarterly 'Dues Transparency Reports' mailed to every member's home, detailing exactly how every dollar is spent.",
        "Establish an independent Election Commission to oversee all international and regional votes with no ties to the IEB.",
        "Ban on all 'Administrative Caucus' assessments or forced contributions from appointed staff.",
        "Restructure the Strike Fund to ensure benefit payments match 100% of a member's base take-home pay from day one."
      ],
      memberMessage: "Leadership that wins the trust of the members shouldn't be afraid to defend its record without using the members' money."
    },
    {
      id: "07",
      title: "Retiree Dignity & Continued Voice",
      icon: HistoryIcon,
      problem: "The giants whose shoulders we stand on are being sidelined. Solidarity is a lifelong bond, yet our retirees often feel disconnected from active leadership and vulnerable to pension erosion. As inflation rises, the fixed incomes of our veterans are being squeezed. We must honor the promises made to those who built this union and ensure they remain an active, voting part of our future strength.",
      commitments: [
        "Negotiate Automatic COLA (Cost of Living Adjustments) for all retiree pensions in every future contract negotiation.",
        "Create a permanent, voting seat on the International Executive Board (IEB) for a Retiree Council Representative.",
        "Launch a National Retiree Mentorship program to connect veteran experience with new-hire organizing and steward training.",
        "Protect and expand surviving spouse benefits to ensure no UAW family is left in poverty after a lifetime of service.",
        "Establish 'Retiree Resource Hubs' in every region to assist with healthcare navigation and benefit claims.",
        "Constitutional protection of retiree chapters to ensure they have the budget and autonomy to organize locally.",
        "Annual 'State of the Retiree' reports presented to the International Convention."
      ],
      memberMessage: "Retirees are not the past of this union; they are the conscience and the backbone. We will fight for those who fought for us."
    },
    {
      id: "08",
      title: "Organizing: Growing Our Power",
      icon: Network,
      problem: "Falling union density is the single greatest threat to our collective bargaining power. Every non-union plant is a weapon the boss uses against us at the bargaining table. If we don't organize the new industries—especially the EV and battery sectors in the South—we will lose the leverage required to protect our existing standards. We cannot wait for the workers to come to us; we must take the fight to the gates.",
      commitments: [
        "Authorize a $100 Million Strategic Organizing Fund specifically targeted at the non-union South and the burgeoning EV sector.",
        "Deploy 'Tiger Teams'—elite, rapid-response organizing units of rank-and-file members—for new plant drives and community outreach.",
        "Implement a 'Sector-Wide Solidarity' model to organize the entire supply chain, ensuring no link is left vulnerable to corporate pressure.",
        "Leverage digital-first organizing tools and data analytics to reach workers in tech-manufacturing and new industrial hubs.",
        "Establish 'Worker Centers' in non-union corridors to build community support and provide resources before a drive even begins.",
        "Commitment to 'Card Check' neutrality agreements in all future master contracts with multi-national employers."
      ],
      memberMessage: "Every worker we leave behind is a worker the boss will use against us. We will organize until we win."
    }
  ], []);
  const brandPillars = useMemo(() => [
    {
      title: "Prepared",
      desc: "Preparation is not a strategy — it is a standard. It is how you earn respect in rooms that weren't built for you. Every commitment in this platform flows from the belief that members deserve leaders who did the work before they showed up.",
      quote: "Preparation is the foundation of power"
    },
    {
      title: "Democratic",
      desc: "Member democracy is our governing principle. Bargaining agendas set by members, not presidents. Strike authorizations that require member votes, not press releases. This union belongs to its members.",
      quote: "Your power. Your choice. Your union."
    },
    {
      title: "Accountable",
      desc: "Accountability starts with the person asking for your trust. It means transparency and the integrity to acknowledge failure and fix it. We will replace excuses with action and ensure every leader answers to the membership.",
      quote: "No excuses. Not for yourself. Not for this union."
    }
  ], []);
  return (
    <section id="platform" className="py-24 bg-campaign-tan/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-6xl font-display font-black text-campaign-black uppercase tracking-tight leading-none">The 2027 Strategic Platform</h2>
            <p className="text-muted-foreground text-xl max-w-3xl mx-auto mt-6">
              A Member-First blueprint to restore power, transparency, and results to the membership.
            </p>
          </motion.div>
        </div>
        {/* Brand Pillars Summary */}
        <div className="grid md:grid-cols-3 gap-8 mb-24 items-stretch">
          {brandPillars.map((bp, i) => (
            <motion.div
              key={bp.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl border-t-4 border-campaign-gold shadow-xl shadow-campaign-gold/5 flex flex-col h-full hover:shadow-2xl hover:shadow-campaign-gold/10 transition-all group"
            >
              <h3 className="text-2xl font-black text-campaign-black mb-4 uppercase tracking-tighter shrink-0">{bp.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed flex-grow text-sm md:text-base">
                {bp.desc}
              </p>
              <div className="pt-6 border-t border-gray-100 mt-auto shrink-0">
                <p className="text-campaign-gold font-black italic text-lg group-hover:scale-105 transition-transform duration-300">"{bp.quote}"</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Detailed Strategic Pillars */}
        <div className="space-y-16 lg:space-y-24">
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
                <Card className="border-none shadow-2xl overflow-hidden bg-white hover:shadow-campaign-gold/10 transition-shadow duration-500">
                  <div className="flex flex-col lg:flex-row min-h-[500px]">
                    {/* Sidebar / Header of the Pillar */}
                    <div className="lg:w-1/3 bg-campaign-black text-white px-8 py-12 md:p-12 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-10">
                          <span className="text-campaign-gold/20 font-black text-6xl md:text-8xl">{p.id}</span>
                          <div className="bg-campaign-gold/20 p-4 rounded-2xl text-campaign-gold">
                            <Icon className="w-8 h-8 md:w-10 md:h-10" />
                          </div>
                        </div>
                        <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight mb-6">
                          {p.title}
                        </CardTitle>
                      </div>
                      <div className="pt-8 border-t border-white/10">
                        {/* Refined label strictly aligning with client's Member-Facing Message directive */}
                        <p className="text-campaign-gold font-black uppercase tracking-widest text-[10px] mb-4">Member-Facing Message</p>
                        <p className="text-lg md:text-xl italic font-medium leading-relaxed text-white/90">
                          "{p.memberMessage}"
                        </p>
                      </div>
                    </div>
                    {/* Main Content Area */}
                    <CardContent className="lg:w-2/3 px-6 py-10 md:p-12 space-y-12 flex flex-col justify-center">
                      <div className="space-y-4">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-campaign-gold">The Challenge</h4>
                        <div className="border-l-4 border-campaign-gold bg-campaign-gold/5 p-6 sm:p-8 rounded-r-xl shadow-sm">
                          <p className="text-gray-700 text-lg leading-relaxed">
                            {p.problem}
                          </p>
                        </div>
                      </div>
                      <div className="space-y-6">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-campaign-black">Strategic Commitments</h4>
                        <ul className="grid gap-5 md:gap-6">
                          {p.commitments.map((commitment, index) => (
                            <li key={`${p.id}-commitment-${index}`} className="flex gap-4 pb-4 text-base md:text-lg leading-relaxed text-gray-800 items-start group border-b border-gray-50 last:border-0 last:pb-0 transition-colors">
                              <div className="mt-1.5 bg-campaign-gold/10 p-1.5 rounded-full text-campaign-gold group-hover:bg-campaign-gold group-hover:text-white transition-all shrink-0">
                                <ChevronRight size={18} strokeWidth={3} />
                              </div>
                              <span className="font-medium group-hover:text-campaign-black">{commitment}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
        {/* Closing Narrative Callout */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 text-center p-12 bg-campaign-black rounded-3xl text-white shadow-2xl border-b-8 border-campaign-gold"
        >
          <Quote className="mx-auto text-campaign-gold mb-6" size={48} />
          <h3 className="text-2xl md:text-4xl font-black italic mb-6 max-w-4xl mx-auto leading-tight">
            "We are not just electing a president. We are deciding who we are as a union and what we will demand for our future."
          </h3>
          <p className="text-campaign-gold font-black uppercase tracking-[0.3em] text-sm md:text-base">Tricia Geiger</p>
        </motion.div>
      </div>
    </section>
  );
}
