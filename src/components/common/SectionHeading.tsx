import React from 'react';
import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
  titleClassName?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  label,
  title,
  subtitle,
  align = 'left',
  theme = 'light',
  className = '',
  titleClassName,
}) => {
  const isDark = theme === 'dark';
  const alignClass = align === 'center' ? 'text-center mx-auto items-center' : align === 'right' ? 'text-right ml-auto items-end' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignClass} ${className} max-w-4xl`}>
      {label && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-4"
        >
          <span className="w-6 h-[1px] bg-champagne" />
          <span className={`text-[11px] font-sans font-semibold tracking-widest uppercase ${isDark ? 'text-champagne' : 'text-rich-black/70'}`}>
            {label}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className={`font-serif ${
          titleClassName || 'text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.08] text-balance'
        } ${
          isDark ? 'text-ivory' : 'text-rich-black'
        }`}
      >
        {title}
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className={`mt-4 sm:mt-6 font-sans text-base sm:text-lg font-light max-w-2xl leading-relaxed ${
            isDark ? 'text-sand/80' : 'text-rich-black/70'
          }`}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
};

