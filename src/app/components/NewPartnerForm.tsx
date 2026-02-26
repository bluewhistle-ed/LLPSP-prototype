import { useState, useRef, useEffect } from 'react';
import svgPaths from "../../imports/svg-dv2wdhz28y";
import searchSvgPaths from "../../imports/svg-hkh4t53hh4";

function IconsCircleClose() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / circle_close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / circle_close">
          <mask height="16" id="mask0_1_14827" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_1_14827)">
            <path d={svgPaths.p1dd38d00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
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

export function NewPartnerForm({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(1);
  
  // Step 1: Basic Info
  const [schoolName, setSchoolName] = useState('');
  const [shortName, setShortName] = useState('');
  const [address, setAddress] = useState('');
  const [parentOrganisation, setParentOrganisation] = useState('');
  
  // Step 2: Contacts
  const [principalName, setPrincipalName] = useState('');
  const [principalEmail, setPrincipalEmail] = useState('');
  const [principalContact, setPrincipalContact] = useState('');
  
  const [vicePrincipalName, setVicePrincipalName] = useState('');
  const [vicePrincipalEmail, setVicePrincipalEmail] = useState('');
  const [vicePrincipalContact, setVicePrincipalContact] = useState('');
  
  const [spocName, setSpocName] = useState('');
  const [spocEmail, setSpocEmail] = useState('');
  const [spocContact, setSpocContact] = useState('');
  
  // Step 3: More Details - Boards
  const [selectedBoards, setSelectedBoards] = useState<string[]>([]);
  const [isBoardsDropdownOpen, setIsBoardsDropdownOpen] = useState(false);
  const [boardSearchQuery, setBoardSearchQuery] = useState('');
  const boardsDropdownRef = useRef<HTMLDivElement>(null);

  const availableBoards = ['CBSE', 'IB', 'IGCSE'];

  const handleBoardToggle = (board: string) => {
    if (selectedBoards.includes(board)) {
      setSelectedBoards(selectedBoards.filter(b => b !== board));
    } else {
      setSelectedBoards([...selectedBoards, board]);
    }
  };

  const filteredBoards = availableBoards.filter(board =>
    board.toLowerCase().includes(boardSearchQuery.toLowerCase())
  );

  // Click outside handler to close boards dropdown
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (boardsDropdownRef.current && !boardsDropdownRef.current.contains(event.target as Node)) {
        setIsBoardsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

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
                <p className="leading-[1.3] overflow-hidden">Add New Partner</p>
              </div>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="bg-white h-[32px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-50"
          >
            <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
              <IconsCircleClose />
            </div>
            <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
          <StepperBlock number="1" label="Basic Info" isActive={currentStep === 1} />
          <StepperBlock number="2" label="Contacts" isActive={currentStep === 2} />
          <StepperBlock number="3" label="More Details" isActive={currentStep === 3} />
        </div>

        {/* Step 1: Basic Info */}
        {currentStep === 1 && (
          <>
            {/* School Name */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap">Name</p>
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <input
                    type="text"
                    value={schoolName}
                    onChange={(e) => setSchoolName(e.target.value)}
                    placeholder="Enter Name"
                    className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                  />
                </div>
              </div>
            </div>

            {/* Short Name */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap">Short Name</p>
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <input
                    type="text"
                    value={shortName}
                    onChange={(e) => setShortName(e.target.value)}
                    placeholder="Enter Short Name"
                    className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                  />
                </div>
              </div>
            </div>

            {/* School Address */}
            <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap">Address</p>
              <div className="bg-[#f8f9fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex gap-[4px] items-start p-[12px] relative size-full">
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter Address"
                    className="bg-transparent w-full h-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] outline-none resize-none placeholder:text-[#6e7ca8]"
                  />
                </div>
              </div>
            </div>

            {/* Parent Organisation */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap">Parent Organisation</p>
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <input
                    type="text"
                    value={parentOrganisation}
                    onChange={(e) => setParentOrganisation(e.target.value)}
                    placeholder="Enter Parent Organisation"
                    className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                  />
                </div>
              </div>
            </div>

            {/* School Logo */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap">Partner Logo</p>
              <button className="relative rounded-[8px] shrink-0 w-full hover:bg-gray-50">
                <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center justify-center size-full">
                  <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
                    <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] whitespace-nowrap">
                      <p className="leading-[16px]">Upload</p>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </>
        )}

        {/* Step 2: Contacts */}
        {currentStep === 2 && (
          <>
            {/* Principal Contact Details */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <p className="font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">Principal</p>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                {/* Principal Name */}
                <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <input
                      type="text"
                      value={principalName}
                      onChange={(e) => setPrincipalName(e.target.value)}
                      placeholder="Name"
                      className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                    />
                  </div>
                </div>

                {/* Principal Email */}
                <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <input
                      type="email"
                      value={principalEmail}
                      onChange={(e) => setPrincipalEmail(e.target.value)}
                      placeholder="Email"
                      className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                    />
                  </div>
                </div>

                {/* Principal Contact Number */}
                <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <input
                      type="text"
                      value={principalContact}
                      onChange={(e) => setPrincipalContact(e.target.value)}
                      placeholder="Phone"
                      className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="bg-[#e3e6f0] h-px shrink-0 w-full" />

            {/* Vice Principal Contact Details */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <p className="font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">Vice Principal</p>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                {/* Vice Principal Name */}
                <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <input
                      type="text"
                      value={vicePrincipalName}
                      onChange={(e) => setVicePrincipalName(e.target.value)}
                      placeholder="Name"
                      className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                    />
                  </div>
                </div>

                {/* Vice Principal Email */}
                <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <input
                      type="email"
                      value={vicePrincipalEmail}
                      onChange={(e) => setVicePrincipalEmail(e.target.value)}
                      placeholder="Email"
                      className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                    />
                  </div>
                </div>

                {/* Vice Principal Contact Number */}
                <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <input
                      type="text"
                      value={vicePrincipalContact}
                      onChange={(e) => setVicePrincipalContact(e.target.value)}
                      placeholder="Phone"
                      className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="bg-[#e3e6f0] h-px shrink-0 w-full" />

            {/* SPOC Contact Details */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <p className="font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">SPOC</p>
              <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
                {/* SPOC Name */}
                <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <input
                      type="text"
                      value={spocName}
                      onChange={(e) => setSpocName(e.target.value)}
                      placeholder="Name"
                      className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                    />
                  </div>
                </div>

                {/* SPOC Email */}
                <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <input
                      type="email"
                      value={spocEmail}
                      onChange={(e) => setSpocEmail(e.target.value)}
                      placeholder="Email"
                      className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                    />
                  </div>
                </div>

                {/* SPOC Contact Number */}
                <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                  <div className="flex flex-row items-center size-full">
                    <input
                      type="text"
                      value={spocContact}
                      onChange={(e) => setSpocContact(e.target.value)}
                      placeholder="Phone"
                      className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Step 3: More Details */}
        {currentStep === 3 && (
          <>
            {/* Boards */}
            <div 
              ref={boardsDropdownRef}
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
            >
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Boards</p>
              
              {/* Board selection field with chips */}
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${isBoardsDropdownOpen ? 'border-[#1850c5]' : 'border-[#c8cee2]'}`} />
                <div className="flex flex-row items-center size-full">
                  <div 
                    className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full cursor-pointer"
                    onClick={() => setIsBoardsDropdownOpen(!isBoardsDropdownOpen)}
                  >
                    {/* Chips display */}
                    {selectedBoards.length > 0 ? (
                      <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-hidden relative">
                        {/* First board chip */}
                        <div className="bg-white flex-[1_0_0] h-[20px] min-h-px min-w-px relative rounded-[4px]">
                          <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex items-center px-[8px] py-[2px] relative size-full">
                              <div className="flex flex-[1_0_0] flex-col h-full justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#3c4c7c] text-[12px] text-ellipsis whitespace-nowrap">
                                <p className="leading-[16px] overflow-hidden">{selectedBoards[0]}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        {/* Additional boards count badge */}
                        {selectedBoards.length > 1 && (
                          <div className="bg-white content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                            <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                            <div className="flex flex-col h-full justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[12px] text-ellipsis whitespace-nowrap">
                              <p className="leading-[16px] overflow-hidden">+{selectedBoards.length - 1}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="flex-1 leading-[20px] not-italic text-[#6e7ca8] text-[14px]">
                        Select boards
                      </div>
                    )}
                    
                    {isBoardsDropdownOpen ? <IconsExpandLess /> : <IconsExpandMore />}
                  </div>
                </div>
              </div>

              {/* Board dropdown */}
              {isBoardsDropdownOpen && (
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
                              value={boardSearchQuery}
                              onChange={(e) => setBoardSearchQuery(e.target.value)}
                              className="flex-[1_0_0] bg-transparent leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap outline-none placeholder:text-[#6e7ca8]"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Board options */}
                    <div className="flex flex-col px-[12px] pb-[12px] gap-[4px] max-h-[180px] overflow-y-auto [scrollbar-width:thin] [scrollbar-color:#c8cee2_transparent] [&::-webkit-scrollbar]:w-[6px] [&::-webkit-scrollbar-thumb]:bg-[#c8cee2] [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-transparent">
                      <p className="font-semibold leading-[14px] not-italic text-[#2f3e6d] text-[12px] mb-[4px]">
                        Select Boards ({selectedBoards.length}/{availableBoards.length})
                      </p>
                      {filteredBoards.map((board) => (
                        <div 
                          key={board}
                          className="relative rounded-[8px] shrink-0 w-full hover:bg-[#f8f9fb] cursor-pointer"
                          onClick={() => handleBoardToggle(board)}
                        >
                          <div className="flex flex-row items-center size-full">
                            <div className="content-stretch flex gap-[8px] items-center px-[4px] py-[6px] relative w-full">
                              <IconsCheckBox checked={selectedBoards.includes(board)} />
                              <p className="flex-[1_0_0] leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
                                {board}
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

              <button 
                onClick={onClose}
                className="bg-[#2766da] flex-1 h-[40px] min-h-px min-w-px relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] cursor-pointer hover:bg-[#1e54b7]"
              >
                <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
                  <p className="leading-[16px] not-italic text-[14px] text-white">Submit</p>
                </div>
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}