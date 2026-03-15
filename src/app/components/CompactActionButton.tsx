import type { ReactNode, MouseEvent } from 'react';

// ── Variant styles ───────────────────────────────────────────────────────────

const VARIANT_CLASSES = {
  primary:
    'bg-[var(--primary)] text-[var(--primary-foreground)] hover:opacity-90 transition-opacity',
  secondary:
    'bg-[var(--sidebar-primary)] text-[var(--sidebar-primary-foreground)] hover:bg-[var(--border)] transition-colors',
  outline:
    'bg-transparent border border-[var(--foreground)] text-[var(--foreground)] hover:bg-[var(--input-background)] transition-colors',
  'outline-muted':
    'bg-transparent border border-[var(--muted-foreground)] text-[var(--muted-foreground)]',
  progress:
    'bg-[var(--status-progress-bg)] border border-[var(--status-progress-text)] text-[var(--status-progress-text)]',
  approved:
    'bg-[var(--status-approved-bg)] border border-[var(--status-approved-text)] text-[var(--status-approved-text)]',
  destructive:
    'bg-transparent border border-[var(--status-rejected-text)] text-[var(--status-rejected-text)] hover:bg-[var(--status-rejected-bg)] transition-colors',
  danger:
    'bg-[var(--status-rejected-text)] text-white hover:opacity-90 transition-opacity',
} as const;

type Variant = keyof typeof VARIANT_CLASSES;

// ── Props ────────────────────────────────────────────────────────────────────

interface CompactActionButtonProps {
  /** Button label text */
  label: string;
  /** Visual variant — defaults to "primary" */
  variant?: Variant;
  /** Optional icon element rendered beside the label */
  icon?: ReactNode;
  /** Side the icon appears on — defaults to "left" */
  iconPosition?: 'left' | 'right';
  /** Click handler — receives the native MouseEvent so callers can stopPropagation */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /** Disabled state — greyed out, not clickable */
  disabled?: boolean;
  /** Extra Tailwind classes (e.g. "self-start", "shrink-0", "relative z-10") */
  className?: string;
}

// ── Component ────────────────────────────────────────────────────────────────

export function CompactActionButton({
  label,
  variant = 'primary',
  icon,
  iconPosition = 'left',
  onClick,
  disabled = false,
  className = '',
}: CompactActionButtonProps) {
  const base =
    'flex items-center gap-[6px] px-[12px] py-[6px] rounded-[var(--radius-button-small)] text-[length:var(--text-label)] leading-[14px] cursor-pointer';

  const variantClass = disabled
    ? 'bg-[var(--border)] text-[var(--muted-foreground)] cursor-not-allowed opacity-70'
    : VARIANT_CLASSES[variant];

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${base} ${variantClass} ${className}`}
    >
      {icon && iconPosition === 'left' && icon}
      {label}
      {icon && iconPosition === 'right' && icon}
    </button>
  );
}