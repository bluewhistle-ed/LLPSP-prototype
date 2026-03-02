import { Search } from 'lucide-react';
import { useState } from 'react';
import { StatusChip } from './StatusChip';
import imgFlag from "figma:asset/e93f8184d4e0a003421c8b115cdf0646b0047716.png";
import imgFlag1 from "figma:asset/f3d28dab76472dda8be30af14710d0d9220a3f6c.png";
import imgFlag2 from "figma:asset/0f2334d3dd6983342dde2fc10d440067b79ce1fa.png";
import svgPathsFlag from "../../imports/svg-txfaz6sn9l";
import imgUnsplash1 from "figma:asset/2255efa6e3d4e9cd3d5daf58f5f5df679f8ce61b.png";
import imgUnsplash2 from "figma:asset/bdd8fbc00e625d0c6fe14c2c8af968a19e0b5258.png";
import imgUnsplash3 from "figma:asset/666aaf651ac2fa50457b5314dddb3ef527236357.png";
import imgUnsplash4 from "figma:asset/0c010bee9a65e7abc8fbcfcd9aabb12192721142.png";
import imgUnsplash5 from "figma:asset/4fe1dc6012c7950c64680d0050aa8870cf6b7629.png";
import imgUnsplash6 from "figma:asset/970678de1f18c883f87566bc9d6cb8a33ce7c22b.png";
import imgUnsplash7 from "figma:asset/1fe3a74538117eb749053e9327f4316a11266495.png";

// ── Types ────────────────────────────────────────────────────────────────────

interface Member {
  id: number;
  name: string;
  role: string;
  avatar: string;
}

interface OppositionParty {
  id: number;
  name: string;
  tagline: string;
  flag: string;
  memberCount: number;
  members: Member[];
}

// ── Mock opposition data ─────────────────────────────────────────────────────

const TOTAL_HOUSE_STRENGTH = 50;

const OPPOSITION_PARTIES: OppositionParty[] = [
  {
    id: 1,
    name: "People's Democratic Front",
    tagline: "Democracy Through Dissent",
    flag: imgFlag2,
    memberCount: 8,
    members: [
      { id: 1, name: "Rajesh K. Malhotra", role: "President", avatar: imgUnsplash6 },
      { id: 2, name: "Priya N. Deshmukh", role: "V.President", avatar: imgUnsplash3 },
      { id: 3, name: "Carlos D. Mendez", role: "Member", avatar: imgUnsplash7 },
      { id: 4, name: "Fiona A. McCarthy", role: "Member", avatar: imgUnsplash1 },
      { id: 5, name: "Samuel T. Okonkwo", role: "Member", avatar: imgUnsplash4 },
    ],
  },
  {
    id: 2,
    name: "National Reform Alliance",
    tagline: "Reform, Rebuild, Renew",
    flag: imgFlag1,
    memberCount: 6,
    members: [
      { id: 6, name: "Ananya R. Sharma", role: "President", avatar: imgUnsplash5 },
      { id: 7, name: "Viktor J. Petrov", role: "V.President", avatar: imgUnsplash2 },
      { id: 8, name: "Helena G. Santos", role: "Member", avatar: imgUnsplash4 },
      { id: 9, name: "Derek M. O'Brien", role: "Member", avatar: imgUnsplash7 },
    ],
  },
  {
    id: 3,
    name: "Green Future Party",
    tagline: "Sustainable Governance for All",
    flag: imgFlag,
    memberCount: 4,
    members: [
      { id: 10, name: "Lena P. Johansson", role: "President", avatar: imgUnsplash2 },
      { id: 11, name: "Kwame A. Mensah", role: "V.President", avatar: imgUnsplash6 },
      { id: 12, name: "Irene L. Costa", role: "Member", avatar: imgUnsplash3 },
    ],
  },
];

// ── Read-only Member Row ─────────────────────────────────────────────────────

function ReadOnlyMemberRow({ member }: { member: Member }) {
  const getRoleTag = () => {
    if (member.role === "President") {
      return (
        <StatusChip label="President">
          <div className="relative shrink-0 size-[12px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <mask height="12" id={`mask_pres_opp_${member.id}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                <rect fill="#D9D9D9" height="12" width="12" />
              </mask>
              <g mask={`url(#mask_pres_opp_${member.id})`}>
                <path d={svgPathsFlag.p34b4d070} fill="#1850C5" />
              </g>
            </svg>
          </div>
        </StatusChip>
      );
    } else if (member.role === "V.President") {
      return (
        <StatusChip label="V. President">
          <div className="relative shrink-0 size-[12px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <mask height="12" id={`mask_vpres_opp_${member.id}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                <rect fill="#D9D9D9" height="12" width="12" />
              </mask>
              <g mask={`url(#mask_vpres_opp_${member.id})`}>
                <path d={svgPathsFlag.p34b4d070} fill="#6820FF" />
              </g>
            </svg>
          </div>
        </StatusChip>
      );
    }
    return null;
  };

  return (
    <div className="bg-white content-stretch flex items-start relative shrink-0 w-full">
      <div className="content-stretch flex gap-[8px] items-center relative w-full">
        <div className="relative shrink-0 size-[32px]">
          <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0">
            <img alt="" className="block max-w-none size-full" height="32" src={member.avatar} width="32" />
          </div>
        </div>
        <div className="flex items-center gap-[6px] leading-[0] not-italic relative text-[var(--foreground)] text-[length:var(--text-base)]">
          <p className="leading-[16px]">{member.name}</p>
          {getRoleTag()}
        </div>
      </div>
    </div>
  );
}

