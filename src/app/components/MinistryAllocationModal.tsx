import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { CompactActionButton } from './CompactActionButton';
import imgFlag from "figma:asset/e93f8184d4e0a003421c8b115cdf0646b0047716.png";
import imgFlag1 from "figma:asset/f3d28dab76472dda8be30af14710d0d9220a3f6c.png";
import imgFlag2 from "figma:asset/0f2334d3dd6983342dde2fc10d440067b79ce1fa.png";

// ── Types ────────────────────────────────────────────────────────────────────

interface CoalitionParty {
  id: number;
  name: string;
  shortName: string;
  flag: string;
}

interface Ministry {
  id: number;
  name: string;
}

interface BerthAllocation {
  cabinetMinisterPartyId: number;
  mosPartyId: number | null;
}

// ── Mock data ────────────────────────────────────────────────────────────────

const PM_PARTY_ID = 1;

const COALITION_PARTIES: CoalitionParty[] = [
  { id: 1, name: "Unity Progress Party", shortName: "UPP", flag: imgFlag },
  { id: 2, name: "Techno-Revolution Party", shortName: "TRP", flag: imgFlag1 },
  { id: 3, name: "Citizen's Voice Party", shortName: "CVP", flag: imgFlag2 },
];

const MINISTRIES: Ministry[] = [
  { id: 1, name: "Ministry of Finance" },
  { id: 2, name: "Ministry of Home Affairs" },
  { id: 3, name: "Ministry of External Affairs" },
  { id: 4, name: "Ministry of Education" },
  { id: 5, name: "Ministry of Health & Family Welfare" },
  { id: 6, name: "Ministry of Defence" },
];

// ── Party Dropdown ───────────────────────────────────────────────────────────

