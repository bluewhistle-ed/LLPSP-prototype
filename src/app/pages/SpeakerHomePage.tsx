import { PageHeader } from "../components/PageHeader";
import { SharedNavBar } from "../components/SharedNavBar";
import {
  MyRegisteredPSPCard,
  AvailablePSPsCard,
  AnnouncementCard,
  LeaderboardCard,
} from "../components/HomeCards";
import type {
  RegisteredPSPData,
  AvailablePSPItem,
  AnnouncementItem,
  LeaderboardItem,
} from "../components/HomeCards";

// Import thumbnail images
import img1 from "figma:asset/4fb1f9850130e69d652ab1618e13e68969e60d8f.png";
import img2 from "figma:asset/f9b3c06508440585b4469b994d2f927d35c18a2c.png";
import img3 from "figma:asset/7e770874797467c1231a6e2c0407a4ed24aa9429.png";
import img4 from "figma:asset/5974f7b6e8531748cde6121621fa76d653ce8677.png";
import leaderboardImg1 from "figma:asset/aea56f3263ece92dd93d47abce807ee8df611744.png";
import leaderboardImg2 from "figma:asset/85a9ee6e1d64cdeb572d2af2134249064e4ce730.png";
import leaderboardImg3 from "figma:asset/bdd19c040b7e19364b8623e06b8c5550e60c3f77.png";
import leaderboardImg4 from "figma:asset/b2a732e782875a3bdf833ec70c944672d41008aa.png";
import medal1 from "figma:asset/3981aa122c13817f9876eec475b034c562bcf91b.png";
import medal2 from "figma:asset/83c3f80163648bc6aff14a5c5a9a50f76cca8bb8.png";
import medal3 from "figma:asset/44327a911335a36ef5aa6787c23a899e773847d8.png";

// ── Speaker-specific data ───────────────────────────────────────────────────
// Speakers don't register for PSPs — they get *assigned* by admins.
// Multiple PSPs can be ongoing simultaneously (Phase 3 dates must not clash).

/** Ongoing PSPs assigned to this speaker — each renders as a hero card */
const ongoingPSPs: Array<RegisteredPSPData & { id: number; thumbnailSrc: string }> = [
  {
    id: 1,
    title: "Let's Legislate at SBOA School",
    theme: "Education Reform & Digital Literacy",
    nextSession: "18 Mar, 2026 at 10:00 AM",
    tasks: [
      { name: "Review Question Submissions", dueDate: "2026-03-15" },
      { name: "Approve Notice Priorities", dueDate: "2026-03-16" },
      { name: "Finalise Sitting Agenda", dueDate: "2026-03-17" },
    ],
    thumbnailSrc: img1,
  },
  {
    id: 2,
    title: "Let's Legislate at DPS",
    theme: "India's Street Dog Dilemma",
    nextSession: "22 Mar, 2026 at 2:00 PM",
    tasks: [
      { name: "Review Question Submissions", dueDate: "2026-03-19" },
      { name: "Approve Notice Priorities", dueDate: "2026-03-20" },
    ],
    thumbnailSrc: img2,
  },
];

/** Upcoming PSPs assigned to this speaker — shown in the list card */
const upcomingPSPs: AvailablePSPItem[] = [
  { id: 3, title: "Let's Legislate at NHVPS", theme: "Nuclear Waste Management", registered: 45, status: "Upcoming", registrationStatus: "Open", imgSrc: img1 },
  { id: 4, title: "Let's Legislate at MPS", theme: "Regulating Social Media Platforms", registered: 67, status: "Upcoming", registrationStatus: "Open", imgSrc: img3 },
  { id: 5, title: "Let's Legislate at KVS", theme: "Climate Change Action Plan", registered: 60, status: "Upcoming", registrationStatus: "Open", imgSrc: img4 },
];

const announcements: AnnouncementItem[] = [
  { id: 1, title: "Students Empowered: A Platform for Civic Engagement", description: "A transformative force in student civic engagement, this platform provides a dynamic space for young minds to participate in the democratic process. From debating pressing social issues to proposing policy solutions, students harness it." },
  { id: 2, title: "Students Empowered: A Platform for Civic Engagement", description: "A transformative force in student civic engagement, this platform provides a dynamic space for young minds to participate in the democratic process. From debating pressing social issues to proposing policy solutions, students harness it." },
];

const leaderboard: LeaderboardItem[] = [
  { id: 1, name: "Jason Surya", school: "SBOA School & Junior college", image: leaderboardImg1, medal: medal1, rank: 1 },
  { id: 2, name: "Joseph vijay", school: "JD London bridge higher secondary school", image: leaderboardImg2, medal: medal2, rank: 2 },
  { id: 3, name: "Michael cena", school: "SBOA School & Junior college", image: leaderboardImg3, medal: medal3, rank: 3 },
  { id: 4, name: "Kane", school: "SBOA School & Junior college", image: leaderboardImg4, medal: null, rank: 4 },
];

// ── Page Component ──────────────────────────────────────────────────────────

export default function SpeakerHomePage() {
  return (
    <div className="bg-[var(--input)] relative size-full overflow-hidden">
      {/* Navbar */}
      <div className="absolute page-inset-left top-[32px]">
        <SharedNavBar activePage="speaker-home" />
      </div>

      {/* Page Header */}
      <PageHeader />

      {/* Main Content — Scrollable container below navbar */}
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start page-inset-x top-[100px] max-h-[calc(100vh-132px)] overflow-y-auto pb-[32px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Two Column Layout */}
        <div className="flex gap-[24px] w-full items-start">
          {/* Left Column — Ongoing hero cards + Upcoming list */}
          <div className="flex flex-col gap-[18px] flex-1">
            {/* One hero card per ongoing assigned PSP */}
            {ongoingPSPs.map((psp) => (
              <MyRegisteredPSPCard
                key={psp.id}
                psp={psp}
                navigateTo="/speaker/psp/dashboard"
                thumbnailSrc={psp.thumbnailSrc}
                ctaLabel="Manage PSP"
                status="Ongoing"
              />
            ))}

            {/* Upcoming assigned PSPs list card */}
            <AvailablePSPsCard
              title="Upcoming PSPs"
              psps={upcomingPSPs}
              countLabel="students"
            />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[18px] flex-1">
            <AnnouncementCard announcements={announcements} />
            <LeaderboardCard leaderboard={leaderboard} />
          </div>
        </div>
      </div>
    </div>
  );
}