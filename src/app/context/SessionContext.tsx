// ── Session Context ─────────────────────────────────────────────────────────
// Manages events/PSPs. Form submissions now persist within the session.
// Phase 5 (Supabase): Replace with database reads/writes.

import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';
import type { PSPEvent } from '../types';
import { INITIAL_EVENTS, AVAILABLE_PARTNERS } from '../data/mock/events';

// ── Context Value ───────────────────────────────────────────────────────────

interface SessionContextValue {
  // Events
  events: PSPEvent[];
  addEvent: (event: Omit<PSPEvent, 'id'>) => void;

  // Available partners for event creation
  availablePartners: string[];

  // Loading / error (Phase 4 readiness)
  loading: boolean;
  error: string | null;
}

// ── Context ─────────────────────────────────────────────────────────────────

const SessionContext = createContext<SessionContextValue | null>(null);

export function SessionProvider({ children }: { children: ReactNode }) {
  const [events, setEvents] = useState<PSPEvent[]>(INITIAL_EVENTS);
  const [loading] = useState(false);
  const [error] = useState<string | null>(null);

  const addEvent = useCallback((event: Omit<PSPEvent, 'id'>) => {
    setEvents(prev => [
      ...prev,
      { ...event, id: prev.length + 1 },
    ]);
  }, []);

  return (
    <SessionContext.Provider
      value={{
        events,
        addEvent,
        availablePartners: AVAILABLE_PARTNERS,
        loading,
        error,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export function useSession(): SessionContextValue {
  const ctx = useContext(SessionContext);
  if (!ctx) {
    throw new Error('useSession must be used within a SessionProvider');
  }
  return ctx;
}
