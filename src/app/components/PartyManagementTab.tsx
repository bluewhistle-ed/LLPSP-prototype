import imgFlag from "figma:asset/e93f8184d4e0a003421c8b115cdf0646b0047716.png";
import svgPaths from "../../imports/svg-g3dbnhdfg1";
import svgPathsFlag from "../../imports/svg-txfaz6sn9l";
import imgEllipse3 from "figma:asset/255027fc50bca580e944d9010026369329af8a73.png";
import imgUnsplash0HjWobhGhJs1 from "figma:asset/2255efa6e3d4e9cd3d5daf58f5f5df679f8ce61b.png";
import imgUnsplash0HjWobhGhJs2 from "figma:asset/bdd8fbc00e625d0c6fe14c2c8af968a19e0b5258.png";
import imgUnsplash0HjWobhGhJs3 from "figma:asset/666aaf651ac2fa50457b5314dddb3ef527236357.png";
import imgUnsplash0HjWobhGhJs4 from "figma:asset/0c010bee9a65e7abc8fbcfcd9aabb12192721142.png";
import imgUnsplash0HjWobhGhJs5 from "figma:asset/4fe1dc6012c7950c64680d0050aa8870cf6b7629.png";
import imgUnsplash0HjWobhGhJs6 from "figma:asset/970678de1f18c883f87566bc9d6cb8a33ce7c22b.png";
import imgUnsplash0HjWobhGhJs7 from "figma:asset/1fe3a74538117eb749053e9327f4316a11266495.png";
import imgFlag1 from "figma:asset/f3d28dab76472dda8be30af14710d0d9220a3f6c.png";
import imgFlag2 from "figma:asset/0f2334d3dd6983342dde2fc10d440067b79ce1fa.png";
import { Search, Send, ArrowDown } from "lucide-react";
import { Link } from "lucide-react";
import { useState, useRef, useEffect } from "react";

