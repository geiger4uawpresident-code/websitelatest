import React, { useMemo } from 'react';
import { FileDown, FileText, Package, ExternalLink } from 'lucide-react';
import { cn } from '@/lib/utils';
export function ResourcesSection() {
  const materials = useMemo(() => [
    {
      title: "Digital Campaign Flyer",
      type: "PNG",
      size: "0.8 MB",
      icon: FileDown,
      link: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&q=80"
    },
    {
      title: "Printable Campaign Flier",
      type: "DOC",
      size: "1.1 MB",
      icon: FileText,
      link: "https://drive.google.com/file/d/1stSPREfhvNyVBZ2RjsWcRP6mXT5wL6z9/view?usp=drive_link"
    },
    {
      title: "Meeting Toolkit",
      type: "DOCX",
      size: "4.2 MB",
      icon: Package,
      link: "https://drive.google.com/file/d/1ek2Ncd7ZcIDBxHFt83AQEUIttONQLuWf/view?usp=drive_link"
    }
  ], []);
  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-black text-campaign-black uppercase">Campaign Resources</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Download and share official materials to help organize your local and spread the message of accountability.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((m, idx) => {
            const Icon = m.icon;
            return (
              <a
                key={idx}
                href={m.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex items-center justify-between p-6 rounded-xl border border-campaign-tan/30 bg-campaign-tan/5",
                  "hover:bg-white hover:border-campaign-gold/50 hover:shadow-xl hover:shadow-campaign-gold/5",
                  "transition-all duration-300 group outline-none focus-visible:ring-2 focus-visible:ring-campaign-gold"
                )}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white p-3 rounded-lg shadow-sm text-campaign-gold group-hover:scale-110 group-hover:bg-campaign-gold group-hover:text-white transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-campaign-black group-hover:text-campaign-gold transition-colors">{m.title}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider">{m.type} • {m.size}</p>
                  </div>
                </div>
                <div className="text-campaign-tan group-hover:text-campaign-gold transition-colors">
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}