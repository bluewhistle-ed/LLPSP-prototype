Modify the file `src/app/context/UserContext.tsx` to add per-PSP enrollment support. Here is exactly what to do:

1. ADD these new types after the existing `DisplayLabel` type (around line 19):

   export type PspRole = 'student' | 'mentor' | 'speaker';

   export interface PspEnrollment {
     pspId: string;
     pspTitle: string;
     pspTheme: string;
     role: PspRole;
     studentRole?: StudentRole;   // only relevant when role === 'student'
     status: 'upcoming' | 'ongoing' | 'completed';
   }

2. ADD these new fields to the `UserContextValue` interface (after `homeRoute: string`):

   pspEnrollments: PspEnrollment[];
   activePspId: string | null;
   activePspEnrollment: PspEnrollment | null;
   enterPsp: (pspId: string) => void;
   leavePsp: () => void;

3. ADD a new lookup map after the existing `HOME_ROUTES` constant:

   export const PSP_ROLE_HOME_ROUTES: Record<PspRole, string> = {
     student: '/student/psp/dashboard',
     mentor: '/mentor/home',
     speaker: '/speaker/home',
   };

4. ADD mock enrollment data as a constant INSIDE the UserProvider function (before the useState calls):

   const MOCK_ENROLLMENTS: PspEnrollment[] = [
     {
       pspId: 'psp-sboa',
       pspTitle: "Let's Legislate at SBOA",
       pspTheme: 'Education Reform & Digital Literacy',
       role: 'student',
       studentRole: 'private-member',
       status: 'ongoing',
     },
     {
       pspId: 'psp-nhvps',
       pspTitle: "Let's Legislate at NHVPS",
       pspTheme: 'Nuclear Waste Management',
       role: 'mentor',
       status: 'ongoing',
     },
     {
       pspId: 'psp-mps',
       pspTitle: "Let's Legislate at MPS",
       pspTheme: 'Regulating Social Media Platforms',
       role: 'speaker',
       status: 'upcoming',
     },
   ];

5. ADD two new state variables in UserProvider (after the existing useState calls):

   const [pspEnrollments] = useState<PspEnrollment[]>(MOCK_ENROLLMENTS);
   const [activePspId, setActivePspId] = useState<string | null>(null);

6. ADD a derived value:

   const activePspEnrollment = activePspId
     ? pspEnrollments.find(e => e.pspId === activePspId) ?? null
     : null;

7. ADD two handler functions (after the existing handleSetDisplayLabel):

   const enterPsp = useCallback((pspId: string) => {
     const enrollment = pspEnrollments.find(e => e.pspId === pspId);
     if (!enrollment) return;
     setActivePspId(pspId);
     setUserType(enrollment.role);
     if (enrollment.role === 'student' && enrollment.studentRole) {
       setStudentRole(enrollment.studentRole);
     }
   }, [pspEnrollments]);

   const leavePsp = useCallback(() => {
     setActivePspId(null);
     setUserType('student');
   }, []);

8. ADD these new fields to the UserContext.Provider value object (add them after `homeRoute`):

   pspEnrollments,
   activePspId,
   activePspEnrollment,
   enterPsp,
   leavePsp,

IMPORTANT: Do NOT remove or change any existing types, interfaces, constants, or functions. Only ADD the new code alongside the existing code. The existing `userType`, `adminRole`, `studentRole`, `displayLabel` and all their setters must remain exactly as they are.