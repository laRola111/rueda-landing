'use client';

import { useCallback, useState } from 'react';
import Image from 'next/image';
import { LangProvider, useLang } from '@/app/context/LangContext';
import { CONFIG } from '@/app/config';
import LangSwitcher from '@/app/components/LangSwitcher';
import ContactGrid from '@/app/components/ContactGrid';
import ServicesNav from '@/app/components/ServicesNav';
import PaymentCenter from '@/app/components/PaymentCenter';
import ProviderDirectory from '@/app/components/ProviderDirectory';
import QuoteForm from '@/app/components/QuoteForm';
import OrderTracker from '@/app/components/OrderTracker';
import ReviewsWidget from '@/app/components/ReviewsWidget';

/* ── Toast ────────────────────────────────────────── */
function Toast({ message, visible }: { message: string; visible: boolean }) {
  return (
    <div className={`toast${visible ? ' visible' : ''}`} role="status" aria-live="polite">
      {message}
    </div>
  );
}

/* ── Section Card ─────────────────────────────────── */
function SectionCard({ children }: { children: React.ReactNode }) {
  return <div className="glass section-card">{children}</div>;
}

/* ── Social SVG Icons ─────────────────────────────── */
const IgIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="ig-grad" x1="0" y1="24" x2="24" y2="0" gradientUnits="userSpaceOnUse">
        <stop stopColor="#f09433" />
        <stop offset="0.25" stopColor="#e6683c" />
        <stop offset="0.5"  stopColor="#dc2743" />
        <stop offset="0.75" stopColor="#cc2366" />
        <stop offset="1"    stopColor="#bc1888" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="url(#ig-grad)" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="4.5" stroke="url(#ig-grad)" strokeWidth="2" fill="none"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="url(#ig-grad)"/>
  </svg>
);

const FbIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="#1877F2" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M24 12.073C24 5.4 18.627 0 12 0S0 5.4 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
  </svg>
);

const TtIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34v-7a8.16 8.16 0 0 0 4.77 1.52V6.38a4.85 4.85 0 0 1-1-.31z" fill="#ffffff"/>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34v-7a8.16 8.16 0 0 0 4.77 1.52V6.38a4.85 4.85 0 0 1-1-.31z" fill="none"/>
  </svg>
);

const WebIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/>
    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);

