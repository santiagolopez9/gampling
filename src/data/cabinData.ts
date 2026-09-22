import { Amenity, BookingAddon, CabinSpace, FaqItem, GalleryImage } from '../types';

import heroImg from '../assets/images/glamping_hero_sunset_1790035010790.jpg';
import bedImg from '../assets/images/glamping_interior_bed_1790035025393.jpg';
import deckImg from '../assets/images/glamping_deck_view_1790035036537.jpg';
import campfireImg from '../assets/images/glamping_campfire_night_1790035064177.jpg';
import breakfastImg from '../assets/images/glamping_breakfast_view_1790035075293.jpg';
import horseImg from '../assets/images/glamping_horse_riding_1790035713223.jpg';

export const CABIN_INFO = {
  name: 'Glamping Paraíso en La Montaña',
  tagline: 'Cabaña de madera, atardeceres mágicos y chimenea en las alturas de La Calera',
  location: 'Vereda El Salitre, La Calera, Cundinamarca, Colombia',
  altitude: '2.750 msnm',
  distanceFromBogota: '45 minutos desde la Calle 85 / Cra 7ma',
  weather: '11°C a 19°C (Clima de montaña fresco con atardeceres despejados)',
  phone: '3173676149',
  phoneDisplay: '+57 317 367 6149',
  whatsappNumber: '573173676149',
  checkInTime: '3:00 PM',
  checkOutTime: '12:00 PM',
  ratingScore: '9.0',
  ratingLabel: '¡Buenos servicios! Puntuación: 9 (Excepcional)',
  reviewCount: 84,
  basePriceWeekday: 280000, // Domingo a Jueves
  basePriceWeekend: 390000, // Viernes, Sábados y Vísperas de festivo
};

export function getWhatsAppUrl(message?: string): string {
  const defaultText = '¡Hola! Quisiera información y consultar disponibilidad para reservar en Glamping Paraíso en La Montaña (La Calera).';
  const text = encodeURIComponent(message || defaultText);
  return `https://wa.me/${CABIN_INFO.whatsappNumber}?text=${text}`;
}

