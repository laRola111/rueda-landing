'use client';

import { useLang } from '@/app/context/LangContext';
import { CONFIG } from '@/app/config';

const WHATSAPP = CONFIG.WHATSAPP_PRIMARY;

export default function VehicleWrapsSection() {
  const { t, lang } = useLang();

  const wrapTypes = [
    { icon: '🚗', labelKey: 'wrapCars',      descKey: 'wrapCarsDesc' },
    { icon: '🚐', labelKey: 'wrapVans',      descKey: 'wrapVansDesc' },
    { icon: '🛻', labelKey: 'wrapTrucks',    descKey: 'wrapTrucksDesc' },
    { icon: '🍔', labelKey: 'wrapFoodTruck', descKey: 'wrapFoodTruckDesc' },
    { icon: '✂️', labelKey: 'wrapDecals',    descKey: 'wrapDecalsDesc' },
  ] as const;

  const handleCTA = () => {
    const msg = encodeURIComponent(t.wrapMsg);
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, '_blank');
  };

  return (
    <div>
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: 'var(--sp-lg)', lineHeight: 1.6 }}>
        {t.wrapsSubtitle}
      </p>

      <div className="wrap-types-grid">
        {wrapTypes.map(({ icon, labelKey, descKey }) => (
          <div key={labelKey} className="wrap-type-card">
            <div className="wrap-type-icon" aria-hidden="true">{icon}</div>
            <div>
              <div className="wrap-type-label">{t[labelKey]}</div>
              <div className="wrap-type-desc">{t[descKey]}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Highlight stat bar */}
      <div className="wrap-stat-row">
        <div className="wrap-stat">
          <span className="wrap-stat-num">100+</span>
          <span className="wrap-stat-lbl">{t.wrapStatVehicles}</span>
        </div>
        <div className="wrap-stat-divider" />
        <div className="wrap-stat">
          <span className="wrap-stat-num">5★</span>
          <span className="wrap-stat-lbl">Google</span>
        </div>
        <div className="wrap-stat-divider" />
        <div className="wrap-stat">
          <span className="wrap-stat-num">48h</span>
          <span className="wrap-stat-lbl">{t.wrapStatTurnaround}</span>
        </div>
      </div>

      <button
        id="btn-wrap-cta"
        className="btn btn-brand w-full"
        style={{ borderRadius: 'var(--radius-md)', padding: '1rem', display: 'flex', justifyContent: 'center', marginTop: 'var(--sp-md)' }}
        onClick={handleCTA}
      >
        {t.wrapCTA}
      </button>
    </div>
  );
}
