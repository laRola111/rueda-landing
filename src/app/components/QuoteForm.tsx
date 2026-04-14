'use client';

import { useState, FormEvent } from 'react';
import { useLang } from '@/app/context/LangContext';
import { CONFIG } from '@/app/config';

const WHATSAPP_NUMBER = CONFIG.WHATSAPP_PRIMARY;

interface QuoteFormProps {
  onToast: (msg: string) => void;
}

export default function QuoteForm({ onToast }: QuoteFormProps) {
  const { t } = useLang();

  const [service, setService] = useState('');
  const [qty, setQty] = useState('');
  const [date, setDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!service) return alert('Por favor selecciona un servicio.');

    const lines = [
      `🛠️ *Servicio:* ${service}`,
      qty ? `📦 *Cantidad:* ${qty} unidades` : null,
      date ? `📅 *Entrega deseada:* ${date}` : null,
      notes ? `📝 *Notas:* ${notes}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const message = encodeURIComponent(
      `Hola Rueda La Rola! 👋 Quisiera solicitar una cotización:\n\n${lines}`
    );

    onToast(t.toastQuote);
    setTimeout(() => {
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
    }, 400);
  };

  const baseDate = new Date().toISOString().split('T')[0];

  return (
    <form
      id="quote-form"
      className="quote-form"
      onSubmit={handleSubmit}
      aria-label="Formulario de cotización"
    >
      <div className="form-group">
        <label htmlFor="quote-service" className="form-label">
          {t.labelService}
        </label>
        <select
          id="quote-service"
          className="form-control"
          value={service}
          onChange={(e) => setService(e.target.value)}
          required
        >
          <option value="" disabled>
            {t.placeholderService}
          </option>
          <option value={t.opt_embroider}>{t.opt_embroider}</option>
          <option value={t.opt_dtf}>{t.opt_dtf}</option>
          <option value={t.opt_wrap}>{t.opt_wrap}</option>
          <option value={t.opt_design}>{t.opt_design}</option>
          <option value={t.opt_marketing}>{t.opt_marketing}</option>
          <option value={t.opt_merch}>{t.opt_merch}</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="quote-qty" className="form-label">
          {t.labelQty}
        </label>
        <input
          id="quote-qty"
          type="number"
          min="1"
          className="form-control"
          placeholder={t.placeholderQty}
          value={qty}
          onChange={(e) => setQty(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="quote-date" className="form-label">
          {t.labelDate}
        </label>
        <input
          id="quote-date"
          type="date"
          min={baseDate}
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="quote-notes" className="form-label">
          {t.labelNotes}
        </label>
        <textarea
          id="quote-notes"
          className="form-control"
          placeholder={t.placeholderNotes}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          style={{ resize: 'vertical' }}
        />
      </div>

      <button
        type="submit"
        id="btn-send-quote"
        className="btn btn-whatsapp w-full"
        style={{ borderRadius: 'var(--radius-md)', padding: '1rem' }}
      >
        {t.btnSendQuote}
      </button>
    </form>
  );
}