// Shared party members data
const ALL_PARTY_MEMBERS = [
  { id: 1, name: "Sheilah T. Sayasane", role: "President", avatar: imgUnsplash0HjWobhGhJs1 },
  { id: 2, name: "Roy X. Hinde", role: "V.President", avatar: imgUnsplash0HjWobhGhJs2 },
  { id: 3, name: "Aleta H. Starcher", role: "Member", avatar: imgUnsplash0HjWobhGhJs3 },
  { id: 4, name: "Mai G. Sollom", role: "Member", avatar: imgUnsplash0HjWobhGhJs4 },
  { id: 5, name: "Latricia W. Silletti", role: "Minister", avatar: imgUnsplash0HjWobhGhJs5 },
  { id: 6, name: "Adrianne P. Tillis", role: "Member", avatar: imgUnsplash0HjWobhGhJs6 },
  { id: 7, name: "Elvira E. Aus", role: "Member", avatar: imgUnsplash0HjWobhGhJs7 },
  { id: 8, name: "Marcus T. Reynolds", role: "Member", avatar: "https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzE5Njk3MTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 9, name: "Isabella M. Chen", role: "Member", avatar: "https://images.unsplash.com/photo-1701096351544-7de3c7fa0272?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDF8fHx8MTc3MTk5NDA4N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 10, name: "David R. Patterson", role: "Minister", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTkzMTQ0OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 11, name: "Sophia L. Martinez", role: "Member", avatar: "https://images.unsplash.com/photo-1752650735547-990f918bd028?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHdvbWFuJTIwcGhvdG98ZW58MXx8fHwxNzcyMDI2MjcwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 12, name: "James K. Anderson", role: "Member", avatar: "https://images.unsplash.com/photo-1652471943570-f3590a4e52ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMG1hbnxlbnwxfHx8fDE3NzE5OTU5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 13, name: "Emily R. Thompson", role: "Member", avatar: "https://images.unsplash.com/photo-1689600944138-da3b150d9cb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFufGVufDF8fHx8MTc3MjAxMjIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 14, name: "Nathan S. Wright", role: "Minister", avatar: "https://images.unsplash.com/photo-1769636929261-e913ed023c83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBtYW4lMjBoZWFkc2hvdHxlbnwxfHx8fDE3NzE5MTUzMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 15, name: "Olivia H. Bennett", role: "Member", avatar: "https://images.unsplash.com/photo-1613473350016-1fe047d6d360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTk4NjM3Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
];

const PREVIEW_MEMBER_COUNT = 5;

// Party Ideology Card
function PartyIdeologyCard() {
  const allianceParties = [
    { id: 1, name: "TRP", avatar: imgFlag1 },
    { id: 2, name: "CVP", avatar: imgFlag2 },
  ];

  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
        <div className="flex items-start gap-[12px] w-full">
          {/* Party Logo */}
          <div className="relative shrink-0 size-[48px]">
            <img alt="Party Logo" className="block max-w-none size-full rounded-full" src={imgFlag} />
          </div>
          
          {/* Name and Details */}
          <div className="flex flex-col gap-[8px] flex-1">
            <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">Unity Progress Party</p>
            
            {/* Treasury Chip and Alliance Chips */}
            <div className="flex items-center gap-[6px] flex-wrap">
              <div className="bg-[#e6f7ee] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                <div aria-hidden="true" className="absolute border-[#42a22a] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#2d7a1e] text-[12px] text-ellipsis whitespace-nowrap">Treasury</p>
              </div>
              
              {/* Alliance Chips */}
              {allianceParties.map((party) => (
                <div key={party.id} className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                  <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <Link className="size-[12px] text-[#6e7ca8] shrink-0" />
                  <div className="relative shrink-0 size-[12px]">
                    <img alt="" className="block max-w-none size-full rounded-full object-cover" height="12" src={party.avatar} width="12" />
                  </div>
                  <p className="leading-[14px] text-[#3c4c7c] text-[12px]">{party.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Ideology Description */}
        <div className="flex flex-col gap-[12px] p-[12px] rounded-[8px] bg-[#f8f9fb] w-full">
          <p className="leading-[20px] text-[#6e7ca8] text-[14px]">
            We believe in collaborative governance, sustainable growth, and social equity. Empowering communities through inclusive policies, innovation, and equal access to education and healthcare for all.
          </p>
        </div>
      </div>
    </div>
  );
}

// Party Members Modal
function PartyMembersModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [searchQuery, setSearchQuery] = useState("");

  if (!isOpen) return null;

  const filteredMembers = ALL_PARTY_MEMBERS.filter(member =>
    member.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const leaders = filteredMembers.filter(m => m.role === "President" || m.role === "V.President");
  const regularMembers = filteredMembers.filter(m => m.role !== "President" && m.role !== "V.President");

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-[12px] max-w-[500px] w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative">
          {/* Header */}
          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
            <div className="relative shrink-0 size-[40px]">
              <div className="absolute border-[0.465px] border-solid border-white inset-0 overflow-clip rounded-[5.581px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgFlag} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px not-italic relative text-ellipsis">
              <div className="flex flex-col font-semibold justify-center overflow-hidden relative shrink-0 text-[#2f3e6d] text-[16px] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">Unity Progress Party</p>
              </div>
              <div className="flex flex-col justify-center overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] w-full">
                <p className="leading-[1.4] whitespace-pre-wrap">Forging Together, Advancing Forward</p>
              </div>
            </div>
          </div>

          {/* Member Count */}
          <div className="bg-[#f8f9fb] content-stretch flex gap-[12px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
            <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
              <div className="relative shrink-0 size-[16px]">
                <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse3} width="16" />
              </div>
              <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
                <p className="leading-[16px]">{members.length} Members</p>
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
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full max-h-[400px] overflow-y-auto scrollbar-hide">
            {/* Leaders Section */}
            {leaders.length > 0 && (
              <>
                <div className="flex flex-col font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis w-full whitespace-nowrap">
                  <p className="leading-[14px] overflow-hidden">Leaders</p>
                </div>
                {leaders.map((member) => (
                  <MemberRow key={member.id} member={member} />
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
                  <MemberRow key={member.id} member={member} />
                ))}
              </>
            )}

            {filteredMembers.length === 0 && (
              <p className="text-[#6e7ca8] text-[14px] leading-[16px] w-full text-center py-[20px]">No members found</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Member Row Component
function MemberRow({ member }: { member: { id: number; name: string; role: string; avatar: string } }) {
  const getRoleTag = () => {
    if (member.role === "President") {
      return (
        <div className="bg-[#e7f2fe] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border-[#3c7ce8] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="relative shrink-0 size-[12px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <mask height="12" id="mask_president_party" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                <rect fill="#D9D9D9" height="12" width="12" />
              </mask>
              <g mask="url(#mask_president_party)">
                <path d={svgPathsFlag.p34b4d070} fill="#1850C5" />
              </g>
            </svg>
          </div>
          <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#1850c5] text-[12px] text-ellipsis">President</p>
        </div>
      );
    } else if (member.role === "V.President") {
      return (
        <div className="bg-[#f5f0ff] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border-[#6820ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <div className="relative shrink-0 size-[12px]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
              <mask height="12" id="mask_vpresident_party" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
                <rect fill="#D9D9D9" height="12" width="12" />
              </mask>
              <g mask="url(#mask_vpresident_party)">
                <path d={svgPathsFlag.p34b4d070} fill="#6820FF" />
              </g>
            </svg>
          </div>
          <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6820ff] text-[12px] text-ellipsis">V. President</p>
        </div>
      );
    } else if (member.role === "Minister") {
      return (
        <div className="bg-[#fef3e0] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
          <div aria-hidden="true" className="absolute border-[#f59e0b] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
          <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#d97706] text-[12px] text-ellipsis">Minister</p>
        </div>
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
        <div className="flex items-center gap-[6px] leading-[0] not-italic relative text-[#2f3e6d] text-[14px]">
          <p className="leading-[16px]">{member.name}</p>
          {getRoleTag()}
        </div>
      </div>
    </div>
  );
}

// Party Members Card (shows preview with "View All" button)
function PartyMembersCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Show only the first few members as preview
  const allPreviewMembers = ALL_PARTY_MEMBERS.slice(0, PREVIEW_MEMBER_COUNT);
  const remainingMemberCount = ALL_PARTY_MEMBERS.length - PREVIEW_MEMBER_COUNT;

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-white relative rounded-[12px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow"
      >
        <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          {/* Preview Members */}
          <div className="flex flex-col gap-[12px] w-full">
            {allPreviewMembers.map((member) => (
              <MemberRow key={member.id} member={member} />
            ))}
          </div>

          {/* See More Link */}
          <div className="content-stretch flex gap-[6px] items-center justify-start relative shrink-0 w-full">
            <p className="leading-[14px] not-italic relative shrink-0 text-[#6e7ca8] text-[12px]">
              View {remainingMemberCount} more {remainingMemberCount === 1 ? 'member' : 'members'}
            </p>
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <mask height="20" id="mask_arrow_members" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                  <rect fill="#D9D9D9" height="20" width="20" />
                </mask>
                <g mask="url(#mask_arrow_members)">
                  <path d="M10 16.25L8.9375 15.1875L13.3125 10.8125H3.75V9.1875H13.3125L8.9375 4.8125L10 3.75L16.25 10L10 16.25Z" fill="#6e7ca8" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <PartyMembersModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

// Discussion Speakers Modal
function DiscussionSpeakersModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  const day1Speakers = [
    { id: 1, name: "Sheilah T. Sayasane", time: "5 min", avatar: imgUnsplash0HjWobhGhJs1 },
    { id: 2, name: "Roy X. Hinde", time: "8 min", avatar: imgUnsplash0HjWobhGhJs2 },
    { id: 3, name: "Aleta H. Starcher", time: "5 min", avatar: imgUnsplash0HjWobhGhJs3 },
    { id: 4, name: "Latricia W. Silletti", time: "7 min", avatar: imgUnsplash0HjWobhGhJs5 },
    { id: 5, name: "Adrianne P. Tillis", time: "5 min", avatar: imgUnsplash0HjWobhGhJs6 },
  ];

  const day2Speakers = [
    { id: 6, name: "Mai G. Sollom", time: "10 min", avatar: imgUnsplash0HjWobhGhJs4 },
    { id: 7, name: "Elvira E. Aus", time: "6 min", avatar: imgUnsplash0HjWobhGhJs7 },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-[12px] max-w-[500px] w-full max-h-[80vh] overflow-hidden" onClick={(e) => e.stopPropagation()}>
        <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative overflow-y-auto max-h-[80vh]">
          {/* Header */}
          <div className="flex flex-col gap-[8px] w-full">
            <p className="font-semibold leading-[20px] text-[#2f3e6d] text-[16px]">Speaker List</p>
            <p className="leading-[16px] text-[#6e7ca8] text-[14px]">Climate Policy Reform Debate</p>
          </div>

          {/* Day 1 Section */}
          <div className="flex flex-col gap-[16px] w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-[8px]">
                <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">Day 1</p>
                <div className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                  <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <p className="leading-[14px] text-[#3c4c7c] text-[12px]">30 min</p>
                </div>
              </div>
            </div>

            {/* Day 1 Speakers */}
            <div className="flex flex-col gap-[12px] w-full">
              {day1Speakers.map((speaker) => (
                <div key={speaker.id} className="flex items-center gap-[8px] w-full">
                  <div className="relative shrink-0 size-[32px]">
                    <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0">
                      <img alt="" className="block max-w-none size-full" height="32" src={speaker.avatar} width="32" />
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px] flex-1">
                    <p className="leading-[16px] text-[#2f3e6d] text-[14px]">{speaker.name}</p>
                  </div>
                  <div className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                    <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <p className="leading-[14px] text-[#6e7ca8] text-[12px]">{speaker.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#f1f2f8]" />

          {/* Day 2 Section */}
          <div className="flex flex-col gap-[16px] w-full">
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-[8px]">
                <p className="font-semibold leading-[16px] text-[#3c4c7c] text-[14px]">Day 2</p>
                <div className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                  <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <p className="leading-[14px] text-[#3c4c7c] text-[12px]">16 min</p>
                </div>
              </div>
            </div>

            {/* Day 2 Speakers */}
            <div className="flex flex-col gap-[12px] w-full">
              {day2Speakers.map((speaker) => (
                <div key={speaker.id} className="flex items-center gap-[8px] w-full">
                  <div className="relative shrink-0 size-[32px]">
                    <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0">
                      <img alt="" className="block max-w-none size-full" height="32" src={speaker.avatar} width="32" />
                    </div>
                  </div>
                  <div className="flex items-center gap-[6px] flex-1">
                    <p className="leading-[16px] text-[#2f3e6d] text-[14px]">{speaker.name}</p>
                  </div>
                  <div className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                    <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <p className="leading-[14px] text-[#6e7ca8] text-[12px]">{speaker.time}</p>
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

// Discussion Speakers Card (preview)
function DiscussionSpeakersCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Format date as "Month Day, DayName" (e.g., "Feb 25, Wednesday")
  const formatDate = (date: Date) => {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    
    return `${months[date.getMonth()]} ${date.getDate()}, ${days[date.getDay()]}`;
  };

  const day1Date = new Date(2026, 1, 26); // Feb 26, 2026 (month is 0-indexed)
  const day2Date = new Date(2026, 1, 27); // Feb 27, 2026

  const day1PreviewSpeakers = [
    { id: 1, name: "Sheilah T. Sayasane", time: "5 min", avatar: imgUnsplash0HjWobhGhJs1 },
    { id: 2, name: "Roy X. Hinde", time: "8 min", avatar: imgUnsplash0HjWobhGhJs2 },
    { id: 3, name: "Aleta H. Starcher", time: "5 min", avatar: imgUnsplash0HjWobhGhJs3 },
  ];

  const day2PreviewSpeakers = [
    { id: 6, name: "Mai G. Sollom", time: "10 min", avatar: imgUnsplash0HjWobhGhJs4 },
    { id: 7, name: "Elvira E. Aus", time: "6 min", avatar: imgUnsplash0HjWobhGhJs7 },
  ];

  return (
    <>
      <div 
        onClick={() => setIsModalOpen(true)}
        className="bg-white relative rounded-[12px] shrink-0 w-full cursor-pointer hover:shadow-md transition-shadow"
      >
        <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
          {/* Title */}
          <p className="font-semibold leading-[20px] text-[#2f3e6d] text-[16px]">Speaker List</p>

          {/* Day 1 Section */}
          <div className="flex flex-col gap-[12px] w-full">
            <div className="flex items-center gap-[8px]">
              <p className="leading-[16px] text-[#6e7ca8] text-[12px]">{formatDate(day1Date)}</p>
              <div className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <p className="leading-[14px] text-[#3c4c7c] text-[12px]">30 min</p>
              </div>
            </div>
            
            {day1PreviewSpeakers.map((speaker) => (
              <div key={speaker.id} className="flex items-center gap-[8px] w-full">
                <div className="relative shrink-0 size-[32px]">
                  <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0">
                    <img alt="" className="block max-w-none size-full" height="32" src={speaker.avatar} width="32" />
                  </div>
                </div>
                <div className="flex items-center gap-[6px] flex-1">
                  <p className="leading-[16px] text-[#2f3e6d] text-[14px]">{speaker.name}</p>
                </div>
                <div className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                  <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <p className="leading-[14px] text-[#6e7ca8] text-[12px]">{speaker.time}</p>
                </div>
              </div>
            ))}
            
            <p className="leading-[14px] text-[#6e7ca8] text-[12px]">+2 more speakers</p>
          </div>

          {/* Divider */}
          <div className="w-full h-[1px] bg-[#f1f2f8]" />

          {/* Day 2 Section */}
          <div className="flex flex-col gap-[12px] w-full">
            <div className="flex items-center gap-[8px]">
              <p className="leading-[16px] text-[#6e7ca8] text-[12px]">{formatDate(day2Date)}</p>
              <div className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                <p className="leading-[14px] text-[#3c4c7c] text-[12px]">16 min</p>
              </div>
            </div>
            
            {day2PreviewSpeakers.map((speaker) => (
              <div key={speaker.id} className="flex items-center gap-[8px] w-full">
                <div className="relative shrink-0 size-[32px]">
                  <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0">
                    <img alt="" className="block max-w-none size-full" height="32" src={speaker.avatar} width="32" />
                  </div>
                </div>
                <div className="flex items-center gap-[6px] flex-1">
                  <p className="leading-[16px] text-[#2f3e6d] text-[14px]">{speaker.name}</p>
                </div>
                <div className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                  <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                  <p className="leading-[14px] text-[#6e7ca8] text-[12px]">{speaker.time}</p>
                </div>
              </div>
            ))}
          </div>

          {/* View Speaker List Link */}
          <div className="content-stretch flex gap-[6px] items-center justify-start relative shrink-0 w-full">
            <p className="leading-[14px] not-italic relative shrink-0 text-[#6e7ca8] text-[12px]">View full speaker list</p>
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <mask height="20" id="mask_arrow_speakers" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                  <rect fill="#D9D9D9" height="20" width="20" />
                </mask>
                <g mask="url(#mask_arrow_speakers)">
                  <path d="M10 16.25L8.9375 15.1875L13.3125 10.8125H3.75V9.1875H13.3125L8.9375 4.8125L10 3.75L16.25 10L10 16.25Z" fill="#6e7ca8" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <DiscussionSpeakersModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

// Party Statistics Card
function PartyStatisticsCard() {
  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        {/* Title */}
        <p className="font-semibold leading-[20px] text-[#2f3e6d] text-[16px]">Party Statistics</p>
        
        {/* Questions */}
        <div className="flex gap-[8px] items-center w-full">
          <p className="leading-[16px] text-[#3c4c7c] text-[14px]">Questions</p>
          <div className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
            <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <p className="leading-[14px] text-[#3c4c7c] text-[12px]">25 Submitted</p>
          </div>
          <div className="bg-[#e6f7ee] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
            <div aria-hidden="true" className="absolute border-[#42a22a] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <p className="leading-[14px] text-[#2d7a1e] text-[12px]">6 Approved</p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-[1px] bg-[#f1f2f8]" />
        
        {/* Notices */}
        <div className="flex gap-[8px] items-center w-full">
          <p className="leading-[16px] text-[#3c4c7c] text-[14px]">Notices</p>
          <div className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
            <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <p className="leading-[14px] text-[#3c4c7c] text-[12px]">8 Submitted</p>
          </div>
          <div className="bg-[#e6f7ee] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
            <div aria-hidden="true" className="absolute border-[#42a22a] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <p className="leading-[14px] text-[#2d7a1e] text-[12px]">6 Approved</p>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-[1px] bg-[#f1f2f8]" />
        
        {/* Amendments */}
        <div className="flex gap-[8px] items-center w-full">
          <p className="leading-[16px] text-[#3c4c7c] text-[14px]">Amendments</p>
          <div className="bg-[#f8f9fb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
            <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <p className="leading-[14px] text-[#3c4c7c] text-[12px]">5 Submitted</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Party Chat Card
function PartyChatCard() {
  const [newMessage, setNewMessage] = useState("");
  const [showScrollButton, setShowScrollButton] = useState(false);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "Sheilah T. Sayasane",
      avatar: imgUnsplash0HjWobhGhJs1,
      content: "Team, let's focus on the climate policy amendments for tomorrow's session.",
      timestamp: "10:32 AM",
      isCurrentUser: false,
    },
    {
      id: 2,
      sender: "Roy X. Hinde",
      avatar: imgUnsplash0HjWobhGhJs2,
      content: "Agreed. I've prepared the talking points for our proposal.",
      timestamp: "10:35 AM",
      isCurrentUser: false,
    },
    {
      id: 3,
      sender: "You",
      avatar: imgUnsplash0HjWobhGhJs3,
      content: "Perfect! Should we coordinate with the allied parties?",
      timestamp: "10:38 AM",
      isCurrentUser: true,
    },
    {
      id: 4,
      sender: "Latricia W. Silletti",
      avatar: imgUnsplash0HjWobhGhJs5,
      content: "I'll reach out to TRP and CVP representatives.",
      timestamp: "10:40 AM",
      isCurrentUser: false,
    },
  ]);

  // Scroll to bottom function
  const scrollToBottom = () => {
    if (messagesContainerRef.current) {
      messagesContainerRef.current.scrollTop = messagesContainerRef.current.scrollHeight;
    }
  };

  // Check if user has scrolled up
  const handleScroll = () => {
    if (messagesContainerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = messagesContainerRef.current;
      const isNearBottom = scrollHeight - scrollTop - clientHeight < 50;
      setShowScrollButton(!isNearBottom);
    }
  };

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      const now = new Date();
      const timeStr = now.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
      
      setMessages([...messages, {
        id: messages.length + 1,
        sender: "You",
        avatar: imgUnsplash0HjWobhGhJs3,
        content: newMessage,
        timestamp: timeStr,
        isCurrentUser: true,
      }]);
      setNewMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white relative rounded-[12px] shrink-0 w-full overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px] z-10" />
      
      {/* Background Pattern - covers entire card edge to edge */}
      <div 
        className="absolute inset-0 rounded-[12px] overflow-hidden pointer-events-none opacity-[0.135]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%236e7ca8' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'%3E%3C!-- Row 1 --%3E%3C!-- Gavel --%3E%3Cpath d='M10 15 L20 5 M17 2 L23 8 M7 18 L3 22 L5 24 L9 20'/%3E%3C!-- Scales --%3E%3Cpath d='M50 5 L50 25 M45 25 L55 25 M42 10 L48 10 L45 18 L39 18 Z M52 10 L58 10 L55 18 L61 18 Z'/%3E%3C!-- Parliament Dome --%3E%3Cpath d='M85 22 L85 30 M80 30 L90 30 M82 22 Q85 18 88 22'/%3E%3Cpath d='M78 22 L92 22'/%3E%3C!-- Row 2 --%3E%3C!-- Microphone --%3E%3Cpath d='M25 45 L25 55 M22 55 L28 55 M25 55 L25 58 M25 40 Q22 40 22 43 L22 47 Q22 50 25 50 Q28 50 28 47 L28 43 Q28 40 25 40'/%3E%3C!-- Document --%3E%3Cpath d='M65 40 L65 60 L80 60 L80 40 Z M70 45 L75 45 M70 50 L75 50 M70 55 L75 55'/%3E%3C!-- Gavel --%3E%3Cpath d='M7 55 L17 45 M14 42 L20 48 M4 58 L0 62 L2 64 L6 60'/%3E%3C!-- Row 3 --%3E%3C!-- Parliament Dome --%3E%3Cpath d='M35 72 L35 80 M30 80 L40 80 M32 72 Q35 68 38 72'/%3E%3Cpath d='M28 72 L42 72'/%3E%3C!-- Scales --%3E%3Cpath d='M70 75 L70 95 M65 95 L75 95 M62 80 L68 80 L65 88 L59 88 Z M72 80 L78 80 L75 88 L81 88 Z'/%3E%3C!-- Microphone --%3E%3Cpath d='M95 75 L95 85 M92 85 L98 85 M95 85 L95 88 M95 70 Q92 70 92 73 L92 77 Q92 80 95 80 Q98 80 98 77 L98 73 Q98 70 95 70'/%3E%3C!-- Additional scattered icons --%3E%3C!-- Document small --%3E%3Cpath d='M45 85 L45 98 L55 98 L55 85 Z M48 88 L52 88 M48 92 L52 92'/%3E%3C!-- Gavel --%3E%3Cpath d='M85 5 L95 -5 M92 -8 L98 -2 M82 8 L78 12 L80 14 L84 10'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '48px 48px',
        }}
      />
      
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative w-full">
        {/* Messages Container */}
        <div className="relative w-full">
          <div 
            ref={messagesContainerRef}
            onScroll={handleScroll}
            className="flex flex-col gap-[12px] w-full max-h-[400px] overflow-y-auto pr-[8px] relative"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {messages.map((message) => (
              <div key={message.id} className={`flex gap-[8px] w-full ${message.isCurrentUser ? 'flex-row-reverse' : ''}`}>
                {/* Avatar */}
                <div className="relative shrink-0 size-[32px]">
                  <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-full size-[32px] top-0">
                    <img alt="" className="block max-w-none size-full object-cover" height="32" src={message.avatar} width="32" />
                  </div>
                </div>
                
                {/* Message Content */}
                <div className={`flex flex-col gap-[4px] max-w-[70%] ${message.isCurrentUser ? 'items-end' : ''}`}>
                  <div className="flex items-center gap-[6px]">
                    <p className={`leading-[16px] text-[14px] ${message.isCurrentUser ? 'text-[#1850c5]' : 'text-[#2f3e6d]'}`}>
                      {message.sender}
                    </p>
                    <p className="leading-[14px] text-[#6e7ca8] text-[12px]">{message.timestamp}</p>
                  </div>
                  <div className={`relative ${message.isCurrentUser ? 'bg-[#e7f2fe]' : 'bg-[#f8f9fb]'} px-[12px] py-[8px] rounded-[8px] w-full border ${message.isCurrentUser ? 'border-[#3c7ce8]' : 'border-[#e3e6f0]'} border-[0.5px]`}>
                    <p className="leading-[20px] text-[#6e7ca8] text-[14px] break-words">
                      {message.content}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scroll to Bottom Button */}
          {showScrollButton && (
            <button
              onClick={scrollToBottom}
              className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-[#2766da] rounded-full size-[36px] hover:bg-[#1e52b0] transition-colors flex items-center justify-center shadow-lg z-10"
            >
              <ArrowDown className="size-[18px] text-white" />
            </button>
          )}
        </div>
        
        {/* Message Input */}
        <div className="flex gap-[8px] items-center w-full">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full px-[12px] py-[8px] rounded-[8px] border border-[#e3e6f0] text-[14px] text-[#2f3e6d] leading-[16px] focus:outline-none focus:border-[#3c7ce8] placeholder:text-[#6e7ca8]"
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!newMessage.trim()}
            className="bg-[#2766da] relative rounded-[8px] shrink-0 h-[34px] w-[34px] hover:bg-[#1e52b0] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <Send className="size-[18px] text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Main Party Management Tab Component
export function PartyManagementTab() {
  return (
    <div className="flex gap-[24px] w-full items-start">
      {/* Left Column */}
      <div className="flex flex-col gap-[18px] flex-1">
        <PartyIdeologyCard />
        <PartyStatisticsCard />
        <PartyChatCard />
      </div>
      
      {/* Right Column */}
      <div className="flex flex-col gap-[18px] flex-1">
        <PartyMembersCard />
        <DiscussionSpeakersCard />
      </div>
    </div>
  );
}