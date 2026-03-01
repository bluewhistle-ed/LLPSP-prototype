import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { StatusChip } from "./StatusChip";

// ── Types ──────────────────────────────────────────────────────────────────────

export type AmendmentType = 'substitute' | 'omit' | 'insert';

export interface AmendmentData {
  id: string;
  nodeId: string;
  nodeLabel: string;
  type: AmendmentType;
  /** For substitute: the proposed replacement text. For insert: the new text. */
  proposedText?: string;
  /** Optional reason/justification (primarily for omit) */
  reason?: string;
  /** Original text of the node (stored for reference) */
  originalText: string;
  memberName: string;
  memberAvatar: string;
  timestamp: string;
}

// ── Helpers ────────────────────────────────────────────────────────────────────

const AMENDMENT_TYPE_LABELS: Record<AmendmentType, string> = {
  substitute: 'Substitute',
  omit: 'Omit',
  insert: 'Insert',
};

const AMENDMENT_TYPE_VARIANTS: Record<AmendmentType, string> = {
  substitute: 'warning',
  omit: 'urgent',
  insert: 'progress',
};

// ── Word-level diff engine ─────────────────────────────────────────────────────

type DiffSegment = { type: 'equal' | 'added' | 'removed'; text: string };

/** Tokenise a string into words, preserving whitespace and punctuation boundaries */
function tokenize(text: string): string[] {
  return text.match(/\S+|\s+/g) || [];
}

/** Build the LCS table for two token arrays */
function lcsTable(a: string[], b: string[]): number[][] {
  const m = a.length;
  const n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1] + 1
        : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp;
}

/** Compute word-level diff segments between original and proposed text */
function computeWordDiff(original: string, proposed: string): DiffSegment[] {
  const a = tokenize(original);
  const b = tokenize(proposed);
  const dp = lcsTable(a, b);

  const segments: DiffSegment[] = [];
  let i = a.length;
  let j = b.length;

  // Backtrack to build diff
  const raw: { type: 'equal' | 'added' | 'removed'; token: string }[] = [];
  while (i > 0 && j > 0) {
    if (a[i - 1] === b[j - 1]) {
      raw.push({ type: 'equal', token: a[i - 1] });
      i--; j--;
    } else if (dp[i - 1][j] >= dp[i][j - 1]) {
      raw.push({ type: 'removed', token: a[i - 1] });
      i--;
    } else {
      raw.push({ type: 'added', token: b[j - 1] });
      j--;
    }
  }
  while (i > 0) { raw.push({ type: 'removed', token: a[i - 1] }); i--; }
  while (j > 0) { raw.push({ type: 'added', token: b[j - 1] }); j--; }
  raw.reverse();

  // Merge consecutive same-type tokens into segments
  for (const r of raw) {
    const last = segments[segments.length - 1];
    if (last && last.type === r.type) {
      last.text += r.token;
    } else {
      segments.push({ type: r.type, text: r.token });
    }
  }

  return segments;
}

/** Render diff segments as highlighted inline spans */
function DiffHighlight({ original, proposed }: { original: string; proposed: string }) {
  const segments = computeWordDiff(original, proposed);

  return (
    <span>
      {segments.map((seg, i) => {
        if (seg.type === 'equal') {
          return <span key={i}>{seg.text}</span>;
        }
        if (seg.type === 'removed') {
          return (
            <span
              key={i}
              className="bg-[var(--diff-removed-bg)] text-[var(--diff-removed-text)] line-through rounded-[2px] px-[2px]"
            >
              {seg.text}
            </span>
          );
        }
        // added
        return (
          <span
            key={i}
            className="bg-[var(--diff-added-bg)] text-[var(--diff-added-text)] rounded-[2px] px-[2px]"
          >
            {seg.text}
          </span>
        );
      })}
    </span>
  );
}

// ── Icons ──────────────────────────────────────────────────────────────────────