export const CABIN_SPACES: CabinSpace[] = [
  {
    id: 'balcon-catamaran',
    title: 'Balcón Panorámico & Malla Catamarán',
    subtitle: 'Suspendidos frente al horizonte andino',
    description: 'Nuestra terraza privada en madera cuenta con una malla catamarán de alta resistencia sobre el abismo verde. Es el mirador privilegiado para contemplar los atardeceres en tonos violeta y naranja que bañan los valles de La Calera.',
    highlight: 'Malla catamarán suspendida con capacidad de 300 kg y vista al atardecer',
    image: heroImg,
    specs: [
      'Malla catamarán de descanso sobre el paisaje',
      'Mecedora artesanal para lectura y café',
      'Orientación poniente: sol del atardecer',
      'Mesa exterior para aperitivos o copa de vino'
    ]
  },
  {
    id: 'habitacion-panoramica',
    title: 'Cabaña en Madera & Ventanales 180°',
    subtitle: 'El calor del hogar con vista infinita',
    description: 'Construida enteramente en madera tratada con un aroma reconfortante a pino y bosque. Despierta o contempla la lluvia desde una cama King vestida con edredón térmico acolchado y almohadas de pluma sintética hipoalergénica.',
    highlight: 'Ventanales térmicos de piso a techo mirando hacia la cordillera',
    image: bedImg,
    specs: [
      'Cama King Size con lencería térmica de 400 hilos',
      'Iluminación cálida graduable y lámpara de lectura',
      'Pisos en madera con tapete de lana para pies descalzos',
      'Aislante térmico para las noches frías de páramo'
    ]
  },
  {
    id: 'paseo-caballo',
    title: 'Paseo a Caballo & Senderos Ecológicos',
    subtitle: 'Cabalgatas guiadas por la cordillera oriental',
    description: 'Explora los paisajes andinos de La Calera a lomo de caballo dócil y bien cuidado. Rutas ecológicas con vistas panorámicas a los valles, páramos y quebradas nativas, guiadas por expertos campesinos locales.',
    highlight: 'Servicio de paseo a caballo y cabalgata ecológica en la montaña',
    image: horseImg,
    specs: [
      'Caballos dóciles y mansos aptos para principiantes y parejas',
      'Rutas guiadas por senderos naturales y miradores',
      'Equipo y monturas rústicas tradicionales de cuero',
      'Duración flexible: recorridos de 1 a 2 horas'
    ]
  },
  {
    id: 'estufa-chimenea',
    title: 'Estufa Tradicional de Leña',
    subtitle: 'El crujido del fuego en las noches frías',
    description: 'En el interior de la cabaña encontrarás una auténtica estufa / chimenea cerrada de hierro forjado. Te dejamos una canasta con leña seca de eucalipto lista para encender y mantener un ambiente tibio y romántico durante toda la noche.',
    highlight: 'Chimenea interior de hierro con leña de eucalipto incluida',
    image: deckImg,
    specs: [
      'Estufa de leña de hierro fundido de alta eficiencia',
      'Carga de leña seca y astillas de encendido incluidas',
      'Parrilla segura y herramientas tradicionales',
      'Mesa de café con mantel a cuadros para bebidas calientes'
    ]
  },
  {
    id: 'fogata-estrellas',
    title: 'Rincón de Fogata & Cielo Estrellado',
    subtitle: 'Bajo el manto de la noche caleruna',
    description: 'Al caer la tarde, el exterior se transforma. Alrededor del fogón de piedra, disfruta de masmelos asados, una taza humeante de chocolate campesino o una copa de vino mientras las luces lejanas y las estrellas iluminan el valle.',
    highlight: 'Zona de fogata exterior privada con leños y sillas rústicas',
    image: campfireImg,
    specs: [
      'Foso de fogata exterior de piedra rústica',
      'Kit de malvaviscos y varitas de madera',
      'Cielos despejados para observación astronómica',
      'Cobijas térmicas adicionales para el exterior'
    ]
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 'gal-1',
    title: 'Atardecer desde el Chalet',
    category: 'panoramica',
    categoryLabel: 'Atardeceres',
    description: 'El instante exacto en que el cielo de La Calera se tiñe de púrpura y naranja sobre la cordillera.',
    image: heroImg,
    tag: 'Vista Principal'
  },
  {
    id: 'gal-2',
    title: 'Habitación Cálida con Vista al Ocaso',
    category: 'habitacion',
    categoryLabel: 'Habitación',
    description: 'Cama King vestida con plumón térmico y amplios ventanales frente a la montaña.',
    image: bedImg,
    tag: 'Interior'
  },
  {
    id: 'gal-horse',
    title: 'Paseo a Caballo por la Montaña',
    category: 'panoramica',
    categoryLabel: 'Actividades',
    description: 'Cabalgata ecológica por las cumbres de La Calera con vista a la naturaleza virgen.',
    image: horseImg,
    tag: 'Paseo a Caballo'
  },
  {
    id: 'gal-3',
    title: 'Terraza de Madera con Mecedoras',
    category: 'terraza',
    categoryLabel: 'Terraza',
    description: 'Espacio al aire libre para disfrutar un café recién colado y la brisa fresca de la montaña.',
    image: deckImg,
    tag: 'Terraza & Malla'
  },
  {
    id: 'gal-4',
    title: 'Noche de Fogata & Masmelos',
    category: 'noches',
    categoryLabel: 'Noches Mágicas',
    description: 'El calor de la leña y las brasas bajo un cielo nocturno estrellado sin contaminación lumínica.',
    image: campfireImg,
    tag: 'Fogata Nocturna'
  },
  {
    id: 'gal-5',
    title: 'Desayuno Campestre al Amanecer',
    category: 'gastronomia',
    categoryLabel: 'Gastronomía',
    description: 'Café colombiano de origen, arepas con queso de hoja, frutas frescas y chocolate caleruno.',
    image: breakfastImg,
    tag: 'Desayuno'
  }
];

