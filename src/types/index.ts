export type CursorState = 'default' | 'view' | 'explore' | 'drag' | 'book';

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  duration: string;
  priceFrom: string;
  image: string;
  features: string[];
}

export interface TestimonialItem {
  id: string;
  quote: string;
  clientName: string;
  roleOrService: string;
  location?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'hair' | 'color' | 'grooming' | 'bridal' | 'skincare' | 'nails';
  tag: string;
  image: string;
  aspect: 'tall' | 'wide' | 'square';
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  email: string;
  service: string;
  date: string;
  time: string;
  notes: string;
}

export interface BrandConfig {
  name: string;
  tagline: string;
  address: string;
  city: string;
  country: string;
  phone: string;
  phoneRaw: string;
  email: string;
  hoursWeekday: string;
  hoursSunday: string;
  whatsappNumber: string;
  whatsappMessage: string;
  socials: {
    instagram: string;
    facebook: string;
    tiktok: string;
  };
}

