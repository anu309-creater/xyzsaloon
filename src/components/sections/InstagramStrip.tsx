import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';
import { useCursor } from '../../context/CursorContext';
import { InstagramIcon } from '../common/Icons';

export const InstagramStrip: React.FC = () => {
  const { setCursorState } = useCursor();

  const stripImages = [
    { src: '/images/hero-portrait.jpg', alt: 'Editorial Brunette Blowout' },
    { src: '/images/hair-editorial.jpg', alt: 'Sculptural Hair Artistry' },
    { src: '/images/skincare-facial.jpg', alt: 'Dewy Skin Treatment' },
    { src: '/images/mens-grooming.jpg', alt: "Gentlemen's Taper & Grooming" },
    { src: '/images/luxury-nails.jpg', alt: 'Minimalist Glazed Nails' },
    { src: '/images/bridal-makeup.jpg', alt: 'Haute Bridal Radiance' },
  ];

  return (
    <section className="py-20 sm:py-28 bg-ivory overflow-hidden border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mb-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-6 h-[1px] bg-champagne" />
              <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-rich-black/70">
                DAILY CAMPAIGNS
              </span>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-light tracking-tight text-rich-black uppercase">
              FOLLOW THE LOOK.
            </h2>
            <p className="font-serif italic text-lg text-champagne-dark mt-1">
              @anusaloon
            </p>
          </div>

          <a
            href={brandConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorState('explore')}
            onMouseLeave={() => setCursorState('default')}
            className="inline-flex items-center gap-2 px-5 py-3 border border-rich-black text-xs font-sans font-medium tracking-widest uppercase hover:bg-rich-black hover:text-ivory transition-all duration-300"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>FOLLOW ON INSTAGRAM</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

      {/* Horizontal Editorial Grid Strip */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3 px-3 sm:px-6">
        {stripImages.map((img, i) => (
          <a
            key={i}
            href={brandConfig.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorState('view')}
            onMouseLeave={() => setCursorState('default')}
            className="group relative overflow-hidden aspect-square bg-sand/30"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-ivory">
              <InstagramIcon className="w-6 h-6 text-white transform scale-75 group-hover:scale-100 transition-transform duration-300" />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

