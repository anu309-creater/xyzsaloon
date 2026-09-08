import React from 'react';
import { motion } from 'framer-motion';
import { brandStatistics } from '../../data/brandConfig';

export const Statistics: React.FC = () => {
  return (
    <section className="bg-ivory py-16 sm:py-24 border-y border-hairline">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {brandStatistics.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="flex flex-col border-l border-hairline pl-6 sm:pl-8 py-2 group hover:border-champagne transition-colors"
            >
              <span className="font-serif text-4xl sm:text-5xl lg:text-6xl font-light text-rich-black tracking-tight group-hover:text-champagne-dark transition-colors">
                {stat.value}
              </span>
              <span className="mt-2 font-sans text-xs sm:text-sm font-semibold tracking-wider text-rich-black uppercase">
                {stat.label}
              </span>
              <span className="mt-1 font-sans text-[11px] text-rich-black/50 font-light">
                {stat.detail}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

