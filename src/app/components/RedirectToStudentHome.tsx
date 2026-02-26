import { Navigate } from "react-router";

export function RedirectToStudentHome() {
  return <Navigate to="/student/home" replace />;
}
