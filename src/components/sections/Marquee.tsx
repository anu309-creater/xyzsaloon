import React, { useState } from 'react';
import { motion } from 'framer-motion';

const marqueeItems = [
  { text: 'COUTURE HAIRSTYLING', isItalic: false },
  { text: 'Haute Beauté', isItalic: true },
  { text: 'DIMENSIONAL BALAYAGE', isItalic: false },
  { text: 'Sensory Sanctuary', isItalic: true },
  { text: "MEN'S GROOMING", isItalic: false },
  { text: 'Bridal Atelier', isItalic: true },
  { text: 'JAPANESE HEAD SPA', isItalic: false },
  { text: 'Clinical Glow', isItalic: true },
  { text: 'HAUTE ARTISTRY', isItalic: false },
  { text: 'Bespoke Makeover', isItalic: true },
  { text: 'MINIMALIST NAILS', isItalic: false },
  { text: 'Quiet Luxury', isItalic: true },
];

export const Marquee: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative w-full bg-[#EFE9DF] text-rich-black py-4 sm:py-5 overflow-hidden border-y border-[#D8CEBD] shadow-sm select-none"
    >
      <div className="flex w-max">
        <motion.div
          animate={{
            x: ['0%', '-50%'],
          }}
          transition={{
            ease: 'linear',
            duration: isHovered ? 130 : 75,
            repeat: Infinity,
          }}
          className="flex items-center whitespace-nowrap"
        >
          {/* First loop */}
          <div className="flex items-center">
            {marqueeItems.map((item, idx) => (
              <span key={`loop1-${idx}`} className="inline-flex items-center">
                <span
                  className={`text-xs sm:text-sm tracking-[0.28em] uppercase ${
                    item.isItalic
                      ? 'font-serif italic text-champagne-dark font-normal normal-case tracking-[0.16em] text-sm sm:text-base'
                      : 'font-sans font-medium text-rich-black/85'
                  }`}
                >
                  {item.text}
                </span>
                <span className="mx-6 sm:mx-8 text-[10px] text-champagne-dark select-none">
                  ✦
                </span>
              </span>
            ))}
          </div>

          {/* Duplicated loop for seamless continuous movement */}
          <div className="flex items-center">
            {marqueeItems.map((item, idx) => (
              <span key={`loop2-${idx}`} className="inline-flex items-center">
                <span
                  className={`text-xs sm:text-sm tracking-[0.28em] uppercase ${
                    item.isItalic
                      ? 'font-serif italic text-champagne-dark font-normal normal-case tracking-[0.16em] text-sm sm:text-base'
                      : 'font-sans font-medium text-rich-black/85'
                  }`}
                >
                  {item.text}
                </span>
                <span className="mx-6 sm:mx-8 text-[10px] text-champagne-dark select-none">
                  ✦
                </span>
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
