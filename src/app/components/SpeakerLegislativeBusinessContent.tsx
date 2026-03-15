/**
 * Speaker-specific Legislative Business content — Phase 1: General Consideration.
 *
 * Two-panel layout:
 *   Left:  Bill text (read-only, with expandable inline amendments for context)
 *   Right: Speaker-managed speaker queue with on-deck → active → completed flow
 *
 * Mirrors SpeakerQuestionHourContent.tsx architecture:
 *   - All speakers start as 'upcoming' — Speaker drives the flow
 *   - Phase state machine: not-started → ready → active → between → completed
 *   - Blue (on-deck) → Green (active) color-coded control bars
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { StatusChip } from './StatusChip';
import { PartyBadge } from './PartyBadge';
import { DiffHighlight } from './AmendmentModule';
import { Divider } from './Divider';
import { CompactActionButton } from './CompactActionButton';
import {
  LBSessionToolbarLeft,
  LBSessionToolbarRight,
  ActiveSpeakerControlBar,
  OnDeckSpeakerControlBar,
  CBCSessionToolbarLeft,
  CBCSessionToolbarRight,
  ClauseOnDeckControlBar,
  ClauseVoteControlBar,
  FinalVoteReadyControlBar,
  FinalVoteControlBar,
} from './SpeakerLBControlPanel';
import type { LBSessionPhase, CBCPhase } from './SpeakerLBControlPanel';

import {
  SITTING_BILL,
  SITTING_1_SPEAKERS,
  CLAUSE_AMENDMENTS,
  toRomanNumeral,
  getAmendmentCountForClause,
} from '../data/mock/legislative-business';
import type {
  LBSpeaker,
  LBClauseAmendment,
  ClauseVoteStatus,
  Clause,
  SpecialBlock,
} from '../data/mock/legislative-business';

// ── Types ────────────────────────────────────────────────────────────────────

type SpeakerStatus = 'upcoming' | 'on-deck' | 'active' | 'completed' | 'skipped';
type LBPhaseTab = 'general' | 'clause-by-clause';

interface ManagedSpeaker extends LBSpeaker {
  speakerStatus: SpeakerStatus;
}

// ── CBC Managed Types ────────────────────────────────────────────────────────

type CBCClauseStatus = 'upcoming' | 'on-deck' | 'active' | 'confirming-passed' | 'confirming-rejected' | 'passed' | 'rejected' | 'skipped';
type CBCAmendmentStatus = 'pending' | 'staging' | 'moved' | 'voting' | 'passed' | 'rejected' | 'withdrawn';

interface ManagedClause {
  clauseId: string;
  cbcStatus: CBCClauseStatus;
}

interface ManagedAmendment extends LBClauseAmendment {
  cbcStatus: CBCAmendmentStatus;
}

// ── Amendment Helpers ────────────────────────────────────────────────────────

const AMENDMENT_TYPE_LABELS: Record<string, string> = {
  substitute: 'Substitute',
  omit: 'Omit',
  insert: 'Insert',
};

const AMENDMENT_TYPE_VARIANTS: Record<string, string> = {
  substitute: 'warning',
  omit: 'urgent',
  insert: 'progress',
};

// ── Static bill data ─────────────────────────────────────────────────────────

const ALL_BILL_CLAUSES = SITTING_BILL.chapters.flatMap(ch => ch.clauses);

// ── Format Time ──────────────────────────────────────────────────────────────

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ── Component ────────────────────────────────────────────────────────────────

export function SpeakerLegislativeBusinessContent() {
  // ── Speaker Queue State ──────────────────────────────────────────────────
  const initSpeakers = useCallback((): ManagedSpeaker[] => {
    return SITTING_1_SPEAKERS.map(s => ({
      ...s,
      speakerStatus: 'upcoming' as SpeakerStatus,
      elapsedTime: 0,
    }));
  }, []);

  const [speakers, setSpeakers] = useState<ManagedSpeaker[]>(() => initSpeakers());
  const [timeRemaining, setTimeRemaining] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // ── Phase Tab State ──────────────────────────────────────────────────────
  const [activePhaseTab, setActivePhaseTab] = useState<LBPhaseTab>('general');

  // ── Bill Navigation State ────────────────────────────────────────────────
  const [activeChapterId, setActiveChapterId] = useState(SITTING_BILL.chapters[0].id);
  const billContentRef = useRef<HTMLDivElement>(null);

  // ── Clause-by-Clause State ───────────────────────────────────────────────
  const [selectedClauseId, setSelectedClauseId] = useState<string | undefined>(undefined);
  const [highlightedNodeId, setHighlightedNodeId] = useState<string | null>(null);
  const [hoveredAmendmentId, setHoveredAmendmentId] = useState<string | null>(null);
  const cbcBillContentRef = useRef<HTMLDivElement>(null);

  // All clauses from the bill, managed with mutable status
  const [cbcClauses, setCbcClauses] = useState<ManagedClause[]>(() =>
    ALL_BILL_CLAUSES.map(cl => ({ clauseId: cl.id, cbcStatus: 'upcoming' as CBCClauseStatus }))
  );
  // All amendments, managed with mutable status
  const [cbcAmendments, setCbcAmendments] = useState<ManagedAmendment[]>(() =>
    CLAUSE_AMENDMENTS.map(a => ({ ...a, cbcStatus: 'pending' as CBCAmendmentStatus }))
  );
  // Final bill vote result
  const [finalBillVoteResult, setFinalBillVoteResult] = useState<'pending' | 'voting' | 'confirming-passed' | 'confirming-rejected' | 'passed' | 'rejected'>('pending');

  // ── Timer management ─────────────────────────────────────────────────────
  const startTimer = useCallback((allocated: number) => {
    setTimeRemaining(allocated);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setTimeRemaining(prev => prev - 1);
    }, 1000);
  }, []);

  const stopTimer = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  // ── Derived state ────────────────────────────────────────────────────────
  const activeSpeaker = speakers.find(s => s.speakerStatus === 'active');
  const onDeckSpeaker = speakers.find(s => s.speakerStatus === 'on-deck');
  const upcomingSpeakers = speakers.filter(s => s.speakerStatus === 'upcoming');
  const completedSpeakers = speakers.filter(s => s.speakerStatus === 'completed');
  const skippedSpeakers = speakers.filter(s => s.speakerStatus === 'skipped');

  const hasStarted = speakers.some(s => s.speakerStatus !== 'upcoming');
  const allDisposed = upcomingSpeakers.length === 0 && !activeSpeaker && !onDeckSpeaker && hasStarted;

  const phase: LBSessionPhase = !hasStarted
    ? 'not-started'
    : activeSpeaker
      ? 'active'
      : onDeckSpeaker
        ? 'ready'
        : allDisposed
          ? 'completed'
          : 'between';

  // ── Focal speaker: single card that stays mounted across on-deck → active
  const focalSpeaker = activeSpeaker ?? onDeckSpeaker ?? null;
  const focalMode: 'on-deck' | 'active' = activeSpeaker ? 'active' : 'on-deck';

  // ── Actions ──────────────────────────────────────────────────────────────

  const promoteNextToOnDeck = useCallback((qs: ManagedSpeaker[]) => {
    const firstUpcoming = qs.find(s => s.speakerStatus === 'upcoming');
    if (firstUpcoming) {
      firstUpcoming.speakerStatus = 'on-deck';
    }
  }, []);

  const beginSession = useCallback(() => {
    setSpeakers(prev => {
      const next = [...prev];
      promoteNextToOnDeck(next);
      return next;
    });
  }, [promoteNextToOnDeck]);

  const callOnDeckSpeaker = useCallback(() => {
    const deck = speakers.find(s => s.speakerStatus === 'on-deck');
    if (!deck) return;
    setSpeakers(prev => {
      const next = [...prev];
      const d = next.find(s => s.speakerStatus === 'on-deck');
      if (d) d.speakerStatus = 'active';
      return next;
    });
    startTimer(deck.allocatedTime);
  }, [speakers, startTimer]);

  const markComplete = useCallback(() => {
    stopTimer();
    setSpeakers(prev => {
      const next = [...prev];
      const active = next.find(s => s.speakerStatus === 'active');
      if (active) active.speakerStatus = 'completed';
      promoteNextToOnDeck(next);
      return next;
    });
  }, [stopTimer, promoteNextToOnDeck]);

  const skipSpeaker = useCallback(() => {
    stopTimer();
    setSpeakers(prev => {
      const next = [...prev];
      const active = next.find(s => s.speakerStatus === 'active');
      if (active) active.speakerStatus = 'skipped';
      promoteNextToOnDeck(next);
      return next;
    });
  }, [stopTimer, promoteNextToOnDeck]);

  const skipOnDeckSpeaker = useCallback(() => {
    setSpeakers(prev => {
      const next = [...prev];
      const deck = next.find(s => s.speakerStatus === 'on-deck');
      if (deck) deck.speakerStatus = 'skipped';
      promoteNextToOnDeck(next);
      return next;
    });
  }, [promoteNextToOnDeck]);

  const callNextSpeaker = useCallback(() => {
    setSpeakers(prev => {
      const next = [...prev];
      promoteNextToOnDeck(next);
      return next;
    });
  }, [promoteNextToOnDeck]);

  const endSession = useCallback(() => {
    stopTimer();
    setSpeakers(prev => prev.map(s =>
      (s.speakerStatus === 'upcoming' || s.speakerStatus === 'active' || s.speakerStatus === 'on-deck')
        ? { ...s, speakerStatus: 'skipped' as SpeakerStatus }
        : s
    ));
  }, [stopTimer]);

  // ── Bill chapter navigation ──────────────────────────────────────────────
  const handleChapterSelect = useCallback((chapterId: string) => {
    setActiveChapterId(chapterId);
    if (billContentRef.current) {
      billContentRef.current.scrollTop = 0;
    }
  }, []);

  // Handle clause navigation from dropdown — scrolls left panel to the clause
  const handleDropdownClauseNav = useCallback((clauseId: string) => {
    setTimeout(() => {
      const clauseRef = document.querySelector<HTMLDivElement>(`[data-clause-id="${clauseId}"]`);
      if (clauseRef) {
        clauseRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  }, []);

  const selectedChapterData = SITTING_BILL.chapters.find(ch => ch.id === activeChapterId);

  // ── Disposed speakers in order (most recently disposed first) ────────────
  const disposedInOrder = speakers.filter(
    s => s.speakerStatus === 'completed' || s.speakerStatus === 'skipped'
  );

  // ── Active speaker's allocated time for control bar ──────────────────────
  const activeSpeakerAllocated = activeSpeaker?.allocatedTime ?? 0;

  // ── Clause-by-Clause derived state ───────────────────────────────────────

  // Build a ClauseVoteStatus map from managed state (for bill text renderer)
  const clauseStatusMap = new Map<string, ClauseVoteStatus>();
  cbcClauses.forEach(mc => {
    const mapped: ClauseVoteStatus =
      mc.cbcStatus === 'active' || mc.cbcStatus === 'on-deck' || mc.cbcStatus === 'confirming-passed' || mc.cbcStatus === 'confirming-rejected' ? 'active'
        : mc.cbcStatus === 'passed' ? 'passed'
        : mc.cbcStatus === 'rejected' ? 'rejected'
        : 'upcoming';
    clauseStatusMap.set(mc.clauseId, mapped);
  });

  const cbcActiveClauseId = cbcClauses.find(c => c.cbcStatus === 'active' || c.cbcStatus === 'on-deck' || c.cbcStatus === 'confirming-passed' || c.cbcStatus === 'confirming-rejected')?.clauseId;

  // Build passedAmendments map from managed amendments for bill text rendering
  const passedAmendmentsMap = new Map<string, LBClauseAmendment>();
  cbcAmendments.forEach(a => {
    if (a.cbcStatus === 'passed' && a.votingResult?.passed) {
      passedAmendmentsMap.set(a.clauseId, a);
    }
  });

  // Build global amendment number map (for student-view-style amendment numbering)
  const amendmentNumberMap = new Map<string, number>();
  CLAUSE_AMENDMENTS.forEach((a, i) => {
    amendmentNumberMap.set(a.id, i + 1);
  });

  // ── CBC Phase derivation ─────────────────────────────────────────────────

  const cbcOnDeckClause = cbcClauses.find(c => c.cbcStatus === 'on-deck');
  const cbcActiveClause = cbcClauses.find(c => c.cbcStatus === 'active' || c.cbcStatus === 'confirming-passed' || c.cbcStatus === 'confirming-rejected');
  const cbcHasStarted = cbcClauses.some(c => c.cbcStatus !== 'upcoming');
  const cbcAllDisposed = cbcClauses.every(c => c.cbcStatus === 'passed' || c.cbcStatus === 'rejected' || c.cbcStatus === 'skipped');

  // Get amendments for the current active clause
  const currentClauseId = cbcActiveClause?.clauseId;
  const getAmendmentsForClause = useCallback((clauseId: string) => {
    const clause = ALL_BILL_CLAUSES.find(cl => cl.id === clauseId);
    if (!clause) return [];
    const nodeIds = new Set<string>([clause.id]);
    clause.subClauses.forEach(sc => { nodeIds.add(sc.id); sc.items.forEach(it => { nodeIds.add(it.id); it.specialBlocks.forEach(sb => nodeIds.add(sb.id)); }); sc.specialBlocks.forEach(sb => nodeIds.add(sb.id)); });
    clause.specialBlocks.forEach(sb => nodeIds.add(sb.id));
    return cbcAmendments.filter(a => nodeIds.has(a.clauseId));
  }, [cbcAmendments]);

  const currentClauseAmendments = currentClauseId ? getAmendmentsForClause(currentClauseId) : [];
  const stagingAmendment = currentClauseAmendments.find(a => a.cbcStatus === 'staging');
  const votingAmendment = currentClauseAmendments.find(a => a.cbcStatus === 'voting');
  const pendingAmendmentsForClause = currentClauseAmendments.filter(a => a.cbcStatus === 'pending');
  const movedAmendmentsForClause = currentClauseAmendments.filter(a => a.cbcStatus === 'moved');
  const disposedAmendmentsForClause = currentClauseAmendments.filter(a => a.cbcStatus === 'passed' || a.cbcStatus === 'rejected' || a.cbcStatus === 'withdrawn');

  const cbcPhase: CBCPhase = !cbcHasStarted
    ? 'not-started'
    : finalBillVoteResult === 'passed' || finalBillVoteResult === 'rejected'
      ? 'completed'
      : finalBillVoteResult === 'voting' || finalBillVoteResult === 'confirming-passed' || finalBillVoteResult === 'confirming-rejected'
        ? 'final-vote-confirming'
        : cbcAllDisposed && cbcHasStarted
          ? 'final-vote-ready'
          : votingAmendment
            ? 'amendment-voting'
            : stagingAmendment
              ? 'amendment-staging'
              : cbcActiveClause && pendingAmendmentsForClause.length === 0 && movedAmendmentsForClause.length === 0 && !votingAmendment && !stagingAmendment
                ? 'clause-vote'
                : cbcOnDeckClause
                  ? 'clause-on-deck'
                  : 'between-clauses';

  // Focal item for the right panel card
  const focalClauseData = cbcActiveClause
    ? ALL_BILL_CLAUSES.find(cl => cl.id === cbcActiveClause.clauseId)
    : cbcOnDeckClause
      ? ALL_BILL_CLAUSES.find(cl => cl.id === cbcOnDeckClause.clauseId)
      : null;
  // Counts for toolbar
  const cbcPassedCount = cbcClauses.filter(c => c.cbcStatus === 'passed').length;
  const cbcRejectedCount = cbcClauses.filter(c => c.cbcStatus === 'rejected').length;
  const cbcSkippedCount = cbcClauses.filter(c => c.cbcStatus === 'skipped').length;
  const cbcUpcomingClauses = cbcClauses.filter(c => c.cbcStatus === 'upcoming');

  // Reset selected clause when switching phase tabs
  useEffect(() => {
    setSelectedClauseId(undefined);
    setHighlightedNodeId(null);
    setHoveredAmendmentId(null);
  }, [activePhaseTab]);

  // Auto-navigate to active clause in bill text when it changes
  useEffect(() => {
    if (activePhaseTab === 'clause-by-clause' && cbcActiveClauseId) {
      const targetChapter = SITTING_BILL.chapters.find(ch =>
        ch.clauses.some(cl => cl.id === cbcActiveClauseId)
      );
      if (targetChapter && targetChapter.id !== activeChapterId) {
        setActiveChapterId(targetChapter.id);
      }
      setSelectedClauseId(cbcActiveClauseId);
      setTimeout(() => {
        const clauseRef = document.querySelector<HTMLDivElement>(`[data-clause-id="${cbcActiveClauseId}"]`);
        if (clauseRef) {
          clauseRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
    }
  }, [cbcActiveClauseId, activePhaseTab]);

  // ── CBC Actions ──────────────────────────────────────────────────────────

  const cbcStageNextClause = useCallback(() => {
    setCbcClauses(prev => {
      const next = [...prev];
      const first = next.find(c => c.cbcStatus === 'upcoming');
      if (first) first.cbcStatus = 'on-deck';
      return next;
    });
  }, []);

  const cbcBeginSession = useCallback(() => {
    cbcStageNextClause();
  }, [cbcStageNextClause]);

  const cbcTakeUpClause = useCallback(() => {
    const deckClause = cbcClauses.find(c => c.cbcStatus === 'on-deck');
    if (!deckClause) return;
    const clauseId = deckClause.clauseId;

    setCbcClauses(prev => {
      const next = [...prev];
      const deck = next.find(c => c.cbcStatus === 'on-deck');
      if (deck) deck.cbcStatus = 'active';
      return next;
    });

    // Stage first pending amendment for this clause (for staging, not voting yet)
    const clause = ALL_BILL_CLAUSES.find(cl => cl.id === clauseId);
    if (clause) {
      const nodeIds = new Set<string>([clause.id]);
      clause.subClauses.forEach(sc => { nodeIds.add(sc.id); sc.items.forEach(it => { nodeIds.add(it.id); it.specialBlocks.forEach(sb => nodeIds.add(sb.id)); }); sc.specialBlocks.forEach(sb => nodeIds.add(sb.id)); });
      clause.specialBlocks.forEach(sb => nodeIds.add(sb.id));
      setCbcAmendments(prev => {
        const next = [...prev];
        const firstPending = next.find(a => nodeIds.has(a.clauseId) && a.cbcStatus === 'pending');
        if (firstPending) firstPending.cbcStatus = 'staging';
        return next;
      });
    }
  }, [cbcClauses]);

  const cbcSkipClause = useCallback(() => {
    setCbcClauses(prev => {
      const next = [...prev];
      const deck = next.find(c => c.cbcStatus === 'on-deck');
      if (deck) deck.cbcStatus = 'skipped';
      const first = next.find(c => c.cbcStatus === 'upcoming');
      if (first) first.cbcStatus = 'on-deck';
      return next;
    });
  }, []);

  // ── Amendment staging actions (Move / Withdraw) ─────────────────────────
  const cbcMoveAmendment = useCallback((amendmentId: string) => {
    setCbcAmendments(prev => {
      const next = [...prev];
      const staging = next.find(a => a.id === amendmentId && a.cbcStatus === 'staging');
      if (staging) staging.cbcStatus = 'moved';
      return next;
    });
    // Stage next pending amendment for the current clause
    if (currentClauseId) {
      setTimeout(() => {
        setCbcAmendments(prev => {
          const clause = ALL_BILL_CLAUSES.find(cl => cl.id === currentClauseId);
          if (!clause) return prev;
          const nodeIds = new Set<string>([clause.id]);
          clause.subClauses.forEach(sc => { nodeIds.add(sc.id); sc.items.forEach(it => { nodeIds.add(it.id); it.specialBlocks.forEach(sb => nodeIds.add(sb.id)); }); sc.specialBlocks.forEach(sb => nodeIds.add(sb.id)); });
          clause.specialBlocks.forEach(sb => nodeIds.add(sb.id));
          const next = [...prev];
          const nextPending = next.find(a => nodeIds.has(a.clauseId) && a.cbcStatus === 'pending');
          if (nextPending) {
            nextPending.cbcStatus = 'staging';
          } else {
            // No more pending amendments, start voting on moved amendments
            const firstMoved = next.find(a => nodeIds.has(a.clauseId) && a.cbcStatus === 'moved');
            if (firstMoved) firstMoved.cbcStatus = 'voting';
          }
          return next;
        });
      }, 0);
    }
  }, [currentClauseId]);

  const cbcWithdrawAmendment = useCallback((amendmentId: string) => {
    setCbcAmendments(prev => {
      const next = [...prev];
      const staging = next.find(a => a.id === amendmentId && a.cbcStatus === 'staging');
      if (staging) staging.cbcStatus = 'withdrawn';
      return next;
    });
    // Stage next pending amendment for the current clause
    if (currentClauseId) {
      setTimeout(() => {
        setCbcAmendments(prev => {
          const clause = ALL_BILL_CLAUSES.find(cl => cl.id === currentClauseId);
          if (!clause) return prev;
          const nodeIds = new Set<string>([clause.id]);
          clause.subClauses.forEach(sc => { nodeIds.add(sc.id); sc.items.forEach(it => { nodeIds.add(it.id); it.specialBlocks.forEach(sb => nodeIds.add(sb.id)); }); sc.specialBlocks.forEach(sb => nodeIds.add(sb.id)); });
          clause.specialBlocks.forEach(sb => nodeIds.add(sb.id));
          const next = [...prev];
          const nextPending = next.find(a => nodeIds.has(a.clauseId) && a.cbcStatus === 'pending');
          if (nextPending) {
            nextPending.cbcStatus = 'staging';
          } else {
            // No more pending amendments, start voting on moved amendments
            const firstMoved = next.find(a => nodeIds.has(a.clauseId) && a.cbcStatus === 'moved');
            if (firstMoved) firstMoved.cbcStatus = 'voting';
          }
          return next;
        });
      }, 0);
    }
  }, [currentClauseId]);

  // ── Amendment voting actions (Pass / Reject) ─────────────────────────────
  const cbcVoteAmendment = useCallback((passed: boolean) => {
    setCbcAmendments(prev => {
      const next = [...prev];
      const voting = next.find(a => a.cbcStatus === 'voting');
      if (voting) {
        voting.cbcStatus = passed ? 'passed' : 'rejected';
        voting.votingResult = {
          ayes: passed ? Math.floor(Math.random() * 10) + 12 : Math.floor(Math.random() * 8) + 3,
          nays: passed ? Math.floor(Math.random() * 8) + 3 : Math.floor(Math.random() * 10) + 12,
          abstained: Math.floor(Math.random() * 3),
          passed,
        };
      }
      return next;
    });
    // Stage next moved amendment for voting
    if (currentClauseId) {
      setTimeout(() => {
        setCbcAmendments(prev => {
          const clause = ALL_BILL_CLAUSES.find(cl => cl.id === currentClauseId);
          if (!clause) return prev;
          const nodeIds = new Set<string>([clause.id]);
          clause.subClauses.forEach(sc => { nodeIds.add(sc.id); sc.items.forEach(it => { nodeIds.add(it.id); it.specialBlocks.forEach(sb => nodeIds.add(sb.id)); }); sc.specialBlocks.forEach(sb => nodeIds.add(sb.id)); });
          clause.specialBlocks.forEach(sb => nodeIds.add(sb.id));
          const next = [...prev];
          const nextMoved = next.find(a => nodeIds.has(a.clauseId) && a.cbcStatus === 'moved');
          if (nextMoved) nextMoved.cbcStatus = 'voting';
          return next;
        });
      }, 0);
    }
  }, [currentClauseId]);

  const cbcVoteClause = useCallback((passed: boolean) => {
    setCbcClauses(prev => {
      const next = [...prev];
      const active = next.find(c => c.cbcStatus === 'active');
      if (active) active.cbcStatus = passed ? 'confirming-passed' : 'confirming-rejected';
      return next;
    });
    
    // After 1 second, finalize the vote and stage next clause
    setTimeout(() => {
      setCbcClauses(prev => {
        const next = [...prev];
        const confirming = next.find(c => c.cbcStatus === 'confirming-passed' || c.cbcStatus === 'confirming-rejected');
        if (confirming) {
          confirming.cbcStatus = confirming.cbcStatus === 'confirming-passed' ? 'passed' : 'rejected';
        }
        // Stage next upcoming clause
        const first = next.find(c => c.cbcStatus === 'upcoming');
        if (first) first.cbcStatus = 'on-deck';
        return next;
      });
    }, 1000);
  }, []);

  const cbcEndSession = useCallback(() => {
    setCbcClauses(prev => prev.map(c =>
      (c.cbcStatus === 'upcoming' || c.cbcStatus === 'on-deck' || c.cbcStatus === 'active' || c.cbcStatus === 'confirming-passed' || c.cbcStatus === 'confirming-rejected')
        ? { ...c, cbcStatus: 'skipped' as CBCClauseStatus }
        : c
    ));
    setCbcAmendments(prev => prev.map(a =>
      (a.cbcStatus === 'pending' || a.cbcStatus === 'staging' || a.cbcStatus === 'moved' || a.cbcStatus === 'voting')
        ? { ...a, cbcStatus: 'withdrawn' as CBCAmendmentStatus }
        : a
    ));
    // Reset final bill vote on end session
    setFinalBillVoteResult('pending');
  }, []);

  // ── Final Bill Vote Actions ──────────────────────────────────────────────

  const cbcPutBillToVote = useCallback(() => {
    // Transition from final-vote-ready to final-vote-confirming happens automatically via button
    // This just exists for semantic clarity in the UI layer
  }, []);

  const cbcVoteFinalBill = useCallback((passed: boolean) => {
    setFinalBillVoteResult(passed ? 'confirming-passed' : 'confirming-rejected');
    
    // After 1 second, finalize the vote
    setTimeout(() => {
      setFinalBillVoteResult(passed ? 'passed' : 'rejected');
    }, 1000);
  }, []);

  // ── Clause-by-Clause UI handlers ─────────────────────────────────────────

  const handleClauseClick = useCallback((clauseId: string) => {
    if (activePhaseTab === 'clause-by-clause') {
      setSelectedClauseId(clauseId);
    }
    const clauseRef = document.querySelector<HTMLDivElement>(`[data-clause-id="${clauseId}"]`);
    if (clauseRef) {
      clauseRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [activePhaseTab]);

  const navigateToClause = useCallback((clauseId: string) => {
    const targetChapter = SITTING_BILL.chapters.find(ch =>
      ch.clauses.some(cl => cl.id === clauseId)
    );
    if (targetChapter && targetChapter.id !== activeChapterId) {
      setActiveChapterId(targetChapter.id);
    }
    setSelectedClauseId(clauseId);
    setTimeout(() => {
      const clauseRef = document.querySelector<HTMLDivElement>(`[data-clause-id="${clauseId}"]`);
      if (clauseRef) {
        clauseRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  }, [activeChapterId]);

  const handleAmendmentHover = useCallback((amendmentId: string | null) => {
    setHoveredAmendmentId(amendmentId);
    if (amendmentId) {
      const amendment = CLAUSE_AMENDMENTS.find(a => a.id === amendmentId);
      if (amendment) {
        setHighlightedNodeId(amendment.clauseId);
        setTimeout(() => {
          const nodeEl = cbcBillContentRef.current?.querySelector<HTMLElement>(`[data-node-id="${amendment.clauseId}"]`);
          if (nodeEl) {
            nodeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 16);
      }
    } else {
      setHighlightedNodeId(null);
    }
  }, []);

  // Pending amendment count for bill text badges (uses managed status)
  const getManagedPendingCount = useCallback((clauseId: string) => {
    const clause = ALL_BILL_CLAUSES.find(cl => cl.id === clauseId);
    if (!clause) return 0;
    const nodeIds = new Set<string>([clause.id]);
    clause.subClauses.forEach(sc => { nodeIds.add(sc.id); sc.items.forEach(it => { nodeIds.add(it.id); it.specialBlocks.forEach(sb => nodeIds.add(sb.id)); }); sc.specialBlocks.forEach(sb => nodeIds.add(sb.id)); });
    clause.specialBlocks.forEach(sb => nodeIds.add(sb.id));
    return cbcAmendments.filter(a => nodeIds.has(a.clauseId) && (a.cbcStatus === 'pending' || a.cbcStatus === 'staging' || a.cbcStatus === 'moved' || a.cbcStatus === 'voting')).length;
  }, [cbcAmendments]);

  // ── Render ──────���────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col gap-[16px] w-full min-h-0 flex-1">
      {/* Top row: Phase switcher (left) · Lifecycle controls + progress (right) */}
      <div className="flex items-center justify-between w-full shrink-0">
        {/* Phase tab switcher — matches student view's SittingDaySwitcher */}
        <div className="flex items-center gap-[12px]">
          <div className="flex gap-[4px] items-center bg-[var(--sidebar-primary)] rounded-[var(--radius-button-small)] p-[3px]">
            <button
              onClick={() => setActivePhaseTab('general')}
              className={`px-[12px] py-[5px] rounded-[var(--radius-button-small)] text-[length:var(--text-label)] leading-[14px] cursor-pointer transition-colors ${
                activePhaseTab === 'general'
                  ? 'bg-[var(--card)] text-[var(--foreground)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]'
                  : 'bg-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
              }`}
            >
              General Consideration
            </button>
            <button
              onClick={() => setActivePhaseTab('clause-by-clause')}
              className={`px-[12px] py-[5px] rounded-[var(--radius-button-small)] text-[length:var(--text-label)] leading-[14px] cursor-pointer transition-colors ${
                activePhaseTab === 'clause-by-clause'
                  ? 'bg-[var(--card)] text-[var(--foreground)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]'
                  : 'bg-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
              }`}
            >
              Clause-by-Clause Consideration
            </button>
          </div>

          {/* Lifecycle controls — beside the switcher */}
          {activePhaseTab === 'general' && (
            <LBSessionToolbarLeft
              phase={phase}
              onBeginSession={beginSession}
              onEndSession={endSession}
            />
          )}
          {activePhaseTab === 'clause-by-clause' && (
            <CBCSessionToolbarLeft
              phase={cbcPhase}
              onBeginSession={cbcBeginSession}
              onEndSession={cbcEndSession}
            />
          )}
        </div>

        {/* Right side — progress counter */}
        {activePhaseTab === 'general' && (
          <LBSessionToolbarRight
            phase={phase}
            totalSpeakers={speakers.length}
            completedCount={completedSpeakers.length}
            skippedCount={skippedSpeakers.length}
            onCallNext={callNextSpeaker}
          />
        )}
        {activePhaseTab === 'clause-by-clause' && (
          <CBCSessionToolbarRight
            phase={cbcPhase}
            totalClauses={cbcClauses.length}
            passedCount={cbcPassedCount}
            rejectedCount={cbcRejectedCount}
            skippedCount={cbcSkippedCount}
            onStageNext={cbcStageNextClause}
          />
        )}
      </div>

      {/* Two-panel layout — General Consideration */}
      {activePhaseTab === 'general' && (
      <div className="flex gap-[0px] w-full bg-[var(--card)] rounded-[var(--radius-card)] overflow-hidden relative flex-1 min-h-0">
        <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] z-10" />

        {/* ── Left Panel: Bill Text ──────────────────────────────── */}
        <div className="flex flex-col w-[57%] border-r border-[var(--card-border)] overflow-hidden">
          {/* Chapter selector header */}
          <div className="shrink-0 border-b border-[var(--card-border)] px-[16px] py-[12px]">
            <ChapterSelector
              activeChapterId={activeChapterId}
              onChapterSelect={handleChapterSelect}
              onClauseClick={handleDropdownClauseNav}
            />
          </div>

          {/* Selected chapter's clauses */}
          <div ref={billContentRef} className="flex-1 overflow-y-auto px-[16px] pb-[16px] scrollbar-hide">
            {selectedChapterData ? (
              <div className="flex flex-col gap-[16px] pt-[16px]">
                {/* Bill title & preamble — shown above Chapter 1 */}
                {activeChapterId === SITTING_BILL.chapters[0].id && (
                  <div className="flex flex-col gap-[8px] pb-[12px] border-b border-[var(--card-border)] text-center">
                    <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">
                      {SITTING_BILL.title}
                    </p>
                    <p className="leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)]">
                      {SITTING_BILL.preamble}
                    </p>
                  </div>
                )}

                {/* Chapter name heading */}
                <p className="font-semibold text-[length:var(--text-h4)] text-[var(--foreground)] leading-[20px]">
                  {selectedChapterData.name}
                </p>

                {/* Clauses */}
                {selectedChapterData.clauses.map((clause) => (
                  <BillClauseRenderer
                    key={clause.id}
                    clause={clause}
                    amendmentCount={getAmendmentCountForClause(clause.id)}
                    showAmendments
                  />
                ))}
              </div>
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-[length:var(--text-label)] text-[var(--muted-foreground)]">Select a chapter to view</p>
              </div>
            )}
          </div>
        </div>

        {/* ── Right Panel: Speaker Queue Management ─────────────── */}
        <div className="flex flex-col w-[43%] overflow-hidden">
          <div className="flex-1 overflow-y-auto p-[16px] scrollbar-hide">
            <div className="flex flex-col gap-[16px] w-full">

              {/* Focal Speaker Card — stays mounted across on-deck → active transition */}
              <AnimatePresence mode="wait">
                {focalSpeaker && (phase === 'ready' || phase === 'active') && (
                  <motion.div
                    key={focalSpeaker.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }}
                    className="flex flex-col w-full rounded-[var(--radius-card)] overflow-hidden relative"
                  >
                    {/* Inset border overlay — blue (on-deck) ↔ green (active) */}
                    <div
                      aria-hidden="true"
                      className="absolute border border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] opacity-[0.46] z-10 transition-[border-color] duration-300"
                      style={{
                        borderColor: focalMode === 'active'
                          ? 'var(--status-progress-border)'
                          : 'var(--status-role-border)',
                      }}
                    />
                    <FocalSpeakerCard
                      speaker={focalSpeaker}
                      mode={focalMode}
                      timeRemaining={focalMode === 'active' ? timeRemaining : undefined}
                    />
                    {/* Control panel — crossfade between Ready (blue) and Active (green) */}
                    <AnimatePresence mode="wait" initial={false}>
                      {phase === 'ready' ? (
                        <OnDeckSpeakerControlBar
                          key="ready-panel"
                          onCallSpeaker={callOnDeckSpeaker}
                          onSkip={skipOnDeckSpeaker}
                        />
                      ) : (
                        <ActiveSpeakerControlBar
                          key="active-panel"
                          timeRemaining={timeRemaining}
                          allocatedTime={activeSpeakerAllocated}
                          onMarkComplete={markComplete}
                          onSkip={skipSpeaker}
                        />
                      )}
                    </AnimatePresence>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Not started — empty state */}
              {phase === 'not-started' && (
                <div className="flex flex-col items-center justify-center py-[32px] gap-[12px]">
                  <p className="text-[length:var(--text-base)] text-[var(--muted-foreground)] text-center max-w-[280px] leading-[20px]">
                    Begin the session to start managing the speaker queue for general consideration of the bill.
                  </p>
                </div>
              )}

              {/* Completed — summary */}
              {phase === 'completed' && (
                <div className="flex flex-col items-center justify-center py-[24px] gap-[12px]">
                  <div className="flex items-center justify-center size-[48px] rounded-full bg-[var(--status-approved-bg)]">
                    <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" />
                    </svg>
                  </div>
                  <p className="font-semibold text-[length:var(--text-base)] text-[var(--foreground)] text-center">
                    General Consideration Complete
                  </p>
                  <p className="text-[length:var(--text-label)] text-[var(--muted-foreground)] text-center leading-[18px]">
                    {completedSpeakers.length} speaker{completedSpeakers.length !== 1 ? 's' : ''} spoke
                    {skippedSpeakers.length > 0 ? ` · ${skippedSpeakers.length} skipped` : ''}
                  </p>
                </div>
              )}

              {/* Upcoming Speakers */}
              {upcomingSpeakers.length > 0 && (
                <div className="flex flex-col w-full">
                  <SectionHeader title="Up Next" count={upcomingSpeakers.length} />
                  <div className="flex flex-col w-full divide-y divide-[var(--card-border)]">
                    {upcomingSpeakers.map(s => (
                      <UpcomingSpeakerRow key={s.id} speaker={s} />
                    ))}
                  </div>
                </div>
              )}

              {/* Disposed Speakers */}
              {disposedInOrder.length > 0 && (
                <div className="flex flex-col gap-[6px] w-full">
                  <SectionHeader title="Completed" count={disposedInOrder.length} variant="disposed" />
                  <div className="flex flex-col gap-[2px] w-full">
                    {disposedInOrder.map(s => (
                      <DisposedSpeakerRow key={s.id} speaker={s} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      )}

      {/* Clause-by-Clause Consideration */}
      {activePhaseTab === 'clause-by-clause' && (
        <div className="flex gap-[0px] w-full bg-[var(--card)] rounded-[var(--radius-card)] overflow-hidden relative flex-1 min-h-0">
          <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] z-10" />

          {/* ── Left Panel: Bill Text (clickable clauses) ──────────── */}
          <div className="flex flex-col w-[57%] border-r border-[var(--card-border)] overflow-hidden">
            <div className="shrink-0 border-b border-[var(--card-border)] px-[16px] py-[12px]">
              <CBCChapterSelector
                activeChapterId={activeChapterId}
                onChapterSelect={handleChapterSelect}
                onClauseClick={(clauseId) => { handleClauseClick(clauseId); }}
                clauseStatuses={clauseStatusMap}
              />
            </div>

            <div ref={cbcBillContentRef} className="flex-1 overflow-y-auto px-[16px] pb-[16px] scrollbar-hide">
              {selectedChapterData ? (
                <div className="flex flex-col gap-[16px] pt-[16px]">
                  {activeChapterId === SITTING_BILL.chapters[0].id && (
                    <div className="flex flex-col gap-[8px] pb-[12px] border-b border-[var(--card-border)] text-center">
                      <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">
                        {SITTING_BILL.title}
                      </p>
                      <p className="leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)]">
                        {SITTING_BILL.preamble}
                      </p>
                    </div>
                  )}

                  <p className="font-semibold text-[length:var(--text-h4)] text-[var(--foreground)] leading-[20px]">
                    {selectedChapterData.name}
                  </p>

                  {selectedChapterData.clauses.flatMap((clause) => {
                    const elements: React.ReactNode[] = [
                      <CBCBillClauseRenderer
                        key={clause.id}
                        clause={clause}
                        isActiveClause={clause.id === cbcActiveClauseId}
                        isSelectedClause={clause.id === (selectedClauseId || cbcActiveClauseId)}
                        clauseVoteStatus={clauseStatusMap.get(clause.id) || 'upcoming'}
                        amendmentCount={getManagedPendingCount(clause.id)}
                        onClick={() => handleClauseClick(clause.id)}
                        highlightedNodeId={highlightedNodeId}
                        passedAmendments={passedAmendmentsMap}
                      />
                    ];
                    // If there's a passed insert amendment targeting this clause directly, render a new clause after it
                    const insertAmendment = passedAmendmentsMap.get(clause.id);
                    if (insertAmendment?.type === 'insert' && insertAmendment.proposedText) {
                      elements.push(
                        <InsertedClauseEntry
                          key={`${clause.id}-inserted`}
                          number={clause.number + 1}
                          text={insertAmendment.proposedText}
                          label={`Clause ${clause.number + 1}`}
                        />
                      );
                    }
                    return elements;
                  })}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-[length:var(--text-label)] text-[var(--muted-foreground)]">Select a chapter to view</p>
                </div>
              )}
            </div>
          </div>

          {/* ── Right Panel: Speaker-Managed Clause-by-Clause ──────── */}
          <div className="flex flex-col w-[43%] overflow-hidden">
            <div className="flex-1 overflow-y-auto p-[16px] scrollbar-hide">
              <div className="flex flex-col gap-[16px] w-full">

                {/* ── Clause Card with Stacked Amendments (mirrors student view) ── */}
                <AnimatePresence mode="wait">
                  {focalClauseData && cbcPhase !== 'not-started' && cbcPhase !== 'completed' && cbcPhase !== 'between-clauses' && (
                    <motion.div
                      key={focalClauseData.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex flex-col w-full rounded-[var(--radius-card)] overflow-hidden relative"
                    >
                      {/* Inset border overlay — blue (on-deck) ↔ green (active/voting) */}
                      <div
                        aria-hidden="true"
                        className="absolute border border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] opacity-[0.46] z-10 transition-[border-color] duration-300"
                        style={{
                          borderColor: cbcPhase === 'clause-on-deck' || cbcPhase === 'amendment-on-deck'
                            ? 'var(--status-role-border)'
                            : 'var(--status-progress-border)',
                        }}
                      />

                      {/* Card header — clause info */}
                      <div className="flex items-center gap-[8px] px-[16px] py-[12px] shrink-0 bg-[var(--card)]">
                        <p className="font-semibold text-[length:var(--text-base)] leading-[16px] text-[var(--foreground)]">
                          Clause {focalClauseData.number}
                        </p>
                        {cbcPhase === 'clause-on-deck' && (
                          <StatusChip label="On Deck" variant="role" />
                        )}
                        {(cbcPhase === 'amendment-on-deck' || cbcPhase === 'amendment-live' || cbcPhase === 'clause-vote') && (
                          <div className="flex gap-[4px] items-center bg-[var(--status-urgent-bg)] px-[6px] py-[2px] rounded-full shrink-0">
                            <div className="relative size-[6px]">
                              <div className="absolute inset-0 rounded-full bg-[var(--status-urgent-text)] animate-ping opacity-75" />
                              <div className="relative size-full rounded-full bg-[var(--status-urgent-text)]" />
                            </div>
                            <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-urgent-text)]">Live</p>
                          </div>
                        )}
                      </div>

                      {/* Clause-on-deck detail — amendment count before taking up */}
                      {cbcPhase === 'clause-on-deck' && (
                        <div className="bg-[var(--card)] flex flex-col gap-[6px] px-[16px] pb-[12px]">
                          {(() => {
                            const pendingCount = getAmendmentsForClause(focalClauseData.id).filter(a => a.cbcStatus === 'pending').length;
                            return pendingCount > 0 ? (
                              <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">
                                {pendingCount} amendment{pendingCount !== 1 ? 's' : ''} to consider
                              </p>
                            ) : (
                              <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">
                                No amendments — proceed directly to clause vote
                              </p>
                            );
                          })()}
                        </div>
                      )}

                      {/* Stacked amendment rows — ALL amendments for this clause visible at once */}
                      {cbcPhase !== 'clause-on-deck' && currentClauseAmendments.length > 0 && (
                        <div className="flex flex-col gap-[8px] px-[12px] pb-[12px] bg-[var(--card)]">
                          {currentClauseAmendments.map((a) => (
                            <SpeakerCBCAmendmentRow
                              key={a.id}
                              amendment={a}
                              amendmentNumber={amendmentNumberMap.get(a.id) || 0}
                              isHighlighted={hoveredAmendmentId === a.id}
                              onHoverStart={() => handleAmendmentHover(a.id)}
                              onHoverEnd={() => handleAmendmentHover(null)}
                              onMove={() => cbcMoveAmendment(a.id)}
                              onWithdraw={() => cbcWithdrawAmendment(a.id)}
                              onVotePass={() => cbcVoteAmendment(true)}
                              onVoteReject={() => cbcVoteAmendment(false)}
                            />
                          ))}
                        </div>
                      )}



                      {/* Spacing when in clause-vote phase */}
                      {cbcPhase === 'clause-vote' && (
                        <div className="pb-[4px] bg-[var(--card)]" />
                      )}

                      {/* Control bar — only for clause-on-deck and clause-vote */}
                      <AnimatePresence mode="wait" initial={false}>
                        {cbcPhase === 'clause-on-deck' && (
                          <ClauseOnDeckControlBar key="clause-deck" onTakeUp={cbcTakeUpClause} />
                        )}
                        {cbcPhase === 'clause-vote' && (
                          <ClauseVoteControlBar 
                            key="clause-vote" 
                            onPass={() => cbcVoteClause(true)} 
                            onReject={() => cbcVoteClause(false)}
                            confirmingState={
                              cbcActiveClause?.cbcStatus === 'confirming-passed' ? 'passed' 
                              : cbcActiveClause?.cbcStatus === 'confirming-rejected' ? 'rejected' 
                              : null
                            }
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Final Vote Card — "The Bill as Amended" */}
                <AnimatePresence mode="wait">
                  {(cbcPhase === 'final-vote-ready' || cbcPhase === 'final-vote-confirming') && (
                    <motion.div
                      key="final-vote-card"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="flex flex-col w-full rounded-[var(--radius-card)] overflow-hidden relative"
                    >
                      {/* Inset border overlay — blue (ready) ↔ green (voting) */}
                      <div
                        aria-hidden="true"
                        className="absolute border border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] opacity-[0.46] z-10 transition-[border-color] duration-300"
                        style={{
                          borderColor: cbcPhase === 'final-vote-ready'
                            ? 'var(--status-role-border)'
                            : 'var(--status-progress-border)',
                        }}
                      />
                      
                      {/* Card content */}
                      <div className="flex flex-col gap-[8px] px-[16px] py-[12px] bg-[var(--card)]">
                        {/* Status chip - only show during voting */}
                        {cbcPhase === 'final-vote-confirming' && (
                          <div className="flex gap-[4px] items-center bg-[var(--status-progress-bg)] px-[6px] py-[2px] rounded-full shrink-0 self-start">
                            <div className="relative size-[6px]">
                              <div className="absolute inset-0 rounded-full bg-[var(--status-progress-text)] animate-ping opacity-75" />
                              <div className="relative size-full rounded-full bg-[var(--status-progress-text)]" />
                            </div>
                            <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-progress-text)]">Voting</p>
                          </div>
                        )}

                        {/* Title */}
                        <p className="font-semibold text-[length:var(--text-base)] leading-[16px] text-[var(--foreground)]">
                          {SITTING_BILL.title}
                        </p>

                        {/* Subtitle */}
                        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">
                          The Bill as Amended
                        </p>

                        {/* Stats - single line */}
                        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">
                          {cbcPassedCount} clauses adopted{cbcRejectedCount > 0 ? ` · ${cbcRejectedCount} negatived` : ''}
                        </p>
                      </div>

                      {/* Control bars */}
                      <AnimatePresence mode="wait" initial={false}>
                        {cbcPhase === 'final-vote-ready' && (
                          <FinalVoteReadyControlBar 
                            key="final-vote-ready" 
                            onPutToVote={() => setFinalBillVoteResult('voting')} 
                          />
                        )}
                        {cbcPhase === 'final-vote-confirming' && (
                          <FinalVoteControlBar
                            key="final-vote-confirming"
                            onPass={() => cbcVoteFinalBill(true)}
                            onReject={() => cbcVoteFinalBill(false)}
                            confirmingState={
                              finalBillVoteResult === 'confirming-passed' ? 'passed'
                              : finalBillVoteResult === 'confirming-rejected' ? 'rejected'
                              : null
                            }
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Not started — empty state */}
                {cbcPhase === 'not-started' && (
                  <div className="flex flex-col items-center justify-center py-[32px] gap-[12px]">
                    <p className="text-[length:var(--text-base)] text-[var(--muted-foreground)] text-center max-w-[280px] leading-[20px]">
                      Begin the session to start considering each clause of the bill individually.
                    </p>
                  </div>
                )}

                {/* Completed — summary */}
                {cbcPhase === 'completed' && (
                  <div className="flex flex-col items-center justify-center py-[24px] gap-[12px]">
                    <div className={`flex items-center justify-center size-[48px] rounded-full ${
                      finalBillVoteResult === 'passed' 
                        ? 'bg-[var(--status-approved-bg)]' 
                        : 'bg-[var(--status-rejected-bg)]'
                    }`}>
                      {finalBillVoteResult === 'passed' ? (
                        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" />
                        </svg>
                      ) : (
                        <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
                          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="var(--status-rejected-text)" />
                        </svg>
                      )}
                    </div>
                    <p className="font-semibold text-[length:var(--text-base)] text-[var(--foreground)] text-center">
                      Bill {finalBillVoteResult === 'passed' ? 'Passed' : 'Rejected'}
                    </p>
                    <p className="text-[length:var(--text-label)] text-[var(--muted-foreground)] text-center leading-[18px]">
                      {cbcPassedCount} clauses adopted · {cbcRejectedCount} negatived
                      {cbcSkippedCount > 0 ? ` · ${cbcSkippedCount} skipped` : ''}
                    </p>
                  </div>
                )}

                {/* Between clauses — prompt */}
                {cbcPhase === 'between-clauses' && (
                  <div className="flex flex-col items-center justify-center py-[24px] gap-[12px]">
                    <p className="text-[length:var(--text-base)] text-[var(--muted-foreground)] text-center max-w-[280px] leading-[20px]">
                      Ready to stage the next clause. Use the &ldquo;Stage Next Clause&rdquo; button above.
                    </p>
                  </div>
                )}

                {/* Upcoming clauses */}
                {cbcUpcomingClauses.length > 0 && cbcPhase !== 'not-started' && (() => {
                  // Calculate total amendments across all upcoming clauses
                  const totalAmendments = cbcUpcomingClauses.reduce((sum, mc) => {
                    const cl = ALL_BILL_CLAUSES.find(c => c.id === mc.clauseId);
                    if (!cl) return sum;
                    return sum + getAmendmentsForClause(cl.id).filter(a => a.cbcStatus === 'pending').length;
                  }, 0);
                  
                  return (
                    <div className="flex flex-col w-full">
                      <SectionHeader title="Upcoming Clauses" count={cbcUpcomingClauses.length} supplementaryText={totalAmendments > 0 ? `${totalAmendments} amendment${totalAmendments !== 1 ? 's' : ''}` : undefined} />
                    <div className="flex flex-col w-full divide-y divide-[var(--card-border)]">
                      {cbcUpcomingClauses.map(mc => {
                        const cl = ALL_BILL_CLAUSES.find(c => c.id === mc.clauseId);
                        if (!cl) return null;
                        const amendCount = getAmendmentsForClause(cl.id).filter(a => a.cbcStatus === 'pending').length;
                        return (
                          <div key={mc.clauseId} className="flex items-center gap-[8px] py-[8px] px-[4px]">
                            <p className="font-semibold text-[length:var(--text-label)] leading-[14px] text-[var(--foreground)]">Cl. {cl.number}</p>
                            <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] flex-1 min-w-0 truncate">
                              {cl.title.length > 50 ? cl.title.substring(0, 50) + '…' : cl.title}
                            </p>
                            {amendCount > 0 && (
                              <StatusChip label={`${amendCount}`} variant="warning" />
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })()}

                {/* Disposed clauses + amendments (collapsible) */}
                {cbcPhase !== 'not-started' && (() => {
                  const disposedCls = cbcClauses.filter(c => c.cbcStatus === 'passed' || c.cbcStatus === 'rejected' || c.cbcStatus === 'skipped');
                  const disposedAmends = cbcAmendments.filter(a => a.cbcStatus === 'passed' || a.cbcStatus === 'rejected' || a.cbcStatus === 'withdrawn');
                  if (disposedCls.length === 0 && disposedAmends.length === 0) return null;
                  return (
                    <CBCDisposedSectionManaged
                      cbcClauses={disposedCls}
                      cbcAmendments={disposedAmends}
                      allBillClauses={ALL_BILL_CLAUSES}
                      onClauseNavigate={navigateToClause}
                    />
                  );
                })()}

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// ── Focal Speaker Card (on-deck → active, stays mounted) ─────────────────────

function FocalSpeakerCard({
  speaker,
  mode,
  timeRemaining,
}: {
  speaker: ManagedSpeaker;
  mode: 'on-deck' | 'active';
  timeRemaining?: number;
}) {
  const progress = mode === 'active' && timeRemaining !== undefined
    ? ((speaker.allocatedTime - timeRemaining) / speaker.allocatedTime) * 100
    : 0;
  const isLow = mode === 'active' && timeRemaining !== undefined && timeRemaining <= 60;
  const isOverTime = mode === 'active' && timeRemaining !== undefined && timeRemaining <= 0;

  return (
    <div className="bg-[var(--card)] flex flex-col gap-[12px] p-[16px] relative rounded-t-[var(--radius-card)] rounded-b-none w-full">

      {/* Speaker info */}
      <div className="flex items-center gap-[12px]">
        <div className="relative shrink-0 size-[40px]">
          <img alt="" className="block max-w-none size-full rounded-full object-cover" src={speaker.avatar} />
        </div>
        <div className="flex flex-col gap-[4px] flex-1 min-w-0">
          <div className="flex items-center gap-[8px]">
            <p className="font-semibold text-[length:var(--text-base)] leading-[16px] text-[var(--foreground)]">{speaker.name}</p>
            {/* Status chip — crossfade between "Next Up" and "Live" */}
            <AnimatePresence mode="wait" initial={false}>
              {mode === 'active' && (
                <motion.div
                  key="live"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className="flex gap-[6px] items-center bg-[var(--status-urgent-bg)] px-[8px] py-[2px] rounded-full shrink-0"
                >
                  <div className="relative size-[8px]">
                    <div className="absolute inset-0 rounded-full bg-[var(--status-urgent-text)] animate-ping opacity-75" />
                    <div className="relative size-full rounded-full bg-[var(--status-urgent-text)]" />
                  </div>
                  <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-urgent-text)]">Live</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="flex items-center gap-[6px]">
            <StatusChip label={speaker.role} />
            <PartyBadge party={speaker.party} />
          </div>
        </div>
      </div>

      {/* Timer / Allocated time info */}
      <AnimatePresence mode="wait" initial={false}>
        {mode === 'active' && timeRemaining !== undefined ? (
          <motion.div
            key="active-timer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col gap-[6px] w-full overflow-hidden"
          >
            <div className="flex items-center justify-between">
              <p className={`text-[length:var(--text-label)] leading-[14px] ${
                isOverTime ? 'text-[var(--status-urgent-text)]' : isLow ? 'text-[var(--status-pending-text)]' : 'text-[var(--muted-foreground)]'
              }`}>
                {isOverTime ? 'Overtime' : 'Time Remaining'}
              </p>
              <p className={`text-[length:var(--text-label)] leading-[14px] tabular-nums ${
                isOverTime ? 'text-[var(--status-urgent-text)]' : isLow ? 'text-[var(--status-pending-text)]' : 'text-[var(--muted-foreground)]'
              }`}>
                {isOverTime ? '+' : ''}{formatTime(Math.abs(timeRemaining))} / {formatTime(speaker.allocatedTime)}
              </p>
            </div>
            {/* Progress bar */}
            <div className="w-full h-[4px] bg-[var(--sidebar-primary)] rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-1000 ease-linear ${
                  isOverTime ? 'bg-[var(--status-urgent-text)]' : isLow ? 'bg-[var(--status-pending-text)]' : 'bg-[var(--primary)]'
                }`}
                style={{ width: `${Math.min(progress, 100)}%` }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="ondeck-info"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex items-center gap-[6px]"
          >
            <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
              <path d="M6.993 1.167A5.837 5.837 0 0 0 1.167 7c0 3.22 2.607 5.833 5.826 5.833A5.84 5.84 0 0 0 12.833 7a5.84 5.84 0 0 0-5.84-5.833zm.007 10.5A4.667 4.667 0 1 1 11.667 7 4.667 4.667 0 0 1 7 11.667zm.292-7.584h-.875v3.5l3.063 1.838.437-.718-2.625-1.557V4.083z" fill="var(--status-role-text)" />
            </svg>
            <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-role-text)]">
              Allocated: {formatTime(speaker.allocatedTime)}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Upcoming Speaker Row ─────────────────────────────────────────────────────

function UpcomingSpeakerRow({ speaker }: { speaker: ManagedSpeaker }) {
  return (
    <div className="flex items-center gap-[12px] py-[10px] px-[4px]">
      <div className="relative shrink-0 size-[28px]">
        <img alt="" className="block max-w-none size-full rounded-full object-cover" src={speaker.avatar} />
      </div>
      <div className="flex items-center gap-[6px] flex-1 min-w-0">
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--foreground)] truncate">{speaker.name}</p>
        <PartyBadge party={speaker.party} />
      </div>
      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums shrink-0">{formatTime(speaker.allocatedTime)}</p>
    </div>
  );
}

// ── Disposed Speaker Row (completed or skipped) ──────────────────────────────

function DisposedSpeakerRow({ speaker }: { speaker: ManagedSpeaker }) {
  const isSkipped = speaker.speakerStatus === 'skipped';

  return (
    <div className="flex items-center gap-[10px] py-[6px] px-[12px]">
      {/* Status icon */}
      {isSkipped ? (
        <svg className="size-[12px] shrink-0" fill="none" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="var(--status-urgent-text)" />
        </svg>
      ) : (
        <svg className="size-[12px] shrink-0" fill="none" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" />
        </svg>
      )}
      <div className="relative shrink-0 size-[24px]">
        <img alt="" className={`block max-w-none size-full rounded-full object-cover ${isSkipped ? 'opacity-50' : ''}`} src={speaker.avatar} />
      </div>
      <div className="flex items-center gap-[6px] flex-1 min-w-0">
        <p className={`text-[length:var(--text-label)] leading-[14px] truncate ${isSkipped ? 'text-[var(--muted-foreground)]' : 'text-[var(--foreground)]'}`}>{speaker.name}</p>
        <div className={isSkipped ? 'opacity-50' : ''}>
          <PartyBadge party={speaker.party} />
        </div>
      </div>
      {isSkipped ? (
        <svg className="size-[12px] shrink-0" fill="none" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="var(--status-urgent-text)" />
        </svg>
      ) : (
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums shrink-0">{formatTime(speaker.allocatedTime)}</p>
      )}
    </div>
  );
}

// ── Section Header ───────────────────────────────────────────────────────────

function SectionHeader({ title, count, variant = 'default', supplementaryText }: { title: string; count?: number; variant?: 'default' | 'disposed'; supplementaryText?: string }) {
  return (
    <div className="flex gap-[8px] items-center mb-[4px]">
      <p className={`font-semibold leading-[16px] text-[length:var(--text-base)] ${
        variant === 'disposed' ? 'text-[var(--muted-foreground)]' : 'text-[var(--foreground)]'
      }`}>
        {title}
      </p>
      {count !== undefined && (
        <div className="flex items-center justify-center rounded-full bg-[var(--sidebar-primary)] px-[8px] py-[2px]">
          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--sidebar-primary-foreground)]">{count}</p>
        </div>
      )}
      {supplementaryText && (
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">
          · {supplementaryText}
        </p>
      )}
    </div>
  );
}

// ── Chapter Navigation Bar ───────────────────────────────────────────────────

function ChapterSelector({
  activeChapterId,
  onChapterSelect,
  onClauseClick,
}: {
  activeChapterId: string;
  onChapterSelect: (chapterId: string) => void;
  onClauseClick: (clauseId: string) => void;
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredChapterId, setHoveredChapterId] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeChapter = SITTING_BILL.chapters.find(ch => ch.id === activeChapterId);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
      setHoveredChapterId(null);
    }, 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Current chapter header */}
      <div className="flex items-center gap-[8px] cursor-pointer">
        {activeChapter && (
          <>
            <StatusChip label={`CHAPTER ${activeChapter.number}`} variant="inactive" />
            {/* Chevron */}
            <svg className={`size-[16px] text-[var(--muted-foreground)] transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 16 16">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </div>

      {/* Dropdown listing all chapters */}
      {showDropdown && (
        <div
          className="absolute top-full left-0 mt-[4px] z-50 bg-[var(--card)] rounded-[var(--radius)] shadow-[var(--elevation-sm)] w-[380px] overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />

          {/* Chapter list with inline clause expansion on hover */}
          <div className="flex flex-col gap-[2px] p-[6px] max-h-[420px] overflow-y-auto">
            {SITTING_BILL.chapters.map((chapter) => {
              const isSelected = chapter.id === activeChapterId;
              const isHovered = chapter.id === hoveredChapterId;
              const showClauses = (isHovered || (isSelected && hoveredChapterId === null)) && chapter.clauses.length > 0;

              return (
                <div key={chapter.id}>
                  <button
                    onMouseEnter={() => setHoveredChapterId(chapter.id)}
                    onClick={() => {
                      onChapterSelect(chapter.id);
                      setShowDropdown(false);
                      setHoveredChapterId(null);
                    }}
                    className={`flex gap-[6px] items-center px-[8px] py-[6px] rounded-[4px] cursor-pointer transition-colors w-full text-left ${
                      isHovered
                        ? 'bg-[var(--sidebar-primary)]'
                        : isSelected
                          ? 'bg-[var(--sidebar-primary)]'
                          : 'hover:bg-[var(--sidebar-primary)]'
                    }`}
                  >
                    <p className="flex-1 leading-[16px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">
                      <span className="text-[var(--foreground)]">{chapter.number}.</span> {chapter.name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}
                    </p>
                    {/* Inline chevron indicating expandable */}
                    <svg className={`size-[12px] text-[var(--muted-foreground)] transition-transform duration-200 ${showClauses ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 16 16">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Inline clause list — expands below hovered chapter or active chapter (anchor) */}
                  <AnimatePresence initial={false}>
                    {showClauses && (
                      <motion.div
                        key={`clauses-${chapter.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col ml-[6px] my-[2px]">
                          {chapter.clauses.map((clause) => {
                            const clauseTitle = clause.title.length > 60 ? clause.title.substring(0, 60) + '…' : clause.title;

                            return (
                              <button
                                key={clause.id}
                                className="flex items-center gap-[6px] px-[8px] py-[5px] hover:bg-[var(--sidebar-primary)] rounded-[4px] transition-colors cursor-pointer w-full text-left"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onChapterSelect(chapter.id);
                                  onClauseClick(clause.id);
                                  setShowDropdown(false);
                                  setHoveredChapterId(null);
                                }}
                              >
                                <p className="flex-1 text-[length:var(--text-label)] leading-[14px] text-[var(--sidebar-primary-foreground)] truncate">
                                  <span className="font-semibold text-[var(--foreground)]">Cl. {clause.number}</span>
                                  <span className="text-[var(--muted-foreground)]"> — {clauseTitle}</span>
                                </p>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Clause-by-Clause Chapter Selector ──────────────────────────────────────

function CBCChapterSelector({
  activeChapterId,
  onChapterSelect,
  onClauseClick,
  clauseStatuses,
}: {
  activeChapterId: string;
  onChapterSelect: (chapterId: string) => void;
  onClauseClick: (clauseId: string) => void;
  clauseStatuses: Map<string, ClauseVoteStatus>;
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredChapterId, setHoveredChapterId] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeChapter = SITTING_BILL.chapters.find(ch => ch.id === activeChapterId);

  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    setShowDropdown(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setShowDropdown(false);
      setHoveredChapterId(null);
    }, 200);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Current chapter header */}
      <div className="flex items-center gap-[8px] cursor-pointer">
        {activeChapter && (
          <>
            <StatusChip label={`CHAPTER ${activeChapter.number}`} variant="inactive" />
            {/* Chevron */}
            <svg className={`size-[16px] text-[var(--muted-foreground)] transition-transform ${showDropdown ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 16 16">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </>
        )}
      </div>

      {/* Dropdown listing all chapters */}
      {showDropdown && (
        <div
          className="absolute top-full left-0 mt-[4px] z-50 bg-[var(--card)] rounded-[var(--radius)] shadow-[var(--elevation-sm)] w-[380px] overflow-hidden"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />

          {/* Chapter list with inline clause expansion on hover */}
          <div className="flex flex-col gap-[2px] p-[6px] max-h-[420px] overflow-y-auto">
            {SITTING_BILL.chapters.map((chapter) => {
              const isSelected = chapter.id === activeChapterId;
              const isHovered = chapter.id === hoveredChapterId;
              const showClauses = (isHovered || (isSelected && hoveredChapterId === null)) && chapter.clauses.length > 0;

              return (
                <div key={chapter.id}>
                  <button
                    onMouseEnter={() => setHoveredChapterId(chapter.id)}
                    onClick={() => {
                      onChapterSelect(chapter.id);
                      setShowDropdown(false);
                      setHoveredChapterId(null);
                    }}
                    className={`flex gap-[6px] items-center px-[8px] py-[6px] rounded-[4px] cursor-pointer transition-colors w-full text-left ${
                      isHovered
                        ? 'bg-[var(--sidebar-primary)]'
                        : isSelected
                          ? 'bg-[var(--sidebar-primary)]'
                          : 'hover:bg-[var(--sidebar-primary)]'
                    }`}
                  >
                    <p className="flex-1 leading-[16px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">
                      <span className="text-[var(--foreground)]">{chapter.number}.</span> {chapter.name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}
                    </p>
                    {/* Inline chevron indicating expandable */}
                    <svg className={`size-[12px] text-[var(--muted-foreground)] transition-transform duration-200 ${showClauses ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 16 16">
                      <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {/* Inline clause list — expands below hovered chapter or active chapter (anchor) */}
                  <AnimatePresence initial={false}>
                    {showClauses && (
                      <motion.div
                        key={`clauses-${chapter.id}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.18, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col ml-[6px] my-[2px]">
                          {chapter.clauses.map((clause) => {
                            const clauseTitle = clause.title.length > 60 ? clause.title.substring(0, 60) + '…' : clause.title;
                            const status = clauseStatuses.get(clause.id);

                            return (
                              <button
                                key={clause.id}
                                className="flex items-center gap-[6px] px-[8px] py-[5px] hover:bg-[var(--sidebar-primary)] rounded-[4px] transition-colors cursor-pointer w-full text-left"
                                onClick={(e) => {
                                  e.stopPropagation();
                                  onChapterSelect(chapter.id);
                                  onClauseClick(clause.id);
                                  setShowDropdown(false);
                                  setHoveredChapterId(null);
                                }}
                              >
                                <p className="flex-1 text-[length:var(--text-label)] leading-[14px] text-[var(--sidebar-primary-foreground)] truncate">
                                  <span className="font-semibold text-[var(--foreground)]">Cl. {clause.number}</span>
                                  <span className="text-[var(--muted-foreground)]"> — {clauseTitle}</span>
                                </p>
                                {status === 'passed' && (
                                  <svg className="size-[12px] shrink-0" fill="none" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" /></svg>
                                )}
                                {status === 'rejected' && (
                                  <svg className="size-[12px] shrink-0" fill="none" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="var(--status-rejected-text)" /></svg>
                                )}
                                {status === 'active' && (
                                  <div className="size-[8px] rounded-full bg-[var(--status-role-text)] shrink-0" />
                                )}
                                {status === 'upcoming' && (
                                  <div className="size-[8px] rounded-full bg-[var(--muted-foreground)] opacity-30 shrink-0" />
                                )}
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Clause-by-Clause Panel ─────────────────────────────────────────────────

function CBCClauseByClausePanel({ clauseStatuses, selectedClauseId, onClauseNavigate, highlightedNodeId, onAmendmentHover, hoveredAmendmentId }: { clauseStatuses: Map<string, ClauseVoteStatus>; selectedClauseId: string | undefined; onClauseNavigate: (clauseId: string) => void; highlightedNodeId: string | null; onAmendmentHover: (nodeId: string | null) => void; hoveredAmendmentId: string | null }) {
  const activeClauseId = Array.from(clauseStatuses.entries()).find(([, s]) => s === 'active')?.[0];
  const amendmentNumberMap = new Map<string, number>();
  CLAUSE_AMENDMENTS.forEach((a, i) => { amendmentNumberMap.set(a.id, i + 1); });

  const displayClauseId = selectedClauseId || activeClauseId;
  const displayClause = displayClauseId
    ? SITTING_BILL.chapters.flatMap(ch => ch.clauses).find(cl => cl.id === displayClauseId)
    : undefined;
  const isDisplayClauseLive = displayClauseId === activeClauseId;
  const displayClauseStatus = displayClauseId ? clauseStatuses.get(displayClauseId) : undefined;

  const displayClauseAmendments = displayClauseId ? CLAUSE_AMENDMENTS.filter(a => {
    const clause = SITTING_BILL.chapters.flatMap(ch => ch.clauses).find(cl => cl.id === displayClauseId);
    if (!clause) return false;
    const nodeIds = new Set<string>([clause.id]);
    clause.subClauses.forEach(sc => { nodeIds.add(sc.id); sc.items.forEach(it => { nodeIds.add(it.id); it.specialBlocks.forEach(sb => nodeIds.add(sb.id)); }); sc.specialBlocks.forEach(sb => nodeIds.add(sb.id)); });
    clause.specialBlocks.forEach(sb => nodeIds.add(sb.id));
    return nodeIds.has(a.clauseId);
  }) : [];

  const pendingAmendments = displayClauseAmendments.filter(a => !a.votingResult);
  const displayDisposedCount = displayClauseAmendments.filter(a => !!a.votingResult).length;
  const isViewingOtherClause = displayClauseId !== activeClauseId && !!displayClauseId;
  const activeClause = activeClauseId ? SITTING_BILL.chapters.flatMap(ch => ch.clauses).find(cl => cl.id === activeClauseId) : undefined;

  const allClauses = SITTING_BILL.chapters.flatMap(ch => ch.clauses);
  const disposedClauses = allClauses.filter(cl => { const s = clauseStatuses.get(cl.id); return s === 'passed' || s === 'rejected'; });
  const allDisposedAmendments = CLAUSE_AMENDMENTS.filter(a => !!a.votingResult);

  return (
    <div className="flex flex-col gap-[12px] w-full">
      {/* "Go to live clause" shortcut */}
      {activeClause && activeClauseId && isViewingOtherClause && (
        <div onClick={() => onClauseNavigate(activeClauseId)} className="bg-[var(--card)] flex items-center gap-[8px] px-[12px] py-[10px] relative rounded-[var(--radius-card)] w-full cursor-pointer transition-shadow hover:shadow-[var(--elevation-sm)]">
          <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
          <p className="font-semibold text-[length:var(--text-base)] leading-[16px] text-[var(--foreground)]">Clause {activeClause.number}</p>
          <div className="flex gap-[4px] items-center bg-[var(--status-urgent-bg)] px-[6px] py-[2px] rounded-full shrink-0">
            <div className="relative size-[6px]"><div className="absolute inset-0 rounded-full bg-[var(--status-urgent-text)] animate-ping opacity-75" /><div className="relative size-full rounded-full bg-[var(--status-urgent-text)]" /></div>
            <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-urgent-text)]">Live</p>
          </div>
          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] ml-auto shrink-0">Go to live clause</p>
          <svg className="size-[14px] text-[var(--muted-foreground)] shrink-0" fill="none" viewBox="0 0 24 24"><path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </div>
      )}

      {/* Clause card with amendments */}
      {displayClause && displayClauseId ? (
        <div className="bg-[var(--card)] flex flex-col relative rounded-[var(--radius-card)] w-full overflow-hidden">
          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] z-[2] ${isDisplayClauseLive ? 'border-[var(--status-role-border)] opacity-[0.46]' : 'border-[var(--card-border)]'}`} />
          <div className="flex items-center gap-[8px] px-[16px] py-[12px] cursor-pointer shrink-0" onClick={() => onClauseNavigate(displayClauseId)}>
            <p className="font-semibold text-[length:var(--text-base)] leading-[16px] text-[var(--foreground)]">Clause {displayClause.number}</p>
            {isDisplayClauseLive && (
              <div className="flex gap-[4px] items-center bg-[var(--status-urgent-bg)] px-[6px] py-[2px] rounded-full shrink-0">
                <div className="relative size-[6px]"><div className="absolute inset-0 rounded-full bg-[var(--status-urgent-text)] animate-ping opacity-75" /><div className="relative size-full rounded-full bg-[var(--status-urgent-text)]" /></div>
                <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-urgent-text)]">Live</p>
              </div>
            )}
            {displayClauseStatus === 'passed' && <StatusChip label="Passed" variant="approved" />}
            {displayClauseStatus === 'upcoming' && <StatusChip label="Upcoming" variant="inactive" />}
          </div>
          {pendingAmendments.length > 0 ? (
            <div className="flex flex-col gap-[8px] p-[12px]">
              {pendingAmendments.map((a) => (
                <CBCAmendmentRow key={a.id} amendment={a} amendmentNumber={amendmentNumberMap.get(a.id) || 0} isHighlighted={hoveredAmendmentId === a.id} onHoverStart={() => onAmendmentHover(a.id)} onHoverEnd={() => onAmendmentHover(null)} />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center px-[16px] py-[24px]">
              <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">{displayDisposedCount > 0 ? 'All amendments have been disposed' : 'No amendments for this clause'}</p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-[var(--card)] flex items-center justify-center p-[24px] rounded-[var(--radius-card)] relative">
          <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">Select a clause from the bill text to view amendments</p>
        </div>
      )}

      {/* Unified Disposed section */}
      <CBCDisposedSection clauses={disposedClauses} amendments={allDisposedAmendments} amendmentNumberMap={amendmentNumberMap} clauseStatuses={clauseStatuses} onClauseNavigate={onClauseNavigate} />
    </div>
  );
}

// ── CBC Amendment Row ────────────────────────────────────────────────────────

function CBCAmendmentRow({ amendment, amendmentNumber, isHighlighted, onHoverStart, onHoverEnd }: { amendment: LBClauseAmendment; amendmentNumber: number; isHighlighted?: boolean; onHoverStart?: () => void; onHoverEnd?: () => void }) {
  const typeLabel = AMENDMENT_TYPE_LABELS[amendment.type];
  const typeVariant = AMENDMENT_TYPE_VARIANTS[amendment.type];
  return (
    <div className="flex flex-col gap-[10px] p-[12px] relative rounded-[var(--radius)] w-full overflow-hidden bg-[var(--input-background)]" onMouseEnter={onHoverStart} onMouseLeave={onHoverEnd}>
      <div className="flex items-center gap-[6px] w-full">
        <p className="font-semibold text-[length:var(--text-label)] leading-[14px] text-[var(--foreground)]">{amendment.clauseLabel}</p>
        <StatusChip label={typeLabel} variant={typeVariant as any} />
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums shrink-0 ml-auto">#{amendmentNumber}</p>
      </div>
      {amendment.type === 'substitute' && amendment.proposedText && (
        <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]"><DiffHighlight original={amendment.originalText} proposed={amendment.proposedText} /></p>
      )}
      {amendment.type === 'omit' && (
        <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">{amendment.originalText}</p>
      )}
      {amendment.type === 'insert' && amendment.proposedText && (
        <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">{amendment.proposedText}</p>
      )}
      <div className="flex items-center gap-[8px]">
        <div className="relative shrink-0 size-[20px]"><img alt="" className="block max-w-none size-full rounded-full object-cover" src={amendment.submittedBy.avatar} /></div>
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--sidebar-primary-foreground)]">{amendment.submittedBy.name}</p>
        <PartyBadge party={amendment.submittedBy.party} />
      </div>
      <Divider />
      <div className="flex items-center gap-[8px]">
        <StatusChip label="Pending" variant="pending" />
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">Awaiting vote</p>
      </div>
    </div>
  );
}

// ── CBC Disposed Section ────────────────────────────────────────────────────���

function CBCDisposedSection({ clauses, amendments, amendmentNumberMap, clauseStatuses, onClauseNavigate }: { clauses: Clause[]; amendments: LBClauseAmendment[]; amendmentNumberMap: Map<string, number>; clauseStatuses: Map<string, ClauseVoteStatus>; onClauseNavigate: (clauseId: string) => void }) {
  const [expanded, setExpanded] = useState(false);
  const allClausesForGrouping = SITTING_BILL.chapters.flatMap(ch => ch.clauses);
  const amendmentsByClause = new Map<string, LBClauseAmendment[]>();
  amendments.forEach(a => {
    const parentClause = allClausesForGrouping.find(cl => {
      const nodeIds = new Set<string>([cl.id]);
      cl.subClauses.forEach(sc => { nodeIds.add(sc.id); sc.items.forEach(it => { nodeIds.add(it.id); it.specialBlocks.forEach(sb => nodeIds.add(sb.id)); }); sc.specialBlocks.forEach(sb => nodeIds.add(sb.id)); });
      cl.specialBlocks.forEach(sb => nodeIds.add(sb.id));
      return nodeIds.has(a.clauseId);
    });
    if (parentClause) {
      const existing = amendmentsByClause.get(parentClause.id);
      if (existing) { existing.push(a); } else { amendmentsByClause.set(parentClause.id, [a]); }
    }
  });
  const passedClauseIds = new Set(clauses.map(c => c.id));
  const relevantClauseIds = new Set([...passedClauseIds, ...amendmentsByClause.keys()]);
  const mergedGroups = allClausesForGrouping.filter(cl => relevantClauseIds.has(cl.id)).sort((a, b) => a.number - b.number);
  const totalItems = clauses.length + amendments.length;
  if (totalItems === 0) return null;

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center gap-[8px] px-[4px] py-[8px] cursor-pointer transition-colors" onClick={() => setExpanded(!expanded)}>
        <svg className={`size-[14px] text-[var(--muted-foreground)] transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 16 16"><path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <p className="font-semibold text-[length:var(--text-base)] leading-[16px] text-[var(--muted-foreground)]">Disposed</p>
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">{clauses.length} clause{clauses.length !== 1 ? 's' : ''} · {amendments.length} amendment{amendments.length !== 1 ? 's' : ''}</p>
      </div>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: 'easeInOut' }} className="overflow-hidden">
            <div className="flex flex-col pt-[4px]">
              {mergedGroups.map((clause, index) => {
                const clauseStatus = clauseStatuses.get(clause.id);
                const isPassed = clauseStatus === 'passed';
                const isRejected = clauseStatus === 'rejected';
                const groupAmendments = amendmentsByClause.get(clause.id) || [];
                return (
                  <div key={clause.id} className="flex flex-col">
                    {index > 0 && <div className="h-[1px] bg-[var(--card-border)] mx-[4px]" />}
                    <div onClick={() => onClauseNavigate(clause.id)} className="flex items-center gap-[6px] px-[4px] py-[6px] cursor-pointer hover:bg-[var(--input-background)] rounded-[var(--radius)] transition-colors">
                      {isPassed ? (
                        <svg className="size-[12px] shrink-0 text-[var(--status-approved-text)]" fill="none" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" /></svg>
                      ) : isRejected ? (
                        <svg className="size-[12px] shrink-0 text-[var(--status-rejected-text)]" fill="none" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" /></svg>
                      ) : (
                        <div className="size-[12px] shrink-0 flex items-center justify-center"><div className="size-[4px] rounded-full bg-[var(--muted-foreground)]" /></div>
                      )}
                      <p className="text-[length:var(--text-label)] leading-[14px] font-semibold flex-1 min-w-0 text-[var(--muted-foreground)]">Clause {clause.number}</p>
                      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] shrink-0">{groupAmendments.length} amendment{groupAmendments.length !== 1 ? 's' : ''}</p>
                    </div>
                    {groupAmendments.map((a) => {
                      const isPassed = a.votingResult?.passed;
                      const typeLabel = AMENDMENT_TYPE_LABELS[a.type];
                      return (
                        <div key={a.id} className="flex items-center gap-[6px] pl-[24px] pr-[4px] py-[3px]">
                          {isPassed ? (
                            <svg className="size-[10px] shrink-0 text-[var(--status-approved-text)] opacity-60" fill="none" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" /></svg>
                          ) : (
                            <svg className="size-[10px] shrink-0 text-[var(--status-rejected-text)] opacity-60" fill="none" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" /></svg>
                          )}
                          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] truncate">
                            <span className="opacity-60">{a.clauseLabel}</span><span className="opacity-30 mx-[3px]">·</span><span>{typeLabel}</span>
                          </p>
                          <span className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] opacity-50">·</span>
                          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] opacity-50 truncate flex-1 min-w-0">{a.submittedBy.name}</p>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Bill Text Rendering (General Consideration — read-only with amendments) ──

function ClauseAmendmentsExpandable({ nodeId }: { nodeId: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const amendments = CLAUSE_AMENDMENTS.filter(a => a.clauseId === nodeId);
  if (amendments.length === 0) return null;

  return (
    <div className="mt-[8px] ml-[24px]">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-[6px] px-[8px] py-[4px] rounded-[4px] hover:bg-[var(--sidebar-primary)] transition-colors w-full text-left group cursor-pointer"
      >
        <svg
          className={`size-[12px] text-[var(--muted-foreground)] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 16 16"
        >
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] group-hover:text-[var(--foreground)]">
          {amendments.length} {amendments.length === 1 ? 'Amendment' : 'Amendments'}
        </p>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.18, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-[6px] mt-[6px]">
              {amendments.map((amendment) => (
                <div
                  key={amendment.id}
                  className="bg-[var(--input-background)] rounded-[4px] px-[10px] py-[8px] flex flex-col gap-[6px]"
                >
                  <div className="flex items-center gap-[6px] flex-wrap">
                    <StatusChip label={AMENDMENT_TYPE_LABELS[amendment.type] || amendment.type} variant={AMENDMENT_TYPE_VARIANTS[amendment.type] as any} />
                    <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] flex items-center gap-[4px]">
                      <span className="opacity-60">by</span>
                      <span>{amendment.submittedBy.name}</span>
                    </p>
                  </div>

                  {amendment.type === 'substitute' && amendment.proposedText && (
                    <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">
                      <DiffHighlight original={amendment.originalText} proposed={amendment.proposedText} />
                    </p>
                  )}
                  {amendment.type === 'omit' && (
                    <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--sidebar-primary-foreground)] line-through opacity-60">
                      {amendment.originalText}
                    </p>
                  )}
                  {amendment.type === 'insert' && amendment.proposedText && (
                    <div className="bg-[var(--status-progress-bg)] border-l-[2px] border-[var(--status-progress-text)] px-[8px] py-[4px] rounded-[2px]">
                      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-progress-text)]">
                        {amendment.proposedText}
                      </p>
                    </div>
                  )}

                  {amendment.votingResult && (
                    <div className="flex items-center gap-[6px] pt-[4px] border-t border-[var(--card-border)]">
                      <StatusChip
                        label={amendment.votingResult.passed ? 'Passed' : 'Rejected'}
                        variant={amendment.votingResult.passed ? 'approved' : 'rejected'}
                      />
                      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">
                        {amendment.votingResult.ayes} - {amendment.votingResult.nays}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ── Speaker CBC Amendment Row (matches student view exactly) ────────────────

function SpeakerCBCAmendmentRow({ 
  amendment, 
  amendmentNumber, 
  isHighlighted, 
  onHoverStart, 
  onHoverEnd,
  onMove,
  onWithdraw,
  onVotePass,
  onVoteReject,
}: { 
  amendment: ManagedAmendment; 
  amendmentNumber: number; 
  isHighlighted?: boolean; 
  onHoverStart?: () => void; 
  onHoverEnd?: () => void;
  onMove?: () => void;
  onWithdraw?: () => void;
  onVotePass?: () => void;
  onVoteReject?: () => void;
}) {
  const typeLabel = AMENDMENT_TYPE_LABELS[amendment.type];
  const typeVariant = AMENDMENT_TYPE_VARIANTS[amendment.type];

  const showStagingActions = amendment.cbcStatus === 'staging';
  const showVotingActions = amendment.cbcStatus === 'voting';

  return (
    <div
      className="flex flex-col gap-[10px] p-[12px] relative rounded-[var(--radius)] w-full overflow-hidden bg-[var(--input-background)]"
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      {/* Header */}
      <div className="flex items-center gap-[6px] w-full">
        <p className="font-semibold text-[length:var(--text-label)] leading-[14px] text-[var(--foreground)]">{amendment.clauseLabel}</p>
        <StatusChip label={typeLabel} variant={typeVariant as any} />
        {/* Amendment number index */}
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums shrink-0 ml-auto">#{amendmentNumber}</p>
      </div>

      {/* Content */}
      {amendment.type === 'substitute' && amendment.proposedText && (
        <div className="flex flex-col gap-[4px]">
          <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">
            <DiffHighlight original={amendment.originalText} proposed={amendment.proposedText} />
          </p>
        </div>
      )}
      {amendment.type === 'omit' && (
        <div className="flex flex-col gap-[4px]">
          <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">
            {amendment.originalText}
          </p>
        </div>
      )}
      {amendment.type === 'insert' && amendment.proposedText && (
        <div className="flex flex-col gap-[4px]">
          <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">
            {amendment.proposedText}
          </p>
        </div>
      )}

      {/* Submitter */}
      <div className="flex items-center gap-[8px]">
        <div className="relative shrink-0 size-[20px]">
          <img alt="" className="block max-w-none size-full rounded-full object-cover" src={amendment.submittedBy.avatar} />
        </div>
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--sidebar-primary-foreground)]">{amendment.submittedBy.name}</p>
        <PartyBadge party={amendment.submittedBy.party} />
      </div>

      {/* Staging Actions (Move / Withdraw) — shown when amendment.cbcStatus === 'staging' */}
      {showStagingActions && (
        <>
          <Divider />
          <div className="flex items-center gap-[8px]">
            <CompactActionButton
              label="Move"
              variant="primary"
              onClick={onMove}
            />
            <CompactActionButton
              label="Withdraw"
              variant="outline"
              onClick={onWithdraw}
            />
          </div>
        </>
      )}

      {/* Voting Actions (Pass / Reject) — shown when amendment.cbcStatus === 'voting' */}
      {showVotingActions && (
        <>
          <Divider />
          <div className="flex items-center gap-[12px]">
            {/* Action buttons */}
            <div className="flex items-center gap-[8px]">
              <CompactActionButton
                label="Adopt"
                variant="primary"
                onClick={onVotePass}
              />
              <CompactActionButton
                label="Negative"
                variant="destructive"
                onClick={onVoteReject}
              />
            </div>
            {/* Voting indicator */}
            <div className="flex items-center gap-[6px]">
              <div className="size-[6px] rounded-full bg-[var(--status-progress-text)] animate-pulse" />
              <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-progress-text)] font-semibold">
                Voting
              </p>
            </div>
          </div>
        </>
      )}

      {/* Voting Result — shown when amendment has been passed or rejected */}
      {(amendment.cbcStatus === 'passed' || amendment.cbcStatus === 'rejected') && amendment.votingResult && (
        <>
          <Divider />
          <StatusChip
            label={amendment.cbcStatus === 'passed' ? 'Adopted' : 'Negatived'}
            variant={amendment.cbcStatus === 'passed' ? 'approved' : 'rejected'}
          />
        </>
      )}
    </div>
  );
}

function SpecialBlockRenderer({ block, index, totalOfType }: { block: SpecialBlock; index: number; totalOfType: number }) {
  const getPrefix = () => {
    if (totalOfType === 1) {
      switch (block.type) {
        case 'proviso': return 'Provided that';
        case 'explanation': return 'Explanation:';
        case 'illustration': return 'Illustration:';
      }
    } else {
      switch (block.type) {
        case 'proviso': return `Proviso ${index + 1}:`;
        case 'explanation': return `Explanation ${index + 1}:`;
        case 'illustration': return `Illustration (${String.fromCharCode(97 + index)}):`;
      }
    }
  };
  const getBgColor = () => {
    switch (block.type) {
      case 'proviso': return 'bg-[#fff4e6]';
      case 'explanation': return 'bg-[#e6f4ff]';
      case 'illustration': return 'bg-[#f0f9ff]';
    }
  };

  return (
    <div className={`${getBgColor()} rounded-[4px] p-[10px] flex gap-[6px] mt-[6px]`} data-node-id={block.id}>
      <span className="font-semibold text-[length:var(--text-label)] text-[var(--foreground)] leading-[16px] shrink-0">{getPrefix()}</span>
      <p className="flex-1 text-[length:var(--text-label)] text-[var(--sidebar-primary-foreground)] leading-[16px]">
        {block.content}
      </p>
    </div>
  );
}

function renderSpecialBlocks(blocks: SpecialBlock[]) {
  const typeOrder = { proviso: 0, explanation: 1, illustration: 2 };
  const sorted = [...blocks].sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);
  const countByType = blocks.reduce((acc, b) => { acc[b.type] = (acc[b.type] || 0) + 1; return acc; }, {} as Record<string, number>);
  const indexByType = { proviso: 0, explanation: 0, illustration: 0 };

  return sorted.map((block) => {
    const idx = indexByType[block.type];
    indexByType[block.type]++;
    return <SpecialBlockRenderer key={block.id} block={block} index={idx} totalOfType={countByType[block.type] || 0} />;
  });
}

function BillClauseRenderer({
  clause,
  amendmentCount,
  showAmendments,
}: {
  clause: Clause;
  amendmentCount?: number;
  showAmendments?: boolean;
}) {
  const toLowerRoman = (n: number) => toRomanNumeral(n).toLowerCase();

  return (
    <div className="flex flex-col gap-[6px] py-[8px] px-[12px] rounded-[var(--radius)]" data-clause-id={clause.id}>
      {/* Clause heading */}
      <div className="flex gap-[8px] items-start">
        <p className="font-semibold text-[length:var(--text-base)] leading-[20px] text-[var(--foreground)] shrink-0">{clause.number}.</p>
        <p className="flex-1 text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">
          {clause.title}
        </p>
        {amendmentCount !== undefined && amendmentCount > 0 && (
          <StatusChip label={`${amendmentCount}`} variant="warning" />
        )}
      </div>

      {/* Amendments expandable for general consideration */}
      {showAmendments && (
        <ClauseAmendmentsExpandable nodeId={clause.id} />
      )}

      {/* Sub-clauses */}
      {clause.subClauses.map((sc) => (
        <div key={sc.id} className="ml-[24px] flex flex-col gap-[4px]">
          <div className="flex gap-[6px] items-start">
            <p className="text-[length:var(--text-label)] leading-[18px] text-[var(--muted-foreground)] shrink-0 w-[20px]">({sc.number})</p>
            <p className="flex-1 text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">
              {sc.content}
            </p>
          </div>

          {showAmendments && (
            <ClauseAmendmentsExpandable nodeId={sc.id} />
          )}

          {/* Items */}
          {sc.items.map((item) => (
            <div key={item.id} className="flex flex-col gap-[0px]">
              <div className="ml-[28px] flex gap-[6px] items-start">
                <p className="text-[length:var(--text-label)] leading-[18px] text-[var(--muted-foreground)] shrink-0 w-[24px]">({toLowerRoman(item.number)})</p>
                <p className="flex-1 text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">
                  {item.content}
                </p>
              </div>

              {showAmendments && (
                <div className="ml-[28px]">
                  <ClauseAmendmentsExpandable nodeId={item.id} />
                </div>
              )}
            </div>
          ))}

          {/* Sub-clause special blocks */}
          {sc.specialBlocks.length > 0 && (
            <div className="ml-[28px]">{renderSpecialBlocks(sc.specialBlocks)}</div>
          )}
        </div>
      ))}

      {/* Clause-level special blocks */}
      {clause.specialBlocks.length > 0 && (
        <div className="ml-[24px]">{renderSpecialBlocks(clause.specialBlocks)}</div>
      )}
    </div>
  );
}

function CBCBillClauseRenderer({ clause, isActiveClause, isSelectedClause, clauseVoteStatus, amendmentCount, onClick, highlightedNodeId, passedAmendments }: { clause: Clause; isActiveClause: boolean; isSelectedClause: boolean; clauseVoteStatus: ClauseVoteStatus; amendmentCount?: number; onClick: () => void; highlightedNodeId: string | null; passedAmendments: Map<string, LBClauseAmendment> }) {
  const toLowerRoman = (n: number) => toRomanNumeral(n).toLowerCase();
  const isClauseHighlighted = highlightedNodeId === clause.id;
  const clauseAmendment = passedAmendments.get(clause.id);
  const clauseTitleText = clauseAmendment?.type === 'substitute' && clauseAmendment.proposedText ? clauseAmendment.proposedText : clause.title;
  const isClauseOmitted = clauseAmendment?.type === 'omit';
  const isClauseNegatived = clauseVoteStatus === 'rejected';

  return (
    <div
      data-clause-id={clause.id} data-node-id={clause.id} onClick={onClick}
      className={`flex flex-col gap-[6px] py-[8px] px-[12px] rounded-[var(--radius)] transition-all duration-200 cursor-pointer ${
        isClauseHighlighted ? 'bg-[var(--status-warning-bg)] ring-1 ring-[var(--status-warning-border)]'
          : isClauseNegatived ? 'bg-[var(--status-rejected-bg)] bg-opacity-40'
          : isSelectedClause ? 'bg-[var(--status-role-bg)] ring-1 ring-[var(--status-role-border)]'
          : isActiveClause ? 'bg-[var(--status-role-bg)] bg-opacity-30'
          : 'hover:bg-[var(--sidebar-primary)]'
      }`}
    >
      <div className="flex gap-[8px] items-start">
        <p className={`font-semibold text-[length:var(--text-base)] leading-[20px] shrink-0 ${isClauseNegatived ? 'text-[var(--muted-foreground)] line-through opacity-50' : 'text-[var(--foreground)]'}`}>{clause.number}.</p>
        {isClauseOmitted ? (
          <div className="relative overflow-hidden">
            <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--muted-foreground)] line-through opacity-50">{clause.title}</p>
            <span className="inline-flex items-center gap-[3px] bg-[var(--status-rejected-bg)] text-[var(--status-rejected-text)] text-[length:var(--text-label)] leading-[14px] px-[5px] py-[1px] rounded-[4px] mt-[2px]">
              <svg className="size-[10px]" fill="none" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" /></svg>
              Omitted
            </span>
          </div>
        ) : isClauseNegatived ? (
          <div className="flex-1">
            <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--muted-foreground)] line-through opacity-50">
              {clause.title}
            </p>
            <StatusChip label="Negatived" variant="rejected" />
          </div>
        ) : (
          <div className="flex-1">
            <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">
              {clauseTitleText}
              {clauseAmendment?.type === 'substitute' && (
                <span className="inline-flex items-center gap-[3px] bg-[var(--status-approved-bg)] text-[var(--status-approved-text)] text-[length:var(--text-label)] leading-[14px] px-[5px] py-[1px] rounded-[4px] ml-[4px] align-middle">
                  <svg className="size-[10px]" fill="none" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" /></svg>
                  Amended
                </span>
              )}
            </p>
          </div>
        )}
        {amendmentCount !== undefined && amendmentCount > 0 && <StatusChip label={`${amendmentCount}`} variant="warning" />}
        {isActiveClause && (
          <div className="flex gap-[4px] items-center bg-[var(--status-urgent-bg)] px-[6px] py-[2px] rounded-full shrink-0">
            <div className="relative size-[6px]"><div className="absolute inset-0 rounded-full bg-[var(--status-urgent-text)] animate-ping opacity-75" /><div className="relative size-full rounded-full bg-[var(--status-urgent-text)]" /></div>
            <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-urgent-text)]">Live</p>
          </div>
        )}
      </div>

      {!isClauseNegatived && clause.subClauses.flatMap((sc) => {
        const isScHighlighted = highlightedNodeId === sc.id;
        const scAmendment = passedAmendments.get(sc.id);
        const scContent = scAmendment?.type === 'substitute' && scAmendment.proposedText ? scAmendment.proposedText : sc.content;
        const isScOmitted = scAmendment?.type === 'omit';
        const scElements: React.ReactNode[] = [
          <div key={sc.id} data-node-id={sc.id} className={`ml-[24px] flex flex-col gap-[4px] rounded-[4px] transition-all duration-200 ${isScHighlighted ? 'bg-[var(--status-warning-bg)] ring-1 ring-[var(--status-warning-border)] px-[8px] py-[4px] -mx-[8px]' : ''}`}>
            <div className="flex gap-[6px] items-start">
              <p className="text-[length:var(--text-label)] leading-[18px] text-[var(--muted-foreground)] shrink-0 w-[20px]">({sc.number})</p>
              {isScOmitted ? (
                <div className="relative overflow-hidden">
                  <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--muted-foreground)] line-through opacity-50">{sc.content}</p>
                  <span className="inline-flex items-center gap-[3px] bg-[var(--status-rejected-bg)] text-[var(--status-rejected-text)] text-[length:var(--text-label)] leading-[14px] px-[5px] py-[1px] rounded-[4px] mt-[2px]">Omitted</span>
                </div>
              ) : (
                <div className="flex-1">
                  <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">
                    {scContent}
                    {scAmendment?.type === 'substitute' && <span className="inline-flex items-center gap-[3px] bg-[var(--status-approved-bg)] text-[var(--status-approved-text)] text-[length:var(--text-label)] leading-[14px] px-[5px] py-[1px] rounded-[4px] ml-[4px] align-middle">Amended</span>}
                  </p>
                </div>
              )}
            </div>
            {sc.items.flatMap((item) => {
              const isItemHighlighted = highlightedNodeId === item.id;
              const itemAmendment = passedAmendments.get(item.id);
              const itemContent = itemAmendment?.type === 'substitute' && itemAmendment.proposedText ? itemAmendment.proposedText : item.content;
              const isItemOmitted = itemAmendment?.type === 'omit';
              const itemElements: React.ReactNode[] = [
                <div key={item.id} className="flex flex-col gap-[0px]">
                  <div data-node-id={item.id} className={`ml-[28px] flex gap-[6px] items-start rounded-[4px] transition-all duration-200 ${isItemHighlighted ? 'bg-[var(--status-warning-bg)] ring-1 ring-[var(--status-warning-border)] px-[6px] py-[3px] -mx-[6px]' : ''}`}>
                    <p className="text-[length:var(--text-label)] leading-[18px] text-[var(--muted-foreground)] shrink-0 w-[24px]">({toLowerRoman(item.number)})</p>
                    {isItemOmitted ? (
                      <div className="relative overflow-hidden">
                        <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--muted-foreground)] line-through opacity-50">{item.content}</p>
                        <span className="inline-flex items-center gap-[3px] bg-[var(--status-rejected-bg)] text-[var(--status-rejected-text)] text-[length:var(--text-label)] leading-[14px] px-[5px] py-[1px] rounded-[4px] mt-[2px]">Omitted</span>
                      </div>
                    ) : (
                      <div className="flex-1">
                        <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">
                          {itemContent}
                          {itemAmendment?.type === 'substitute' && <span className="inline-flex items-center gap-[3px] bg-[var(--status-approved-bg)] text-[var(--status-approved-text)] text-[length:var(--text-label)] leading-[14px] px-[5px] py-[1px] rounded-[4px] ml-[4px] align-middle">Amended</span>}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              ];
              // Insert amendment: add a new item after this one
              if (itemAmendment?.type === 'insert' && itemAmendment.proposedText) {
                itemElements.push(
                  <InsertedItemEntry
                    key={`${item.id}-inserted`}
                    number={item.number + 1}
                    text={itemAmendment.proposedText}
                    renderNumber={toLowerRoman}
                  />
                );
              }
              return itemElements;
            })}
            {sc.specialBlocks.length > 0 && <div className="ml-[28px]">{renderSpecialBlocks(sc.specialBlocks)}</div>}
          </div>
        ];
        // Insert amendment: add a new sub-clause after this one
        if (scAmendment?.type === 'insert' && scAmendment.proposedText) {
          scElements.push(
            <InsertedSubClauseEntry
              key={`${sc.id}-inserted`}
              number={sc.number + 1}
              text={scAmendment.proposedText}
            />
          );
        }
        return scElements;
      })}
      {!isClauseNegatived && clause.specialBlocks.length > 0 && <div className="ml-[24px]">{renderSpecialBlocks(clause.specialBlocks)}</div>}
    </div>
  );
}

// ── Inserted Entry Components (for adopted insert amendments) ───────────���────

function InsertedClauseEntry({ number, text, label }: { number: number; text: string; label: string }) {
  return (
    <div className="flex flex-col gap-[6px] py-[8px] px-[12px] rounded-[var(--radius)] bg-[var(--status-approved-bg)] border border-[var(--status-approved-border)] border-dashed">
      <div className="flex gap-[8px] items-start">
        <p className="font-semibold text-[length:var(--text-base)] leading-[20px] text-[var(--status-approved-text)] shrink-0">{number}.</p>
        <div className="flex-1">
          <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--status-approved-text)]">
            {text}
            <span className="inline-flex items-center gap-[3px] bg-[var(--status-approved-text)] text-white text-[length:var(--text-label)] leading-[14px] px-[5px] py-[1px] rounded-[4px] ml-[6px] align-middle">
              <svg className="size-[10px]" fill="none" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" /></svg>
              {label} Inserted
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function InsertedSubClauseEntry({ number, text }: { number: number; text: string }) {
  return (
    <div className="ml-[24px] flex flex-col gap-[4px] rounded-[4px] bg-[var(--status-approved-bg)] border border-[var(--status-approved-border)] border-dashed px-[8px] py-[4px]">
      <div className="flex gap-[6px] items-start">
        <p className="text-[length:var(--text-label)] leading-[18px] text-[var(--status-approved-text)] shrink-0 w-[20px]">({number})</p>
        <div className="flex-1">
          <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--status-approved-text)]">
            {text}
            <span className="inline-flex items-center gap-[3px] bg-[var(--status-approved-text)] text-white text-[length:var(--text-label)] leading-[14px] px-[5px] py-[1px] rounded-[4px] ml-[4px] align-middle">
              <svg className="size-[10px]" fill="none" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" /></svg>
              Inserted
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

function InsertedItemEntry({ number, text, renderNumber }: { number: number; text: string; renderNumber: (n: number) => string }) {
  return (
    <div className="flex flex-col gap-[0px]">
      <div className="ml-[28px] flex gap-[6px] items-start rounded-[4px] bg-[var(--status-approved-bg)] border border-[var(--status-approved-border)] border-dashed px-[6px] py-[3px]">
        <p className="text-[length:var(--text-label)] leading-[18px] text-[var(--status-approved-text)] shrink-0 w-[24px]">({renderNumber(number)})</p>
        <div className="flex-1">
          <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--status-approved-text)]">
            {text}
            <span className="inline-flex items-center gap-[3px] bg-[var(--status-approved-text)] text-white text-[length:var(--text-label)] leading-[14px] px-[5px] py-[1px] rounded-[4px] ml-[4px] align-middle">
              <svg className="size-[10px]" fill="none" viewBox="0 0 24 24"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" fill="currentColor" /></svg>
              Inserted
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

// ── CBC Disposed Section (Speaker-managed) ──────────────────────────────────

function CBCDisposedSectionManaged({ cbcClauses, cbcAmendments, allBillClauses, onClauseNavigate }: { cbcClauses: ManagedClause[]; cbcAmendments: ManagedAmendment[]; allBillClauses: Clause[]; onClauseNavigate: (clauseId: string) => void }) {
  const [expanded, setExpanded] = useState(false);

  const amendmentsByClause = new Map<string, ManagedAmendment[]>();
  cbcAmendments.forEach(a => {
    const parentClause = allBillClauses.find(cl => {
      const nodeIds = new Set<string>([cl.id]);
      cl.subClauses.forEach(sc => { nodeIds.add(sc.id); sc.items.forEach(it => { nodeIds.add(it.id); it.specialBlocks.forEach(sb => nodeIds.add(sb.id)); }); sc.specialBlocks.forEach(sb => nodeIds.add(sb.id)); });
      cl.specialBlocks.forEach(sb => nodeIds.add(sb.id));
      return nodeIds.has(a.clauseId);
    });
    if (parentClause) {
      const existing = amendmentsByClause.get(parentClause.id);
      if (existing) { existing.push(a); } else { amendmentsByClause.set(parentClause.id, [a]); }
    }
  });

  const clauseIds = new Set([...cbcClauses.map(c => c.clauseId), ...amendmentsByClause.keys()]);
  const mergedGroups = allBillClauses.filter(cl => clauseIds.has(cl.id)).sort((a, b) => a.number - b.number);

  if (cbcClauses.length === 0 && cbcAmendments.length === 0) return null;

  return (
    <div className="flex flex-col w-full">
      <div className="flex items-center gap-[8px] px-[4px] py-[8px] cursor-pointer transition-colors" onClick={() => setExpanded(!expanded)}>
        <svg className={`size-[14px] text-[var(--muted-foreground)] transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 16 16">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <p className="font-semibold text-[length:var(--text-base)] leading-[16px] text-[var(--muted-foreground)]">Disposed</p>
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">
          {cbcClauses.length} clause{cbcClauses.length !== 1 ? 's' : ''} · {cbcAmendments.length} amendment{cbcAmendments.length !== 1 ? 's' : ''}
        </p>
      </div>
      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2, ease: 'easeInOut' }} className="overflow-hidden">
            <div className="flex flex-col pt-[4px]">
              {mergedGroups.map((clause, index) => {
                const mc = cbcClauses.find(c => c.clauseId === clause.id);
                const groupAmendments = amendmentsByClause.get(clause.id) || [];
                return (
                  <div key={clause.id} className="flex flex-col">
                    {index > 0 && <div className="h-[1px] bg-[var(--card-border)] mx-[4px]" />}
                    <div onClick={() => onClauseNavigate(clause.id)} className="flex items-center gap-[6px] px-[4px] py-[6px] cursor-pointer hover:bg-[var(--input-background)] rounded-[var(--radius)] transition-colors">
                      {mc?.cbcStatus === 'passed' ? (
                        <svg className="size-[12px] shrink-0 text-[var(--status-approved-text)]" fill="none" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" /></svg>
                      ) : mc?.cbcStatus === 'rejected' ? (
                        <svg className="size-[12px] shrink-0 text-[var(--status-rejected-text)]" fill="none" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" /></svg>
                      ) : (
                        <div className="size-[12px] shrink-0 flex items-center justify-center"><div className="size-[4px] rounded-full bg-[var(--muted-foreground)]" /></div>
                      )}
                      <p className="text-[length:var(--text-label)] leading-[14px] font-semibold flex-1 min-w-0 text-[var(--muted-foreground)]">Clause {clause.number}</p>
                      {mc && <StatusChip label={mc.cbcStatus === 'passed' ? 'Passed' : mc.cbcStatus === 'rejected' ? 'Negatived' : 'Skipped'} variant={mc.cbcStatus === 'passed' ? 'approved' : mc.cbcStatus === 'rejected' ? 'rejected' : 'inactive'} />}
                    </div>
                    {groupAmendments.map(a => (
                      <div key={a.id} className="flex items-center gap-[6px] pl-[24px] pr-[4px] py-[3px]">
                        {a.cbcStatus === 'passed' ? (
                          <svg className="size-[10px] shrink-0 text-[var(--status-approved-text)] opacity-60" fill="none" viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" /></svg>
                        ) : a.cbcStatus === 'rejected' ? (
                          <svg className="size-[10px] shrink-0 text-[var(--status-rejected-text)] opacity-60" fill="none" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" /></svg>
                        ) : (
                          <svg className="size-[10px] shrink-0 text-[var(--muted-foreground)] opacity-40" fill="none" viewBox="0 0 14 14"><path d="M4.667 3.5v7L9.333 7 4.667 3.5zM10.5 3.5v7h1.167V3.5H10.5z" fill="currentColor" /></svg>
                        )}
                        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] truncate">
                          <span className="opacity-60">{a.clauseLabel}</span>
                          <span className="opacity-30 mx-[3px]">·</span>
                          <span>{AMENDMENT_TYPE_LABELS[a.type]}</span>
                        </p>
                        <span className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] opacity-50">·</span>
                        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] opacity-50 truncate flex-1 min-w-0">{a.submittedBy.name}</p>
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}