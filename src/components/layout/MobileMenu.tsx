import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, MessageCircle, ArrowRight } from 'lucide-react';
import { brandConfig, getWhatsAppLink } from '../../data/brandConfig';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  onOpenBooking,
}) => {
  const menuItems = [
    { label: 'HOME', href: '#hero' },
    { label: 'SERVICES', href: '#services' },
    { label: 'ABOUT', href: '#about' },
    { label: 'TRANSFORMATION', href: '#transformation' },
    { label: 'GALLERY', href: '#gallery' },
    { label: 'EXPERIENCE', href: '#experience' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    onClose();
    const element = document.querySelector(href);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  };

  const handleBookClick = () => {
    onClose();
    setTimeout(() => {
      onOpenBooking();
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: '0%' }}
          exit={{ opacity: 0, y: '-100%' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[9990] bg-dark text-ivory flex flex-col justify-between px-6 py-8 sm:px-12 sm:py-12 overflow-y-auto"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between border-b border-dark-border/60 pb-6">
            <span className="font-serif text-2xl tracking-[0.2em] font-light text-ivory">
              BLUSH BLOOM
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close navigation menu"
              className="p-2 text-ivory/80 hover:text-white border border-ivory/20 rounded-full transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col justify-center my-auto py-8 space-y-4 sm:space-y-6">
            {menuItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              >
                <button
                  type="button"
                  onClick={() => handleLinkClick(item.href)}
                  className="group flex items-center justify-between w-full text-left font-serif text-3xl sm:text-4xl text-ivory/80 hover:text-white transition-colors"
                >
                  <span className="tracking-wide group-hover:translate-x-2 transition-transform duration-300">
                    {item.label}
                  </span>
                  <span className="text-xs font-sans font-light tracking-widest text-champagne opacity-0 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </span>
                </button>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.45 }}
              className="pt-4"
            >
              <button
                type="button"
                onClick={handleBookClick}
                className="w-full flex items-center justify-between py-4 px-6 bg-champagne text-dark font-sans text-xs font-semibold tracking-widest uppercase hover:bg-champagne-light transition-all"
              >
                <span>BOOK APPOINTMENT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* Bottom WhatsApp & Contact */}
          <div className="pt-6 border-t border-dark-border/60 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-sans tracking-widest text-champagne hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WHATSAPP US →</span>
            </a>
            <p className="font-sans text-xs text-sand/60">
              {brandConfig.address}, {brandConfig.city}
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

