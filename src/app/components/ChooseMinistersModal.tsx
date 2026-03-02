import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { CompactActionButton } from './CompactActionButton';
import imgFlag from "figma:asset/e93f8184d4e0a003421c8b115cdf0646b0047716.png";
import imgFlag1 from "figma:asset/f3d28dab76472dda8be30af14710d0d9220a3f6c.png";
import imgFlag2 from "figma:asset/0f2334d3dd6983342dde2fc10d440067b79ce1fa.png";
import imgUnsplash1 from "figma:asset/2255efa6e3d4e9cd3d5daf58f5f5df679f8ce61b.png";
import imgUnsplash2 from "figma:asset/bdd8fbc00e625d0c6fe14c2c8af968a19e0b5258.png";
import imgUnsplash3 from "figma:asset/666aaf651ac2fa50457b5314dddb3ef527236357.png";
import imgUnsplash4 from "figma:asset/0c010bee9a65e7abc8fbcfcd9aabb12192721142.png";
import imgUnsplash5 from "figma:asset/4fe1dc6012c7950c64680d0050aa8870cf6b7629.png";
import imgUnsplash6 from "figma:asset/970678de1f18c883f87566bc9d6cb8a33ce7c22b.png";
import imgUnsplash7 from "figma:asset/1fe3a74538117eb749053e9327f4316a11266495.png";

// ── Types ────────────────────────────────────────────────────────────────────

