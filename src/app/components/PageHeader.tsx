import svgPaths from "../../imports/svg-ukbgtczgk2";
import imgEllipse1 from "figma:asset/aea56f3263ece92dd93d47abce807ee8df611744.png";
import { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router';

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

function IconsEdit() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / edit">
          <mask height="16" id="mask0_62_5786" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5786)">
            <path d="M3.33464 12.6663H4.0013L10.168 6.49967L9.5013 5.83301L3.33464 11.9997V12.6663ZM2.0013 13.9997V11.4997L10.168 3.33301C10.2791 3.23301 10.4013 3.15523 10.5346 3.09967C10.668 3.04412 10.8097 3.01634 10.9596 3.01634C11.1096 3.01634 11.2541 3.04412 11.393 3.09967C11.5319 3.15523 11.6513 3.23856 11.7513 3.34967L12.668 4.28301C12.7791 4.38301 12.8596 4.50245 12.9096 4.64134C12.9596 4.78023 12.9846 4.91912 12.9846 5.05801C12.9846 5.20801 12.9596 5.34967 12.9096 5.48301C12.8596 5.61634 12.7791 5.73856 12.668 5.84967L4.5013 13.9997H2.0013ZM9.82631 6.16634L9.5013 5.83301L10.168 6.49967L9.82631 6.16634Z" fill="var(--fill-0, #2F3E6D)" id="edit" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsLogout() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / logout">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / logout">
          <mask height="16" id="mask0_62_5658" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5658)">
            <path d="M3.33398 14.0003C2.96732 14.0003 2.65343 13.8696 2.39232 13.6085C2.1312 13.3474 2.00065 13.0335 2.00065 12.667V3.33366C2.00065 2.96699 2.1312 2.6531 2.39232 2.39199C2.65343 2.13088 2.96732 2.00033 3.33398 2.00033H8.00065V3.33366H3.33398V12.667H8.00065V14.0003H3.33398ZM10.6673 11.3337L9.73398 10.3337L11.734 8.33366H6.00065V7.00033H11.734L9.73398 5.00033L10.6673 4.00033L14.6673 8.00033L10.6673 11.3337Z" fill="var(--fill-0, #3C4C7C)" id="logout" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsSwapHoriz() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / swap_horiz">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / swap_horiz">
          <mask height="16" id="mask0_swap" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_swap)">
            <path d="M5.33398 11.3337L2.00065 8.00033L5.33398 4.66699V6.66699H10.0007V9.33366H5.33398V11.3337ZM10.6673 11.3337V9.33366H14.0007V6.66699H10.6673V4.66699L14.0007 8.00033L10.6673 11.3337Z" fill="var(--fill-0, #2F3E6D)" id="swap_horiz" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] whitespace-nowrap">
          <p className="leading-[14px]">Let's Legislate</p>
        </div>
        <IconsExpandMore />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

export function PageHeader() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Determine current role based on the route
  const currentRole = location.pathname.startsWith('/student') ? 'student' : 'admin';

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

  const handleRoleSwitch = () => {
    const newRole = currentRole === 'admin' ? 'student' : 'admin';
    setIsDropdownOpen(false);
    
    // Navigate to respective dashboard
    if (newRole === 'student') {
      navigate('/student/home');
    } else {
      navigate('/dashboard');
    }
  };

  const handleLogout = () => {
    navigate('/');
  };

  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] items-center p-[8px] right-[calc(16.67%+56px)] rounded-[12px] top-[32px]" data-name="Top Side bar">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Buttons />
      <div className="relative" ref={dropdownRef}>
        <button 
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="relative shrink-0 size-[32px] cursor-pointer rounded-full hover:opacity-80 transition-opacity"
        >
          <img alt="Profile" className="block max-w-none size-full rounded-full" height="32" src={imgEllipse1} width="32" />
        </button>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className="absolute bg-white right-0 top-[calc(100%+16px)] rounded-[12px] shadow-[0px_8px_16px_0px_rgba(0,0,0,0.15)] w-[280px] z-50">
            <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
            
            <div className="content-stretch flex flex-col items-start p-[16px] relative">
              {/* Profile Section */}
              <div className="content-stretch flex flex-col gap-[12px] items-center pb-[16px] relative w-full border-b border-[#e3e6f0]">
                <div className="relative shrink-0 size-[64px]">
                  <img alt="Profile" className="block max-w-none size-full rounded-full" height="64" src={imgEllipse1} width="64" />
                </div>
                <div className="flex flex-col gap-[4px] items-center w-full">
                  <p className="font-semibold leading-[normal] text-[#2f3e6d] text-[20px]">
                    {currentRole === 'admin' ? 'Admin User' : 'Jason Surya'}
                  </p>
                  <p className="leading-[normal] text-[#6e7ca8] text-[14px]">
                    {currentRole === 'admin' ? 'Administrator' : 'SBOA School & Junior college'}
                  </p>
                </div>
              </div>

              {/* Menu Items */}
              <div className="content-stretch flex flex-col gap-[0px] items-start pt-[12px] relative w-full">
                {/* Switch Role */}
                <button
                  onClick={handleRoleSwitch}
                  className="relative rounded-[8px] w-full hover:bg-[#f8f9fb] transition-colors"
                >
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
                      <p className="flex-[1_0_0] leading-[16px] text-[#2f3e6d] text-[14px] text-left">
                        Switch to {currentRole === 'admin' ? 'Student' : 'Admin'}
                      </p>
                    </div>
                  </div>
                </button>

                {/* Edit Profile */}
                <button
                  className="relative rounded-[8px] w-full hover:bg-[#f8f9fb] transition-colors"
                >
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
                      <p className="flex-[1_0_0] leading-[16px] text-[#2f3e6d] text-[14px] text-left">
                        Edit Profile
                      </p>
                    </div>
                  </div>
                </button>

                {/* Log out */}
                <button
                  onClick={handleLogout}
                  className="relative rounded-[8px] w-full hover:bg-[#f8f9fb] transition-colors"
                >
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex items-center px-[12px] py-[8px] relative w-full">
                      <p className="flex-[1_0_0] leading-[16px] text-[#2f3e6d] text-[14px] text-left">
                        Log out
                      </p>
                    </div>
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