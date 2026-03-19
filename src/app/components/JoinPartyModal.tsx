import svgPaths from "../../imports/svg-7zrpvq7f8n";
import svgPathsFlag from "../../imports/svg-txfaz6sn9l";
import { StatusChip } from './StatusChip';
import { useState } from "react";
import { useParties } from '../context/PartyContext';
import { User } from "lucide-react";

function IconsCheckCircle() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / check_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons / check_circle">
          <mask height="24" id="mask0_173_2448" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_173_2448)">
            <path d={svgPaths.pfbfd380} fill="#18A535" id="check_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

interface Party {
  name: string;
  flag: string;
  president: string;
}

interface PartyItemProps {
  party: Party;
  isSelected: boolean;
  onClick: () => void;
}

function PartyItem({ party, isSelected, onClick }: PartyItemProps) {
  return (
    <button
      onClick={onClick}
      className="bg-[var(--card)] h-[80px] relative rounded-[var(--radius-card)] shrink-0 w-full cursor-pointer hover:bg-[var(--input-background)] transition-colors"
    >
      <div
        aria-hidden="true"
        className={`absolute border border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] ${
          isSelected ? 'border-[var(--primary)]' : 'border-[var(--card-border)]'
        }`}
      />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
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
          
          {/* Party Name and President Info */}
          <div className="flex-1 flex flex-col gap-[6px] min-h-px min-w-px text-left">
            <p
              className={`font-semibold leading-[20px] text-[length:var(--text-h4)] whitespace-pre-wrap ${
                isSelected ? "text-[var(--accent)]" : "text-[var(--sidebar-primary-foreground)]"
              }`}
            >
              {party.name}
            </p>
            
            {/* President Name and Chip */}
            <div className="flex items-center gap-[6px]">
              <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">
                {party.president}
              </p>
              <StatusChip label="President">
                <div className="relative shrink-0 size-[12px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <mask height="12" id={`mask_president_${party.name}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                      <rect fill="#D9D9D9" height="12" width="12" />
                    </mask>
                    <g mask={`url(#mask_president_${party.name})`}>
                      <path d={svgPathsFlag.p34b4d070} fill="var(--accent)" />
                    </g>
                  </svg>
                </div>
              </StatusChip>
            </div>
          </div>
          
          {isSelected && <IconsCheckCircle />}
        </div>
      </div>
    </button>
  );
}

// ── "Stay Independent" option ────────────────────────────────────────────────

const INDEPENDENT_KEY = "__independent__";

function IndependentOption({ isSelected, onClick }: { isSelected: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="bg-[var(--card)] relative rounded-[var(--radius-card)] shrink-0 w-full cursor-pointer hover:bg-[var(--input-background)] transition-colors"
    >
      <div
        aria-hidden="true"
        className={`absolute border border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] ${
          isSelected ? 'border-[var(--primary)]' : 'border-[var(--card-border)] border-dashed'
        }`}
      />
      <div className="content-stretch flex gap-[12px] items-center p-[12px] relative size-full">
        {/* Icon placeholder */}
        <div className="flex items-center justify-center shrink-0 size-[40px] rounded-[8px] bg-[var(--input-background)]">
          <User className="size-[20px] text-[var(--muted-foreground)]" />
        </div>

        {/* Text */}
        <div className="flex-1 flex flex-col gap-[4px] min-h-px min-w-px text-left">
          <p className={`font-semibold leading-[20px] text-[length:var(--text-h4)] ${
            isSelected ? 'text-[var(--accent)]' : 'text-[var(--sidebar-primary-foreground)]'
          }`}>
            Independent
          </p>
          <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">
            Independently elected Member of Parliament
          </p>
        </div>

        {isSelected && <IconsCheckCircle />}
      </div>
    </button>
  );
}

// ── Modal ────────────────────────────────────────────────────────────────────

interface JoinPartyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function JoinPartyModal({ isOpen, onClose }: JoinPartyModalProps) {
  const { allParties } = useParties();
  const [selectedParty, setSelectedParty] = useState<string | null>(null);

  const parties = allParties.map(p => ({
    name: p.name,
    flag: p.flag,
    president: p.president,
  }));

  const isIndependent = selectedParty === INDEPENDENT_KEY;

  const handleJoin = () => {
    if (selectedParty) {
      if (isIndependent) {
        console.log("Staying independent");
      } else {
        console.log("Joining party:", selectedParty);
      }
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--card)] content-stretch flex flex-col gap-[24px] items-start p-[24px] rounded-[var(--radius-card)] w-[520px] z-50 max-h-[85vh] overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute border border-[var(--sidebar-primary)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)] shadow-[0px_2px_2px_0px_rgba(47,62,109,0.2)]"
        />

        {/* Header */}
        <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full">
          <p className="font-bold leading-[32px] relative shrink-0 text-[var(--foreground)] text-[length:var(--text-h2)] w-full">
            Join a Party
          </p>
          <p className="leading-[20px] relative shrink-0 text-[var(--muted-foreground)] text-[length:var(--text-base)] w-full">
            Select and register with your preferred political party, or choose to stay independent
          </p>
        </div>

        {/* Party List — scrollable */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative w-full overflow-y-auto scrollbar-hide flex-1 min-h-0">
          {parties.map((party) => (
            <PartyItem
              key={party.name}
              party={party}
              isSelected={selectedParty === party.name}
              onClick={() => setSelectedParty(party.name)}
            />
          ))}

          {/* Separator */}
          <div className="flex items-center gap-[12px] w-full shrink-0">
            <div className="flex-1 h-px bg-[var(--card-border)]" />
            <p className="text-[var(--muted-foreground)] text-[length:var(--text-label)] leading-[14px] shrink-0">or</p>
            <div className="flex-1 h-px bg-[var(--card-border)]" />
          </div>

          {/* Independent option */}
          <IndependentOption
            isSelected={isIndependent}
            onClick={() => setSelectedParty(INDEPENDENT_KEY)}
          />
        </div>

        {/* Action Button */}
        <button
          onClick={handleJoin}
          disabled={!selectedParty}
          className="bg-[var(--primary)] relative rounded-[var(--radius-button)] shrink-0 w-full hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative w-full">
              <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[length:var(--text-h3)] text-[var(--primary-foreground)] whitespace-nowrap">
                <p className="leading-[24px]">{isIndependent ? 'Confirm' : 'Join'}</p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}