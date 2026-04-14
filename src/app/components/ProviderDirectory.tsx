'use client';

import { useLang } from '@/app/context/LangContext';

const providers = [
  {
    id: 'sanmar',
    emoji: '👕',
    name: 'SanMar',
    href: 'https://www.sanmar.com',
    descKey: 'sanmarDesc',
  },
  {
    id: 'alphabroder',
    emoji: '🧥',
    name: 'Alphabroder',
    href: 'https://www.alphabroder.com',
    descKey: 'alphabroderDesc',
  },
  {
    id: 'ssactivewear',
    emoji: '🏃',
    name: 'S&S Activewear',
    href: 'https://www.ssactivewear.com',
    descKey: 'ssactivewearDesc',
  },
  {
    id: 'caspari',
    emoji: '🎁',
    name: 'Promo Depot',
    href: 'https://www.4imprint.com',
    descKey: 'caspariDesc',
  },
] as const;

export default function ProviderDirectory() {
  const { t } = useLang();

  return (
    <div className="provider-list" role="list" aria-label="Product catalogs">
      {providers.map(({ id, emoji, name, href, descKey }) => (
        <a
          key={id}
          id={`provider-${id}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="provider-item"
          role="listitem"
          aria-label={`Ver catálogo de ${name}`}
        >
          <div className="provider-info">
            <span className="provider-emoji" aria-hidden="true">{emoji}</span>
            <div>
              <div className="provider-name">{name}</div>
              <div className="provider-desc">{t[descKey as keyof typeof t]}</div>
            </div>
          </div>
          <span className="provider-arrow" aria-hidden="true">→</span>
        </a>
      ))}
    </div>
  );
}
