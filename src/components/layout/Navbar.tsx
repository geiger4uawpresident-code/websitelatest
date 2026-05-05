import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Small threshold for scroll state change to avoid jitter
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Meet Tricia', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'Get Involved', href: '#involve' },
    { name: 'Resources', href: '#resources' },
  ];
  const DONATE_URL = "https://gofund.me/5e6d6b33f";
  const isNavActive = isScrolled || isMobileMenuOpen;
  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
        isNavActive 
          ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100 py-3" 
          : "bg-transparent py-6"
      )}
      aria-label="Main Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-campaign-gold rounded-full flex items-center justify-center text-white font-black text-xl shadow-lg shadow-campaign-gold/20 transform hover:rotate-12 transition-transform">
            TG
          </div>
          <span className={cn(
            "font-display font-black text-lg tracking-tight uppercase transition-colors duration-300",
            isNavActive ? "text-campaign-black" : "text-white drop-shadow-md"
          )}>
            Tricia Geiger <span className="text-campaign-gold">2026</span>
          </span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-bold uppercase tracking-[0.1em] hover:text-campaign-gold transition-all relative group",
                isNavActive ? "text-campaign-black" : "text-white"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-campaign-gold transition-all group-hover:w-full" />
            </a>
          ))}
          <Button asChild className="bg-campaign-gold hover:bg-campaign-gold/90 text-white font-bold px-6 shadow-xl shadow-campaign-gold/20 active:scale-95 transition-all">
            <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">Donate Now</a>
          </Button>
        </div>
        {/* Mobile Navigation Toggle */}
        <button
          className={cn(
            "md:hidden p-2.5 rounded-xl focus:outline-none transition-all active:scale-90",
            isNavActive ? "bg-gray-100/80 text-campaign-black" : "bg-white/10 text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen ? "max-h-[500px] opacity-100 py-6" : "max-h-0 opacity-0 py-0"
        )}
      >
        <div className="flex flex-col px-6 gap-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xl font-black text-campaign-black py-4 border-b border-gray-50 last:border-0 active:text-campaign-gold transition-colors uppercase tracking-tight"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button asChild size="lg" className="bg-campaign-gold hover:bg-campaign-gold/90 text-white font-black w-full mt-6 h-14 shadow-lg">
            <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">Donate to the Campaign</a>
          </Button>
        </div>
      </div>
    </nav>
  );
}