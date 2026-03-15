import { SharedNavBar } from "../components/SharedNavBar";
import { PageHeader } from "../components/PageHeader";
import { ChamberMap } from "../components/ChamberMap";
import { StatusChip } from "../components/StatusChip";
import { DiagonalStripeOverlay } from "../components/DiagonalStripeOverlay";
import { Bell } from "lucide-react";
import {
  USER_AVATAR,
  FLAG_UPP,
  FLAG_TRP,
  FLAG_CVP,
  AVATAR_1,
  AVATAR_2,
  AVATAR_3,
  AVATAR_4,
  AVATAR_5,
} from "../data/assets";

// ── Phase Badge (mirrors student MissionControlTab) ─────────────────────────

type PhaseType = "genesis" | "preparation" | "execution" | "reflection";

interface PhaseBadgeConfig {
  label: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
}

const PHASE_CONFIG: Record<PhaseType, PhaseBadgeConfig> = {
  genesis: { label: "Genesis", bgColor: "var(--status-role-bg)", borderColor: "var(--status-role-border)", textColor: "var(--status-role-text)" },
  preparation: { label: "Preparation", bgColor: "var(--status-notification-bg)", borderColor: "var(--status-notification-border)", textColor: "var(--status-notification-text)" },
  execution: { label: "Execution", bgColor: "var(--status-progress-bg)", borderColor: "var(--status-progress-border)", textColor: "var(--status-progress-text)" },
  reflection: { label: "Reflection", bgColor: "var(--status-mentor-bg)", borderColor: "var(--status-mentor-border)", textColor: "var(--status-mentor-text)" },
};

function PhaseBadge({ phase }: { phase: PhaseType }) {
  const config = PHASE_CONFIG[phase];
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[var(--radius-chip)] shrink-0" style={{ backgroundColor: config.bgColor }}>
      <div aria-hidden="true" className="absolute border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius-chip)]" style={{ borderColor: config.borderColor }} />
      <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[length:var(--text-label)] text-ellipsis" style={{ color: config.textColor }}>{config.label}</p>
    </div>
  );
}

// ── Mock Data ────────────────────────────────────────────────────────────────

const currentPSP = {
  currentDay: 3,
  totalDays: 14,
  currentPhase: "preparation" as PhaseType,
};

// ══════════════════════════════════════════════════════════════════════════════
// Page Component
// ══════════════════════════════════════════════════════════════════════════════

