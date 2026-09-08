import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, ArrowRight } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

interface AtelierCurationsProps {
  onSelectPackage: (packageName: string) => void;
}

interface PackageItem {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  duration: string;
  price: string;
  image: string;
  inclusions: string[];
}

const packages: PackageItem[] = [
  {
    id: 'bridal-heirloom',
    badge: 'COUTURE NUPTIAL',
    title: 'The Bridal Heirloom Suite',
    tagline: 'An unhurried sanctuary experience for the modern couture bride.',
    duration: '4–6 Hours',
    price: '₨ 55,000',
    image: '/images/package-bridal-heirloom.jpg',
    inclusions: [
      'Private Champagne Suite & Dedicated Concierge',
      'Pre-Wedding Radiance Diagnostic & Trial',
      'Architectural Hair Sculpting & Veil Draping',
      'HD Photogenic Makeup & Touch-Up Kit',
    ],
  },
  {
    id: 'executive-craft',
    badge: 'SIGNATURE GENTLEMAN',
    title: 'The Executive Restructuring',
    tagline: 'Precision scissor architecture and restorative botanical scalp therapy.',
    duration: '90 Minutes',
    price: '₨ 12,500',
    image: '/images/package-executive-craft.jpg',
    inclusions: [
      'Micro-Camera Scalp Health Diagnostics',
      'Japanese Botanical Scalp Spa & Steam Halo',
      'Precision Scissor Detailing & Beard Sculpt',
      'Botanical Hot Towel Compress & Tone Treatment',
    ],
  },
  {
    id: 'cellular-luminescence',
    badge: 'HAUTE GLOSS & SKIN',
    title: 'The Cellular Luminescence',
    tagline: 'Complete head-to-toe skin glass finish and hair gloss infusion.',
    duration: '2.5 Hours',
    price: '₨ 24,000',
    image: '/images/package-spa-infusion.jpg',
    inclusions: [
      'Bespoke Velvet Hair Gloss & Bond Infusion',
      'Ultrasonic Pore Cleanse & Cryo-Gua Sha',
      'Targeted Peptide Hydration Shield',
      'Editorial Signature Blowout & Take-Home Elixir',
    ],
  },
];

export const AtelierCurations: React.FC<AtelierCurationsProps> = ({ onSelectPackage }) => {
  const { setCursorState } = useCursor();

  return (
    <section
      id="curations"
      className="py-24 sm:py-32 lg:py-36 bg-[#F6F2EC] text-rich-black relative overflow-hidden border-t border-[#E8E1D3]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 sm:mb-20">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="font-serif italic text-champagne-dark text-base sm:text-lg">08</span>
            <span className="w-8 h-px bg-champagne-dark/40" />
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-rich-black/70">
              EXCLUSIVE ATELIER CURATIONS
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-light leading-[1.05] tracking-tight uppercase text-rich-black">
            BESPOKE RITUALS.
            <span className="block italic text-champagne-dark font-light normal-case text-2xl sm:text-3xl md:text-4xl lg:text-[44px] mt-1">
              Pure distinction.
            </span>
          </h2>

          <p className="mt-4 font-sans text-xs sm:text-sm text-rich-black/70 font-light leading-relaxed max-w-2xl mx-auto">
            Comprehensive multi-discipline rituals crafted for milestone celebrations, restorative resets, and executive transformations. Every package includes private suite privileges.
          </p>
        </div>

        {/* 3 Luxury Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-10 items-stretch">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl border border-[#DFD3C2] p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_22px_55px_rgba(184,155,94,0.18)] hover:border-champagne transition-all duration-500 flex flex-col justify-between group"
            >
              <div>
                {/* Image Frame */}
                <div className="aspect-[16/11] w-full rounded-xl overflow-hidden relative bg-[#1a1a1a] shadow-inner mb-6">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-106"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-champagne-dark shadow-xs">
                    {pkg.badge}
                  </div>

                  {/* Duration Tag */}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-white text-xs font-sans drop-shadow-md">
                    <Clock className="w-3.5 h-3.5 text-champagne" />
                    <span>{pkg.duration}</span>
                  </div>

                  {/* Price Tag */}
                  <div className="absolute bottom-3 right-3 px-3 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-champagne/30 text-champagne font-serif text-sm font-semibold">
                    {pkg.price}
                  </div>
                </div>

                {/* Title & Tagline */}
                <h3 className="font-serif text-2xl font-light text-rich-black leading-snug group-hover:text-champagne-dark transition-colors duration-300">
                  {pkg.title}
                </h3>
                <p className="mt-2 font-sans text-xs text-rich-black/70 font-light leading-relaxed">
                  {pkg.tagline}
                </p>

                {/* Inclusions List */}
                <div className="mt-6 pt-5 border-t border-[#F0E8DC] space-y-2.5">
                  <span className="block text-[9.5px] font-sans font-semibold tracking-[0.2em] uppercase text-champagne-dark mb-3">
                    BESPOKE INCLUSIONS:
                  </span>
                  {pkg.inclusions.map((item) => (
                    <div key={item} className="flex items-start gap-2 text-xs font-sans text-rich-black/80 font-light">
                      <CheckCircle2 className="w-3.5 h-3.5 text-champagne-dark shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-5 border-t border-[#F0E8DC]">
                <button
                  type="button"
                  onClick={() => onSelectPackage(pkg.title)}
                  onMouseEnter={() => setCursorState('book')}
                  onMouseLeave={() => setCursorState('default')}
                  className="w-full py-3.5 bg-rich-black hover:bg-[#222222] text-white font-sans text-xs font-semibold tracking-[0.18em] uppercase rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                >
                  <span>RESERVE THIS RITUAL</span>
                  <ArrowRight className="w-3.5 h-3.5 text-champagne transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

