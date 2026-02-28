import { createBrowserRouter } from "react-router";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PSPsPage from "./pages/PSPsPage";
import PartnersPage from "./pages/PartnersPage";
import GlobalListsPage from "./pages/GlobalListsPage";
import StudentDashboardPage from "./pages/StudentDashboardPage";
import { PSPDashboardPage } from "./pages/PSPDashboardPage";
import QuestionHourPage from "./pages/QuestionHourPage";
import { ZeroHourPage } from "./pages/ZeroHourPage";
import { LegislativeBusinessPage } from "./pages/LegislativeBusinessPage";
import { RedirectToStudentHome } from "./components/RedirectToStudentHome";
import SpeakerHomePage from "./pages/SpeakerHomePage";
import MentorHomePage from "./pages/MentorHomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },

  // ── Admin routes ───────────────────────────────────────────────────────────
  {
    path: "/admin/home",
    Component: HomePage,
  },
  {
    path: "/admin/dashboard",
    Component: HomePage,
  },
  {
    path: "/admin/psps",
    Component: PSPsPage,
  },
  {
    path: "/admin/partners",
    Component: PartnersPage,
  },
  {
    path: "/admin/global-lists",
    Component: GlobalListsPage,
  },

  // ── Student routes ─────────────────────────────────────────────────────────
  {
    path: "/student/home",
    Component: StudentDashboardPage,
  },
  {
    path: "/student/dashboard",
    Component: RedirectToStudentHome,
  },
  {
    path: "/student/psp/dashboard",
    Component: PSPDashboardPage,
  },
  {
    path: "/student/psp/question-hour",
    Component: QuestionHourPage,
  },
  {
    path: "/student/psp/zero-hour",
    Component: ZeroHourPage,
  },
  {
    path: "/student/psp/legislative-business",
    Component: LegislativeBusinessPage,
  },

  // ── Speaker routes ─────────────────────────────────────────────────────────
  {
    path: "/speaker/home",
    Component: SpeakerHomePage,
  },

  // ── Mentor routes ──────────────────────────────────────────────────────────
  {
    path: "/mentor/home",
    Component: MentorHomePage,
  },
  {
    path: "/mentor/question-hour",
    Component: QuestionHourPage,
  },
  {
    path: "/mentor/legislative-business",
    Component: LegislativeBusinessPage,
  },
]);