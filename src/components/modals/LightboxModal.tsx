import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import type { GalleryItem } from '../../types';

interface LightboxModalProps {
  item: GalleryItem | null;
  onClose: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({ item, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (item) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [item, onClose]);

  return (
    <AnimatePresence>
      {item && (
        <div className="fixed inset-0 z-[9998] flex items-center justify-center p-4 sm:p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-dark/90 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close image lightbox"
              className="absolute -top-12 right-0 p-2 text-ivory/80 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Lightbox Image */}
            <div className="relative overflow-hidden bg-dark shadow-2xl border border-dark-border max-h-[80vh]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto max-h-[75vh] object-contain"
              />
              <div className="p-4 bg-dark border-t border-dark-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-sans tracking-widest uppercase text-champagne">
                    {item.tag}
                  </span>
                  <h4 className="font-serif text-xl text-ivory font-light">
                    {item.title}
                  </h4>
                </div>
                <span className="text-[11px] font-sans tracking-widest text-sand/60 uppercase">
                  BLUSH BLOOM ATELIER ARCHIVE
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

