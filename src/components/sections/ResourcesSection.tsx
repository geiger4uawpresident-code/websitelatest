import React from 'react';
import { FileDown, Printer, Share2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
export function ResourcesSection() {
  const handleDownload = (title: string) => {
    toast.info(`${title} is coming soon!`, {
      description: "We are currently finalizing these materials for distribution."
    });
  };
  const handlePrintShop = () => {
    toast.info("Print Shop Integration Coming Soon", {
      description: "Direct ordering of official campaign materials will be available shortly."
    });
  };
  const materials = [
    { title: "Campaign Flyer", type: "PDF", size: "1.2 MB", icon: <FileDown /> },
    { title: "Platform Summary", type: "PDF", size: "2.4 MB", icon: <FileDown /> },
    { title: "Meeting Toolkit", type: "ZIP", size: "5.8 MB", icon: <Share2 /> }
  ];
  return (
    <section id="resources" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl md:text-5xl font-display font-black text-campaign-black uppercase">Campaign Resources</h2>
          <p className="text-muted-foreground text-lg">Download and share materials to help spread the word in your community.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {materials.map((m, idx) => (
            <div 
              key={idx} 
              className="flex items-center justify-between p-6 rounded-xl border border-campaign-tan/30 bg-campaign-tan/5 hover:bg-campaign-tan/10 transition-all duration-200 group"
            >
              <div className="flex items-center gap-4">
                <div className="text-campaign-gold group-hover:scale-110 transition-transform duration-200">{m.icon}</div>
                <div>
                  <h3 className="font-bold text-campaign-black">{m.title}</h3>
                  <p className="text-xs text-muted-foreground uppercase">{m.type} • {m.size}</p>
                </div>
              </div>
              <Button 
                size="sm" 
                variant="ghost" 
                className="hover:text-campaign-gold active:scale-95 transition-all"
                onClick={() => handleDownload(m.title)}
              >
                Download
              </Button>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button 
            variant="outline" 
            className="border-campaign-gold text-campaign-gold hover:bg-campaign-gold/10 active:scale-95 transition-all px-8 py-6 h-auto text-lg"
            onClick={handlePrintShop}
          >
            <Printer className="mr-2 h-5 w-5" /> Print Shop Orders
          </Button>
        </div>
      </div>
    </section>
  );
}