/* ── Social Row ───────────────────────────────────── */
function SocialRow() {
  const socials = [
    { id: 'ig',  Icon: IgIcon,  href: CONFIG.INSTAGRAM, label: 'Instagram', hoverColor: 'hsla(330, 80%, 55%, 0.18)',  borderColor: 'hsla(330, 80%, 55%, 0.4)' },
    { id: 'fb',  Icon: FbIcon,  href: CONFIG.FACEBOOK,  label: 'Facebook',  hoverColor: 'hsla(214, 89%, 52%, 0.18)',  borderColor: 'hsla(214, 89%, 52%, 0.4)' },
    { id: 'tt',  Icon: TtIcon,  href: CONFIG.TIKTOK,    label: 'TikTok',    hoverColor: 'hsla(0, 0%, 100%, 0.1)',     borderColor: 'hsla(0, 0%, 80%, 0.35)' },
    { id: 'web', Icon: WebIcon, href: CONFIG.WEBSITE,   label: 'Website',   hoverColor: 'hsla(247, 62%, 55%, 0.15)', borderColor: 'hsla(247, 62%, 55%, 0.4)' },
  ];

  return (
    <div className="social-row" role="group" aria-label="Social media links">
      {socials.map(({ id, Icon, href, label, hoverColor, borderColor }) => (
        <a
          key={id}
          id={`social-${id}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
          aria-label={label}
          title={label}
          style={{ '--hover-bg': hoverColor, '--hover-border': borderColor } as React.CSSProperties}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
}

/* ── Business Info ────────────────────────────────── */
function BusinessInfo() {
  const { lang } = useLang();
  const hours = lang === 'en'
    ? 'Mon – Sat: 8:00 AM – 6:00 PM · Sun: Closed'
    : 'Lun – Sáb: 8:00 AM – 6:00 PM · Dom: Cerrado';

  return (
    <div className="info-grid">
      <a
        id="info-address"
        href={CONFIG.MAPS_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="info-row"
        style={{ textDecoration: 'none' }}
        aria-label="Open address in Google Maps"
      >
        <span className="info-icon">📍</span>
        <div>
          <div className="info-label">{lang === 'en' ? 'Address' : 'Dirección'}</div>
          <div className="info-value">{CONFIG.ADDRESS}</div>
        </div>
      </a>

      <div className="info-row">
        <span className="info-icon">🕐</span>
        <div>
          <div className="info-label">{lang === 'en' ? 'Hours' : 'Horario'}</div>
          <div className="info-value">{hours}</div>
        </div>
      </div>

      <a
        id="info-phone-main"
        href={`tel:${CONFIG.PHONE_MAIN}`}
        className="info-row"
        style={{ textDecoration: 'none' }}
        aria-label="Call main line"
      >
        <span className="info-icon">📞</span>
        <div>
          <div className="info-label">{lang === 'en' ? 'Main Line · Austin TX' : 'Línea Principal · Austin TX'}</div>
          <div className="info-value" style={{ color: 'var(--brand-magenta)' }}>{CONFIG.PHONE_MAIN}</div>
        </div>
      </a>

      <a
        id="info-phone-office"
        href={`tel:${CONFIG.PHONE_OFFICE}`}
        className="info-row"
        style={{ textDecoration: 'none' }}
        aria-label="Call office line"
      >
        <span className="info-icon">🏢</span>
        <div>
          <div className="info-label">{lang === 'en' ? 'Office (LLC)' : 'Oficina (LLC)'}</div>
          <div className="info-value" style={{ color: 'hsl(247, 70%, 70%)' }}>{CONFIG.PHONE_OFFICE}</div>
        </div>
      </a>

      <a
        id="info-email"
        href={`mailto:${CONFIG.EMAIL}`}
        className="info-row"
        style={{ textDecoration: 'none' }}
        aria-label="Send email"
      >
        <span className="info-icon">✉️</span>
        <div>
          <div className="info-label">Email</div>
          <div className="info-value" style={{ color: 'var(--brand-magenta)' }}>{CONFIG.EMAIL}</div>
        </div>
      </a>
    </div>
  );
}

/* ── Landing Inner (needs LangContext) ────────────── */
function LandingInner() {
  const { t, lang } = useLang();
  const [toastMsg, setToastMsg] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = useCallback((msg: string) => {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2800);
  }, []);

  return (
    <div className="page-wrapper">
      <LangSwitcher />

      <main className="main-content">

        {/* ── HERO ───────────────────────────── */}
        <section className="hero animate-fade-in" aria-label="Perfil de marca">

          {/* Spinning gradient ring with real logo */}
          <div className="hero-logo-wrap" role="img" aria-label="Rueda La Rola Media logo">
            <Image
              src="/logo.png"
              alt="Rueda La Rola Media"
              width={100}
              height={100}
              className="hero-logo-img"
              priority
            />
          </div>

          <div className="hero-badge" role="status">🟢 {t.badge.replace('🟢 ', '')}</div>

          <h1
            className="hero-name font-display gradient-text-brand"
            style={{ fontSize: 'clamp(1.7rem, 7vw, 2.4rem)' }}
          >
            Rueda La Rola Media
          </h1>

          {/* Slogan image */}
          <Image
            src="/slogan.png"
            alt="Your Art Comes to Life"
            width={280}
            height={105}
            className="hero-slogan"
            style={{ height: 'auto' }}
            priority
          />

          <p className="hero-tagline">{t.tagline}</p>

          <div className="hero-location">
            <span aria-hidden="true">📍</span>
            <span>Austin, TX · {lang === 'en' ? 'Mon–Sat 8am–6pm' : 'Lun–Sáb 8am–6pm'}</span>
          </div>

          {/* Social row */}
          <SocialRow />
        </section>

        {/* ── CONTACT ────────────────────────── */}
        <section aria-label={t.sectionContact} className="animate-fade-in delay-2">
          <div className="section-tag"><span aria-hidden="true">📡</span> {t.sectionContact}</div>
          <ContactGrid onToast={showToast} />
        </section>

        <div className="divider" aria-hidden="true" />

        {/* ── SERVICES ───────────────────────── */}
        <section aria-label={t.sectionServices} className="animate-fade-in delay-3">
          <SectionCard>
            <div className="section-tag"><span aria-hidden="true">🛠️</span> {t.sectionServices}</div>
            <ServicesNav />
          </SectionCard>
        </section>

        {/* ── QUOTE FORM ─────────────────────── */}
        <section id="quote" aria-label={t.sectionQuote} className="animate-fade-in delay-4">
          <SectionCard>
            <div className="section-tag"><span aria-hidden="true">⚡</span> {t.sectionQuote}</div>
            <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1.25rem', lineHeight: 1.55 }}>
              {t.quoteSubtitle}
            </p>
            <QuoteForm onToast={showToast} />
          </SectionCard>
        </section>

        {/* ── BUSINESS INFO ──────────────────── */}
        <section aria-label={lang === 'en' ? 'Business Info' : 'Información del Negocio'} className="animate-fade-in delay-5">
          <SectionCard>
            <div className="section-tag">
              <span aria-hidden="true">🏢</span>
              {lang === 'en' ? 'Business Info' : 'Información'}
            </div>
            <BusinessInfo />
          </SectionCard>
        </section>

        {/* ── PAYMENT ────────────────────────── */}
        <section aria-label={t.sectionPayment} className="animate-fade-in delay-5">
          <SectionCard>
            <div className="section-tag"><span aria-hidden="true">💳</span> {t.sectionPayment}</div>
            <PaymentCenter />
          </SectionCard>
        </section>

        {/* ── PROVIDERS ──────────────────────── */}
        <section aria-label={t.sectionProviders} className="animate-fade-in delay-6">
          <SectionCard>
            <div className="section-tag"><span aria-hidden="true">📦</span> {t.sectionProviders}</div>
            <ProviderDirectory />
          </SectionCard>
        </section>

        {/* ── ORDER TRACKER ──────────────────── */}
        <section aria-label={t.sectionTracker} className="animate-fade-in delay-6">
          <SectionCard>
            <div className="section-tag"><span aria-hidden="true">🎯</span> {t.sectionTracker}</div>
            <OrderTracker />
          </SectionCard>
        </section>

        {/* ── REVIEWS ────────────────────────── */}
        <section aria-label={t.sectionReviews} className="animate-fade-in delay-7">
          <SectionCard>
            <div className="section-tag"><span aria-hidden="true">⭐</span> {t.sectionReviews}</div>
            <ReviewsWidget />
          </SectionCard>
        </section>

        {/* ── FOOTER ─────────────────────────── */}
        <footer
          className="text-center animate-fade-in delay-9"
          style={{ marginTop: 'var(--sp-xl)', paddingBottom: 'var(--sp-lg)' }}
        >
          <a href={CONFIG.WEBSITE} target="_blank" rel="noopener noreferrer"
            style={{ fontSize: '0.75rem', color: 'var(--brand-magenta)', display: 'block', marginBottom: '0.3rem' }}>
            {CONFIG.WEBSITE.replace('https://', '')}
          </a>
          <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.footer}</p>
          <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '0.35rem', opacity: 0.6 }}>
            © {new Date().getFullYear()} Rueda La Rola Media LLC
          </p>
        </footer>
      </main>

      <Toast message={toastMsg} visible={toastVisible} />
    </div>
  );
}

/* ── Page root ────────────────────────────────────── */
export default function Page() {
  return (
    <LangProvider>
      <LandingInner />
    </LangProvider>
  );
}
