import React, { useMemo } from 'react';
import { FileDown, Printer, FileText, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
export function ResourcesSection() {
  const materials = useMemo(() => [
    { title: "Campaign Flyer", type: "PDF", size: "1.2 MB", icon: FileDown },
    { title: "Platform Summary", type: "PDF", size: "2.4 MB", icon: FileText },
    { title: "Meeting Toolkit", type: "ZIP", size: "5.8 MB", icon: Package }
  ], []);
  const handleDownload = (title: string) => {
    toast.info(`${title} is coming soon!`, {
      description: "We are currently finalizing these materials for distribution to all locals. Stay ready!"
    });
  };
  const handlePrintShop = () => {
    toast.info("Print Shop Integration Coming Soon", {
      description: "Direct ordering of official campaign fliers and banners will be available shortly to help you organize your local."
    });
  };
  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-black text-campaign-black uppercase">Campaign Resources</h2>
          <p className="text-muted-foreground text-lg">Download and share materials to help organize your local and mobilize your community.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div
                key={idx}
                className="flex items-center justify-between p-6 rounded-xl border border-campaign-tan/30 bg-campaign-tan/5 hover:bg-campaign-tan/10 hover:border-campaign-gold/30 hover:shadow-md transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div className="text-campaign-gold group-hover:scale-110 transition-transform duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-campaign-black">{m.title}</h3>
                    <p className="text-xs text-muted-foreground uppercase">{m.type} • {m.size}</p>
                  </div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  className="hover:text-campaign-gold active:scale-95 transition-all font-bold"
                  onClick={() => handleDownload(m.title)}
                >
                  Download
                </Button>
              </div>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button
            variant="outline"
            className="border-campaign-gold text-campaign-gold hover:bg-campaign-gold/10 active:scale-95 transition-all px-8 py-6 h-auto text-lg font-bold shadow-sm"
            onClick={handlePrintShop}
          >
            <Printer className="mr-2 h-5 w-5" /> Print Shop Orders
          </Button>
        </div>
      </div>
    </section>
  );
}