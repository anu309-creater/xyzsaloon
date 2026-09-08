import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, X, ArrowRight, MessageCircle, Sparkles } from 'lucide-react';
import { useCursor } from '../../context/CursorContext';

interface StudioSanctuaryProps {
  onOpenBooking?: () => void;
}

export const StudioSanctuary: React.FC<StudioSanctuaryProps> = ({ onOpenBooking }) => {
  const { setCursorState } = useCursor();
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const contact = phoneNumber.trim() || 'Guest';
    const message = encodeURIComponent(
      `Hello BLUSH BLOOM! I would like to book an appointment. My contact number is: ${contact}`
    );
    // Open WhatsApp directly with the entered contact info
    window.open(`https://api.whatsapp.com/send?phone=923001234567&text=${message}`, '_blank');
  };

  return (
    <section
      id="atelier-sanctuary"
      className="relative py-18 sm:py-22 lg:py-28 bg-[#F4EFE6] text-rich-black overflow-hidden border-b border-[#E8E1D3]"
    >
      {/* 3D Atmospheric Ambient Glows */}
      <div className="absolute top-1/4 -left-24 w-[450px] h-[450px] bg-champagne/[0.12] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#E8DDD0]/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Grand Architectural Arch with 3D Rotating Badge & Video Play */}
          <div className="lg:col-span-5 relative flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-[390px] sm:max-w-[430px]"
            >
              {/* 3D Rotating Circular Fashion Atelier Seal - Perfectly Anchored on Arch Shoulder */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="absolute top-2 -left-3 sm:top-3 sm:-left-4 z-30 pointer-events-none select-none"
              >
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white/92 backdrop-blur-md border border-[#DFD3C2] shadow-[0_12px_32px_rgba(0,0,0,0.12)] flex items-center justify-center">
                  {/* Rotating Circular Text */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
                    className="w-full h-full p-1"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                      <path
                        id="circleSeal"
                        d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                        fill="none"
                      />
                      <text className="font-sans text-[7.6px] uppercase font-semibold tracking-[0.24em] fill-rich-black">
                        <textPath href="#circleSeal" startOffset="0%">
                          ✦ WE CREATE BEAUTY &amp; WELL-BEING ✦ BLUSH BLOOM
                        </textPath>
                      </text>
                    </svg>
                  </motion.div>

                  {/* Center Star Badge */}
                  <div className="absolute inset-0 m-auto w-9 h-9 rounded-full bg-[#FAF7F2] border border-champagne/40 shadow-xs flex items-center justify-center">
                    <Sparkles className="w-3.5 h-3.5 text-champagne-dark" />
                  </div>
                </div>
              </motion.div>

              {/* The Grand Arched Dome Frame with 3D Depth & User's Main Sanctuary Video */}
              <div className="relative overflow-hidden rounded-t-[190px] sm:rounded-t-[230px] aspect-[3/4.3] bg-white border border-[#DFD3C2] shadow-[0_25px_60px_rgba(0,0,0,0.08)] p-2.5 group">
                <div className="w-full h-full overflow-hidden rounded-t-[180px] sm:rounded-t-[220px] relative bg-[#1a1a1a]">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    className="w-full h-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                  >
                    <source src="/videos/sanctuary-arch-main.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Clean Cinematic Ambient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />

                  {/* Bottom Image Tag */}
                  <div className="absolute bottom-5 left-5 text-white/95 pointer-events-none">
                    <span className="font-sans text-[10px] tracking-[0.22em] uppercase font-semibold drop-shadow-md">
                      ATELIER SANCTUARY
                    </span>
                    <span className="block font-serif italic text-xs text-champagne-light drop-shadow-md">
                      Gulberg Main Boulevard
                    </span>
                  </div>

                  {/* 3D Floating Play Video Button */}
                  <button
                    type="button"
                    onClick={() => setIsVideoOpen(true)}
                    onMouseEnter={() => setCursorState('view')}
                    onMouseLeave={() => setCursorState('default')}
                    aria-label="Play Atelier Film"
                    className="group/btn absolute bottom-5 right-5 sm:bottom-6 sm:right-6 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white/90 hover:bg-white backdrop-blur-md border border-white flex items-center justify-center text-rich-black shadow-[0_10px_35px_rgba(0,0,0,0.22)] transition-all duration-300 hover:scale-110 active:scale-95 cursor-pointer"
                  >
                    <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-rich-black text-rich-black ml-0.5 transition-transform duration-300 group-hover/btn:scale-110" />
                    {/* Animated Pulsing Ring */}
                    <span className="absolute inset-0 rounded-full border border-champagne animate-ping opacity-35 pointer-events-none" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Title, 2 Proper Luxury Cards with Videos, and WhatsApp Booking Field */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Section Heading */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-8 sm:mb-10"
            >
              <div className="flex items-center gap-2 mb-2.5">
                <span className="font-serif italic text-champagne-dark text-sm sm:text-base">02</span>
                <span className="w-6 h-px bg-champagne-dark/40" />
                <span className="font-sans text-[10px] font-semibold tracking-[0.24em] uppercase text-rich-black/70">
                  SANCTUARY EXPERIENCE
                </span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[40px] font-light leading-[1.12] tracking-tight uppercase text-rich-black">
                BEAUTY ATELIER IN GULBERG &ldquo;BLUSH BLOOM&rdquo;
              </h2>
            </motion.div>

            {/* 2 Proper Luxury 3D Cards with User's Videos */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              
              {/* Card 1: Head Spa & Sanctuary Video */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                whileHover={{ y: -6 }}
                className="group rounded-xl bg-white border border-[#DFD3C2] p-4 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(184,155,94,0.18)] hover:border-champagne transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between mb-3 text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-champagne-dark">
                    <span>01 / SANCTUARY SUITES</span>
                    <span className="text-rich-black/40">✦ RELAX</span>
                  </div>

                  {/* Card Framed Video */}
                  <div className="overflow-hidden aspect-[4/2.9] rounded-lg bg-[#1a1a1a] relative">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    >
                      <source src="/videos/sanctuary-suite-video.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content */}
                  <h3 className="mt-4 font-serif text-lg text-rich-black font-normal leading-snug group-hover:text-champagne-dark transition-colors duration-300">
                    Japanese Head Spa &amp; Sensory Suites
                  </h3>
                  <p className="mt-2 font-sans text-xs text-rich-black/70 font-light leading-relaxed">
                    A restorative sensory gift for your mind and scalp. Enjoy botanical water therapy, herbal scalp scrubs, and acoustic stillness in completely private suites.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0E8DC] flex items-center justify-between text-[10px] font-sans font-semibold tracking-[0.16em] uppercase text-rich-black group-hover:text-champagne-dark transition-colors">
                  <span>Explore Ritual</span>
                  <ArrowRight className="w-3 h-3 text-champagne-dark transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>

              {/* Card 2: Bespoke Artisanal Haircut Video */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.25 }}
                whileHover={{ y: -6 }}
                className="group rounded-xl bg-white border border-[#DFD3C2] p-4 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_18px_40px_rgba(184,155,94,0.18)] hover:border-champagne transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Bar */}
                  <div className="flex items-center justify-between mb-3 text-[9.5px] font-sans font-semibold tracking-[0.18em] uppercase text-champagne-dark">
                    <span>02 / BESPOKE CRAFT</span>
                    <span className="text-rich-black/40">✦ TAILORED</span>
                  </div>

                  {/* Card Framed Video */}
                  <div className="overflow-hidden aspect-[4/2.9] rounded-lg bg-[#1a1a1a] relative">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
                    >
                      <source src="/videos/stylist-precision-craft.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Card Content */}
                  <h3 className="mt-4 font-serif text-lg text-rich-black font-normal leading-snug group-hover:text-champagne-dark transition-colors duration-300">
                    Facial Geometry &amp; Hair Architecture
                  </h3>
                  <p className="mt-2 font-sans text-xs text-rich-black/70 font-light leading-relaxed">
                    Everyone is unique, and so should their styling be. Our master stylists examine bone structure and hair texture to sculpt cuts and balayage tones that elevate you.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#F0E8DC] flex items-center justify-between text-[10px] font-sans font-semibold tracking-[0.16em] uppercase text-rich-black group-hover:text-champagne-dark transition-colors">
                  <span>View Techniques</span>
                  <ArrowRight className="w-3 h-3 text-champagne-dark transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.div>

            </div>

            {/* Bottom Action: Interactive WhatsApp Booking Bar (No Static Phone Numbers) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-8 sm:mt-10 pt-6 sm:pt-7 border-t border-[#DFD3C2]"
            >
              <div className="bg-white/80 backdrop-blur-md rounded-2xl p-4 sm:p-5 border border-[#DFD3C2] shadow-xs">
                <div className="flex items-center gap-2 mb-2">
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span className="font-sans text-[10px] font-semibold tracking-[0.2em] uppercase text-rich-black/70">
                    INSTANT WHATSAPP BOOKING
                  </span>
                </div>

                {/* Form Input + WhatsApp Button */}
                <form
                  onSubmit={handleWhatsAppSubmit}
                  className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5"
                >
                  <input
                    type="text"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="Enter your phone or WhatsApp number..."
                    className="flex-1 px-4 py-3 rounded-full bg-white border border-[#DFD3C2] text-xs font-sans text-rich-black placeholder-rich-black/40 focus:outline-none focus:border-champagne-dark focus:ring-1 focus:ring-champagne-dark transition-all shadow-xs"
                  />

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#8C6D46] hover:bg-[#745834] text-white font-sans text-xs font-semibold tracking-[0.16em] uppercase transition-all duration-300 rounded-full shadow-md hover:shadow-lg active:scale-98 shrink-0"
                  >
                    <span>BOOK VIA WHATSAPP</span>
                    <ArrowRight className="w-3.5 h-3.5 text-champagne-light" />
                  </button>
                </form>

                {/* Secondary Option: Open Booking Modal Form */}
                <div className="mt-3 flex items-center justify-between text-[11px] font-sans text-rich-black/60 pt-2 border-t border-[#EFE8DD]">
                  <span>Prefer full online reservation form?</span>
                  <button
                    type="button"
                    onClick={onOpenBooking}
                    className="font-medium text-champagne-dark hover:underline uppercase tracking-wider text-[10px]"
                  >
                    Open Booking Form →
                  </button>
                </div>
              </div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Video Modal (When Play Button Clicked) */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsVideoOpen(false)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-rich-black rounded-xl overflow-hidden border border-champagne/30 shadow-2xl"
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10 text-ivory">
                <span className="font-serif italic text-lg text-champagne">
                  BLUSH BLOOM — The Atelier Film
                </span>
                <button
                  type="button"
                  onClick={() => setIsVideoOpen(false)}
                  className="p-1.5 rounded-full hover:bg-white/10 text-white transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Ambient Video Player */}
              <div className="aspect-video w-full bg-black relative flex items-center justify-center">
                <video
                  autoPlay
                  controls
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source
                    src="/videos/sanctuary-arch-main.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
