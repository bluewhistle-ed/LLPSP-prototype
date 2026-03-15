/**
 * Speaker Control Panels for Legislative Business — General Consideration
 *
 * Mirrors SpeakerControlPanel.tsx patterns:
 *   - SessionToolbar (left/right) for lifecycle controls
 *   - ActiveSpeakerControlBar (green) for live speaker management
 *   - OnDeckSpeakerControlBar (blue) for ready-state speaker
 */

import { CompactActionButton } from './CompactActionButton';
import { motion } from 'motion/react';

// ── Constants ────────────────────────────────────────────────────────────────

const TIMER_WARN_SECONDS = 60; // 1 minute remaining

// ── Types ────────────────────────────────────────────────────────────────────

export type LBSessionPhase = 'not-started' | 'active' | 'ready' | 'between' | 'completed';

// ── Helpers ──────────────────────────────────────────────────────────────────

function formatTime(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ── Icons ────────────────────────────────────────────────────────────────────

function PlayIcon() {
  return (
    <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
      <path d="M3.5 2.333v9.334L11.667 7 3.5 2.333z" fill="currentColor" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
      <path d="M5.25 9.917L2.333 7l-.978.972L5.25 11.867l8.167-8.167-.972-.972L5.25 9.917z" fill="currentColor" />
    </svg>
  );
}

function SkipIcon() {
  return (
    <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
      <path d="M4.667 3.5v7L9.333 7 4.667 3.5zM10.5 3.5v7h1.167V3.5H10.5z" fill="currentColor" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
      <path d="M7 2.333L6.178 3.155l3.262 3.262H2.333v1.166h7.107l-3.262 3.262L7 11.667 11.667 7 7 2.333z" fill="currentColor" />
    </svg>
  );
}

function StopIcon() {
  return (
    <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
      <rect x="3" y="3" width="8" height="8" rx="1" fill="currentColor" />
    </svg>
  );
}

// ── Session Toolbar Left (lifecycle controls) ────────────────────────────────

interface LBSessionToolbarProps {
  phase: LBSessionPhase;
  totalSpeakers: number;
  completedCount: number;
  skippedCount: number;
  onBeginSession: () => void;
  onCallNext?: () => void;
  onEndSession: () => void;
}

export function LBSessionToolbarLeft({
  phase,
  onBeginSession,
  onEndSession,
}: Pick<LBSessionToolbarProps, 'phase' | 'onBeginSession' | 'onEndSession'>) {
  if (phase === 'not-started') {
    return (
      <CompactActionButton
        label="Begin General Consideration"
        variant="primary"
        icon={<PlayIcon />}
        onClick={onBeginSession}
      />
    );
  }

  if (phase === 'completed') {
    return null;
  }

  // active, ready, or between — show End Session
  return (
    <CompactActionButton
      label="End Session"
      variant="destructive"
      icon={<StopIcon />}
      onClick={onEndSession}
    />
  );
}

// ── Session Toolbar Right (progress / call next / summary) ───────────────────

export function LBSessionToolbarRight({
  phase,
  totalSpeakers,
  completedCount,
  skippedCount,
  onCallNext,
}: Omit<LBSessionToolbarProps, 'onBeginSession' | 'onEndSession'>) {
  const disposedCount = completedCount + skippedCount;
  const pendingCount = totalSpeakers - disposedCount;

  // ── Not started — speaker count
  if (phase === 'not-started') {
    return (
      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
        {totalSpeakers} speakers · {pendingCount} pending
      </p>
    );
  }

  // ── Completed — summary badge
  if (phase === 'completed') {
    return (
      <div className="flex items-center gap-[10px]">
        <div className="flex items-center gap-[6px] bg-[var(--status-approved-bg)] px-[8px] py-[4px] rounded-[var(--radius-chip)]">
          <svg className="size-[12px]" fill="none" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" />
          </svg>
          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-approved-text)]">Complete</p>
        </div>
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
          {completedCount} spoke{skippedCount > 0 ? ` · ${skippedCount} skipped` : ''}
        </p>
      </div>
    );
  }

  // ── Between speakers — Call Next + progress
  if (phase === 'between') {
    return (
      <div className="flex items-center gap-[10px]">
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
          {disposedCount} of {totalSpeakers}
        </p>
        {pendingCount > 0 && (
          <CompactActionButton
            label="Call Next Speaker"
            variant="primary"
            icon={<ArrowRightIcon />}
            iconPosition="right"
            onClick={onCallNext}
          />
        )}
      </div>
    );
  }

  // ── Ready (on-deck card shown) — progress only
  if (phase === 'ready') {
    return (
      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
        {disposedCount} of {totalSpeakers} disposed
      </p>
    );
  }

  // ── Active — progress counter
  return (
    <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
      {disposedCount} of {totalSpeakers} disposed
    </p>
  );
}