function PartyDropdown({
  selectedPartyId,
  onChange,
  allowNone,
}: {
  selectedPartyId: number | null;
  onChange: (partyId: number | null) => void;
  allowNone?: boolean;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [isOpen]);

  const selectedParty = selectedPartyId !== null
    ? COALITION_PARTIES.find(p => p.id === selectedPartyId)
    : null;

  return (
    <div ref={ref} className="relative flex-1">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="flex items-center gap-[8px] w-full px-[10px] py-[6px] rounded-[var(--radius-button-small)] border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--input-background)] transition-colors cursor-pointer"
      >
        {selectedParty ? (
          <>
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="block max-w-none size-full rounded-[2px] object-cover" src={selectedParty.flag} />
            </div>
            <p className="leading-[16px] text-[var(--foreground)] text-[length:var(--text-base)] truncate flex-1 text-left">
              {selectedParty.name}
            </p>
          </>
        ) : (
          <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-base)] truncate flex-1 text-left">
            None
          </p>
        )}
        <ChevronDown className={`size-[14px] shrink-0 text-[var(--muted-foreground)] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+4px)] bg-[var(--card)] rounded-[var(--radius-button-small)] shadow-[var(--elevation-sm)] z-20 overflow-hidden min-w-full w-max">
          <div className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-button-small)]" />

          {COALITION_PARTIES.map((party) => (
            <button
              key={party.id}
              onClick={() => { onChange(party.id); setIsOpen(false); }}
              className={`relative flex items-center gap-[8px] w-full px-[10px] py-[8px] text-[length:var(--text-base)] leading-[16px] hover:bg-[var(--input-background)] transition-colors cursor-pointer ${
                selectedPartyId === party.id ? 'bg-[var(--input-background)]' : ''
              }`}
            >
              <div className="relative shrink-0 size-[16px]">
                <img alt="" className="block max-w-none size-full rounded-[2px] object-cover" src={party.flag} />
              </div>
              <span className="text-[var(--foreground)] truncate">{party.name}</span>
              {party.id === PM_PARTY_ID && (
                <span className="text-[var(--muted-foreground)] text-[length:var(--text-label)] ml-auto shrink-0 pl-[8px]">(Your party)</span>
              )}
            </button>
          ))}

          {/* None option — only for MoS */}
          {allowNone && (
            <>
              <div className="relative mx-[8px] h-px bg-[var(--sidebar-primary)]" />
              <button
                onClick={() => { onChange(null); setIsOpen(false); }}
                className={`relative flex items-center gap-[8px] w-full px-[10px] py-[8px] text-[length:var(--text-base)] leading-[16px] text-[var(--muted-foreground)] hover:bg-[var(--input-background)] transition-colors cursor-pointer ${
                  selectedPartyId === null ? 'bg-[var(--input-background)]' : ''
                }`}
              >
                No MoS for this ministry
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
}

// ── Ministry Card ────────────────────────────────────────────────────────────

function MinistryCard({
  ministry,
  allocation,
  onUpdate,
}: {
  ministry: Ministry;
  allocation: BerthAllocation;
  onUpdate: (updated: BerthAllocation) => void;
}) {
  return (
    <div className="bg-white relative rounded-[var(--radius-card)] shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]"
      />
      <div className="content-stretch flex flex-col gap-[14px] items-start p-[16px] relative w-full">
        {/* Ministry title */}
        <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">
          {ministry.name}
        </p>

        {/* Cabinet Minister row */}
        <div className="flex items-center gap-[12px] w-full">
          <p className="w-[120px] shrink-0 leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-base)]">
            Cabinet Minister
          </p>
          <PartyDropdown
            selectedPartyId={allocation.cabinetMinisterPartyId}
            onChange={(partyId) => onUpdate({ ...allocation, cabinetMinisterPartyId: partyId ?? PM_PARTY_ID })}
          />
        </div>

        {/* Minister of State row */}
        <div className="flex items-center gap-[12px] w-full">
          <p className="w-[120px] shrink-0 leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-base)]">
            Minister of State
          </p>
          <PartyDropdown
            selectedPartyId={allocation.mosPartyId}
            onChange={(partyId) => onUpdate({ ...allocation, mosPartyId: partyId })}
            allowNone
          />
        </div>
      </div>
    </div>
  );
}

// ── Summary Tracker ──────────────────────────────────────────────────────────

function AllocationSummary({ allocations, onConfirm }: { allocations: Record<number, BerthAllocation>; onConfirm: () => void }) {
  const partyCounts: Record<number, { minister: number; mos: number }> = {};
  COALITION_PARTIES.forEach(p => { partyCounts[p.id] = { minister: 0, mos: 0 }; });

  Object.entries(allocations).forEach(([ministryIdStr, alloc]) => {
    const ministryId = Number(ministryIdStr);
    const ministry = MINISTRIES.find(m => m.id === ministryId);
    if (!ministry) return;

    if (partyCounts[alloc.cabinetMinisterPartyId]) {
      partyCounts[alloc.cabinetMinisterPartyId].minister += 1;
    }
    if (alloc.mosPartyId !== null && partyCounts[alloc.mosPartyId]) {
      partyCounts[alloc.mosPartyId].mos += 1;
    }
  });

  return (
    <div className="flex flex-col gap-[8px] w-full">
      <div className="flex flex-wrap gap-[8px]">
        {COALITION_PARTIES.map(party => {
          const counts = partyCounts[party.id];
          const total = counts.minister + counts.mos;
          return (
            <div key={party.id} className="flex items-center gap-[6px] bg-[var(--card)] rounded-[var(--radius-button-small)] px-[8px] py-[4px] border border-[var(--border)]">
              <div className="relative shrink-0 size-[14px]">
                <img alt="" className="block max-w-none size-full rounded-[2px] object-cover" src={party.flag} />
              </div>
              <p className="leading-[14px] text-[var(--foreground)] text-[length:var(--text-label)]">
                {party.shortName}
              </p>
              <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">
                {total === 0 ? '—' : `${counts.minister} Minister${counts.minister !== 1 ? 's' : ''}${counts.mos > 0 ? `, ${counts.mos} MoS` : ''}`}
              </p>
            </div>
          );
        })}
      </div>
      <CompactActionButton
        label="Confirm Allocation"
        variant="primary"
        onClick={onConfirm}
        className="self-start"
      />
    </div>
  );
}

// ── Main Modal ───────────────────────────────────────────────────────────────

interface MinistryAllocationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: (allocations: Record<number, BerthAllocation>) => void;
}

export function MinistryAllocationModal({ isOpen, onClose, onConfirm }: MinistryAllocationModalProps) {
  const [allocations, setAllocations] = useState<Record<number, BerthAllocation>>(() => {
    const initial: Record<number, BerthAllocation> = {};
    MINISTRIES.forEach(m => {
      initial[m.id] = {
        cabinetMinisterPartyId: PM_PARTY_ID,
        mosPartyId: null,
      };
    });
    return initial;
  });

  if (!isOpen) return null;

  const handleUpdate = (ministryId: number, updated: BerthAllocation) => {
    setAllocations(prev => ({ ...prev, [ministryId]: updated }));
  };

  const handleConfirm = () => {
    onConfirm?.(allocations);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 z-50" onClick={onClose} />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white content-stretch flex flex-col gap-[20px] items-start p-[24px] rounded-[var(--radius-card)] w-[560px] z-50 max-h-[85vh] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute border border-[var(--sidebar-primary)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] shadow-[0px_2px_2px_0px_rgba(47,62,109,0.2)]"
        />

        {/* Header */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <p className="font-bold leading-[32px] relative shrink-0 text-[var(--foreground)] text-[length:var(--text-h2)]">
            Allocate Ministry Berths
          </p>
          <p className="leading-[20px] relative shrink-0 text-[var(--muted-foreground)] text-[length:var(--text-base)] w-full">
            Assign each ministry berth to a coalition partner party. Party presidents will then nominate members for their allocated berths.
          </p>
        </div>

        {/* Summary tracker */}
        <div className="w-full relative shrink-0 bg-[var(--input-background)] rounded-[var(--radius)] p-[16px]">
          <AllocationSummary allocations={allocations} onConfirm={handleConfirm} />
        </div>

        {/* Scrollable ministry cards */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full overflow-y-auto scrollbar-hide flex-1 min-h-0">
          {MINISTRIES.map((ministry) => (
            <MinistryCard
              key={ministry.id}
              ministry={ministry}
              allocation={allocations[ministry.id]}
              onUpdate={(updated) => handleUpdate(ministry.id, updated)}
            />
          ))}
        </div>
      </div>
    </>
  );
}