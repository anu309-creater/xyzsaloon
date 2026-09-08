import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, MessageCircle, Send } from 'lucide-react';
import { getWhatsAppLink } from '../../data/brandConfig';
import type { BookingFormData } from '../../types';

const serviceOptions = [
  'Haircut & Styling',
  'Hair Color',
  "Men's Grooming",
  'Makeup',
  'Bridal Makeup',
  'Facial',
  'Nails',
  'Spa',
  'Other',
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    time: '11:30 AM',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedService) {
      const match = serviceOptions.find(
        (o) =>
          o.toLowerCase().includes(preselectedService.toLowerCase()) ||
          preselectedService.toLowerCase().includes(o.toLowerCase())
      );
      if (match) setFormData((prev) => ({ ...prev, service: match }));
    }
  }, [preselectedService, isOpen]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required.';
    if (!formData.service) errs.service = 'Service is required.';
    if (!formData.date) errs.date = 'Date is required.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 700);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSuccess(false);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9995] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-dark/80 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-lg bg-dark text-ivory p-6 sm:p-8 border border-dark-border shadow-2xl my-8"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute top-6 right-6 p-2 text-sand/60 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              <div className="py-8 text-center space-y-6">
                <div className="w-14 h-14 mx-auto rounded-full bg-champagne/15 border border-champagne flex items-center justify-center text-champagne">
                  <CheckCircle className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="font-serif text-3xl text-ivory font-light">
                    REQUEST CONFIRMED
                  </h3>
                  <p className="font-sans text-xs tracking-widest uppercase text-champagne mt-2">
                    THANK YOU, {formData.fullName}.
                  </p>
                </div>
                <p className="font-sans text-xs text-sand/70 leading-relaxed max-w-sm mx-auto">
                  Our concierge has logged your request for {formData.service} on {formData.date}. We will connect via WhatsApp shortly.
                </p>
                <div className="pt-2 flex flex-col gap-3">
                  <a
                    href={getWhatsAppLink(
                      `Hi BLUSH BLOOM, I just requested an appointment for ${formData.service} on ${formData.date}. Name: ${formData.fullName}`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-champagne text-dark font-sans text-xs font-semibold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-champagne-light transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>NOTIFY VIA WHATSAPP</span>
                  </a>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="w-full py-3 border border-dark-border text-xs text-sand hover:text-white uppercase tracking-wider"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="pr-8">
                  <span className="text-[10px] font-sans font-semibold tracking-widest uppercase text-champagne">
                    ATELIER BOOKING
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-ivory font-light mt-1">
                    RESERVE YOUR SERVICE
                  </h3>
                  <p className="font-sans text-xs text-sand/60 mt-1">
                    Complete this quick form to reserve your chair at BLUSH BLOOM.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-[10px] font-sans tracking-widest uppercase text-sand/80 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={formData.fullName}
                      onChange={(e) =>
                        setFormData({ ...formData, fullName: e.target.value })
                      }
                      className="w-full bg-dark-surface border border-dark-border px-3.5 py-2.5 text-xs text-ivory focus:outline-none focus:border-champagne"
                    />
                    {errors.fullName && (
                      <p className="text-[10px] text-red-400 mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-sans tracking-widest uppercase text-sand/80 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+92 300 1234567"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full bg-dark-surface border border-dark-border px-3.5 py-2.5 text-xs text-ivory focus:outline-none focus:border-champagne"
                    />
                    {errors.phone && (
                      <p className="text-[10px] text-red-400 mt-1">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-[10px] font-sans tracking-widest uppercase text-sand/80 mb-1">
                      Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) =>
                        setFormData({ ...formData, service: e.target.value })
                      }
                      className="w-full bg-dark-surface border border-dark-border px-3.5 py-2.5 text-xs text-ivory focus:outline-none focus:border-champagne"
                    >
                      <option value="">Select Service...</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p className="text-[10px] text-red-400 mt-1">{errors.service}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-sans tracking-widest uppercase text-sand/80 mb-1">
                        Date *
                      </label>
                      <input
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={(e) =>
                          setFormData({ ...formData, date: e.target.value })
                        }
                        className="w-full bg-dark-surface border border-dark-border px-3.5 py-2.5 text-xs text-ivory focus:outline-none focus:border-champagne"
                      />
                      {errors.date && (
                        <p className="text-[10px] text-red-400 mt-1">{errors.date}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-[10px] font-sans tracking-widest uppercase text-sand/80 mb-1">
                        Time Slot
                      </label>
                      <select
                        value={formData.time}
                        onChange={(e) =>
                          setFormData({ ...formData, time: e.target.value })
                        }
                        className="w-full bg-dark-surface border border-dark-border px-3.5 py-2.5 text-xs text-ivory focus:outline-none focus:border-champagne"
                      >
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:30 AM">11:30 AM</option>
                        <option value="01:00 PM">01:00 PM</option>
                        <option value="02:30 PM">02:30 PM</option>
                        <option value="04:00 PM">04:00 PM</option>
                        <option value="05:30 PM">05:30 PM</option>
                        <option value="07:00 PM">07:00 PM</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-sans tracking-widest uppercase text-sand/80 mb-1">
                      Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Special requests or stylist preferences..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full bg-dark-surface border border-dark-border px-3.5 py-2.5 text-xs text-ivory focus:outline-none focus:border-champagne resize-none"
                    />
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-champagne hover:bg-champagne-light text-dark font-sans text-xs font-semibold tracking-[0.2em] uppercase transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    <span>{isSubmitting ? 'CONFIRMING...' : 'CONFIRM RESERVATION'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

