import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

export const BrandStatement: React.FC = () => {
  const { setCursorState } = useCursor();

  return (
    <section
      id="about"
      className="relative py-20 sm:py-26 lg:py-32 bg-[#FAF7F2] text-rich-black overflow-hidden border-b border-[#E8E1D3]"
    >
      {/* Subtle Warm Travertine Light Accents */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-champagne/[0.08] rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#EAE1D3]/50 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Pure Luxury Editorial Storytelling (Clean, Spacious, No Cluttered Boxes) */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Pre-title Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-champagne/40 bg-white/90 shadow-xs mb-4 w-max"
            >
              <Sparkles className="w-3 h-3 text-champagne-dark" />
              <span className="font-sans text-[10px] font-semibold tracking-[0.24em] uppercase text-champagne-dark">
                THE ATELIER PHILOSOPHY • EST. 2016
              </span>
            </motion.div>

            {/* Grand Confident Serif Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.06] tracking-tight uppercase text-rich-black"
            >
              WHERE INTENTION
              <span className="block font-serif italic text-champagne-dark font-light normal-case text-2xl sm:text-3xl md:text-4xl lg:text-[46px] mt-1 sm:mt-1.5">
                Meets Master Artistry.
              </span>
            </motion.h2>

            {/* Subtitle Accent */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-3.5 font-serif italic text-lg sm:text-xl text-rich-black/85 font-light"
            >
              &ldquo;Beauty is not about changing who you are — it is about revealing your most refined, authentic self.&rdquo;
            </motion.p>

            {/* Narrative Story */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-5 sm:mt-6 space-y-4 max-w-xl text-rich-black/75 font-sans font-light text-xs sm:text-sm leading-relaxed"
            >
              <p>
                Born in the cultural heart of Lahore, <strong className="font-medium text-rich-black">ANUSALOON</strong> was founded on a singular conviction: true luxury should never be hurried, and personal beauty should never be uniform. We reject assembly-line salon culture in favor of quiet, deliberate craftsmanship.
              </p>
              <p className="text-rich-black/65">
                From regal bridal transformations to precision French balayage and restorative Japanese head spas, every appointment is treated as an intimate artistic collaboration designed to honor your individuality.
              </p>
            </motion.div>

            {/* Founder Signoff & Action Row (Serene & Elegant) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-10 pt-6 border-t border-[#E8E1D3] flex flex-wrap items-center justify-between gap-5 max-w-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white border border-champagne/50 shadow-xs flex items-center justify-center font-serif text-champagne-dark text-sm font-semibold">
                  ✦
                </div>
                <div>
                  <p className="font-serif italic text-sm text-rich-black leading-none">
                    Anum &amp; Zain Malik
                  </p>
                  <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-champagne-dark font-medium mt-1">
                    Founders &amp; Creative Directors
                  </p>
                </div>
              </div>

              <a
                href="#services-curated"
                onMouseEnter={() => setCursorState('explore')}
                onMouseLeave={() => setCursorState('default')}
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-rich-black/30 hover:border-rich-black bg-white/60 hover:bg-white text-xs font-sans font-semibold tracking-[0.18em] uppercase text-rich-black transition-all duration-300 shadow-xs"
              >
                <span>EXPLORE SERVICES</span>
                <ArrowRight className="w-3.5 h-3.5 text-champagne-dark transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </motion.div>

          </div>

          {/* Right Column: High-Fashion Bridal & Makeup Artistry Visuals */}
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Luxury Gold Jeweled Medallion (Rotating Seal in Top-Right) */}
              <div className="absolute -top-7 -right-7 sm:-top-8 sm:-right-8 z-30 pointer-events-none select-none">
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 flex items-center justify-center">
                  
                  {/* Rotating Ring Track with Clean Gold Typography */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                    className="w-full h-full"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                      <circle
                        cx="50"
                        cy="50"
                        r="42"
                        fill="none"
                        stroke="#B89B5E"
                        strokeWidth="0.8"
                        strokeDasharray="2, 2"
                        opacity="0.6"
                      />
                      <path
                        id="atelierMedalCurve"
                        d="M 50,50 m -34,0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                        fill="none"
                      />
                      <text className="font-sans text-[7.2px] uppercase font-semibold tracking-[0.24em] fill-rich-black">
                        <textPath href="#atelierMedalCurve" startOffset="0%">
                          ✦ ANUSALOON ATELIER ✦ EST. 2016 ✦
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>

                  {/* Frosted Ivory Center Disc with Gold Star */}
                  <div className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white/95 backdrop-blur-md border border-champagne/60 shadow-[0_8px_20px_rgba(184,155,94,0.25)] flex flex-col items-center justify-center text-center">
                    <Sparkles className="w-3.5 h-3.5 text-champagne-dark" />
                    <span className="font-sans text-[6px] tracking-[0.16em] uppercase font-bold text-rich-black mt-0.5">
                      LAHORE
                    </span>
                  </div>
                </div>
              </div>

              {/* Main Primary Image: User's Luxury Modern Salon Studio */}
              <div
                onMouseEnter={() => setCursorState('view')}
                onMouseLeave={() => setCursorState('default')}
                className="relative overflow-hidden rounded-2xl bg-white border border-[#DFD3C2] p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.06)] group"
              >
                <div className="overflow-hidden rounded-xl aspect-[3/3.8] relative bg-[#EFE9DF]">
                  <img
                    src="/images/atelier-interior-main.jpg"
                    alt="ANUSALOON Haute Couture Architectural Salon Studio in Lahore"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-104"
                  />
                  
                  {/* Subtle clean bottom gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Overlapping Floating Luxury Shears & Makeup Tools Card with Breathing Animation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 z-20 w-44 sm:w-52 rounded-xl bg-white p-2 border border-champagne/40 shadow-[0_18px_40px_rgba(184,155,94,0.18)]"
              >
                <div className="overflow-hidden rounded-lg aspect-square relative bg-[#EFE9DF]">
                  <img
                    src="/images/atelier-tools-equipment.jpg"
                    alt="Luxury Gold Shears, Japanese Scissors, Makeup Brushes and Beauty Atelier Tools"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-[8px] font-sans font-semibold tracking-wider uppercase">
                    <span>ATELIER TOOLS</span>
                    <span className="text-champagne-light">✦ GOLD SHEARS</span>
                  </div>
                </div>
              </motion.div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