function IconAmend() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M2 11.5V14H4.5L11.87 6.63L9.37 4.13L2 11.5ZM13.81 4.69C14.06 4.44 14.06 4.04 13.81 3.79L12.21 2.19C11.96 1.94 11.56 1.94 11.31 2.19L10.09 3.41L12.59 5.91L13.81 4.69Z" fill="currentColor"/>
      </svg>
    </div>
  );
}

function IconDelete() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M4 12.6667C4 13.4 4.6 14 5.33333 14H10.6667C11.4 14 12 13.4 12 12.6667V4.66667H4V12.6667ZM5.33333 6H10.6667V12.6667H5.33333V6ZM10.3333 2.66667L9.66667 2H6.33333L5.66667 2.66667H3.33333V4H12.6667V2.66667H10.3333Z" fill="currentColor"/>
      </svg>
    </div>
  );
}

function IconEdit() {
  return (
    <div className="relative shrink-0 size-[14px]">
      <svg className="block size-full" fill="none" viewBox="0 0 16 16">
        <path d="M2 11.5V14H4.5L11.87 6.63L9.37 4.13L2 11.5ZM13.81 4.69C14.06 4.44 14.06 4.04 13.81 3.79L12.21 2.19C11.96 1.94 11.56 1.94 11.31 2.19L10.09 3.41L12.59 5.91L13.81 4.69Z" fill="currentColor"/>
      </svg>
    </div>
  );
}

// ── Amendment Action Menu ──────────────────────────────────────────────────────
// The floating dropdown that appears when "Amend" is clicked

interface AmendmentActionMenuProps {
  onSelect: (type: AmendmentType) => void;
}

export function AmendmentActionMenu({ onSelect }: AmendmentActionMenuProps) {
  return (
    <div className="flex flex-col bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-button-small)] shadow-sm py-[4px] w-fit">
      <button
        onClick={() => onSelect('substitute')}
        className="w-full text-left px-[12px] py-[6px] text-[length:var(--text-label)] text-[var(--sidebar-primary-foreground)] leading-[14px] hover:bg-[var(--sidebar-primary)] transition-colors whitespace-nowrap cursor-pointer"
      >
        Substitute
      </button>
      <button
        onClick={() => onSelect('omit')}
        className="w-full text-left px-[12px] py-[6px] text-[length:var(--text-label)] text-[var(--sidebar-primary-foreground)] leading-[14px] hover:bg-[var(--sidebar-primary)] transition-colors whitespace-nowrap cursor-pointer"
      >
        Omit
      </button>
      <button
        onClick={() => onSelect('insert')}
        className="w-full text-left px-[12px] py-[6px] text-[length:var(--text-label)] text-[var(--sidebar-primary-foreground)] leading-[14px] hover:bg-[var(--sidebar-primary)] transition-colors whitespace-nowrap cursor-pointer"
      >
        Insert
      </button>
    </div>
  );
}

// ── Amendment Form ─────────────────────────────────────────────────────────────

interface AmendmentFormProps {
  type: AmendmentType;
  originalText: string;
  onSubmit: (data: { type: AmendmentType; proposedText?: string; reason?: string }) => void;
  onCancel: () => void;
}

