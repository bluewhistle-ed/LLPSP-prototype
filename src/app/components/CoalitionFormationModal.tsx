import imgFlag from "figma:asset/e93f8184d4e0a003421c8b115cdf0646b0047716.png";
import imgFlag1 from "figma:asset/f3d28dab76472dda8be30af14710d0d9220a3f6c.png";
import imgFlag2 from "figma:asset/0f2334d3dd6983342dde2fc10d440067b79ce1fa.png";
import svgPathsFlag from "../../imports/svg-txfaz6sn9l";
import { StatusChip } from './StatusChip';
import { CompactActionButton } from './CompactActionButton';
import { useState, useRef, useEffect } from "react";
import { Check, X, ChevronDown, Lock, CheckCircle2 } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────

interface Party {
  id: number;
  name: string;
  flag: string;
  president: string;
  memberCount: number;
}

export interface CoalitionRequest {
  fromPartyId: number;
  toPartyId: number;
  status: 'pending' | 'accepted' | 'rejected';
}

interface CoalitionFormationModalProps {
  isOpen: boolean;
  onClose: () => void;
  /** Called when all partners have responded after lock-in */
  onLockComplete?: (result: { hasMajority: boolean; finalSeats: number; totalSeats: number }) => void;
}

// ── Mock data ────────────────────────────────────────────────────────────────

const CURRENT_PARTY_ID = 1; // The current user's party

const ALL_PARTIES: Party[] = [
  { id: 1, name: "Unity Progress Party", flag: imgFlag, president: "Sheilah T. Sayasane", memberCount: 15 },
  { id: 2, name: "Techno-Revolution Party", flag: imgFlag1, president: "Alex Johnson", memberCount: 12 },
  { id: 3, name: "Citizen's Voice Party", flag: imgFlag2, president: "Alice Thompson", memberCount: 10 },
  { id: 4, name: "National Democratic Front", flag: imgFlag1, president: "Rajiv M. Kapoor", memberCount: 9 },
  { id: 5, name: "Green Future Alliance", flag: imgFlag2, president: "Priya S. Nair", memberCount: 8 },
  { id: 6, name: "People's Reform Party", flag: imgFlag, president: "David K. Osei", memberCount: 11 },
];

const TOTAL_HOUSE_SEATS = ALL_PARTIES.reduce((sum, p) => sum + p.memberCount, 0);
const MAJORITY_THRESHOLD = Math.floor(TOTAL_HOUSE_SEATS / 2) + 1;

// ── Coalition Seat Tracker ───────────────────────────────────────────────────

function CoalitionSeatTracker({
  currentSeats,
  majorityThreshold,
  totalSeats,
  partnerCount,
  lockState,
}: {
  currentSeats: number;
  majorityThreshold: number;
  totalSeats: number;
  partnerCount: number;
  lockState: 'unlocked' | 'in-progress' | 'complete';
}) {
  const percentage = Math.min((currentSeats / totalSeats) * 100, 100);
  const majorityPercentage = (majorityThreshold / totalSeats) * 100;
  const hasMajority = currentSeats >= majorityThreshold;

  return (
    <div className="flex flex-col gap-[12px] w-full">
      {/* Seat count row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-[8px]">
          <p className="font-semibold leading-[16px] text-[var(--foreground)] text-[length:var(--text-base)]">
            {currentSeats} seats
          </p>
          <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">
            of {majorityThreshold} needed
          </p>
        </div>
        <div className="flex items-center gap-[6px]">
          {lockState === 'complete' ? (
            hasMajority ? (
              <StatusChip label="Government" variant="approved">
                <Check className="size-[12px] shrink-0" style={{ color: 'var(--status-approved-text)' }} />
              </StatusChip>
            ) : (
              <StatusChip label="Opposition" variant="rejected" />
            )
          ) : lockState === 'in-progress' ? (
            <StatusChip label="Calculating" variant="pending" />
          ) : hasMajority ? (
            <StatusChip label="Majority Reached" variant="alliance" />
          ) : null}
        </div>
      </div>

      {/* Progress bar */}
      <div className="relative w-full">
        <div className="w-full h-[8px] bg-[var(--sidebar-primary)] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500 ease-out"
            style={{
              width: `${percentage}%`,
              backgroundColor: lockState === 'complete' && hasMajority ? 'var(--status-approved-text)' : 'var(--primary)',
            }}
          />
        </div>
        {/* Majority threshold marker */}
        <div
          className="absolute top-0 h-[8px] w-[2px] bg-[var(--muted-foreground)]"
          style={{ left: `${majorityPercentage}%` }}
        />
        <div
          className="absolute top-[12px] text-[10px] leading-[12px] text-[var(--muted-foreground)] -translate-x-1/2"
          style={{ left: `${majorityPercentage}%` }}
        >
          {majorityThreshold}
        </div>
      </div>

      {/* Partner summary */}
      
    </div>
  );
}

