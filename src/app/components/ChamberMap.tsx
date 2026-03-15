/**
 * Chamber Seating Map
 * Visual representation of the legislative chamber showing Government and Opposition benches
 * with the Speaker in the center.
 */

import { useParties } from '../context/PartyContext';

interface ChamberMapProps {
  speakerName?: string;
  speakerAvatarUrl?: string;
}

export function ChamberMap({
  speakerName = "Speaker",
  speakerAvatarUrl,
}: ChamberMapProps) {
  const { governmentParties, oppositionParties } = useParties();

  const totalStudents = governmentParties.reduce((sum, p) => sum + p.members.length, 0)
    + oppositionParties.reduce((sum, p) => sum + p.members.length, 0);
  const totalParties = governmentParties.length + oppositionParties.length;

  // Collect all members from government parties
  const governmentMembers = governmentParties.flatMap(party => 
    party.members.map(member => ({
      id: `gov-${party.id}-${member.id}`,
      name: member.name,
      initials: member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(),
      avatarUrl: member.avatar,
    }))
  );

  // Collect all members from opposition parties
  const oppositionMembers = oppositionParties.flatMap(party =>
    party.members.map(member => ({
      id: `opp-${party.id}-${member.id}`,
      name: member.name,
      initials: member.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(),
      avatarUrl: member.avatar,
    }))
  );

  return (
    <div className="flex flex-col gap-0 w-full">
      {/* Chamber Seating Visualization */}
      <div className="bg-[var(--input)] content-stretch flex gap-[80px] items-center justify-center px-[24px] py-[32px] relative rounded-t-[40px] w-full">
        <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-t-[40px] border-b-0" />
        
        {/* Government Side */}
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
            {/* Avatar cluster - simplified grid layout */}
            {governmentMembers.slice(0, 20).map((member, idx) => (
              <MemberAvatar
                key={member.id}
                initials={member.initials}
                avatarUrl={member.avatarUrl}
                gridPosition={getGridPosition(idx, 'government')}
              />
            ))}
          </div>
          <p className="font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[var(--muted-foreground)] text-[length:var(--text-label)] text-center text-ellipsis whitespace-nowrap">
            Government
          </p>
        </div>

        {/* Speaker (Center) */}
        <div className="flex flex-row items-center self-stretch">
          <div className="content-stretch flex gap-[24px] h-full items-center justify-center relative shrink-0">
            <div className="-translate-x-1/2 absolute bg-[#f1f2f8] h-[190px] left-[calc(50%-0.5px)] top-0 w-px" />
            <div className="content-stretch flex flex-col gap-[24px] h-full items-center relative shrink-0">
              {/* Speaker Avatar */}
              <div className="relative rounded-[101.538px] shrink-0 size-[40px]">
                <div className="overflow-clip relative rounded-[inherit] size-full">
                  {speakerAvatarUrl ? (
                    <img src={speakerAvatarUrl} alt={speakerName} className="absolute block max-w-none size-full object-cover" />
                  ) : (
                    <div className="absolute inset-0 bg-[#e7f2fe] flex items-center justify-center">
                      <p className="font-semibold text-[12px] text-[#1850c5]">SP</p>
                    </div>
                  )}
                </div>
                <div aria-hidden="true" className="absolute border-[#f1f2f8] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[101.538px]" />
              </div>
              
              {/* Deputy Speakers */}
              <div className="bg-[#d0e5fd] content-stretch flex flex-col gap-[16px] items-start px-[12px] py-[8px] relative rounded-[10000px] shrink-0">
                <DeputySpeakerAvatar />
                <DeputySpeakerAvatar />
                <DeputySpeakerAvatar />
              </div>
            </div>
          </div>
        </div>

        {/* Opposition Side */}
        <div className="content-stretch flex flex-col gap-[16px] items-center relative shrink-0">
          <div className="flex items-center justify-center leading-[0] relative shrink-0">
            <div className="-scale-y-100 flex-none rotate-180">
              <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative">
                {/* Avatar cluster - mirrored */}
                {oppositionMembers.slice(0, 20).map((member, idx) => (
                  <MemberAvatar
                    key={member.id}
                    initials={member.initials}
                    avatarUrl={member.avatarUrl}
                    gridPosition={getGridPosition(idx, 'opposition')}
                  />
                ))}
              </div>
            </div>
          </div>
          <p className="font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[var(--muted-foreground)] text-[length:var(--text-label)] text-center text-ellipsis whitespace-nowrap">
            Opposition
          </p>
        </div>
      </div>

      {/* House Composition Stats Bar */}
      <div className="bg-white content-stretch flex items-center justify-center gap-[32px] px-[24px] py-[12px] relative rounded-b-[20px] w-full">
        <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-b-[20px] border-t-0" />
        {/* Divider line at top */}
        <div className="absolute top-0 left-[24px] right-[24px] h-px bg-[var(--card-border)]" />
        <div className="flex items-center gap-[6px]">
          <p className="leading-[14px] not-italic text-[var(--muted-foreground)] text-[length:var(--text-label)]">Total Students</p>
          <p className="font-semibold leading-[14px] not-italic text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)]">{totalStudents}</p>
        </div>
        <div className="w-px h-[14px] bg-[var(--card-border)]" />
        <div className="flex items-center gap-[6px]">
          <p className="leading-[14px] not-italic text-[var(--muted-foreground)] text-[length:var(--text-label)]">Parties</p>
          <p className="font-semibold leading-[14px] not-italic text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)]">{totalParties}</p>
        </div>
        <div className="w-px h-[14px] bg-[var(--card-border)]" />
        <div className="flex items-center gap-[6px]">
          <p className="leading-[14px] not-italic text-[var(--muted-foreground)] text-[length:var(--text-label)]">Government</p>
          <p className="font-semibold leading-[14px] not-italic text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)]">{governmentParties.length}</p>
        </div>
        <div className="w-px h-[14px] bg-[var(--card-border)]" />
        <div className="flex items-center gap-[6px]">
          <p className="leading-[14px] not-italic text-[var(--muted-foreground)] text-[length:var(--text-label)]">Opposition</p>
          <p className="font-semibold leading-[14px] not-italic text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)]">{oppositionParties.length}</p>
        </div>
      </div>
    </div>
  );
}

