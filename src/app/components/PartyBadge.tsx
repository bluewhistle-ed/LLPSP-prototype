/**
 * Shared PartyBadge component.
 *
 * Displays a party abbreviation in a neutral-coloured chip that matches the
 * dimensions and border style of StatusChip. Uses CSS variables from
 * /src/styles/theme.css so the look can be updated in one place.
 *
 * Automatically renders the party flag from the centralized asset registry.
 */

import { FLAG_UPP, FLAG_TRP, FLAG_CVP } from '../data/assets';

/** Map party abbreviations to their flag assets. */
const PARTY_FLAGS: Record<string, string> = {
  UPP: FLAG_UPP,
  TRP: FLAG_TRP,
  CVP: FLAG_CVP,
};

interface PartyBadgeProps {
  /** Party abbreviation, e.g. "UPP", "TRP", "CVP". */
  party: string;
}

export function PartyBadge({ party }: PartyBadgeProps) {
  const flag = PARTY_FLAGS[party];

  return (
    <div
      className="relative rounded-[var(--radius-chip)] w-fit shrink-0"
      style={{ backgroundColor: 'transparent' }}
    >
      <div
        aria-hidden="true"
        className="absolute border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius-chip)]"
        style={{ borderColor: 'var(--status-default-border)' }}
      />
      <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative">
        {flag && (
          <img
            alt=""
            className="block max-w-none rounded-full object-cover shrink-0 size-[14px]"
            src={flag}
          />
        )}
        <p
          className="leading-[14px] overflow-hidden relative shrink-0 text-[length:var(--text-label)] text-ellipsis"
          style={{ color: 'var(--sidebar-primary-foreground)' }}
        >
          {party}
        </p>
      </div>
    </div>
  );
}