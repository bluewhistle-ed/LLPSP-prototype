import { useState, useRef, useEffect } from 'react';
import svgPaths from "../../imports/svg-dv2wdhz28y";
import searchSvgPaths from "../../imports/svg-hkh4t53hh4";
import { CloseButton } from './CloseButton';
import { useGovernment } from '../context/GovernmentContext';
import type { Institution } from '../types';

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

function IconsAddCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_add_circle" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_add_circle)">
            <path d="M7.33398 12.667V8.66699H3.33398V7.33366H7.33398V3.33366H8.66732V7.33366H12.6673V8.66699H8.66732V12.667H7.33398Z" fill="var(--fill-0, #2766DA)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsDelete() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / delete">
          <mask height="16" id="mask0_delete" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_delete)">
            <path d="M4.66732 13.3337C4.30065 13.3337 3.98676 13.203 3.72565 12.9419C3.46454 12.6808 3.33398 12.3669 3.33398 12.0003V4.00033H2.66732V2.66699H6.00065V2.00033H10.0007V2.66699H13.334V4.00033H12.6673V12.0003C12.6673 12.3669 12.5368 12.6808 12.2757 12.9419C12.0145 13.203 11.7007 13.3337 11.334 13.3337H4.66732ZM11.334 4.00033H4.66732V12.0003H11.334V4.00033ZM6.00065 10.667H7.33398V5.33366H6.00065V10.667ZM8.66732 10.667H10.0007V5.33366H8.66732V10.667Z" fill="var(--fill-0, #DC3545)" />
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

interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  designation: string;
  seatType: 'View' | 'All Access';
}

