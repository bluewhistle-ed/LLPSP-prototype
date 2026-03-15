// ── Shared Home-Page Card Components ────────────────────────────────────────
// Used by both StudentDashboardPage and SpeakerHomePage.
// Each card accepts data via props so the calling page controls the content.

import svgPaths from "../../imports/svg-pmfs343q75";
import { imgUnsplash0HjWobhGhJs } from "../../imports/svg-8iuiz";
import { useNavigate } from "react-router";

// ── Data Interfaces ─────────────────────────────────────────────────────────

export interface RegisteredPSPData {
  title: string;
  theme: string;
  nextSession: string;
  tasks: Array<{ name: string; dueDate: string }>;
}

export interface AvailablePSPItem {
  id: string | number;
  title: string;
  theme: string;
  registered: number;
  status: string;            // "Upcoming" | "Ongoing" etc.
  registrationStatus: string; // "Open" | "Filling fast" etc.
  imgSrc: string;
}

export interface AnnouncementItem {
  id: string | number;
  title: string;
  description: string;
}

export interface LeaderboardItem {
  id: string | number;
  name: string;
  school: string;
  image: string;
  medal: string | null;
  rank: number;
}

// ── Inline Icons ────────────────────────────────────────────────────────────

function IconsOpenInFull() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / open_in_full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / open_in_full">
          <mask height="16" id="mask0_62_5790" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5790)">
            <path d={svgPaths.p2d8a280} fill="var(--fill-0, #2F3E6D)" id="open_in_full" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsGroup() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / group">
          <mask height="16" id="mask0_62_5773" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5773)">
            <path d={svgPaths.p26d0f0c0} fill="var(--fill-0, #6E7CA8)" id="group" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// ── 1. MyRegisteredPSPCard ──────────────────────────────────────────────────

