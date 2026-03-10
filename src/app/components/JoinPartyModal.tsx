import svgPaths from "../../imports/svg-7zrpvq7f8n";
import svgPathsFlag from "../../imports/svg-txfaz6sn9l";
import { StatusChip } from './StatusChip';
import { useState } from "react";
import { useParties } from '../context/PartyContext';

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
      className="bg-white h-[80px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:bg-[#f8f9fb] transition-colors"
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[12px]"
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
              className={`font-semibold leading-[20px] not-italic text-[16px] whitespace-pre-wrap ${
                isSelected ? "text-[#1850c5]" : "text-[#3c4c7c]"
              }`}
            >
              {party.name}
            </p>
            
            {/* President Name and Chip */}
            <div className="flex items-center gap-[6px]">
              <p className="leading-[16px] text-[#6e7ca8] text-[12px]">
                {party.president}
              </p>
              <StatusChip label="President">
                <div className="relative shrink-0 size-[12px]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <mask height="12" id={`mask_president_${party.name}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                      <rect fill="#D9D9D9" height="12" width="12" />
                    </mask>
                    <g mask={`url(#mask_president_${party.name})`}>
                      <path d={svgPathsFlag.p34b4d070} fill="#1850C5" />
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

  const handleJoin = () => {
    if (selectedParty) {
      // Handle join logic here
      console.log("Joining party:", selectedParty);
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
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] rounded-[12px] w-[520px] z-50">
        <div
          aria-hidden="true"
          className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px] shadow-[0px_2px_2px_0px_rgba(47,62,109,0.2)]"
        />

        {/* Header */}
        <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full whitespace-pre-wrap">
          <p className="font-bold leading-[32px] relative shrink-0 text-[#041a5e] text-[24px] w-full">
            Join a Party
          </p>
          <p className="leading-[20px] relative shrink-0 text-[var(--muted-foreground)] text-[14px] w-full">
            Select and register with your preferred political party
          </p>
        </div>

        {/* Party List */}
        <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
          {parties.map((party) => (
            <PartyItem
              key={party.name}
              party={party}
              isSelected={selectedParty === party.name}
              onClick={() => setSelectedParty(party.name)}
            />
          ))}
        </div>

        {/* Join Button */}
        <button
          onClick={handleJoin}
          disabled={!selectedParty}
          className="bg-[#2766da] relative rounded-[8px] shrink-0 w-full hover:bg-[#1e52b0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <div className="flex flex-row items-center justify-center size-full">
            <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative w-full">
              <div className="flex flex-col font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
                <p className="leading-[24px]">Join</p>
              </div>
            </div>
          </div>
        </button>
      </div>
    </>
  );
}