export function AmendmentForm({ type, originalText, onSubmit, onCancel }: AmendmentFormProps) {
  const [proposedText, setProposedText] = useState(type === 'substitute' ? originalText : '');
  const [reason, setReason] = useState('');
  const textRef = useRef<HTMLTextAreaElement>(null);
  const reasonRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (type === 'omit') {
      reasonRef.current?.focus();
    } else {
      textRef.current?.focus();
    }
  }, [type]);

  // Auto-resize for proposed text
  useEffect(() => {
    if (textRef.current) {
      textRef.current.style.height = 'auto';
      textRef.current.style.height = textRef.current.scrollHeight + 'px';
    }
  }, [proposedText]);

  // Auto-resize for reason
  useEffect(() => {
    if (reasonRef.current) {
      reasonRef.current.style.height = 'auto';
      reasonRef.current.style.height = reasonRef.current.scrollHeight + 'px';
    }
  }, [reason]);

  const handleSubmit = () => {
    if (type === 'omit') {
      onSubmit({ type, reason: reason.trim() || undefined });
    } else if (proposedText.trim()) {
      onSubmit({ type, proposedText: proposedText.trim(), reason: reason.trim() || undefined });
    }
  };

  const canSubmit = type === 'omit' || proposedText.trim().length > 0;

  const getHeading = () => {
    switch (type) {
      case 'substitute': return 'Propose Substitution';
      case 'omit': return 'Propose Omission';
      case 'insert': return 'Propose Insertion';
    }
  };

  const getPlaceholder = () => {
    switch (type) {
      case 'substitute': return 'Edit the text to propose your substitution...';
      case 'insert': return 'Write the new text to be inserted after this item...';
      case 'omit': return '';
    }
  };

  return (
    <div className="bg-[var(--input-background)] content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[var(--radius)] w-full">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />

      {/* Heading with type badge */}
      <div className="content-stretch flex items-center gap-[8px] relative shrink-0">
        <StatusChip label={AMENDMENT_TYPE_LABELS[type]} variant={AMENDMENT_TYPE_VARIANTS[type] as any} />
        <p className="font-semibold leading-[16px] text-[var(--foreground)] text-[length:var(--text-label)]">{getHeading()}</p>
      </div>

      {/* Proposed text field — for substitute and insert */}
      {type !== 'omit' && (
        <textarea
          ref={textRef}
          value={proposedText}
          onChange={(e) => setProposedText(e.target.value)}
          placeholder={getPlaceholder()}
          className="relative w-full bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-button-small)] p-[8px] leading-[20px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)] resize-none overflow-hidden focus:outline-none cursor-text"
          rows={2}
        />
      )}

      {/* Omit confirmation message */}
      {type === 'omit' && (
        <p className="leading-[20px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">
          This will propose removing this item from the bill.
        </p>
      )}

      {/* Reason field — optional for all types */}
      <textarea
        ref={reasonRef}
        value={reason}
        onChange={(e) => setReason(e.target.value)}
        placeholder="Reason for amendment (optional)..."
        className="relative w-full bg-[var(--card)] border border-[var(--border)] rounded-[var(--radius-button-small)] p-[8px] leading-[20px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)] resize-none overflow-hidden focus:outline-none cursor-text"
        rows={1}
      />

      {/* Action buttons */}
      <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
        <button
          onClick={onCancel}
          className="relative bg-[var(--sidebar-primary)] hover:bg-[var(--border)] content-stretch flex items-center justify-center px-[12px] py-[6px] rounded-[var(--radius-button-small)] cursor-pointer transition-colors"
        >
          <p className="leading-[14px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)]">Cancel</p>
          <div aria-hidden="true" className="absolute border-[var(--border)] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius-button-small)]" />
        </button>
        <button
          onClick={handleSubmit}
          disabled={!canSubmit}
          className={`content-stretch flex items-center justify-center px-[12px] py-[6px] rounded-[var(--radius-button-small)] transition-colors ${
            canSubmit
              ? 'bg-[var(--primary)] hover:bg-[var(--accent)] cursor-pointer'
              : 'bg-[var(--border)] cursor-not-allowed'
          }`}
        >
          <p className={`leading-[14px] text-[length:var(--text-label)] ${canSubmit ? 'text-[var(--primary-foreground)]' : 'text-[var(--muted-foreground)]'}`}>
            Submit Amendment
          </p>
        </button>
      </div>
    </div>
  );
}

// ── Amendment Display ──────────────────────────────────────────────────────────
// Shows a submitted amendment card

interface AmendmentDisplayProps {
  amendment: AmendmentData;
  onEdit?: () => void;
  onWithdraw?: () => void;
  isEditing?: boolean;
}

