import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
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
  // Navigation active state (scrolled or menu open)
  const isNavActive = isScrolled || isMobileMenuOpen;
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isNavActive ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-campaign-gold rounded-full flex items-center justify-center text-white font-bold text-xl">TG</div>
          <span className={cn(
            "font-display font-bold text-lg tracking-tight uppercase transition-colors duration-300",
            isNavActive ? "text-campaign-black" : "text-white"
          )}>
            Tricia Geiger <span className="text-campaign-gold">2026</span>
          </span>
        </div>
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium hover:text-campaign-gold transition-colors",
                isNavActive ? "text-campaign-black" : "text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-campaign-gold hover:bg-campaign-gold/90 text-white font-bold transition-all active:scale-95">
            <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">Donate Now</a>
          </Button>
        </div>
        {/* Mobile Toggle */}
        <button
          className={cn(
            "md:hidden p-2 focus:outline-none transition-all active:scale-90 rounded-lg",
            isNavActive ? "bg-gray-100" : "bg-white/10"
          )}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="text-campaign-black" />
          ) : (
            <Menu className={isNavActive ? "text-campaign-black" : "text-white"} />
          )}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-b border-gray-100 shadow-2xl p-4 flex flex-col gap-4 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-campaign-black py-3 px-4 rounded-lg active:bg-gray-50 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-campaign-gold hover:bg-campaign-gold/90 text-white font-bold w-full mt-2 h-12 shadow-lg">
            <a href={DONATE_URL} target="_blank" rel="noopener noreferrer">Donate Now</a>
          </Button>
        </div>
      )}
    </nav>
  );
}