// Central place to edit brand details, contact info and image behaviour.

export const BRAND = {
  name: 'LUXORA BAGS',
  tagline: 'Handcrafted in small batches',
  agency: 'AVYRONIX DIGITAL',
  email: 'hello@luxora-demo.example',
  addressLine: 'Sample showroom · Mumbai, Maharashtra, India',
  hours: 'Mon – Sat · 11:00 – 19:00 (sample hours)',
};

// Digits only, with country code (e.g. 919876543210). Set VITE_WHATSAPP_NUMBER in .env
// or in Vercel project settings. If empty, WhatsApp opens with a contact chooser.
export const WHATSAPP_NUMBER = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '');

export function whatsappLink(message) {
  const text = encodeURIComponent(message);
  return WHATSAPP_NUMBER
    ? `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
    : `https://wa.me/?text=${text}`;
}

// Google Maps embed — no API key needed. Change the query to any place.
export const MAP_QUERY = 'Mumbai, Maharashtra, India';
export const MAP_EMBED_URL = `https://www.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&output=embed`;
export const MAP_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`;

// Photography switch.
// false → the site uses the built-in illustrated handbags (works out of the box).
// true  → the site loads real photos from /public/images (see public/images/README.md).
export const USE_PHOTOS = false;
export const HERO_IMAGE = '/images/hero.jpg';

export const SOCIALS = [
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'X', href: 'https://x.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
];

export const NAV_LINKS = [
  { label: 'Collection', href: '#collection' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Why Luxora', href: '#why' },
  { label: 'Our Story', href: '#story' },
  { label: 'Contact', href: '#contact' },
];

export const formatPrice = (n) =>
  new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n);
