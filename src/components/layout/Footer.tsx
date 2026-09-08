import React from 'react';
import { ArrowUp, MessageCircle } from 'lucide-react';
import { brandConfig, getWhatsAppLink } from '../../data/brandConfig';
import { useCursor } from '../../context/CursorContext';
import { InstagramIcon, FacebookIcon } from '../common/Icons';

interface FooterProps {
  onOpenBooking: () => void;
  onOpenLegal: (type: 'privacy' | 'terms') => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking, onOpenLegal }) => {
  const { setCursorState } = useCursor();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark text-ivory pt-20 pb-12 border-t border-dark-border">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section with Massive Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-dark-border/60">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95] text-ivory">
              BLUSH BLOOM
            </h2>
            <p className="mt-4 font-serif italic text-xl sm:text-2xl text-sand/80 tracking-wide">
              {brandConfig.tagline}
            </p>
            <p className="mt-6 font-sans text-sm text-sand/60 max-w-md leading-relaxed">
              A modern luxury beauty destination dedicated to couture hair architecture, bespoke color chemistry, editorial makeup, and clinical skin rejuvenation.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Navigation */}
            <div>
              <p className="text-[10px] font-sans font-semibold tracking-widest uppercase text-champagne mb-4">
                EXPLORE
              </p>
              <ul className="space-y-2.5 text-xs font-sans tracking-wider text-sand/80">
                <li><a href="#hero" className="hover:text-white transition-colors">HOME</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">SERVICES</a></li>
                <li><a href="#about" className="hover:text-white transition-colors">ABOUT STUDIO</a></li>
                <li><a href="#transformation" className="hover:text-white transition-colors">TRANSFORMATIONS</a></li>
                <li><a href="#gallery" className="hover:text-white transition-colors">PORTFOLIO</a></li>
                <li><a href="#experience" className="hover:text-white transition-colors">THE EXPERIENCE</a></li>
                <li>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="text-champagne hover:text-white transition-colors text-left"
                  >
                    BOOK APPOINTMENT
                  </button>
                </li>
              </ul>
            </div>

            {/* Atelier Contact */}
            <div>
              <p className="text-[10px] font-sans font-semibold tracking-widest uppercase text-champagne mb-4">
                ATELIER
              </p>
              <div className="space-y-2.5 text-xs font-sans tracking-wider text-sand/80">
                <p>{brandConfig.address}</p>
                <p>{brandConfig.city}, {brandConfig.country}</p>
                <p className="pt-2">
                  <a href={`tel:${brandConfig.phoneRaw}`} className="hover:text-white transition-colors">
                    {brandConfig.phone}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${brandConfig.email}`} className="hover:text-white transition-colors">
                    {brandConfig.email}
                  </a>
                </p>
              </div>
            </div>

            {/* Social & Hours */}
            <div className="col-span-2 sm:col-span-1">
              <p className="text-[10px] font-sans font-semibold tracking-widest uppercase text-champagne mb-4">
                CONNECT
              </p>
              <ul className="space-y-2.5 text-xs font-sans tracking-wider text-sand/80 mb-6">
                <li>
                  <a
                    href={brandConfig.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <InstagramIcon className="w-3.5 h-3.5 text-champagne" />
                    <span>INSTAGRAM</span>
                  </a>
                </li>
                <li>
                  <a
                    href={brandConfig.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <FacebookIcon className="w-3.5 h-3.5 text-champagne" />
                    <span>FACEBOOK</span>
                  </a>
                </li>
                <li>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <MessageCircle className="w-3.5 h-3.5 text-champagne" />
                    <span>WHATSAPP</span>
                  </a>
                </li>
              </ul>

              <button
                type="button"
                onClick={scrollToTop}
                onMouseEnter={() => setCursorState('view')}
                onMouseLeave={() => setCursorState('default')}
                aria-label="Back to top"
                className="inline-flex items-center gap-2 text-xs font-sans text-sand/70 hover:text-white transition-colors border border-dark-border px-3 py-2"
              >
                <span>TOP</span>
                <ArrowUp className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-sans text-sand/50 gap-4">
          <p>© 2026 BLUSH BLOOM. All Rights Reserved.</p>
          <div className="flex items-center space-x-6">
            <button
              type="button"
              onClick={() => onOpenLegal('privacy')}
              className="hover:text-sand/80 transition-colors"
            >
              Privacy Policy
            </button>
            <span className="text-sand/30">•</span>
            <button
              type="button"
              onClick={() => onOpenLegal('terms')}
              className="hover:text-sand/80 transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

