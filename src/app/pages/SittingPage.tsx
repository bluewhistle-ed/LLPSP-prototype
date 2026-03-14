import React, { useState } from "react";
import { useSearchParams } from "react-router";
import { SharedNavBar } from "../components/SharedNavBar";
import { PageHeader } from "../components/PageHeader";
import { StatusChip } from "../components/StatusChip";
import { Divider } from "../components/Divider";
import { LegislativeBusinessTab } from "../components/LegislativeBusinessTab";
import { PartyBadge } from "../components/PartyBadge";
import svgPathsM62qn7xwsa from "../../imports/svg-m62qn7xwsa";
import type { SittingQuestion } from "../data/mock/sitting";
import { SITTING_1_QUESTIONS, SITTING_2_QUESTIONS } from "../data/mock/sitting";

// ── Local Types ──────────────────────────────────────────────────────────────

type SittingTab = 'question-hour' | 'zero-hour' | 'legislative-business';
type SittingDay = 'sitting-1' | 'sitting-2';

// ── Shared Sub-components ────────────────────────────────────────────────────

function TabButton({ label, isActive, onClick }: { label: string; isActive: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="flex items-center p-[12px] relative cursor-pointer"
    >
      {isActive && (
        <div aria-hidden="true" className="absolute border-[var(--accent)] border-b-4 border-solid inset-0 pointer-events-none" />
      )}
      <p className={`font-semibold leading-[16px] text-[length:var(--text-base)] text-center relative ${
        isActive ? 'text-[var(--accent)]' : 'text-[var(--muted-foreground)]'
      }`}>
        {label}
      </p>
    </button>
  );
}

function SittingDaySwitcher({ activeDay, onDayChange }: { activeDay: SittingDay; onDayChange: (day: SittingDay) => void }) {
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

function SectionHeader({ title, count, variant = 'default' }: { title: string; count?: number; variant?: 'default' | 'disposed' }) {
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

function ActiveQuestionCard({ question, questionNumber }: { question: SittingQuestion; questionNumber: number }) {
  return (
    <div className="bg-[var(--card)] content-stretch flex flex-col gap-[12px] items-start p-[16px] relative rounded-[var(--radius-card)] w-full">
      {/* Accent border — matches Next Actions card in dashboard */}
      <div aria-hidden="true" className="absolute border border-[var(--status-role-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] opacity-[0.46]" />

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

function PendingQuestionCard({ question, queueNumber }: { question: SittingQuestion; queueNumber: number }) {
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

// ── Disposed Question Card ───────────────────────────────────────────────────

function DisposedQuestionCard({ question }: { question: SittingQuestion }) {
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

// ── Question Hour Tab ────────���───────────────────────────────────────────────

function QuestionHourTab() {
  const [activeDay, setActiveDay] = useState<SittingDay>('sitting-1');
  const questions = activeDay === 'sitting-1' ? SITTING_1_QUESTIONS : SITTING_2_QUESTIONS;

  const activeQuestion = questions.find(q => q.status === 'active');
  const pendingQuestions = questions.filter(q => q.status === 'pending');
  const disposedQuestions = questions.filter(q => q.status === 'disposed');

  return (
    <div className="flex flex-col gap-[20px] w-full">
      {/* Day switcher + summary */}
      <div className="flex items-center justify-between w-full">
        <SittingDaySwitcher activeDay={activeDay} onDayChange={setActiveDay} />
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">
          {questions.length} questions · {disposedQuestions.length} answered · {pendingQuestions.length} pending
        </p>
      </div>

      {/* Active Question — Live chip on card is the indicator, no section header needed */}
      {activeQuestion && (
        <ActiveQuestionCard question={activeQuestion} questionNumber={questions.indexOf(activeQuestion) + 1} />
      )}

      {/* Pending Questions */}
      {pendingQuestions.length > 0 && (
        <div className="flex flex-col gap-[8px] w-full">
          <SectionHeader title="Up Next" />
          <div className="flex flex-col gap-[8px] w-full">
            {pendingQuestions.map((q, i) => (
              <PendingQuestionCard key={q.id} question={q} queueNumber={questions.indexOf(q) + 1} />
            ))}
          </div>
        </div>
      )}

      {/* Disposed Questions */}
      {disposedQuestions.length > 0 && (
        <div className="flex flex-col gap-[8px] w-full">
          <SectionHeader title="Disposed" count={disposedQuestions.length} variant="disposed" />
          <div className="flex flex-col gap-[8px] w-full">
            {disposedQuestions.map(q => (
              <DisposedQuestionCard key={q.id} question={q} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Zero Hour Tab (placeholder) ──────────────────────────────────────────────

function ZeroHourTab() {
  const [activeDay, setActiveDay] = useState<SittingDay>('sitting-1');

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

// ── Page ─────────────────────────────────────────────────────────────────────

export default function SittingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab') as SittingTab | null;
  const VALID_TABS: SittingTab[] = ['question-hour', 'zero-hour', 'legislative-business'];
  const activeTab: SittingTab = tabParam && VALID_TABS.includes(tabParam) ? tabParam : 'question-hour';

  const setActiveTab = (tab: SittingTab) => {
    setSearchParams({ tab }, { replace: true });
  };

  return (
    <div className="bg-[var(--input-background)] relative size-full overflow-hidden">
      {/* Navbar */}
      <div className="absolute page-inset-left top-[32px]">
        <SharedNavBar activePage="sitting" />
      </div>

      {/* Page Header */}
      <PageHeader />

      {/* Main Content */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start page-inset-x top-[100px]">
        {/* Session Tabs */}
        <div className="flex gap-[12px] items-start">
          <TabButton
            label="Question Hour"
            isActive={activeTab === 'question-hour'}
            onClick={() => setActiveTab('question-hour')}
          />
          <TabButton
            label="Zero Hour"
            isActive={activeTab === 'zero-hour'}
            onClick={() => setActiveTab('zero-hour')}
          />
          <TabButton
            label="Legislative Business"
            isActive={activeTab === 'legislative-business'}
            onClick={() => setActiveTab('legislative-business')}
          />
        </div>

        {/* Tab Content */}
        <div className={`content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full ${
          activeTab === 'legislative-business'
            ? 'overflow-hidden'
            : 'max-h-[calc(100vh-192px)] overflow-y-auto pb-[32px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden'
        }`}>
          {activeTab === 'question-hour' && <QuestionHourTab />}
          {activeTab === 'zero-hour' && <ZeroHourTab />}
          {activeTab === 'legislative-business' && <LegislativeBusinessTab />}
        </div>
      </div>
    </div>
  );
}