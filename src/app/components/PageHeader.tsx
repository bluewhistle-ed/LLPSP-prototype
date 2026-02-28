import svgPaths from "../../imports/svg-ukbgtczgk2";
import imgEllipse1 from "figma:asset/aea56f3263ece92dd93d47abce807ee8df611744.png";
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';
import {
  useUser,
  USER_TYPE_LABELS,
  ADMIN_ROLE_LABELS,
  STUDENT_ROLE_LABELS,
  HOME_ROUTES,
  type UserType,
  type AdminRole,
  type StudentRole,
} from '../context/UserContext';

function IconsExpandMore() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / expand_more">
          <mask height="16" id="mask0_1_1001" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="0.0015626" />
          </mask>
          <g mask="url(#mask0_1_1001)">
            <path d={svgPaths.p271bc980} fill="var(--fill-0, #3C4C7C)" id="expand_more" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  const { activeRoleLabel } = useUser();
  
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] whitespace-nowrap">
          <p className="leading-[14px]">{activeRoleLabel}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

/* ── Radio dot for role selection ──────────────────────────────────────────── */

function RadioDot({ selected }: { selected: boolean }) {
  return (
    <div className="relative shrink-0 size-[16px] flex items-center justify-center">
      <div
        className={`size-[14px] rounded-full border-[1.5px] flex items-center justify-center transition-colors ${
          selected
            ? 'border-[var(--primary)]'
            : 'border-[var(--border)]'
        }`}
      >
        {selected && (
          <div className="size-[7px] rounded-full bg-[var(--primary)]" />
        )}
      </div>
    </div>
  );
}

/* ── Section divider ──────────────────────────────────────────────────────── */

function Divider() {
  return <div className="w-full h-px bg-[#e3e6f0]" />;
}

/* ── Main component ───────────────────────────────────────────────────────── */

