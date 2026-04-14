'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'es' | 'en';

const translations = {
  es: {
    // Hero
    badge: '🟢 Disponible para proyectos',
    tagline: 'Your Art Comes to Life · Austin, TX',
    location: 'Austin, TX',
    hoursHero: 'Lun–Sáb 8am–6pm',
    sectionInfo: 'Información',
    hoursLabel: 'Horario',
    addressLabel: 'Dirección',
    mainLineLabel: 'Principal · Austin TX',
    officeLineLabel: 'Oficina (LLC)',

    // Contact
    sectionContact: 'Contacto',
    whatsapp: 'WhatsApp',
    call: 'Llamar',
    email: 'Email',
    saveContact: 'Guardar',
    share: 'Compartir',
    toastVCF: '✅ Contacto guardado',
    toastShare: '🔗 Enlace copiado',
    toastQuote: '📲 Abriendo WhatsApp...',
    whatsappMsgDefault: 'Hola Rueda La Rola Media! 👋 Me interesa un servicio. ¿Me pueden ayudar?',
    vcfNote: 'Your Art Comes to Life — Bordado, DTF, Marketing, Vehicle Wraps',
    shareText: 'Your Art Comes to Life — Austin, TX. Bordado, DTF, Vehicle Wraps & más',
    ariaContactWhatsApp: 'Contactar por WhatsApp',
    ariaContactCall: 'Llamar línea principal',
    ariaContactEmail: 'Enviar correo electrónico',
    ariaSaveVcf: 'Guardar en contactos',
    ariaShare: 'Compartir esta tarjeta',

    // Services (quick grid)
    sectionServices: 'Nuestros Servicios',
    embroidery: 'Bordado',
    dtf: 'DTF Print',
    wraps: 'Vehicle Wrap',
    bizCards: 'Tarjetas',
    foodMenus: 'Menús',
    webDesign: 'Páginas Web',

    // Vehicle Wraps expanded
    sectionWraps: 'Vehicle Wraps',
    wrapsSubtitle: 'Tu vehículo, tu marca. Transformamos cualquier vehículo en una valla publicitaria de alto impacto.',
    wrapCars: 'Autos / Sedanes',
    wrapCarsDesc: 'Full wrap, half wrap o vinil parcial.',
    wrapVans: 'Vans & Camionetas',
    wrapVansDesc: 'Máxima exposición para flotas de trabajo.',
    wrapTrucks: 'Trucks & SUVs',
    wrapTrucksDesc: 'Diseños personalizados de alto impacto.',
    wrapFoodTruck: 'Food Trucks',
    wrapFoodTruckDesc: 'Branding completo, dentro y fuera.',
    wrapDecals: 'Decals & Letras',
    wrapDecalsDesc: 'Opciones económicas para negocio.',
    wrapCTA: '🚘 Pedir cotización de wrap',
    wrapMsg: 'Hola Rueda La Rola Media! 🚘 Me interesa un Vehicle Wrap. ¿Me pueden dar una cotización?',
    wrapStatVehicles: 'Vehículos wrapeados',
    wrapStatTurnaround: 'Tiempo promedio',

    // Print bestsellers
    sectionPrint: 'Impresión Estrella',
    printSubtitle: 'Los productos más pedidos. Calidad premium, entrega rápida.',
    printCards: 'Tarjetas de Negocio',
    printCardsDesc: 'Diseño + Impresión · matte, UV, laminado.',
    printMenus: 'Menús para Food Truck',
    printMenusDesc: 'Formatos de bolsillo, tríptico o banner.',
    printVehicle: 'Gráficas para Vehículo',
    printVehicleDesc: 'Vinil de corte, magnéticos o stickers.',
    printBanners: 'Banners & Señalética',
    printBannersDesc: 'Exteriores, pop-up stands & rollups.',
    printCTA: '🖨️ Solicitar muestra / cotización',
    printMsg: 'Hola Rueda La Rola Media! 🖨️ Me interesa un presupuesto de impresión. ¿Pueden ayudarme?',
    printHotBadge: 'Más pedido',

    // Digital Services
    sectionDigital: 'Servicios Digitales',
    digitalSubtitle: 'Llevamos tu negocio al mundo online con presencia profesional.',
    digitalWeb: 'Páginas Web',
    digitalWebDesc: 'Sitios informativos modernos para tu negocio.',
    digitalLanding: 'Landing Pages',
    digitalLandingDesc: 'Conversión máxima para tus campañas.',
    digitalStore: 'Tiendas Online',
    digitalStoreDesc: 'E-commerce lista para vender desde el día 1.',
    digitalCard: 'Tarjeta Digital',
    digitalCardDesc: 'Bio-link personalizado con QR compartible.',
    digitalSocial: 'Redes Sociales',
    digitalSocialDesc: 'Gestión, contenido y estrategia de marca.',
    digitalCTA: '💻 Consulta tu proyecto digital',
    digitalMsg: 'Hola Rueda La Rola Media! 💻 Me interesa un servicio digital (web/landing/tienda/tarjeta digital). ¿Podemos hablar?',

    // Payment
    sectionPayment: 'Métodos de Pago',
    ariaPayWith: 'Pagar con',

    // Quote
    sectionQuote: 'Cotización Rápida',
    quoteSubtitle: 'Cuéntanos tu proyecto y te respondemos en menos de 1 hora vía WhatsApp.',
    labelService: 'Tipo de servicio',
    labelQty: 'Cantidad (unidades)',
    labelDate: 'Fecha de entrega deseada',
    labelNotes: 'Notas adicionales (opcional)',
    placeholderService: 'Selecciona un servicio',
    placeholderQty: 'Ej: 50',
    placeholderDate: '',
    placeholderNotes: 'Color, talla, diseño, descripción, etc.',
    btnSendQuote: '📲 Enviar cotización por WhatsApp',
    quoteMsgHeader: 'Hola Rueda La Rola Media! 👋 Quisiera solicitar una cotización:',
    opt_embroider: 'Bordado',
    opt_dtf: 'Impresión DTF',
    opt_wrap: 'Vehicle Wrap',
    opt_cards: 'Tarjetas de Negocio',
    opt_menu: 'Menú Food Truck',
    opt_banner: 'Banner / Señalética',
    opt_web: 'Página Web',
    opt_landing: 'Landing Page',
    opt_store: 'Tienda Online',
    opt_digitalcard: 'Tarjeta Digital / Bio-link',
    opt_social: 'Redes Sociales',
    opt_design: 'Diseño Gráfico',

    // Reviews
    sectionReviews: 'Lo que dicen nuestros clientes',
    reviewsTotal: 'Calificación en Google',
    reviewsCount: '5 reseñas',
    starsLabel: '5 de 5 estrellas',
    ariaViewOnGoogle: 'Ver reseñas en Google Maps',
    reviewsSeeAll: '⭐ Ver todas en Google Maps',
    reviewDatePrefix: 'hace ',

    // Footer
    footer: 'Hecho con ❤️ en Austin, TX',
    website: 'ruedalarolamedia.com',
  },
  en: {
    // Hero
    badge: '🟢 Available for projects',
    tagline: 'Your Art Comes to Life · Austin, TX',
    location: 'Austin, TX',
    hoursHero: 'Mon–Sat 8am–6pm',
    sectionInfo: 'Business Info',
    hoursLabel: 'Hours',
    addressLabel: 'Address',
    mainLineLabel: 'Main · Austin TX',
    officeLineLabel: 'Office (LLC)',

    // Contact
    sectionContact: 'Contact',
    whatsapp: 'WhatsApp',
    call: 'Call',
    email: 'Email',
    saveContact: 'Save',
    share: 'Share',
    toastVCF: '✅ Contact saved',
    toastShare: '🔗 Link copied',
    toastQuote: '📲 Opening WhatsApp...',
    whatsappMsgDefault: 'Hi Rueda La Rola Media! 👋 I\'m interested in a service. Can you help me?',
    vcfNote: 'Your Art Comes to Life — Embroidery, DTF, Marketing, Vehicle Wraps',
    shareText: 'Your Art Comes to Life — Austin, TX. Embroidery, DTF, Vehicle Wraps & more',
    ariaContactWhatsApp: 'Contact on WhatsApp',
    ariaContactCall: 'Call main line',
    ariaContactEmail: 'Send email',
    ariaSaveVcf: 'Save to contacts',
    ariaShare: 'Share this card',

    // Services (quick grid)
    sectionServices: 'Our Services',
    embroidery: 'Embroidery',
    dtf: 'DTF Print',
    wraps: 'Vehicle Wrap',
    bizCards: 'Business Cards',
    foodMenus: 'Menus',
    webDesign: 'Web Design',

    // Vehicle Wraps expanded
    sectionWraps: 'Vehicle Wraps',
    wrapsSubtitle: 'Your ride, your brand. We transform any vehicle into a high-impact rolling billboard.',
    wrapCars: 'Cars / Sedans',
    wrapCarsDesc: 'Full wrap, half wrap or partial vinyl.',
    wrapVans: 'Vans & Pickups',
    wrapVansDesc: 'Maximum exposure for work fleets.',
    wrapTrucks: 'Trucks & SUVs',
    wrapTrucksDesc: 'Custom high-impact designs.',
    wrapFoodTruck: 'Food Trucks',
    wrapFoodTruckDesc: 'Full branding inside and out.',
    wrapDecals: 'Decals & Lettering',
    wrapDecalsDesc: 'Budget-friendly business options.',
    wrapCTA: '🚘 Get a wrap quote',
    wrapMsg: 'Hi Rueda La Rola Media! 🚘 I\'m interested in a Vehicle Wrap. Can you give me a quote?',
    wrapStatVehicles: 'Vehicles wrapped',
    wrapStatTurnaround: 'Avg. turnaround',

    // Print bestsellers
    sectionPrint: 'Print Bestsellers',
    printSubtitle: 'Our most-requested products. Premium quality, fast turnaround.',
    printCards: 'Business Cards',
    printCardsDesc: 'Design + Print · matte, UV, laminated.',
    printMenus: 'Food Truck Menus',
    printMenusDesc: 'Pocket, trifold or banner formats.',
    printVehicle: 'Vehicle Graphics',
    printVehicleDesc: 'Cut vinyl, magnetic or stickers.',
    printBanners: 'Banners & Signage',
    printBannersDesc: 'Outdoor, pop-up stands & rollups.',
    printCTA: '🖨️ Request a sample / quote',
    printMsg: 'Hi Rueda La Rola Media! 🖨️ I\'m interested in a printing quote. Can you help me?',
    printHotBadge: 'Bestseller',

    // Digital Services
    sectionDigital: 'Digital Services',
    digitalSubtitle: 'We take your business online with professional, results-driven presence.',
    digitalWeb: 'Websites',
    digitalWebDesc: 'Modern informational sites for your business.',
    digitalLanding: 'Landing Pages',
    digitalLandingDesc: 'Maximum conversion for your campaigns.',
    digitalStore: 'Online Stores',
    digitalStoreDesc: 'E-commerce ready to sell from day 1.',
    digitalCard: 'Digital Business Card',
    digitalCardDesc: 'Custom bio-link with shareable QR code.',
    digitalSocial: 'Social Media',
    digitalSocialDesc: 'Management, content & brand strategy.',
    digitalCTA: '💻 Consult your digital project',
    digitalMsg: 'Hi Rueda La Rola Media! 💻 I\'m interested in a digital service (web/landing/store/digital card). Can we talk?',

    // Payment
    sectionPayment: 'Payment Methods',
    ariaPayWith: 'Pay with',

    // Quote
    sectionQuote: 'Quick Quote',
    quoteSubtitle: "Tell us about your project and we'll reply in under 1 hour via WhatsApp.",
    labelService: 'Service type',
    labelQty: 'Quantity (units)',
    labelDate: 'Desired delivery date',
    labelNotes: 'Additional notes (optional)',
    placeholderService: 'Select a service',
    placeholderQty: 'e.g. 50',
    placeholderDate: '',
    placeholderNotes: 'Color, size, design, description, etc.',
    btnSendQuote: '📲 Send quote via WhatsApp',
    quoteMsgHeader: 'Hi Rueda La Rola Media! 👋 I\'d like to request a quote:',
    opt_embroider: 'Embroidery',
    opt_dtf: 'DTF Printing',
    opt_wrap: 'Vehicle Wrap',
    opt_cards: 'Business Cards',
    opt_menu: 'Food Truck Menu',
    opt_banner: 'Banner / Signage',
    opt_web: 'Website',
    opt_landing: 'Landing Page',
    opt_store: 'Online Store',
    opt_digitalcard: 'Digital Card / Bio-link',
    opt_social: 'Social Media',
    opt_design: 'Graphic Design',

    // Reviews
    sectionReviews: 'What our clients say',
    reviewsTotal: 'Google Rating',
    reviewsCount: '5 reviews',
    starsLabel: '5 out of 5 stars',
    ariaViewOnGoogle: 'View reviews on Google Maps',
    reviewsSeeAll: '⭐ See all on Google Maps',
    reviewDatePrefix: '',

    // Footer
    footer: 'Made with ❤️ in Austin, TX',
    website: 'ruedalarolamedia.com',
  },
};

// Context
type LangContextType = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof translations['es'];
};

const LangContext = createContext<LangContextType>({
  lang: 'es',
  setLang: () => {},
  t: translations.es,
});

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('es');
  const t = translations[lang];
  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  return useContext(LangContext);
}
