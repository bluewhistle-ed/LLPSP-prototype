import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { StatusChip } from "./StatusChip";
import { Divider } from "./Divider";
import { PartyBadge } from "./PartyBadge";
import { CompactActionButton } from "./CompactActionButton";
import svgPathsM62qn7xwsa from "../../imports/svg-m62qn7xwsa";
import type { SittingQuestion } from "../data/mock/sitting";
import { useSittingSession } from "../context/SittingSessionContext";
import type { ManagedQuestion, SessionPhase } from "../context/SittingSessionContext";

// ── Types ────────────────────────────────────────────────────────────────────

export type SittingDay = 'sitting-1' | 'sitting-2';

// ── Shared Sub-components ────────────────────────────────────────────────────

export function SittingDaySwitcher({ activeDay, onDayChange }: { activeDay: SittingDay; onDayChange: (day: SittingDay) => void }) {
  return (
    <div className="flex gap-[4px] items-center bg-[var(--sidebar-primary)] rounded-[var(--radius-button-small)] p-[3px]">
      <button
        onClick={() => onDayChange('sitting-1')}
        className={`px-[12px] py-[5px] rounded-[var(--radius-button-small)] text-[length:var(--text-label)] leading-[14px] cursor-pointer transition-colors ${
          activeDay === 'sitting-1'
            ? 'bg-[var(--card)] text-[var(--foreground)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]'
            : 'bg-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
        }`}
      >
        Sitting One
      </button>
      <button
        onClick={() => onDayChange('sitting-2')}
        className={`px-[12px] py-[5px] rounded-[var(--radius-button-small)] text-[length:var(--text-label)] leading-[14px] cursor-pointer transition-colors ${
          activeDay === 'sitting-2'
            ? 'bg-[var(--card)] text-[var(--foreground)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]'
            : 'bg-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
        }`}
      >
        Sitting Two
      </button>
    </div>
  );
}

export function SectionHeader({ title, count, variant = 'default' }: { title: string; count?: number; variant?: 'default' | 'disposed' }) {
  return (
    <div className="flex gap-[8px] items-center">
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
    </div>
  );
}

// ── Badges (matching QuestionsPage exactly) ──────────────────────────────────

function IconsGovernment() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_gov_sitting" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_gov_sitting)">
          <path d={svgPathsM62qn7xwsa.pb5bda80} fill="#2F3E6D" />
        </g>
      </svg>
    </div>
  );
}

// ── Member footer row (matches QuestionsPage footer) ─────────────────────────

function MemberFooter({ askedBy, answeredBy }: { askedBy: SittingQuestion['askedBy']; answeredBy: SittingQuestion['answeredBy'] }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full flex-wrap">
      {/* Asked by */}
      <div className="flex gap-[6px] items-center">
        <div className="relative shrink-0 size-[24px]">
          <img alt="" className="block max-w-none size-full rounded-full object-cover" src={askedBy.avatar} />
        </div>
        <p className="leading-[16px] text-[length:var(--text-label)] text-[var(--foreground)]">{askedBy.name}</p>
        <StatusChip label={askedBy.role} />
        <PartyBadge party={askedBy.party} />
      </div>

      {/* Separator */}
      <p className="leading-[16px] text-[length:var(--text-label)] text-[var(--muted-foreground)]">|</p>

      {/* Answered by */}
      <div className="flex gap-[6px] items-center">
        <div className="relative shrink-0 size-[24px]">
          <img alt="" className="block max-w-none size-full rounded-full object-cover" src={answeredBy.avatar} />
        </div>
        <p className="leading-[16px] text-[length:var(--text-label)] text-[var(--foreground)]">{answeredBy.name}</p>
        <StatusChip label={answeredBy.role} />
        <PartyBadge party={answeredBy.party} />
      </div>
    </div>
  );
}

// ── Active Question Card ─────────────────────────────────────────────────────