// ── Opposition Members Modal ─────────────────────────────────────────────────

function OppositionMembersModal({
  isOpen,
  onClose,
  party,
}: {
  isOpen: boolean;
  onClose: () => void;
  party: OppositionParty;
}) {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  const filteredMembers = party.members.filter((member) =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const leaders = filteredMembers.filter(
    (m) => m.role === "President" || m.role === "V.President"
  );
  const regularMembers = filteredMembers.filter(
    (m) => m.role !== "President" && m.role !== "V.President"
  );

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white relative rounded-[var(--radius-card)] max-w-[500px] w-full max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]"
        />
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative">
          {/* Header */}
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
            <div className="relative shrink-0 size-[40px]">
              <div className="absolute border-[0.465px] border-solid border-white inset-0 overflow-clip rounded-[5.581px]">
                <img
                  alt=""
                  className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                  src={party.flag}
                />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-ellipsis">
              <div className="flex flex-col font-semibold justify-center overflow-hidden relative shrink-0 text-[var(--foreground)] text-[length:var(--text-h4)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">{party.name}</p>
              </div>
              <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-[var(--muted-foreground)] text-[length:var(--text-label)] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">{party.tagline}</p>
              </div>
            </div>
          </div>

          {/* Member Count */}
          <div className="bg-[var(--input-background)] content-stretch flex gap-[12px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[var(--radius)] shrink-0">
            <div
              aria-hidden="true"
              className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius)]"
            />
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[var(--foreground)] text-[length:var(--text-base)] text-ellipsis whitespace-nowrap">
                <p className="leading-[16px]">{party.members.length} Members</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full">
            <div className="absolute left-[12px] top-1/2 -translate-y-1/2">
              <Search className="size-[16px] text-[var(--muted-foreground)]" />
            </div>
            <input
              type="text"
              placeholder="Search members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-[36px] pr-[12px] py-[8px] rounded-[var(--radius)] border border-[#e3e6f0] text-[length:var(--text-base)] text-[var(--foreground)] leading-[16px] focus:outline-none focus:border-[#3c7ce8]"
            />
          </div>

          {/* Members List */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-h-[400px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* Leaders Section */}
            {leaders.length > 0 && (
              <>
                <div className="flex flex-col font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[var(--muted-foreground)] text-[length:var(--text-label)] text-ellipsis w-full whitespace-nowrap">
                  <p className="leading-[14px] overflow-hidden">Leaders</p>
                </div>
                {leaders.map((member) => (
                  <ReadOnlyMemberRow key={member.id} member={member} />
                ))}
              </>
            )}

            {/* Members Section */}
            {regularMembers.length > 0 && (
              <>
                <div className="flex flex-col font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[var(--muted-foreground)] text-[length:var(--text-label)] text-ellipsis w-full whitespace-nowrap">
                  <p className="leading-[14px] overflow-hidden">Members</p>
                </div>
                {regularMembers.map((member) => (
                  <ReadOnlyMemberRow key={member.id} member={member} />
                ))}
              </>
            )}

            {filteredMembers.length === 0 && (
              <p className="text-[var(--muted-foreground)] text-[length:var(--text-base)] leading-[16px] w-full text-center py-[20px]">
                No members found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Opposition Parties Card ──────────────────────────────────────────────────

function OppositionPartiesCard() {
  const [selectedParty, setSelectedParty] = useState<OppositionParty | null>(null);

  return (
    <>
      <div className="bg-white relative rounded-[var(--radius-card)] shrink-0 w-full">
        <div
          aria-hidden="true"
          className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]"
        />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          <div className="flex items-center gap-[8px]">
            <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">Opposition</p>
            <StatusChip label={`${OPPOSITION_PARTIES.reduce((sum, p) => sum + p.memberCount, 0)}/${TOTAL_HOUSE_STRENGTH} Members`} />
          </div>

          {/* Opposition Parties List — action card style */}
          <div className="flex flex-col w-full -mx-[8px] -mt-[10px]">
            {OPPOSITION_PARTIES.map((party, index) => (
              <div key={party.id}>
                {index > 0 && (
                  <div className="h-px bg-[var(--sidebar-primary)] mx-[12px]" />
                )}
                <button
                  onClick={() => setSelectedParty(party)}
                  className="flex items-start gap-[8px] w-full text-left hover:bg-[var(--input-background)] px-[8px] py-[10px] rounded-[var(--radius)] transition-colors cursor-pointer"
                >
                  {/* Party Flag */}
                  <div className="relative shrink-0 size-[28px] mt-[-2px]">
                    <div className="absolute border-[0.465px] border-solid border-white inset-0 overflow-clip rounded-[4px]">
                      <img
                        alt=""
                        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                        src={party.flag}
                      />
                    </div>
                  </div>

                  {/* Party Info */}
                  <div className="flex flex-col gap-[4px] flex-1 min-w-0">
                    <p className="flex items-center gap-[6px] leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">
                      {party.name}
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 opacity-30">
                        <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </p>
                    <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">
                      {party.memberCount} members
                    </p>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Members Modal */}
      {selectedParty && (
        <OppositionMembersModal
          isOpen={!!selectedParty}
          onClose={() => setSelectedParty(null)}
          party={selectedParty}
        />
      )}
    </>
  );
}

// ── Main Tab ─────────────────────────────────────────────────────────────────

export function OppositionTab() {
  return (
    <div className="flex gap-[24px] w-full items-start">
      {/* Single column — opposition has no ministry structure */}
      <div className="flex flex-col gap-[18px] flex-1 max-w-[50%]">
        <OppositionPartiesCard />
      </div>
    </div>
  );
}
