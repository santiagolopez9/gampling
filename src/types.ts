export interface Amenity {
  id: string;
  name: string;
  description: string;
  category: 'confort' | 'naturaleza' | 'servicios' | 'seguridad';
  icon: string;
}

export interface CabinSpace {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  image: string;
  specs: string[];
}

export interface GalleryImage {
  id: string;
  title: string;
  category: 'panoramica' | 'habitacion' | 'terraza' | 'noches' | 'gastronomia';
  categoryLabel: string;
  description: string;
  image: string;
  tag: string;
}

export interface BookingAddon {
  id: string;
  name: string;
  description: string;
  price: number; // in COP
  icon: string;
}

export interface BookingRequest {
  checkIn: string;
  checkOut: string;
  guests: number;
  selectedAddons: string[];
  guestName: string;
  guestPhone: string;
  guestEmail: string;
  specialNotes: string;
  totalNights: number;
  basePricePerNight: number;
  totalPrice: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'llegada' | 'clima' | 'estadia' | 'politicas';
}
