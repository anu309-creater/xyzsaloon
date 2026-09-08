import type { BrandConfig } from '../types';

export const brandConfig: BrandConfig = {
  name: 'BLUSH BLOOM',
  tagline: 'BEAUTY, BUT MAKE IT YOURS.',
  address: '24-B Gulberg Main Boulevard',
  city: 'Lahore',
  country: 'Pakistan',
  phone: '+92 300 1234567',
  phoneRaw: '923001234567',
  email: 'hello@blushbloom.com',
  hoursWeekday: 'Monday — Saturday: 10:00 AM — 9:00 PM',
  hoursSunday: 'Sunday: 12:00 PM — 8:00 PM',
  whatsappNumber: '+92 300 1234567',
  whatsappMessage: "Hi BLUSH BLOOM, I'd like to book an appointment.",
  socials: {
    instagram: 'https://instagram.com/blushbloom',
    facebook: 'https://facebook.com/blushbloom',
    tiktok: 'https://tiktok.com/@blushbloom',
  },
};

export const brandStatistics = [
  { value: '10+', label: 'Years of Experience', detail: 'Editorial mastery & craft' },
  { value: '5K+', label: 'Happy Clients', detail: 'Signature transformations' },
  { value: '20+', label: 'Beauty Services', detail: 'Hair, Skin, Nails, Spa & Grooming' },
  { value: '4.9/5', label: 'Client Rating', detail: 'Verified luxury experiences' },
];

export const getWhatsAppLink = (customText?: string) => {
  const text = encodeURIComponent(customText || brandConfig.whatsappMessage);
  return `https://wa.me/${brandConfig.phoneRaw}?text=${text}`;
};

