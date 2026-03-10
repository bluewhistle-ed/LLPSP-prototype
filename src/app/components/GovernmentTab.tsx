import { Search } from 'lucide-react';
import { useState } from 'react';
import { StatusChip } from './StatusChip';
import svgPathsFlag from "../../imports/svg-txfaz6sn9l";
import { useParties } from '../context/PartyContext';
import { useGovernment } from '../context/GovernmentContext';
import type { Party, PartyMember, MinistryWithMinisters, SpeakerEntry } from '../types';

// ── Read-only Member Row (matches PartyManagementTab MemberRow) ──────────────

function ReadOnlyMemberRow({ member }: { member: PartyMember }) {
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
  party: Party;
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
  const { governmentParties, totalHouseStrength } = useParties();
  const [selectedParty, setSelectedParty] = useState<Party | null>(null);

  return (
    <>
      <div className="bg-white relative rounded-[12px] shrink-0 w-full">
        <div
          aria-hidden="true"
          className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]"
        />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          <div className="flex items-center gap-[8px]">
            <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">Government</p>
            <StatusChip label={`${governmentParties.reduce((sum, p) => sum + p.memberCount, 0)}/${totalHouseStrength} Members`} />
          </div>

          {/* Coalition Parties List — action card style */}
          <div className="flex flex-col w-full -mx-[8px] -mt-[10px]">
            {governmentParties.map((party, index) => (
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
  ministry: MinistryWithMinisters;
}) {
  if (!isOpen) return null;

  const totalQuestions = ministry.questionThemes.reduce(
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

          {/* Question Themes Section */}
          <div className="flex flex-col gap-[12px] w-full">
            <div className="flex items-center gap-[8px]">
              <p className="font-semibold leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">
                Question Themes
              </p>
              <StatusChip
                label={`${totalQuestions} Questions`}
                variant="alliance"
              />
            </div>
            <div className="flex flex-col w-full">
              {ministry.questionThemes.map((theme, index) => (
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
  const { councilOfMinisters } = useGovernment();
  const [selectedMinistry, setSelectedMinistry] = useState<MinistryWithMinisters | null>(null);

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
            <StatusChip label={`${councilOfMinisters.length} Portfolios`} variant="alliance" />
          </div>

          {/* Ministries List — action card style */}
          <div className="flex flex-col w-full -mx-[8px] -mt-[10px]">
            {councilOfMinisters.map((ministry, index) => (
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

const PREVIEW_SPEAKER_COUNT = 3;

// ── Speaker Row ──────────────────────────────────────────────────────────────

function SpeakerRow({ speaker }: { speaker: SpeakerEntry }) {
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
  const { day1Speakers, day2Speakers } = useGovernment();

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
              {day1Speakers.map((speaker) => (
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
              {day2Speakers.map((speaker) => (
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
  const { day1Speakers, day2Speakers } = useGovernment();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatDate = (date: Date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return `${months[date.getMonth()]} ${date.getDate()}, ${days[date.getDay()]}`;
  };

  const day1Date = new Date(2026, 1, 26);
  const day2Date = new Date(2026, 1, 27);

  const day1Preview = day1Speakers.slice(0, PREVIEW_SPEAKER_COUNT);
  const day1Remaining = day1Speakers.length - PREVIEW_SPEAKER_COUNT;

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

            {day2Speakers.map((speaker) => (
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