export function MyRegisteredPSPCard({
  psp,
  navigateTo,
  thumbnailSrc,
  ctaLabel = "Enter PSP",
  status = "Ongoing",
}: {
  psp: RegisteredPSPData;
  navigateTo: string;
  thumbnailSrc: string;
  ctaLabel?: string;
  status?: string;
}) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(navigateTo)}
      className="bg-gradient-to-br from-[var(--primary)] to-[var(--accent)] content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[var(--radius-card)] shrink-0 w-full shadow-[0px_4px_12px_0px_rgba(39,102,218,0.2)] cursor-pointer transition-all hover:shadow-[0px_6px_16px_0px_rgba(39,102,218,0.3)] hover:scale-[1.01]"
    >
      {/* Status Chip */}
      <div className="bg-white/20 content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[var(--radius-chip)] shrink-0 w-fit backdrop-blur-sm">
        <div aria-hidden="true" className="absolute border-white/40 border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius-chip)]" />
        <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[var(--primary-foreground)] text-[length:var(--text-label)] text-ellipsis">{status}</p>
      </div>

      {/* Main Content Section — Thumbnail + All Text */}
      <div className="content-stretch flex gap-[16px] items-stretch relative shrink-0 w-full">
        {/* Thumbnail */}
        <div className="relative rounded-[var(--radius-card)] shrink-0 w-[33%] overflow-hidden">
          <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[100%_100%]" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
            <img alt="" className="block max-w-none size-full object-cover" src={thumbnailSrc} />
          </div>
          <div aria-hidden="true" className="absolute border-white/20 border-[0.65px] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
        </div>

        {/* All Text Content */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative justify-between">
          {/* Title and Theme */}
          <div className="flex flex-col gap-[6px] w-full">
            <p className="font-bold leading-[28px] not-italic relative shrink-0 text-[var(--primary-foreground)] text-[length:var(--text-h3)] w-full">{psp.title.replace(/\s*School\s*/gi, '').trim()}</p>
            <p className="leading-[18px] not-italic relative shrink-0 text-white/90 text-[length:var(--text-base)] w-full">{psp.theme}</p>
          </div>

          {/* Enter PSP CTA */}
          <div className="content-stretch flex gap-[6px] items-center justify-start relative shrink-0 w-full">
            <p className="leading-[14px] not-italic relative shrink-0 text-white/70 text-[length:var(--text-label)]">{ctaLabel}</p>
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <mask height="20" id="mask_arrow_hc" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                  <rect fill="#D9D9D9" height="20" width="20" />
                </mask>
                <g mask="url(#mask_arrow_hc)">
                  <path d="M10 16.25L8.9375 15.1875L13.3125 10.8125H3.75V9.1875H13.3125L8.9375 4.8125L10 3.75L16.25 10L10 16.25Z" fill="rgba(255, 255, 255, 0.7)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── 2. AvailablePSPsCard ────────────────────────────────────────────────────

export function AvailablePSPsCard({
  title,
  psps,
  countLabel = "registered",
}: {
  title: string;
  psps: AvailablePSPItem[];
  countLabel?: string;
}) {
  // Sort PSPs: Upcoming first, then Ongoing
  const sortedPSPs = [...psps].sort((a, b) => {
    if (a.status === "Upcoming" && b.status === "Ongoing") return -1;
    if (a.status === "Ongoing" && b.status === "Upcoming") return 1;
    return 0;
  });

  return (
    <div className="bg-[var(--card)] content-stretch flex flex-col gap-[12px] items-start pb-[20px] pt-[16px] px-[16px] relative rounded-[var(--radius-card)] shrink-0" data-name="Main card">
      <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />

      {/* Header */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <p className="flex-[1_0_0] font-bold leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[var(--foreground)] text-[length:var(--text-h3)] text-ellipsis whitespace-nowrap">{title}</p>
        <IconsOpenInFull />
      </div>

      {/* PSP List */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        {sortedPSPs.map((psp) => (
          <div key={psp.id} className="bg-[var(--input)] content-stretch flex gap-[12px] items-start p-[12px] relative rounded-[var(--radius)] shrink-0 w-full hover:bg-[var(--sidebar-primary)] transition-colors cursor-pointer">
            {/* Thumbnail */}
            <div className="relative rounded-[var(--radius)] shrink-0 size-[56px] overflow-hidden">
              <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[100%_100%]" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
                <img alt="" className="block max-w-none size-full object-cover" src={psp.imgSrc} />
              </div>
              <div aria-hidden="true" className="absolute border-[var(--card-border)] border-[0.65px] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
            </div>

            {/* Details */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
              <p className="font-semibold leading-[16px] not-italic relative shrink-0 text-[var(--foreground)] text-[length:var(--text-base)] w-full">{psp.title}</p>
              <p className="leading-[16px] not-italic overflow-hidden relative shrink-0 text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)] text-ellipsis w-full">{psp.theme}</p>

              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full mt-[4px]">
                <div className="flex gap-[4px] items-center">
                  <IconsGroup />
                  <p className="leading-[16px] not-italic overflow-hidden relative shrink-0 text-[var(--muted-foreground)] text-[length:var(--text-label)] text-ellipsis">{psp.registered} {countLabel}</p>
                </div>

                {/* Status chip */}
                {psp.status === 'Upcoming' ? (
                  <div className="bg-[var(--status-role-bg)] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[var(--radius-chip)] shrink-0">
                    <div aria-hidden="true" className="absolute border-[var(--status-role-border)] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius-chip)]" />
                    <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[var(--status-role-text)] text-[length:var(--text-label)] text-ellipsis">Upcoming</p>
                  </div>
                ) : (
                  <div className={`${
                    psp.registrationStatus === 'Open'
                      ? 'bg-[var(--status-approved-bg)]'
                      : 'bg-[var(--status-pending-bg)]'
                  } content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[var(--radius-chip)] shrink-0`}>
                    <div aria-hidden="true" className={`absolute ${
                      psp.registrationStatus === 'Open'
                        ? 'border-[var(--status-approved-border)]'
                        : 'border-[var(--status-pending-border)]'
                    } border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius-chip)]`} />
                    <p className={`leading-[14px] not-italic overflow-hidden relative shrink-0 ${
                      psp.registrationStatus === 'Open'
                        ? 'text-[var(--status-approved-text)]'
                        : 'text-[var(--status-pending-text)]'
                    } text-[length:var(--text-label)] text-ellipsis`}>{psp.registrationStatus}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 3. AnnouncementCard ─────────────────────────────────────────────────────

export function AnnouncementCard({
  announcements,
}: {
  announcements: AnnouncementItem[];
}) {
  return (
    <div className="bg-[var(--card)] content-stretch flex flex-col gap-[12px] items-start pb-[20px] pt-[16px] px-[16px] relative rounded-[var(--radius-card)] w-full" data-name="Main card">
      <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />

      {/* Header */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <p className="flex-[1_0_0] font-bold leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[var(--foreground)] text-[length:var(--text-h3)] text-ellipsis whitespace-nowrap">Updates</p>
        <IconsOpenInFull />
      </div>

      {/* Announcements List */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        {announcements.map((announcement, index) => (
          <div key={announcement.id} className="w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-semibold leading-[16px] not-italic relative shrink-0 text-[var(--foreground)] text-[length:var(--text-base)] w-full">{announcement.title}</p>
              <p className="leading-[20px] not-italic relative shrink-0 text-[var(--muted-foreground)] text-[length:var(--text-base)] w-full">{announcement.description}</p>
            </div>
            {/* Divider — show for all except last item */}
            {index < announcements.length - 1 && (
              <div className="w-full h-px bg-[var(--card-border)] mt-[12px]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

// ── 4. LeaderboardCard ──────────────────────────────────────────────────────

export function LeaderboardCard({
  leaderboard,
}: {
  leaderboard: LeaderboardItem[];
}) {
  return (
    <div className="bg-[var(--card)] content-stretch flex flex-col gap-[12px] items-start pb-[20px] pt-[16px] px-[16px] relative rounded-[var(--radius-card)] w-full" data-name="Main card">
      <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />

      {/* Header */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <p className="flex-[1_0_0] font-bold leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[var(--foreground)] text-[length:var(--text-h3)] text-ellipsis whitespace-nowrap">Leaderboard</p>
        <IconsOpenInFull />
      </div>

      {/* Leaderboard List */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        {leaderboard.map((player) => (
          <div key={player.id} className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
            <div className="relative shrink-0 size-[48px]">
              <img alt="" className="block max-w-none size-full rounded-full" height="48" src={player.image} width="48" />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative">
              <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[var(--foreground)] text-[length:var(--text-h4)] w-full">
                <p className="leading-[normal]">{player.name}</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0 text-[var(--muted-foreground)] text-[length:var(--text-label)] w-full">
                <p className="leading-[normal]">{player.school}</p>
              </div>
            </div>
            {player.medal && (
              <div className="relative shrink-0 size-[40px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={player.medal} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}