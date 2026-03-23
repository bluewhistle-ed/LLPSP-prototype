// ── Government Context ──────────────────────────────────────────────────────
// Manages the coalition → ministry allocation → minister nomination pipeline.
// Phase 5 (Supabase): Replace with database reads/writes.

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type {
  Ministry, Committee, MinistryWithMinisters, SpeakerEntry,
  AllocatedBerth, CoalitionResult, MinistryWithThemes,
  Institution, ParentInstitution,
} from '../types';
import {
  INITIAL_MINISTRIES,
  INITIAL_COMMITTEES,
  INITIAL_INSTITUTIONS,
  INITIAL_PARENT_INSTITUTIONS,
  ALLOCATION_MINISTRIES,
  PM_ALLOCATION,
  COUNCIL_OF_MINISTERS,
  DAY1_SPEAKERS,
  DAY2_SPEAKERS,
  NOTICE_THEMES,
  EVENT_FORM_MINISTRIES,
} from '../data/mock/government';

// ── Context Value ───────────────────────────────────────────────────────────

interface GovernmentContextValue {
  // Admin global lists (persist across navigation)
  ministries: Ministry[];
  committees: Committee[];
  institutions: Institution[];
  parentInstitutions: ParentInstitution[];
  addMinistry: (name: string) => void;
  addCommittee: (name: string) => void;
  addInstitution: (name: string, type: string, parentInstitutionId?: number) => void;
  addParentInstitution: (name: string) => void;
  updateMinistryThemes: (ministryId: number, themes: string[]) => void;

  // Tier 1: Ministries available for PM allocation
  allocationMinistries: Ministry[];

  // Tier 2: PM's allocation to coalition parties
  pmAllocation: Record<number, AllocatedBerth[]>;

  // Council of Ministers (fully assigned view)
  councilOfMinisters: MinistryWithMinisters[];

  // Speaker lists
  day1Speakers: SpeakerEntry[];
  day2Speakers: SpeakerEntry[];

  // Coalition result (set after lock-in)
  coalitionResult: CoalitionResult | null;
  setCoalitionResult: (result: CoalitionResult) => void;

  // Notice themes
  noticeThemes: string[];

  // Event form ministries (with themes for NewEventForm)
  eventFormMinistries: MinistryWithThemes[];

  // Loading / error (Phase 4 readiness)
  loading: boolean;
  error: string | null;
}

// ── Context ─────────────────────────────────────────────────────────────────

const GovernmentContext = createContext<GovernmentContextValue | null>(null);

export function GovernmentProvider({ children }: { children: ReactNode }) {
  const [ministries, setMinistries] = useState<Ministry[]>(INITIAL_MINISTRIES);
  const [committees, setCommittees] = useState<Committee[]>(INITIAL_COMMITTEES);
  const [institutions, setInstitutions] = useState<Institution[]>(INITIAL_INSTITUTIONS);
  const [parentInstitutions, setParentInstitutions] = useState<ParentInstitution[]>(INITIAL_PARENT_INSTITUTIONS);
  const [coalitionResult, setCoalitionResult] = useState<CoalitionResult | null>(null);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  const addMinistry = useCallback((name: string) => {
    setMinistries(prev => [
      ...prev,
      { id: prev.length + 1, name, status: 'active' },
    ]);
  }, []);

  const addCommittee = useCallback((name: string) => {
    setCommittees(prev => [
      ...prev,
      { id: prev.length + 1, name },
    ]);
  }, []);

  const addInstitution = useCallback((name: string, type: string, parentInstitutionId?: number) => {
    setInstitutions(prev => [
      ...prev,
      { id: prev.length + 1, name, type, parentInstitutionId },
    ]);
  }, []);

  const addParentInstitution = useCallback((name: string) => {
    setParentInstitutions(prev => [
      ...prev,
      { id: prev.length + 1, name },
    ]);
  }, []);

  const updateMinistryThemes = useCallback((ministryId: number, themes: string[]) => {
    setMinistries(prev => prev.map(ministry => (
      ministry.id === ministryId ? { ...ministry, themes } : ministry
    )));
  }, []);

  return (
    <GovernmentContext.Provider
      value={{
        ministries,
        committees,
        institutions,
        parentInstitutions,
        addMinistry,
        addCommittee,
        addInstitution,
        addParentInstitution,
        updateMinistryThemes,
        allocationMinistries: ALLOCATION_MINISTRIES,
        pmAllocation: PM_ALLOCATION,
        councilOfMinisters: COUNCIL_OF_MINISTERS,
        day1Speakers: DAY1_SPEAKERS,
        day2Speakers: DAY2_SPEAKERS,
        coalitionResult,
        setCoalitionResult,
        noticeThemes: NOTICE_THEMES,
        eventFormMinistries: EVENT_FORM_MINISTRIES,
        loading,
        error,
      }}
    >
      {children}
    </GovernmentContext.Provider>
  );
}

export function useGovernment(): GovernmentContextValue {
  const ctx = useContext(GovernmentContext);
  if (!ctx) {
    throw new Error('useGovernment must be used within a GovernmentProvider');
  }
  return ctx;
}