// Complete structured amenities matching user's official listing specifications
export const DETAILED_AMENITIES_SECTIONS = [
  {
    category: 'Servicios Más Populares',
    icon: 'Sparkles',
    items: [
      'Parking gratis privado en las instalaciones (sin reserva previa)',
      'WiFi gratis disponible en la cabaña y zonas comunes',
      'Servicio de habitaciones y atención personalizada',
      'Restaurante con comida típica y platos a la carta',
      'Muy buen desayuno campestre incluido / disponible'
    ]
  },
  {
    category: 'Baño Privado & Confort',
    icon: 'Droplets',
    items: [
      'Ducha con agua caliente a presión constante',
      'Baño privado higiénico y moderno',
      'Toallas limpias de cuerpo y de manos',
      'Papel higiénico y amenidades de aseo',
      'Toallas y sábanas adicionales bajo petición'
    ]
  },
  {
    category: 'Vistas & Paisaje',
    icon: 'Eye',
    items: [
      'Vistas panorámicas a la cordillera y montañas de La Calera',
      'Vistas al atardecer andino en tonalidades violetas y naranjas',
      'Vistas a los jardines nativos y valles verdes',
      'Vistas a las luces del horizonte'
    ]
  },
  {
    category: 'Exteriores & Terraza',
    icon: 'Maximize2',
    items: [
      'Malla catamarán suspendida sobre el paisaje',
      'Balcón privado en madera maciza',
      'Terraza / solárium con mecedoras artesanales',
      'Mobiliario exterior de descanso',
      'Barbacoa / Zona de asados disponible',
      'Jardín amplio y senderos alrededor de la cabaña'
    ]
  },
  {
    category: 'Cocina & Zona de Comedor',
    icon: 'Coffee',
    items: [
      'Cafetera y tetera en el alojamiento',
      'Mesa de comedor para dos personas con mantel típico',
      'Minibar y snack-bar para refrigerios',
      'Vajilla rústica para café y bebidas calientes'
    ]
  },
  {
    category: 'Zona de Estar & Calor',
    icon: 'Flame',
    items: [
      'Chimenea / Estufa tradicional de leña en hierro forjado',
      'Carga de leña seca de eucalipto incluida',
      'Zona de estar acogedora con cobijas térmicas',
      'Radio y ambiente sonoro relajante',
      'Perchero para abrigos y chaquetas'
    ]
  },
  {
    category: 'Actividades & Caballos',
    icon: 'Compass',
    items: [
      'Paseo a caballo / Cabalgatas guiadas por la montaña (De pago)',
      'Rutas de senderismo ecológico por bosques andinos (De pago)',
      'Fogata nocturna con malvaviscos bajo las estrellas',
      'Juegos de mesa y puzles para entretenimiento familiar y de pareja'
    ]
  },
  {
    category: 'Comida, Bebida & Restaurante',
    icon: 'Utensils',
    items: [
      'Restaurante y cafetería en el alojamiento',
      'Desayuno en la habitación servido en la terraza o cama',
      'Vino / Champán para celebraciones románticas (De pago)',
      'Frutas frescas seleccionadas de la región'
    ]
  },
  {
    category: 'Mascotas & Políticas',
    icon: 'Heart',
    items: [
      'Pet Friendly: Se admiten mascotas bajo petición previa',
      'Check-in: 3:00 PM | Check-out: 12:00 PM',
      'Proporciona factura bajo solicitud',
      'Idiomas que se hablan: Español e Inglés'
    ]
  },
  {
    category: 'Seguridad & Servicios Generales',
    icon: 'ShieldCheck',
    items: [
      'Extintores y medidas de seguridad contra incendios',
      'Cámaras de seguridad en exteriores del alojamiento',
      'Servicio de entrega de comestibles y mercado',
      'Servicio de limpieza diario',
      'Servicio de traslado desde La Calera o Bogotá (De pago)'
    ]
  }
];

export const AMENITIES: Amenity[] = [
  {
    id: 'amenity-chimenea',
    name: 'Estufa / Chimenea de Leña',
    description: 'Chimenea interior en hierro fundido con leña de eucalipto incluida para abrigar la cabaña toda la noche.',
    category: 'confort',
    icon: 'Flame'
  },
  {
    id: 'amenity-malla',
    name: 'Malla Catamarán Suspendida',
    description: 'Malla de alta resistencia sobre el balcón para flotar sobre el paisaje andino y ver el atardecer.',
    category: 'naturaleza',
    icon: 'Maximize2'
  },
  {
    id: 'amenity-caballo',
    name: 'Paseo a Caballo en la Montaña',
    description: 'Cabalgatas ecológicas guiadas por senderos de montaña y miradores naturales de La Calera.',
    category: 'naturaleza',
    icon: 'Compass'
  },
  {
    id: 'amenity-restaurante',
    name: 'Restaurante & Desayuno',
    description: 'Platos típicos calerunos, servicio a la cabaña y delicioso desayuno campestre con café recién colado.',
    category: 'servicios',
    icon: 'Coffee'
  },
  {
    id: 'amenity-agua-caliente',
    name: 'Baño Privado & Agua Caliente',
    description: 'Baño privado con ducha de paso a gas con temperatura perfecta para el clima de montaña.',
    category: 'confort',
    icon: 'Droplets'
  },
  {
    id: 'amenity-cama-king',
    name: 'Cama King & Plumón Térmico',
    description: 'Colchón ortopédico semi-firme, sábanas de tacto suave y plumón especial para el frío andino.',
    category: 'confort',
    icon: 'BedDouble'
  },
  {
    id: 'amenity-mascotas',
    name: 'Admite Mascotas (Pet Friendly)',
    description: 'Tu mascota es bienvenida bajo petición para disfrutar juntos de los senderos y el pasto verde.',
    category: 'naturaleza',
    icon: 'Heart'
  },
  {
    id: 'amenity-parqueadero',
    name: 'Parking Gratis Privado',
    description: 'Estacionamiento privado y seguro dentro del predio, a pocos pasos de la cabaña, sin costo extra.',
    category: 'seguridad',
    icon: 'Car'
  },
  {
    id: 'amenity-wifi',
    name: 'WiFi Gratis Estable',
    description: 'Conexión a internet inalámbrico disponible tanto en la cabaña como en las zonas comunes.',
    category: 'servicios',
    icon: 'Wifi'
  }
];