interface PartyMember {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

interface CoalitionParty {
  id: number;
  name: string;
  shortName: string;
  flag: string;
  members: PartyMember[];
}

interface AllocatedBerth {
  ministryId: number;
  ministryName: string;
  roleType: 'Minister' | 'MoS';
}

/** Berths grouped by ministry for card rendering */
interface MinistryGroup {
  ministryId: number;
  ministryName: string;
  hasMinister: boolean;
  hasMoS: boolean;
}

// ── Mock data ────────────────────────────────────────────────────────────────

const COALITION_PARTIES: CoalitionParty[] = [
  {
    id: 1,
    name: "Unity Progress Party",
    shortName: "UPP",
    flag: imgFlag,
    members: [
      { id: 1, name: "Sheilah T. Sayasane", role: "President", avatar: imgUnsplash1 },
      { id: 2, name: "Roy X. Hinde", role: "V.President", avatar: imgUnsplash2 },
      { id: 3, name: "Aleta H. Starcher", role: "Member", avatar: imgUnsplash3 },
      { id: 4, name: "Mai G. Sollom", role: "Member", avatar: imgUnsplash4 },
      { id: 5, name: "Latricia W. Silletti", role: "Member", avatar: imgUnsplash5 },
      { id: 6, name: "Adrianne P. Tillis", role: "Member", avatar: imgUnsplash6 },
      { id: 7, name: "Elvira E. Aus", role: "Member", avatar: imgUnsplash7 },
    ],
  },
  {
    id: 2,
    name: "Techno-Revolution Party",
    shortName: "TRP",
    flag: imgFlag1,
    members: [
      { id: 8, name: "Alex Johnson", role: "President", avatar: imgUnsplash4 },
      { id: 9, name: "Marcus T. Reynolds", role: "V.President", avatar: imgUnsplash7 },
      { id: 10, name: "David R. Patterson", role: "Member", avatar: imgUnsplash6 },
      { id: 11, name: "Sophia L. Martinez", role: "Member", avatar: imgUnsplash5 },
      { id: 12, name: "Nathan S. Wright", role: "Member", avatar: imgUnsplash2 },
    ],
  },
  {
    id: 3,
    name: "Citizen's Voice Party",
    shortName: "CVP",
    flag: imgFlag2,
    members: [
      { id: 13, name: "Alice Thompson", role: "President", avatar: imgUnsplash3 },
      { id: 14, name: "Isabella M. Chen", role: "V.President", avatar: imgUnsplash1 },
      { id: 15, name: "James K. Anderson", role: "Member", avatar: imgUnsplash7 },
      { id: 16, name: "Emily R. Thompson", role: "Member", avatar: imgUnsplash4 },
    ],
  },
];

// Simulated PM allocation — key: partyId → berths allocated to that party
// TRP deliberately gets both Minister AND MoS for Health to demo the grouped-card layout
const PM_ALLOCATION: Record<number, AllocatedBerth[]> = {
  1: [
    { ministryId: 1, ministryName: "Ministry of Finance", roleType: "Minister" },
    { ministryId: 2, ministryName: "Ministry of Home Affairs", roleType: "Minister" },
    { ministryId: 4, ministryName: "Ministry of Education", roleType: "MoS" },
    { ministryId: 6, ministryName: "Ministry of Defence", roleType: "MoS" },
  ],
  2: [
    { ministryId: 3, ministryName: "Ministry of External Affairs", roleType: "Minister" },
    { ministryId: 5, ministryName: "Ministry of Health & Family Welfare", roleType: "Minister" },
    { ministryId: 5, ministryName: "Ministry of Health & Family Welfare", roleType: "MoS" },
    { ministryId: 1, ministryName: "Ministry of Finance", roleType: "MoS" },
  ],
  3: [
    { ministryId: 4, ministryName: "Ministry of Education", roleType: "Minister" },
    { ministryId: 6, ministryName: "Ministry of Defence", roleType: "Minister" },
    { ministryId: 2, ministryName: "Ministry of Home Affairs", roleType: "MoS" },
  ],
};

const DEMO_PARTY_ID = 2;

// ── Helpers ──────────────────────────────────────────────────────────────────

/** Group flat berth list into one entry per ministry */
function groupByMinistry(berths: AllocatedBerth[]): MinistryGroup[] {
  const map = new Map<number, MinistryGroup>();
  berths.forEach(b => {
    const existing = map.get(b.ministryId);
    if (existing) {
      if (b.roleType === 'Minister') existing.hasMinister = true;
      else existing.hasMoS = true;
    } else {
      map.set(b.ministryId, {
        ministryId: b.ministryId,
        ministryName: b.ministryName,
        hasMinister: b.roleType === 'Minister',
        hasMoS: b.roleType === 'MoS',
      });
    }
  });
  return Array.from(map.values());
}

/** Nomination key for a berth slot */
function berthKey(ministryId: number, roleType: 'Minister' | 'MoS') {
  return `${ministryId}-${roleType}`;
}

// ── Member Dropdown ──────────────────────────────────────────────────────────

function MemberDropdown({
  selectedMemberId,
  eligibleMembers,
  disabledMemberIds,
  onChange,
}: {
  selectedMemberId: number | null;
  eligibleMembers: PartyMember[];
  disabledMemberIds: Set<number>;
  onChange: (memberId: number | null) => void;
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

  const selectedMember = selectedMemberId !== null
    ? eligibleMembers.find(m => m.id === selectedMemberId) ?? null
    : null;

  return (
    <div ref={ref} className="relative flex-1">
      <button
        onClick={() => setIsOpen(prev => !prev)}
        className="flex items-center gap-[8px] w-full px-[10px] py-[6px] rounded-[var(--radius-button-small)] border border-[var(--border)] bg-[var(--card)] hover:bg-[var(--input-background)] transition-colors cursor-pointer"
      >
        {selectedMember ? (
          <>
            <div className="relative shrink-0 size-[20px]">
              <img alt="" className="block max-w-none size-full rounded-full object-cover" src={selectedMember.avatar} />
            </div>
            <p className="leading-[16px] text-[var(--foreground)] text-[length:var(--text-base)] truncate flex-1 text-left">
              {selectedMember.name}
            </p>
          </>
        ) : (
          <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-base)] truncate flex-1 text-left">
            Select a member
          </p>
        )}
        <ChevronDown className={`size-[14px] shrink-0 text-[var(--muted-foreground)] transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute left-0 top-[calc(100%+4px)] bg-[var(--card)] rounded-[var(--radius-button-small)] shadow-[var(--elevation-sm)] z-20 overflow-hidden min-w-full w-max max-h-[200px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          <div className="absolute border border-[var(--border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-button-small)]" />

          {/* Clear selection */}
          {selectedMemberId !== null && (
            <>
              <button
                onClick={() => { onChange(null); setIsOpen(false); }}
                className="relative flex items-center gap-[8px] w-full px-[10px] py-[8px] text-[length:var(--text-base)] leading-[16px] text-[var(--muted-foreground)] hover:bg-[var(--input-background)] transition-colors cursor-pointer"
              >
                Clear selection
              </button>
              <div className="relative mx-[8px] h-px bg-[var(--sidebar-primary)]" />
            </>
          )}

          {eligibleMembers.map((member) => {
            const isDisabled = disabledMemberIds.has(member.id) && member.id !== selectedMemberId;
            return (
              <button
                key={member.id}
                onClick={() => {
                  if (!isDisabled) {
                    onChange(member.id);
                    setIsOpen(false);
                  }
                }}
                className={`relative flex items-center gap-[8px] w-full px-[10px] py-[8px] text-[length:var(--text-base)] leading-[16px] transition-colors ${
                  isDisabled
                    ? 'opacity-40 cursor-not-allowed'
                    : 'hover:bg-[var(--input-background)] cursor-pointer'
                } ${
                  selectedMemberId === member.id ? 'bg-[var(--input-background)]' : ''
                }`}
              >
                <div className="relative shrink-0 size-[20px]">
                  <img alt="" className="block max-w-none size-full rounded-full object-cover" src={member.avatar} />
                </div>
                <span className="text-[var(--foreground)] truncate">{member.name}</span>
                {member.role !== 'Member' && !isDisabled && (
                  <span className="text-[var(--muted-foreground)] text-[length:var(--text-label)] ml-auto shrink-0 pl-[8px]">
                    {member.role === 'V.President' ? 'V. President' : member.role}
                  </span>
                )}
                {isDisabled && (
                  <span className="text-[var(--muted-foreground)] text-[length:var(--text-label)] ml-auto shrink-0 pl-[8px]">
                    Assigned
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ── Ministry Card (mirrors MinistryAllocationModal MinistryCard) ──────────────

function MinistryCard({
  group,
  nominations,
  eligibleMembers,
  disabledMemberIds,
  onUpdate,
}: {
  group: MinistryGroup;
  nominations: Record<string, number | null>;
  eligibleMembers: PartyMember[];
  disabledMemberIds: Set<number>;
  onUpdate: (key: string, memberId: number | null) => void;
}) {
  const ministerKey = berthKey(group.ministryId, 'Minister');
  const mosKey = berthKey(group.ministryId, 'MoS');

  return (
    <div className="bg-white relative rounded-[var(--radius-card)] shrink-0 w-full">
      <div
        aria-hidden="true"
        className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]"
      />
      <div className="content-stretch flex flex-col gap-[14px] items-start p-[16px] relative w-full">
        {/* Ministry title */}
        <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">
          {group.ministryName}
        </p>

        {/* Cabinet Minister row */}
        {group.hasMinister && (
          <div className="flex items-center gap-[12px] w-full">
            <p className="w-[120px] shrink-0 leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-base)]">
              Cabinet Minister
            </p>
            <MemberDropdown
              selectedMemberId={nominations[ministerKey] ?? null}
              eligibleMembers={eligibleMembers}
              disabledMemberIds={disabledMemberIds}
              onChange={(id) => onUpdate(ministerKey, id)}
            />
          </div>
        )}

        {/* Minister of State row */}
        {group.hasMoS && (
          <div className="flex items-center gap-[12px] w-full">
            <p className="w-[120px] shrink-0 leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-base)]">
              Minister of State
            </p>
            <MemberDropdown
              selectedMemberId={nominations[mosKey] ?? null}
              eligibleMembers={eligibleMembers}
              disabledMemberIds={disabledMemberIds}
              onChange={(id) => onUpdate(mosKey, id)}
            />
          </div>
        )}
      </div>
    </div>
  );
}

// ── Nomination Summary ───────────────────────────────────────────────────────

function NominationSummary({
  berths,
  nominations,
  eligibleMembers,
  allFilled,
  onConfirm,
}: {
  berths: AllocatedBerth[];
  nominations: Record<string, number | null>;
  eligibleMembers: PartyMember[];
  allFilled: boolean;
  onConfirm: () => void;
}) {
  const filledCount = Object.values(nominations).filter(v => v !== null).length;
  const totalCount = berths.length;

  return (
    <div className="flex flex-col gap-[10px] w-full">
      {/* Progress + assigned chips */}
      <div className="flex flex-wrap gap-[6px] items-center">
        <p className="leading-[14px] text-[var(--foreground)] text-[length:var(--text-label)]">
          {filledCount}/{totalCount} berths assigned
        </p>
      </div>

      <CompactActionButton
        label="Confirm Nominations"
        variant="primary"
        onClick={onConfirm}
        disabled={!allFilled}
        className="self-start"
      />
    </div>
  );
}

// ── Main Modal ───────────────────────────────────────────────────────────────

interface ChooseMinistersModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm?: (nominations: Record<string, number>) => void;
  /** Which party the logged-in president belongs to — defaults to DEMO_PARTY_ID */
  partyId?: number;
}

export function ChooseMinistersModal({
  isOpen,
  onClose,
  onConfirm,
  partyId = DEMO_PARTY_ID,
}: ChooseMinistersModalProps) {
  const berths = PM_ALLOCATION[partyId] ?? [];
  const party = COALITION_PARTIES.find(p => p.id === partyId);
  const ministryGroups = groupByMinistry(berths);

  // Eligible members: all party members except the president
  const eligibleMembers = party
    ? party.members.filter(m => m.role !== 'President')
    : [];

  // Nominations state: key = "ministryId-roleType", value = memberId | null
  const [nominations, setNominations] = useState<Record<string, number | null>>(() => {
    const initial: Record<string, number | null> = {};
    berths.forEach(b => { initial[berthKey(b.ministryId, b.roleType)] = null; });
    return initial;
  });

  // Reset when modal opens / party changes
  useEffect(() => {
    if (isOpen) {
      const initial: Record<string, number | null> = {};
      berths.forEach(b => { initial[berthKey(b.ministryId, b.roleType)] = null; });
      setNominations(initial);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, partyId]);

  if (!isOpen || !party) return null;

  const assignedMemberIds = new Set(
    Object.values(nominations).filter((v): v is number => v !== null)
  );

  const allFilled = berths.every(b => nominations[berthKey(b.ministryId, b.roleType)] !== null);

  const handleUpdate = (key: string, memberId: number | null) => {
    setNominations(prev => ({ ...prev, [key]: memberId }));
  };

  const handleConfirm = () => {
    if (!allFilled) return;
    const final: Record<string, number> = {};
    Object.entries(nominations).forEach(([k, v]) => { if (v !== null) final[k] = v; });
    onConfirm?.(final);
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
            Choose Ministers
          </p>
          <p className="leading-[20px] relative text-[var(--muted-foreground)] text-[length:var(--text-base)] w-full">
            Nominate {party.name} members for the berths allocated by the Prime Minister.
          </p>
        </div>

        {/* Summary tracker */}
        <div className="w-full relative shrink-0 bg-[var(--input-background)] rounded-[var(--radius)] p-[16px]">
          <NominationSummary
            berths={berths}
            nominations={nominations}
            eligibleMembers={eligibleMembers}
            allFilled={allFilled}
            onConfirm={handleConfirm}
          />
        </div>

        {/* Scrollable ministry cards — grouped by ministry, mirroring PM's allocation modal */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden flex-1 min-h-0">
          {ministryGroups.map((group) => (
            <MinistryCard
              key={group.ministryId}
              group={group}
              nominations={nominations}
              eligibleMembers={eligibleMembers}
              disabledMemberIds={assignedMemberIds}
              onUpdate={handleUpdate}
            />
          ))}
        </div>
      </div>
    </>
  );
}