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

interface CoalitionParty {
  id: number;
  name: string;
  tagline: string;
  flag: string;
  memberCount: number;
  members: Member[];
}

// ── Mock coalition data ──────────────────────────────────────────────────────

const TOTAL_HOUSE_STRENGTH = 50;

const COALITION_PARTIES: CoalitionParty[] = [
  {
    id: 1,
    name: "Unity Progress Party",
    tagline: "Forging Together, Advancing Forward",
    flag: imgFlag,
    memberCount: 15,
    members: [
      { id: 1, name: "Sheilah T. Sayasane", role: "President", avatar: imgUnsplash1 },
      { id: 2, name: "Roy X. Hinde", role: "V.President", avatar: imgUnsplash2 },
      { id: 3, name: "Aleta H. Starcher", role: "Minister", avatar: imgUnsplash3 },
      { id: 4, name: "Mai G. Sollom", role: "Member", avatar: imgUnsplash4 },
      { id: 5, name: "Latricia W. Silletti", role: "Minister", avatar: imgUnsplash5 },
      { id: 6, name: "Adrianne P. Tillis", role: "Member", avatar: imgUnsplash6 },
      { id: 7, name: "Elvira E. Aus", role: "Member", avatar: imgUnsplash7 },
    ],
  },
  {
    id: 2,
    name: "Techno-Revolution Party",
    tagline: "Innovation for the People",
    flag: imgFlag1,
    memberCount: 12,
    members: [
      { id: 8, name: "Alex Johnson", role: "President", avatar: imgUnsplash4 },
      { id: 9, name: "Marcus T. Reynolds", role: "V.President", avatar: imgUnsplash7 },
      { id: 10, name: "David R. Patterson", role: "Minister", avatar: imgUnsplash6 },
      { id: 11, name: "Sophia L. Martinez", role: "Member", avatar: imgUnsplash5 },
      { id: 12, name: "Nathan S. Wright", role: "Member", avatar: imgUnsplash2 },
    ],
  },
  {
    id: 3,
    name: "Citizen's Voice Party",
    tagline: "Power to the People",
    flag: imgFlag2,
    memberCount: 10,
    members: [
      { id: 13, name: "Alice Thompson", role: "President", avatar: imgUnsplash3 },
      { id: 14, name: "Isabella M. Chen", role: "V.President", avatar: imgUnsplash1 },
      { id: 15, name: "James K. Anderson", role: "Member", avatar: imgUnsplash7 },
      { id: 16, name: "Emily R. Thompson", role: "Member", avatar: imgUnsplash4 },
    ],
  },
];

// ── Read-only Member Row (matches PartyManagementTab MemberRow) ──────────────

