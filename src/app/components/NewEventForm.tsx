import { useState, useRef, useEffect } from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';
import svgPaths from "../../imports/svg-dv2wdhz28y";
import searchSvgPaths from "../../imports/svg-hkh4t53hh4";
import stepSvgPaths from "../../imports/svg-sclhcs6pf";
import { useUser } from '../context/UserContext';
import { useSession } from '../context/SessionContext';
import { useGovernment } from '../context/GovernmentContext';
import { CloseButton } from './CloseButton';

const timeOptions = [
  '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM',
  '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM',
  '05:00 PM', '05:30 PM', '06:00 PM', '06:30 PM', '07:00 PM', '07:30 PM',
];

const ageRestrictions = [
  '10yrs +',
  '13yrs +',
  '15yrs +',
  '16yrs +',
  '18yrs +',
];

// Icon Components

function IconsExpandMore() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / expand_more">
          <mask height="16" id="mask0_1_14872" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="0.0015626" />
          </mask>
          <g mask="url(#mask0_1_14872)">
            <path d={svgPaths.p271bc980} fill="var(--fill-0, #6E7CA8)" id="expand_more" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsExpandLess() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / expand_less">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / expand_less">
          <mask height="16" id="mask0_1_24737" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_24737)">
            <path d="M8.00098 10.1347L12.6676 5.46797L13.3343 6.13464L8.00098 11.468L2.66764 6.13464L3.33431 5.46797L8.00098 10.1347Z" fill="var(--fill-0, #6E7CA8)" id="expand_less" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsCheckCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / check_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / check_circle">
          <mask height="16" id="mask0_check_circle" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="#D9D9D9" height="16" width="16" />
          </mask>
          <g mask="url(#mask0_check_circle)">
            <path d="M7.33398 10.5L11.834 6L11.134 5.3L7.33398 9.1L4.86732 6.63333L4.16732 7.33333L7.33398 10.5ZM8.00065 14C7.07843 14 6.21176 13.825 5.40065 13.475C4.58954 13.125 3.88398 12.65 3.28398 12.05C2.68398 11.45 2.20898 10.7444 1.85898 9.93333C1.50898 9.12222 1.33398 8.25556 1.33398 7.33333C1.33398 6.41111 1.50898 5.54444 1.85898 4.73333C2.20898 3.92222 2.68398 3.21667 3.28398 2.61667C3.88398 2.01667 4.58954 1.54167 5.40065 1.19167C6.21176 0.841667 7.07843 0.666667 8.00065 0.666667C8.92287 0.666667 9.78954 0.841667 10.6007 1.19167C11.4118 1.54167 12.1173 2.01667 12.7173 2.61667C13.3173 3.21667 13.7923 3.92222 14.1423 4.73333C14.4923 5.54444 14.6673 6.41111 14.6673 7.33333C14.6673 8.25556 14.4923 9.12222 14.1423 9.93333C13.7923 10.7444 13.3173 11.45 12.7173 12.05C12.1173 12.65 11.4118 13.125 10.6007 13.475C9.78954 13.825 8.92287 14 8.00065 14Z" fill="#18A535" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsCalendarToday() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / calendar_today">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / calendar_today">
          <mask height="16" id="mask0_1_14909" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_14909)">
            <path d={svgPaths.p2d1f7e00} fill="var(--fill-0, #6E7CA8)" id="calendar_today" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsArrowForward() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / arrow_forward">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / arrow_forward">
          <mask height="16" id="mask0_1_14861" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_14861)">
            <path d={svgPaths.p1ced6100} fill="var(--fill-0, white)" id="arrow_forward" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsArrowLeftIosNew() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / arrow_left_ios_new">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / arrow_left_ios_new">
          <mask height="16" id="mask0_1_14833" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="0.000782013" />
          </mask>
          <g mask="url(#mask0_1_14833)">
            <path d={svgPaths.p3de3fc00} fill="var(--fill-0, #2F3E6D)" id="arrow_back_ios_new" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsSearch() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / search">
          <mask height="16" id="mask0_1_14833" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="0.000782013" />
          </mask>
          <g mask="url(#mask0_1_14833)">
            <path d={searchSvgPaths.p3de3fc00} fill="var(--fill-0, #2F3E6D)" id="search" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsCheckBox({ checked }: { checked: boolean }) {
  if (checked) {
    return (
      <div className="relative shrink-0 size-[16px]" data-name="Icons / check_box">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
          <g id="Icons / check_box">
            <mask height="16" id="mask0_1_24749" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
              <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
            </mask>
            <g mask="url(#mask0_1_24749)">
              <path d="M3.33398 14.0003C2.96732 14.0003 2.65343 13.8696 2.39232 13.6085C2.1312 13.3474 2.00065 13.0335 2.00065 12.667V3.33366C2.00065 2.96699 2.1312 2.6531 2.39232 2.39199C2.65343 2.13088 2.96732 2.00033 3.33398 2.00033H12.6673C13.034 2.00033 13.3479 2.13088 13.609 2.39199C13.8701 2.6531 14.0007 2.96699 14.0007 3.33366V12.667C14.0007 13.0335 13.8701 13.3474 13.609 13.6085C13.3479 13.8696 13.034 14.0003 12.6673 14.0003H3.33398ZM6.66732 10.7697L12.0007 5.43633L11.3007 4.73633L6.66732 9.36966L4.73398 7.43633L4.03398 8.13633L6.66732 10.7697Z" fill="#1850C5" />
            </g>
          </g>
        </svg>
      </div>
    );
  }
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / check_box_outline_blank">
          <mask height="16" id="mask0_1_24753" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_24753)">
            <path d="M3.33398 14.0003C2.96732 14.0003 2.65343 13.8696 2.39232 13.6085C2.1312 13.3474 2.00065 13.0335 2.00065 12.667V3.33366C2.00065 2.96699 2.1312 2.6531 2.39232 2.39199C2.65343 2.13088 2.96732 2.00033 3.33398 2.00033H12.6673C13.034 2.00033 13.3479 2.13088 13.609 2.39199C13.8701 2.6531 14.0007 2.96699 14.0007 3.33366V12.667C14.0007 13.0335 13.8701 13.3474 13.609 13.6085C13.3479 13.8696 13.034 14.0003 12.6673 14.0003H3.33398ZM3.33398 12.667H12.6673V3.33366H3.33398V12.667Z" fill="#6E7CA8" />
          </g>
        </g>
      </svg>
    </div>
  );
}