export default function SpeakerPSPDashboardPage() {
  return (
    <div className="bg-[var(--input)] relative size-full overflow-hidden">
      {/* Navbar */}
      <div className="absolute page-inset-left top-[32px]">
        <SharedNavBar activePage="speaker-psp-dashboard" />
      </div>

      {/* Page Header */}
      <PageHeader />

      {/* Main Content — scrollable */}
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start page-inset-x top-[100px] max-h-[calc(100vh-132px)] overflow-y-auto pb-[32px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* ChamberMap */}
        <ChamberMap />

        {/* Two Column Layout — mirrors student WelcomeTab exactly */}
        <div className="flex gap-[24px] w-full items-start">
          {/* ── Left Column ──────────────────────────────────────────────── */}
          <div className="flex flex-col gap-[18px] flex-1">

            {/* Next Actions Card — blue border, same pattern as student */}
            <div className="bg-white relative rounded-[12px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[var(--status-role-border)] border-solid inset-0 pointer-events-none rounded-[12px] opacity-[0.46]" />
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
                <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">Next Actions</p>
                <div className="flex flex-col w-full -mx-[8px] -mt-[10px]">
                  {[
                    { id: 1, title: "Review Question Submissions", description: "3 pending questions require approval before the next sitting" },
                    { id: 2, title: "Approve Notice Priorities", description: "1 notice awaiting priority ranking for Zero Hour" },
                    { id: 3, title: "Finalise Sitting Agenda", description: "Set the agenda and time allocations for Sitting 2" },
                    { id: 4, title: "Review Amendment Submissions", description: "1 pending amendment to the Draft Bill requires review" },
                  ].map((action, index) => (
                    <div key={action.id}>
                      {index > 0 && (
                        <div className="h-px bg-[var(--sidebar-primary)] mx-[12px]" />
                      )}
                      <button className="flex flex-col gap-[4px] w-full text-left hover:bg-[var(--input-background)] px-[8px] py-[10px] rounded-[var(--radius)] transition-colors cursor-pointer">
                        <p className="flex items-center gap-[6px] leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">
                          {action.title}
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="shrink-0 opacity-30"><path d="M3 7H11M11 7L7.5 3.5M11 7L7.5 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                        </p>
                        <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">{action.description}</p>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* About Card — Speaker info, same pattern as student "My Party & Role" */}
            <div className="bg-white relative rounded-[12px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
                <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">About</p>

                {/* Speaker Info */}
                <div className="flex items-start gap-[12px] w-full">
                  <div className="relative shrink-0 size-[48px]">
                    <img alt="" className="block max-w-none size-full rounded-full" src={USER_AVATAR} />
                  </div>
                  <div className="flex flex-col gap-[8px] flex-1">
                    <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Jason Surya</p>
                    <div className="flex items-center gap-[6px]">
                      <StatusChip label="Speaker" variant="role" />
                    </div>
                  </div>
                </div>

                {/* PSP Details — nested card */}
                <div className="flex flex-col gap-[12px] p-[12px] rounded-[var(--radius)] bg-[var(--input)] w-full">
                  <div className="flex items-center gap-[6px]">
                    <p className="leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)]">Let's Legislate at SBOA School</p>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">Education Reform & Digital Literacy</p>
                  </div>
                </div>

                {/* Party Leaders */}
                <div className="flex flex-col gap-[12px] w-full">
                  <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Key Roles</p>
                  <div className="content-start flex flex-wrap gap-[12px] items-start w-full">
                    {/* PM */}
                    <div className="bg-[var(--input)] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[var(--radius)] shrink-0">
                      <div aria-hidden="true" className="absolute border-[var(--card-border)] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                        <div className="relative shrink-0 size-[16px]">
                          <img alt="" className="block max-w-none size-full rounded-full" src={AVATAR_1} />
                        </div>
                        <p className="leading-[16px] not-italic overflow-hidden relative shrink-0 text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)] text-ellipsis whitespace-nowrap">Sheilah T. Sayasane</p>
                      </div>
                      <StatusChip label="PM" variant="treasury" />
                    </div>
                    {/* LoO */}
                    <div className="bg-[var(--input)] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[var(--radius)] shrink-0">
                      <div aria-hidden="true" className="absolute border-[var(--card-border)] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[var(--radius)]" />
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
                        <div className="relative shrink-0 size-[16px]">
                          <img alt="" className="block max-w-none size-full rounded-full" src={AVATAR_4} />
                        </div>
                        <p className="leading-[16px] not-italic overflow-hidden relative shrink-0 text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)] text-ellipsis whitespace-nowrap">Emily R. Thompson</p>
                      </div>
                      <StatusChip label="LoO" variant="warning" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Dates Card — same pattern as student */}
            <div className="bg-white relative rounded-[12px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
                <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">Important Dates</p>

                <div className="flex flex-col gap-[12px] w-full">
                  {/* Date 1 — Passed */}
                  <div className="p-[16px] rounded-[var(--radius)] bg-[var(--input)] w-full relative overflow-hidden">
                    <DiagonalStripeOverlay />
                    <div className="flex flex-col gap-[8px] relative z-10">
                      <p className="font-semibold leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-base)]">Submission of questions by Private Members</p>
                      <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">Only Private Members can submit questions, from both the Opposition and Treasury benches.</p>
                      <StatusChip label="10 Mar, Tue" variant="info" />
                    </div>
                  </div>

                  {/* Date 2 */}
                  <div className="p-[16px] rounded-[var(--radius)] hover:bg-[var(--input-background)] transition-colors w-full">
                    <div className="flex flex-col gap-[8px]">
                      <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Submission of Draft Bill by Select Committee</p>
                      <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">Only the Select Committee can submit a Draft Bill, which will be circulated among all Members of the House.</p>
                      <StatusChip label="16 Mar, Mon" variant="urgent" />
                    </div>
                  </div>

                  {/* Date 3 */}
                  <div className="p-[16px] rounded-[var(--radius)] hover:bg-[var(--input-background)] transition-colors w-full">
                    <div className="flex flex-col gap-[8px]">
                      <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Submission of Notices</p>
                      <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">Each Member of the House can submit one notice.</p>
                      <StatusChip label="17 Mar, Tue" variant="urgent" />
                    </div>
                  </div>

                  {/* Date 4 */}
                  <div className="p-[16px] rounded-[var(--radius)] hover:bg-[var(--input-background)] transition-colors w-full">
                    <div className="flex flex-col gap-[8px]">
                      <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Submission of Amendments to the Bill</p>
                      <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">All Members of the House can submit amendments to the Bill that has been circulated.</p>
                      <StatusChip label="18 Mar, Wed" variant="urgent" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Right Column ─────────────────────────────────────────────── */}
          <div className="flex flex-col gap-[18px] flex-1">

            {/* Announcements Card — same pattern as student */}
            <div className="bg-white relative rounded-[12px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="content-stretch flex flex-col gap-[16px] items-start p-[20px] relative w-full">
                <div className="flex items-center justify-between w-full">
                  <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">Announcements</p>
                  <StatusChip label="1 New" variant="notification">
                    <Bell className="size-[12px] shrink-0" style={{ color: "var(--status-notification-text)" }} />
                  </StatusChip>
                </div>

                <div className="flex flex-col gap-[12px] w-full">
                  {/* Announcement 1 — unread dot */}
                  <div className="flex flex-col gap-[8px] p-[12px] rounded-[var(--radius)] bg-[var(--input)] w-full relative">
                    <div className="absolute top-[12px] right-[12px] size-[6px] bg-[var(--accent)] rounded-full" />
                    <div className="flex flex-col gap-[4px]">
                      <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Policy Debate Tomorrow</p>
                      <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">All parties must submit their policy proposals by 5:00 PM today for tomorrow's debate session.</p>
                      <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)] mt-[4px]">2 hours ago</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Submission Pipeline Card — speaker-specific */}
            <div className="bg-white relative rounded-[12px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
                <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">Submission Pipeline</p>

                <div className="flex flex-col gap-[8px] w-full">
                  {/* Questions */}
                  <div className="flex gap-[12px] p-[12px] rounded-[var(--radius)] bg-[var(--input)] w-full items-center">
                    <div className="flex flex-col gap-[4px] flex-1">
                      <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Questions</p>
                      <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">24 submitted · 3 pending review</p>
                    </div>
                    <StatusChip label="3 Pending" variant="pending" />
                  </div>

                  {/* Notices */}
                  <div className="flex gap-[12px] p-[12px] rounded-[var(--radius)] bg-[var(--input)] w-full items-center">
                    <div className="flex flex-col gap-[4px] flex-1">
                      <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Notices</p>
                      <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">8 submitted · 1 pending review</p>
                    </div>
                    <StatusChip label="1 Pending" variant="pending" />
                  </div>

                  {/* Amendments */}
                  <div className="flex gap-[12px] p-[12px] rounded-[var(--radius)] bg-[var(--input)] w-full items-center">
                    <div className="flex flex-col gap-[4px] flex-1">
                      <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Amendments</p>
                      <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">5 submitted · 1 pending review</p>
                    </div>
                    <StatusChip label="1 Pending" variant="pending" />
                  </div>
                </div>
              </div>
            </div>

            {/* PSP Overview Card — same pattern as student */}
            <div className="bg-white relative rounded-[12px] shrink-0 w-full">
              <div aria-hidden="true" className="absolute border border-[var(--card-border)] border-solid inset-0 pointer-events-none rounded-[12px]" />
              <div className="content-stretch flex flex-col gap-[20px] items-start p-[20px] relative w-full">
                <p className="font-semibold leading-[20px] text-[var(--foreground)] text-[length:var(--text-h4)]">Overview</p>

                {/* PSP Info */}
                <div className="flex flex-col gap-[8px] w-full">
                  <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Let's Legislate at SBOA</p>
                  <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">Education Reform & Digital Literacy — exploring policy solutions for improving educational infrastructure and integrating digital literacy into the national curriculum.</p>
                  <div className="w-full h-[1px] bg-[var(--card-border)] mt-[8px]" />
                </div>

                {/* Phase Progress */}
                <div className="flex flex-col gap-[16px] w-full">
                  <div className="flex justify-between items-start w-full">
                    <div className="flex flex-col gap-[8px]">
                      <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">Progress</p>
                      <div className="flex gap-[8px] items-center">
                        <StatusChip label={`Day ${currentPSP.currentDay} of ${currentPSP.totalDays}`} variant="progress" />
                        <PhaseBadge phase={currentPSP.currentPhase} />
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full">
                    <div className="w-full h-[12px] bg-[var(--card-border)] rounded-full overflow-hidden relative">
                      <div className="absolute top-0 left-0 h-full bg-[var(--accent)] rounded-full transition-all duration-300" style={{ width: `${(currentPSP.currentDay / currentPSP.totalDays) * 100}%` }} />
                      <div className="absolute top-0 h-full w-[1px] bg-white/40" style={{ left: "14.29%" }} />
                      <div className="absolute top-0 h-full w-[1px] bg-white/40" style={{ left: "85.71%" }} />
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="w-full h-[1px] bg-[var(--card-border)]" />

                {/* Schedule */}
                <div className="flex flex-col gap-[12px] w-full">
                  <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">Tuesday, Mar 18, 2026</p>

                  <div className="flex flex-col gap-[8px] w-full">
                    {/* Schedule Item 1 */}
                    <div className="flex gap-[12px] p-[12px] rounded-[var(--radius)] bg-[var(--input)] w-full">
                      <div className="flex flex-col items-end gap-[2px] shrink-0 w-[60px]">
                        <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)]">10:00</p>
                        <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">30 min</p>
                      </div>
                      <div className="flex flex-col gap-[4px] flex-1">
                        <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Question Hour</p>
                        <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">Members ask questions to ministers on matters of public importance</p>
                      </div>
                    </div>

                    {/* Schedule Item 2 */}
                    <div className="flex gap-[12px] p-[12px] rounded-[var(--radius)] bg-[var(--input)] w-full">
                      <div className="flex flex-col items-end gap-[2px] shrink-0 w-[60px]">
                        <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)]">10:30</p>
                        <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">20 min</p>
                      </div>
                      <div className="flex flex-col gap-[4px] flex-1">
                        <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Zero Hour</p>
                        <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">Members raise urgent matters of public concern</p>
                      </div>
                    </div>

                    {/* Schedule Item 3 — Break */}
                    <div className="flex gap-[12px] p-[12px] rounded-[var(--radius)] bg-[var(--input)] w-full relative overflow-hidden">
                      <DiagonalStripeOverlay />
                      <div className="flex flex-col items-end gap-[2px] shrink-0 w-[60px] relative z-10">
                        <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)]">10:50</p>
                        <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">15 min</p>
                      </div>
                      <div className="flex flex-col gap-[4px] flex-1 relative z-10">
                        <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-base)]">Snacks Break</p>
                      </div>
                    </div>

                    {/* Schedule Item 4 */}
                    <div className="flex gap-[12px] p-[12px] rounded-[var(--radius)] bg-[var(--input)] w-full">
                      <div className="flex flex-col items-end gap-[2px] shrink-0 w-[60px]">
                        <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-label)]">11:05</p>
                        <p className="leading-[14px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">60 min</p>
                      </div>
                      <div className="flex flex-col gap-[4px] flex-1">
                        <p className="font-semibold leading-[16px] text-[var(--sidebar-primary-foreground)] text-[length:var(--text-base)]">Legislative Business</p>
                        <p className="leading-[16px] text-[var(--muted-foreground)] text-[length:var(--text-label)]">Debate and voting on the Draft Bill and proposed amendments</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}