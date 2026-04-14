'use client';

import { useLang } from '@/app/context/LangContext';

const services = [
  { id: 'embroidery', icon: '🧵', href: '#quote' },
  { id: 'dtf', icon: '🖨️', href: '#quote' },
  { id: 'marketing', icon: '📈', href: '#quote' },
  { id: 'wraps', icon: '🚘', href: '#quote' },
  { id: 'design', icon: '🎨', href: '#quote' },
  { id: 'merch', icon: '👕', href: '#quote' },
] as const;

export default function ServicesNav() {
  const { t } = useLang();

  const labels: Record<string, string> = {
    embroidery: t.embroidery,
    dtf: t.dtf,
    marketing: t.marketing,
    wraps: t.wraps,
    design: t.design,
    merch: t.merch,
  };

  return (
    <div className="services-grid" role="list" aria-label="Services">
      {services.map(({ id, icon, href }) => (
        <a
          key={id}
          id={`service-${id}`}
          href={href}
          className="btn btn-service"
          role="listitem"
          aria-label={`Ver servicio: ${labels[id]}`}
        >
          <span className="service-icon" aria-hidden="true">{icon}</span>
          <span className="service-label">{labels[id]}</span>
        </a>
      ))}
    </div>
  );
}
