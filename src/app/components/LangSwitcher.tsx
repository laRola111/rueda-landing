'use client';

import { useLang } from '@/app/context/LangContext';

export default function LangSwitcher() {
  const { lang, setLang } = useLang();

  return (
    <div className="lang-switcher" role="group" aria-label="Language selector">
      <button
        id="lang-es"
        className={`lang-btn${lang === 'es' ? ' active' : ''}`}
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
      >
        ES
      </button>
      <button
        id="lang-en"
        className={`lang-btn${lang === 'en' ? ' active' : ''}`}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  );
}
