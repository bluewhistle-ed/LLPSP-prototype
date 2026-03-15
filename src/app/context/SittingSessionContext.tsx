/**
 * SittingSessionContext
 *
 * Shared state for the live sitting session. The Speaker drives all transitions;
 * Students observe the same state reactively.
 *
 * Phase state machine:
 *   not-started → ready (on-deck) → active (live) → between → ready → … → completed
 *
 * Production: Replace local state with Supabase Realtime subscriptions.
 */

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  type ReactNode,
} from 'react';
import type { SittingQuestion } from '../data/mock/sitting';
import { SITTING_1_QUESTIONS, SITTING_2_QUESTIONS } from '../data/mock/sitting';

// ── Types ────────────────────────────────────────────────────────────────────

export type SittingDay = 'sitting-1' | 'sitting-2';
export type QuestionStatus = 'pending' | 'on-deck' | 'active' | 'answered' | 'skipped';
export type SessionPhase = 'not-started' | 'ready' | 'active' | 'between' | 'completed';

export interface ManagedQuestion extends SittingQuestion {
  /** Speaker-managed status (overrides the mock data's static status) */
  speakerStatus: QuestionStatus;
}

// ── Context Value ────────────────────────────────────────────────────────────

interface SittingSessionContextValue {
  // Day
  activeDay: SittingDay;
  setActiveDay: (day: SittingDay) => void;

  // Questions (managed)
  questions: ManagedQuestion[];
  phase: SessionPhase;

  // Derived lists
  activeQuestion: ManagedQuestion | undefined;
  onDeckQuestion: ManagedQuestion | undefined;
  pendingQuestions: ManagedQuestion[];
  answeredQuestions: ManagedQuestion[];
  skippedQuestions: ManagedQuestion[];
  disposedQuestions: ManagedQuestion[];

  // Derived numbers
  activeQuestionNumber: number;
  focalQuestion: ManagedQuestion | null;
  focalMode: 'on-deck' | 'active';
  focalNumber: number;

  // Timer
  elapsedSeconds: number;

  // Supplementary
  supplementaryAllowed: boolean;

  // ── Speaker actions (no-ops for students, but available) ──────────────────
  beginSession: () => void;
  callOnDeckQuestion: () => void;
  markAnswered: () => void;
  skipQuestion: () => void;
  skipOnDeckQuestion: () => void;
  endSession: () => void;
  toggleSupplementary: () => void;
}

// ── Context ──────────────────────────────────────────────────────────────────

const SittingSessionContext = createContext<SittingSessionContextValue | null>(null);

// ── Provider ─────────────────────────────────────────────────────────────────