export function PageHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  const {
    userType,
    adminRole,
    studentRole,
    setUserType,
    setAdminRole,
    setStudentRole,
    activeRoleLabel,
  } = useUser();

  // Sync userType from route on mount / route change
  useEffect(() => {
    const path = location.pathname;
    if (path.startsWith('/admin')) setUserType('admin');
    else if (path.startsWith('/student')) setUserType('student');
    else if (path.startsWith('/speaker')) setUserType('speaker');
    else if (path.startsWith('/mentor')) setUserType('mentor');
  }, [location.pathname, setUserType]);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    }

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  /* ── Handlers ─────────────────────────────────────────────────────────── */

  const handleViewSwitch = (type: UserType) => {
    setUserType(type);
    setIsDropdownOpen(false);
    navigate(HOME_ROUTES[type]);
  };

  const handleAdminRoleSwitch = (role: AdminRole) => {
    setAdminRole(role);
    // Stay on current page — role just changes permissions
  };

  const handleStudentRoleSwitch = (role: StudentRole) => {
    setStudentRole(role);
    // Stay on current page — role just changes capabilities
  };

  const handleLogout = () => {
    navigate('/');
  };

  /* ── Display name based on user type ──────────────────────────────────── */

  const displayName = (() => {
    switch (userType) {
      case 'admin': return 'Admin User';
      case 'student': return 'Jason Surya';
      case 'speaker': return 'Speaker';
      case 'mentor': return 'Mentor';
    }
  })();

  const displaySubtitle = (() => {
    switch (userType) {
      case 'admin': return ADMIN_ROLE_LABELS[adminRole];
      case 'student': return STUDENT_ROLE_LABELS[studentRole];
      case 'speaker': return 'Session Speaker';
      case 'mentor': return 'Programme Mentor';
    }
  })();

  /* ── Other user types for "Switch View" ───────────────────────────────── */

  const otherUserTypes = (Object.keys(USER_TYPE_LABELS) as UserType[]).filter(
    (t) => t !== userType
  );

  /* ── Roles for contextual section ─────────────────────────────────────── */

  const hasRoles = userType === 'admin' || userType === 'student';

  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] items-center p-[8px] right-[calc(16.67%+56px)] rounded-[var(--radius-card)] top-[32px]" data-name="Top Side bar">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />
      <Buttons />
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="relative shrink-0 size-[32px] cursor-pointer rounded-full hover:opacity-80 transition-opacity"
        >
          <img alt="Profile" className="block max-w-none size-full rounded-full" height="32" src={imgEllipse1} width="32" />
        </button>

        {/* ── Dropdown ─────────────────────────────────────────────────── */}
        {isDropdownOpen && (
          <div className="absolute bg-white right-0 top-[calc(100%+16px)] rounded-[var(--radius-card)] shadow-[var(--elevation-sm)] w-[280px] z-50">
            <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[var(--radius-card)]" />

            <div className="content-stretch flex flex-col items-start p-[16px] relative">
              {/* ── Profile section ──────────────────────────────────────── */}
              <div className="content-stretch flex flex-col gap-[12px] items-center pb-[16px] relative w-full">
                <div className="relative shrink-0 size-[64px]">
                  <img alt="Profile" className="block max-w-none size-full rounded-full" height="64" src={imgEllipse1} width="64" />
                </div>
                <div className="flex flex-col gap-[4px] items-center w-full">
                  <p className="font-semibold leading-[normal] text-[var(--foreground)] text-[20px]">
                    {displayName}
                  </p>
                  <p className="leading-[normal] text-[var(--muted-foreground)] text-[14px]">
                    {displaySubtitle}
                  </p>
                </div>
              </div>

              <Divider />

              {/* ── Contextual roles (only for Admin / Student) ──────────── */}
              {hasRoles && (
                <>
                  <div className="content-stretch flex flex-col gap-[0px] items-start pt-[12px] pb-[12px] relative w-full">
                    <p className="leading-[14px] text-[var(--muted-foreground)] text-[11px] px-[12px] pb-[8px]">
                      {userType === 'admin' ? 'Admin Role' : 'Student Role'}
                    </p>

                    {userType === 'admin' &&
                      (Object.keys(ADMIN_ROLE_LABELS) as AdminRole[]).map((role) => (
                        <button
                          key={role}
                          onClick={() => handleAdminRoleSwitch(role)}
                          className="relative rounded-[var(--radius)] w-full hover:bg-[var(--sidebar-primary)] transition-colors"
                        >
                          <div className="content-stretch flex items-center gap-[8px] px-[12px] py-[8px] relative w-full">
                            <RadioDot selected={adminRole === role} />
                            <p className="flex-[1_0_0] leading-[16px] text-[var(--foreground)] text-[14px] text-left">
                              {ADMIN_ROLE_LABELS[role]}
                            </p>
                          </div>
                        </button>
                      ))}

                    {userType === 'student' &&
                      (Object.keys(STUDENT_ROLE_LABELS) as StudentRole[]).map((role) => (
                        <button
                          key={role}
                          onClick={() => handleStudentRoleSwitch(role)}
                          className="relative rounded-[var(--radius)] w-full hover:bg-[var(--sidebar-primary)] transition-colors"
                        >
                          <div className="content-stretch flex items-center gap-[8px] px-[12px] py-[8px] relative w-full">
                            <RadioDot selected={studentRole === role} />
                            <p className="flex-[1_0_0] leading-[16px] text-[var(--foreground)] text-[14px] text-left">
                              {STUDENT_ROLE_LABELS[role]}
                            </p>
                          </div>
                        </button>
                      ))}
                  </div>

                  <Divider />
                </>
              )}

              {/* ── Switch View ──────────────────────────────────────────── */}
              <div className="content-stretch flex flex-col gap-[0px] items-start pt-[12px] pb-[12px] relative w-full">
                <p className="leading-[14px] text-[var(--muted-foreground)] text-[11px] px-[12px] pb-[8px]">
                  Switch View
                </p>
                {otherUserTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => handleViewSwitch(type)}
                    className="relative rounded-[var(--radius)] w-full hover:bg-[var(--sidebar-primary)] transition-colors"
                  >
                    <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
                      <p className="flex-[1_0_0] leading-[16px] text-[var(--foreground)] text-[14px] text-left">
                        {USER_TYPE_LABELS[type]}
                      </p>
                    </div>
                  </button>
                ))}
              </div>

              <Divider />

              {/* ── Edit Profile & Log out ────────────────────────────────── */}
              <div className="content-stretch flex flex-col gap-[0px] items-start pt-[12px] relative w-full">
                <button className="relative rounded-[var(--radius)] w-full hover:bg-[var(--sidebar-primary)] transition-colors">
                  <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
                    <p className="flex-[1_0_0] leading-[16px] text-[var(--foreground)] text-[14px] text-left">
                      Edit Profile
                    </p>
                  </div>
                </button>

                <button
                  onClick={handleLogout}
                  className="relative rounded-[var(--radius)] w-full hover:bg-[var(--sidebar-primary)] transition-colors"
                >
                  <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
                    <p className="flex-[1_0_0] leading-[16px] text-[var(--foreground)] text-[14px] text-left">
                      Log out
                    </p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}