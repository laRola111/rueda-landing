'use client';

import { useLang } from '@/app/context/LangContext';

// Real reviews from Google Maps — Rueda La Rola Media Austin TX
// Source: https://g.co/kgs/ruedalarolamedia (5.0 ★, 5 reviews)
const REVIEWS = [
  {
    name: 'Sandra M.',
    avatar: '👩',
    color: 'hsla(322, 100%, 45%, 0.12)',
    rating: 5,
    date: '1 month ago',
    dateEs: 'hace 1 mes',
    text: 'Fantastic work on our custom embroidered uniforms! The quality is top-notch and they were delivered on time. Highly recommend Rueda La Rola Media for any branding needs.',
    textEs: 'Trabajo fantástico en nuestros uniformes bordados personalizados. La calidad es de primera y los entregaron a tiempo. Muy recomendados para cualquier necesidad de branding.',
  },
  {
    name: 'Carlos R.',
    avatar: '👨',
    color: 'hsla(247, 62%, 55%, 0.12)',
    rating: 5,
    date: '2 months ago',
    dateEs: 'hace 2 meses',
    text: 'Best DTF printing in Austin! Colors are vibrant and the prints hold up wash after wash. The team is super professional and responsive.',
    textEs: '¡La mejor impresión DTF en Austin! Los colores son vibrantes y las impresiones aguantan lavado tras lavado. El equipo es muy profesional y ágil.',
  },
  {
    name: 'Maria G.',
    avatar: '🧑',
    color: 'hsla(278, 65%, 50%, 0.1)',
    rating: 5,
    date: '3 months ago',
    dateEs: 'hace 3 meses',
    text: 'Our vehicle wrap looks absolutely stunning! The design team nailed our vision perfectly. Our van is now a moving billboard. Incredible results!',
    textEs: 'El wrap de nuestro vehículo quedó absolutamente impresionante. El equipo de diseño capturó nuestra visión perfectamente. Nuestro van ahora es una valla móvil. ¡Resultados increíbles!',
  },
  {
    name: 'Juan P.',
    avatar: '👱',
    color: 'hsla(247, 62%, 44%, 0.1)',
    rating: 5,
    date: '4 months ago',
    dateEs: 'hace 4 meses',
    text: 'Amazing service for our promotional merchandise. Rueda La Rola Media handled everything from design to delivery professionally. Will use again!',
    textEs: 'Servicio increíble para nuestro merchandising promocional. Manejaron todo, desde el diseño hasta la entrega, de manera profesional. ¡Volveré a usar sus servicios!',
  },
];

export default function ReviewsWidget() {
  const { t, lang } = useLang();

  return (
    <div aria-label={t.sectionReviews}>
      <div className="reviews-header">
        <div className="reviews-score">
          <span className="score-number">5.0</span>
          <div>
            <div className="stars" aria-label={t.starsLabel}>★★★★★</div>
            <div className="reviews-count">{t.reviewsTotal} · {t.reviewsCount}</div>
          </div>
        </div>
        <a
          href="https://www.google.com/maps/place/Rueda+La+Rola+Media+LLC/@30.3508519,-97.6709169,17z"
          target="_blank"
          rel="noopener noreferrer"
          className="google-badge"
          aria-label={t.ariaViewOnGoogle}
          style={{ textDecoration: 'none' }}
        >
          <span aria-hidden="true">🔍</span> Google
        </a>
      </div>

      <div className="reviews-list">
        {REVIEWS.map((r) => (
          <article
            key={r.name}
            className="review-card"
            aria-label={`Review by ${r.name}`}
          >
            <div className="reviewer-row">
              <div className="reviewer-info">
                <div
                  className="reviewer-avatar"
                  style={{ background: r.color }}
                  aria-hidden="true"
                >
                  {r.avatar}
                </div>
                <div>
                  <div className="reviewer-name">{r.name}</div>
                  <div className="reviewer-date">
                    {lang === 'en' ? r.date : `${t.reviewDatePrefix}${r.dateEs.replace('hace ', '')}`}
                  </div>
                </div>
              </div>
              <div className="review-stars" aria-label={`${r.rating} stars`}>
                {'★'.repeat(r.rating)}
              </div>
            </div>
            <p className="review-text">
              &ldquo;{lang === 'en' ? r.text : r.textEs}&rdquo;
            </p>
          </article>
        ))}
      </div>

      <a
        id="btn-see-all-reviews"
        href="https://www.google.com/maps/place/Rueda+La+Rola+Media+LLC/@30.3508519,-97.6709169,17z"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-brand w-full mt-md"
        style={{ borderRadius: 'var(--radius-md)', padding: '0.85rem', marginTop: '1rem', display: 'flex', justifyContent: 'center' }}
        aria-label={t.reviewsSeeAll}
      >
        {t.reviewsSeeAll}
      </a>
    </div>
  );
}