export const BOOKING_ADDONS: BookingAddon[] = [
  {
    id: 'addon-caballo',
    name: 'Paseo a Caballo Guiado (Pareja)',
    description: 'Cabalgata ecológica guiada de 1 hora por senderos de montaña, vistas panorámicas y caballos mansos.',
    price: 110000,
    icon: 'Compass'
  },
  {
    id: 'addon-fogata-masmelos',
    name: 'Kit de Fogata & Masmelos',
    description: 'Carga extra de leña seca aromática, malvaviscos importados y varitas rústicas de madera.',
    price: 35000,
    icon: 'Flame'
  },
  {
    id: 'addon-vino-romantico',
    name: 'Botella de Vino Tinto Reserva & Copas',
    description: 'Vino seleccionado perfecto para el frío de la montaña, acompañado de frutos secos.',
    price: 75000,
    icon: 'Wine'
  },
  {
    id: 'addon-decoracion',
    name: 'Decoración Romántica / Aniversario',
    description: 'Pétalos de rosa naturales, velas led ambientales, letrero rústico y detalle sorpresa.',
    price: 90000,
    icon: 'Heart'
  },
  {
    id: 'addon-desayuno-gourmet',
    name: 'Desayuno Campestre para Dos',
    description: 'Huevos al gusto, arepa boyacense con queso, canasta de pan caliente, fruta fresca, café y chocolate.',
    price: 50000,
    icon: 'Utensils'
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: '¿Qué servicios y comodidades incluye la estadía?',
    answer: 'La estadía incluye alojamiento en la cabaña privada de madera, cama King con plumón térmico, chimenea de leña con carga de leña incluida, balcón privado con malla catamarán suspendida, baño privado con agua caliente, WiFi gratis, parqueadero privado vigilado sin costo adicional y acceso a zonas verdes.',
    category: 'estadia'
  },
  {
    question: '¿Cómo funciona el servicio de paseo a caballo?',
    answer: 'Ofrecemos cabalgatas guiadas por las montañas y senderos ecológicos de La Calera. Puedes añadir el paseo a caballo durante tu reserva o solicitarlo al llegar. Los caballos son dóciles y aptos para personas sin experiencia previa.',
    category: 'estadia'
  },
  {
    question: '¿Tienen servicio de restaurante y comida en la cabaña?',
    answer: 'Sí, disponemos de restaurante y cafetería en el alojamiento con servicio a la habitación. Puedes solicitar desayunos campestres, cenas típicas calerunas, tablas de quesos, botellas de vino y bebidas calientes directamente a la cabaña.',
    category: 'estadia'
  },
  {
    question: '¿Se admiten mascotas en el glamping?',
    answer: '¡Sí! Somos un glamping Pet Friendly. Las mascotas son bienvenidas bajo petición previa para preparar su llegada. Contamos con amplias zonas verdes para que disfruten de la naturaleza.',
    category: 'estadia'
  },
  {
    question: '¿Hace mucho frío en la cabaña por la noche?',
    answer: 'La Calera está a 2.750 msnm, por lo que la temperatura nocturna oscila entre 9°C y 13°C. Sin embargo, nuestra cabaña cuenta con aislante térmico en madera, estufa/chimenea de leña interior con leña incluida y una cama vestida con plumón térmico abrigado. Además, el baño tiene agua caliente con excelente presión.',
    category: 'clima'
  },
  {
    question: '¿Qué tipo de vehículo se necesita para llegar?',
    answer: 'Se puede llegar en cualquier tipo de automóvil particular (sedán, hatchback, camioneta o moto). La mayor parte del trayecto desde Bogotá está pavimentada y el último tramo es carretera destapada firme y transitable.',
    category: 'llegada'
  },
  {
    question: '¿Cómo funciona la reserva y el pago?',
    answer: 'Para garantizar tu fecha se realiza un abono del 50% mediante transferencia bancaria (Bancolombia, Nequi o Daviplata) escribiendo a nuestro WhatsApp oficial al 317 367 6149. El 50% restante se cancela al momento del Check-in en la cabaña.',
    category: 'politicas'
  },
  {
    question: '¿Cuáles son los horarios de Check-in y Check-out?',
    answer: 'El Check-in es a partir de las 3:00 PM (para que alcances a acomodarte y ver el mágico atardecer) y el Check-out es a las 12:00 PM del mediodía.',
    category: 'estadia'
  }
];

