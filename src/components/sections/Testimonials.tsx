import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonialsData';
import { SectionHeading } from '../common/SectionHeading';
import { useCursor } from '../../context/CursorContext';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPaused, setIsPaused] = useState(false);
  const { setCursorState } = useCursor();

  const currentTestimonial = testimonialsData[currentIndex];

  const handleNext = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setCurrentIndex(
      (prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length
    );
  };

  // Continuous smooth auto-scroll animation (5.5s per quote, pauses on hover)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 5500);

    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  return (
    <section className="py-24 sm:py-32 lg:py-40 bg-ivory text-rich-black overflow-hidden border-t border-hairline">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Editorial Heading */}
        <div className="mb-16">
          <SectionHeading
            label="CLIENT TESTIMONIALS"
            title="IN THEIR OWN WORDS."
            subtitle="Genuine reflections from guests who trusted ANUSALOON with their defining moments and everyday confidence."
          />
        </div>

        {/* Large Single Quote Showcase with Auto-Scroll & Pause-On-Hover */}
        <div
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-5xl mx-auto bg-sand/15 p-8 sm:p-14 lg:p-20 border border-hairline rounded-2xl shadow-sm transition-all duration-300"
        >
          {/* Top Live Auto-Scroll Ribbon */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-hairline/60">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne opacity-75 ${isPaused ? 'hidden' : ''}`}></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-champagne-dark"></span>
              </span>
              <span className="text-[9.5px] font-sans font-semibold tracking-[0.22em] uppercase text-rich-black/60">
                {isPaused ? 'PAUSED ON HOVER' : 'AUTO-ADVANCING CLIENT STORIES'}
              </span>
            </div>
            <span className="font-mono text-[10px] text-champagne-dark font-medium tracking-wider">
              {(currentIndex + 1).toString().padStart(2, '0')} / {testimonialsData.length.toString().padStart(2, '0')}
            </span>
          </div>

          {/* Subtle Background Quote Glyph */}
          <div className="absolute top-12 right-8 text-champagne/20 select-none pointer-events-none">
            <Quote className="w-20 h-20 sm:w-28 sm:h-28" />
          </div>

          <div className="relative z-10 min-h-[260px] sm:min-h-[220px] flex flex-col justify-between">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentTestimonial.id}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-8"
              >
                {/* Large Editorial Quote */}
                <p className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-rich-black leading-snug tracking-tight">
                  “{currentTestimonial.quote}”
                </p>

                {/* Client Profile */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-hairline">
                  <div>
                    <h4 className="font-serif text-xl sm:text-2xl text-rich-black font-normal">
                      {currentTestimonial.clientName}
                    </h4>
                    <p className="font-sans text-xs tracking-wider text-champagne-dark font-medium uppercase mt-0.5">
                      {currentTestimonial.roleOrService}
                    </p>
                  </div>
                  {currentTestimonial.location && (
                    <span className="font-sans text-[11px] tracking-widest text-rich-black/50 uppercase">
                      {currentTestimonial.location}, PAKISTAN
                    </span>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls & Smooth Animated Progress */}
          <div className="mt-10 flex items-center justify-between pt-6 border-t border-hairline/60">
            {/* Pagination Indicators with Animated Progress Line */}
            <div className="flex items-center gap-2.5">
              {testimonialsData.map((item, idx) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1.5 cursor-pointer rounded-full overflow-hidden transition-all duration-300 relative ${
                    idx === currentIndex
                      ? 'w-10 bg-rich-black/20'
                      : 'w-2.5 bg-rich-black/15 hover:bg-rich-black/40'
                  }`}
                >
                  {idx === currentIndex && (
                    <motion.div
                      key={currentIndex}
                      initial={{ width: 0 }}
                      animate={{ width: isPaused ? '100%' : '100%' }}
                      transition={{ duration: isPaused ? 0 : 5.5, ease: 'linear' }}
                      className="h-full bg-rich-black"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handlePrev}
                onMouseEnter={() => setCursorState('view')}
                onMouseLeave={() => setCursorState('default')}
                aria-label="Previous testimonial"
                className="p-3 border border-rich-black/20 hover:border-rich-black text-rich-black hover:bg-rich-black hover:text-ivory transition-all duration-300 rounded-sm"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                onMouseEnter={() => setCursorState('view')}
                onMouseLeave={() => setCursorState('default')}
                aria-label="Next testimonial"
                className="p-3 border border-rich-black/20 hover:border-rich-black text-rich-black hover:bg-rich-black hover:text-ivory transition-all duration-300 rounded-sm"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