export function SittingSessionProvider({ children }: { children: ReactNode }) {
  const [activeDay, setActiveDayRaw] = useState<SittingDay>('sitting-1');

  // Initialise all questions as pending (Speaker drives everything)
  const initQuestions = useCallback((day: SittingDay): ManagedQuestion[] => {
    const raw = day === 'sitting-1' ? SITTING_1_QUESTIONS : SITTING_2_QUESTIONS;
    return raw.map(q => ({ ...q, speakerStatus: 'pending' as QuestionStatus }));
  }, []);

  const [questions, setQuestions] = useState<ManagedQuestion[]>(() => initQuestions('sitting-1'));
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [supplementaryAllowed, setSupplementaryAllowed] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Reset when switching days
  const setActiveDay = useCallback((day: SittingDay) => {
    setActiveDayRaw(day);
    setQuestions(initQuestions(day));
    setElapsedSeconds(0);
    setSupplementaryAllowed(false);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  }, [initQuestions]);

  // Timer management
  const startTimer = useCallback(() => {
    setElapsedSeconds(0);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setElapsedSeconds(prev => prev + 1);
    }, 1000);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // ── Derived state ──────────────────────────────────────────────────────────

  const activeQuestion = questions.find(q => q.speakerStatus === 'active');
  const onDeckQuestion = questions.find(q => q.speakerStatus === 'on-deck');
  const pendingQuestions = questions.filter(q => q.speakerStatus === 'pending');
  const answeredQuestions = questions.filter(q => q.speakerStatus === 'answered');
  const skippedQuestions = questions.filter(q => q.speakerStatus === 'skipped');
  const disposedQuestions = questions.filter(
    q => q.speakerStatus === 'answered' || q.speakerStatus === 'skipped'
  );

  const hasStarted = questions.some(q => q.speakerStatus !== 'pending');
  const allDisposed = pendingQuestions.length === 0 && !activeQuestion && !onDeckQuestion && hasStarted;

  const phase: SessionPhase = !hasStarted
    ? 'not-started'
    : activeQuestion
      ? 'active'
      : onDeckQuestion
        ? 'ready'
        : allDisposed
          ? 'completed'
          : 'between';

  const activeQuestionNumber = activeQuestion
    ? questions.indexOf(activeQuestion) + 1
    : 0;

  const focalQuestion = activeQuestion ?? onDeckQuestion ?? null;
  const focalMode: 'on-deck' | 'active' = activeQuestion ? 'active' : 'on-deck';
  const focalNumber = focalQuestion ? questions.indexOf(focalQuestion) + 1 : 0;

  // ── Actions ────────────────────────────────────────────────────────────────

  const promoteNextToOnDeck = useCallback((qs: ManagedQuestion[]) => {
    const firstPending = qs.find(q => q.speakerStatus === 'pending');
    if (firstPending) {
      firstPending.speakerStatus = 'on-deck';
    }
  }, []);

  const beginSession = useCallback(() => {
    setQuestions(prev => {
      const next = [...prev];
      promoteNextToOnDeck(next);
      return next;
    });
  }, [promoteNextToOnDeck]);

  const callOnDeckQuestion = useCallback(() => {
    setQuestions(prev => {
      const next = [...prev];
      const deck = next.find(q => q.speakerStatus === 'on-deck');
      if (deck) {
        deck.speakerStatus = 'active';
      }
      return next;
    });
    setSupplementaryAllowed(false);
    startTimer();
  }, [startTimer]);

  const markAnswered = useCallback(() => {
    stopTimer();
    setQuestions(prev => {
      const next = [...prev];
      const active = next.find(q => q.speakerStatus === 'active');
      if (active) {
        active.speakerStatus = 'answered';
      }
      promoteNextToOnDeck(next);
      return next;
    });
    setSupplementaryAllowed(false);
  }, [stopTimer, promoteNextToOnDeck]);

  const skipQuestion = useCallback(() => {
    stopTimer();
    setQuestions(prev => {
      const next = [...prev];
      const active = next.find(q => q.speakerStatus === 'active');
      if (active) {
        active.speakerStatus = 'skipped';
      }
      promoteNextToOnDeck(next);
      return next;
    });
    setSupplementaryAllowed(false);
  }, [stopTimer, promoteNextToOnDeck]);

  const skipOnDeckQuestion = useCallback(() => {
    setQuestions(prev => {
      const next = [...prev];
      const deck = next.find(q => q.speakerStatus === 'on-deck');
      if (deck) {
        deck.speakerStatus = 'skipped';
      }
      promoteNextToOnDeck(next);
      return next;
    });
  }, [promoteNextToOnDeck]);

  const endSession = useCallback(() => {
    stopTimer();
    setQuestions(prev => prev.map(q =>
      (q.speakerStatus === 'pending' || q.speakerStatus === 'active' || q.speakerStatus === 'on-deck')
        ? { ...q, speakerStatus: 'skipped' as QuestionStatus }
        : q
    ));
  }, [stopTimer]);

  const toggleSupplementary = useCallback(() => {
    setSupplementaryAllowed(prev => !prev);
  }, []);

  // ── Memoised value ─────────────────────────────────────────────────────────

  const value = useMemo<SittingSessionContextValue>(() => ({
    activeDay,
    setActiveDay,
    questions,
    phase,
    activeQuestion,
    onDeckQuestion,
    pendingQuestions,
    answeredQuestions,
    skippedQuestions,
    disposedQuestions,
    activeQuestionNumber,
    focalQuestion,
    focalMode,
    focalNumber,
    elapsedSeconds,
    supplementaryAllowed,
    beginSession,
    callOnDeckQuestion,
    markAnswered,
    skipQuestion,
    skipOnDeckQuestion,
    endSession,
    toggleSupplementary,
  }), [
    activeDay, setActiveDay, questions, phase,
    activeQuestion, onDeckQuestion, pendingQuestions, answeredQuestions, skippedQuestions, disposedQuestions,
    activeQuestionNumber, focalQuestion, focalMode, focalNumber,
    elapsedSeconds, supplementaryAllowed,
    beginSession, callOnDeckQuestion, markAnswered, skipQuestion, skipOnDeckQuestion, endSession, toggleSupplementary,
  ]);

  return (
    <SittingSessionContext.Provider value={value}>
      {children}
    </SittingSessionContext.Provider>
  );
}

// ── Hook ─────────────────────────────────────────────────────────────────────

export function useSittingSession(): SittingSessionContextValue {
  const ctx = useContext(SittingSessionContext);
  if (!ctx) {
    throw new Error('useSittingSession must be used within a SittingSessionProvider');
  }
  return ctx;
}
