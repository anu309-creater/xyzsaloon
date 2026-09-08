import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, FileText } from 'lucide-react';
import { brandConfig } from '../../data/brandConfig';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [type, onClose]);

  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[9996] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-dark/80 backdrop-blur-sm"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 w-full max-w-2xl bg-dark text-ivory p-6 sm:p-10 border border-dark-border shadow-2xl my-8 max-h-[85vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b border-dark-border pb-4 mb-6">
            <div className="flex items-center gap-3">
              {isPrivacy ? (
                <Shield className="w-5 h-5 text-champagne" />
              ) : (
                <FileText className="w-5 h-5 text-champagne" />
              )}
              <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-light">
                {isPrivacy ? 'PRIVACY POLICY' : 'TERMS OF SERVICE'}
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 text-sand/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto pr-4 space-y-4 text-xs font-sans text-sand/80 font-light leading-relaxed">
            {isPrivacy ? (
              <>
                <p>
                  At <strong className="text-ivory">{brandConfig.name}</strong>, we respect your privacy and are committed to safeguarding the personal information you share when requesting appointments, purchasing atelier memberships, or contacting our concierge.
                </p>
                <h4 className="font-serif text-base text-ivory pt-2">1. Information We Collect</h4>
                <p>
                  When you submit an appointment request or message our concierge via WhatsApp, we collect basic contact details including your full name, telephone number, email address, and service preferences.
                </p>
                <h4 className="font-serif text-base text-ivory pt-2">2. How We Use Your Information</h4>
                <p>
                  Your information is utilized solely to schedule and confirm your salon consultations, provide personalized beauty recommendations, and maintain service history for future appointments.
                </p>
                <h4 className="font-serif text-base text-ivory pt-2">3. Non-Disclosure Guarantee</h4>
                <p>
                  We never sell, rent, or trade your personal data to external advertisers. All client profiles remain strictly confidential within our atelier salon management records.
                </p>
                <h4 className="font-serif text-base text-ivory pt-2">4. Inquiries</h4>
                <p>
                  For privacy queries or requests to remove your booking history, please contact our studio directly at <a href={`mailto:${brandConfig.email}`} className="text-champagne underline">{brandConfig.email}</a>.
                </p>
              </>
            ) : (
              <>
                <p>
                  Welcome to <strong className="text-ivory">{brandConfig.name}</strong>. By scheduling an appointment or utilizing our beauty services at {brandConfig.address}, {brandConfig.city}, you agree to our studio policies outlined below.
                </p>
                <h4 className="font-serif text-base text-ivory pt-2">1. Booking &amp; Appointments</h4>
                <p>
                  Appointments are subject to stylist availability. We encourage booking at least 48 hours in advance for balayage, dimensional hair color, and bridal treatments.
                </p>
                <h4 className="font-serif text-base text-ivory pt-2">2. Cancellation Policy</h4>
                <p>
                  We understand schedules change. We kindly request at least 24 hours prior notice for cancellations or rescheduling to permit other guests on our waitlist to be accommodated.
                </p>
                <h4 className="font-serif text-base text-ivory pt-2">3. Consultations &amp; Chemical Services</h4>
                <p>
                  Prior to any significant chemical or lifting service, our master colorists perform a brief strand diagnostic to ensure optimal scalp comfort and hair integrity.
                </p>
                <h4 className="font-serif text-base text-ivory pt-2">4. Studio Etiquette</h4>
                <p>
                  To preserve our calm sanctuary environment, please keep mobile devices on silent mode while in the styling and head spa treatment suites.
                </p>
              </>
            )}
          </div>

          {/* Footer Close */}
          <div className="mt-6 pt-4 border-t border-dark-border flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-6 py-2.5 bg-champagne text-dark font-sans text-xs font-semibold tracking-widest uppercase hover:bg-champagne-light transition-all"
            >
              UNDERSTOOD
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

