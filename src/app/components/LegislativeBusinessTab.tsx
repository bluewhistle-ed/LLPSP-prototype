import { useState, useEffect, useRef, useCallback } from "react";
import { StatusChip } from "./StatusChip";
import { Divider } from "./Divider";
import { DiffHighlight } from "./AmendmentModule";
import { motion, AnimatePresence } from "motion/react";
import { PartyBadge } from "./PartyBadge";
import { DiagonalStripeOverlay } from "./DiagonalStripeOverlay";

import {
  SITTING_BILL,
  SITTING_1_SPEAKERS,
  SITTING_2_SPEAKERS,
  CLAUSE_AMENDMENTS,
  SITTING_2_CLAUSE_STATUSES,
  toRomanNumeral,
  getAmendmentCountForClause,
  getAmendmentCountForChapter,
  getPendingAmendmentCountForClause,
  getPassedAmendmentsByNodeId,
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

// ── Amendment Type Helpers ───────────────────────────────────────���──────���───

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
        General Consideration
      </button>
      <button
        onClick={() => onDayChange('sitting-2')}
        className={`px-[12px] py-[5px] rounded-[var(--radius-button-small)] text-[length:var(--text-label)] leading-[14px] cursor-pointer transition-colors ${
          activeDay === 'sitting-2'
            ? 'bg-[var(--card)] text-[var(--foreground)] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]'
            : 'bg-transparent text-[var(--muted-foreground)] hover:text-[var(--foreground)]'
        }`}
      >
        Clause-by-Clause Consideration
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

          {/* Chapter list with inline clause expansion on hover */}
          <div className="flex flex-col gap-[2px] p-[6px] max-h-[420px] overflow-y-auto">
            {SITTING_BILL.chapters.map((chapter) => {
              const isSelected = chapter.id === activeChapterId;
              const isHovered = chapter.id === hoveredChapterId;
              const chapterAmendmentCount = getAmendmentCountForChapter(chapter.id);
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
                            const clAmendCount = getAmendmentCountForClause(clause.id);
                            const statusIcon = getClauseStatusIcon(clause.id);
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
                                {statusIcon && (
                                  <div className="flex items-center justify-center size-[14px] shrink-0">
                                    {statusIcon}
                                  </div>
                                )}
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

// ── Bill Text Renderer ───────────────────────────────────────────────────────

/** Expandable amendments list for General Consideration phase */
function ClauseAmendmentsExpandable({ 
  nodeId, 
  clauseLabel 
}: { 
  nodeId: string; 
  clauseLabel: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Find all amendments targeting this node
  const amendments = CLAUSE_AMENDMENTS.filter(a => a.clauseId === nodeId);
  
  if (amendments.length === 0) return null;
  
  const typeLabel = (type: string) => AMENDMENT_TYPE_LABELS[type] || type;
  const typeVariant = (type: string) => AMENDMENT_TYPE_VARIANTS[type];
  
  return (
    <div className="mt-[8px] ml-[24px]">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center gap-[6px] px-[8px] py-[4px] rounded-[4px] hover:bg-[var(--sidebar-primary)] transition-colors w-full text-left group"
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
                  {/* Amendment type and submitter */}
                  <div className="flex items-center gap-[6px] flex-wrap">
                    <StatusChip label={typeLabel(amendment.type)} variant={typeVariant(amendment.type) as any} />
                    <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] flex items-center gap-[4px]">
                      <span className="opacity-60">by</span>
                      <span>{amendment.submittedBy.name}</span>
                    </p>
                  </div>
                  
                  {/* Amendment content */}
                  {amendment.type === 'substitute' && amendment.proposedText && (
                    <div className="flex flex-col gap-[3px]">
                      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">
                        <DiffHighlight original={amendment.originalText} proposed={amendment.proposedText} />
                      </p>
                    </div>
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
                  
                  {/* Voting result if available */}
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

function SpecialBlockRenderer({ block, index, totalOfType, highlightedNodeId, passedAmendments }: { block: SpecialBlock; index: number; totalOfType: number; highlightedNodeId?: string | null; passedAmendments?: Map<string, LBClauseAmendment> }) {
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

  // Check if the highlighted node is the special block
  const isHighlighted = highlightedNodeId === block.id;

  // Check for passed amendment on this special block
  const sbAmendment = passedAmendments?.get(block.id);
  const sbContent = sbAmendment?.type === 'substitute' && sbAmendment.proposedText
    ? sbAmendment.proposedText
    : block.content;
  const isSbOmitted = sbAmendment?.type === 'omit';

  if (isSbOmitted) {
    return (
      <div className={`${getBgColor()} rounded-[4px] p-[10px] flex flex-col gap-[4px] mt-[6px] opacity-50`} data-node-id={block.id}>
        <div className="flex gap-[6px]">
          <span className="font-semibold text-[length:var(--text-label)] text-[var(--muted-foreground)] leading-[16px] shrink-0">{getPrefix()}</span>
          <p className="flex-1 text-[length:var(--text-label)] text-[var(--muted-foreground)] leading-[16px] line-through">{block.content}</p>
        </div>
        <span className="inline-flex items-center gap-[3px] bg-[var(--status-rejected-bg)] text-[var(--status-rejected-text)] text-[length:var(--text-label)] leading-[14px] px-[5px] py-[1px] rounded-[4px] w-fit">
          <svg className="size-[10px]" fill="none" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" />
          </svg>
          Omitted
        </span>
      </div>
    );
  }

  return (
    <div className={`${getBgColor()} rounded-[4px] p-[10px] flex gap-[6px] mt-[6px] transition-all duration-200 ${
      isHighlighted
        ? 'bg-[var(--status-warning-bg)] ring-1 ring-[var(--status-warning-border)]'
        : ''
    }`} data-node-id={block.id}>
      <span className="font-semibold text-[length:var(--text-label)] text-[var(--foreground)] leading-[16px] shrink-0">{getPrefix()}</span>
      <div className="flex-1">
        <p className="text-[length:var(--text-label)] text-[var(--sidebar-primary-foreground)] leading-[16px]">
          {sbContent}
          {sbAmendment?.type === 'substitute' && (
            <span className="inline-flex items-center gap-[3px] bg-[var(--status-approved-bg)] text-[var(--status-approved-text)] text-[length:var(--text-label)] leading-[14px] px-[5px] py-[1px] rounded-[4px] ml-[4px] align-middle">
              <svg className="size-[10px]" fill="none" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" />
              </svg>
              Amended
            </span>
          )}
        </p>
        {sbAmendment?.type === 'insert' && sbAmendment.proposedText && (
          <div className="mt-[4px] bg-[var(--status-approved-bg)] rounded-[4px] px-[10px] py-[6px] border-l-[3px] border-[var(--status-approved-text)]">
            <p className="text-[length:var(--text-label)] leading-[16px] text-[var(--status-approved-text)]">{sbAmendment.proposedText}</p>
          </div>
        )}
      </div>
    </div>
  );
}

function renderSpecialBlocks(blocks: SpecialBlock[], highlightedNodeId?: string | null, passedAmendments?: Map<string, LBClauseAmendment>) {
  const typeOrder = { proviso: 0, explanation: 1, illustration: 2 };
  const sorted = [...blocks].sort((a, b) => typeOrder[a.type] - typeOrder[b.type]);
  const countByType = blocks.reduce((acc, b) => { acc[b.type] = (acc[b.type] || 0) + 1; return acc; }, {} as Record<string, number>);
  const indexByType = { proviso: 0, explanation: 0, illustration: 0 };

  return sorted.map((block) => {
    const idx = indexByType[block.type];
    indexByType[block.type]++;
    return <SpecialBlockRenderer key={block.id} block={block} index={idx} totalOfType={countByType[block.type] || 0} highlightedNodeId={highlightedNodeId} passedAmendments={passedAmendments} />;
  });
}

/** Inline indicator for text that has been amended by a passed amendment */
function AmendedTextIndicator() {
  return (
    <span className="inline-flex items-center gap-[3px] bg-[var(--status-approved-bg)] text-[var(--status-approved-text)] text-[length:var(--text-label)] leading-[14px] px-[5px] py-[1px] rounded-[4px] ml-[4px] align-middle">
      <svg className="size-[10px]" fill="none" viewBox="0 0 24 24">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" />
      </svg>
      Amended
    </span>
  );
}

/** Inline indicator for text that has been inserted by a passed amendment */
function InsertedTextBlock({ text }: { text: string }) {
  return (
    <div className="mt-[4px] bg-[var(--status-approved-bg)] rounded-[4px] px-[10px] py-[6px] border-l-[3px] border-[var(--status-approved-text)]">
      <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--status-approved-text)]">{text}</p>
    </div>
  );
}

/** Omitted text indicator for nodes removed by a passed omit amendment */
function OmittedTextBlock({ originalText }: { originalText: string }) {
  return (
    <div className="relative overflow-hidden">
      <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--muted-foreground)] line-through opacity-50">{originalText}</p>
      <span className="inline-flex items-center gap-[3px] bg-[var(--status-rejected-bg)] text-[var(--status-rejected-text)] text-[length:var(--text-label)] leading-[14px] px-[5px] py-[1px] rounded-[4px] mt-[2px]">
        <svg className="size-[10px]" fill="none" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" />
        </svg>
        Omitted
      </span>
    </div>
  );
}

function BillClauseRenderer({
  clause,
  isActiveClause,
  isSelectedClause,
  isClickable,
  onClick,
  amendmentCount,
  clauseRef,
  highlightedNodeId,
  passedAmendments,
  showAmendments,
}: {
  clause: Clause;
  isActiveClause: boolean;
  isSelectedClause?: boolean;
  isClickable?: boolean;
  onClick?: () => void;
  amendmentCount?: number;
  clauseRef?: (el: HTMLDivElement | null) => void;
  highlightedNodeId?: string | null;
  passedAmendments?: Map<string, LBClauseAmendment>;
  showAmendments?: boolean;
}) {
  const toLowerRoman = (n: number) => toRomanNumeral(n).toLowerCase();

  // Check if the highlighted node is the clause itself
  const isClauseHighlighted = highlightedNodeId === clause.id;

  // Get passed amendment for the clause title itself
  const clauseAmendment = passedAmendments?.get(clause.id);
  const clauseTitleText = clauseAmendment?.type === 'substitute' && clauseAmendment.proposedText
    ? clauseAmendment.proposedText
    : clause.title;
  const isClauseOmitted = clauseAmendment?.type === 'omit';

  return (
    <div
      ref={clauseRef}
      data-clause-id={clause.id}
      data-node-id={clause.id}
      onClick={isClickable ? onClick : undefined}
      className={`flex flex-col gap-[6px] py-[8px] px-[12px] rounded-[var(--radius)] transition-all duration-200 ${
        isClauseHighlighted
          ? 'bg-[var(--status-warning-bg)] ring-1 ring-[var(--status-warning-border)]'
          : isSelectedClause
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
        {isClauseOmitted ? (
          <OmittedTextBlock originalText={clause.title} />
        ) : (
          <div className="flex-1">
            <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">
              {clauseTitleText}
              {clauseAmendment?.type === 'substitute' && <AmendedTextIndicator />}
            </p>
            {clauseAmendment?.type === 'insert' && clauseAmendment.proposedText && (
              <InsertedTextBlock text={clauseAmendment.proposedText} />
            )}
          </div>
        )}
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

      {/* Amendments expandable for general consideration */}
      {showAmendments && (
        <ClauseAmendmentsExpandable 
          nodeId={clause.id} 
          clauseLabel={`Clause ${clause.number}`} 
        />
      )}

      {/* Sub-clauses */}
      {clause.subClauses.map((sc) => {
        const isScHighlighted = highlightedNodeId === sc.id;
        const scAmendment = passedAmendments?.get(sc.id);
        const scContent = scAmendment?.type === 'substitute' && scAmendment.proposedText
          ? scAmendment.proposedText
          : sc.content;
        const isScOmitted = scAmendment?.type === 'omit';

        return (
          <div
            key={sc.id}
            data-node-id={sc.id}
            className={`ml-[24px] flex flex-col gap-[4px] rounded-[4px] transition-all duration-200 ${
              isScHighlighted
                ? 'bg-[var(--status-warning-bg)] ring-1 ring-[var(--status-warning-border)] px-[8px] py-[4px] -mx-[8px]'
                : ''
            }`}
          >
            <div className="flex gap-[6px] items-start">
              <p className="text-[length:var(--text-label)] leading-[18px] text-[var(--muted-foreground)] shrink-0 w-[20px]">({sc.number})</p>
              {isScOmitted ? (
                <OmittedTextBlock originalText={sc.content} />
              ) : (
                <div className="flex-1">
                  <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">
                    {scContent}
                    {scAmendment?.type === 'substitute' && <AmendedTextIndicator />}
                  </p>
                  {scAmendment?.type === 'insert' && scAmendment.proposedText && (
                    <InsertedTextBlock text={scAmendment.proposedText} />
                  )}
                </div>
              )}
            </div>

            {/* Amendments expandable for sub-clause in general consideration */}
            {showAmendments && (
              <ClauseAmendmentsExpandable 
                nodeId={sc.id} 
                clauseLabel={`Clause ${clause.number}(${sc.number})`} 
              />
            )}

            {/* Items */}
            {sc.items.map((item) => {
              const isItemHighlighted = highlightedNodeId === item.id;
              const itemAmendment = passedAmendments?.get(item.id);
              const itemContent = itemAmendment?.type === 'substitute' && itemAmendment.proposedText
                ? itemAmendment.proposedText
                : item.content;
              const isItemOmitted = itemAmendment?.type === 'omit';

              return (
                <div key={item.id} className="flex flex-col gap-[0px]">
                <div
                  data-node-id={item.id}
                  className={`ml-[28px] flex gap-[6px] items-start rounded-[4px] transition-all duration-200 ${
                    isItemHighlighted
                      ? 'bg-[var(--status-warning-bg)] ring-1 ring-[var(--status-warning-border)] px-[6px] py-[3px] -mx-[6px]'
                      : ''
                  }`}
                >
                  <p className="text-[length:var(--text-label)] leading-[18px] text-[var(--muted-foreground)] shrink-0 w-[24px]">({toLowerRoman(item.number)})</p>
                  {isItemOmitted ? (
                    <OmittedTextBlock originalText={item.content} />
                  ) : (
                    <div className="flex-1">
                      <p className="text-[length:var(--text-base)] leading-[20px] text-[var(--sidebar-primary-foreground)]">
                        {itemContent}
                        {itemAmendment?.type === 'substitute' && <AmendedTextIndicator />}
                      </p>
                      {itemAmendment?.type === 'insert' && itemAmendment.proposedText && (
                        <InsertedTextBlock text={itemAmendment.proposedText} />
                      )}
                    </div>
                  )}
                </div>

                {/* Amendments expandable for item in general consideration */}
                {showAmendments && (
                  <div className="ml-[28px]">
                    <ClauseAmendmentsExpandable 
                      nodeId={item.id} 
                      clauseLabel={`Clause ${clause.number}(${sc.number})(${toLowerRoman(item.number)})`} 
                    />
                  </div>
                )}
                </div>
              );
            })}

            {/* Sub-clause special blocks */}
            {sc.specialBlocks.length > 0 && (
              <div className="ml-[28px]">{renderSpecialBlocks(sc.specialBlocks, highlightedNodeId, passedAmendments)}</div>
            )}
          </div>
        );
      })}

      {/* Clause-level special blocks */}
      {clause.specialBlocks.length > 0 && (
        <div className="ml-[24px]">{renderSpecialBlocks(clause.specialBlocks, highlightedNodeId, passedAmendments)}</div>
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
      <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />

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

// ── Upcoming Speaker Row ────────────────────────���─��─────────────────────────

function UpcomingSpeakerRow({ speaker }: { speaker: LBSpeaker }) {
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

// ── Completed Speaker Row ────────────────────────────────────────────────────

function CompletedSpeakerRow({ speaker }: { speaker: LBSpeaker }) {
  return (
    <div className="flex items-center gap-[10px] py-[6px] px-[12px]">
      <div className="relative shrink-0 size-[24px]">
        <img alt="" className="block max-w-none size-full rounded-full object-cover opacity-50" src={speaker.avatar} />
      </div>
      <div className="flex items-center gap-[6px] flex-1 min-w-0">
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] truncate">{speaker.name}</p>
        <div className="opacity-50">
          <PartyBadge party={speaker.party} />
        </div>
      </div>
      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] tabular-nums shrink-0">{formatTime(speaker.elapsedTime)}</p>
    </div>
  );
}

// ── Section Header ���──────────────────────────────────────────────────────────

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
            <UpcomingSpeakerRow key={s.id} speaker={s} />
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

// ── Clause-by-Clause Amendment Row (inner row, not standalone card) ──────────

function ClauseAmendmentRow({ amendment, amendmentNumber, isHighlighted, onHoverStart, onHoverEnd }: { amendment: LBClauseAmendment; amendmentNumber: number; isHighlighted?: boolean; onHoverStart?: () => void; onHoverEnd?: () => void }) {
  const typeLabel = AMENDMENT_TYPE_LABELS[amendment.type];
  const typeVariant = AMENDMENT_TYPE_VARIANTS[amendment.type];

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

      {/* Pending vote */}
      <Divider />
      <div className="flex items-center gap-[8px]">
        <StatusChip label="Pending" variant="pending" />
        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">Awaiting vote</p>
      </div>
    </div>
  );
}

// ── Disposed Clauses Section ──────────────────────────────────────────��──────

// ── Unified Disposed Section ─────────────────────────────────────────────────

/** Merged disposed section — clauses as group headers with their amendments nested beneath */
function UnifiedDisposedSection({
  clauses,
  amendments,
  amendmentNumberMap,
  clauseStatuses,
  onClauseNavigate,
}: {
  clauses: Clause[];
  amendments: LBClauseAmendment[];
  amendmentNumberMap: Map<string, number>;
  clauseStatuses: Map<string, ClauseVoteStatus>;
  onClauseNavigate: (clauseId: string) => void;
}) {
  const [expanded, setExpanded] = useState(false);

  // Group amendments by their parent clause
  const allClausesForGrouping = SITTING_BILL.chapters.flatMap(ch => ch.clauses);
  const amendmentsByClause = new Map<string, LBClauseAmendment[]>();

  amendments.forEach(a => {
    const parentClause = allClausesForGrouping.find(cl => {
      const nodeIds = new Set<string>([cl.id]);
      cl.subClauses.forEach(sc => {
        nodeIds.add(sc.id);
        sc.items.forEach(it => {
          nodeIds.add(it.id);
          it.specialBlocks.forEach(sb => nodeIds.add(sb.id));
        });
        sc.specialBlocks.forEach(sb => nodeIds.add(sb.id));
      });
      cl.specialBlocks.forEach(sb => nodeIds.add(sb.id));
      return nodeIds.has(a.clauseId);
    });
    if (parentClause) {
      const existing = amendmentsByClause.get(parentClause.id);
      if (existing) {
        existing.push(a);
      } else {
        amendmentsByClause.set(parentClause.id, [a]);
      }
    }
  });

  // Build merged list: every clause that is either passed OR has disposed amendments
  const passedClauseIds = new Set(clauses.map(c => c.id));
  const clausesWithAmendments = new Set(amendmentsByClause.keys());
  const relevantClauseIds = new Set([...passedClauseIds, ...clausesWithAmendments]);
  const mergedGroups = allClausesForGrouping
    .filter(cl => relevantClauseIds.has(cl.id))
    .sort((a, b) => a.number - b.number);

  const totalItems = clauses.length + amendments.length;
  if (totalItems === 0) return null;

  return (
    <div className="flex flex-col w-full">
      {/* Section header — plain collapsible, no card */}
      <div
        className="flex items-center gap-[8px] px-[4px] py-[8px] cursor-pointer transition-colors"
        onClick={() => setExpanded(!expanded)}
      >
        <svg className={`size-[14px] text-[var(--muted-foreground)] transition-transform duration-200 ${expanded ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 16 16">
          <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

        <p className="font-semibold text-[length:var(--text-base)] leading-[16px] text-[var(--muted-foreground)]">
          Disposed
        </p>

        <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">
          {clauses.length} clause{clauses.length !== 1 ? 's' : ''} · {amendments.length} amendment{amendments.length !== 1 ? 's' : ''}
        </p>
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="flex flex-col pt-[4px]">
              {mergedGroups.map((clause, index) => {
                const isPassed = clauseStatuses.get(clause.id) === 'passed';
                const groupAmendments = amendmentsByClause.get(clause.id) || [];

                return (
                  <div key={clause.id} className="flex flex-col">
                    {/* Divider between clause groups */}
                    {index > 0 && (
                      <div className="h-[1px] bg-[var(--card-border)] mx-[4px]" />
                    )}

                    {/* Clause header row */}
                    <div
                      onClick={() => onClauseNavigate(clause.id)}
                      className="flex items-center gap-[6px] px-[4px] py-[6px] cursor-pointer hover:bg-[var(--input-background)] rounded-[var(--radius)] transition-colors"
                    >
                      {isPassed ? (
                        <svg className="size-[12px] shrink-0 text-[var(--status-approved-text)]" fill="none" viewBox="0 0 24 24">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" />
                        </svg>
                      ) : (
                        <div className="size-[12px] shrink-0 flex items-center justify-center">
                          <div className="size-[4px] rounded-full bg-[var(--muted-foreground)]" />
                        </div>
                      )}

                      <p className="text-[length:var(--text-label)] leading-[14px] font-semibold text-[var(--muted-foreground)] flex-1 min-w-0">
                        Clause {clause.number}
                      </p>

                      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] shrink-0">
                        {groupAmendments.length} amendment{groupAmendments.length !== 1 ? 's' : ''}
                      </p>
                    </div>

                    {/* Amendment list rows */}
                    {groupAmendments.map((a) => (
                      <DisposedAmendmentRow
                        key={a.id}
                        amendment={a}
                        amendmentNumber={amendmentNumberMap.get(a.id) || 0}
                      />
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

/** Compact row for a disposed amendment in the history section */
function DisposedAmendmentRow({ amendment, amendmentNumber }: { amendment: LBClauseAmendment; amendmentNumber: number }) {
  const isPassed = amendment.votingResult?.passed;
  const typeLabel = AMENDMENT_TYPE_LABELS[amendment.type];

  return (
    <div className="flex items-center gap-[6px] pl-[24px] pr-[4px] py-[3px]">
      {/* Result icon — small, tinted */}
      {isPassed ? (
        <svg className="size-[10px] shrink-0 text-[var(--status-approved-text)] opacity-60" fill="none" viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor" />
        </svg>
      ) : (
        <svg className="size-[10px] shrink-0 text-[var(--status-rejected-text)] opacity-60" fill="none" viewBox="0 0 24 24">
          <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" fill="currentColor" />
        </svg>
      )}

      {/* Clause target + amendment type */}
      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] truncate">
        <span className="opacity-60">{amendment.clauseLabel}</span>
        <span className="opacity-30 mx-[3px]">·</span>
        <span>{typeLabel}</span>
      </p>

      {/* Submitter — tertiary */}
      <span className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] opacity-50">·</span>
      <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] opacity-50 truncate flex-1 min-w-0">
        {amendment.submittedBy.name}
      </p>
    </div>
  );
}

// ── Clause-by-Clause Panel ───────────────────────────────────────────────────

function ClauseByClausePanel({ clauseStatuses, selectedClauseId, onClauseNavigate, highlightedNodeId, onAmendmentHover, hoveredAmendmentId }: { clauseStatuses: Map<string, ClauseVoteStatus>; selectedClauseId: string | undefined; onClauseNavigate: (clauseId: string) => void; highlightedNodeId: string | null; onAmendmentHover: (nodeId: string | null) => void; hoveredAmendmentId: string | null }) {
  // Find the active (live) clause
  const activeClauseId = Array.from(clauseStatuses.entries()).find(([, s]) => s === 'active')?.[0];

  // Build a global amendment number map (1-based, ordered by CLAUSE_AMENDMENTS array position)
  const amendmentNumberMap = new Map<string, number>();
  CLAUSE_AMENDMENTS.forEach((a, i) => {
    amendmentNumberMap.set(a.id, i + 1);
  });

  // Determine which clause to show amendments for �� selected or active
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
  const passedCount = Array.from(clauseStatuses.values()).filter(s => s === 'passed').length;

  // The active clause object (for the persistent "Currently Considering" card)
  const activeClause = activeClauseId
    ? SITTING_BILL.chapters.flatMap(ch => ch.clauses).find(cl => cl.id === activeClauseId)
    : undefined;

  // Whether the user is viewing a different clause than the live one
  const isViewingOtherClause = displayClauseId !== activeClauseId && !!displayClauseId;

  // Separate amendments into pending (active) and disposed (voted on) for display clause
  const pendingAmendments = displayClauseAmendments.filter(a => !a.votingResult);
  const displayDisposedCount = displayClauseAmendments.filter(a => !!a.votingResult).length;

  // Global disposed items — all disposed clauses + all disposed amendments across ALL clauses
  const allClauses = SITTING_BILL.chapters.flatMap(ch => ch.clauses);
  const disposedClauses = allClauses.filter(cl => clauseStatuses.get(cl.id) === 'passed');
  const allDisposedAmendments = CLAUSE_AMENDMENTS.filter(a => !!a.votingResult);

  return (
    <div className="flex flex-col gap-[12px] w-full">
      {/* Persistent "Go to live clause" shortcut — only shown when viewing a different clause */}
      {activeClause && activeClauseId && isViewingOtherClause && (
        <div
          onClick={() => onClauseNavigate(activeClauseId)}
          className="bg-[var(--card)] flex items-center gap-[8px] px-[12px] py-[10px] relative rounded-[var(--radius-card)] w-full cursor-pointer transition-shadow hover:shadow-[var(--elevation-sm)]"
        >
          <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
          <p className="font-semibold text-[length:var(--text-base)] leading-[16px] text-[var(--foreground)]">Clause {activeClause.number}</p>

          <div className="flex gap-[4px] items-center bg-[var(--status-urgent-bg)] px-[6px] py-[2px] rounded-full shrink-0">
            <div className="relative size-[6px]">
              <div className="absolute inset-0 rounded-full bg-[var(--status-urgent-text)] animate-ping opacity-75" />
              <div className="relative size-full rounded-full bg-[var(--status-urgent-text)]" />
            </div>
            <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--status-urgent-text)]">Live</p>
          </div>

          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)] ml-auto shrink-0">Go to live clause</p>

          <svg className="size-[14px] text-[var(--muted-foreground)] shrink-0" fill="none" viewBox="0 0 24 24">
            <path d="M9 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      )}

      {/* ── Container card: clause header + amendment list ── */}
      {displayClause && displayClauseId ? (
        <div className="bg-[var(--card)] flex flex-col relative rounded-[var(--radius-card)] w-full overflow-hidden">
          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] z-[2] ${
            isDisplayClauseLive
              ? 'border-[var(--status-role-border)] opacity-[0.46]'
              : 'border-[var(--card-border)]'
          }`} />

          {/* Card header — clause info */}
          <div
            className="flex items-center gap-[8px] px-[16px] py-[12px] cursor-pointer shrink-0"
            onClick={() => onClauseNavigate(displayClauseId)}
          >
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

          {/* Pending amendment rows */}
          {pendingAmendments.length > 0 ? (
            <div className="flex flex-col gap-[8px] p-[12px]">
              {pendingAmendments.map((a) => (
                <ClauseAmendmentRow
                  key={a.id}
                  amendment={a}
                  amendmentNumber={amendmentNumberMap.get(a.id) || 0}
                  isHighlighted={hoveredAmendmentId === a.id}
                  onHoverStart={() => onAmendmentHover(a.id)}
                  onHoverEnd={() => onAmendmentHover(null)}
                />
              ))}
            </div>
          ) : (
            <div className="flex items-center justify-center px-[16px] py-[24px]">
              <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">
                {displayDisposedCount > 0 ? 'All amendments have been disposed' : 'No amendments for this clause'}
              </p>
            </div>
          )}
        </div>
      ) : (
        <div className="bg-[var(--card)] flex items-center justify-center p-[24px] rounded-[var(--radius-card)] relative">
          <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
          <p className="text-[length:var(--text-label)] leading-[14px] text-[var(--muted-foreground)]">Select a clause from the bill text to view amendments</p>
        </div>
      )}

      {/* Unified Disposed section — all passed clauses + all voted amendments */}
      <UnifiedDisposedSection
        clauses={disposedClauses}
        amendments={allDisposedAmendments}
        amendmentNumberMap={amendmentNumberMap}
        clauseStatuses={clauseStatuses}
        onClauseNavigate={onClauseNavigate}
      />
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

// ── Main Component ──────────────────────────────────────────────────────────

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

  // Handle chapter selection — only navigates left panel, does NOT affect right panel
  const handleChapterSelect = useCallback((chapterId: string) => {
    setActiveChapterId(chapterId);
    // Scroll to top of bill content when changing chapters
    if (billContentRef.current) {
      billContentRef.current.scrollTop = 0;
    }
  }, []);

  // Handle clause click from bill text — sets selection for right panel and scrolls into view
  const handleClauseClick = useCallback((clauseId: string) => {
    if (phase === 'clause-by-clause') {
      setSelectedClauseId(clauseId);
    }
    const clauseRef = document.querySelector<HTMLDivElement>(`[data-clause-id="${clauseId}"]`);
    if (clauseRef) {
      clauseRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [phase]);

  // Handle clause navigation from dropdown — only scrolls left panel, does NOT affect right panel
  const handleDropdownClauseNav = useCallback((clauseId: string) => {
    // Defer scroll to allow React to render the chapter's clauses after chapter switch
    setTimeout(() => {
      const clauseRef = document.querySelector<HTMLDivElement>(`[data-clause-id="${clauseId}"]`);
      if (clauseRef) {
        clauseRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  }, []);

  // Navigate to clause from right panel — switches chapter if needed, selects it, and scrolls into view
  const navigateToClause = useCallback((clauseId: string) => {
    // Find which chapter contains this clause
    const targetChapter = SITTING_BILL.chapters.find(ch =>
      ch.clauses.some(cl => cl.id === clauseId)
    );
    if (targetChapter && targetChapter.id !== activeChapterId) {
      setActiveChapterId(targetChapter.id);
    }
    setSelectedClauseId(clauseId);
    // Defer scroll to allow React to render the new chapter's clauses
    setTimeout(() => {
      const clauseRef = document.querySelector<HTMLDivElement>(`[data-clause-id="${clauseId}"]`);
      if (clauseRef) {
        clauseRef.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }, 50);
  }, [activeChapterId]);

  // Build passed amendments map for bill text rendering (clause-by-clause phase only)
  const passedAmendmentsMap = phase === 'clause-by-clause' ? getPassedAmendmentsByNodeId() : new Map<string, LBClauseAmendment>();

  const [highlightedNodeId, setHighlightedNodeId] = useState<string | null>(null);
  const [hoveredAmendmentId, setHoveredAmendmentId] = useState<string | null>(null);

  // When an amendment is hovered, find its clauseId (the bill node it targets) and highlight it
  const handleAmendmentHover = useCallback((amendmentId: string | null) => {
    setHoveredAmendmentId(amendmentId);
    if (amendmentId) {
      const amendment = CLAUSE_AMENDMENTS.find(a => a.id === amendmentId);
      if (amendment) {
        setHighlightedNodeId(amendment.clauseId);
        // Scroll the highlighted node into view in the left panel
        setTimeout(() => {
          const nodeEl = billContentRef.current?.querySelector<HTMLElement>(`[data-node-id="${amendment.clauseId}"]`);
          if (nodeEl) {
            nodeEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
          }
        }, 16);
      }
    } else {
      setHighlightedNodeId(null);
    }
  }, []);

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
              onClauseClick={handleDropdownClauseNav}
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
                    amendmentCount={phase === 'clause-by-clause' ? getPendingAmendmentCountForClause(clause.id) : getAmendmentCountForClause(clause.id)}
                    onClick={() => handleClauseClick(clause.id)}
                    highlightedNodeId={highlightedNodeId}
                    passedAmendments={passedAmendmentsMap}
                    showAmendments={phase === 'general'}
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
            {phase === 'clause-by-clause' && <ClauseByClausePanel clauseStatuses={clauseStatusMap} selectedClauseId={selectedClauseId || activeClauseId} onClauseNavigate={navigateToClause} highlightedNodeId={highlightedNodeId} onAmendmentHover={handleAmendmentHover} hoveredAmendmentId={hoveredAmendmentId} />}
            {phase === 'passing' && <PassingPanel />}
          </div>
        </div>
      </div>
    </div>
  );
}