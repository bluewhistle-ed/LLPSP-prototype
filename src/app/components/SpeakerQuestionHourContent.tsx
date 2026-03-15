/**
 * Speaker-specific Question Hour content.
 *
 * Two-layer control architecture:
 *   1. SessionToolbar — inline beside the Sitting Day switcher (Begin, Call Next, End, Complete)
 *   2. QuestionControlPanel — card below the active/live question (Timer, Mark Answered, Skip, Supplementary)
 *
 * Now consumes SittingSessionContext (shared with students).
 */

import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  SittingDaySwitcher,
  SectionHeader,
  FocalQuestionCard,
  PendingQuestionCard,
} from './SittingShared';
import { SessionToolbarLeft, SessionToolbarRight, QuestionControlPanel, ReadyControlPanel } from './SpeakerControlPanel';
import { StatusChip } from './StatusChip';
import { PartyBadge } from './PartyBadge';
import { useSittingSession } from '../context/SittingSessionContext';
import type { ManagedQuestion } from '../context/SittingSessionContext';

// ── Component ────────────────────────────────────────────────────────────────

export function SpeakerQuestionHourContent() {
  const {
    activeDay,
    setActiveDay,
    questions,
    phase,
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
  } = useSittingSession();

  // ── Render ───────────────────────────────────────────────────────────────

  return (
    <div className="flex flex-col gap-[20px] w-full">
      {/* Top row: Switches + lifecycle button (left) · Progress / Call Next (right) */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[8px]">
          <SittingDaySwitcher activeDay={activeDay} onDayChange={setActiveDay} />
          <SessionToolbarLeft
            phase={phase}
            onBeginSession={beginSession}
            onEndSession={endSession}
          />
        </div>
        <SessionToolbarRight
          phase={phase}
          totalQuestions={questions.length}
          answeredCount={answeredQuestions.length}
          skippedCount={skippedQuestions.length}
          currentQuestionNumber={activeQuestionNumber}
        />
      </div>

      {/* Focal Question Card — stays mounted across on-deck → active transition */}
      <AnimatePresence mode="wait">
        {focalQuestion && (phase === 'ready' || phase === 'active') && (
          <motion.div
            key={focalQuestion.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col w-full rounded-[var(--radius-card)] overflow-hidden relative"
          >
            {/* Inset border overlay — smoothly transitions blue (on-deck) ↔ green (active) */}
            <div
              aria-hidden="true"
              className="absolute border border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] opacity-[0.46] z-10 transition-[border-color] duration-300"
              style={{
                borderColor: focalMode === 'active'
                  ? 'var(--status-progress-border)'
                  : 'var(--status-role-border)',
              }}
            />
            <FocalQuestionCard
              question={focalQuestion}
              questionNumber={focalNumber}
              mode={focalMode}
            />
            {/* Control panel — crossfade between Ready (blue) and Active (green) */}
            <AnimatePresence mode="wait" initial={false}>
              {phase === 'ready' ? (
                <ReadyControlPanel
                  key="ready-panel"
                  onCallQuestion={callOnDeckQuestion}
                  onSkip={skipOnDeckQuestion}
                />
              ) : (
                <QuestionControlPanel
                  key="active-panel"
                  currentQuestionNumber={focalNumber}
                  totalQuestions={questions.length}
                  elapsedSeconds={elapsedSeconds}
                  supplementaryAllowed={supplementaryAllowed}
                  onToggleSupplementary={toggleSupplementary}
                  onMarkAnswered={markAnswered}
                  onSkip={skipQuestion}
                />
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pending Questions */}
      {pendingQuestions.length > 0 && (
        <div className="flex flex-col gap-[8px] w-full">
          <SectionHeader title="Up Next" count={pendingQuestions.length} />
          <div className="flex flex-col gap-[8px] w-full">
            {pendingQuestions.map(q => (
              <PendingQuestionCard
                key={q.id}
                question={q}
                queueNumber={questions.indexOf(q) + 1}
              />
            ))}
          </div>
        </div>
      )}

      {/* Disposed Questions */}
      {disposedQuestions.length > 0 && (
        <div className="flex flex-col gap-[8px] w-full">
          <SectionHeader
            title="Disposed"
            count={disposedQuestions.length}
            variant="disposed"
          />
          <div className="flex flex-col gap-[8px] w-full">
            {disposedQuestions.map(q => (
              <DisposedQuestionCardWithStatus key={q.id} question={q} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Disposed card variant for speaker (shows Answered vs Skipped) ──────────

function DisposedQuestionCardWithStatus({ question }: { question: ManagedQuestion }) {
  const [expanded, setExpanded] = useState(false);
  const isSkipped = question.speakerStatus === 'skipped';

  return (
    <div className="bg-[var(--card)] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[var(--radius-card)] w-full">
      <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />

      {/* Header */}
      <div className="content-stretch flex gap-[8px] items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] items-start flex-1">
          {/* Status icon */}
          {isSkipped ? (
            <div className="flex items-center justify-center size-[24px] rounded-full bg-[var(--status-default-bg)] shrink-0 mt-[-2px]">
              <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
                <path d="M4.667 3.5v7L9.333 7 4.667 3.5zM10.5 3.5v7h1.167V3.5H10.5z" fill="var(--muted-foreground)" />
              </svg>
            </div>
          ) : (
            <div className="flex items-center justify-center size-[24px] rounded-full bg-[var(--status-approved-bg)] shrink-0 mt-[-2px]">
              <svg className="size-[14px]" fill="none" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" />
              </svg>
            </div>
          )}

          <div className="flex flex-col gap-[4px] flex-1">
            <div className="flex gap-[8px] items-center">
              <p className="font-semibold leading-[16px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">{question.ministry}</p>
              <StatusChip
                label={isSkipped ? 'Skipped' : 'Answered'}
                variant={isSkipped ? 'default' : 'approved'}
              />
            </div>
            <p className="leading-[14px] text-[length:var(--text-label)] text-[var(--muted-foreground)]">{question.theme}</p>
          </div>
        </div>
        <button
          onClick={() => setExpanded(!expanded)}
          className="cursor-pointer shrink-0 size-[24px] flex items-center justify-center rounded-[var(--radius-button-small)] hover:bg-[var(--sidebar-primary)] transition-colors"
        >
          <svg className={`size-[16px] transition-transform ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 16 16">
            <path d="M4 6l4 4 4-4" stroke="var(--muted-foreground)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      {/* Expandable content */}
      {expanded && (
        <>
          {/* Questions */}
          <div className="content-stretch flex flex-col gap-[8px] relative shrink-0 w-full">
            <p className="leading-[20px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">Will the Minister be pleased to state:</p>
            <ul className="content-stretch flex flex-col gap-[6px] list-none relative shrink-0 w-full">
              {question.questions.map((q, i) => (
                <li key={i} className="leading-[20px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">{q}</li>
              ))}
            </ul>
          </div>

          {/* Minister's Answer (only for answered questions) */}
          {!isSkipped && question.answer && (
            <div className="bg-[var(--status-approved-bg)] rounded-[var(--radius)] p-[12px] w-full">
              <div className="flex flex-col gap-[6px]">
                <p className="font-semibold text-[length:var(--text-label)] leading-[14px] text-[var(--status-approved-text)]">Minister's Response</p>
                <p className="leading-[20px] text-[length:var(--text-base)] text-[var(--foreground)]">{question.answer}</p>
              </div>
            </div>
          )}

          {/* Skipped reason */}
          {isSkipped && (
            <div className="bg-[var(--status-default-bg)] rounded-[var(--radius)] p-[12px] w-full">
              <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">This question was skipped by the Speaker.</p>
            </div>
          )}

          {/* Footer with member info */}
          <div className="w-full border-t border-[var(--card-border)]" />
          <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full flex-wrap">
            <div className="flex gap-[6px] items-center">
              <div className="relative shrink-0 size-[24px]">
                <img alt="" className="block max-w-none size-full rounded-full object-cover" src={question.askedBy.avatar} />
              </div>
              <p className="leading-[16px] text-[length:var(--text-label)] text-[var(--foreground)]">{question.askedBy.name}</p>
              <StatusChip label={question.askedBy.role} />
              <PartyBadge party={question.askedBy.party} />
            </div>
            <p className="leading-[16px] text-[length:var(--text-label)] text-[var(--muted-foreground)]">|</p>
            <div className="flex gap-[6px] items-center">
              <div className="relative shrink-0 size-[24px]">
                <img alt="" className="block max-w-none size-full rounded-full object-cover" src={question.answeredBy.avatar} />
              </div>
              <p className="leading-[16px] text-[length:var(--text-label)] text-[var(--foreground)]">{question.answeredBy.name}</p>
              <StatusChip label={question.answeredBy.role} />
              <PartyBadge party={question.answeredBy.party} />
            </div>
          </div>
        </>
      )}
    </div>
  );
}
