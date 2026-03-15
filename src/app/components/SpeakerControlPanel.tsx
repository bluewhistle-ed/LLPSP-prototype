/**
 * Speaker Controls — split into Left (beside switches) and Right (progress) ─
 */

import { CompactActionButton } from './CompactActionButton';
import { motion } from 'motion/react';

// ── Constants ────────────────────────────────────────────────────────────────

const TIMER_WARN_SECONDS = 120; // 2 minutes

// ── Types ────────────────────────────────────────────────────────────────────

export type SessionPhase = 'not-started' | 'active' | 'ready' | 'between' | 'completed';

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

// ── Session Toolbar (inline, beside the Sitting Day switcher) ────────────────

interface SessionToolbarProps {
  phase: SessionPhase;
  totalQuestions: number;
  answeredCount: number;
  skippedCount: number;
  currentQuestionNumber: number;
  onBeginSession: () => void;
  onCallNext?: () => void;
  onEndSession: () => void;
}

/**
 * Left side — session lifecycle button (Begin / End Session).
 * Sits directly beside the Sitting Day switches.
 */
export function SessionToolbarLeft({
  phase,
  onBeginSession,
  onEndSession,
}: Pick<SessionToolbarProps, 'phase' | 'onBeginSession' | 'onEndSession'>) {
  if (phase === 'not-started') {
    return (
      <CompactActionButton
        label="Begin Question Hour"
        variant="primary"
        icon={<PlayIcon />}
        onClick={onBeginSession}
      />
    );
  }

  if (phase === 'completed') {
    return null;
  }

  // active or between — show End Session
  return (
    <CompactActionButton
      label="End Session"
      variant="destructive"
      icon={<StopIcon />}
      onClick={onEndSession}
    />
  );
}

/**
 * Right side — progress info, Call Next, completion badge.
 */
export function SessionToolbarRight({
  phase,
  totalQuestions,
  answeredCount,
  skippedCount,
  currentQuestionNumber,
  onCallNext,
}: Omit<SessionToolbarProps, 'onBeginSession' | 'onEndSession'>) {
  const pendingCount = totalQuestions - answeredCount - skippedCount;
  const disposedCount = answeredCount + skippedCount;

  // ── Not started — question count
  if (phase === 'not-started') {
    return (
      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
        {totalQuestions} questions · {pendingCount} pending
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
          {answeredCount} answered{skippedCount > 0 ? ` · ${skippedCount} skipped` : ''}
        </p>
      </div>
    );
  }

  // ── Between questions — Call Next + progress
  if (phase === 'between') {
    return (
      <div className="flex items-center gap-[10px]">
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
          {disposedCount} of {totalQuestions}
        </p>
        {pendingCount > 0 && (
          <CompactActionButton
            label="Call Next Question"
            variant="primary"
            icon={<ArrowRightIcon />}
            iconPosition="right"
            onClick={onCallNext}
          />
        )}
      </div>
    );
  }

  // ── Ready (on-deck card shown) — progress only, action is on the card
  if (phase === 'ready') {
    return (
      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
        {disposedCount} of {totalQuestions} disposed
      </p>
    );
  }

  // ── Active — progress counter
  return (
    <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
      Q{currentQuestionNumber} of {totalQuestions}
    </p>
  );
}

// ── Question Control Panel (card below the active question) ──────────────────

interface QuestionControlPanelProps {
  currentQuestionNumber: number;
  totalQuestions: number;
  elapsedSeconds: number;
  supplementaryAllowed: boolean;
  onToggleSupplementary: () => void;
  onMarkAnswered: () => void;
  onSkip: () => void;
}