// ── Party row inside modal ───────────────────────────────────────────────────

function CoalitionPartyRow({
  party,
  requestState,
  coalitionLocked,
  lockConfirmation,
  isCoalitionPartner,
  onSendRequest,
  onWithdraw,
  onAccept,
  onReject,
  onRemove,
}: {
  party: Party;
  requestState: 'none' | 'sent-pending' | 'received-pending' | 'accepted' | 'rejected';
  coalitionLocked: boolean;
  lockConfirmation?: 'waiting' | 'confirmed' | 'declined';
  isCoalitionPartner?: boolean;
  onSendRequest: () => void;
  onWithdraw: () => void;
  onAccept: () => void;
  onReject: () => void;
  onRemove: () => void;
}) {
  const [receivedDropdownOpen, setReceivedDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    if (!receivedDropdownOpen) return;
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setReceivedDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [receivedDropdownOpen]);

  // Render the action that appears in the chips row (bottom line)
  const renderChipsRowAction = () => {
    return null;
  };

  const isCompact = requestState === 'none' || requestState === 'sent-pending' || requestState === 'received-pending' || requestState === 'rejected' || requestState === 'accepted';

  // Determine if this row should appear disabled
  const isDisabled = lockConfirmation === 'declined';

  // Border color depends on confirmation state
  const borderClass = lockConfirmation === 'declined'
    ? 'border-[var(--status-rejected-border,var(--sidebar-primary))]'
    : isCoalitionPartner
      ? 'border-[var(--status-approved-border)]'
      : 'border-[var(--sidebar-primary)]';

  return (
    <div className={`bg-white relative rounded-[var(--radius-card)] shrink-0 w-full transition-opacity ${isDisabled ? 'opacity-40 pointer-events-none' : ''}`}>
      <div
        aria-hidden="true"
        className={`absolute border border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] ${borderClass}`}
      />
      <div className={`content-stretch flex gap-[12px] p-[12px] relative w-full ${isCompact ? 'items-center' : 'items-start'}`}>
        {/* Party flag */}
        <div className="overflow-clip relative shrink-0 size-[40px]">
          <div className="absolute border-[0.625px] border-solid border-white inset-0 overflow-clip rounded-[8px]">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 rounded-[6.154px] size-[40px] top-1/2">
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[6.154px] size-full"
                src={party.flag}
              />
            </div>
          </div>
        </div>

        {/* Party info */}
        <div className="flex-1 flex flex-col gap-[4px] min-w-0">
          <p className="font-semibold leading-[16px] text-[var(--foreground)] text-[length:var(--text-base)] truncate">
            {party.name}
          </p>
          <div className="flex items-center gap-[6px] flex-wrap">
            <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)] truncate">
              {party.president}
            </p>
            <StatusChip label="President">
              <div className="relative shrink-0 size-[12px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                  <mask height="12" id={`mask_pres_coalition_${party.id}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                    <rect fill="#D9D9D9" height="12" width="12" />
                  </mask>
                  <g mask={`url(#mask_pres_coalition_${party.id})`}>
                    <path d={svgPathsFlag.p34b4d070} fill="#1850C5" />
                  </g>
                </svg>
              </div>
            </StatusChip>
            <StatusChip label={`${party.memberCount} Members`} variant="alliance" />
            {lockConfirmation === 'waiting' && (
              <StatusChip label="Waiting for confirmation" variant="pending" />
            )}
            {lockConfirmation === 'confirmed' && (
              <CheckCircle2 className="size-[14px] shrink-0" style={{ color: 'var(--status-approved-text)' }} />
            )}
            {lockConfirmation === 'declined' && (
              <StatusChip label="Declined" variant="rejected" />
            )}
          </div>
        </div>

        {/* Action buttons */}
        {requestState === 'accepted' && !coalitionLocked && (
          <CompactActionButton
            label="Decline"
            variant="destructive"
            onClick={(e) => { e.stopPropagation(); onRemove(); }}
            className="shrink-0"
          />
        )}

        {requestState === 'none' && !coalitionLocked && (
          <CompactActionButton
            label="Send Proposal"
            variant="primary"
            onClick={(e) => { e.stopPropagation(); onSendRequest(); }}
            className="shrink-0"
          />
        )}

        {requestState === 'sent-pending' && !coalitionLocked && (
          <CompactActionButton
            label="Withdraw"
            variant="destructive"
            onClick={(e) => { e.stopPropagation(); onWithdraw(); }}
            className="shrink-0"
          />
        )}

        {requestState === 'rejected' && (
          <span
            className="shrink-0 flex items-center px-[12px] py-[6px] rounded-[var(--radius-button-small)] bg-transparent border border-[var(--muted-foreground)] text-[var(--muted-foreground)] text-[length:var(--text-label)] leading-[14px] cursor-default opacity-70"
          >
            Declined
          </span>
        )}

        {requestState === 'received-pending' && !coalitionLocked && (
          <div ref={dropdownRef} className="relative shrink-0">
            <CompactActionButton
              label="Received"
              variant="primary"
              icon={<ChevronDown className={`size-[14px] transition-transform ${receivedDropdownOpen ? 'rotate-180' : ''}`} />}
              iconPosition="right"
              onClick={(e) => { e.stopPropagation(); setReceivedDropdownOpen(prev => !prev); }}
            />
            {receivedDropdownOpen && (
              <div className="absolute right-0 top-[calc(100%+4px)] bg-white rounded-[var(--radius-button-small)] shadow-[0px_2px_8px_0px_rgba(47,62,109,0.15)] z-10 overflow-hidden min-w-[120px]">
                <div className="absolute border border-[var(--sidebar-primary)] border-solid inset-0 pointer-events-none rounded-[var(--radius-button-small)]" />
                <button
                  onClick={(e) => { e.stopPropagation(); setReceivedDropdownOpen(false); onAccept(); }}
                  className="relative flex items-center gap-[8px] w-full px-[12px] py-[8px] text-[length:var(--text-label)] leading-[14px] text-[var(--status-approved-text)] hover:bg-[var(--status-approved-bg)] transition-colors cursor-pointer"
                >
                  <Check className="size-[14px]" />
                  Accept
                </button>
                <div className="relative mx-[8px] h-px bg-[var(--sidebar-primary)]" />
                <button
                  onClick={(e) => { e.stopPropagation(); setReceivedDropdownOpen(false); onReject(); }}
                  className="relative flex items-center gap-[8px] w-full px-[12px] py-[8px] text-[length:var(--text-label)] leading-[14px] text-[var(--status-rejected-text)] hover:bg-[var(--status-rejected-bg)] transition-colors cursor-pointer"
                >
                  <X className="size-[14px]" />
                  Decline
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main Modal ───────────────────────────────────────────────────────────────

export function CoalitionFormationModal({ isOpen, onClose, onLockComplete }: CoalitionFormationModalProps) {
  const [requests, setRequests] = useState<CoalitionRequest[]>([
    // Simulate: CVP and NDF have sent us requests
    { fromPartyId: 3, toPartyId: CURRENT_PARTY_ID, status: 'pending' },
    { fromPartyId: 4, toPartyId: CURRENT_PARTY_ID, status: 'pending' },
  ]);

  const [coalitionLocked, setCoalitionLocked] = useState(false);
  const [showLockConfirm, setShowLockConfirm] = useState(false);
  const [lockCompleteNotified, setLockCompleteNotified] = useState(false);

  // Per-partner lock confirmation status (populated when Lock Coalition is clicked)
  // In production this would come from the server; for demo, party 3 auto-confirms after 2s
  const [partnerConfirmations, setPartnerConfirmations] = useState<Record<number, 'waiting' | 'confirmed' | 'declined'>>({});

  // ── Derived state (must be computed before hooks that depend on them) ──────

  const currentParty = ALL_PARTIES.find(p => p.id === CURRENT_PARTY_ID)!;
  const otherParties = ALL_PARTIES.filter(p => p.id !== CURRENT_PARTY_ID);

  // All coalition partner IDs (accepted + sent-pending) — used for section grouping & lock-in
  // Received-pending parties stay in Available until accepted
  const coalitionPartnerIds = requests
    .filter(r =>
      r.status === 'accepted' ||
      (r.status === 'pending' && r.fromPartyId === CURRENT_PARTY_ID)
    )
    .map(r => r.fromPartyId === CURRENT_PARTY_ID ? r.toPartyId : r.fromPartyId);

  // Coalition seat count (our seats + all coalition partners' seats)
  const coalitionSeats = currentParty.memberCount +
    coalitionPartnerIds.reduce((sum, pid) => {
      // Exclude partners who declined during lock-in
      if (partnerConfirmations[pid] === 'declined') return sum;
      const p = ALL_PARTIES.find(pp => pp.id === pid);
      return sum + (p?.memberCount ?? 0);
    }, 0);

  const hasMajority = coalitionSeats >= MAJORITY_THRESHOLD;

  // Check if all partners have responded (confirmed or declined) — coalition is fully locked
  const allPartnersResponded = coalitionLocked &&
    coalitionPartnerIds.length > 0 &&
    coalitionPartnerIds.every(pid => partnerConfirmations[pid] === 'confirmed' || partnerConfirmations[pid] === 'declined');

  // Separate parties into coalition partners vs available
  const acceptedParties = otherParties.filter(p => coalitionPartnerIds.includes(p.id));
  const otherAvailableParties = otherParties.filter(p => !coalitionPartnerIds.includes(p.id));

  // Simulate a partner confirming after lock
  useEffect(() => {
    if (!coalitionLocked) return;
    // Simulate party 3 (CVP) confirming after 2 seconds
    const timer1 = setTimeout(() => {
      setPartnerConfirmations(prev => ({ ...prev, [3]: 'confirmed' }));
    }, 2000);
    // Simulate party 4 (NDF) declining after 4 seconds
    // Also auto-decline any party we sent a proposal to (sent-pending)
    const sentPendingIds = requests
      .filter(r => r.fromPartyId === CURRENT_PARTY_ID && (r.status === 'pending' || r.status === 'accepted'))
      .map(r => r.toPartyId);

    const timer2 = setTimeout(() => {
      setPartnerConfirmations(prev => {
        const updated = { ...prev, [4]: 'declined' as const };
        sentPendingIds.forEach(pid => { updated[pid] = 'declined' as const; });
        return updated;
      });
    }, 4000);
    return () => { clearTimeout(timer1); clearTimeout(timer2); };
  }, [coalitionLocked]);

  // Fire onLockComplete callback when all partners have responded
  useEffect(() => {
    if (allPartnersResponded && !lockCompleteNotified && onLockComplete) {
      setLockCompleteNotified(true);
      onLockComplete({
        hasMajority,
        finalSeats: coalitionSeats,
        totalSeats: TOTAL_HOUSE_SEATS,
      });
    }
  }, [allPartnersResponded, lockCompleteNotified, onLockComplete, hasMajority, coalitionSeats]);

  if (!isOpen) return null;

  // ── Request state per party ────────────────────────────────────────────────

  const getRequestState = (partyId: number): 'none' | 'sent-pending' | 'received-pending' | 'accepted' | 'rejected' => {
    // Check accepted
    const accepted = requests.find(
      r =>
        r.status === 'accepted' &&
        ((r.fromPartyId === CURRENT_PARTY_ID && r.toPartyId === partyId) ||
          (r.fromPartyId === partyId && r.toPartyId === CURRENT_PARTY_ID))
    );
    if (accepted) return 'accepted';

    // Check sent pending
    const sent = requests.find(
      r => r.fromPartyId === CURRENT_PARTY_ID && r.toPartyId === partyId && r.status === 'pending'
    );
    if (sent) return 'sent-pending';

    // Check received pending
    const received = requests.find(
      r => r.fromPartyId === partyId && r.toPartyId === CURRENT_PARTY_ID && r.status === 'pending'
    );
    if (received) return 'received-pending';

    // Check rejected
    const rejected = requests.find(
      r =>
        r.status === 'rejected' &&
        ((r.fromPartyId === CURRENT_PARTY_ID && r.toPartyId === partyId) ||
          (r.fromPartyId === partyId && r.toPartyId === CURRENT_PARTY_ID))
    );
    if (rejected) return 'rejected';

    return 'none';
  };

  // ── Handlers ───────────────────────────────────────────────────────────────

  const handleSendRequest = (toPartyId: number) => {
    if (coalitionLocked) return;

    // Don't allow if a request already exists between these two parties
    const existing = requests.find(
      r =>
        r.status === 'pending' &&
        ((r.fromPartyId === CURRENT_PARTY_ID && r.toPartyId === toPartyId) ||
          (r.fromPartyId === toPartyId && r.toPartyId === CURRENT_PARTY_ID))
    );
    if (existing) return;

    setRequests(prev => [
      ...prev,
      { fromPartyId: CURRENT_PARTY_ID, toPartyId, status: 'pending' },
    ]);
  };

  const handleWithdraw = (toPartyId: number) => {
    setRequests(prev =>
      prev.filter(
        r => !(r.fromPartyId === CURRENT_PARTY_ID && r.toPartyId === toPartyId && r.status === 'pending')
      )
    );
  };

  const handleAccept = (fromPartyId: number) => {
    setRequests(prev =>
      prev.map(r =>
        r.fromPartyId === fromPartyId && r.toPartyId === CURRENT_PARTY_ID && r.status === 'pending'
          ? { ...r, status: 'accepted' }
          : r
      )
    );
  };

  const handleReject = (fromPartyId: number) => {
    setRequests(prev =>
      prev.map(r =>
        r.fromPartyId === fromPartyId && r.toPartyId === CURRENT_PARTY_ID && r.status === 'pending'
          ? { ...r, status: 'rejected' }
          : r
      )
    );
  };

  const handleRemovePartner = (partyId: number) => {
    if (coalitionLocked) return;
    // Remove the accepted request involving this party
    setRequests(prev =>
      prev.filter(
        r => !(
          r.status === 'accepted' &&
          ((r.fromPartyId === CURRENT_PARTY_ID && r.toPartyId === partyId) ||
            (r.fromPartyId === partyId && r.toPartyId === CURRENT_PARTY_ID))
        )
      )
    );
  };

  const handleLockCoalition = () => {
    if (!hasMajority) return;
    // Set all coalition partners to 'waiting'
    const initial: Record<number, 'waiting' | 'confirmed' | 'declined'> = {};
    coalitionPartnerIds.forEach(pid => { initial[pid] = 'waiting'; });
    setPartnerConfirmations(initial);
    setCoalitionLocked(true);
    setShowLockConfirm(false);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white content-stretch flex flex-col gap-[20px] items-start p-[24px] rounded-[var(--radius-card)] w-[560px] z-50 max-h-[85vh] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute border border-[var(--sidebar-primary)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] shadow-[0px_2px_2px_0px_rgba(47,62,109,0.2)]"
        />

        {/* Header */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <div className="flex items-center justify-between w-full">
            <p className="font-bold leading-[32px] relative shrink-0 text-[var(--foreground)] text-[length:var(--text-h2)]">
              Form a Coalition
            </p>
            {coalitionLocked && (
              allPartnersResponded ? (
                <StatusChip label="Locked" variant="approved">
                  <Lock className="size-[12px] shrink-0" style={{ color: 'var(--status-approved-text)' }} />
                </StatusChip>
              ) : (
                <StatusChip label="Lock In Progress" variant="pending">
                  <Lock className="size-[12px] shrink-0" style={{ color: 'var(--status-pending-text)' }} />
                </StatusChip>
              )
            )}
          </div>
          <p className="leading-[20px] relative shrink-0 text-[var(--muted-foreground)] text-[length:var(--text-base)] w-full">
            {coalitionLocked
              ? allPartnersResponded
                ? 'Coalition is locked. Roles will be assigned based on your final coalition composition.'
                : 'Waiting for all partners to confirm or decline. The coalition will lock once everyone responds.'
              : 'Build your coalition by allying with multiple parties. You need a simple majority to form the government.'
            }
          </p>
        </div>

        {/* Coalition Seat Tracker */}
        <div className="w-full relative shrink-0 bg-[var(--input-background)] rounded-[var(--radius)] p-[16px]">
          <CoalitionSeatTracker
            currentSeats={coalitionSeats}
            majorityThreshold={MAJORITY_THRESHOLD}
            totalSeats={TOTAL_HOUSE_SEATS}
            partnerCount={coalitionPartnerIds.length}
            lockState={coalitionLocked ? (allPartnersResponded ? 'complete' : 'in-progress') : 'unlocked'}
          />
        </div>

        {/* Scrollable party lists */}
        <div className="content-stretch flex flex-col gap-[16px] items-start relative w-full overflow-y-auto scrollbar-hide flex-1 min-h-0">

          {/* Accepted Coalition Partners section */}
          {acceptedParties.length > 0 && (
            <div className="flex flex-col gap-[8px] w-full shrink-0">
              <p className="font-semibold leading-[16px] text-[var(--foreground)] text-[length:var(--text-label)] uppercase tracking-wider">
                Coalition Partners ({acceptedParties.length})
              </p>
              <div className="flex flex-col gap-[8px] w-full">
                {acceptedParties.map(party => {
                  const state = getRequestState(party.id);
                  return (
                    <CoalitionPartyRow
                      key={party.id}
                      party={party}
                      requestState={state}
                      coalitionLocked={coalitionLocked}
                      lockConfirmation={partnerConfirmations[party.id]}
                      isCoalitionPartner={true}
                      onSendRequest={() => handleSendRequest(party.id)}
                      onWithdraw={() => handleWithdraw(party.id)}
                      onAccept={() => handleAccept(party.id)}
                      onReject={() => handleReject(party.id)}
                      onRemove={() => handleRemovePartner(party.id)}
                    />
                  );
                })}

                {/* Lock Coalition button — inline with partners for context */}
                {hasMajority && !coalitionLocked && !showLockConfirm && (
                  <div className="flex items-center gap-[8px] w-full">
                    <CompactActionButton
                      label="Lock Coalition"
                      variant="primary"
                      icon={<Lock className="size-[12px]" />}
                      onClick={() => setShowLockConfirm(true)}
                    />
                    <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">
                      Once locked, coalition composition cannot be changed.
                    </p>
                  </div>
                )}

                {/* Lock confirmation prompt */}
                {hasMajority && !coalitionLocked && showLockConfirm && (
                  <div className="flex items-center gap-[8px] w-full">
                    <CompactActionButton
                      label="Yes, Lock Coalition"
                      variant="danger"
                      icon={<Lock className="size-[12px]" />}
                      onClick={handleLockCoalition}
                    />
                    <CompactActionButton
                      label="Cancel"
                      variant="outline"
                      onClick={() => setShowLockConfirm(false)}
                    />
                    <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">
                      Are you sure? This action cannot be undone.
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Available / Pending parties section */}
          {otherAvailableParties.length > 0 && (
            <div className="flex flex-col gap-[8px] w-full shrink-0">
              {acceptedParties.length > 0 && (
                <p className="font-semibold leading-[16px] text-[var(--foreground)] text-[length:var(--text-label)] uppercase tracking-wider">
                  Available Parties ({otherAvailableParties.length})
                </p>
              )}
              <div className="flex flex-col gap-[8px] w-full">
                {otherAvailableParties.map(party => {
                  const state = getRequestState(party.id);
                  return (
                    <CoalitionPartyRow
                      key={party.id}
                      party={party}
                      requestState={state}
                      coalitionLocked={coalitionLocked}
                      onSendRequest={() => handleSendRequest(party.id)}
                      onWithdraw={() => handleWithdraw(party.id)}
                      onAccept={() => handleAccept(party.id)}
                      onReject={() => handleReject(party.id)}
                      onRemove={() => {}}
                    />
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}