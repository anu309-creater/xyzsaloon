import React, { useState, useEffect } from 'react';
import { Menu, MessageCircle, ArrowUpRight } from 'lucide-react';
import { getWhatsAppLink } from '../../data/brandConfig';
import { useCursor } from '../../context/CursorContext';
import { MagneticButton } from '../common/MagneticButton';
import { MobileMenu } from './MobileMenu';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { setCursorState } = useCursor();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#080808]/95 backdrop-blur-2xl py-3 border-b border-champagne/30 shadow-[0_10px_35px_rgba(0,0,0,0.7)] text-ivory'
            : 'bg-[#0A0A0B]/85 backdrop-blur-xl py-3.5 sm:py-4 border-b border-champagne/20 text-ivory'
        }`}
      >
        <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-10 xl:px-12 flex items-center justify-between gap-2 sm:gap-4">
          
          {/* Brand Logo - Minimalist Luxury Editorial Wordmark */}
          <a
            href="#hero"
            onMouseEnter={() => setCursorState('explore')}
            onMouseLeave={() => setCursorState('default')}
            className="group flex flex-col items-start select-none shrink-0 py-0.5"
          >
            <span className="font-serif text-[18px] sm:text-[22px] font-normal tracking-[0.24em] sm:tracking-[0.3em] leading-none text-ivory group-hover:text-champagne transition-colors duration-300">
              BLUSH BLOOM
            </span>
            <span className="font-sans text-[7px] sm:text-[8px] tracking-[0.38em] sm:tracking-[0.45em] uppercase text-champagne font-medium mt-1">
              HAUTE BEAUTÉ
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-2.5 lg:space-x-3 xl:space-x-5 2xl:space-x-7">
            {[
              { label: 'HOME', href: '#hero' },
              { label: 'SERVICES', href: '#services' },
              { label: 'ABOUT', href: '#about' },
              { label: 'TRANSFORMATION', href: '#transformation' },
              { label: 'GALLERY', href: '#gallery' },
              { label: 'EXPERIENCE', href: '#experience' },
              { label: 'CONTACT', href: '#contact' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                onMouseEnter={() => setCursorState('explore')}
                onMouseLeave={() => setCursorState('default')}
                className="text-[9.5px] lg:text-[10px] xl:text-[10.5px] font-sans font-medium tracking-[0.16em] xl:tracking-[0.2em] uppercase text-sand/85 hover:text-champagne transition-colors duration-300 relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] hover:after:w-full after:bg-champagne after:transition-all after:duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            {/* WhatsApp Quick CTA */}
            <MagneticButton strength={0.2}>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Inquiry"
                title="WhatsApp Inquiry"
                onMouseEnter={() => setCursorState('explore')}
                onMouseLeave={() => setCursorState('default')}
                className="hidden md:inline-flex items-center justify-center w-8 h-8 rounded-full border border-champagne/35 text-champagne hover:border-champagne hover:bg-champagne/15 transition-all duration-300 shrink-0"
              >
                <MessageCircle className="w-3.5 h-3.5" />
              </a>
            </MagneticButton>

            {/* Luxury Pill Book Consultation CTA */}
            <MagneticButton strength={0.25}>
              <button
                type="button"
                onClick={onOpenBooking}
                onMouseEnter={() => setCursorState('book')}
                onMouseLeave={() => setCursorState('default')}
                className="group relative inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 xl:px-4.5 py-1.5 sm:py-2 text-[9px] sm:text-[10px] xl:text-[10.5px] font-sans font-semibold tracking-[0.12em] sm:tracking-[0.16em] uppercase overflow-hidden transition-all duration-300 shadow-[0_2px_15px_rgba(184,155,94,0.3)] hover:shadow-[0_4px_20px_rgba(184,155,94,0.5)] rounded-full whitespace-nowrap shrink-0 bg-gradient-to-r from-[#B89B5E] via-[#D8C08A] to-[#B89B5E] hover:from-[#C9B078] hover:to-[#B89B5E] text-[#0B0B0C]"
              >
                <span className="relative z-10 hidden sm:inline whitespace-nowrap">BOOK CONSULTATION</span>
                <span className="relative z-10 sm:hidden whitespace-nowrap">BOOK</span>
                <ArrowUpRight className="relative z-10 w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </MagneticButton>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open mobile menu"
              className="lg:hidden flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/[0.08] hover:bg-champagne/20 border border-champagne/40 active:scale-95 text-champagne hover:text-ivory transition-all duration-300 shrink-0"
            >
              <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onOpenBooking={onOpenBooking}
      />
    </>
  );
};
