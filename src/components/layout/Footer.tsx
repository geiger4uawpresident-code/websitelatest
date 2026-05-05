import React from 'react';
import { Facebook, Youtube, Instagram, Twitter, Mail } from 'lucide-react';
export function Footer() {
  const socialLinks = [
    { icon: <Facebook />, href: "#" },
    { icon: <Twitter />, href: "#" },
    { icon: <Instagram />, href: "#" },
    { icon: <Youtube />, href: "#" },
  ];
  return (
    <footer className="bg-campaign-black text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 bg-campaign-gold rounded-full flex items-center justify-center text-white font-bold text-xl">TG</div>
              <span className="font-display font-bold text-lg tracking-tight uppercase">Tricia Geiger <span className="text-campaign-gold">2026</span></span>
            </div>
            <p className="text-campaign-tan/60 leading-relaxed max-w-xs">
              A member-first movement dedicated to restoring the power, dignity, and future of every UAW worker.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.href} className="text-campaign-tan/40 hover:text-campaign-gold transition-colors">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-campaign-gold">Navigation</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-campaign-tan/60 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-campaign-tan/60 hover:text-white transition-colors">Meet Tricia</a></li>
              <li><a href="#platform" className="text-campaign-tan/60 hover:text-white transition-colors">The Platform</a></li>
              <li><a href="#involve" className="text-campaign-tan/60 hover:text-white transition-colors">Get Involved</a></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-campaign-gold">Contact & Support</h4>
            <a href="mailto:info@geiger2026.com" className="flex items-center gap-3 text-campaign-tan/60 hover:text-white transition-colors group">
              <Mail className="group-hover:text-campaign-gold" />
              info@geiger2026.com
            </a>
            <div className="pt-4">
              <a href="https://www.gofundme.com/" target="_blank" rel="noopener noreferrer" className="block w-full bg-campaign-gold hover:bg-campaign-gold/90 text-white text-center font-bold py-3 rounded-lg transition-colors">
                Donate via GoFundMe
              </a>
            </div>
          </div>
        </div>
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs uppercase tracking-widest text-campaign-tan/30">
          <p>© 2024 Paid for by Tricia Geiger for UAW President 2026</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-campaign-gold">Privacy Policy</a>
            <a href="#" className="hover:text-campaign-gold">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}