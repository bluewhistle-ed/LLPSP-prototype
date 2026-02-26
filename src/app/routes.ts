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

export const router = createBrowserRouter([
  {
    path: "/",
    Component: LoginPage,
  },
  {
    path: "/home",
    Component: HomePage,
  },
  {
    path: "/dashboard",
    Component: HomePage,
  },
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
  {
    path: "/psps",
    Component: PSPsPage,
  },
  {
    path: "/partners",
    Component: PartnersPage,
  },
  {
    path: "/global-lists",
    Component: GlobalListsPage,
  },
]);