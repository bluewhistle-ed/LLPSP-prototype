import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/RootLayout";
import LoginPage from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import PSPsPage from "./pages/PSPsPage";
import PartnersPage from "./pages/PartnersPage";
import GlobalListsPage from "./pages/GlobalListsPage";
import StudentDashboardPage from "./pages/StudentDashboardPage";
import { PSPDashboardPage } from "./pages/PSPDashboardPage";
import QuestionsPage from "./pages/QuestionsPage";
import { NoticesPage } from "./pages/NoticesPage";
import { AmendmentsPage } from "./pages/AmendmentsPage";
import SittingPage from "./pages/SittingPage";
import { RedirectToStudentHome } from "./components/RedirectToStudentHome";
import SpeakerHomePage from "./pages/SpeakerHomePage";
import SpeakerPSPDashboardPage from "./pages/SpeakerPSPDashboardPage";
import SpeakerQuestionHourPage from "./pages/SpeakerQuestionHourPage";
import SpeakerZeroHourPage from "./pages/SpeakerZeroHourPage";
import SpeakerLegislativeBusinessPage from "./pages/SpeakerLegislativeBusinessPage";
import MentorHomePage from "./pages/MentorHomePage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: LoginPage,
      },

      // ── Admin routes ───────────────────────────────────────────────────────────
      {
        path: "admin/home",
        Component: HomePage,
      },
      {
        path: "admin/dashboard",
        Component: HomePage,
      },
      {
        path: "admin/psps",
        Component: PSPsPage,
      },
      {
        path: "admin/partners",
        Component: PartnersPage,
      },
      {
        path: "admin/global-lists",
        Component: GlobalListsPage,
      },

      // ── Student routes ─────────────────────────────────────────────────────────
      {
        path: "student/home",
        Component: StudentDashboardPage,
      },
      {
        path: "student/dashboard",
        Component: RedirectToStudentHome,
      },
      {
        path: "student/psp/dashboard",
        Component: PSPDashboardPage,
      },
      {
        path: "student/psp/questions",
        Component: QuestionsPage,
      },
      {
        path: "student/psp/notices",
        Component: NoticesPage,
      },
      {
        path: "student/psp/amendments",
        Component: AmendmentsPage,
      },
      {
        path: "student/psp/sitting",
        Component: SittingPage,
      },

      // ── Speaker routes ─────────────────────────────────────────────────────────
      {
        path: "speaker/home",
        Component: SpeakerHomePage,
      },
      {
        path: "speaker/psp/dashboard",
        Component: SpeakerPSPDashboardPage,
      },
      {
        path: "speaker/psp/question-hour",
        Component: SpeakerQuestionHourPage,
      },
      {
        path: "speaker/psp/zero-hour",
        Component: SpeakerZeroHourPage,
      },
      {
        path: "speaker/psp/legislative-business",
        Component: SpeakerLegislativeBusinessPage,
      },

      // ── Mentor routes ──────────────────────────────────────────────────────────
      {
        path: "mentor/home",
        Component: MentorHomePage,
      },
      {
        path: "mentor/questions",
        Component: QuestionsPage,
      },
      {
        path: "mentor/amendments",
        Component: AmendmentsPage,
      },
    ],
  },
]);