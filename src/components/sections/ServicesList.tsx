import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Clock, Sparkles, CheckCircle2, MessageCircle } from 'lucide-react';
import { servicesData } from '../../data/servicesData';
import { getWhatsAppLink } from '../../data/brandConfig';
import { useCursor } from '../../context/CursorContext';
import type { ServiceItem } from '../../types';

interface ServicesListProps {
  onSelectService: (serviceName: string) => void;
}

const filterCategories = [
  'ALL',
  'HAIR',
  'COLOR',
  'SKINCARE',
  'SPA',
  'MAKEUP',
  'BRIDAL',
  "MEN'S",
];

export const ServicesList: React.FC<ServicesListProps> = ({ onSelectService }) => {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [selectedService, setSelectedService] = useState<ServiceItem>(servicesData[0]);
  const [expandedMobileId, setExpandedMobileId] = useState<string | null>(null);
  const { setCursorState } = useCursor();

  const rowRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const isHoveredRef = useRef(false);

  const filteredServices = servicesData.filter((service) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'HAIR') return service.id.includes('hair') && !service.id.includes('color');
    if (activeCategory === 'COLOR') return service.id.includes('color') || service.category.toLowerCase().includes('color');
    if (activeCategory === 'SKINCARE') return service.id.includes('facial') || service.category.toLowerCase().includes('facial') || service.category.toLowerCase().includes('derma');
    if (activeCategory === 'SPA') return service.id.includes('spa') || service.category.toLowerCase().includes('spa');
    if (activeCategory === 'MAKEUP') return service.id.includes('makeup');
    if (activeCategory === 'BRIDAL') return service.id.includes('bridal');
    if (activeCategory === "MEN'S") return service.id.includes('men');
    return true;
  });

  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    const newFiltered = servicesData.filter((service) => {
      if (cat === 'ALL') return true;
      if (cat === 'HAIR') return service.id.includes('hair') && !service.id.includes('color');
      if (cat === 'COLOR') return service.id.includes('color') || service.category.toLowerCase().includes('color');
      if (cat === 'SKINCARE') return service.id.includes('facial') || service.category.toLowerCase().includes('facial') || service.category.toLowerCase().includes('derma');
      if (cat === 'SPA') return service.id.includes('spa') || service.category.toLowerCase().includes('spa');
      if (cat === 'MAKEUP') return service.id.includes('makeup');
      if (cat === 'BRIDAL') return service.id.includes('bridal');
      if (cat === "MEN'S") return service.id.includes('men');
      return true;
    });
    if (newFiltered.length > 0 && !newFiltered.some((s) => s.id === selectedService.id)) {
      setSelectedService(newFiltered[0]);
    }
  };

  // Scroll listener: dynamically track active service as user scrolls down through the tariff
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const handleScroll = () => {
      if (isHoveredRef.current) return;

      // Focal reading line is ~38% of viewport height
      const focalLine = window.innerHeight * 0.38;
      let closestService: ServiceItem | null = null;
      let minDistance = Infinity;

      filteredServices.forEach((service) => {
        const el = rowRefs.current[service.id];
        if (el) {
          const rect = el.getBoundingClientRect();
          const elCenter = rect.top + rect.height / 2;
          const distance = Math.abs(elCenter - focalLine);

          if (rect.top < window.innerHeight && rect.bottom > 0) {
            if (distance < minDistance) {
              minDistance = distance;
              closestService = service;
            }
          }
        }
      });

      if (closestService && (closestService as ServiceItem).id !== selectedService.id) {
        setSelectedService(closestService);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [filteredServices, selectedService.id]);

  const toggleMobileAccordion = (id: string) => {
    setExpandedMobileId(expandedMobileId === id ? null : id);
  };

  const currentIndex = filteredServices.findIndex((s) => s.id === selectedService.id);

  return (
    <section
      id="services"
      className="relative py-20 sm:py-24 lg:py-32 bg-[#FAF7F2] text-rich-black border-b border-[#E8E1D3]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header - Centered per user instruction */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="font-serif italic text-champagne-dark text-base sm:text-lg">03</span>
            <span className="w-8 h-px bg-champagne-dark/40" />
            <span className="font-sans text-[11px] font-semibold tracking-[0.25em] uppercase text-rich-black/70">
              COMPLETE ATELIER TARIFF
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-light leading-[1.05] tracking-tight uppercase text-rich-black">
            YOUR LOOK.
            <span className="block italic text-champagne-dark font-light normal-case text-2xl sm:text-3xl md:text-4xl lg:text-[46px] mt-1">
              Your rules.
            </span>
          </h2>

          <p className="mt-4 font-sans text-xs sm:text-sm text-rich-black/70 font-light leading-relaxed max-w-2xl mx-auto">
            From effortless everyday styling to complete couture transformations. Every appointment begins with an unhurried structural consultation honoring your bone geometry and natural texture.
          </p>

          {/* Filter Pills Centered */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {filterCategories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => handleCategoryChange(cat)}
                className={`px-4 py-1.5 rounded-full text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.16em] uppercase transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-rich-black text-ivory shadow-sm'
                    : 'bg-white/80 hover:bg-white text-rich-black/70 hover:text-rich-black border border-[#E2D8C7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Split Layout: Flawless List on Left, Sticky Dynamic High-Fashion Preview on Right */}
        <div className="hidden lg:grid grid-cols-12 gap-10 xl:gap-14 items-start relative">
          
          {/* Left Column: Interactive Service Rows */}
          <div className="col-span-7 border-t border-[#E8E1D3] divide-y divide-[#E8E1D3]">
            {filteredServices.map((service) => {
              const isSelected = selectedService.id === service.id;

              return (
                <div
                  key={service.id}
                  ref={(el) => {
                    rowRefs.current[service.id] = el;
                  }}
                  onMouseEnter={() => {
                    isHoveredRef.current = true;
                    setSelectedService(service);
                    setCursorState('explore');
                  }}
                  onMouseLeave={() => {
                    isHoveredRef.current = false;
                    setCursorState('default');
                  }}
                  onClick={() => {
                    setSelectedService(service);
                    onSelectService(service.name);
                  }}
                  className={`group relative py-6 px-5 transition-all duration-300 cursor-pointer rounded-lg ${
                    isSelected
                      ? 'bg-white shadow-[0_4px_25px_rgba(0,0,0,0.06)] border-l-4 border-l-champagne-dark translate-x-1.5'
                      : 'hover:bg-white/60 hover:translate-x-1'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    {/* Number + Name + Category */}
                    <div className="flex items-center gap-5">
                      <span className={`font-serif text-sm font-medium w-6 transition-colors duration-300 ${
                        isSelected ? 'text-champagne-dark font-semibold' : 'text-rich-black/40'
                      }`}>
                        {service.number}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className={`font-serif text-2xl xl:text-3xl font-light transition-colors duration-300 ${
                            isSelected ? 'text-champagne-dark font-normal' : 'text-rich-black group-hover:text-champagne-dark'
                          }`}>
                            {service.name}
                          </h3>
                          {isSelected && (
                            <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[9px] font-sans font-semibold tracking-widest uppercase bg-champagne/15 text-champagne-dark border border-champagne/30">
                              ACTIVE
                            </span>
                          )}
                        </div>
                        <p className="font-sans text-[11px] text-rich-black/55 mt-0.5 tracking-wider uppercase">
                          {service.category}
                        </p>
                      </div>
                    </div>

                    {/* Price, Duration & Book Pill */}
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <span className="block text-[9px] font-sans tracking-[0.16em] uppercase text-rich-black/50">
                          Starting From
                        </span>
                        <span className="font-serif text-lg font-normal text-rich-black">
                          {service.priceFrom}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 text-xs text-rich-black/60">
                        <Clock className="w-3.5 h-3.5 text-champagne-dark" />
                        <span className="font-sans text-[11px]">{service.duration}</span>
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectService(service.name);
                        }}
                        className={`transition-all duration-300 px-4 py-1.5 rounded-full text-[10px] font-sans font-semibold tracking-[0.14em] uppercase flex items-center gap-1.5 ${
                          isSelected
                            ? 'bg-rich-black text-ivory shadow-sm opacity-100'
                            : 'opacity-0 group-hover:opacity-100 bg-rich-black text-ivory'
                        }`}
                      >
                        <span>BOOK</span>
                        <ArrowRight className="w-3 h-3 text-champagne" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Dynamic Service Preview Canvas */}
          <div className="col-span-5 sticky top-24 xl:top-28 self-start z-20">
            <div className="bg-white rounded-2xl border border-[#E2D8C7] p-5 xl:p-6 shadow-[0_15px_45px_-12px_rgba(0,0,0,0.08)] relative overflow-hidden transition-all duration-300">
              
              {/* Dynamic Live Header */}
              <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-[#F0E8DC]">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-champagne opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-champagne-dark"></span>
                  </span>
                  <span className="text-[10px] font-sans font-bold tracking-[0.2em] uppercase text-rich-black/70">
                    LIVE ATELIER PREVIEW
                  </span>
                </div>
                <div className="font-mono text-[10.5px] text-champagne-dark font-medium tracking-wider">
                  {(currentIndex >= 0 ? currentIndex + 1 : 1).toString().padStart(2, '0')} / {filteredServices.length.toString().padStart(2, '0')}
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedService.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: 'easeOut' }}
                  className="flex flex-col"
                >
                  {/* Preview Image Frame */}
                  <div className="aspect-[16/10] w-full rounded-xl overflow-hidden relative bg-[#EFE9DF] shadow-inner group">
                    <img
                      src={selectedService.image}
                      alt={selectedService.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />
                    
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-champagne-dark shadow-sm">
                      {selectedService.category}
                    </div>

                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white gap-2">
                      <span className="font-serif italic text-sm text-champagne-light truncate">
                        {selectedService.tagline}
                      </span>
                      <span className="font-serif text-sm font-semibold px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-champagne border border-champagne/30 shrink-0">
                        {selectedService.priceFrom}
                      </span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="mt-4">
                    <div className="flex items-baseline justify-between mb-1.5">
                      <h3 className="font-serif text-2xl xl:text-[28px] font-light text-rich-black leading-tight">
                        {selectedService.name}
                      </h3>
                      <span className="font-sans text-xs text-rich-black/60 flex items-center gap-1.5 shrink-0">
                        <Clock className="w-3.5 h-3.5 text-champagne-dark" />
                        {selectedService.duration}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-rich-black/75 font-light leading-relaxed">
                      {selectedService.description}
                    </p>
                  </div>

                  {/* Features / Ritual Steps */}
                  <div className="mt-4 pt-3.5 border-t border-[#F0E8DC]">
                    <span className="block text-[9.5px] font-sans font-semibold tracking-[0.2em] uppercase text-champagne-dark mb-2.5">
                      RITUAL INCLUDES:
                    </span>
                    <div className="grid grid-cols-2 gap-2">
                      {selectedService.features.map((feat) => (
                        <div key={feat} className="flex items-center gap-1.5 text-[11px] font-sans text-rich-black/80 font-light">
                          <CheckCircle2 className="w-3.5 h-3.5 text-champagne-dark shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action CTA Buttons */}
                  <div className="mt-5 pt-4 border-t border-[#F0E8DC] flex flex-col gap-2.5">
                    <button
                      type="button"
                      onClick={() => onSelectService(selectedService.name)}
                      onMouseEnter={() => setCursorState('book')}
                      onMouseLeave={() => setCursorState('default')}
                      className="w-full py-3.5 bg-rich-black hover:bg-[#222222] text-white font-sans text-xs font-semibold tracking-[0.18em] uppercase rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>BOOK THIS APPOINTMENT</span>
                      <ArrowRight className="w-3.5 h-3.5 text-champagne" />
                    </button>

                    <a
                      href={getWhatsAppLink(`Hi ANUSALOON, I would like to book a consultation for ${selectedService.name} (${selectedService.priceFrom}). Please share available slots.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2.5 bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#128C7E] font-sans text-[11px] font-semibold tracking-wider uppercase rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                      <span>INQUIRE ON WHATSAPP</span>
                    </a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>

        {/* Mobile / Tablet View: Clean Accordion without Gaps */}
        <div className="lg:hidden border-t border-[#E8E1D3] divide-y divide-[#E8E1D3]">
          {filteredServices.map((service) => {
            const isExpanded = expandedMobileId === service.id;

            return (
              <div key={service.id} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleMobileAccordion(service.id)}
                  className="w-full flex items-center justify-between text-left group"
                >
                  <div className="flex items-baseline gap-3">
                    <span className="font-serif text-sm text-champagne-dark">
                      {service.number}
                    </span>
                    <div>
                      <span className="font-serif text-xl sm:text-2xl text-rich-black font-light block">
                        {service.name}
                      </span>
                      <span className="font-sans text-[10px] text-rich-black/50 uppercase tracking-wider">
                        {service.category}
                      </span>
                    </div>
                  </div>

                  <div className="text-right">
                    <span className="block font-serif text-sm text-rich-black font-medium">
                      {service.priceFrom}
                    </span>
                    <span className="text-[10px] text-champagne-dark uppercase font-semibold">
                      {isExpanded ? 'Hide —' : 'Details +'}
                    </span>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden pt-4"
                    >
                      <div className="aspect-[16/9] w-full rounded-lg overflow-hidden mb-3">
                        <img
                          src={service.image}
                          alt={service.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="font-serif italic text-sm text-rich-black/85 mb-1.5">
                        {service.tagline}
                      </p>
                      <p className="font-sans text-xs text-rich-black/70 font-light leading-relaxed mb-3">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {service.features.map((feat) => (
                          <span
                            key={feat}
                            className="inline-flex items-center gap-1 px-2.5 py-1 bg-white border border-[#E2D8C7] rounded-full text-[10px] font-sans text-rich-black/80"
                          >
                            <Sparkles className="w-2.5 h-2.5 text-champagne-dark" />
                            {feat}
                          </span>
                        ))}
                      </div>
                      <button
                        type="button"
                        onClick={() => onSelectService(service.name)}
                        className="w-full py-3 bg-rich-black text-ivory rounded-full font-sans text-xs tracking-widest uppercase font-semibold flex items-center justify-center gap-2"
                      >
                        <span>BOOK {service.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-champagne" />
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
