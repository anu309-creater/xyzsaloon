import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';
import { MagneticButton } from '../common/MagneticButton';

interface SignatureServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const SignatureServices: React.FC<SignatureServicesProps> = ({ onSelectService }) => {
  const { setCursorState } = useCursor();

  const signatureItems = [
    {
      id: 'hair',
      category: 'SIGNATURE 01 • ATELIER COIFFURE',
      title: ['CUT.', 'COLOR.', 'TRANSFORM.'],
      description:
        'Sculpted with surgical precision to complement your bone structure. From rich multi-tonal dimensional balayage to razor-sharp bobs and cascading layers.',
      image: '/images/hair-editorial.jpg',
      ctaText: 'EXPLORE HAIR →',
      serviceName: 'Hair',
      imagePosition: 'right',
      accentTag: 'PRECISION CUT & COLOR',
    },
    {
      id: 'beauty',
      category: 'SIGNATURE 02 • CLINICAL DERMA',
      title: ['YOUR SKIN.', 'ELEVATED.'],
      description:
        'A botanical and medical-grade sanctuary designed to restore barrier health, stimulate cellular collagen, and unveil your most radiant, luminous complexion.',
      image: '/images/skincare-facial.jpg',
      ctaText: 'EXPLORE BEAUTY →',
      serviceName: 'Facial & Skincare',
      imagePosition: 'left',
      accentTag: 'CELLULAR HYDRATION',
    },
    {
      id: 'nails',
      category: 'SIGNATURE 03 • ATELIER MANICURE',
      title: ['DETAILS', 'MATTER.'],
      description:
        'Japanese dry manicures and restorative cuticle care. Clean lines, micro-gold leaf accents, and minimalist glazed finishes that whisper understated luxury.',
      image: '/images/luxury-nails.jpg',
      ctaText: 'EXPLORE NAILS →',
      serviceName: 'Nails',
      imagePosition: 'right',
      accentTag: 'JAPANESE GEL & DRY CARE',
    },
    {
      id: 'makeup',
      category: 'SIGNATURE 04 • HAUTE ARTISTRY',
      title: ['YOUR FACE.', 'ELEVATED.'],
      description:
        'Vogue-level editorial makeup engineered to catch the light seamlessly. Dewy skin, sculpted contours, and bespoke eye artistry for red carpet and wedding celebrations.',
      image: '/images/makeup-editorial.jpg',
      ctaText: 'EXPLORE MAKEUP →',
      serviceName: 'Makeup',
      imagePosition: 'left',
      accentTag: 'COUTURE EVENT MAKEUP',
    },
  ];

  return (
    <section className="bg-ivory text-rich-black py-16 sm:py-24 overflow-hidden">
      <div className="space-y-28 sm:space-y-40">
        {signatureItems.map((item) => {
          const isImageLeft = item.imagePosition === 'left';

          return (
            <div
              key={item.id}
              className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12"
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center ${
                  isImageLeft ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content Column */}
                <div
                  className={`lg:col-span-6 ${
                    isImageLeft ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6 }}
                    className="flex items-center gap-3 mb-6"
                  >
                    <span className="w-8 h-[1px] bg-champagne" />
                    <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-rich-black/60">
                      {item.category}
                    </span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="font-serif text-5xl sm:text-6xl md:text-7xl font-light tracking-tight leading-[0.98] text-rich-black uppercase"
                  >
                    {item.title.map((line, lineIndex) => (
                      <span
                        key={line}
                        className={`block ${
                          lineIndex % 2 === 1 ? 'italic text-champagne-dark' : ''
                        }`}
                      >
                        {line}
                      </span>
                    ))}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="mt-6 sm:mt-8 font-sans text-base sm:text-lg font-light text-rich-black/75 leading-relaxed max-w-lg"
                  >
                    {item.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="mt-8 sm:mt-10"
                  >
                    <MagneticButton strength={0.25}>
                      <button
                        type="button"
                        onClick={() => onSelectService(item.serviceName)}
                        onMouseEnter={() => setCursorState('book')}
                        onMouseLeave={() => setCursorState('default')}
                        className="group inline-flex items-center gap-3 text-xs font-sans font-semibold tracking-[0.2em] uppercase text-rich-black border-b-2 border-rich-black pb-1.5 hover:text-champagne-dark hover:border-champagne-dark transition-colors"
                      >
                        <span>{item.ctaText}</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </button>
                    </MagneticButton>
                  </motion.div>
                </div>

                {/* Imagery Column */}
                <div
                  className={`lg:col-span-6 relative ${
                    isImageLeft ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    onMouseEnter={() => setCursorState('view')}
                    onMouseLeave={() => setCursorState('default')}
                    className="group relative overflow-hidden shadow-2xl bg-sand/20"
                  >
                    <img
                      src={item.image}
                      alt={item.title.join(' ')}
                      loading="lazy"
                      decoding="async"
                      className="w-full aspect-[4/5] object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-rich-black/10 group-hover:bg-transparent transition-colors duration-500" />

                    {/* Minimalist Floating Accent Tag */}
                    <div className="absolute top-6 right-6 bg-ivory/90 backdrop-blur-md px-3.5 py-1.5 text-[9px] font-sans font-medium tracking-widest uppercase text-rich-black border border-rich-black/10">
                      {item.accentTag}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