export function QuestionControlPanel({
  currentQuestionNumber,
  totalQuestions,
  elapsedSeconds,
  supplementaryAllowed,
  onToggleSupplementary,
  onMarkAnswered,
  onSkip,
}: QuestionControlPanelProps) {
  const isOverTime = elapsedSeconds >= TIMER_WARN_SECONDS;

  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div className="bg-[var(--status-progress-bg)] flex items-center justify-between px-[16px] py-[12px] rounded-b-[var(--radius-card)] w-full border-t border-[var(--status-progress-border)]/30">

        {/* Left: Timer + actions */}
        <div className="flex items-center gap-[12px]">
          {/* Timer — with pulse/glow when over 2 min */}
          <motion.div
            className={`flex items-center gap-[6px] px-[10px] py-[5px] rounded-[var(--radius-button-small)] transition-colors ${
              isOverTime
                ? 'bg-[var(--status-pending-bg)] shadow-[0px_0px_8px_0px_rgba(237,125,49,0.35)]'
                : 'bg-[var(--card)] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]'
            }`}
            animate={isOverTime ? {
              boxShadow: [
                '0px 0px 4px 0px rgba(237,125,49,0.2)',
                '0px 0px 12px 2px rgba(237,125,49,0.4)',
                '0px 0px 4px 0px rgba(237,125,49,0.2)',
              ],
            } : {}}
            transition={isOverTime ? {
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            } : {}}
          >
            <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
              <path d="M6.993 1.167A5.837 5.837 0 0 0 1.167 7c0 3.22 2.607 5.833 5.826 5.833A5.84 5.84 0 0 0 12.833 7a5.84 5.84 0 0 0-5.84-5.833zm.007 10.5A4.667 4.667 0 1 1 11.667 7 4.667 4.667 0 0 1 7 11.667zm.292-7.584h-.875v3.5l3.063 1.838.437-.718-2.625-1.557V4.083z" fill={isOverTime ? 'var(--status-pending-text)' : 'var(--status-progress-text)'} />
            </svg>
            <p className={`text-[length:var(--text-label)] leading-[14px] tabular-nums ${
              isOverTime ? 'text-[var(--status-pending-text)]' : 'text-[var(--foreground)]'
            }`}>{formatTime(elapsedSeconds)}</p>
          </motion.div>

          {/* Separator */}
          <div className="w-px h-[16px] bg-[var(--status-progress-border)]/40" />

          {/* Action buttons */}
          <CompactActionButton
            label="Mark Answered"
            variant="primary"
            icon={<CheckIcon />}
            onClick={onMarkAnswered}
          />
          <CompactActionButton
            label="Skip"
            variant="secondary"
            icon={<SkipIcon />}
            onClick={onSkip}
            className="border border-[var(--card-border)]"
          />
        </div>

        {/* Right: Supplementary toggle */}
        <button
          onClick={onToggleSupplementary}
          className="flex items-center gap-[6px] cursor-pointer px-[10px] py-[5px] rounded-[var(--radius-button-small)] transition-colors hover:bg-[var(--card)]/50"
        >
          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-progress-text)]">Supplementary</p>
          <div className={`relative w-[28px] h-[16px] rounded-full transition-colors ${
            supplementaryAllowed ? 'bg-[var(--primary)]' : 'bg-[var(--border)]'
          }`}>
            <div className={`absolute top-[2px] size-[12px] rounded-full bg-white transition-transform ${
              supplementaryAllowed ? 'translate-x-[14px]' : 'translate-x-[2px]'
            }`} />
          </div>
        </button>
      </div>
    </motion.div>
  );
}

// ── Ready Control Panel (attached below the on-deck question card) ────────────

interface ReadyControlPanelProps {
  onCallQuestion: () => void;
  onSkip: () => void;
}

export function ReadyControlPanel({
  onCallQuestion,
  onSkip,
}: ReadyControlPanelProps) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
      className="overflow-hidden"
    >
      <div className="bg-[var(--status-role-bg)] flex items-center px-[16px] py-[12px] rounded-b-[var(--radius-card)] w-full border-t border-[var(--status-role-border)]/30">

        {/* Left: Call + Skip */}
        <div className="flex items-center gap-[12px]">
          <CompactActionButton
            label="Call This Question"
            variant="primary"
            icon={<PlayIcon />}
            onClick={onCallQuestion}
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