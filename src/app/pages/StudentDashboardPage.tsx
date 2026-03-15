import imgEllipse1 from "figma:asset/aea56f3263ece92dd93d47abce807ee8df611744.png";
import imgMedal1 from "figma:asset/3981aa122c13817f9876eec475b034c562bcf91b.png";
import imgEllipse7 from "figma:asset/85a9ee6e1d64cdeb572d2af2134249064e4ce730.png";
import imgMedal11 from "figma:asset/83c3f80163648bc6aff14a5c5a9a50f76cca8bb8.png";
import imgEllipse8 from "figma:asset/bdd19c040b7e19364b8623e06b8c5550e60c3f77.png";
import imgMedal21 from "figma:asset/44327a911335a36ef5aa6787c23a899e773847d8.png";
import imgEllipse9 from "figma:asset/b2a732e782875a3bdf833ec70c944672d41008aa.png";
import imgUnsplash0HjWobhGhJs2 from "figma:asset/4fb1f9850130e69d652ab1618e13e68969e60d8f.png";
import imgUnsplash0HjWobhGhJs3 from "figma:asset/7e770874797467c1231a6e2c0407a4ed24aa9429.png";
import imgUnsplash0HjWobhGhJs4 from "figma:asset/f9b3c06508440585b4469b994d2f927d35c18a2c.png";
import imgUnsplash0HjWobhGhJs5 from "figma:asset/5974f7b6e8531748cde6121621fa76d653ce8677.png";
import imgUnsplash0HjWobhGhJs6 from "figma:asset/f6c3f136bcd647f8b0cfe8441465a26b617ae301.png";
import imgUnsplash0HjWobhGhJs7 from "figma:asset/031bc32e613200e7bcd453fc49d1e8fe8945b774.png";
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

// ── Static Data ─────────────────────────────────────────────────────────────

const registeredPSP: RegisteredPSPData = {
  title: "Let's Legislate at SBOA School",
  theme: "Education Reform & Digital Literacy",
  nextSession: "26 Feb, 2024 at 3:00 PM",
  tasks: [
    { name: "Submit Starred Questions", dueDate: "2024-02-20" },
    { name: "Submit Answers to Questions", dueDate: "2024-02-22" },
    { name: "Submit Notices", dueDate: "2024-02-23" },
    { name: "Submit the Bill", dueDate: "2026-02-28" },
    { name: "Submit Amendments", dueDate: "2026-03-02" },
  ],
};

const availablePSPs: AvailablePSPItem[] = [
  { id: 1, title: "Let's Legislate at NHVPS", theme: "Nuclear Waste Management", registered: 45, status: "Upcoming", registrationStatus: "Open", imgSrc: imgUnsplash0HjWobhGhJs2 },
  { id: 2, title: "Let's Legislate at MPS", theme: "Regulating Social Media Platforms", registered: 67, status: "Upcoming", registrationStatus: "Open", imgSrc: imgUnsplash0HjWobhGhJs3 },
  { id: 3, title: "Let's Legislate at DPS", theme: "India's Street Dog Dilemma", registered: 23, status: "Ongoing", registrationStatus: "Open", imgSrc: imgUnsplash0HjWobhGhJs4 },
  { id: 4, title: "Let's Legislate at KVS", theme: "Climate Change Action Plan", registered: 89, status: "Ongoing", registrationStatus: "Filling fast", imgSrc: imgUnsplash0HjWobhGhJs5 },
  { id: 5, title: "Let's Legislate at GHS", theme: "Digital Privacy and Data Security", registered: 34, status: "Ongoing", registrationStatus: "Open", imgSrc: imgUnsplash0HjWobhGhJs6 },
  { id: 6, title: "Let's Legislate at RPS", theme: "Universal Healthcare System", registered: 56, status: "Ongoing", registrationStatus: "Filling fast", imgSrc: imgUnsplash0HjWobhGhJs7 },
];

const announcements: AnnouncementItem[] = [
  { id: 1, title: "Students Empowered: A Platform for Civic Engagement", description: "A transformative force in student civic engagement, this platform provides a dynamic space for young minds to participate in the democratic process. From debating pressing social issues to proposing policy solutions, students harness it." },
  { id: 2, title: "Students Empowered: A Platform for Civic Engagement", description: "A transformative force in student civic engagement, this platform provides a dynamic space for young minds to participate in the democratic process. From debating pressing social issues to proposing policy solutions, students harness it." },
];

const leaderboard: LeaderboardItem[] = [
  { id: 1, name: "Jason Surya", school: "SBOA School & Junior college", image: imgEllipse1, medal: imgMedal1, rank: 1 },
  { id: 2, name: "Joseph vijay", school: "JD London bridge higher secondary school", image: imgEllipse7, medal: imgMedal11, rank: 2 },
  { id: 3, name: "Michael cena", school: "SBOA School & Junior college", image: imgEllipse8, medal: imgMedal21, rank: 3 },
  { id: 4, name: "Kane", school: "SBOA School & Junior college", image: imgEllipse9, medal: null, rank: 4 },
];

// ── Page Component ──────────────────────────────────────────────────────────

export default function StudentDashboardPage() {
  return (
    <div className="bg-[var(--input)] relative size-full overflow-hidden">
      {/* Navbar */}
      <div className="absolute page-inset-left top-[32px]">
        <SharedNavBar activePage="home" />
      </div>

      {/* Page Header */}
      <PageHeader />

      {/* Main Content — Scrollable container below navbar */}
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start page-inset-x top-[100px] max-h-[calc(100vh-132px)] overflow-y-auto pb-[32px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Two Column Layout */}
        <div className="flex gap-[24px] w-full items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-[18px] flex-1">
            <MyRegisteredPSPCard
              psp={registeredPSP}
              navigateTo="/student/psp/dashboard"
              thumbnailSrc={imgUnsplash0HjWobhGhJs7}
            />
            <AvailablePSPsCard title="Join a PSP" psps={availablePSPs} />
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