function ReadOnlyMemberRow({ member }: { member: Member }) {
  const getRoleTag = () => {
    if (member.role === "President") {
      return (
        <StatusChip label="President">
          <div className="relative shrink-0 size-[12px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <mask height="12" id={`mask_pres_gov_${member.id}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                <rect fill="#D9D9D9" height="12" width="12" />
              </mask>
              <g mask={`url(#mask_pres_gov_${member.id})`}>
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
              <mask height="12" id={`mask_vpres_gov_${member.id}`} maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                <rect fill="#D9D9D9" height="12" width="12" />
              </mask>
              <g mask={`url(#mask_vpres_gov_${member.id})`}>
                <path d={svgPathsFlag.p34b4d070} fill="#6820FF" />
              </g>
            </svg>
          </div>
        </StatusChip>
      );
    } else if (member.role === "Minister") {
      return <StatusChip label="Minister" />;
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
        <div className="flex items-center gap-[6px] leading-[0] not-italic relative text-[#2f3e6d] text-[14px]">
          <p className="leading-[16px]">{member.name}</p>
          {getRoleTag()}
        </div>
      </div>
    </div>
  );
}

// ── Coalition Members Modal (read-only, matches PartyMembersModal) ───────────

function CoalitionMembersModal({
  isOpen,
  onClose,
  party,
}: {
  isOpen: boolean;
  onClose: () => void;
  party: CoalitionParty;
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
        className="bg-white relative rounded-[12px] max-w-[500px] w-full max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]"
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
              <div className="flex flex-col font-semibold justify-center overflow-hidden relative shrink-0 text-[#2f3e6d] text-[16px] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">{party.name}</p>
              </div>
              <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">{party.tagline}</p>
              </div>
            </div>
          </div>

          {/* Member Count */}
          <div className="bg-[#f8f9fb] content-stretch flex gap-[12px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
            <div
              aria-hidden="true"
              className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]"
            />
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
                <p className="leading-[16px]">{party.members.length} Members</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="relative w-full">
            <div className="absolute left-[12px] top-1/2 -translate-y-1/2">
              <Search className="size-[16px] text-[#6e7ca8]" />
            </div>
            <input
              type="text"
              placeholder="Search members..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-[36px] pr-[12px] py-[8px] rounded-[8px] border border-[#e3e6f0] text-[14px] text-[#2f3e6d] leading-[16px] focus:outline-none focus:border-[#3c7ce8]"
            />
          </div>

          {/* Members List */}
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-h-[400px] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {/* Leaders Section */}
            {leaders.length > 0 && (
              <>
                <div className="flex flex-col font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis w-full whitespace-nowrap">
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
                <div className="flex flex-col font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis w-full whitespace-nowrap">
                  <p className="leading-[14px] overflow-hidden">Members</p>
                </div>
                {regularMembers.map((member) => (
                  <ReadOnlyMemberRow key={member.id} member={member} />
                ))}
              </>
            )}

            {filteredMembers.length === 0 && (
              <p className="text-[#6e7ca8] text-[14px] leading-[16px] w-full text-center py-[20px]">
                No members found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Coalition Card ───────────────────────────────────────────────────────────

function CoalitionCard() {
  const [selectedParty, setSelectedParty] = useState<CoalitionParty | null>(null);

  return (
    <>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full">
        <div
          aria-hidden="true"
          className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]"
        />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          <div className="flex items-center gap-[8px]">
            <p className="font-semibold leading-[20px] text-[#2f3e6d] text-[16px]">Treasury</p>
            <StatusChip label={`${COALITION_PARTIES.reduce((sum, p) => sum + p.memberCount, 0)}/${TOTAL_HOUSE_STRENGTH} Members`} />
          </div>

          {/* Coalition Parties List — action card style */}
          <div className="flex flex-col w-full -mx-[8px] -mt-[10px]">
            {COALITION_PARTIES.map((party, index) => (
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
        <CoalitionMembersModal
          isOpen={!!selectedParty}
          onClose={() => setSelectedParty(null)}
          party={selectedParty}
        />
      )}
    </>
  );
}

// ── Council of Ministers Data ─────────────────────────────────────────────────

interface Ministry {
  id: number;
  name: string;
  description: string;
  minister: { name: string; avatar: string; partyName: string; partyFlag: string };
  mos: { name: string; avatar: string; partyName: string; partyFlag: string } | null;
  questionHourThemes: { id: number; theme: string; questionsReceived: number }[];
}

const MINISTRIES: Ministry[] = [
  {
    id: 1,
    name: "Finance",
    description: "Responsible for the management of government finances, fiscal policy, taxation, public expenditure, and financial regulation. This ministry oversees the Union Budget, monitors macroeconomic indicators, and coordinates economic reforms across sectors.",
    minister: { name: "Aleta H. Starcher", avatar: imgUnsplash3, partyName: "UPP", partyFlag: imgFlag },
    mos: { name: "Nathan S. Wright", avatar: imgUnsplash2, partyName: "TRP", partyFlag: imgFlag1 },
    questionHourThemes: [
      { id: 1, theme: "Union Budget Allocations", questionsReceived: 8 },
      { id: 2, theme: "GST Implementation", questionsReceived: 5 },
      { id: 3, theme: "Public Debt Management", questionsReceived: 3 },
      { id: 4, theme: "Banking Sector Reforms", questionsReceived: 6 },
    ],
  },
  {
    id: 2,
    name: "Home Affairs",
    description: "Handles internal security, law enforcement, border management, and disaster response. The ministry coordinates with state governments on policing, communal harmony, and the maintenance of public order across the nation.",
    minister: { name: "Latricia W. Silletti", avatar: imgUnsplash5, partyName: "UPP", partyFlag: imgFlag },
    mos: { name: "Emily R. Thompson", avatar: imgUnsplash4, partyName: "CVP", partyFlag: imgFlag2 },
    questionHourThemes: [
      { id: 5, theme: "Border Security Operations", questionsReceived: 7 },
      { id: 6, theme: "Cybercrime Prevention", questionsReceived: 4 },
      { id: 7, theme: "Disaster Response Readiness", questionsReceived: 2 },
    ],
  },
  {
    id: 3,
    name: "External Affairs",
    description: "Manages India's foreign relations, diplomatic missions, consular services, and international treaties. The ministry shapes foreign policy, fosters bilateral and multilateral partnerships, and protects the interests of citizens abroad.",
    minister: { name: "David R. Patterson", avatar: imgUnsplash6, partyName: "TRP", partyFlag: imgFlag1 },
    mos: null,
    questionHourThemes: [
      { id: 8, theme: "Bilateral Trade Agreements", questionsReceived: 5 },
      { id: 9, theme: "Diaspora Welfare Programmes", questionsReceived: 3 },
    ],
  },
  {
    id: 4,
    name: "Education",
    description: "Oversees national education policy, school and higher education standards, curriculum development, and research funding. The ministry works to ensure equitable access to quality education and promote skill development across demographics.",
    minister: { name: "Alice Thompson", avatar: imgUnsplash3, partyName: "CVP", partyFlag: imgFlag2 },
    mos: { name: "Mai G. Sollom", avatar: imgUnsplash4, partyName: "UPP", partyFlag: imgFlag },
    questionHourThemes: [
      { id: 10, theme: "National Education Policy", questionsReceived: 9 },
      { id: 11, theme: "Digital Literacy Programmes", questionsReceived: 4 },
      { id: 12, theme: "University Funding & Research", questionsReceived: 6 },
      { id: 13, theme: "Mid-day Meal Scheme", questionsReceived: 2 },
    ],
  },
  {
    id: 5,
    name: "Health & Family Welfare",
    description: "Responsible for public health infrastructure, disease prevention, medical research, and family welfare programmes. The ministry administers national health insurance schemes and regulates pharmaceutical standards and medical education.",
    minister: { name: "Marcus T. Reynolds", avatar: imgUnsplash7, partyName: "TRP", partyFlag: imgFlag1 },
    mos: { name: "Adrianne P. Tillis", avatar: imgUnsplash6, partyName: "UPP", partyFlag: imgFlag },
    questionHourThemes: [
      { id: 14, theme: "Rural Healthcare Access", questionsReceived: 7 },
      { id: 15, theme: "Vaccination Programmes", questionsReceived: 5 },
      { id: 16, theme: "Mental Health Initiatives", questionsReceived: 3 },
    ],
  },
  {
    id: 6,
    name: "Defence",
    description: "Manages national defence strategy, armed forces modernisation, defence procurement, and veteran welfare. The ministry coordinates with the three services to ensure territorial integrity and readiness for security challenges.",
    minister: { name: "Isabella M. Chen", avatar: imgUnsplash1, partyName: "CVP", partyFlag: imgFlag2 },
    mos: null,
    questionHourThemes: [
      { id: 17, theme: "Defence Modernisation", questionsReceived: 6 },
      { id: 18, theme: "Veteran Welfare Schemes", questionsReceived: 4 },
      { id: 19, theme: "Indigenous Equipment Production", questionsReceived: 3 },
    ],
  },
];

// ── Minister Row (used inside each ministry) ─────────────────────────────────

function MinisterPersonRow({
  person,
  roleLabel,
}: {
  person: { name: string; avatar: string; partyName: string; partyFlag: string };
  roleLabel: string;
}) {
  return (
    <div className="flex items-center gap-[8px] w-full">
      {/* Avatar */}
      <div className="relative shrink-0 size-[28px]">
        <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-full size-[28px] top-0">
          <img alt="" className="block max-w-none size-full object-cover" height="28" src={person.avatar} width="28" />
        </div>
      </div>

      {/* Name + Party */}
      <div className="flex items-center gap-[6px] flex-1 min-w-0">
        <p className="leading-[16px] text-[var(--foreground)] text-[length:var(--text-base)] truncate">{person.name}</p>
        <StatusChip label={person.partyName} variant="alliance">
          <div className="relative shrink-0 size-[12px]">
            <img alt="" className="block max-w-none size-full rounded-full object-cover" height="12" src={person.partyFlag} width="12" />
          </div>
        </StatusChip>
      </div>

      {/* Role chip */}
      <StatusChip label={roleLabel} />
    </div>
  );
}

// ── Ministry Detail Modal ────────────────────────────────────────────────────

function MinistryDetailModal({
  isOpen,
  onClose,
  ministry,
}: {
  isOpen: boolean;
  onClose: () => void;
  ministry: Ministry;
}) {
  if (!isOpen) return null;

  const totalQuestions = ministry.questionHourThemes.reduce(
    (sum, t) => sum + t.questionsReceived,
    0
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
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative overflow-y-auto max-h-[80vh] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Header */}
          <div className="flex flex-col gap-[4px] w-full">
            <p className="font-semibold leading-[20px] text-[#041a5e] text-[length:var(--text-h4)]">
              Ministry of {ministry.name}
            </p>
            <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-base)]">
              {ministry.description}
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[var(--sidebar-primary)]" />

          {/* Ministers Section */}
          <div className="flex flex-col gap-[12px] w-full">
            <p className="font-semibold leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">
              Ministers
            </p>
            <div className="flex flex-col gap-[8px] w-full">
              <MinisterPersonRow person={ministry.minister} roleLabel="Minister" />
              {ministry.mos && (
                <MinisterPersonRow person={ministry.mos} roleLabel="MoS" />
              )}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[var(--sidebar-primary)]" />

          {/* Question Hour Themes Section */}
          <div className="flex flex-col gap-[12px] w-full">
            <div className="flex items-center gap-[8px]">
              <p className="font-semibold leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">
                Question Hour Themes
              </p>
              <StatusChip
                label={`${totalQuestions} Questions`}
                variant="alliance"
              />
            </div>
            <div className="flex flex-col w-full">
              {ministry.questionHourThemes.map((theme, index) => (
                <div key={theme.id}>
                  {index > 0 && (
                    <div className="h-px bg-[var(--sidebar-primary)]" />
                  )}
                  <div className="flex items-center justify-between py-[10px]">
                    <p className="leading-[16px] text-[var(--foreground)] text-[length:var(--text-base)]">
                      {theme.theme}
                    </p>
                    <StatusChip
                      label={`${theme.questionsReceived}`}
                      variant="default"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Council of Ministers Card ─────────────────────────────────────────────────

function CouncilOfMinistersCard() {
  const [selectedMinistry, setSelectedMinistry] = useState<Ministry | null>(null);

  return (
    <>
      <div className="bg-white relative rounded-[var(--radius-card)] shrink-0 w-full">
        <div
          aria-hidden="true"
          className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]"
        />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          {/* Title */}
          <div className="flex items-center gap-[8px]">
            <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">Council of Ministers</p>
            <StatusChip label={`${MINISTRIES.length} Portfolios`} variant="alliance" />
          </div>

          {/* Ministries List — action card style */}
          <div className="flex flex-col w-full -mx-[8px] -mt-[10px]">
            {MINISTRIES.map((ministry, index) => (
              <div key={ministry.id}>
                {index > 0 && (
                  <div className="h-px bg-[var(--sidebar-primary)] mx-[12px]" />
                )}
                <button
                  onClick={() => setSelectedMinistry(ministry)}
                  className="w-full text-left hover:bg-[var(--input-background)] px-[8px] py-[10px] rounded-[var(--radius)] transition-colors cursor-pointer"
                >
                  {/* Ministry Name */}
                  <p className="flex items-center gap-[6px] font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)] mb-[10px]">
                    {ministry.name}
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 opacity-30">
                      <path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </p>

                  {/* Minister & MoS rows */}
                  <div className="flex flex-col gap-[8px]">
                    <MinisterPersonRow person={ministry.minister} roleLabel="Minister" />
                    {ministry.mos && (
                      <MinisterPersonRow person={ministry.mos} roleLabel="MoS" />
                    )}
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ministry Detail Modal */}
      {selectedMinistry && (
        <MinistryDetailModal
          isOpen={!!selectedMinistry}
          onClose={() => setSelectedMinistry(null)}
          ministry={selectedMinistry}
        />
      )}
    </>
  );
}

// ── Speaker List Data ────────────────────────────────────────────────────────

interface Speaker {
  id: number;
  name: string;
  avatar: string;
  partyName: string;
  partyFlag: string;
  time: string;
}

const DAY1_SPEAKERS: Speaker[] = [
  { id: 1, name: "Sheilah T. Sayasane", avatar: imgUnsplash1, partyName: "UPP", partyFlag: imgFlag, time: "5 min" },
  { id: 2, name: "Alex Johnson", avatar: imgUnsplash4, partyName: "TRP", partyFlag: imgFlag1, time: "8 min" },
  { id: 3, name: "Aleta H. Starcher", avatar: imgUnsplash3, partyName: "UPP", partyFlag: imgFlag, time: "5 min" },
  { id: 4, name: "Isabella M. Chen", avatar: imgUnsplash7, partyName: "CVP", partyFlag: imgFlag2, time: "7 min" },
  { id: 5, name: "Roy X. Hinde", avatar: imgUnsplash2, partyName: "UPP", partyFlag: imgFlag, time: "5 min" },
];

const DAY2_SPEAKERS: Speaker[] = [
  { id: 6, name: "Marcus T. Reynolds", avatar: imgUnsplash5, partyName: "TRP", partyFlag: imgFlag1, time: "10 min" },
  { id: 7, name: "Alice Thompson", avatar: imgUnsplash6, partyName: "CVP", partyFlag: imgFlag2, time: "6 min" },
];

const PREVIEW_SPEAKER_COUNT = 3;

// ── Speaker Row ──────────────────────────────────────────────────────────────

function SpeakerRow({ speaker }: { speaker: Speaker }) {
  return (
    <div className="flex items-center gap-[8px] w-full">
      {/* Member Avatar */}
      <div className="relative shrink-0 size-[32px]">
        <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0">
          <img alt="" className="block max-w-none size-full" height="32" src={speaker.avatar} width="32" />
        </div>
      </div>

      {/* Name + Party Chip */}
      <div className="flex items-center gap-[6px] flex-1 min-w-0">
        <p className="leading-[16px] text-[var(--foreground)] text-[length:var(--text-base)] truncate">{speaker.name}</p>
        <StatusChip label={speaker.partyName} variant="alliance">
          <div className="relative shrink-0 size-[12px]">
            <img alt="" className="block max-w-none size-full rounded-full object-cover" height="12" src={speaker.partyFlag} width="12" />
          </div>
        </StatusChip>
      </div>

      {/* Time Chip */}
      <StatusChip label={speaker.time} variant="default" />
    </div>
  );
}

// ── Speaker List Modal ───────────────────────────────────────────────────────

function SpeakerListModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="bg-white relative rounded-[12px] max-w-[500px] w-full max-h-[80vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]"
        />
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative overflow-y-auto max-h-[80vh] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Header */}
          <div className="flex flex-col gap-[8px] w-full">
            <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">Speaker List</p>
            <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-base)]">Climate Policy Reform Debate</p>
          </div>

          {/* Day 1 Section */}
          <div className="flex flex-col gap-[16px] w-full">
            <div className="flex items-center gap-[8px]">
              <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Day 1</p>
              <StatusChip label="30 min" variant="alliance" />
            </div>
            <div className="flex flex-col gap-[12px] w-full">
              {DAY1_SPEAKERS.map((speaker) => (
                <SpeakerRow key={speaker.id} speaker={speaker} />
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[var(--sidebar-primary)]" />

          {/* Day 2 Section */}
          <div className="flex flex-col gap-[16px] w-full">
            <div className="flex items-center gap-[8px]">
              <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Day 2</p>
              <StatusChip label="16 min" variant="alliance" />
            </div>
            <div className="flex flex-col gap-[12px] w-full">
              {DAY2_SPEAKERS.map((speaker) => (
                <SpeakerRow key={speaker.id} speaker={speaker} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Speaker List Card (preview) ──────────────────────────────────────────────

function SpeakerListCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDate = (date: Date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${days[date.getDay()]}`;
  };

  const day1Date = new Date(2026, 1, 26);
  const day2Date = new Date(2026, 1, 27);

  const day1Preview = DAY1_SPEAKERS.slice(0, PREVIEW_SPEAKER_COUNT);
  const day1Remaining = DAY1_SPEAKERS.length - PREVIEW_SPEAKER_COUNT;

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="bg-white relative rounded-[12px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow"
      >
        <div
          aria-hidden="true"
          className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]"
        />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          {/* Title */}
          <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">Speaker List</p>

          {/* Day 1 Preview */}
          <div className="flex flex-col gap-[12px] w-full">
            <div className="flex items-center gap-[8px]">
              <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">{formatDate(day1Date)}</p>
              <StatusChip label="30 min" variant="alliance" />
            </div>

            {day1Preview.map((speaker) => (
              <SpeakerRow key={speaker.id} speaker={speaker} />
            ))}

            {day1Remaining > 0 && (
              <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">
                +{day1Remaining} more {day1Remaining === 1 ? 'speaker' : 'speakers'}
              </p>
            )}
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[var(--sidebar-primary)]" />

          {/* Day 2 Preview */}
          <div className="flex flex-col gap-[12px] w-full">
            <div className="flex items-center gap-[8px]">
              <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">{formatDate(day2Date)}</p>
              <StatusChip label="16 min" variant="alliance" />
            </div>

            {DAY2_SPEAKERS.map((speaker) => (
              <SpeakerRow key={speaker.id} speaker={speaker} />
            ))}
          </div>

          {/* View Full List Link */}
          <div className="content-stretch flex gap-[6px] items-center justify-start relative shrink-0 w-full">
            <p className="leading-[14px] not-italic relative shrink-0 text-[var(--muted-foreground)] text-[length:var(--text-label)]">View full speaker list</p>
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <mask height="20" id="mask_arrow_gov_speakers" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                  <rect fill="#D9D9D9" height="20" width="20" />
                </mask>
                <g mask="url(#mask_arrow_gov_speakers)">
                  <path d="M10 16.25L8.9375 15.1875L13.3125 10.8125H3.75V9.1875H13.3125L8.9375 4.8125L10 3.75L16.25 10L10 16.25Z" fill="currentColor" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <SpeakerListModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

// ── Main Tab ─────────────────────────────────────────────────────────────────

export function GovernmentTab() {
  return (
    <div className="flex gap-[24px] w-full items-start">
      {/* Left Column */}
      <div className="flex flex-col gap-[18px] flex-1">
        <CouncilOfMinistersCard />
      </div>

      {/* Right Column */}
      <div className="flex flex-col gap-[18px] flex-1">
        <CoalitionCard />
        <SpeakerListCard />
      </div>
    </div>
  );
}