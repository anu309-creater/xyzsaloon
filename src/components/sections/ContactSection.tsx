import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, ExternalLink, Sparkles, Navigation } from 'lucide-react';
import { brandConfig, getWhatsAppLink } from '../../data/brandConfig';
import { SectionHeading } from '../common/SectionHeading';
import { useCursor } from '../../context/CursorContext';
import { MagneticButton } from '../common/MagneticButton';

export const ContactSection: React.FC = () => {
  const { setCursorState } = useCursor();

  // 3D Entrance Card
  const renderAtelierEntranceCard = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="relative rounded-2xl border border-[#DFD3C2] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group"
    >
      <div className="w-full aspect-[16/10] overflow-hidden relative">
        <img
          src="/images/contact-atelier-entrance.jpg"
          alt="BLUSH BLOOM Grand Atelier Architecture & Reception in Gulberg"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-106"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Top Badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2.5 sm:px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[8.5px] sm:text-[9.5px] font-sans font-semibold tracking-[0.16em] uppercase text-champagne-dark shadow-xs flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-champagne-dark shrink-0" />
          <span>STUDIO ARCHITECTURE &amp; RECEPTION</span>
        </div>

        {/* Bottom Overlay Info */}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-rich-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 shadow-md">
          <div>
            <span className="text-[8.5px] sm:text-[9.5px] font-sans font-bold tracking-widest uppercase text-champagne-dark block">
              FLAGSHIP ATELIER
            </span>
            <h4 className="font-serif text-base sm:text-lg text-rich-black font-normal leading-tight">
              Main Boulevard, Gulberg II
            </h4>
            <p className="font-sans text-[10px] sm:text-[11px] text-rich-black/60">
              Adjacent to MM Alam Road, Lahore
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Gulberg+Main+Boulevard+Lahore"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3.5 sm:px-4 py-1.5 sm:py-2 bg-rich-black text-ivory text-[9px] sm:text-[10px] font-sans font-semibold tracking-widest uppercase hover:bg-champagne-dark transition-colors rounded-full flex items-center gap-1.5 shrink-0 self-end sm:self-auto shadow-xs"
          >
            <Navigation className="w-3 h-3 text-champagne" />
            <span>DIRECTIONS</span>
          </a>
        </div>
      </div>
    </motion.div>
  );

  // 3D VIP Suite Card
  const renderAtelierVipSuiteCard = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.1 }}
      whileHover={{ y: -5, scale: 1.01 }}
      className="relative rounded-2xl border border-[#DFD3C2] overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 group"
    >
      <div className="w-full aspect-[16/10] overflow-hidden relative">
        <img
          src="/images/contact-vip-suite.jpg"
          alt="BLUSH BLOOM Private VIP Styling Suite & Valet Concierge"
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-106"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Top Badge */}
        <div className="absolute top-3 sm:top-4 left-3 sm:left-4 px-2.5 sm:px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[8.5px] sm:text-[9.5px] font-sans font-semibold tracking-[0.16em] uppercase text-champagne-dark shadow-xs flex items-center gap-1.5">
          <Sparkles className="w-3 h-3 text-champagne-dark shrink-0" />
          <span>PRIVATE VIP SUITE &amp; VALET</span>
        </div>

        {/* Bottom Overlay Detail */}
        <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-xl border border-rich-black/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3 shadow-md">
          <div>
            <span className="text-[8.5px] sm:text-[9.5px] font-sans font-bold tracking-widest uppercase text-champagne-dark block">
              GUEST AMENITIES
            </span>
            <h4 className="font-serif text-base sm:text-lg text-rich-black font-normal leading-tight">
              Complimentary Valet Service
            </h4>
            <p className="font-sans text-[10px] sm:text-[11px] text-rich-black/60">
              Private acoustic chambers &amp; herbal refreshment
            </p>
          </div>
          <a
            href="#booking"
            className="px-3.5 sm:px-4 py-1.5 sm:py-2 bg-rich-black text-ivory text-[9px] sm:text-[10px] font-sans font-semibold tracking-widest uppercase hover:bg-champagne-dark transition-colors rounded-full shrink-0 self-end sm:self-auto shadow-xs"
          >
            <span>BOOK VISIT</span>
          </a>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section id="contact" className="py-14 sm:py-20 lg:py-28 bg-ivory text-rich-black overflow-hidden border-t border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          
          {/* Main Column */}
          <div className="lg:col-span-6 space-y-6 sm:space-y-8">
            <SectionHeading
              label="VISIT THE ATELIER"
              title="SANCTUARY IN THE HEART OF GULBERG."
              titleClassName="text-2xl sm:text-4xl lg:text-5xl font-light tracking-tight leading-[1.12] text-balance"
              subtitle="Step into our serene studio where natural limestone, travertine marble, and gentle acoustic soundscapes create an oasis from the city."
            />

            {/* Mobile Visual Showcase (displayed directly below header for immediate mobile impact) */}
            <div className="block lg:hidden">
              {renderAtelierEntranceCard()}
            </div>

            {/* Structured Contact Tiles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4 pt-1">
              
              {/* Studio Address */}
              <div className="bg-[#F6F1EA] hover:bg-[#F2ECE3] border border-[#E5DBCA] rounded-xl p-4 sm:p-5 transition-all duration-300">
                <div className="flex items-center gap-2 text-champagne-dark mb-2">
                  <MapPin className="w-3.5 h-3.5 text-champagne-dark" />
                  <span className="text-[9.5px] font-sans font-semibold tracking-widest uppercase text-rich-black">
                    STUDIO ADDRESS
                  </span>
                </div>
                <p className="font-serif text-base sm:text-lg text-rich-black font-light leading-snug">
                  {brandConfig.address}<br />
                  {brandConfig.city}, {brandConfig.country}
                </p>
                <p className="text-[11px] font-sans text-rich-black/55 mt-2">
                  Valet parking available for all atelier guests.
                </p>
              </div>

              {/* Operating Hours */}
              <div className="bg-[#F6F1EA] hover:bg-[#F2ECE3] border border-[#E5DBCA] rounded-xl p-4 sm:p-5 transition-all duration-300">
                <div className="flex items-center gap-2 text-champagne-dark mb-2">
                  <Clock className="w-3.5 h-3.5 text-champagne-dark" />
                  <span className="text-[9.5px] font-sans font-semibold tracking-widest uppercase text-rich-black">
                    OPERATING HOURS
                  </span>
                </div>
                <div className="font-serif text-base sm:text-lg text-rich-black font-light space-y-1.5">
                  <div className="flex justify-between items-baseline gap-2">
                    <span className="font-sans text-[11px] uppercase text-rich-black/60">Mon — Sat</span>
                    <span className="font-serif text-sm sm:text-base">10:00 AM — 9:00 PM</span>
                  </div>
                  <div className="flex justify-between items-baseline gap-2 pt-1 border-t border-rich-black/5">
                    <span className="font-sans text-[11px] uppercase text-rich-black/60">Sunday</span>
                    <span className="font-serif text-sm sm:text-base">12:00 PM — 8:00 PM</span>
                  </div>
                </div>
              </div>

              {/* Direct Telephone */}
              <div className="bg-[#F6F1EA] hover:bg-[#F2ECE3] border border-[#E5DBCA] rounded-xl p-4 sm:p-5 transition-all duration-300">
                <div className="flex items-center gap-2 text-champagne-dark mb-2">
                  <Phone className="w-3.5 h-3.5 text-champagne-dark" />
                  <span className="text-[9.5px] font-sans font-semibold tracking-widest uppercase text-rich-black">
                    TELEPHONE
                  </span>
                </div>
                <a
                  href={`tel:${brandConfig.phoneRaw}`}
                  className="inline-block font-serif text-base sm:text-lg text-rich-black font-light hover:text-champagne-dark transition-colors"
                >
                  {brandConfig.phone}
                </a>
                <p className="text-[11px] font-sans text-rich-black/55 mt-2">
                  Direct concierge desk line.
                </p>
              </div>

              {/* Inquiries & Press */}
              <div className="bg-[#F6F1EA] hover:bg-[#F2ECE3] border border-[#E5DBCA] rounded-xl p-4 sm:p-5 transition-all duration-300">
                <div className="flex items-center gap-2 text-champagne-dark mb-2">
                  <Mail className="w-3.5 h-3.5 text-champagne-dark" />
                  <span className="text-[9.5px] font-sans font-semibold tracking-widest uppercase text-rich-black">
                    INQUIRIES &amp; PRESS
                  </span>
                </div>
                <a
                  href={`mailto:${brandConfig.email}`}
                  className="inline-block font-serif text-sm sm:text-base text-rich-black font-light hover:text-champagne-dark transition-colors break-all"
                >
                  {brandConfig.email}
                </a>
                <p className="text-[11px] font-sans text-rich-black/55 mt-2">
                  Private events &amp; bridal suites.
                </p>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <div className="pt-1">
              <MagneticButton strength={0.2}>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorState('book')}
                  onMouseLeave={() => setCursorState('default')}
                  className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-5 sm:px-6 py-3 border border-[#25D366]/40 bg-[#25D366]/10 text-[#128C7E] hover:bg-[#25D366]/20 font-sans text-[11px] sm:text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                  <span>START A WHATSAPP CHAT</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>
              </MagneticButton>
            </div>

            {/* Mobile Second Visual Card (VIP Suite) */}
            <div className="block lg:hidden pt-2">
              {renderAtelierVipSuiteCard()}
            </div>
          </div>

          {/* Desktop Column: 2 Stacked 3D Animated Cards */}
          <div className="hidden lg:block lg:col-span-6 space-y-6">
            {renderAtelierEntranceCard()}
            {renderAtelierVipSuiteCard()}
          </div>

        </div>
      </div>
    </section>
  );
};