export function NewPartnerForm({ onClose }: { onClose: () => void }) {
  const { institutions } = useGovernment();
  const [currentStep, setCurrentStep] = useState(1);
  
  // Step 1: Institution Selection
  const [selectedInstitution, setSelectedInstitution] = useState<Institution | null>(null);
  const [institutionSearchQuery, setInstitutionSearchQuery] = useState('');
  const [isInstitutionDropdownOpen, setIsInstitutionDropdownOpen] = useState(false);
  const institutionDropdownRef = useRef<HTMLDivElement>(null);
  
  // Step 2: Partner Details
  const [nickname, setNickname] = useState('');
  const [partnershipTier, setPartnershipTier] = useState('');
  const [address, setAddress] = useState('');
  const [selectedBoards, setSelectedBoards] = useState<string[]>([]);
  const [isBoardsDropdownOpen, setIsBoardsDropdownOpen] = useState(false);
  const [boardSearchQuery, setBoardSearchQuery] = useState('');
  const [isPartnershipTierDropdownOpen, setIsPartnershipTierDropdownOpen] = useState(false);
  const boardsDropdownRef = useRef<HTMLDivElement>(null);
  const partnershipTierDropdownRef = useRef<HTMLDivElement>(null);
  
  // Step 3: Partner Admin Contacts
  const [contacts, setContacts] = useState<Contact[]>([
    { id: '1', name: '', email: '', phone: '', designation: '', seatType: 'View' }
  ]);
  const [openDesignationDropdown, setOpenDesignationDropdown] = useState<string | null>(null);
  const [openSeatTypeDropdown, setOpenSeatTypeDropdown] = useState<string | null>(null);

  const availableBoards = ['CBSE', 'IB', 'IGCSE'];
  const partnershipTiers = ['Foundation', 'Growth', 'Expert', 'Ace'];
  const designations = ['Management', 'Principal', 'Vice Principal', 'Head of Department', 'Faculty'];
  const seatTypes: Array<'View' | 'All Access'> = ['View', 'All Access'];

  const filteredInstitutions = institutions.filter(institution =>
    institution.name.toLowerCase().includes(institutionSearchQuery.toLowerCase())
  );

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

  const handleAddContact = () => {
    const newContact: Contact = {
      id: Date.now().toString(),
      name: '',
      email: '',
      phone: '',
      designation: '',
      seatType: 'View'
    };
    setContacts([...contacts, newContact]);
  };

  const handleRemoveContact = (id: string) => {
    if (contacts.length > 1) {
      setContacts(contacts.filter(c => c.id !== id));
    }
  };

  const handleContactChange = (id: string, field: keyof Contact, value: string) => {
    setContacts(contacts.map(c => 
      c.id === id ? { ...c, [field]: value } : c
    ));
  };

  const hasAllAccessContact = contacts.some(c => c.seatType === 'All Access');

  // Click outside handlers
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (institutionDropdownRef.current && !institutionDropdownRef.current.contains(event.target as Node)) {
        setIsInstitutionDropdownOpen(false);
      }
      if (boardsDropdownRef.current && !boardsDropdownRef.current.contains(event.target as Node)) {
        setIsBoardsDropdownOpen(false);
      }
      if (partnershipTierDropdownRef.current && !partnershipTierDropdownRef.current.contains(event.target as Node)) {
        setIsPartnershipTierDropdownOpen(false);
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

  const handleSubmit = () => {
    // TODO: Implement partner creation logic
    console.log('Creating partner:', {
      institution: selectedInstitution,
      nickname,
      partnershipTier,
      address,
      boards: selectedBoards,
      contacts
    });
    onClose();
  };

  const isSchool = selectedInstitution?.type.toLowerCase() === 'school';

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
          <CloseButton onClick={onClose} />
        </div>

        {/* Step Indicator */}
        <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
          <StepperBlock number="1" label="Select Institution" isActive={currentStep === 1} />
          <StepperBlock number="2" label="Partner Details" isActive={currentStep === 2} />
          <StepperBlock number="3" label="Admin Contacts" isActive={currentStep === 3} />
        </div>

        {/* Step 1: Institution Selection */}
        {currentStep === 1 && (
          <>
            <div 
              ref={institutionDropdownRef}
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
            >
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Select Institution</p>
              
              {/* Institution dropdown */}
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${isInstitutionDropdownOpen ? 'border-[#1850c5]' : 'border-[#c8cee2]'}`} />
                <div className="flex flex-row items-center size-full">
                  <div 
                    className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full cursor-pointer"
                    onClick={() => setIsInstitutionDropdownOpen(!isInstitutionDropdownOpen)}
                  >
                    <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px]">
                      <p className={`leading-[20px] ${selectedInstitution ? 'text-[#2f3e6d]' : 'text-[#6e7ca8]'}`}>
                        {selectedInstitution ? selectedInstitution.name : 'Search and select institution'}
                      </p>
                    </div>
                    {isInstitutionDropdownOpen ? <IconsExpandLess /> : <IconsExpandMore />}
                  </div>
                </div>
              </div>

              {/* Dropdown menu */}
              {isInstitutionDropdownOpen && (
                <div className="bg-white border border-[#e3e6f0] border-solid relative rounded-[8px] shrink-0 w-full max-h-[240px] overflow-hidden flex flex-col">
                  {/* Search field */}
                  <div className="p-[8px] border-b border-[#e3e6f0]">
                    <div className="bg-[#f8f9fb] relative rounded-[6px] w-full">
                      <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
                      <div className="flex flex-row items-center size-full gap-[4px] px-[8px] py-[6px]">
                        <IconsSearch />
                        <input
                          type="text"
                          value={institutionSearchQuery}
                          onChange={(e) => setInstitutionSearchQuery(e.target.value)}
                          placeholder="Search institutions..."
                          className="bg-transparent w-full leading-[16px] not-italic text-[#2f3e6d] text-[12px] outline-none placeholder:text-[#6e7ca8]"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Institution list */}
                  <div className="overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                    {filteredInstitutions.length > 0 ? (
                      filteredInstitutions.map((institution) => (
                        <div
                          key={institution.id}
                          onClick={() => {
                            setSelectedInstitution(institution);
                            setIsInstitutionDropdownOpen(false);
                            setInstitutionSearchQuery('');
                          }}
                          className="px-[12px] py-[8px] hover:bg-[#f8f9fb] cursor-pointer flex flex-col gap-[2px]"
                        >
                          <p className="leading-[16px] not-italic text-[#2f3e6d] text-[14px]">{institution.name}</p>
                          <p className="leading-[14px] not-italic text-[#6e7ca8] text-[12px]">{institution.type}</p>
                        </div>
                      ))
                    ) : (
                      <div className="px-[12px] py-[16px] text-center">
                        <p className="leading-[16px] not-italic text-[#6e7ca8] text-[14px]">No institutions found</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* Selected Institution Confirmation */}
            {selectedInstitution && (
              <div className="bg-[#e7f2fe] content-stretch flex flex-col gap-[8px] p-[12px] relative rounded-[8px] shrink-0 w-full">
                <p className="leading-[14px] not-italic text-[#1850c5] text-[12px] font-semibold">Selected Institution</p>
                <p className="leading-[16px] not-italic text-[#2f3e6d] text-[14px] font-semibold">{selectedInstitution.name}</p>
                <p className="leading-[14px] not-italic text-[#6e7ca8] text-[12px]">Type: {selectedInstitution.type}</p>
              </div>
            )}
          </>
        )}

        {/* Step 2: Partner Details */}
        {currentStep === 2 && (
          <>
            {/* Nickname */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Nickname</p>
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="flex flex-row items-center size-full">
                  <input
                    type="text"
                    value={nickname}
                    onChange={(e) => setNickname(e.target.value)}
                    placeholder="e.g., DPS"
                    className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                  />
                </div>
              </div>
            </div>

            {/* Partnership Tier */}
            <div 
              ref={partnershipTierDropdownRef}
              className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
            >
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Partnership Tier</p>
              
              <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${isPartnershipTierDropdownOpen ? 'border-[#1850c5]' : 'border-[#c8cee2]'}`} />
                <div className="flex flex-row items-center size-full">
                  <div 
                    className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full cursor-pointer"
                    onClick={() => setIsPartnershipTierDropdownOpen(!isPartnershipTierDropdownOpen)}
                  >
                    <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px]">
                      <p className={`leading-[20px] ${partnershipTier ? 'text-[#2f3e6d]' : 'text-[#6e7ca8]'}`}>
                        {partnershipTier || 'Select tier'}
                      </p>
                    </div>
                    {isPartnershipTierDropdownOpen ? <IconsExpandLess /> : <IconsExpandMore />}
                  </div>
                </div>
              </div>

              {isPartnershipTierDropdownOpen && (
                <div className="bg-white border border-[#e3e6f0] border-solid relative rounded-[8px] shrink-0 w-full overflow-hidden">
                  {partnershipTiers.map((tier) => (
                    <div
                      key={tier}
                      onClick={() => {
                        setPartnershipTier(tier);
                        setIsPartnershipTierDropdownOpen(false);
                      }}
                      className="px-[12px] py-[8px] hover:bg-[#f8f9fb] cursor-pointer"
                    >
                      <p className="leading-[16px] not-italic text-[#2f3e6d] text-[14px]">{tier}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Address */}
            <div className="content-stretch flex flex-col gap-[8px] h-[100px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Address</p>
              <div className="bg-[#f8f9fb] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px] w-full">
                <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                <div className="content-stretch flex gap-[4px] items-start p-[12px] relative size-full">
                  <textarea
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Enter address"
                    className="bg-transparent w-full h-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] outline-none resize-none placeholder:text-[#6e7ca8]"
                  />
                </div>
              </div>
            </div>

            {/* Logo Upload */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Partner Logo <span className="text-[#6e7ca8]">(Optional)</span></p>
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

            {/* Boards (only visible for Schools) */}
            {isSchool && (
              <div 
                ref={boardsDropdownRef}
                className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full"
              >
                <p className="leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Boards</p>
                
                <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
                  <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${isBoardsDropdownOpen ? 'border-[#1850c5]' : 'border-[#c8cee2]'}`} />
                  <div className="flex flex-row items-center size-full">
                    <div 
                      className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full cursor-pointer"
                      onClick={() => setIsBoardsDropdownOpen(!isBoardsDropdownOpen)}
                    >
                      {selectedBoards.length > 0 ? (
                        <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-start min-h-px min-w-px overflow-hidden relative">
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
                          
                          {selectedBoards.length > 1 && (
                            <div className="bg-white content-stretch flex h-[20px] items-center px-[8px] py-[2px] relative rounded-[4px] shrink-0">
                              <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                              <div className="flex flex-col justify-center leading-[0] not-italic relative text-[#3c4c7c] text-[12px] z-[1]">
                                <p className="leading-[16px]">+{selectedBoards.length - 1}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px]">
                          <p className="leading-[20px] text-[#6e7ca8]">Select boards</p>
                        </div>
                      )}
                      {isBoardsDropdownOpen ? <IconsExpandLess /> : <IconsExpandMore />}
                    </div>
                  </div>
                </div>

                {isBoardsDropdownOpen && (
                  <div className="bg-white border border-[#e3e6f0] border-solid relative rounded-[8px] shrink-0 w-full max-h-[180px] overflow-hidden flex flex-col">
                    <div className="p-[8px] border-b border-[#e3e6f0]">
                      <div className="bg-[#f8f9fb] relative rounded-[6px] w-full">
                        <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
                        <div className="flex flex-row items-center size-full gap-[4px] px-[8px] py-[6px]">
                          <IconsSearch />
                          <input
                            type="text"
                            value={boardSearchQuery}
                            onChange={(e) => setBoardSearchQuery(e.target.value)}
                            placeholder="Search boards..."
                            className="bg-transparent w-full leading-[16px] not-italic text-[#2f3e6d] text-[12px] outline-none placeholder:text-[#6e7ca8]"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                      {filteredBoards.map((board) => (
                        <div
                          key={board}
                          onClick={() => handleBoardToggle(board)}
                          className="px-[12px] py-[8px] hover:bg-[#f8f9fb] cursor-pointer flex items-center gap-[8px]"
                        >
                          <IconsCheckBox checked={selectedBoards.includes(board)} />
                          <p className="leading-[16px] not-italic text-[#2f3e6d] text-[14px]">{board}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </>
        )}

        {/* Step 3: Partner Admin Contacts */}
        {currentStep === 3 && (
          <>
            <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex items-center justify-between w-full">
                <p className="leading-[16px] not-italic text-[#2f3e6d] text-[14px] font-semibold">Partner Admin Contacts</p>
                {!hasAllAccessContact && (
                  <p className="leading-[14px] not-italic text-[#dc3545] text-[12px]">At least one "All Access" required</p>
                )}
              </div>

              {contacts.map((contact, index) => (
                <div key={contact.id} className="content-stretch flex flex-col gap-[12px] p-[16px] relative w-full bg-[#f8f9fb] rounded-[8px]">
                  <div className="content-stretch flex items-center justify-between w-full">
                    <p className="leading-[14px] not-italic text-[#3c4c7c] text-[12px] font-semibold">Contact {index + 1}</p>
                    {contacts.length > 1 && (
                      <button
                        onClick={() => handleRemoveContact(contact.id)}
                        className="hover:bg-[#fee] p-[4px] rounded-[4px]"
                      >
                        <IconsDelete />
                      </button>
                    )}
                  </div>

                  {/* Name */}
                  <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="flex flex-row items-center size-full">
                      <input
                        type="text"
                        value={contact.name}
                        onChange={(e) => handleContactChange(contact.id, 'name', e.target.value)}
                        placeholder="Name"
                        className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="flex flex-row items-center size-full">
                      <input
                        type="email"
                        value={contact.email}
                        onChange={(e) => handleContactChange(contact.id, 'email', e.target.value)}
                        placeholder="Email"
                        className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                    <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
                    <div className="flex flex-row items-center size-full">
                      <input
                        type="text"
                        value={contact.phone}
                        onChange={(e) => handleContactChange(contact.id, 'phone', e.target.value)}
                        placeholder="Phone"
                        className="bg-transparent w-full leading-[20px] not-italic text-[#6e7ca8] text-[14px] px-[12px] py-[8px] outline-none placeholder:text-[#6e7ca8]"
                      />
                    </div>
                  </div>

                  {/* Designation Dropdown */}
                  <div className="relative">
                    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${openDesignationDropdown === contact.id ? 'border-[#1850c5]' : 'border-[#c8cee2]'}`} />
                      <div 
                        className="flex flex-row items-center size-full cursor-pointer px-[12px] py-[8px] gap-[8px]"
                        onClick={() => setOpenDesignationDropdown(openDesignationDropdown === contact.id ? null : contact.id)}
                      >
                        <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px]">
                          <p className={`leading-[20px] ${contact.designation ? 'text-[#2f3e6d]' : 'text-[#6e7ca8]'}`}>
                            {contact.designation || 'Designation'}
                          </p>
                        </div>
                        {openDesignationDropdown === contact.id ? <IconsExpandLess /> : <IconsExpandMore />}
                      </div>
                    </div>

                    {openDesignationDropdown === contact.id && (
                      <div className="absolute z-10 bg-white border border-[#e3e6f0] border-solid rounded-[8px] w-full mt-[4px] overflow-hidden">
                        {designations.map((designation) => (
                          <div
                            key={designation}
                            onClick={() => {
                              handleContactChange(contact.id, 'designation', designation);
                              setOpenDesignationDropdown(null);
                            }}
                            className="px-[12px] py-[8px] hover:bg-[#f8f9fb] cursor-pointer"
                          >
                            <p className="leading-[16px] not-italic text-[#2f3e6d] text-[14px]">{designation}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Seat Type Dropdown */}
                  <div className="relative">
                    <div className="bg-white relative rounded-[8px] shrink-0 w-full">
                      <div aria-hidden="true" className={`absolute border border-solid inset-0 pointer-events-none rounded-[8px] ${openSeatTypeDropdown === contact.id ? 'border-[#1850c5]' : 'border-[#c8cee2]'}`} />
                      <div 
                        className="flex flex-row items-center size-full cursor-pointer px-[12px] py-[8px] gap-[8px]"
                        onClick={() => setOpenSeatTypeDropdown(openSeatTypeDropdown === contact.id ? null : contact.id)}
                      >
                        <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic relative text-[14px]">
                          <p className={`leading-[20px] ${contact.seatType === 'All Access' ? 'text-[#42a22a]' : 'text-[#2f3e6d]'}`}>
                            {contact.seatType}
                          </p>
                        </div>
                        {openSeatTypeDropdown === contact.id ? <IconsExpandLess /> : <IconsExpandMore />}
                      </div>
                    </div>

                    {openSeatTypeDropdown === contact.id && (
                      <div className="absolute z-10 bg-white border border-[#e3e6f0] border-solid rounded-[8px] w-full mt-[4px] overflow-hidden">
                        {seatTypes.map((seatType) => (
                          <div
                            key={seatType}
                            onClick={() => {
                              handleContactChange(contact.id, 'seatType', seatType);
                              setOpenSeatTypeDropdown(null);
                            }}
                            className="px-[12px] py-[8px] hover:bg-[#f8f9fb] cursor-pointer"
                          >
                            <p className={`leading-[16px] not-italic text-[14px] ${seatType === 'All Access' ? 'text-[#42a22a]' : 'text-[#2f3e6d]'}`}>
                              {seatType}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Add Contact Button */}
              <button
                onClick={handleAddContact}
                className="content-stretch flex gap-[8px] items-center p-[12px] relative rounded-[8px] shrink-0 w-full hover:bg-[#f8f9fb] border border-[#2766da] border-dashed"
              >
                <IconsAddCircle />
                <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2766da] text-[14px]">
                  <p className="leading-[16px]">Add Contact</p>
                </div>
              </button>
            </div>
          </>
        )}
      </div>

      {/* Navigation Buttons - Fixed at bottom */}
      <div className="content-stretch flex gap-[8px] items-center justify-between relative shrink-0 w-full">
        {currentStep > 1 ? (
          <button 
            onClick={handlePrev}
            className="content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[10px] relative rounded-[8px] shrink-0 hover:bg-[#f8f9fb]"
          >
            <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            <IconsArrowLeftIosNew />
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] whitespace-nowrap z-[1]">
              <p className="leading-[16px]">Previous</p>
            </div>
          </button>
        ) : (
          <div />
        )}

        {currentStep < 3 ? (
          <button 
            onClick={handleNext}
            disabled={currentStep === 1 && !selectedInstitution}
            className="bg-[#2766da] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[10px] relative rounded-[8px] shrink-0 hover:bg-[#1850c5] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-white text-[14px] whitespace-nowrap">
              <p className="leading-[16px]">Next</p>
            </div>
            <IconsArrowForward />
          </button>
        ) : (
          <button 
            onClick={handleSubmit}
            disabled={!hasAllAccessContact}
            className="bg-[#2766da] content-stretch flex gap-[4px] items-center justify-center px-[12px] py-[10px] relative rounded-[8px] shrink-0 hover:bg-[#1850c5] disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-white text-[14px] whitespace-nowrap">
              <p className="leading-[16px]">Create Partner</p>
            </div>
          </button>
        )}
      </div>
    </div>
  );
}
