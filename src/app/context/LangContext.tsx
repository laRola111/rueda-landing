'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type Lang = 'es' | 'en';

const translations = {
  es: {
    // Hero
    badge: '🟢 Disponible para proyectos',
    tagline: 'Your Art Comes to Life · Austin, TX',
    location: 'Austin, TX',
    sectionInfo: 'Información',
    hoursLabel: 'Horario',
    addressLabel: 'Dirección',

    // Contact
    sectionContact: 'Contacto',
    whatsapp: 'WhatsApp',
    call: 'Llamar',
    email: 'Email',
    saveContact: 'Guardar',
    share: 'Compartir',

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

    // Payment
    sectionPayment: 'Métodos de Pago',

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

    // Footer
    footer: 'Hecho con ❤️ en Austin, TX',
    website: 'ruedalarolamedia.com',

    // Toast
    toastVCF: '✅ Contacto guardado',
    toastShare: '🔗 Enlace copiado',
    toastQuote: '📲 Abriendo WhatsApp...',
  },
  en: {
    // Hero
    badge: '🟢 Available for projects',
    tagline: 'Your Art Comes to Life · Austin, TX',
    location: 'Austin, TX',
    sectionInfo: 'Business Info',
    hoursLabel: 'Hours',
    addressLabel: 'Address',

    // Contact
    sectionContact: 'Contact',
    whatsapp: 'WhatsApp',
    call: 'Call',
    email: 'Email',
    saveContact: 'Save',
    share: 'Share',

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

    // Payment
    sectionPayment: 'Payment Methods',

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

    // Footer
    footer: 'Made with ❤️ in Austin, TX',
    website: 'ruedalarolamedia.com',

    // Toast
    toastVCF: '✅ Contact saved',
    toastShare: '🔗 Link copied',
    toastQuote: '📲 Opening WhatsApp...',
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
