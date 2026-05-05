import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);
  useEffect(() => {
    // Check scroll position immediately on mount to prevent flicker on refresh
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);
  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'Join Us', href: '#involve' },
    { name: 'Resources', href: '#resources' },
  ];
  const DONATE_URL = "https://gofund.me/5e6d6b33f";
  const isNavActive = isScrolled || isMobileMenuOpen;
  const closeMobileMenu = () => setIsMobileMenuOpen(false);
  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isNavActive
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
          : "bg-transparent py-6"
      )}
      aria-label="Main Campaign Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-3 group/logo">
          <div className="h-10 w-10 bg-campaign-gold rounded-full flex items-center justify-center text-campaign-black font-black text-xl shadow-lg shadow-campaign-gold/20 transform group-hover/logo:rotate-12 transition-all cursor-default select-none">
            TG
          </div>
          <span className={cn(
            "font-display font-black text-lg tracking-tight uppercase transition-colors duration-300",
            isNavActive ? "text-campaign-black" : "text-white"
          )}>
            Tricia Geiger <span className="text-campaign-gold">2026</span>
          </span>
        </div>
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-xs font-bold uppercase tracking-widest hover:text-campaign-gold transition-all relative group",
                isNavActive ? "text-campaign-black" : "text-white"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-campaign-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button asChild className="bg-campaign-gold hover:opacity-90 text-white font-bold px-6 shadow-lg shadow-campaign-gold/10 active:scale-95 transition-all">
            <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">Donate</a>
          </Button>
        </div>
        {/* Mobile Navigation Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-lg focus:outline-none transition-all active:scale-90",
            isNavActive ? "bg-gray-100 text-campaign-black" : "bg-white/10 text-white"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-expanded={isMobileMenuOpen}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-2xl transition-all duration-300 ease-in-out overflow-hidden",
          isMobileMenuOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
        )}
        aria-hidden={!isMobileMenuOpen}
      >
        <div className="flex flex-col p-6 space-y-1">
          {navLinks.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-lg font-black text-campaign-black py-4 border-b border-gray-50 last:border-0 active:text-campaign-gold transition-all uppercase tracking-tight transform",
                isMobileMenuOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"
              )}
              style={{ transitionDelay: `${idx * 50}ms` }}
              onClick={closeMobileMenu}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-6">
            <Button asChild size="lg" className="bg-campaign-gold hover:opacity-90 text-white font-black w-full h-14 shadow-lg active:scale-[0.98] transition-all">
              <a href={DONATE_URL} target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                Donate to the Campaign
              </a>
            </Button>
          </div>
          <div className="py-8 text-center">
            <p className="text-[10px] text-muted-foreground uppercase tracking-widest">
              Paid for by Tricia Geiger for UAW President 2026
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}