// Helper function to calculate grid positions matching the Figma layout
function getGridPosition(index: number, side: 'government' | 'opposition'): string {
  const positions = [
    'ml-0 mt-0',
    'ml-0 mt-[26px]',
    'ml-[26px] mt-[13px]',
    'ml-[52px] mt-[25px]',
    'ml-[78px] mt-[39px]',
    'ml-[104px] mt-[53px]',
    'ml-[130px] mt-[67px]',
    'ml-0 mt-[52px]',
    'ml-[26px] mt-[39px]',
    'ml-[52px] mt-[51px]',
    'ml-[78px] mt-[65px]',
    'ml-[104px] mt-[79px]',
    'ml-0 mt-[78px]',
    'ml-[26px] mt-[65px]',
    'ml-[52px] mt-[77px]',
    'ml-[78px] mt-[91px]',
    'ml-0 mt-[104px]',
    'ml-[26px] mt-[91px]',
    'ml-[52px] mt-[103px]',
    'ml-0 mt-[130px]',
  ];
  
  return positions[index] || 'ml-0 mt-0';
}

// Member Avatar Component
function MemberAvatar({
  initials,
  avatarUrl,
  gridPosition,
}: {
  initials?: string;
  avatarUrl?: string;
  gridPosition: string;
}) {
  return (
    <div className={`col-1 relative rounded-[40px] row-1 size-[24px] ${gridPosition}`}>
      <div className="overflow-clip relative rounded-[inherit] size-full">
        {avatarUrl ? (
          <img src={avatarUrl} alt="" className="absolute block max-w-none size-full object-cover" />
        ) : initials ? (
          <div className="absolute inset-0 bg-[#e7f2fe] flex items-center justify-center">
            <p className="font-semibold text-[10px] leading-[14px] text-[#1850c5]">{initials}</p>
          </div>
        ) : (
          <div className="absolute inset-0 bg-[#e7f2fe]" />
        )}
      </div>
      <div aria-hidden="true" className="absolute border-[#f1f2f8] border-[0.3px] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </div>
  );
}

// Deputy Speaker Avatar Component
function DeputySpeakerAvatar() {
  return (
    <div className="flex items-center justify-center relative shrink-0">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="relative rounded-[40px] size-[24px]">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute inset-0 bg-[#e7f2fe]" />
          </div>
          <div aria-hidden="true" className="absolute border-[#f1f2f8] border-[0.3px] border-solid inset-0 pointer-events-none rounded-[40px]" />
        </div>
      </div>
    </div>
  );
}