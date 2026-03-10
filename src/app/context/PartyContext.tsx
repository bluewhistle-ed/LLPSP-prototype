// ── Party Context ───────────────────────────────────────────────────────────
// Provides centralized party & member data to all components.
// Phase 5 (Supabase): Replace useState initializers with async fetches.

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { Party, PartyMember } from '../types';
import {
  ALL_PARTIES as MOCK_ALL_PARTIES,
  OPPOSITION_PARTIES as MOCK_OPPOSITION_PARTIES,
  UPP_MEMBERS,
  GOVERNMENT_PARTY_IDS,
  TOTAL_HOUSE_SEATS as MOCK_TOTAL_SEATS,
  MAJORITY_THRESHOLD as MOCK_MAJORITY,
  TOTAL_HOUSE_STRENGTH,
  CURRENT_PARTY_ID,
} from '../data/mock/parties';

// ── Context Value ───────────────────────────────────────────────────────────

interface PartyContextValue {
  // Data
  allParties: Party[];
  governmentParties: Party[];
  oppositionParties: Party[];
  currentPartyMembers: PartyMember[];
  currentPartyId: number;

  // House config
  totalHouseSeats: number;
  majorityThreshold: number;
  totalHouseStrength: number;

  // Loading / error (Phase 4 readiness)
  loading: boolean;
  error: string | null;
}

// ── Context ─────────────────────────────────────────────────────────────────

const PartyContext = createContext<PartyContextValue | null>(null);

export function PartyProvider({ children }: { children: ReactNode }) {
  const [allParties] = useState<Party[]>(MOCK_ALL_PARTIES);
  const [oppositionParties] = useState<Party[]>(MOCK_OPPOSITION_PARTIES);
  const [currentPartyMembers] = useState<PartyMember[]>(UPP_MEMBERS);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  const governmentParties = allParties.filter(p => GOVERNMENT_PARTY_IDS.includes(p.id));

  return (
    <PartyContext.Provider
      value={{
        allParties,
        governmentParties,
        oppositionParties,
        currentPartyMembers,
        currentPartyId: CURRENT_PARTY_ID,
        totalHouseSeats: MOCK_TOTAL_SEATS,
        majorityThreshold: MOCK_MAJORITY,
        totalHouseStrength: TOTAL_HOUSE_STRENGTH,
        loading,
        error,
      }}
    >
      {children}
    </PartyContext.Provider>
  );
}

export function useParties(): PartyContextValue {
  const ctx = useContext(PartyContext);
  if (!ctx) {
    throw new Error('useParties must be used within a PartyProvider');
  }
  return ctx;
}
