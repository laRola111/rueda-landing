'use client';

import { useLang } from '@/app/context/LangContext';
import { CONFIG } from '@/app/config';

const WHATSAPP = CONFIG.WHATSAPP_PRIMARY;

export default function PrintBestsellers() {
  const { t } = useLang();

  const items = [
    { icon: '💼', labelKey: 'printCards',   descKey: 'printCardsDesc',   hot: true },
    { icon: '🍟', labelKey: 'printMenus',   descKey: 'printMenusDesc',   hot: true },
    { icon: '🚘', labelKey: 'printVehicle', descKey: 'printVehicleDesc', hot: false },
    { icon: '📢', labelKey: 'printBanners', descKey: 'printBannersDesc', hot: false },
  ] as const;

  const handleCTA = () => {
    const msg = encodeURIComponent(t.printMsg);
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  };

  return (
    <div>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: 'var(--sp-lg)', lineHeight: 1.6 }}>
        {t.printSubtitle}
      </p>

      <div className="print-grid">
        {items.map(({ icon, labelKey, descKey, hot }) => (
          <div key={labelKey} className="print-card">
            {hot && (
              <span className="hot-badge" aria-label={t.printHotBadge}>🔥</span>
            )}
            <div className="print-icon" aria-hidden="true">{icon}</div>
            <div className="print-label">{t[labelKey]}</div>
            <div className="print-desc">{t[descKey]}</div>
          </div>
        ))}
      </div>

      <button
        id="btn-print-cta"
        className="btn btn-brand w-full"
        style={{ borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', justifyContent: 'center', marginTop: 'var(--sp-md)' }}
        onClick={handleCTA}
      >
        {t.printCTA}
      </button>
    </div>
  );
}
