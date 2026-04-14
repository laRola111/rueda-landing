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

    // Services
    sectionServices: 'Servicios',
    embroidery: 'Bordado',
    dtf: 'DTF Print',
    marketing: 'Marketing',
    wraps: 'Wrapping',
    design: 'Diseño',
    merch: 'Merch',

    // Payment
    sectionPayment: 'Métodos de Pago',

    // Providers
    sectionProviders: 'Catálogos de Productos',
    sanmarDesc: 'Ropa & uniformes al por mayor',
    alphabroderDesc: 'Prendas para personalizar',
    ssactivewearDesc: 'Ropa deportiva y casual',
    caspariDesc: 'Artículos promocionales',

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
    placeholderNotes: 'Color, talla, diseño, etc.',
    btnSendQuote: '📲 Enviar cotización por WhatsApp',
    opt_embroider: 'Bordado',
    opt_dtf: 'Impresión DTF',
    opt_wrap: 'Vehicle Wrap',
    opt_design: 'Diseño Gráfico',
    opt_marketing: 'Marketing Digital',
    opt_merch: 'Merchandising',

    // Order Tracker
    sectionTracker: 'Rastrear Pedido',
    trackerSubtitle: 'Ingresa tu número de orden para ver el estado de producción.',
    placeholderOrderId: 'Ej: RUEDA-2025-001',
    btnTrack: 'Rastrear',
    errorOrder: '⚠️ Orden no encontrada. Verifica el número.',
    stepReceived: 'Pedido Recibido',
    stepReceivedDesc: 'Tu orden fue registrada correctamente.',
    stepProduction: 'En Producción',
    stepProductionDesc: 'Estamos trabajando en tu proyecto.',
    stepQC: 'Control de Calidad',
    stepQCDesc: 'Revisión final antes de entrega.',
    stepReady: 'Listo para Entrega',
    stepReadyDesc: 'Tu pedido está disponible para recoger.',

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

    // Services
    sectionServices: 'Services',
    embroidery: 'Embroidery',
    dtf: 'DTF Print',
    marketing: 'Marketing',
    wraps: 'Wrapping',
    design: 'Design',
    merch: 'Merch',

    // Payment
    sectionPayment: 'Payment Methods',

    // Providers
    sectionProviders: 'Product Catalogs',
    sanmarDesc: 'Wholesale clothing & uniforms',
    alphabroderDesc: 'Apparel for customization',
    ssactivewearDesc: 'Sports & casual wear',
    caspariDesc: 'Promotional items',

    // Quote
    sectionQuote: 'Quick Quote',
    quoteSubtitle: 'Tell us about your project and we\'ll reply in under 1 hour via WhatsApp.',
    labelService: 'Service type',
    labelQty: 'Quantity (units)',
    labelDate: 'Desired delivery date',
    labelNotes: 'Additional notes (optional)',
    placeholderService: 'Select a service',
    placeholderQty: 'e.g. 50',
    placeholderDate: '',
    placeholderNotes: 'Color, size, design, etc.',
    btnSendQuote: '📲 Send quote via WhatsApp',
    opt_embroider: 'Embroidery',
    opt_dtf: 'DTF Printing',
    opt_wrap: 'Vehicle Wrap',
    opt_design: 'Graphic Design',
    opt_marketing: 'Digital Marketing',
    opt_merch: 'Merchandising',

    // Order Tracker
    sectionTracker: 'Track Order',
    trackerSubtitle: 'Enter your order number to see production status.',
    placeholderOrderId: 'e.g. RUEDA-2025-001',
    btnTrack: 'Track',
    errorOrder: '⚠️ Order not found. Check the number.',
    stepReceived: 'Order Received',
    stepReceivedDesc: 'Your order was registered successfully.',
    stepProduction: 'In Production',
    stepProductionDesc: 'We are working on your project.',
    stepQC: 'Quality Control',
    stepQCDesc: 'Final review before delivery.',
    stepReady: 'Ready for Pickup',
    stepReadyDesc: 'Your order is ready.',

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