// Step Indicator Components

function Badge({ number }: { number: string }) {
  return (
    <div className="bg-[#d0e5fd] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[40px] shrink-0" data-name="Badge">
      <div className="flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 size-[16px] text-[#2f3e6d] text-[12px] text-center tracking-[-0.132px]">
        <p className="leading-[14px] whitespace-pre-wrap">{number}</p>
      </div>
    </div>
  );
}

function StepperBlock({ number, label, isActive }: { number: string; label: string; isActive: boolean }) {
  return (
    <div className={`content-stretch flex gap-[8px] items-center relative shrink-0 ${isActive ? '' : 'opacity-40'}`} data-name="Stepper_block">
      <Badge number={number} />
      <p className="font-semibold leading-[14px] not-italic relative shrink-0 text-[#2f3e6d] text-[12px]">{label}</p>
    </div>
  );
}

export function NewEventForm({ onClose }: { onClose: () => void }) {
  const { adminRole } = useUser();
  const { availablePartners } = useSession();
  const { eventFormMinistries: availableMinistries } = useGovernment();
  const isBluewhistleAdmin = adminRole === 'bluewhistle-admin';
  const isSchoolAdmin = adminRole === 'school-admin';
  const [currentStep, setCurrentStep] = useState(1); // Start at step 1
  
  // Step 1 fields - Only essential event information
  // For School Admins, automatically set host to 'partner' (their school)
  const [host, setHost] = useState(isSchoolAdmin ? 'partner' : ''); // 'Partner' or 'Bluewhistle'
  const [partnerName, setPartnerName] = useState(''); // Only shown when host is 'Partner'
  const [aboutEvent, setAboutEvent] = useState('');
  const [eventStartDate, setEventStartDate] = useState<Date | undefined>();
  const [eventStartTime, setEventStartTime] = useState('');
  const [eventEndDate, setEventEndDate] = useState<Date | undefined>();
  
  // Participating Partners state
  const [allPartnersSelected, setAllPartnersSelected] = useState(false);
  const [selectedPartners, setSelectedPartners] = useState<string[]>([]);
  const [partnerSearchQuery, setPartnerSearchQuery] = useState('');
  const [isPartnerDropdownOpen, setIsPartnerDropdownOpen] = useState(false);
  const participatingPartnersRef = useRef<HTMLDivElement>(null);
  
  // Step 2 fields - 5 ministry slots
  const [ministries, setMinistries] = useState<{
    [key: string]: {
      ministryId: string;
      selectedThemes: string[];
      isMinistryOpen: boolean;
      isThemeOpen: boolean;
      searchQuery: string;
    };
  }>({
    first: { ministryId: '', selectedThemes: [], isMinistryOpen: false, isThemeOpen: false, searchQuery: '' },
    second: { ministryId: '', selectedThemes: [], isMinistryOpen: false, isThemeOpen: false, searchQuery: '' },
    third: { ministryId: '', selectedThemes: [], isMinistryOpen: false, isThemeOpen: false, searchQuery: '' },
    fourth: { ministryId: '', selectedThemes: [], isMinistryOpen: false, isThemeOpen: false, searchQuery: '' },
    fifth: { ministryId: '', selectedThemes: [], isMinistryOpen: false, isThemeOpen: false, searchQuery: '' },
  });
  
  const [committee, setCommittee] = useState('');
  
  // Step 3 fields - Your original 4 deadline fields with calendar support
  const [questionsDeadlineDate, setQuestionsDeadlineDate] = useState<Date | undefined>();
  const [billBySelectCommitteeDate, setBillBySelectCommitteeDate] = useState<Date | undefined>();
  const [noticesDeadlineDate, setNoticesDeadlineDate] = useState<Date | undefined>();
  const [amendmentsToBillDate, setAmendmentsToBillDate] = useState<Date | undefined>();
  
  // Track which calendar is open
  const [openCalendar, setOpenCalendar] = useState<string | null>(null);
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const ministryDropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const calendarRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Click outside handler to close dropdowns
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Check if click is outside all ministry dropdowns
      const clickedOutside = Object.values(ministryDropdownRefs.current).every(
        ref => !ref || !ref.contains(event.target as Node)
      );
      
      if (clickedOutside) {
        // Close all dropdowns
        setMinistries(prev => {
          const updated = { ...prev };
          Object.keys(updated).forEach(key => {
            updated[key] = {
              ...updated[key],
              isMinistryOpen: false,
              isThemeOpen: false
            };
          });
          return updated;
        });
      }

      // Check if click is outside participating partners dropdown
      if (participatingPartnersRef.current && !participatingPartnersRef.current.contains(event.target as Node)) {
        setIsPartnerDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Ministry field handlers
  const toggleMinistryDropdown = (slot: string) => {
    setMinistries(prev => ({
      ...prev,
      [slot]: {
        ...prev[slot],
        isMinistryOpen: !prev[slot].isMinistryOpen,
        isThemeOpen: false // Close theme dropdown when opening ministry
      }
    }));
  };

  const toggleThemeDropdown = (slot: string) => {
    setMinistries(prev => ({
      ...prev,
      [slot]: {
        ...prev[slot],
        isThemeOpen: !prev[slot].isThemeOpen,
        isMinistryOpen: false // Close ministry dropdown when opening theme
      }
    }));
  };

  const selectMinistry = (slot: string, ministryId: string) => {
    setMinistries(prev => {
      const updated = { ...prev };
      // Close all dropdowns
      Object.keys(updated).forEach(key => {
        updated[key] = {
          ...updated[key],
          isMinistryOpen: false,
          isThemeOpen: false
        };
      });
      // Update the selected ministry for this slot
      updated[slot] = {
        ...updated[slot],
        ministryId,
        selectedThemes: [], // Clear themes when changing ministry
        isMinistryOpen: false
      };
      return updated;
    });
  };

  const toggleTheme = (slot: string, theme: string) => {
    setMinistries(prev => {
      const ministry = prev[slot];
      const newThemes = ministry.selectedThemes.includes(theme)
        ? ministry.selectedThemes.filter(t => t !== theme)
        : [...ministry.selectedThemes, theme];
      
      return {
        ...prev,
        [slot]: {
          ...ministry,
          selectedThemes: newThemes
        }
      };
    });
  };

  // Participating Partners handlers
  const handleAllPartnersToggle = () => {
    if (allPartnersSelected) {
      setAllPartnersSelected(false);
      setSelectedPartners([]);
    } else {
      setAllPartnersSelected(true);
      setSelectedPartners([...availablePartners]);
    }
  };

  const handlePartnerToggle = (partner: string) => {
    if (selectedPartners.includes(partner)) {
      const newSelected = selectedPartners.filter(p => p !== partner);
      setSelectedPartners(newSelected);
      if (newSelected.length === 0) {
        setAllPartnersSelected(false);
      }
    } else {
      const newSelected = [...selectedPartners, partner];
      setSelectedPartners(newSelected);
      if (newSelected.length === availablePartners.length) {
        setAllPartnersSelected(true);
      }
    }
  };

  // Filter partners based on search query
  const filteredPartners = availablePartners.filter(partner =>
    partner.toLowerCase().includes(partnerSearchQuery.toLowerCase())
  );

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderMinistryField = (slot: string, label: string) => {
    const ministry = ministries[slot];
    const selectedMinistry = availableMinistries.find(m => m.id === ministry.ministryId);
    const selectedThemeCount = ministry.selectedThemes.length;
    
    // Get all selected ministry IDs from OTHER slots (not current slot)
    const selectedMinistryIds = Object.entries(ministries)
      .filter(([key]) => key !== slot)
      .map(([, value]) => value.ministryId)
      .filter(id => id !== '');
    
    // Filter out already selected ministries
    const availableMinistryOptions = availableMinistries.filter(
      m => !selectedMinistryIds.includes(m.id)
    );
    
    return (
      <div 
        key={slot} 
        ref={(el) => ministryDropdownRefs.current[slot] = el}
        className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      >
        <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">
          {label}
        </p>
        
        {/* Ministry selection field */}
        <div 
          className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full"
        >
          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${ministry.isMinistryOpen ? 'border-[#1850c5]' : 'border-[#c8cee2]'}`} />
          <div className="flex flex-row items-center size-full">
            <div 
              className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full cursor-pointer"
              onClick={() => toggleMinistryDropdown(slot)}
            >
              <div className={`flex-1 leading-[20px] not-italic text-[14px] ${selectedMinistry ? 'text-[#2f3e6d]' : 'text-[#6e7ca8]'}`}>
                {selectedMinistry ? selectedMinistry.name : 'Select Ministry'}
              </div>
              
              {selectedMinistry && !ministry.isMinistryOpen && <IconsCheckCircle />}
              {ministry.isMinistryOpen ? <IconsExpandLess /> : !selectedMinistry && <IconsExpandMore />}
            </div>
          </div>
        </div>

        {/* Ministry dropdown */}
        {ministry.isMinistryOpen && (
          <div className="bg-white relative rounded-[8px] shrink-0 w-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] max-h-[320px] overflow-hidden">
            <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px] z-0" />
            <div className="flex flex-col relative z-10">
              {/* Search field */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full p-[12px]">
                <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                      <IconsSearch />
                      <input
                        type="text"
                        value={ministry.searchQuery}
                        onChange={(e) => setMinistries(prev => ({
                          ...prev,
                          [slot]: { ...prev[slot], searchQuery: e.target.value }
                        }))}
                        placeholder="Search"
                        className="flex-[1_0_0] bg-transparent leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap outline-none placeholder:text-[#6e7ca8]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Ministry options list */}
              <div className="flex flex-col max-h-[240px] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#c8cee2_transparent] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-[#c8cee2] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                {availableMinistryOptions
                  .filter(m => m.name.toLowerCase().includes(ministry.searchQuery.toLowerCase()))
                  .map((m) => (
                    <div 
                      key={m.id}
                      className="relative rounded-[8px] shrink-0 w-full hover:bg-[#f8f9fb] cursor-pointer"
                      onClick={() => selectMinistry(slot, m.id)}
                    >
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
                          <IconsCheckBox checked={ministry.ministryId === m.id} />
                          <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                            <p className="flex-[1_0_0] font-semibold leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#1850c5] text-[14px] text-ellipsis whitespace-nowrap">
                              {m.name}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderThemeField = (slot: string) => {
    const ministry = ministries[slot];
    const selectedMinistry = availableMinistries.find(m => m.id === ministry.ministryId);
    const selectedThemeCount = ministry.selectedThemes.length;
    
    if (!selectedMinistry) return null;
    
    return (
      <div 
        key={`${slot}-themes`} 
        ref={(el) => ministryDropdownRefs.current[`${slot}-theme`] = el}
        className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
      >
        <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">
          Themes for {selectedMinistry.name}
        </p>
        
        {/* Theme selection field with chips */}
        <div 
          className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full"
        >
          <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${ministry.isThemeOpen && selectedMinistry ? 'border-[#1850c5]' : 'border-[#c8cee2]'}`} />
          <div className="flex flex-row items-center size-full">
            <div 
              className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full cursor-pointer"
              onClick={() => toggleThemeDropdown(slot)}
            >
              {/* Chips display */}
              {selectedThemeCount > 0 ? (
                <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-hidden relative">
                  {/* First theme chip */}
                  <div className="bg-white flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[4px]">
                    <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
                        <div className="flex flex-[1_0_0] flex-col h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#3c4c7c] text-[12px] text-ellipsis whitespace-nowrap">
                          <p className="leading-[16px] overflow-hidden">{ministry.selectedThemes[0]}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional themes count badge */}
                  {selectedThemeCount > 1 && (
                    <div className="bg-white content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                      <div className="flex flex-col h-full justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[12px] text-ellipsis whitespace-nowrap">
                        <p className="leading-[16px] overflow-hidden">+{selectedThemeCount - 1}</p>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="flex-1 leading-[20px] not-italic text-[#6e7ca8] text-[14px]">
                  Select themes (up to 5)
                </div>
              )}
              
              {selectedThemeCount === 5 && !ministry.isThemeOpen && <IconsCheckCircle />}
              {ministry.isThemeOpen && selectedMinistry ? <IconsExpandLess /> : selectedThemeCount !== 5 && <IconsExpandMore />}
            </div>
          </div>
        </div>

        {/* Theme dropdown */}
        {ministry.isThemeOpen && selectedMinistry && (
          <div className="bg-white relative rounded-[8px] shrink-0 w-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] max-h-[280px] overflow-hidden">
            <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px] z-0" />
            <div className="flex flex-col relative z-10">
              {/* Search field */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full p-[12px]">
                <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                      <IconsSearch />
                      <input
                        type="text"
                        placeholder="Search"
                        className="flex-[1_0_0] bg-transparent leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap outline-none placeholder:text-[#6e7ca8]"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Theme options */}
              <div className="flex flex-col px-[12px] pb-[12px] gap-[4px] max-h-[180px] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#c8cee2_transparent] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-[#c8cee2] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                <p className="font-semibold leading-[14px] not-italic text-[#2f3e6d] text-[12px] mb-[4px]">
                  Select Themes ({selectedThemeCount}/5)
                </p>
                {selectedMinistry.themes.map((theme) => (
                  <div 
                    key={theme}
                    className="relative rounded-[8px] shrink-0 w-full hover:bg-[#f8f9fb] cursor-pointer"
                    onClick={() => toggleTheme(slot, theme)}
                  >
                    <div className="flex flex-row items-center size-full">
                      <div className="content-stretch flex gap-[8px] items-center px-[4px] py-[6px] relative w-full">
                        <IconsCheckBox checked={ministry.selectedThemes.includes(theme)} />
                        <p className="flex-[1_0_0] leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
                          {theme}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] w-full max-h-[calc(100vh-230px)] overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      
      {/* Scrollable Content Area */}
      <div className="content-stretch flex flex-col gap-[16px] items-start w-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-[2px]">
        {/* Header with Title and Close Button */}
        <div className="content-stretch flex gap-[8px] items-center relative rounded-[12px] shrink-0 w-full" data-name="Title + close">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-semibold justify-center leading-[0] min-h-[32px] not-italic overflow-hidden relative shrink-0 text-[#041a5e] text-[20px] text-ellipsis w-full whitespace-nowrap">
                <p className="leading-[1.3] overflow-hidden">Add New Event</p>
              </div>
            </div>
          </div>
          <CloseButton onClick={onClose} />
        </div>

        {/* Stepper */}
        <div className="content-stretch flex gap-[24px] items-end relative shrink-0 w-full">
          <StepperBlock number="01" label="Info" isActive={currentStep === 1} />
          <StepperBlock number="02" label="Management" isActive={currentStep === 2} />
          <StepperBlock number="03" label="Dates" isActive={currentStep === 3} />
        </div>

        {/* Step 1: Info */}
        {currentStep === 1 && (
          <>
            {/* Host - Only shown for Bluewhistle Admin */}
            {!isSchoolAdmin && (
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Host</p>
                <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                      <select
                        value={host}
                        onChange={(e) => setHost(e.target.value)}
                        className="bg-transparent flex-1 leading-[20px] min-h-px min-w-px not-italic outline-none relative text-[#2f3e6d] text-[14px] appearance-none cursor-pointer"
                      >
                        <option value="">Select Host</option>
                        <option value="partner">Partner</option>
                        {isBluewhistleAdmin && (
                          <option value="bluewhistle">Bluewhistle</option>
                        )}
                      </select>
                      <IconsExpandMore />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Partner Name (only shown when host is 'Partner') */}
            {host === 'partner' && (
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Partner Name</p>
                <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                      <select
                        value={partnerName}
                        onChange={(e) => setPartnerName(e.target.value)}
                        className="bg-transparent flex-1 leading-[20px] min-h-px min-w-px not-italic outline-none relative text-[#2f3e6d] text-[14px] appearance-none cursor-pointer"
                      >
                        <option value="">Select Partner</option>
                        {availablePartners.map(partner => (
                          <option key={partner} value={partner}>{partner}</option>
                        ))}
                      </select>
                      <IconsExpandMore />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Participating Partners */}
            <div 
              ref={participatingPartnersRef}
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
            >
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">
                Participating Partners
              </p>
              
              {/* Partner selection field with chips */}
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${isPartnerDropdownOpen ? 'border-[#1850c5]' : 'border-[#c8cee2]'}`} />
                <div className="flex flex-row items-center size-full">
                  <div 
                    className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full cursor-pointer"
                    onClick={() => setIsPartnerDropdownOpen(!isPartnerDropdownOpen)}
                  >
                    {/* Chips display */}
                    {selectedPartners.length > 0 ? (
                      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-hidden relative">
                        {/* First partner chip */}
                        <div className="bg-white flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[4px]">
                          <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
                              <div className="flex flex-[1_0_0] flex-col h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#3c4c7c] text-[12px] text-ellipsis whitespace-nowrap">
                                <p className="leading-[16px] overflow-hidden">
                                  {allPartnersSelected ? 'All Partners' : selectedPartners[0]}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Additional partners count badge */}
                        {selectedPartners.length > 1 && !allPartnersSelected && (
                          <div className="bg-white content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                            <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                            <div className="flex flex-col h-full justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[12px] text-ellipsis whitespace-nowrap">
                              <p className="leading-[16px] overflow-hidden">+{selectedPartners.length - 1}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex-1 leading-[20px] not-italic text-[#6e7ca8] text-[14px]">
                        Select partners
                      </div>
                    )}
                    
                    {isPartnerDropdownOpen ? <IconsExpandLess /> : <IconsExpandMore />}
                  </div>
                </div>
              </div>

              {/* Partner dropdown */}
              {isPartnerDropdownOpen && (
                <div className="bg-white relative rounded-[8px] shrink-0 w-full shadow-[0px_4px_12px_0px_rgba(0,0,0,0.1)] max-h-[320px] overflow-hidden">
                  <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px] z-0" />
                  <div className="flex flex-col relative z-10">
                    {/* Search field */}
                    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full p-[12px]">
                      <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                        <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                            <IconsSearch />
                            <input
                              type="text"
                              value={partnerSearchQuery}
                              onChange={(e) => setPartnerSearchQuery(e.target.value)}
                              placeholder="Search"
                              className="flex-[1_0_0] bg-transparent leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap outline-none placeholder:text-[#6e7ca8]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Partner options list */}
                    <div className="flex flex-col max-h-[240px] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#c8cee2_transparent] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-[#c8cee2] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                      {/* All Partners option */}
                      <div 
                        className="relative rounded-[8px] shrink-0 w-full hover:bg-[#f8f9fb] cursor-pointer"
                        onClick={handleAllPartnersToggle}
                      >
                        <div className="flex flex-row items-center size-full">
                          <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
                            <IconsCheckBox checked={allPartnersSelected} />
                            <p className="flex-[1_0_0] font-semibold leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#1850c5] text-[14px] text-ellipsis whitespace-nowrap">
                              All Partners
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Individual partner options */}
                      {filteredPartners.map((partner) => (
                        <div 
                          key={partner}
                          className="relative rounded-[8px] shrink-0 w-full hover:bg-[#f8f9fb] cursor-pointer"
                          onClick={() => handlePartnerToggle(partner)}
                        >
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
                              <IconsCheckBox checked={selectedPartners.includes(partner)} />
                              <p className="flex-[1_0_0] leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
                                {partner}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* About Event */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">About Event</p>
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                    <textarea
                      value={aboutEvent}
                      onChange={(e) => setAboutEvent(e.target.value)}
                      placeholder="Enter details about the event"
                      className="flex-1 bg-transparent leading-[20px] min-h-px min-w-px not-italic outline-none relative text-[#2f3e6d] text-[14px] resize-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Event Start Date */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Event Start Date</p>
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]"/>
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                    <input
                      type="date"
                      value={eventStartDate ? format(eventStartDate, 'yyyy-MM-dd') : ''}
                      onChange={(e) => setEventStartDate(e.target.value ? new Date(e.target.value) : undefined)}
                      placeholder="Select Date"
                      className="flex-1 bg-transparent leading-[20px] min-h-px min-w-px not-italic outline-none relative text-[#2f3e6d] text-[14px] cursor-pointer"
                    />
                    <IconsCalendarToday />
                  </div>
                </div>
              </div>
            </div>

            {/* Event Start Time */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Event Start Time</p>
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]"/>
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                    <select
                      value={eventStartTime}
                      onChange={(e) => setEventStartTime(e.target.value)}
                      className="bg-transparent flex-1 leading-[20px] min-h-px min-w-px not-italic outline-none relative text-[#2f3e6d] text-[14px] appearance-none cursor-pointer"
                    >
                      <option value="">Select Time</option>
                      {timeOptions.map(time => (
                        <option key={time} value={time}>{time}</option>
                      ))}
                    </select>
                    <IconsExpandMore />
                  </div>
                </div>
              </div>
            </div>

            {/* Event End Date */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Event End Date</p>
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]"/>
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                    <input
                      type="date"
                      value={eventEndDate ? format(eventEndDate, 'yyyy-MM-dd') : ''}
                      onChange={(e) => setEventEndDate(e.target.value ? new Date(e.target.value) : undefined)}
                      placeholder="Select Date"
                      className="flex-1 bg-transparent leading-[20px] min-h-px min-w-px not-italic outline-none relative text-[#2f3e6d] text-[14px] cursor-pointer"
                    />
                    <IconsCalendarToday />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Step 2: Management */}
        {currentStep === 2 && (
          <>
            {/* 5 Ministry Fields */}
            {renderMinistryField('first', 'First Ministry')}
            {renderThemeField('first')}
            
            {renderMinistryField('second', 'Second Ministry')}
            {renderThemeField('second')}
            
            {renderMinistryField('third', 'Third Ministry')}
            {renderThemeField('third')}
            
            {renderMinistryField('fourth', 'Fourth Ministry')}
            {renderThemeField('fourth')}
            
            {renderMinistryField('fifth', 'Fifth Ministry')}
            {renderThemeField('fifth')}

            {/* Committee */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap">Committee</p>
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center p-[12px] relative w-full">
                    <select
                      value={committee}
                      onChange={(e) => setCommittee(e.target.value)}
                      className="bg-transparent flex-1 leading-[20px] min-h-px min-w-px not-italic outline-none relative text-[#2f3e6d] text-[14px] appearance-none cursor-pointer"
                    >
                      <option value="">Select Committee</option>
                      <option value="education-committee">Education Committee</option>
                      <option value="finance-committee">Finance Committee</option>
                      <option value="health-committee">Health Committee</option>
                    </select>
                    <IconsExpandMore />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Step 3: Dates */}
        {currentStep === 3 && (
          <>
            {/* Submission of Questions */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Submission of Questions</p>
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]"/>
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                    <input
                      type="date"
                      value={questionsDeadlineDate ? format(questionsDeadlineDate, 'yyyy-MM-dd') : ''}
                      onChange={(e) => setQuestionsDeadlineDate(e.target.value ? new Date(e.target.value) : undefined)}
                      placeholder="Select Date"
                      className="flex-1 bg-transparent leading-[20px] min-h-px min-w-px not-italic outline-none relative text-[#2f3e6d] text-[14px] cursor-pointer"
                    />
                    <IconsCalendarToday />
                  </div>
                </div>
              </div>
            </div>

            {/* Submission of New Bill by Select Committee */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Submission of New Bill by Select Committee</p>
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]"/>
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                    <input
                      type="date"
                      value={billBySelectCommitteeDate ? format(billBySelectCommitteeDate, 'yyyy-MM-dd') : ''}
                      onChange={(e) => setBillBySelectCommitteeDate(e.target.value ? new Date(e.target.value) : undefined)}
                      placeholder="Select Date"
                      className="flex-1 bg-transparent leading-[20px] min-h-px min-w-px not-italic outline-none relative text-[#2f3e6d] text-[14px] cursor-pointer"
                    />
                    <IconsCalendarToday />
                  </div>
                </div>
              </div>
            </div>

            {/* Submission of Notices by Members */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Submission of Notices by Members</p>
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]"/>
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                    <input
                      type="date"
                      value={noticesDeadlineDate ? format(noticesDeadlineDate, 'yyyy-MM-dd') : ''}
                      onChange={(e) => setNoticesDeadlineDate(e.target.value ? new Date(e.target.value) : undefined)}
                      placeholder="Select Date"
                      className="flex-1 bg-transparent leading-[20px] min-h-px min-w-px not-italic outline-none relative text-[#2f3e6d] text-[14px] cursor-pointer"
                    />
                    <IconsCalendarToday />
                  </div>
                </div>
              </div>
            </div>

            {/* Submission of Amendments by Members */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Submission of Amendments by Members</p>
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]"/>
                <div className="flex flex-row items-center size-full">
                  <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
                    <input
                      type="date"
                      value={amendmentsToBillDate ? format(amendmentsToBillDate, 'yyyy-MM-dd') : ''}
                      onChange={(e) => setAmendmentsToBillDate(e.target.value ? new Date(e.target.value) : undefined)}
                      placeholder="Select Date"
                      className="flex-1 bg-transparent leading-[20px] min-h-px min-w-px not-italic outline-none relative text-[#2f3e6d] text-[14px] cursor-pointer"
                    />
                    <IconsCalendarToday />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Navigation Buttons */}
        <div className="content-stretch flex gap-[8px] items-center justify-between relative shrink-0 w-full">
          {currentStep === 1 && (
            <>
              <button className="bg-white flex-1 h-[40px] min-h-px min-w-px relative rounded-[8px] cursor-pointer hover:bg-gray-50">
                <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                  <p className="leading-[16px] not-italic text-[#2f3e6d] text-[14px]">Save as Draft</p>
                </div>
              </button>

              <button 
                onClick={handleNext}
                className="bg-[#2766da] flex-1 h-[40px] min-h-px min-w-px relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#1e54b7]"
              >
                <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                  <p className="leading-[16px] not-italic text-[14px] text-white">Next</p>
                  <IconsArrowForward />
                </div>
              </button>
            </>
          )}
          
          {currentStep === 2 && (
            <>
              <button
                className="bg-white h-[40px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-50 px-[12px]"
                onClick={handlePrev}
              >
                <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                  <IconsArrowLeftIosNew />
                </div>
                <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </button>

              <button className="bg-white flex-1 h-[40px] min-h-px min-w-px relative rounded-[8px] cursor-pointer hover:bg-gray-50">
                <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                  <p className="leading-[16px] not-italic text-[#2f3e6d] text-[14px]">Save as Draft</p>
                </div>
              </button>

              <button 
                onClick={handleNext}
                className="bg-[#2766da] flex-1 h-[40px] min-h-px min-w-px relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#1e54b7]"
              >
                <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                  <p className="leading-[16px] not-italic text-[14px] text-white">Next</p>
                  <IconsArrowForward />
                </div>
              </button>
            </>
          )}
          
          {currentStep === 3 && (
            <>
              <button
                className="bg-white h-[40px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-gray-50 px-[12px]"
                onClick={handlePrev}
              >
                <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                  <IconsArrowLeftIosNew />
                </div>
                <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
              </button>

              <button className="bg-white flex-1 h-[40px] min-h-px min-w-px relative rounded-[8px] cursor-pointer hover:bg-gray-50">
                <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                  <p className="leading-[16px] not-italic text-[#2f3e6d] text-[14px]">Save as Draft</p>
                </div>
              </button>

              <button className="bg-[#2766da] flex-1 h-[40px] min-h-px min-w-px relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#1e54b7]">
                <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                  <p className="leading-[16px] not-italic text-[14px] text-white">Publish Event</p>
                </div>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}