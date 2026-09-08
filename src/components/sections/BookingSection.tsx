import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, CheckCircle, Calendar, Clock, Sparkles, Send } from 'lucide-react';
import { getWhatsAppLink } from '../../data/brandConfig';
import type { BookingFormData } from '../../types';
import { useCursor } from '../../context/CursorContext';
import { MagneticButton } from '../common/MagneticButton';

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

const timeSlots = [
  '10:00 AM',
  '11:30 AM',
  '01:00 PM',
  '02:30 PM',
  '04:00 PM',
  '05:30 PM',
  '07:00 PM',
];

interface BookingSectionProps {
  preselectedService?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ preselectedService }) => {
  const { setCursorState } = useCursor();

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
  const [submittedData, setSubmittedData] = useState<BookingFormData | null>(null);

  // Sync preselected service from other sections
  useEffect(() => {
    if (preselectedService) {
      const matched = serviceOptions.find(
        (opt) =>
          opt.toLowerCase().includes(preselectedService.toLowerCase()) ||
          preselectedService.toLowerCase().includes(opt.toLowerCase())
      );
      if (matched) {
        setFormData((prev) => ({ ...prev, service: matched }));
      }
    }
  }, [preselectedService]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required.';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone Number is required.';
    } else if (formData.phone.replace(/\D/g, '').length < 7) {
      errs.phone = 'Please enter a valid phone number.';
    }
    if (!formData.service) errs.service = 'Please select a service.';
    if (!formData.date) errs.date = 'Preferred date is required.';

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
      setSubmittedData({ ...formData });
    }, 800);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setSubmittedData(null);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      service: '',
      date: '',
      time: '11:30 AM',
      notes: '',
    });
  };

  const formattedWhatsAppUrl = submittedData
    ? getWhatsAppLink(
        `Hi BLUSH BLOOM, I just submitted an appointment request for ${submittedData.service} on ${submittedData.date} at ${submittedData.time}. Name: ${submittedData.fullName}`
      )
    : getWhatsAppLink();

  return (
    <section
      id="booking"
      className="py-24 sm:py-32 lg:py-40 bg-[#FAF5F0] text-rich-black relative overflow-hidden border-t border-[#E8E1D3]"
    >
      {/* Soft luxury blush ambient light */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] bg-[#F4E6E1]/55 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-champagne/[0.08] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">

          {/* Left Column: Major Conversion Pitch & WhatsApp CTA */}
          <div className="lg:col-span-5 space-y-8">
            <div className="flex items-center gap-3">
              <span className="w-8 h-[1px] bg-champagne-dark" />
              <span className="text-[11px] font-sans font-semibold tracking-widest uppercase text-champagne-dark">
                RESERVE YOUR APPOINTMENT
              </span>
            </div>

            <h2 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-light tracking-tight leading-[0.95] text-rich-black uppercase">
              READY FOR
              <span className="block italic text-champagne-dark mt-2 font-light normal-case">
                Your next look?
              </span>
            </h2>

            <p className="font-sans text-base sm:text-lg text-rich-black/75 font-light leading-relaxed max-w-md">
              Your next transformation starts here. Reserve a private consultation with our master stylists and discover beauty created exclusively for you.
            </p>

            <div className="pt-6 border-t border-[#E8E1D3] space-y-4">
              <p className="font-sans text-xs tracking-widest uppercase text-rich-black/50 font-semibold">
                NEED IMMEDIATE ASSISTANCE?
              </p>
              <MagneticButton strength={0.25}>
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setCursorState('book')}
                  onMouseLeave={() => setCursorState('default')}
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#25D366]/12 hover:bg-[#25D366]/20 border border-[#25D366]/35 text-[#128C7E] font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 rounded-full shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#25D366]" />
                  <span>WHATSAPP US DIRECTLY</span>
                </a>
              </MagneticButton>
            </div>

            <div className="bg-white/80 backdrop-blur-sm p-6 border border-[#DFD3C2] rounded-xl text-xs text-rich-black/70 space-y-2 shadow-xs">
              <div className="flex items-center gap-2 text-champagne-dark">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-sans font-semibold tracking-wider uppercase">
                  ATELIER PROMISE
                </span>
              </div>
              <p className="font-light leading-relaxed">
                We confirm all requests via SMS or WhatsApp within 2 hours during studio operating hours.
              </p>
            </div>
          </div>

          {/* Right Column: High-Conversion Form / Success State */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 border border-[#DFD3C2] rounded-2xl shadow-xl relative">
            <AnimatePresence mode="wait">
              {isSuccess && submittedData ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-8 text-center space-y-6"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-champagne/15 border border-champagne flex items-center justify-center text-champagne-dark">
                    <CheckCircle className="w-8 h-8" />
                  </div>

                  <div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-rich-black font-light">
                      THANK YOU.
                    </h3>
                    <p className="font-sans text-xs tracking-widest uppercase text-champagne-dark font-semibold mt-2">
                      YOUR APPOINTMENT REQUEST HAS BEEN RECEIVED.
                    </p>
                  </div>

                  {/* Summary Card */}
                  <div className="bg-[#FAF7F2] p-6 border border-[#DFD3C2] rounded-xl text-left max-w-md mx-auto space-y-3 text-xs">
                    <div className="flex justify-between border-b border-[#E8E1D3] pb-2">
                      <span className="text-rich-black/55">Guest Name</span>
                      <span className="text-rich-black font-medium">{submittedData.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E8E1D3] pb-2">
                      <span className="text-rich-black/55">Selected Service</span>
                      <span className="text-champagne-dark font-semibold">{submittedData.service}</span>
                    </div>
                    <div className="flex justify-between border-b border-[#E8E1D3] pb-2">
                      <span className="text-rich-black/55">Date &amp; Time</span>
                      <span className="text-rich-black">{submittedData.date} at {submittedData.time}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-rich-black/55">Phone Contact</span>
                      <span className="text-rich-black">{submittedData.phone}</span>
                    </div>
                  </div>

                  <p className="font-sans text-xs text-rich-black/70 max-w-md mx-auto leading-relaxed">
                    Our concierge will reach out via WhatsApp / phone to confirm your specialist and appointment slot.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                    <a
                      href={formattedWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/35 text-[#128C7E] font-sans text-xs font-semibold tracking-widest uppercase transition-all rounded-full w-full sm:w-auto justify-center"
                    >
                      <MessageCircle className="w-4 h-4 text-[#25D366]" />
                      <span>OPEN IN WHATSAPP</span>
                    </a>
                    <button
                      type="button"
                      onClick={handleReset}
                      className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#DFD3C2] hover:border-rich-black text-rich-black font-sans text-xs tracking-widest uppercase transition-colors rounded-full w-full sm:w-auto justify-center"
                    >
                      <span>NEW RESERVATION</span>
                    </button>
                  </div>
                </motion.div>
              ) : (
                <form
                  key="booking-form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="space-y-6"
                >
                  <div className="border-b border-[#F0E8DC] pb-4 mb-6">
                    <h3 className="font-serif text-2xl sm:text-3xl text-rich-black font-light">
                      RESERVATION DETAILS
                    </h3>
                    <p className="font-sans text-xs text-rich-black/60 mt-1">
                      Please enter your contact information and desired atelier service.
                    </p>
                  </div>

                  {/* Full Name & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="booking-name"
                        className="block font-sans text-[11px] tracking-widest uppercase text-rich-black/75 font-semibold mb-2"
                      >
                        Full Name <span className="text-champagne-dark">*</span>
                      </label>
                      <input
                        id="booking-name"
                        type="text"
                        placeholder="e.g. Sofia Ahmed"
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        className={`w-full bg-[#FAF7F2] border px-4 py-3 rounded-lg text-sm text-rich-black placeholder-rich-black/35 focus:bg-white focus:outline-none transition-colors ${
                          errors.fullName
                            ? 'border-red-400 focus:border-red-400'
                            : 'border-[#DFD3C2] focus:border-champagne-dark'
                        }`}
                      />
                      {errors.fullName && (
                        <p className="text-[11px] text-red-500 mt-1 font-sans">
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="booking-phone"
                        className="block font-sans text-[11px] tracking-widest uppercase text-rich-black/75 font-semibold mb-2"
                      >
                        Phone Number <span className="text-champagne-dark">*</span>
                      </label>
                      <input
                        id="booking-phone"
                        type="tel"
                        placeholder="+92 300 1234567"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        className={`w-full bg-[#FAF7F2] border px-4 py-3 rounded-lg text-sm text-rich-black placeholder-rich-black/35 focus:bg-white focus:outline-none transition-colors ${
                          errors.phone
                            ? 'border-red-400 focus:border-red-400'
                            : 'border-[#DFD3C2] focus:border-champagne-dark'
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-[11px] text-red-500 mt-1 font-sans">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Email & Service Dropdown */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="booking-email"
                        className="block font-sans text-[11px] tracking-widest uppercase text-rich-black/75 font-semibold mb-2"
                      >
                        Email Address (Optional)
                      </label>
                      <input
                        id="booking-email"
                        type="email"
                        placeholder="sofia@example.com"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="w-full bg-[#FAF7F2] border border-[#DFD3C2] px-4 py-3 rounded-lg text-sm text-rich-black placeholder-rich-black/35 focus:bg-white focus:outline-none focus:border-champagne-dark transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="booking-service"
                        className="block font-sans text-[11px] tracking-widest uppercase text-rich-black/75 font-semibold mb-2"
                      >
                        Desired Service <span className="text-champagne-dark">*</span>
                      </label>
                      <select
                        id="booking-service"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className={`w-full bg-[#FAF7F2] border px-4 py-3 rounded-lg text-sm text-rich-black focus:bg-white focus:outline-none transition-colors ${
                          errors.service
                            ? 'border-red-400 focus:border-red-400'
                            : 'border-[#DFD3C2] focus:border-champagne-dark'
                        }`}
                      >
                        <option value="">Select Service...</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.service && (
                        <p className="text-[11px] text-red-500 mt-1 font-sans">
                          {errors.service}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Date & Time */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="booking-date"
                        className="block font-sans text-[11px] tracking-widest uppercase text-rich-black/75 font-semibold mb-2"
                      >
                        Preferred Date <span className="text-champagne-dark">*</span>
                      </label>
                      <div className="relative">
                        <input
                          id="booking-date"
                          type="date"
                          min={new Date().toISOString().split('T')[0]}
                          value={formData.date}
                          onChange={(e) =>
                            setFormData({ ...formData, date: e.target.value })
                          }
                          className={`w-full bg-[#FAF7F2] border px-4 py-3 rounded-lg text-sm text-rich-black focus:bg-white focus:outline-none transition-colors ${
                            errors.date
                              ? 'border-red-400 focus:border-red-400'
                              : 'border-[#DFD3C2] focus:border-champagne-dark'
                          }`}
                        />
                        <Calendar className="pointer-events-none absolute right-4 top-3.5 w-4 h-4 text-rich-black/40" />
                      </div>
                      {errors.date && (
                        <p className="text-[11px] text-red-500 mt-1 font-sans">
                          {errors.date}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="booking-time"
                        className="block font-sans text-[11px] tracking-widest uppercase text-rich-black/75 font-semibold mb-2"
                      >
                        Preferred Time Slot
                      </label>
                      <div className="relative">
                        <select
                          id="booking-time"
                          value={formData.time}
                          onChange={(e) =>
                            setFormData({ ...formData, time: e.target.value })
                          }
                          className="w-full bg-[#FAF7F2] border border-[#DFD3C2] px-4 py-3 rounded-lg text-sm text-rich-black focus:bg-white focus:outline-none focus:border-champagne-dark transition-colors"
                        >
                          {timeSlots.map((time) => (
                            <option key={time} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                        <Clock className="pointer-events-none absolute right-4 top-3.5 w-4 h-4 text-rich-black/40" />
                      </div>
                    </div>
                  </div>

                  {/* Message Notes */}
                  <div>
                    <label
                      htmlFor="booking-notes"
                      className="block font-sans text-[11px] tracking-widest uppercase text-rich-black/75 font-semibold mb-2"
                    >
                      Consultation Notes (Optional)
                    </label>
                    <textarea
                      id="booking-notes"
                      rows={3}
                      placeholder="Special hair requests, inspiration, allergies or preferences..."
                      value={formData.notes}
                      onChange={(e) =>
                        setFormData({ ...formData, notes: e.target.value })
                      }
                      className="w-full bg-[#FAF7F2] border border-[#DFD3C2] px-4 py-3 rounded-lg text-sm text-rich-black placeholder-rich-black/35 focus:bg-white focus:outline-none focus:border-champagne-dark transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      onMouseEnter={() => setCursorState('book')}
                      onMouseLeave={() => setCursorState('default')}
                      className="w-full py-4 bg-rich-black hover:bg-[#222222] text-white font-sans text-xs font-semibold tracking-[0.2em] uppercase rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>PROCESSING REQUEST...</span>
                      ) : (
                        <>
                          <span>BOOK AN APPOINTMENT</span>
                          <Send className="w-3.5 h-3.5 text-champagne" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
};