export function AmendmentDisplay({ amendment, onEdit, onWithdraw, isEditing }: AmendmentDisplayProps) {
  const typeLabel = AMENDMENT_TYPE_LABELS[amendment.type];
  const typeVariant = AMENDMENT_TYPE_VARIANTS[amendment.type] as any;

  return (
    <div className="bg-[var(--input-background)] content-stretch flex flex-col gap-[10px] items-start p-[12px] relative rounded-[var(--radius)] w-full">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />

      {/* Header: type badge + label + action buttons */}
      <div className="content-stretch flex items-center gap-[8px] relative shrink-0 w-full">
        <StatusChip label={typeLabel} variant={typeVariant} />
        <p className="font-semibold leading-[14px] text-[var(--foreground)] text-[length:var(--text-label)]">
          Amendment to {amendment.nodeLabel}
        </p>
        {/* Spacer */}
        <div className="flex-1" />
        {/* Edit / Withdraw action buttons — MentorActionButton style */}
        {onEdit && !isEditing && (
          <button
            onClick={onEdit}
            className="bg-[var(--card)] cursor-pointer relative rounded-[var(--radius-button-small)] shrink-0 hover:bg-[var(--sidebar-primary)] transition-colors"
          >
            <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[6px] relative">
              <p className="leading-[14px] relative shrink-0 text-[var(--foreground)] text-[length:var(--text-label)] whitespace-nowrap">Edit</p>
            </div>
            <div aria-hidden="true" className="absolute border-[var(--foreground)] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius-button-small)]" />
          </button>
        )}
        {onWithdraw && (
          <button
            onClick={onWithdraw}
            className="bg-[var(--card)] cursor-pointer relative rounded-[var(--radius-button-small)] shrink-0 hover:bg-[var(--sidebar-primary)] transition-colors"
          >
            <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[8px] py-[6px] relative">
              <p className="leading-[14px] relative shrink-0 text-[var(--foreground)] text-[length:var(--text-label)] whitespace-nowrap">Withdraw</p>
            </div>
            <div aria-hidden="true" className="absolute border-[var(--foreground)] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius-button-small)]" />
          </button>
        )}
      </div>

      {/* Divider after header */}
      <div className="bg-[#e3e6f0] h-px shrink-0 w-full" />

      {/* Content based on type */}
      {amendment.type === 'substitute' && amendment.proposedText && (
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">Proposed changes:</p>
          <p className="leading-[20px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">
            <DiffHighlight original={amendment.originalText} proposed={amendment.proposedText} />
          </p>
        </div>
      )}

      {amendment.type === 'omit' && (
        <p className="leading-[20px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">
          Proposed for removal
        </p>
      )}

      {amendment.type === 'insert' && amendment.proposedText && (
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">New text to insert:</p>
          <p className="leading-[20px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">
            {amendment.proposedText}
          </p>
        </div>
      )}

      {/* Reason if provided */}
      {amendment.reason && (
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">Reason:</p>
          <p className="leading-[20px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">
            {amendment.reason}
          </p>
        </div>
      )}

      {/* Footer: author + timestamp */}
      <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
        {/* Author tag */}
        <div className="bg-[var(--input-background)] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[var(--radius)] shrink-0">
          <div aria-hidden="true" className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="block max-w-none size-full rounded-full" src={amendment.memberAvatar} />
            </div>
            <p className="leading-[16px] overflow-hidden text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)] text-ellipsis whitespace-nowrap">
              {amendment.memberName}
            </p>
          </div>
        </div>

        {/* Timestamp */}
        {amendment.timestamp && (
          <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">{amendment.timestamp}</p>
        )}
      </div>
    </div>
  );
}

// ── Amendment Inline Component ─────────────────────────────────────────────────
// Wraps the form with animation (used inside BillAmendmentView)

interface AmendmentInputProps {
  type: AmendmentType;
  originalText: string;
  onSubmit: (data: { type: AmendmentType; proposedText?: string; reason?: string }) => void;
  onCancel: () => void;
}

export function AmendmentInput({ type, originalText, onSubmit, onCancel }: AmendmentInputProps) {
  return (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="overflow-hidden mt-[8px]"
    >
      <AmendmentForm type={type} originalText={originalText} onSubmit={onSubmit} onCancel={onCancel} />
    </motion.div>
  );
}