// ── Active Speaker Control Bar (green, below active speaker card) ────────────

interface ActiveSpeakerControlBarProps {
  timeRemaining: number;
  allocatedTime: number;
  onMarkComplete: () => void;
  onSkip: () => void;
}

export function ActiveSpeakerControlBar({
  timeRemaining,
  allocatedTime,
  onMarkComplete,
  onSkip,
}: ActiveSpeakerControlBarProps) {
  const isLow = timeRemaining <= TIMER_WARN_SECONDS;
  const isOverTime = timeRemaining <= 0;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div className="bg-[var(--status-progress-bg)] flex items-center justify-between px-[16px] py-[12px] rounded-b-[var(--radius-card)] w-full border-t border-[var(--status-progress-border)]/30">

        {/* Action buttons */}
        <div className="flex items-center gap-[12px]">
          <CompactActionButton
            label="Mark Complete"
            variant="primary"
            icon={<CheckIcon />}
            onClick={onMarkComplete}
          />
          <CompactActionButton
            label="Skip"
            variant="secondary"
            icon={<SkipIcon />}
            onClick={onSkip}
            className="border border-[var(--card-border)]"
          />
        </div>
      </div>
    </motion.div>
  );
}

// ── On-Deck Speaker Control Bar (blue, below on-deck speaker card) ───────────

interface OnDeckSpeakerControlBarProps {
  onCallSpeaker: () => void;
  onSkip: () => void;
}

export function OnDeckSpeakerControlBar({
  onCallSpeaker,
  onSkip,
}: OnDeckSpeakerControlBarProps) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div className="bg-[var(--status-role-bg)] flex items-center px-[16px] py-[12px] rounded-b-[var(--radius-card)] w-full border-t border-[var(--status-role-border)]/30">
        {/* Call + Skip */}
        <div className="flex items-center gap-[12px]">
          <CompactActionButton
            label="Call This Speaker"
            variant="primary"
            icon={<PlayIcon />}
            onClick={onCallSpeaker}
          />
          <CompactActionButton
            label="Skip"
            variant="secondary"
            icon={<SkipIcon />}
            onClick={onSkip}
            className="border border-[var(--card-border)]"
          />
        </div>
      </div>
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════════
// ── CLAUSE-BY-CLAUSE CONTROLS ────────────────────────────────────────────────
// ═══════════════════════════════════════════════════════════════════════════════

export type CBCPhase =
  | 'not-started'
  | 'clause-on-deck'
  | 'amendment-staging'
  | 'amendment-voting'
  | 'clause-vote'
  | 'between-clauses'
  | 'final-vote-ready'
  | 'final-vote-confirming'
  | 'completed';

// ── CBC Icons ────────────────────────────────────────────────────────────────

function GavelIcon() {
  return (
    <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
      <path d="M10.208 5.542l-1.75-1.75 1.167-1.167 1.75 1.75-1.167 1.167zM2.917 12.833l-1.75-1.75 4.958-4.958 1.75 1.75-4.958 4.958zM6.708 4.667L4.958 2.917l1.167-1.167 1.75 1.75-1.167 1.167z" fill="currentColor" />
    </svg>
  );
}

function VotePassIcon() {
  return (
    <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
      <path d="M5.25 9.917L2.333 7l-.978.972L5.25 11.867l8.167-8.167-.972-.972L5.25 9.917z" fill="currentColor" />
    </svg>
  );
}

