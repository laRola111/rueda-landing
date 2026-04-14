'use client';

import { useState } from 'react';
import { useLang } from '@/app/context/LangContext';

// Demo orders — in a real system, these would come from a CRM/database
const DEMO_ORDERS: Record<
  string,
  { step: 0 | 1 | 2 | 3; service: string }
> = {
  'RUEDA-2025-001': { step: 3, service: 'Bordado — 50 gorras' },
  'RUEDA-2025-002': { step: 1, service: 'DTF Print — 100 camisetas' },
  'RUEDA-2025-003': { step: 2, service: 'Vehicle Wrap — Ford Transit' },
  'RUEDA-DEMO': { step: 1, service: 'Demo — Tu orden aquí' },
};

type StepState = 'done' | 'active' | 'pending';

function getStepState(step: number, orderStep: number): StepState {
  if (step < orderStep) return 'done';
  if (step === orderStep) return 'active';
  return 'pending';
}

export default function OrderTracker() {
  const { t } = useLang();
  const [input, setInput] = useState('');
  const [result, setResult] = useState<(typeof DEMO_ORDERS)[string] | null>(null);
  const [notFound, setNotFound] = useState(false);

  const handleTrack = () => {
    const key = input.trim().toUpperCase();
    const order = DEMO_ORDERS[key];
    if (order) {
      setResult(order);
      setNotFound(false);
    } else {
      setResult(null);
      setNotFound(true);
    }
  };

  const steps = [
    { labelKey: 'stepReceived', descKey: 'stepReceivedDesc', icon: '📥' },
    { labelKey: 'stepProduction', descKey: 'stepProductionDesc', icon: '⚙️' },
    { labelKey: 'stepQC', descKey: 'stepQCDesc', icon: '🔍' },
    { labelKey: 'stepReady', descKey: 'stepReadyDesc', icon: '✅' },
  ] as const;

  return (
    <div aria-label="Order tracking">
      <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
        {t.trackerSubtitle}
      </p>
      <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.75rem' }}>
        💡 Demo: prueba con <strong style={{ color: 'var(--brand-primary)' }}>RUEDA-DEMO</strong>
      </p>

      <div className="tracker-input-row">
        <input
          id="order-id-input"
          type="text"
          className="form-control"
          placeholder={t.placeholderOrderId}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleTrack()}
          aria-label="Order number input"
        />
        <button
          id="btn-track-order"
          className="btn btn-primary"
          onClick={handleTrack}
          style={{ borderRadius: 'var(--radius-md)', whiteSpace: 'nowrap', flexShrink: 0 }}
        >
          {t.btnTrack}
        </button>
      </div>

      {notFound && (
        <p style={{ marginTop: '1rem', fontSize: '0.82rem', color: 'hsl(15, 80%, 60%)' }}>
          {t.errorOrder}
        </p>
      )}

      {result && (
        <div className="tracker-result">
          <p
            style={{
              fontSize: '0.78rem',
              color: 'var(--text-muted)',
              marginBottom: '0.25rem',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
            }}
          >
            🎯 {result.service}
          </p>
          {steps.map((step, i) => {
            const state = getStepState(i, result.step);
            return (
              <div
                key={step.labelKey}
                className={`tracker-step step-${state}`}
                role="listitem"
                aria-current={state === 'active' ? 'step' : undefined}
              >
                <div className={`step-dot step-dot-${state}`}>{step.icon}</div>
                <div>
                  <div className="step-title">{t[step.labelKey]}</div>
                  <div className="step-desc">{t[step.descKey]}</div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
