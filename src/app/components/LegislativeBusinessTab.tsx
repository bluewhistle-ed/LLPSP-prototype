import { useState, useEffect, useRef, useCallback } from "react";
import { StatusChip } from "./StatusChip";
import { Divider } from "./Divider";
import { DiffHighlight } from "./AmendmentModule";
import {
  SITTING_BILL,
  SITTING_1_SPEAKERS,
  SITTING_2_SPEAKERS,
  CLAUSE_AMENDMENTS,
  SITTING_2_CLAUSE_STATUSES,
  toRomanNumeral,
  getAmendmentCountForClause,
  getAmendmentCountForChapter,
} from "../data/mock/legislative-business";
import type {
  LBSpeaker,
  LBClauseAmendment,
  ClauseVoteStatus,
  Clause,
  SpecialBlock,
} from "../data/mock/legislative-business";

// ── Types ────────────────────────────────────────────────────────────────────

type SittingDay = 'sitting-1' | 'sitting-2';
type LBPhase = 'general' | 'clause-by-clause' | 'passing';

// ── Amendment Type Helpers ───────────────────────────────────────────────────

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

// ── Party Badge (same as SittingPage) ────────────────────────────────────────

function PartyBadge({ party }: { party: string }) {
  const colors: Record<string, { bg: string; border: string; text: string }> = {
    UPP: { bg: '#fef3e8', border: '#ed7d31', text: '#ed7d31' },
    TRP: { bg: '#e8f4ff', border: '#2766da', text: '#2766da' },
    CVP: { bg: '#f5f0ff', border: '#6820ff', text: '#6820ff' },
  };
  const color = colors[party] || colors.UPP;

  return (
    <div className="content-stretch flex gap-[4px] items-center px-[6px] py-[2px] relative rounded-[var(--radius-chip)] shrink-0" style={{ backgroundColor: color.bg }}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius-chip)]" style={{ borderColor: color.border }} />
      <p className="leading-[14px] overflow-hidden relative shrink-0 text-[length:var(--text-label)] text-ellipsis" style={{ color: color.text }}>{party}</p>
    </div>
  );
}

// ── Sitting Day Switcher ─────────────────────────────────────────────────────

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

// ── Phase Progress Bar ──────────────────────────────────────────────────────

