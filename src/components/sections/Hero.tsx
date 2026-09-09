import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { MagneticButton } from '../common/MagneticButton';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const { setCursorState } = useCursor();

  return (
    <section id="hero" className="relative w-full bg-[#FAF7F2] text-rich-black overflow-hidden">
      
      {/* ========================================================================= */}
      {/* MOBILE & TABLET EDITORIAL LAYOUT (lg:hidden)                              */}
      {/* Cinematic video background with centered luxury typography and actions   */}
      {/* ========================================================================= */}
      <div className="relative w-full min-h-[94vh] sm:min-h-screen lg:hidden flex flex-col justify-center items-center text-center px-5 sm:px-8 pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden">
        
        {/* Mobile Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            poster="/images/hero-portrait.jpg"
            className="w-full h-full object-cover select-none"
          >
            <source src="/videos/hero-campaign.mp4" type="video/mp4" />
          </video>
          {/* Cinematic Dark Vignette Overlay for Crisp Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85 pointer-events-none" />
          {/* Subtle Warm Champagne Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,155,94,0.18),transparent_75%)] pointer-events-none" />
        </div>

        {/* Centered Mobile Content */}
        <div className="relative z-10 w-full max-w-lg mx-auto flex flex-col items-center text-center my-auto">
          
          {/* Campaign Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-champagne/50 bg-black/40 backdrop-blur-md shadow-lg mb-4"
          >
            <Sparkles className="w-3 h-3 text-champagne" />
            <span className="text-[10px] font-sans font-semibold tracking-[0.24em] uppercase text-champagne">
              HAUTE SALON ATELIER • EST. 2016
            </span>
          </motion.div>

          {/* Centered Editorial Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-[38px] sm:text-5xl font-light leading-[1.08] tracking-tight text-ivory uppercase mb-3 drop-shadow-md"
          >
            BEAUTY,<br />
            <span className="italic font-light text-champagne">BUT MAKE IT </span>
            <span>YOURS.</span>
          </motion.h1>

          {/* Centered Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif italic text-xl sm:text-2xl text-sand/95 font-light tracking-wide mb-2 drop-shadow-sm"
          >
            Hair. Beauty. Style. Confidence.
          </motion.p>

          {/* Centered Narrative Copy */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="font-sans text-xs sm:text-sm text-ivory/80 font-light leading-relaxed max-w-md mx-auto mb-6 drop-shadow-xs"
          >
            A modern beauty experience designed around your individuality, your style and the way you want to feel when you leave.
          </motion.p>

          {/* Centered Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-xs sm:max-w-md mx-auto"
          >
            <button
              type="button"
              onClick={onOpenBooking}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-[#B89B5E] via-[#D8C08A] to-[#B89B5E] text-[#0B0B0C] font-sans text-xs font-bold tracking-[0.16em] uppercase rounded-full shadow-[0_4px_25px_rgba(184,155,94,0.4)] hover:shadow-[0_6px_30px_rgba(184,155,94,0.6)] transition-all duration-300"
            >
              <span>BOOK AN APPOINTMENT</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#0B0B0C]" />
            </button>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 border border-ivory/30 hover:border-champagne bg-black/35 hover:bg-black/55 backdrop-blur-md text-ivory font-sans text-xs font-semibold tracking-[0.16em] uppercase rounded-full transition-all duration-300 shadow-md text-center"
            >
              EXPLORE SERVICES
            </a>
          </motion.div>

          {/* Editorial Hallmarks Pills */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 pt-5 border-t border-white/15 w-full max-w-lg mx-auto"
          >
            <div className="flex flex-nowrap items-center justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1">
              {[
                'COUTURE HAIRSTYLING',
                'DIMENSIONAL BALAYAGE',
                'HAUTE MAKEUP',
                'JAPANESE HEAD SPA',
              ].map((title) => (
                <div
                  key={title}
                  className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-champagne/40 bg-black/40 backdrop-blur-md text-champagne text-[8.5px] sm:text-[9.5px] font-sans font-semibold tracking-[0.08em] uppercase whitespace-nowrap shrink-0 shadow-sm"
                >
                  <Sparkles className="w-2.5 h-2.5 text-champagne shrink-0" />
                  <span>{title}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* DESKTOP CINEMATIC WIDE BANNER LAYOUT (hidden lg:flex)                     */}
      {/* ========================================================================= */}
      <div className="hidden lg:flex relative w-full min-h-screen items-center pt-28 pb-16">
        {/* Background Hero Banner Image (User's Couture Styling Session) */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="/images/hero-banner.png?v=ultra-hd-4k"
            alt="ANUSALOON Luxury Haute Couture Salon Model in Pink Satin Feather Dress"
            className="w-full h-full object-cover object-right select-none"
            loading="eager"
            decoding="async"
          />
          {/* Clean Ivory Blend on left for text contrast - Right side model remains 100% untouched & crisp */}
          <div className="absolute inset-y-0 left-0 w-[56%] bg-gradient-to-r from-[#FAF7F2] via-[#FAF7F2]/85 to-transparent pointer-events-none" />
        </div>

        {/* Hero Left-Adjusted Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 w-full my-auto flex flex-col items-start text-left">
          <div className="max-w-2xl lg:max-w-3xl">
            {/* Campaign Subtitle Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-champagne/40 bg-white/90 backdrop-blur-sm mb-5 shadow-xs"
            >
              <Sparkles className="w-3 h-3 text-champagne-dark" />
              <span className="text-[11px] font-sans font-semibold tracking-[0.25em] uppercase text-champagne-dark">
                HAUTE SALON ATELIER • EST. 2016
              </span>
            </motion.div>

            {/* 2-Line Editorial Headline */}
            <h1 className="font-serif text-[64px] xl:text-[72px] font-light leading-[1.03] tracking-tight text-rich-black uppercase">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  BEAUTY,
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: '100%' }}
                  animate={{ y: '0%' }}
                  transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  <span className="italic font-light text-champagne-dark">BUT MAKE IT </span>
                  <span>YOURS.</span>
                </motion.span>
              </span>
            </h1>

            {/* Supporting Editorial Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-4 font-serif italic text-2xl text-rich-black/85 font-light tracking-wide"
            >
              Hair. Beauty. Style. Confidence.
            </motion.p>

            {/* Narrative Copy */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-2.5 font-sans text-sm text-rich-black/70 font-light leading-relaxed max-w-md"
            >
              A modern beauty experience designed around your individuality, your style and the way you want to feel when you leave.
            </motion.p>

            {/* Action CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.72 }}
              className="mt-8 flex flex-wrap items-center gap-4 w-auto"
            >
              <MagneticButton strength={0.25}>
                <button
                  type="button"
                  onClick={onOpenBooking}
                  onMouseEnter={() => setCursorState('book')}
                  onMouseLeave={() => setCursorState('default')}
                  className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-rich-black hover:bg-[#252525] text-ivory font-sans text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 shadow-xl rounded-full"
                >
                  <span>BOOK AN APPOINTMENT</span>
                  <ArrowRight className="w-3.5 h-3.5 text-champagne transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <a
                  href="#services"
                  onMouseEnter={() => setCursorState('explore')}
                  onMouseLeave={() => setCursorState('default')}
                  className="inline-flex items-center justify-center px-8 py-3.5 border border-rich-black/30 hover:border-rich-black bg-white/70 hover:bg-white text-rich-black font-sans text-xs font-semibold tracking-[0.18em] uppercase transition-all duration-300 rounded-full shadow-xs"
                >
                  EXPLORE SERVICES
                </a>
              </MagneticButton>
            </motion.div>

            {/* Editorial Hallmarks Pills */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.85 }}
              className="mt-9 pt-5 border-t border-[#E8E1D3] w-full"
            >
              <div className="flex flex-nowrap items-center gap-2.5 overflow-visible py-1">
                {[
                  'COUTURE HAIRSTYLING',
                  'DIMENSIONAL BALAYAGE',
                  'HAUTE MAKEUP',
                  'JAPANESE HEAD SPA',
                ].map((title, idx) => (
                  <motion.div
                    key={title}
                    animate={{ y: [0, -3, 0] }}
                    transition={{
                      duration: 3.6,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: idx * 0.4,
                    }}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 4px 15px rgba(184, 155, 94, 0.25)',
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-champagne/40 bg-white/95 backdrop-blur-md text-champagne-dark text-[10px] font-sans font-semibold tracking-[0.1em] uppercase transition-all duration-300 hover:bg-white hover:border-champagne cursor-default whitespace-nowrap shrink-0 shadow-xs"
                  >
                    <Sparkles className="w-2.5 h-2.5 text-champagne-dark shrink-0" />
                    <span className="whitespace-nowrap">{title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
};
