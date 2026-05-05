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
  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-md py-3" : "bg-transparent py-5"
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-10 w-10 bg-campaign-gold rounded-full flex items-center justify-center text-white font-bold text-xl">TG</div>
          <span className={cn("font-display font-bold text-lg tracking-tight uppercase", isScrolled ? "text-campaign-black" : "text-campaign-black md:text-white")}>
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
                isScrolled ? "text-campaign-black" : "text-campaign-black md:text-white"
              )}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-campaign-gold hover:bg-campaign-gold/90 text-white font-bold">
            <a href="https://www.gofundme.com/" target="_blank" rel="noopener noreferrer">Donate Now</a>
          </Button>
        </div>
        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X className="text-campaign-black" /> : <Menu className={isScrolled ? "text-campaign-black" : "text-campaign-black"} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 right-0 border-b border-gray-100 shadow-xl p-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-campaign-black py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button asChild className="bg-campaign-gold hover:bg-campaign-gold/90 text-white font-bold w-full">
            <a href="https://www.gofundme.com/" target="_blank" rel="noopener noreferrer">Donate Now</a>
          </Button>
        </div>
      )}
    </nav>
  );
}