function PhaseProgressBar({ currentPhase }: { currentPhase: LBPhase }) {
  const phases: { key: LBPhase; label: string }[] = [
    { key: 'general', label: 'General Consideration' },
    { key: 'clause-by-clause', label: 'Clause-by-Clause' },
    { key: 'passing', label: 'Passing' },
  ];

  const currentIndex = phases.findIndex(p => p.key === currentPhase);

  return (
    <div className="flex items-center gap-[0px] w-full">
      {phases.map((phase, i) => {
        const isCompleted = i < currentIndex;
        const isActive = i === currentIndex;
        const isUpcoming = i > currentIndex;

        return (
          <div key={phase.key} className="flex items-center gap-[0px] flex-1">
            {/* Step */}
            <div className="flex items-center gap-[8px] shrink-0">
              {/* Dot / Check */}
              <div className={`flex items-center justify-center size-[24px] rounded-full shrink-0 ${
                isCompleted
                  ? 'bg-[var(--status-approved-bg)]'
                  : isActive
                    ? 'bg-[var(--status-role-bg)]'
                    : 'bg-[var(--sidebar-primary)]'
              }`}>
                {isCompleted ? (
                  <svg className="size-[14px]" fill="none" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" />
                  </svg>
                ) : isActive ? (
                  <div className="size-[8px] rounded-full bg-[var(--status-role-text)]" />
                ) : (
                  <div className="size-[8px] rounded-full bg-[var(--muted-foreground)] opacity-40" />
                )}
              </div>

              {/* Label */}
              <p className={`text-[length:var(--text-label)] leading-[14px] whitespace-nowrap ${
                isActive
                  ? 'font-semibold text-[var(--status-role-text)]'
                  : isCompleted
                    ? 'text-[var(--status-approved-text)]'
                    : 'text-[var(--muted-foreground)]'
              }`}>
                {phase.label}
              </p>
            </div>

            {/* Connector line */}
            {i < phases.length - 1 && (
              <div className={`flex-1 h-[2px] mx-[12px] rounded-full ${
                i < currentIndex
                  ? 'bg-[var(--status-approved-text)] opacity-40'
                  : 'bg-[var(--sidebar-primary)]'
              }`} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ── Format Time ──────────────────────────────────────────────────────────────

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  return `${m}:${s.toString().padStart(2, '0')}`;
}

// ── Chapter Navigation Bar ───────────────────────────────────────────────────

function ChapterSelector({
  activeChapterId,
  onChapterSelect,
  onClauseClick,
  phase,
  clauseStatuses,
}: {
  activeChapterId: string;
  onChapterSelect: (chapterId: string) => void;
  onClauseClick: (clauseId: string) => void;
  phase: LBPhase;
  clauseStatuses: Map<string, ClauseVoteStatus>;
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  const [hoveredChapterId, setHoveredChapterId] = useState<string | null>(null);
  const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeChapter = SITTING_BILL.chapters.find(ch => ch.id === activeChapterId);

  // The chapter whose clauses are displayed — hovered takes priority, then active
  const previewChapterId = hoveredChapterId || activeChapterId;
  const previewChapter = SITTING_BILL.chapters.find(ch => ch.id === previewChapterId);

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

  const getClauseStatusIcon = (clauseId: string) => {
    const status = clauseStatuses.get(clauseId);
    if (!status || phase !== 'clause-by-clause') return null;
    switch (status) {
      case 'passed':
        return (
          <svg className="size-[12px] shrink-0" fill="none" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" />
          </svg>
        );
      case 'active':
        return <div className="size-[8px] rounded-full bg-[var(--status-role-text)] shrink-0" />;
      case 'upcoming':
        return <div className="size-[8px] rounded-full bg-[var(--muted-foreground)] opacity-30 shrink-0" />;
      default:
        return null;
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Current chapter header — matches BillAmendmentView right panel header */}
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

          {/* Chapter list */}
          <div className="flex flex-col gap-[2px] p-[6px]">
            {SITTING_BILL.chapters.map((chapter) => {
              const isSelected = chapter.id === activeChapterId;
              const isHovered = chapter.id === hoveredChapterId;
              const chapterAmendmentCount = getAmendmentCountForChapter(chapter.id);

              return (
                <button
                  key={chapter.id}
                  onMouseEnter={() => setHoveredChapterId(chapter.id)}
                  onClick={() => {
                    onChapterSelect(chapter.id);
                    setShowDropdown(false);
                    setHoveredChapterId(null);
                  }}
                  className={`flex gap-[6px] items-center px-[8px] py-[6px] rounded-[4px] cursor-pointer hover:bg-[var(--sidebar-primary)] transition-colors w-full text-left ${
                    isSelected ? 'bg-[var(--sidebar-primary)]' : ''
                  }`}
                >
                  <p className="flex-1 leading-[16px] text-[length:var(--text-base)] text-[var(--sidebar-primary-foreground)]">
                    <span className="text-[var(--foreground)]">{chapter.number}.</span> {chapter.name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}
                  </p>
                  {chapterAmendmentCount > 0 && (
                    <StatusChip label={`${chapterAmendmentCount}`} variant="warning" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Clause list for hovered/active chapter — dynamically updates on hover */}
          {previewChapter && previewChapter.clauses.length > 0 && (
            <>
              <div className="mx-[6px] border-t border-[var(--card-border)]" />
              <div className="px-[6px] py-[4px]">
                <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] px-[8px] py-[4px]">
                  Clauses in {previewChapter.name.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase())}
                </p>
                <div className="flex flex-col">
                  {previewChapter.clauses.map((clause) => {
                    const clAmendCount = getAmendmentCountForClause(clause.id);
                    const statusIcon = getClauseStatusIcon(clause.id);
                    const clauseTitle = clause.title.length > 70 ? clause.title.substring(0, 70) + '…' : clause.title;

                    return (
                      <button
                        key={clause.id}
                        className="flex items-center gap-[8px] px-[8px] py-[6px] hover:bg-[var(--sidebar-primary)] rounded-[4px] transition-colors cursor-pointer w-full text-left"
                        onClick={() => {
                          onChapterSelect(previewChapter.id);
                          onClauseClick(clause.id);
                          setShowDropdown(false);
                          setHoveredChapterId(null);
                        }}
                      >
                        {statusIcon && (
                          <div className="flex items-center justify-center size-[16px] shrink-0">
                            {statusIcon}
                          </div>
                        )}
                        <p className="flex-1 text-[length:var(--text-label)] leading-[16px] text-[var(--sidebar-primary-foreground)] truncate">
                          <span className="font-semibold text-[var(--foreground)]">Clause {clause.number}</span>
                          <span className="text-[var(--muted-foreground)]"> — {clauseTitle}</span>
                        </p>
                        {clAmendCount > 0 && (
                          <StatusChip label={`${clAmendCount}`} variant="warning" />
                        )}
                      </button>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ── Bill Text Renderer ───────────────────────────────────────────────────────

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
    <div className={`${getBgColor()} rounded-[4px] p-[10px] flex gap-[6px] mt-[6px]`}>
      <span className="font-semibold text-[length:var(--text-label)] text-[var(--foreground)] leading-[16px] shrink-0">{getPrefix()}</span>
      <p className="flex-1 text-[length:var(--text-label)] text-[var(--sidebar-primary-foreground)] leading-[16px]">{block.content}</p>
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
  isActiveClause,
  isSelectedClause,
  isClickable,
  onClick,
  amendmentCount,
  clauseRef,
}: {
  clause: Clause;
  isActiveClause: boolean;
  isSelectedClause?: boolean;
  isClickable?: boolean;
  onClick?: () => void;
  amendmentCount?: number;
  clauseRef?: (el: HTMLDivElement | null) => void;
}) {
  const toLowerRoman = (n: number) => toRomanNumeral(n).toLowerCase();

  return (
    <div
      ref={clauseRef}
      data-clause-id={clause.id}
      onClick={isClickable ? onClick : undefined}
      className={`flex flex-col gap-[6px] py-[8px] px-[12px] rounded-[var(--radius)] transition-colors ${
        isSelectedClause
          ? 'bg-[var(--status-role-bg)] ring-1 ring-[var(--status-role-border)]'
          : isActiveClause
            ? 'bg-[var(--status-role-bg)] bg-opacity-30'
            : isClickable
              ? 'hover:bg-[var(--sidebar-primary)]'
              : ''
      } ${isClickable ? 'cursor-pointer' : ''}`}
    >
      {/* Clause heading */}
      <div className="flex gap-[8px] items-start">
        <p className="font-semibold text-[length:var(--text-base)] leading-[20px] text-[var(--foreground)] shrink-0">{clause.number}.</p>
        <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)] flex-1">{clause.title}</p>
        {isClickable && amendmentCount !== undefined && amendmentCount > 0 && (
          <StatusChip label={`${amendmentCount}`} variant="warning" />
        )}
        {isClickable && isActiveClause && (
          <div className="flex gap-[4px] items-center bg-[var(--status-urgent-bg)] px-[6px] py-[2px] rounded-full shrink-0">
            <div className="relative size-[6px]">
              <div className="absolute inset-0 rounded-full bg-[var(--status-urgent-text)] animate-ping opacity-75" />
              <div className="relative size-full rounded-full bg-[var(--status-urgent-text)]" />
            </div>
            <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-urgent-text)]">Live</p>
          </div>
        )}
      </div>

      {/* Sub-clauses */}
      {clause.subClauses.map((sc) => (
        <div key={sc.id} className="ml-[24px] flex flex-col gap-[4px]">
          <div className="flex gap-[6px] items-start">
            <p className="text-[length:var(--text-label)] leading-[18px] text-[var(--muted-foreground)] shrink-0 w-[20px]">({sc.number})</p>
            <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)] flex-1">{sc.content}</p>
          </div>

          {/* Items */}
          {sc.items.map((item) => (
            <div key={item.id} className="ml-[28px] flex gap-[6px] items-start">
              <p className="text-[length:var(--text-label)] leading-[18px] text-[var(--muted-foreground)] shrink-0 w-[24px]">({toLowerRoman(item.number)})</p>
              <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)] flex-1">{item.content}</p>
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

// ── Active Speaker Card ──────────────────────────────────────────────────────

function ActiveSpeakerCard({ speaker }: { speaker: LBSpeaker }) {
  const [timeRemaining, setTimeRemaining] = useState(speaker.allocatedTime - speaker.elapsedTime);

  useEffect(() => {
    if (timeRemaining <= 0) return;
    const interval = setInterval(() => {
      setTimeRemaining(prev => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeRemaining]);

  const progress = ((speaker.allocatedTime - timeRemaining) / speaker.allocatedTime) * 100;
  const isLow = timeRemaining < 60;

  return (
    <div className="bg-[var(--card)] flex flex-col gap-[12px] p-[16px] relative rounded-[var(--radius-card)] w-full">
      <div aria-hidden="true" className="absolute border border-[var(--status-role-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] opacity-[0.46]" />

      {/* Speaker info */}
      <div className="flex items-center gap-[12px]">
        <div className="relative shrink-0 size-[40px]">
          <img alt="" className="block max-w-none size-full rounded-full object-cover" src={speaker.avatar} />
        </div>
        <div className="flex flex-col gap-[4px] flex-1 min-w-0">
          <div className="flex items-center gap-[8px]">
            <p className="font-semibold text-[length:var(--text-base)] leading-[16px] text-[var(--foreground)]">{speaker.name}</p>
            <div className="flex gap-[4px] items-center bg-[var(--status-urgent-bg)] px-[6px] py-[2px] rounded-full shrink-0">
              <div className="relative size-[6px]">
                <div className="absolute inset-0 rounded-full bg-[var(--status-urgent-text)] animate-ping opacity-75" />
                <div className="relative size-full rounded-full bg-[var(--status-urgent-text)]" />
              </div>
              <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-urgent-text)]">Live</p>
            </div>
          </div>
          <div className="flex items-center gap-[6px]">
            <StatusChip label={speaker.role} />
            <PartyBadge party={speaker.party} />
          </div>
        </div>
      </div>

      {/* Timer */}
      <div className="flex flex-col gap-[6px] w-full">
        <div className="flex items-center justify-between">
          <p className={`text-[length:var(--text-label)] leading-[14px] ${isLow ? 'text-[var(--status-urgent-text)]' : 'text-[var(--muted-foreground)]'}`}>
            Time Remaining
          </p>
          <p className={`font-semibold text-[length:var(--text-base)] leading-[16px] tabular-nums ${isLow ? 'text-[var(--status-urgent-text)]' : 'text-[var(--foreground)]'}`}>
            {formatTime(timeRemaining)} / {formatTime(speaker.allocatedTime)}
          </p>
        </div>
        {/* Progress bar */}
        <div className="w-full h-[4px] bg-[var(--sidebar-primary)] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-1000 ease-linear ${isLow ? 'bg-[var(--status-urgent-text)]' : 'bg-[var(--primary)]'}`}
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}

// ── Upcoming Speaker Row ─────────────────────────────────────────────────────

function UpcomingSpeakerRow({ speaker, queueNumber }: { speaker: LBSpeaker; queueNumber: number }) {
  return (
    <div className="flex items-center gap-[12px] py-[10px] px-[4px]">
      <div className="flex items-center justify-center size-[20px] rounded-full bg-[var(--sidebar-primary)] shrink-0">
        <p className="text-[10px] leading-[10px] text-[var(--sidebar-primary-foreground)]">{queueNumber}</p>
      </div>
      <div className="relative shrink-0 size-[28px]">
        <img alt="" className="block max-w-none size-full rounded-full object-cover" src={speaker.avatar} />
      </div>
      <div className="flex flex-col gap-[2px] flex-1 min-w-0">
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--foreground)] truncate">{speaker.name}</p>
        <div className="flex items-center gap-[4px]">
          <PartyBadge party={speaker.party} />
        </div>
      </div>
      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums shrink-0">{formatTime(speaker.allocatedTime)}</p>
    </div>
  );
}

// ── Completed Speaker Row ────────────────────────────────────────────────────

function CompletedSpeakerRow({ speaker }: { speaker: LBSpeaker }) {
  return (
    <div className="flex items-center gap-[10px] py-[6px] px-[12px]">
      <svg className="size-[14px] shrink-0" fill="none" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" />
      </svg>
      <div className="relative shrink-0 size-[24px]">
        <img alt="" className="block max-w-none size-full rounded-full object-cover" src={speaker.avatar} />
      </div>
      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] flex-1 truncate">{speaker.name}</p>
      <PartyBadge party={speaker.party} />
      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums shrink-0">{formatTime(speaker.elapsedTime)}</p>
    </div>
  );
}

// ── Section Header ───────────────────────────────────────────────────────────

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

// ── General Consideration Panel ──────────────────────────────────────────────

function GeneralConsiderationPanel({ speakers }: { speakers: LBSpeaker[] }) {
  const activeSpeaker = speakers.find(s => s.status === 'active');
  const upcomingSpeakers = speakers.filter(s => s.status === 'upcoming');
  const completedSpeakers = speakers.filter(s => s.status === 'completed');

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Active Speaker */}
      {activeSpeaker && <ActiveSpeakerCard speaker={activeSpeaker} />}

      {/* Up Next */}
      {upcomingSpeakers.length > 0 && (
        <div className="flex flex-col w-full divide-y divide-[var(--card-border)]">
          {upcomingSpeakers.map((s, i) => (
            <UpcomingSpeakerRow key={s.id} speaker={s} queueNumber={i + 1} />
          ))}
        </div>
      )}

      {/* Completed */}
      {completedSpeakers.length > 0 && (
        <div className="flex flex-col gap-[6px] w-full">
          <SectionHeader title="Completed" count={completedSpeakers.length} variant="disposed" />
          <div className="flex flex-col gap-[2px] w-full">
            {completedSpeakers.map(s => (
              <CompletedSpeakerRow key={s.id} speaker={s} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Clause-by-Clause Amendment Card ──────────────────────────────────────────

function ClauseAmendmentCard({ amendment }: { amendment: LBClauseAmendment }) {
  const typeLabel = AMENDMENT_TYPE_LABELS[amendment.type];
  const typeVariant = AMENDMENT_TYPE_VARIANTS[amendment.type];

  return (
    <div className="bg-[var(--card)] flex flex-col gap-[10px] p-[12px] relative rounded-[var(--radius-card)] w-full">
      <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />

      {/* Header */}
      <div className="flex items-center gap-[6px] w-full">
        <StatusChip label={typeLabel} variant={typeVariant as any} />
        <p className="font-semibold text-[length:var(--text-label)] leading-[14px] text-[var(--foreground)]">{amendment.clauseLabel}</p>
      </div>

      {/* Submitter */}
      <div className="flex items-center gap-[8px]">
        <div className="relative shrink-0 size-[20px]">
          <img alt="" className="block max-w-none size-full rounded-full object-cover" src={amendment.submittedBy.avatar} />
        </div>
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--sidebar-primary-foreground)]">{amendment.submittedBy.name}</p>
        <PartyBadge party={amendment.submittedBy.party} />
      </div>

      {/* Content */}
      {amendment.type === 'substitute' && amendment.proposedText && (
        <div className="flex flex-col gap-[4px]">
          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">Proposed changes:</p>
          <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">
            <DiffHighlight original={amendment.originalText} proposed={amendment.proposedText} />
          </p>
        </div>
      )}
      {amendment.type === 'omit' && (
        <div className="flex flex-col gap-[4px]">
          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">Proposed for removal:</p>
          <p className="text-[length:var(--text-base)] leading-[20px]">
            <span className="bg-[var(--diff-removed-bg)] text-[var(--diff-removed-text)] line-through rounded-[2px] px-[2px]">
              {amendment.originalText}
            </span>
          </p>
        </div>
      )}
      {amendment.type === 'insert' && amendment.proposedText && (
        <div className="flex flex-col gap-[4px]">
          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">New text to insert:</p>
          <p className="text-[length:var(--text-base)] leading-[20px]">
            <span className="bg-[var(--diff-added-bg)] text-[var(--diff-added-text)] rounded-[2px] px-[2px]">
              {amendment.proposedText}
            </span>
          </p>
        </div>
      )}

      {/* Reason */}
      {amendment.reason && (
        <div className="flex flex-col gap-[2px]">
          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">Reason:</p>
          <p className="text-[length:var(--text-label)] leading-[16px] text-[var(--sidebar-primary-foreground)]">{amendment.reason}</p>
        </div>
      )}

      {/* Voting Result */}
      {amendment.votingResult && (
        <>
          <Divider />
          <div className="flex items-center gap-[12px]">
            <div className="flex items-center gap-[4px]">
              <div className={`size-[8px] rounded-full ${amendment.votingResult.passed ? 'bg-[var(--status-approved-text)]' : 'bg-[var(--status-rejected-text)]'}`} />
              <p className={`font-semibold text-[length:var(--text-label)] leading-[14px] ${amendment.votingResult.passed ? 'text-[var(--status-approved-text)]' : 'text-[var(--status-rejected-text)]'}`}>
                {amendment.votingResult.passed ? 'Passed' : 'Rejected'}
              </p>
            </div>
            <div className="flex items-center gap-[8px]">
              <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-approved-text)]">Ayes: {amendment.votingResult.ayes}</p>
              <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-rejected-text)]">Nays: {amendment.votingResult.nays}</p>
            </div>
          </div>
        </>
      )}

      {/* Pending vote */}
      {!amendment.votingResult && (
        <>
          <Divider />
          <div className="flex items-center gap-[8px]">
            <StatusChip label="Pending" variant="pending" />
            <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">Awaiting vote</p>
          </div>
        </>
      )}
    </div>
  );
}

// ── Clause-by-Clause Panel ───────────────────────────────────────────────────

function ClauseByClausePanel({ clauseStatuses, selectedClauseId }: { clauseStatuses: Map<string, ClauseVoteStatus>; selectedClauseId: string | undefined }) {
  // Find the active (live) clause
  const activeClauseId = Array.from(clauseStatuses.entries()).find(([, s]) => s === 'active')?.[0];

  // Determine which clause to show amendments for — selected or active
  const displayClauseId = selectedClauseId || activeClauseId;
  const displayClause = displayClauseId
    ? SITTING_BILL.chapters.flatMap(ch => ch.clauses).find(cl => cl.id === displayClauseId)
    : undefined;

  const isDisplayClauseLive = displayClauseId === activeClauseId;
  const displayClauseStatus = displayClauseId ? clauseStatuses.get(displayClauseId) : undefined;

  // Get amendments for the displayed clause (and related sub-nodes)
  const displayClauseAmendments = displayClauseId ? CLAUSE_AMENDMENTS.filter(a => {
    const clause = SITTING_BILL.chapters.flatMap(ch => ch.clauses).find(cl => cl.id === displayClauseId);
    if (!clause) return false;
    const nodeIds = new Set<string>([clause.id]);
    clause.subClauses.forEach(sc => {
      nodeIds.add(sc.id);
      sc.items.forEach(it => {
        nodeIds.add(it.id);
        it.specialBlocks.forEach(sb => nodeIds.add(sb.id));
      });
      sc.specialBlocks.forEach(sb => nodeIds.add(sb.id));
    });
    clause.specialBlocks.forEach(sb => nodeIds.add(sb.id));
    return nodeIds.has(a.clauseId);
  }) : [];

  // Count completed clauses
  const totalClauses = SITTING_BILL.chapters.flatMap(ch => ch.clauses).length;
  const passedCount = Array.from(clauseStatuses.values()).filter(s => s === 'passed').length;

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Progress */}
      <div className="flex items-center justify-between">
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">{passedCount} / {totalClauses} clauses done</p>
      </div>

      {/* Selected/Active Clause Header */}
      {displayClause && (
        <div className="bg-[var(--card)] flex flex-col gap-[10px] p-[16px] relative rounded-[var(--radius-card)] w-full">
          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] ${
            isDisplayClauseLive
              ? 'border-[var(--status-role-border)] opacity-[0.46]'
              : 'border-[var(--card-border)]'
          }`} />

          <div className="flex items-center gap-[8px]">
            <p className="font-semibold text-[length:var(--text-base)] leading-[16px] text-[var(--foreground)]">Clause {displayClause.number}</p>
            {isDisplayClauseLive && (
              <div className="flex gap-[4px] items-center bg-[var(--status-urgent-bg)] px-[6px] py-[2px] rounded-full shrink-0">
                <div className="relative size-[6px]">
                  <div className="absolute inset-0 rounded-full bg-[var(--status-urgent-text)] animate-ping opacity-75" />
                  <div className="relative size-full rounded-full bg-[var(--status-urgent-text)]" />
                </div>
                <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-urgent-text)]">Live</p>
              </div>
            )}
            {displayClauseStatus === 'passed' && (
              <StatusChip label="Passed" variant="approved" />
            )}
            {displayClauseStatus === 'upcoming' && (
              <StatusChip label="Upcoming" variant="inactive" />
            )}
          </div>

          <p className="text-[length:var(--text-label)] leading-[16px] text-[var(--sidebar-primary-foreground)]">
            {displayClause.title.length > 120 ? displayClause.title.substring(0, 120) + '…' : displayClause.title}
          </p>
        </div>
      )}

      {/* Amendments for displayed clause */}
      {displayClauseAmendments.length > 0 ? (
        <div className="flex flex-col gap-[8px] w-full">
          <SectionHeader title="Amendments" count={displayClauseAmendments.length} />
          {displayClauseAmendments.map(a => (
            <ClauseAmendmentCard key={a.id} amendment={a} />
          ))}
        </div>
      ) : displayClause ? (
        <div className="bg-[var(--card)] flex items-center justify-center p-[24px] rounded-[var(--radius-card)] relative">
          <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">No amendments for this clause</p>
        </div>
      ) : (
        <div className="bg-[var(--card)] flex items-center justify-center p-[24px] rounded-[var(--radius-card)] relative">
          <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">Select a clause from the bill text to view amendments</p>
        </div>
      )}

      {/* Passed clauses summary */}
      {passedCount > 0 && (
        <div className="flex flex-col gap-[4px] w-full">
          <SectionHeader title="Passed Clauses" count={passedCount} variant="disposed" />
          <div className="flex flex-wrap gap-[6px] mt-[4px]">
            {SITTING_BILL.chapters.flatMap(ch => ch.clauses).filter(cl => clauseStatuses.get(cl.id) === 'passed').map(cl => (
              <div key={cl.id} className="flex items-center gap-[4px] px-[8px] py-[4px] bg-[var(--status-approved-bg)] rounded-[var(--radius-button-small)]">
                <svg className="size-[10px]" fill="none" viewBox="0 0 24 24">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" />
                </svg>
                <p className="text-[10px] leading-[12px] text-[var(--status-approved-text)]">Cl. {cl.number}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ── Passing Panel ────────────────────────────────────────────────────────────

function PassingPanel() {
  return (
    <div className="flex flex-col gap-[16px] w-full items-center">
      <div className="bg-[var(--card)] flex flex-col gap-[16px] items-center p-[24px] relative rounded-[var(--radius-card)] w-full">
        <div aria-hidden="true" className="absolute border border-[var(--status-role-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] opacity-[0.46]" />

        {/* Icon */}
        <div className="flex items-center justify-center size-[48px] rounded-full bg-[var(--status-role-bg)]">
          <svg className="size-[24px]" fill="none" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-1-4h2v-2h-2v2zm0-4h2V7h-2v5z" fill="var(--status-role-text)" />
          </svg>
        </div>

        <p className="font-semibold text-[length:var(--text-h4)] leading-[20px] text-[var(--foreground)] text-center">
          The Bill is put to vote
        </p>
        <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--muted-foreground)] text-center">
          "The question is that the Bill, as amended, be passed."
        </p>

        <Divider />

        {/* Vote results */}
        <div className="flex items-center gap-[24px]">
          <div className="flex flex-col items-center gap-[4px]">
            <p className="font-semibold text-[length:var(--text-h3)] leading-[24px] text-[var(--status-approved-text)]">18</p>
            <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-approved-text)]">Ayes</p>
          </div>
          <div className="w-[1px] h-[32px] bg-[var(--card-border)]" />
          <div className="flex flex-col items-center gap-[4px]">
            <p className="font-semibold text-[length:var(--text-h3)] leading-[24px] text-[var(--status-rejected-text)]">7</p>
            <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-rejected-text)]">Nays</p>
          </div>
        </div>

        {/* Result badge */}
        <div className="flex items-center gap-[8px] bg-[var(--status-approved-bg)] px-[16px] py-[8px] rounded-[var(--radius)]">
          <svg className="size-[16px]" fill="none" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="var(--status-approved-text)" />
          </svg>
          <p className="font-semibold text-[length:var(--text-base)] leading-[16px] text-[var(--status-approved-text)]">Bill Passed</p>
        </div>
      </div>
    </div>
  );
}

// ── Main Component ───────────────────────────────────────────────────────────

export function LegislativeBusinessTab() {
  const [activeDay, setActiveDay] = useState<SittingDay>('sitting-1');
  const [activeChapterId, setActiveChapterId] = useState(SITTING_BILL.chapters[0].id);
  const [selectedClauseId, setSelectedClauseId] = useState<string | undefined>(undefined);
  const billContentRef = useRef<HTMLDivElement>(null);

  // Determine phase based on sitting day (day 1 = general, day 2 = clause-by-clause)
  const phase: LBPhase = activeDay === 'sitting-1' ? 'general' : 'clause-by-clause';

  const speakers = activeDay === 'sitting-1' ? SITTING_1_SPEAKERS : SITTING_2_SPEAKERS;

  // Clause statuses for clause-by-clause phase
  const clauseStatusMap = new Map<string, ClauseVoteStatus>();
  if (phase === 'clause-by-clause') {
    SITTING_2_CLAUSE_STATUSES.forEach(cs => clauseStatusMap.set(cs.clauseId, cs.status));
  }

  // Active clause for highlighting in bill text
  const activeClauseId = phase === 'clause-by-clause'
    ? Array.from(clauseStatusMap.entries()).find(([, s]) => s === 'active')?.[0]
    : undefined;

  // Reset selected clause when switching days
  useEffect(() => {
    setSelectedClauseId(undefined);
  }, [activeDay]);

  // Selected chapter data
  const selectedChapterData = SITTING_BILL.chapters.find(ch => ch.id === activeChapterId);

  // Handle chapter selection
  const handleChapterSelect = useCallback((chapterId: string) => {
    setActiveChapterId(chapterId);
    setSelectedClauseId(undefined);
    // Scroll to top of bill content when changing chapters
    if (billContentRef.current) {
      billContentRef.current.scrollTop = 0;
    }
  }, []);

  // Handle clause click — sets selection for right panel and scrolls into view
  const handleClauseClick = useCallback((clauseId: string) => {
    if (phase === 'clause-by-clause') {
      setSelectedClauseId(clauseId);
    }
    const clauseRef = document.querySelector<HTMLDivElement>(`[data-clause-id="${clauseId}"]`);
    if (clauseRef) {
      clauseRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [phase]);

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {/* Day switcher */}
      <div className="flex items-center w-full">
        <SittingDaySwitcher activeDay={activeDay} onDayChange={setActiveDay} />
      </div>

      {/* Two-panel layout */}
      <div className="flex gap-[0px] w-full bg-[var(--card)] rounded-[var(--radius-card)] overflow-hidden relative" style={{ height: 'calc(100vh - 260px)' }}>
        <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] z-10" />

        {/* ── Left Panel: Bill Text ──────────────────────────────── */}
        <div className="flex flex-col w-[57%] border-r border-[var(--card-border)] overflow-hidden">
          {/* Chapter selector header — matches BillAmendmentView right panel */}
          <div className="shrink-0 border-b border-[var(--card-border)] px-[16px] py-[12px]">
            <ChapterSelector
              activeChapterId={activeChapterId}
              onChapterSelect={handleChapterSelect}
              onClauseClick={handleClauseClick}
              phase={phase}
              clauseStatuses={clauseStatusMap}
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
                    isActiveClause={clause.id === activeClauseId}
                    isSelectedClause={phase === 'clause-by-clause' && clause.id === (selectedClauseId || activeClauseId)}
                    isClickable={phase === 'clause-by-clause'}
                    amendmentCount={getAmendmentCountForClause(clause.id)}
                    onClick={() => handleClauseClick(clause.id)}
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

        {/* ── Right Panel: Proceedings ───────────────────────────── */}
        <div className="flex flex-col w-[43%] overflow-hidden">
          {/* Panel content */}
          <div className="flex-1 overflow-y-auto p-[16px] scrollbar-hide">
            {/* Phase chip */}
            <div className="mb-[12px]">
              <StatusChip
                label={phase === 'general' ? 'General Consideration' : phase === 'clause-by-clause' ? 'Clause-by-Clause Consideration' : 'Final Vote'}
                variant={phase === 'general' ? 'progress' : phase === 'clause-by-clause' ? 'warning' : 'approved'}
              />
            </div>
            {phase === 'general' && <GeneralConsiderationPanel speakers={speakers} />}
            {phase === 'clause-by-clause' && <ClauseByClausePanel clauseStatuses={clauseStatusMap} selectedClauseId={selectedClauseId || activeClauseId} />}
            {phase === 'passing' && <PassingPanel />}
          </div>
        </div>
      </div>
    </div>
  );
}