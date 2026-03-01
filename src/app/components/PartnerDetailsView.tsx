import { useState } from 'react';
import svgPaths from "../../imports/svg-gq87p0ikdv";
import { CloseButton } from './CloseButton';
import { StatusChip } from './StatusChip';

interface PartnerDetailsViewProps {
  partner: {
    imgSrc: string;
    name: string;
    status: 'active' | 'inactive';
    email: string;
    phone: string;
  };
  onClose: () => void;
}

export function PartnerDetailsView({ partner, onClose }: PartnerDetailsViewProps) {
  const [activeTab, setActiveTab] = useState<'students' | 'moreDetails'>('moreDetails');

  // Student data (mock)
  const students = [
    { id: 1, name: 'Aleta H. Starcher', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop' },
    { id: 2, name: 'Robert J. Thompson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop' },
    { id: 3, name: 'Mai G. Sollom', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop' },
    { id: 4, name: 'James M. Wilson', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop' },
    { id: 5, name: 'Latricia W. Silletti', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop' },
    { id: 6, name: 'Michael K. Davis', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop' },
    { id: 7, name: 'Adrianne P. Tillis', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop' },
    { id: 8, name: 'Christopher L. Martinez', avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop' },
    { id: 9, name: 'Judi E. Ravert', avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=100&h=100&fit=crop' },
    { id: 10, name: 'Daniel R. Anderson', avatar: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop' },
    { id: 11, name: 'Elvira E. Aus', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop' },
    { id: 12, name: 'David S. Garcia', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop' },
    { id: 13, name: 'Vonnie G. Simeus', avatar: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&h=100&fit=crop' },
    { id: 14, name: 'Matthew P. Rodriguez', avatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop' },
    { id: 15, name: 'Rheba V. Damitio', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop' },
    { id: 16, name: 'Andrew T. Johnson', avatar: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop' },
    { id: 17, name: 'Estell P. Lolo', avatar: 'https://images.unsplash.com/photo-1581803118522-7b72a50f7e9f?w=100&h=100&fit=crop' },
    { id: 18, name: 'Joshua B. Miller', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop' },
    { id: 19, name: 'Sachiko I. Marcheterre', avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=100&h=100&fit=crop' },
    { id: 20, name: 'Ryan W. Brown', avatar: 'https://images.unsplash.com/photo-1507081323647-4d250478b919?w=100&h=100&fit=crop' },
    { id: 21, name: 'Patricia L. Moore', avatar: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=100&h=100&fit=crop' },
    { id: 22, name: 'Kevin D. Taylor', avatar: 'https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?w=100&h=100&fit=crop' },
    { id: 23, name: 'Jennifer M. White', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&h=100&fit=crop' },
    { id: 24, name: 'Brian C. Harris', avatar: 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=100&h=100&fit=crop' },
    { id: 25, name: 'Amanda K. Clark', avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop' },
  ];

  return (
    <div className="bg-white content-stretch flex flex-col gap-[16px] items-start p-[24px] relative rounded-[16px] w-full max-h-[calc(100vh-230px)] overflow-hidden">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[16px]" />
      
      {/* Scrollable Content Area */}
      <div className="content-stretch flex flex-col gap-[16px] items-start w-full overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pr-[2px]">
        {/* Header with Title and Close Button */}
        <div className="content-stretch flex gap-[8px] items-start relative rounded-[12px] shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="flex flex-col font-semibold leading-[0] min-h-[32px] not-italic relative shrink-0 text-[#041a5e] text-[20px] w-full">
                <p className="leading-[1.3]">{partner.name}</p>
              </div>
            </div>
          </div>
          <CloseButton onClick={onClose} />
        </div>

        {/* Partner Info Card */}
        <div className="bg-[#f8f9fb] content-stretch flex flex-col gap-[16px] items-start p-[16px] relative rounded-[16px] shrink-0 w-full">
          <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[16px]" />
          
          {/* Avatar + Name */}
          <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
            <div className="relative shrink-0 size-[52px]">
              <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[12px] size-[52px] top-0">
                <img alt={partner.name} className="block size-full object-cover" src={partner.imgSrc} />
              </div>
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <div className="flex flex-[1_0_0] flex-col font-semibold justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#2f3e6d] text-[14px]">
                  <p className="leading-[16px]">{partner.name}</p>
                </div>
                <StatusChip label={partner.status === 'active' ? 'Active' : 'Inactive'} />
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g><mask height="16" id="mask0_1_4577" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                    <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" /></mask>
                    <g mask="url(#mask0_1_4577)">
                      <path d={svgPaths.p1a898b00} fill="var(--fill-0, #6E7CA8)" id="mail_2" />
                    </g>
                  </g>
                </svg>
              </div>
              <p className="flex-[1_0_0] leading-[14px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">{partner.email}</p>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
              <div className="relative shrink-0 size-[16px]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                  <g><mask height="16" id="mask0_1_4555" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
                    <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" /></mask>
                    <g mask="url(#mask0_1_4555)">
                      <path d={svgPaths.p1e3ca700} fill="var(--fill-0, #6E7CA8)" id="call_2" />
                    </g>
                  </g>
                </svg>
              </div>
              <p className="flex-[1_0_0] leading-[14px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">{partner.phone}</p>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
          <button
            onClick={() => setActiveTab('moreDetails')}
            className={`content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px p-[8px] relative rounded-[8px] cursor-pointer ${
              activeTab === 'moreDetails' ? 'bg-[#2766da]' : 'bg-white'
            }`}
          >
            <div aria-hidden="true" className={`absolute border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] ${
              activeTab === 'moreDetails' ? 'border-[#2766da]' : 'border-[#c8cee2]'
            }`} />
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
              <p className={`leading-[16px] ${activeTab === 'moreDetails' ? 'text-white' : 'text-[#2f3e6d]'}`}>
                About
              </p>
            </div>
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`content-stretch flex flex-[1_0_0] items-center justify-center min-h-px min-w-px p-[8px] relative rounded-[8px] cursor-pointer ${
              activeTab === 'students' ? 'bg-[#2766da]' : 'bg-white'
            }`}
          >
            <div aria-hidden="true" className={`absolute border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px] ${
              activeTab === 'students' ? 'border-[#2766da]' : 'border-[#c8cee2]'
            }`} />
            <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[14px] whitespace-nowrap">
              <p className={`leading-[16px] ${activeTab === 'students' ? 'text-white' : 'text-[#2f3e6d]'}`}>
                Students
              </p>
            </div>
          </button>
        </div>

        {/* Divider below tabs */}
        <div className="bg-[#e3e6f0] h-px shrink-0 w-full" />

        {/* Tab Content */}
        {activeTab === 'moreDetails' && (
          <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
            {/* Partner Address */}
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                <p className="flex-[1_0_0] leading-[14px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">Partner Address</p>
              </div>
              <div className="content-stretch flex items-center relative shrink-0 w-full">
                <div className="flex-[1_0_0] leading-[20px] min-h-px min-w-px not-italic relative text-[#2f3e6d] text-[14px] whitespace-pre-wrap">
                  <p className="mb-0">123 Main Street</p>
                  <p className="mb-0">Cityville, State 56789</p>
                  <p>Country</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="bg-[#e3e6f0] h-px shrink-0 w-full" />

            {/* Principal Details */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <p className="font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">Principal Details</p>
              
              {/* Name */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] leading-[14px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">Name</p>
                </div>
                <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">Aleta H. Starcher</p>
                </div>
              </div>

              {/* Email address */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] leading-[14px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">Email address</p>
                </div>
                <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">aletaH.Starcher12@gmail.com</p>
                </div>
              </div>

              {/* Contact */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] leading-[14px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">Contact</p>
                </div>
                <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">(636) 296-7838</p>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="bg-[#e3e6f0] h-px shrink-0 w-full" />

            {/* Vice Principal Details */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <p className="font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">Vice Principal Details</p>
              
              {/* Name */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] leading-[14px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">Name</p>
                </div>
                <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">Aleta H. Starcher</p>
                </div>
              </div>

              {/* Email address */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] leading-[14px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">Email address</p>
                </div>
                <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">aletaH.Starcher12@gmail.com</p>
                </div>
              </div>

              {/* Contact */}
              <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
                <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] leading-[14px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">Contact</p>
                </div>
                <div className="content-stretch flex h-[12px] items-center relative shrink-0 w-full">
                  <p className="flex-[1_0_0] leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">(636) 296-7838</p>
                </div>
              </div>
            </div>

            {/* Spacer at bottom for scroll comfort */}
            <div className="bg-white h-[40px] shrink-0 w-full" />
          </div>
        )}

        {activeTab === 'students' && (
          <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
            {/* Student Count Badge */}
            <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
              <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
              <div className="flex flex-col justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
                <p className="leading-[16px]">{students.length} Students</p>
              </div>
            </div>

            {/* Students List */}
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              {students.map((student) => (
                <div
                  key={student.id}
                  className="bg-white content-stretch flex items-start relative shrink-0 w-full"
                >
                  {/* Avatar + Name */}
                  <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
                    <div className="relative shrink-0 size-[32px]">
                      <div className="absolute border border-[#e3e6f0] border-solid left-0 overflow-clip rounded-[53.333px] size-[32px] top-0">
                        <img alt={student.name} className="block size-full object-cover" src={student.avatar} />
                      </div>
                    </div>
                    <div className="flex flex-[1_0_0] flex-col justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
                      <p className="leading-[16px] overflow-hidden">{student.name}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}