function VoteRejectIcon() {
  return (
    <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
      <path d="M11.083 3.977l-1.06-1.06L7 5.94 3.977 2.917l-1.06 1.06L5.94 7 2.917 10.023l1.06 1.06L7 8.06l3.023 3.023 1.06-1.06L8.06 7l3.023-3.023z" fill="currentColor" />
    </svg>
  );
}

// ── CBC Session Toolbar Left ─────────────────────────────────────────────────

export function CBCSessionToolbarLeft({
  phase,
  onBeginSession,
  onEndSession,
}: {
  phase: CBCPhase;
  onBeginSession: () => void;
  onEndSession: () => void;
}) {
  if (phase === 'not-started') {
    return (
      <CompactActionButton
        label="Begin Clause-by-Clause"
        variant="primary"
        icon={<PlayIcon />}
        onClick={onBeginSession}
      />
    );
  }

  if (phase === 'completed') {
    return null;
  }

  return (
    <CompactActionButton
      label="End Session"
      variant="destructive"
      icon={<StopIcon />}
      onClick={onEndSession}
    />
  );
}

// ── CBC Session Toolbar Right ────────────────────────────────────────────────

export function CBCSessionToolbarRight({
  phase,
  totalClauses,
  passedCount,
  rejectedCount,
  skippedCount,
  onStageNext,
}: {
  phase: CBCPhase;
  totalClauses: number;
  passedCount: number;
  rejectedCount: number;
  skippedCount: number;
  onStageNext?: () => void;
}) {
  const disposedCount = passedCount + rejectedCount + skippedCount;

  if (phase === 'not-started') {
    return (
      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
        {totalClauses} clauses · 0 disposed
      </p>
    );
  }

  if (phase === 'completed') {
    return (
      <div className="flex items-center gap-[10px]">
        <div className="flex items-center gap-[6px] bg-[var(--status-approved-bg)] px-[8px] py-[4px] rounded-[var(--radius-chip)]">
          <svg className="size-[12px]" fill="none" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" />
          </svg>
          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-approved-text)]">Complete</p>
        </div>
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
          {passedCount} passed{rejectedCount > 0 ? ` · ${rejectedCount} rejected` : ''}{skippedCount > 0 ? ` · ${skippedCount} skipped` : ''}
        </p>
      </div>
    );
  }

  if (phase === 'between-clauses') {
    return (
      <div className="flex items-center gap-[10px]">
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
          {disposedCount} of {totalClauses}
        </p>
        {disposedCount < totalClauses && onStageNext && (
          <CompactActionButton
            label="Stage Next Clause"
            variant="primary"
            icon={<ArrowRightIcon />}
            iconPosition="right"
            onClick={onStageNext}
          />
        )}
      </div>
    );
  }

  return (
    <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
      {disposedCount} of {totalClauses} disposed
    </p>
  );
}

// ── Clause On-Deck Control Bar (blue) ────────────────────────────────────────

export function ClauseOnDeckControlBar({
  onTakeUp,
}: {
  onTakeUp: () => void;
}) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div className="bg-[var(--status-role-bg)] flex items-center px-[16px] py-[12px] rounded-b-[var(--radius-card)] w-full border-t border-[var(--status-role-border)]/30">
        <CompactActionButton
          label="Take Up Clause"
          variant="primary"
          onClick={onTakeUp}
        />
      </div>
    </motion.div>
  );
}

// ── Amendment Voting Control Bar (green — vote buttons on individual amendment) ─

export function AmendmentVotingControlBar({
  onPass,
  onReject,
}: {
  onPass: () => void;
  onReject: () => void;
}) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div className="bg-[var(--status-progress-bg)] flex items-center px-[16px] py-[12px] rounded-b-[var(--radius-card)] w-full border-t border-[var(--status-progress-border)]/30">
        <div className="flex items-center gap-[12px]">
          <CompactActionButton
            label="Pass Amendment"
            variant="primary"
            icon={<VotePassIcon />}
            onClick={onPass}
          />
          <CompactActionButton
            label="Reject"
            variant="destructive"
            icon={<VoteRejectIcon />}
            onClick={onReject}
          />
        </div>
      </div>
    </motion.div>
  );
}

