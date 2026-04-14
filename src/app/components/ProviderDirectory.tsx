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
  // const { t } = useLang();

  return null; // 💤 Muted for now
}