export function ActiveQuestionCard({ question, questionNumber, attached }: { question: SittingQuestion; questionNumber: number; attached?: boolean }) {
  return (
    <div className={`bg-[var(--card)] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative w-full ${
      attached ? 'rounded-t-[var(--radius-card)] rounded-b-none' : 'rounded-[var(--radius-card)]'
    }`}>
      {/* Accent border — only show when standalone (not attached to control bar) */}
      {!attached && (
        <div aria-hidden="true" className="absolute border border-[var(--status-progress-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] opacity-[0.46]" />
      )}

      {/* Header */}
      <div className="content-stretch flex gap-[8px] items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] items-start flex-1">
          <IconsGovernment />
          <div className="flex flex-col gap-[4px] flex-1">
            <div className="flex gap-[8px] items-center">
              <p className="font-semibold leading-[16px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">{question.ministry}</p>
              {/* Live chip — inline with ministry, like status chips on other cards */}
              <div className="flex gap-[6px] items-center bg-[var(--status-urgent-bg)] px-[8px] py-[2px] rounded-full shrink-0">
                <div className="relative size-[8px]">
                  <div className="absolute inset-0 rounded-full bg-[var(--status-urgent-text)] animate-ping opacity-75" />
                  <div className="relative size-full rounded-full bg-[var(--status-urgent-text)]" />
                </div>
                <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-urgent-text)]">Live</p>
              </div>
            </div>
            <p className="leading-[14px] text-[length:var(--text-label)] text-[var(--muted-foreground)]">{question.theme}</p>
          </div>
        </div>
        {/* Question number badge — top-right, like pending cards */}
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums shrink-0">#{questionNumber}</p>
      </div>

      {/* Questions */}
      <div className="content-stretch flex flex-col gap-[8px] relative shrink-0 w-full">
        <p className="leading-[20px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">Will the Minister be pleased to state:</p>
        <ul className="content-stretch flex flex-col gap-[6px] list-none relative shrink-0 w-full">
          {question.questions.map((q, i) => (
            <li key={i} className="leading-[20px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">{q}</li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <Divider />

      {/* Footer */}
      <MemberFooter askedBy={question.askedBy} answeredBy={question.answeredBy} />
    </div>
  );
}

// ── Pending Question Card ────────────────────────────────────────────────────

export function PendingQuestionCard({ question, queueNumber }: { question: SittingQuestion; queueNumber: number }) {
  return (
    <div className="bg-[var(--card)] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[var(--radius-card)] w-full">
      <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />

      {/* Header */}
      <div className="content-stretch flex gap-[8px] items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] items-start flex-1">
          <IconsGovernment />
          <div className="flex flex-col gap-[4px] flex-1">
            <div className="flex gap-[8px] items-center">
              <p className="font-semibold leading-[16px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">{question.ministry}</p>
              <StatusChip label="Pending" />
            </div>
            <p className="leading-[14px] text-[length:var(--text-label)] text-[var(--muted-foreground)]">{question.theme}</p>
          </div>
        </div>
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums shrink-0">#{queueNumber}</p>
      </div>

      {/* Questions */}
      <div className="content-stretch flex flex-col gap-[8px] relative shrink-0 w-full">
        <p className="leading-[20px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">Will the Minister be pleased to state:</p>
        <ul className="content-stretch flex flex-col gap-[6px] list-none relative shrink-0 w-full">
          {question.questions.map((q, i) => (
            <li key={i} className="leading-[20px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">{q}</li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <Divider />

      {/* Footer */}
      <MemberFooter askedBy={question.askedBy} answeredBy={question.answeredBy} />
    </div>
  );
}

// ── On-Deck Question Card (next up, with attached control bar) ────────────────

export function OnDeckQuestionCard({ question, questionNumber }: { question: SittingQuestion; questionNumber: number }) {
  return (
    <div className="bg-[var(--card)] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-t-[var(--radius-card)] rounded-b-none w-full">
      {/* Header */}
      <div className="content-stretch flex gap-[8px] items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] items-start flex-1">
          <IconsGovernment />
          <div className="flex flex-col gap-[4px] flex-1">
            <div className="flex gap-[8px] items-center">
              <p className="font-semibold leading-[16px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">{question.ministry}</p>
              <StatusChip label="Next Up" variant="role" />
            </div>
            <p className="leading-[14px] text-[length:var(--text-label)] text-[var(--muted-foreground)]">{question.theme}</p>
          </div>
        </div>
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums shrink-0">#{questionNumber}</p>
      </div>

      {/* Questions */}
      <div className="content-stretch flex flex-col gap-[8px] relative shrink-0 w-full">
        <p className="leading-[20px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">Will the Minister be pleased to state:</p>
        <ul className="content-stretch flex flex-col gap-[6px] list-none relative shrink-0 w-full">
          {question.questions.map((q, i) => (
            <li key={i} className="leading-[20px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">{q}</li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <Divider />

      {/* Footer */}
      <MemberFooter askedBy={question.askedBy} answeredBy={question.answeredBy} />
    </div>
  );
}

// ── Focal Question Card (unified on-deck → active, stays mounted) ─────────────

export type FocalMode = 'on-deck' | 'active';

export function FocalQuestionCard({ question, questionNumber, mode }: { question: SittingQuestion; questionNumber: number; mode: FocalMode }) {
  return (
    <div className="bg-[var(--card)] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-t-[var(--radius-card)] rounded-b-none w-full">
      {/* Header */}
      <div className="content-stretch flex gap-[8px] items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] items-start flex-1">
          <IconsGovernment />
          <div className="flex flex-col gap-[4px] flex-1">
            <div className="flex gap-[8px] items-center">
              <p className="font-semibold leading-[16px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">{question.ministry}</p>
              {/* Status chip — crossfade between "Next Up" and "Live" */}
              <AnimatePresence mode="wait" initial={false}>
                {mode === 'on-deck' ? (
                  <motion.div
                    key="next-up"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                  >
                    <StatusChip label="Next Up" variant="role" />
                  </motion.div>
                ) : (
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
            <p className="leading-[14px] text-[length:var(--text-label)] text-[var(--muted-foreground)]">{question.theme}</p>
          </div>
        </div>
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums shrink-0">#{questionNumber}</p>
      </div>

      {/* Questions */}
      <div className="content-stretch flex flex-col gap-[8px] relative shrink-0 w-full">
        <p className="leading-[20px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">Will the Minister be pleased to state:</p>
        <ul className="content-stretch flex flex-col gap-[6px] list-none relative shrink-0 w-full">
          {question.questions.map((q, i) => (
            <li key={i} className="leading-[20px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">{q}</li>
          ))}
        </ul>
      </div>

      {/* Divider */}
      <Divider />

      {/* Footer */}
      <MemberFooter askedBy={question.askedBy} answeredBy={question.answeredBy} />
    </div>
  );
}

// ── Disposed Question Card ───────────────────────────────────────────────────

export function DisposedQuestionCard({ question }: { question: SittingQuestion }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-[var(--card)] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[var(--radius-card)] w-full">
      <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />

      {/* Header */}
      <div className="content-stretch flex gap-[8px] items-start justify-between relative shrink-0 w-full">
        <div className="content-stretch flex gap-[8px] items-start flex-1">
          {/* Checkmark */}
          <div className="flex items-center justify-center size-[24px] rounded-full bg-[var(--status-approved-bg)] shrink-0 mt-[-2px]">
            <svg className="size-[14px]" fill="none" viewBox="0 0 24 24">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" />
            </svg>
          </div>
          <IconsGovernment />
          <div className="flex flex-col gap-[4px] flex-1">
            <div className="flex gap-[8px] items-center">
              <p className="font-semibold leading-[16px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">{question.ministry}</p>
              <StatusChip label="Answered" variant="approved" />
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

          {/* Minister's Answer */}
          {question.answer && (
            <div className="bg-[var(--status-approved-bg)] rounded-[var(--radius)] p-[12px] w-full">
              <div className="flex flex-col gap-[6px]">
                <p className="font-semibold text-[length:var(--text-label)] leading-[14px] text-[var(--status-approved-text)]">Minister's Response</p>
                <p className="leading-[20px] text-[length:var(--text-base)] text-[var(--foreground)]">{question.answer}</p>
              </div>
            </div>
          )}

          {/* Divider */}
          <Divider />

          {/* Footer */}
          <MemberFooter askedBy={question.askedBy} answeredBy={question.answeredBy} />
        </>
      )}
    </div>
  );
}

// ── Question Hour Content ────────────────────────────────────────────────────

export function QuestionHourContent() {
  const {
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
    focalQuestion,
    focalMode,
    focalNumber,
  } = useSittingSession();

  return (
    <div className="flex flex-col gap-[20px] w-full">
      {/* Day switcher + session status chip (left) · summary (right) */}
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-[8px]">
          <SittingDaySwitcher activeDay={activeDay} onDayChange={setActiveDay} />
          <SessionStatusChip phase={phase} />
        </div>
        <StudentSessionSummary
          phase={phase}
          totalQuestions={questions.length}
          answeredCount={answeredQuestions.length}
          skippedCount={skippedQuestions.length}
          pendingCount={pendingQuestions.length + (onDeckQuestion ? 1 : 0)}
        />
      </div>

      {/* Active question — student only sees the focal card when it's live */}
      <AnimatePresence mode="wait">
        {activeQuestion && phase === 'active' && (
          <motion.div
            key={activeQuestion.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col w-full rounded-[var(--radius-card)] overflow-hidden relative"
          >
            <ActiveQuestionCard
              question={activeQuestion}
              questionNumber={questions.indexOf(activeQuestion) + 1}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Up Next — includes on-deck question (student doesn't distinguish on-deck from pending) */}
      {(() => {
        const studentUpNext = [
          ...(onDeckQuestion ? [onDeckQuestion] : []),
          ...pendingQuestions,
        ];
        if (studentUpNext.length === 0) return null;
        return (
          <div className="flex flex-col gap-[8px] w-full">
            <SectionHeader title="Up Next" count={studentUpNext.length} />
            <div className="flex flex-col gap-[8px] w-full">
              {studentUpNext.map(q => (
                <PendingQuestionCard key={q.id} question={q} queueNumber={questions.indexOf(q) + 1} />
              ))}
            </div>
          </div>
        );
      })()}

      {/* Disposed Questions */}
      {disposedQuestions.length > 0 && (
        <div className="flex flex-col gap-[8px] w-full">
          <SectionHeader title="Disposed" count={disposedQuestions.length} variant="disposed" />
          <div className="flex flex-col gap-[8px] w-full">
            {disposedQuestions.map(q => (
              <StudentDisposedCard key={q.id} question={q} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Session Status Chip (student-facing, replaces Speaker's button) ──────────

function SessionStatusChip({ phase }: { phase: SessionPhase }) {
  const noInteract = 'cursor-default pointer-events-none';

  switch (phase) {
    case 'not-started':
      return (
        <CompactActionButton
          label="Yet To Start"
          variant="outline-muted"
          className={noInteract}
        />
      );
    case 'ready':
    case 'between':
      return (
        <CompactActionButton
          label="Ongoing"
          variant="progress"
          icon={<PulsingDot color="var(--status-progress-text)" />}
          className={noInteract}
        />
      );
    case 'active':
      return (
        <CompactActionButton
          label="Ongoing"
          variant="progress"
          icon={<PulsingDot color="var(--status-progress-text)" />}
          className={noInteract}
        />
      );
    case 'completed':
      return (
        <CompactActionButton
          label="Concluded"
          variant="approved"
          icon={
            <svg className="size-[14px]" fill="none" viewBox="0 0 14 14">
              <path d="M5.25 9.917L2.333 7l-.978.972L5.25 11.867l8.167-8.167-.972-.972L5.25 9.917z" fill="currentColor" />
            </svg>
          }
          className={noInteract}
        />
      );
    default:
      return null;
  }
}

/** Reusable pulsing dot for live/ongoing indicators */
function PulsingDot({ color }: { color: string }) {
  return (
    <div className="relative size-[8px]">
      <div className="absolute inset-0 rounded-full animate-ping opacity-75" style={{ backgroundColor: color }} />
      <div className="relative size-full rounded-full" style={{ backgroundColor: color }} />
    </div>
  );
}

// ── Student summary line ─────────────────────────────────────────────────────

function StudentSessionSummary({
  phase,
  totalQuestions,
  answeredCount,
  skippedCount,
  pendingCount,
}: {
  phase: SessionPhase;
  totalQuestions: number;
  answeredCount: number;
  skippedCount: number;
  pendingCount: number;
}) {
  if (phase === 'not-started') {
    return (
      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">
        {totalQuestions} questions · {pendingCount} pending
      </p>
    );
  }

  if (phase === 'completed') {
    return (
      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
        {answeredCount} answered{skippedCount > 0 ? ` · ${skippedCount} skipped` : ''}
      </p>
    );
  }

  const disposedCount = answeredCount + skippedCount;
  return (
    <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums">
      {disposedCount} of {totalQuestions} disposed · {pendingCount} pending
    </p>
  );
}

// ── Student Disposed Card (shows Answered vs Skipped from shared context) ────

function StudentDisposedCard({ question }: { question: ManagedQuestion }) {
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
// END OF FILE - append ZeroHourContent below

// ── Zero Hour Content ────────────────────────────────────────────────────────

export function ZeroHourContent() {
  const { activeDay, setActiveDay } = useSittingSession();

  return (
    <div className="flex flex-col gap-[20px] w-full">
      <SittingDaySwitcher activeDay={activeDay} onDayChange={setActiveDay} />
      <div className="bg-[var(--card)] p-[32px] rounded-[var(--radius-card)] w-full relative">
        <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
        <div className="flex flex-col gap-[16px] items-center justify-center py-[32px]">
          <div className="flex items-center justify-center size-[56px] rounded-full bg-[var(--status-pending-bg)]">
            <svg className="size-[28px]" fill="none" viewBox="0 0 24 24">
              <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z" fill="var(--status-pending-text)" />
            </svg>
          </div>
          <p className="font-semibold text-[length:var(--text-h3)] text-[var(--foreground)]">Zero Hour</p>
          <p className="text-[length:var(--text-base)] text-[var(--muted-foreground)] text-center max-w-[480px] leading-[22px]">
            A free-flowing discussion on matters of urgent national importance. Members raise issues without prior notice, fostering spontaneous debate on pressing concerns.
          </p>
          <div className="bg-[var(--input-background)] rounded-[var(--radius)] px-[16px] py-[12px] mt-[8px]">
            <p className="text-[length:var(--text-label)] text-[var(--muted-foreground)]">This session will be built out next.</p>
          </div>
        </div>
      </div>
    </div>
  );
}