// ── Clause Vote Control Bar (green — pass/reject clause) ─────────────────────

export function ClauseVoteControlBar({
  onPass,
  onReject,
  confirmingState,
}: {
  onPass: () => void;
  onReject: () => void;
  confirmingState?: 'passed' | 'rejected' | null;
}) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div className="bg-[var(--status-progress-bg)] flex items-center px-[16px] py-[12px] rounded-b-[var(--radius-card)] w-full border-t border-[var(--status-progress-border)]/30">
        <div className="flex items-center gap-[12px]">
          <div className="relative">
            <CompactActionButton
              label="Adopt Clause"
              variant="primary"
              onClick={onPass}
            />
            {confirmingState === 'passed' && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute inset-0 flex items-center justify-center bg-[var(--status-approved-bg)] rounded-[var(--radius-button)] border border-[var(--status-approved-border)]"
              >
                <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" />
                </svg>
              </motion.div>
            )}
          </div>
          <div className="relative">
            <CompactActionButton
              label="Negative Clause"
              variant="destructive"
              onClick={onReject}
            />
            {confirmingState === 'rejected' && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute inset-0 flex items-center justify-center bg-[var(--status-urgent-bg)] rounded-[var(--radius-button)] border border-[var(--status-urgent-border)]"
              >
                <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="var(--status-urgent-text)" />
                </svg>
              </motion.div>
            )}
          </div>
          {/* Voting indicator - only show when not confirming */}
          {!confirmingState && (
            <div className="flex items-center gap-[6px]">
              <div className="size-[6px] rounded-full bg-[var(--status-progress-text)] animate-pulse" />
              <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-progress-text)] font-semibold">
                Voting
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// ── Final Bill Vote Control Bars ─────────────────────────────────────────────

// Blue (ready) control bar — shown before putting bill to vote
export function FinalVoteReadyControlBar({
  onPutToVote,
}: {
  onPutToVote: () => void;
}) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div className="bg-[var(--status-role-bg)] flex items-center px-[16px] py-[12px] rounded-b-[var(--radius-card)] w-full border-t border-[var(--status-role-border)]/30">
        <CompactActionButton
          label="Put Bill to Vote"
          variant="primary"
          onClick={onPutToVote}
        />
      </div>
    </motion.div>
  );
}

// Green (voting) control bar — shown during final bill vote
export function FinalVoteControlBar({
  onPass,
  onReject,
  confirmingState,
}: {
  onPass: () => void;
  onReject: () => void;
  confirmingState?: 'passed' | 'rejected' | null;
}) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div className="bg-[var(--status-progress-bg)] flex items-center px-[16px] py-[12px] rounded-b-[var(--radius-card)] w-full border-t border-[var(--status-progress-border)]/30">
        <div className="flex items-center gap-[12px]">
          <div className="relative">
            <CompactActionButton
              label="Pass Bill"
              variant="primary"
              onClick={onPass}
            />
            {confirmingState === 'passed' && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute inset-0 flex items-center justify-center bg-[var(--status-approved-bg)] rounded-[var(--radius-button)] border border-[var(--status-approved-border)]"
              >
                <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" />
                </svg>
              </motion.div>
            )}
          </div>
          <div className="relative">
            <CompactActionButton
              label="Negative Bill"
              variant="destructive"
              onClick={onReject}
            />
            {confirmingState === 'rejected' && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute inset-0 flex items-center justify-center bg-[var(--status-urgent-bg)] rounded-[var(--radius-button)] border border-[var(--status-urgent-border)]"
              >
                <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="var(--status-urgent-text)" />
                </svg>
              </motion.div>
            )}
          </div>
          {/* Voting indicator - only show when not confirming */}
          {!confirmingState && (
            <div className="flex items-center gap-[6px]">
              <div className="size-[6px] rounded-full bg-[var(--status-progress-text)] animate-pulse" />
              <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-progress-text)] font-semibold">
                Voting
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}