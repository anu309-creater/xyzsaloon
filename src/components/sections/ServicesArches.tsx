import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, Calendar } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

interface ServicesArchesProps {
  onSelectService?: (serviceName: string) => void;
}

const archedServices = [
  {
    id: 'hair',
    index: '01',
    name: 'Couture Hairstyling',
    subtitle: 'Cut, Balayage & Sculpting',
    image: '/images/hair-arch-clean.jpg',
    badge: 'Signature',
    duration: '60–120 min',
  },
  {
    id: 'nails',
    index: '02',
    name: 'Artisanal Manicure',
    subtitle: 'Nail Couture & Hand Spa',
    image: '/images/luxury-nails.jpg',
    badge: 'Prestige',
    duration: '45–75 min',
  },
  {
    id: 'facial',
    index: '03',
    name: 'Facial Treatments',
    subtitle: 'Clinical & Botanical Glow',
    image: '/images/skincare-facial.jpg',
    badge: 'Holistic',
    duration: '60–90 min',
  },
  {
    id: 'spa',
    index: '04',
    name: 'Japanese Head Spa',
    subtitle: 'Golden Halo Scalp Wellness',
    image: '/images/headspa-halo.jpg',
    badge: 'Sanctuary',
    duration: '60–90 min',
  },
];

export const ServicesArches: React.FC<ServicesArchesProps> = ({ onSelectService }) => {
  const { setCursorState } = useCursor();

  return (
    <section
      id="services-curated"
      className="relative py-16 sm:py-20 lg:py-26 bg-[#FAF7F2] text-rich-black overflow-hidden border-b border-[#E8E1D3]"
    >
      {/* Soft Ambient Background Lighting */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-champagne/[0.08] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading with 3D Entrance */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-champagne/40 bg-white/90 backdrop-blur-md shadow-xs mb-3.5"
          >
            <Sparkles className="w-3 h-3 text-champagne-dark animate-pulse" />
            <span className="font-sans text-[10px] font-semibold tracking-[0.25em] uppercase text-champagne-dark">
              CURATED DISCIPLINES • ATELIER MENU
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-[46px] font-light tracking-tight leading-[1.08] uppercase text-rich-black"
          >
            BEAUTY ATELIER &ldquo;BLUSH BLOOM&rdquo; SERVICES
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-3 font-sans text-xs sm:text-sm text-rich-black/60 font-light max-w-xl mx-auto"
          >
            Every discipline is practiced as an art form, tailored to honor your individual geometry and lifestyle.
          </motion.p>
        </div>

        {/* 4 Arched Cards with 3D Hover & Interactive Micro-Animations */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {archedServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -10 }}
              onClick={() => onSelectService?.(service.name)}
              onMouseEnter={() => setCursorState('book')}
              onMouseLeave={() => setCursorState('default')}
              className="group flex flex-col items-center cursor-pointer text-center relative"
            >
              {/* 3D Arched Frame with Shimmering Border & Depth Shadow */}
              <div className="relative w-full aspect-[3/4.4] overflow-hidden rounded-t-[100px] sm:rounded-t-[135px] lg:rounded-t-[165px] bg-white border border-[#E2D8C7] shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-500 group-hover:shadow-[0_20px_45px_rgba(184,155,94,0.22)] group-hover:border-champagne p-2">
                
                {/* Inner Image Container */}
                <div className="w-full h-full overflow-hidden rounded-t-[92px] sm:rounded-t-[127px] lg:rounded-t-[157px] relative bg-[#EFE9DF]">
                  <img
                    src={service.image}
                    alt={service.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-108"
                  />
                  
                  {/* Subtle Gradient Scrim on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Category Index Tag (Top Center Floating) */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-white/85 backdrop-blur-md border border-[#E2D8C7] text-[9px] font-sans font-semibold tracking-[0.18em] text-champagne-dark opacity-90 group-hover:opacity-100 shadow-xs transition-opacity duration-300">
                    {service.index}
                  </div>

                  {/* Hover Floating Pill with Arrow */}
                  <div className="absolute bottom-4 inset-x-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <span className="px-2.5 py-1 rounded-full bg-rich-black/80 backdrop-blur-md text-white text-[9px] font-sans font-medium tracking-[0.14em] uppercase">
                      {service.duration}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-white text-rich-black flex items-center justify-center shadow-md">
                      <ArrowUpRight className="w-3.5 h-3.5 text-champagne-dark transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Details Underneath with Animated Indicator */}
              <div className="mt-4 sm:mt-5 flex flex-col items-center w-full px-1">
                <h3 className="font-serif text-base sm:text-lg lg:text-[19px] text-rich-black font-normal tracking-wide group-hover:text-champagne-dark transition-colors duration-300 flex items-center gap-1">
                  <span>{service.name}</span>
                </h3>
                
                {/* Subtitle with Animated Underline */}
                <div className="relative mt-1">
                  <p className="font-sans text-[11px] sm:text-xs text-rich-black/60 font-light tracking-wide">
                    {service.subtitle}
                  </p>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-champagne-dark transition-all duration-500 group-hover:w-full" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Animated Concierge Footnote Banner Under Divider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-14 sm:mt-18 pt-8 border-t border-[#E8E1D3]"
        >
          <div className="max-w-2xl mx-auto rounded-xl p-5 sm:p-6 bg-white/70 border border-[#E2D8C7] shadow-xs text-center relative overflow-hidden backdrop-blur-xs group hover:border-champagne/60 hover:shadow-md transition-all duration-500">
            {/* Ambient Background Gold Glow */}
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-champagne/15 rounded-full blur-2xl pointer-events-none" />

            {/* Top Animated Badge */}
            <motion.div
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-champagne/15 border border-champagne/40 text-champagne-dark mb-3"
            >
              <Calendar className="w-3 h-3 text-champagne-dark" />
              <span className="font-sans text-[9px] sm:text-[10px] font-semibold tracking-[0.22em] uppercase">
                BY PRIVATE APPOINTMENT ONLY
              </span>
            </motion.div>

            {/* Two Expressive Poetic Lines */}
            <h4 className="font-serif italic text-base sm:text-lg lg:text-xl text-rich-black font-light leading-snug">
              &ldquo;A visit to the atelier is scheduled exclusively for you — ensuring uninterrupted attention, tailored consultations, and tranquil privacy.&rdquo;
            </h4>

            <p className="mt-2 font-sans text-[11px] sm:text-xs text-rich-black/60 tracking-[0.14em] uppercase font-medium">
              Lahore Atelier • Tuesday through Sunday • 11:00 AM – 9:00 PM
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
