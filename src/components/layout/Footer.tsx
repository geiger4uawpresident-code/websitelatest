import React, { useMemo } from 'react';
import { Facebook, Youtube, Instagram, Mail } from 'lucide-react';
import { toast } from 'sonner';
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1 .05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.04-.1z"/>
  </svg>
);
export function Footer() {
  const socialLinks = useMemo(() => [
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/profile.php?id=61588992516309" },
    { name: "Youtube", icon: Youtube, href: "https://www.youtube.com/@TriciaGeiger4UAWPresident2026" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/geiger_triciageiger4uaw/" },
    { name: "TikTok", icon: TikTokIcon, href: "https://www.tiktok.com/@geiger4uaw" },
  ], []);
  const handleLegalClick = (e: React.MouseEvent, type: string) => {
    e.preventDefault();
    toast.info(`${type} Coming Soon`, {
      description: "Our legal documents are currently being finalized for the 2026 campaign cycle."
    });
  };
  const DONATE_URL = "https://gofund.me/5e6d6b33f";
  return (
    <footer className="bg-campaign-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-campaign-gold rounded-full flex items-center justify-center text-campaign-black font-black text-xl">TG</div>
              <span className="font-display font-black text-lg tracking-tight uppercase">Tricia Geiger <span className="text-campaign-gold">2026</span></span>
            </div>
            <p className="text-campaign-tan/70 leading-relaxed max-w-xs">
              A member-first movement dedicated to restoring the power, dignity, and future of every UAW member.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-campaign-tan/50 hover:text-campaign-gold transition-all duration-200 hover:scale-110 active:scale-95"
                    aria-label={`Visit our ${social.name}`}
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-campaign-gold">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-campaign-tan/70 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-campaign-tan/70 hover:text-white transition-colors">Meet Tricia</a></li>
              <li><a href="#platform" className="text-campaign-tan/70 hover:text-white transition-colors">The Platform</a></li>
              <li><a href="#involve" className="text-campaign-tan/70 hover:text-white transition-colors">Get Involved</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-campaign-gold">Contact & Support</h4>
            <a href="mailto:info@geiger2026.com" className="flex items-center gap-3 text-campaign-tan/70 hover:text-white transition-colors group">
              <Mail className="group-hover:text-campaign-gold transition-colors" />
              info@geiger2026.com
            </a>
            <div className="pt-4">
              <a
                href={DONATE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-campaign-gold hover:opacity-90 text-white text-center font-bold py-4 rounded-lg transition-all shadow-lg active:scale-95 shadow-campaign-gold/10"
              >
                Donate via GoFundMe
              </a>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] sm:text-xs uppercase tracking-widest text-campaign-tan/60">
          <p className="text-center md:text-left">© 2024-2026 Paid for by Tricia Geiger for UAW President 2026</p>
          <div className="flex gap-8">
            <a
              href="#"
              onClick={(e) => handleLegalClick(e, 'Privacy Policy')}
              className="hover:text-campaign-gold transition-colors hover:cursor-pointer"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              onClick={(e) => handleLegalClick(e, 'Terms of Use')}
              className="hover:text-campaign-gold transition-colors hover:cursor-pointer"
            >
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}