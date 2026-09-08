import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Maximize2 } from 'lucide-react';
import { galleryData, galleryCategories } from '../../data/galleryData';
import { SectionHeading } from '../common/SectionHeading';
import { useCursor } from '../../context/CursorContext';
import type { GalleryItem } from '../../types';

interface GalleryProps {
  onOpenLightbox: (item: GalleryItem) => void;
}

export const Gallery: React.FC<GalleryProps> = ({ onOpenLightbox }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const { setCursorState } = useCursor();

  const filteredItems =
    activeCategory === 'all'
      ? galleryData
      : galleryData.filter(
          (item) => item.category === activeCategory || item.category === 'all'
        );

  return (
    <section
      id="gallery"
      className="py-24 sm:py-32 lg:py-40 bg-ivory text-rich-black overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-8">
          <SectionHeading
            label="PORTFOLIO ATELIER"
            title="THE EDITORIAL ARCHIVE."
            subtitle="Curated moments of craftsmanship, hair movement, skin radiance, and quiet studio elegance."
          />

          {/* Action to view all or book */}
          <div className="hidden md:block">
            <a
              href="#booking"
              className="inline-flex items-center gap-2 text-xs font-sans font-semibold tracking-widest uppercase text-rich-black hover:text-champagne-dark border-b border-rich-black pb-1 transition-colors"
            >
              <span>SCHEDULE A CONSULTATION</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Filter Navigation Tabs */}
        <div className="flex items-center gap-2 sm:gap-4 overflow-x-auto no-scrollbar pb-6 mb-12 border-b border-hairline">
          {galleryCategories.map((cat) => {
            const isActive = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2 text-xs font-sans tracking-widest uppercase transition-all duration-300 border ${
                  isActive
                    ? 'bg-rich-black text-ivory border-rich-black'
                    : 'text-rich-black/70 hover:text-rich-black border-transparent hover:border-rich-black/20'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Editorial Masonry Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  onClick={() => onOpenLightbox(item)}
                  onMouseEnter={() => setCursorState('view')}
                  onMouseLeave={() => setCursorState('default')}
                  className="group relative overflow-hidden bg-[#EFE9DF] cursor-pointer rounded-xl border border-[#DFD3C2] shadow-xs hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-full aspect-[3/4] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>

                  {/* Dark Editorial Overlay on Hover */}
                  <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex flex-col justify-between p-6 text-ivory">
                    {/* Top Tag */}
                    <div className="flex items-center justify-between">
                      <span className="font-sans text-[10px] tracking-widest uppercase text-champagne bg-dark/80 px-2.5 py-1 border border-dark-border">
                        {item.tag}
                      </span>
                      <div className="p-2 rounded-full bg-dark/60 border border-ivory/20 text-ivory">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>

                    {/* Bottom Title */}
                    <div>
                      <h4 className="font-serif text-xl sm:text-2xl font-light text-ivory">
                        {item.title}
                      </h4>
                      <p className="font-sans text-[10px] tracking-widest uppercase text-sand/80 mt-1">
                        CLICK TO EXPAND ARCHIVE
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* View Full Gallery Footer Action */}
        <div className="mt-16 text-center">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            onMouseEnter={() => setCursorState('explore')}
            onMouseLeave={() => setCursorState('default')}
            className="inline-flex items-center gap-3 px-8 py-4 border border-rich-black text-xs font-sans font-medium tracking-[0.2em] uppercase hover:bg-rich-black hover:text-ivory transition-all duration-300"
          >
            <span>VIEW FULL ARCHIVE</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

