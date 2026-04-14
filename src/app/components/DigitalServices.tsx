'use client';

import { useLang } from '@/app/context/LangContext';
import { CONFIG } from '@/app/config';

const WHATSAPP = CONFIG.WHATSAPP_PRIMARY;

export default function DigitalServices() {
  const { t } = useLang();

  const services = [
    { icon: '🌐', labelKey: 'digitalWeb',    descKey: 'digitalWebDesc' },
    { icon: '⚡', labelKey: 'digitalLanding', descKey: 'digitalLandingDesc' },
    { icon: '🛒', labelKey: 'digitalStore',  descKey: 'digitalStoreDesc' },
    { icon: '📲', labelKey: 'digitalCard',   descKey: 'digitalCardDesc' },
    { icon: '📱', labelKey: 'digitalSocial', descKey: 'digitalSocialDesc' },
  ] as const;

  const handleCTA = () => {
    const msg = encodeURIComponent('Hola Rueda La Rola Media! 💻 Me interesa un servicio digital (web/landing/tienda/tarjeta digital). ¿Podemos hablar?');
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  };

  return (
    <div>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: 'var(--sp-lg)', lineHeight: 1.6 }}>
        {t.digitalSubtitle}
      </p>

      <div className="digital-services-list">
        {services.map(({ icon, labelKey, descKey }) => (
          <div key={labelKey} className="digital-service-item">
            <div className="ds-icon-wrap" aria-hidden="true">{icon}</div>
            <div className="ds-info">
              <div className="ds-label">{t[labelKey]}</div>
              <div className="ds-desc">{t[descKey]}</div>
            </div>
            <div className="ds-arrow" aria-hidden="true">→</div>
          </div>
        ))}
      </div>

      <button
        id="btn-digital-cta"
        className="btn btn-brand w-full"
        style={{ borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', justifyContent: 'center', marginTop: 'var(--sp-md)' }}
        onClick={handleCTA}
      >
        {t.digitalCTA}
      </button>
    </div>
  );
}
