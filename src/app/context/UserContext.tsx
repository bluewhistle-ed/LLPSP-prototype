import { createContext, useContext, useState, useCallback, type ReactNode } from 'react';

// ── Types ──────────────────────────────────────────────────────────────────────

export type UserType = 'admin' | 'speaker' | 'mentor' | 'student';

export type AdminRole = 'bluewhistle-admin' | 'school-admin';

export type StudentRole =
  | 'private-member'
  | 'party-president'
  | 'party-vp'
  | 'minister'
  | 'mos'
  | 'sc-member'
  | 'sc-chair'
  | 'prime-minister'
  | 'leader-of-opposition';

/** Auto-assigned display labels (UI only, no routing impact) */
export type DisplayLabel = 'Prime Minister' | 'Leader of Opposition' | null;

export interface UserState {
  userType: UserType;
  adminRole: AdminRole;
  studentRole: StudentRole;
  displayLabel: DisplayLabel;
}

export interface UserContextValue extends UserState {
  setUserType: (type: UserType) => void;
  setAdminRole: (role: AdminRole) => void;
  setStudentRole: (role: StudentRole) => void;
  setDisplayLabel: (label: DisplayLabel) => void;

  /** Human-readable label for the current user type */
  userTypeLabel: string;
  /** Human-readable label for the active role within the current user type */
  activeRoleLabel: string;
  /** Home route for the current user type */
  homeRoute: string;
  /** Whether the current student role has Party President privileges (includes PM & LoO) */
  isPartyPresident: boolean;
}

// ── Display helpers ────────────────────────────────────────────────────────────

export const USER_TYPE_LABELS: Record<UserType, string> = {
  admin: 'Admin',
  speaker: 'Speaker',
  mentor: 'Mentor',
  student: 'Student',
};

export const ADMIN_ROLE_LABELS: Record<AdminRole, string> = {
  'bluewhistle-admin': 'Bluewhistle Admin',
  'school-admin': 'School Admin',
};

export const STUDENT_ROLE_LABELS: Record<StudentRole, string> = {
  'private-member': 'Private Member',
  'party-president': 'Party President',
  'party-vp': 'Party Vice President',
  'minister': 'Minister',
  'mos': 'Minister of State',
  'sc-member': 'Select Committee Member',
  'sc-chair': 'Select Committee Chair',
  'prime-minister': 'Prime Minister',
  'leader-of-opposition': 'Leader of Opposition',
};

export const HOME_ROUTES: Record<UserType, string> = {
  admin: '/admin/home',
  speaker: '/speaker/home',
  mentor: '/mentor/home',
  student: '/student/home',
};

// ── Context ────────────────────────────────────────────────────────────────────

const UserContext = createContext<UserContextValue | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userType, setUserType] = useState<UserType>('admin');
  const [adminRole, setAdminRole] = useState<AdminRole>('bluewhistle-admin');
  const [studentRole, setStudentRole] = useState<StudentRole>('private-member');
  const [displayLabel, setDisplayLabel] = useState<DisplayLabel>(null);

  const userTypeLabel = USER_TYPE_LABELS[userType];

  const activeRoleLabel = (() => {
    if (userType === 'admin') return ADMIN_ROLE_LABELS[adminRole];
    if (userType === 'student') return STUDENT_ROLE_LABELS[studentRole];
    return USER_TYPE_LABELS[userType]; // Speaker / Mentor have no sub-roles
  })();

  const homeRoute = HOME_ROUTES[userType];

  const isPartyPresident = ['party-president', 'prime-minister', 'leader-of-opposition'].includes(studentRole);

  const handleSetUserType = useCallback((type: UserType) => {
    setUserType(type);
  }, []);

  const handleSetAdminRole = useCallback((role: AdminRole) => {
    setAdminRole(role);
  }, []);

  const handleSetStudentRole = useCallback((role: StudentRole) => {
    setStudentRole(role);
  }, []);

  const handleSetDisplayLabel = useCallback((label: DisplayLabel) => {
    setDisplayLabel(label);
  }, []);

  return (
    <UserContext.Provider
      value={{
        userType,
        adminRole,
        studentRole,
        displayLabel,
        setUserType: handleSetUserType,
        setAdminRole: handleSetAdminRole,
        setStudentRole: handleSetStudentRole,
        setDisplayLabel: handleSetDisplayLabel,
        userTypeLabel,
        activeRoleLabel,
        homeRoute,
        isPartyPresident,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser(): UserContextValue {
  const ctx = useContext(UserContext);
  if (!ctx) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return ctx;
}