'use client';

import { useCallback } from 'react';
import { useLang } from '@/app/context/LangContext';
import { CONFIG } from '@/app/config';

interface ContactGridProps {
  onToast: (msg: string) => void;
}

export default function ContactGrid({ onToast }: ContactGridProps) {
  const { t } = useLang();

  const handleVCF = useCallback(() => {
    const vcf = [
      'BEGIN:VCARD',
      'VERSION:3.0',
      'FN:Rueda La Rola Media',
      'ORG:Rueda La Rola Media LLC',
      `TEL;TYPE=CELL,PREF:${CONFIG.PHONE_MAIN}`,
      `TEL;TYPE=WORK:${CONFIG.PHONE_OFFICE}`,
      `EMAIL:${CONFIG.EMAIL}`,
      `URL:${CONFIG.WEBSITE}`,
      `ADR;TYPE=WORK:;;1706 Dungan Ln Suite A101;Austin;TX;78754;USA`,
      `NOTE:${t.vcfNote}`,
      'END:VCARD',
    ].join('\n');

    const blob = new Blob([vcf], { type: 'text/vcard' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'RuedaLaRolaMedia.vcf';
    a.click();
    URL.revokeObjectURL(url);
    onToast(t.toastVCF);
  }, [t, onToast]);

  const handleShare = useCallback(async () => {
    const shareData = {
      title: 'Rueda La Rola Media',
      text: t.shareText,
      url: window.location.href,
    };
    if (navigator.share) {
      try { await navigator.share(shareData); } catch {}
    } else {
      await navigator.clipboard.writeText(window.location.href);
      onToast(t.toastShare);
    }
  }, [t, onToast]);

  return (
    <>
      <div className="contact-grid" role="group" aria-label={t.sectionContact}>
        <a
          id="btn-whatsapp"
          href={`https://wa.me/${CONFIG.WHATSAPP_PRIMARY}?text=${encodeURIComponent(t.whatsappMsgDefault)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn cb-whatsapp"
          aria-label={t.ariaContactWhatsApp}
        >
          <span className="cb-icon" aria-hidden="true">💬</span>
          <span>{t.whatsapp}</span>
        </a>

        <a
          id="btn-call-main"
          href={`tel:${CONFIG.PHONE_MAIN}`}
          className="contact-btn cb-call"
          aria-label={t.ariaContactCall}
        >
          <span className="cb-icon" aria-hidden="true">📞</span>
          <span>{t.call}</span>
        </a>

        <a
          id="btn-email"
          href={`mailto:${CONFIG.EMAIL}`}
          className="contact-btn cb-email"
          aria-label={t.ariaContactEmail}
        >
          <span className="cb-icon" aria-hidden="true">✉️</span>
          <span>{t.email}</span>
        </a>
      </div>

      <div className="contact-grid-bottom">
        <button
          id="btn-save-vcf"
          className="contact-btn cb-vcf"
          onClick={handleVCF}
          aria-label={t.ariaSaveVcf}
        >
          <span className="cb-icon" aria-hidden="true">👤</span>
          <span>{t.saveContact}</span>
        </button>

        <button
          id="btn-share"
          className="contact-btn cb-share"
          onClick={handleShare}
          aria-label={t.ariaShare}
        >
          <span className="cb-icon" aria-hidden="true">🔗</span>
          <span>{t.share}</span>
        </button>
      </div>
    </>
  );
}
