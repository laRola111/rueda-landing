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
  // const { t } = useLang();
  // const [input, setInput] = useState('');
  // const [result, setResult] = useState<(typeof DEMO_ORDERS)[string] | null>(null);
  // const [notFound, setNotFound] = useState(false);

  // const handleTrack = () => {
  //   const key = input.trim().toUpperCase();
  //   const order = DEMO_ORDERS[key];
  //   if (order) {
  //     setResult(order);
  //     setNotFound(false);
  //   } else {
  //     setResult(null);
  //     setNotFound(true);
  //   }
  // };

  // const steps = [
  //   { labelKey: 'stepReceived', descKey: 'stepReceivedDesc', icon: '📥' },
  //   { labelKey: 'stepProduction', descKey: 'stepProductionDesc', icon: '⚙️' },
  //   { labelKey: 'stepQC', descKey: 'stepQCDesc', icon: '🔍' },
  //   { labelKey: 'stepReady', descKey: 'stepReadyDesc', icon: '✅' },
  // ] as const;

  return null; // 💤 Muted for now
}
