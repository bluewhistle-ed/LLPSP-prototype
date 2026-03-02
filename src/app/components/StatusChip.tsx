/**
 * Shared StatusChip component.
 *
 * Variant keys map to CSS custom properties defined in /src/styles/theme.css:
 *   --status-{variant}-bg, --status-{variant}-border, --status-{variant}-text
 *
 * Supported variants: approved, pending, rejected, default, mentor, role,
 *   treasury, alliance, warning, urgent, progress, info, inactive, notification
 */

import type { ReactNode } from 'react';

export type StatusChipVariant =
  | 'approved'
  | 'pending'
  | 'rejected'
  | 'default'
  | 'mentor'
  | 'role'
  | 'treasury'
  | 'alliance'
  | 'warning'
  | 'urgent'
  | 'progress'
  | 'info'
  | 'inactive'
  | 'outline'
  | 'notification';

/** Map human-readable status strings to design-system variants. */
export const STATUS_VARIANT_MAP: Record<string, StatusChipVariant> = {
  // Status labels
  'Published': 'approved',
  'Approved': 'approved',
  'Active': 'approved',
  'Waiting for approval': 'pending',
  'Pending': 'pending',
  'Under Review': 'pending',
  'Rejected': 'rejected',
  'Submitted': 'default',
  'Inactive': 'inactive',
  // Role labels
  'Mentor': 'mentor',
  'President': 'role',
  'Vice President': 'mentor',
  'V. President': 'mentor',
  // Category labels
  'Treasury': 'treasury',
  'Government': 'treasury',
  'Private Member': 'default',
  'Minister': 'warning',
  'MoS': 'outline',
  'Shadow Min.': 'warning',
  'Shadow MoS': 'outline',
  'Shadow Minister': 'warning',
  // Amendment types
  'Substitute': 'warning',
  'Omit': 'urgent',
  'Insert': 'progress',
};

interface StatusChipProps {
  /** The label shown inside the chip. */
  label: string;
  /**
   * Optionally force a specific variant regardless of the label text.
   * When omitted the variant is derived from the label via STATUS_VARIANT_MAP.
   */
  variant?: StatusChipVariant;
  /**
   * Optional icon or other content rendered before the label.
   * Icons should be 12×12 to match the chip's scale.
   */
  children?: ReactNode;
}

export function StatusChip({ label, variant, children }: StatusChipProps) {
  const resolvedVariant = variant ?? STATUS_VARIANT_MAP[label] ?? 'default';

  return (
    <div
      className="relative rounded-[var(--radius-chip)] w-fit shrink-0"
      style={{ backgroundColor: `var(--status-${resolvedVariant}-bg)` }}
    >
      <div
        aria-hidden="true"
        className="absolute border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius-chip)]"
        style={{ borderColor: `var(--status-${resolvedVariant}-border)` }}
      />
      <div className="flex flex-row items-center">
        <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative">
          {children}
          <p
            className="leading-[14px] overflow-hidden relative shrink-0 text-[length:var(--text-label)] text-ellipsis"
            style={{ color: `var(--status-${resolvedVariant}-text)` }}
          >
            {label}
          </p>
        </div>
      </div>
    </div>
  );
}