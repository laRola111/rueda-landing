'use client';

import { CONFIG } from '@/app/config';

const payments = [
  {
    id: 'cashapp',
    logo: '💵',
    name: 'Cash App',
    label: '$RuedaLaRola',
    href: CONFIG.CASHAPP,
    className: 'pb-cashapp',
  },
  {
    id: 'zelle',
    logo: '🏦',
    name: 'Zelle',
    label: CONFIG.ZELLE_PHONE,
    href: `sms:${CONFIG.PHONE_MAIN}`,
    className: 'pb-zelle',
  },
  {
    id: 'paypal',
    logo: '🅿️',
    name: 'WhatsApp Pay',
    label: 'Antonieta G.',
    href: CONFIG.PAYPAL,
    className: 'pb-paypal',
  },
];

export default function PaymentCenter() {
  return (
    <div className="payment-grid" role="list" aria-label="Payment methods">
      {payments.map(({ id, logo, name, label, href, className }) => (
        <a
          key={id}
          id={`payment-${id}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={`payment-btn ${className}`}
          role="listitem"
          aria-label={`Pagar con ${name}`}
        >
          <span className="pb-logo" aria-hidden="true">{logo}</span>
          <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.8rem', fontWeight: 700 }}>
            {name}
          </span>
          <span style={{ fontSize: '0.62rem', color: 'var(--text-muted)', textAlign: 'center' }}>
            {label}
          </span>
        </a>
      ))}
    </div>
  );
}
