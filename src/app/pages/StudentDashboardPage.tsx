import svgPaths from "../../imports/svg-pmfs343q75";
import imgEllipse1 from "figma:asset/aea56f3263ece92dd93d47abce807ee8df611744.png";
import imgMedal1 from "figma:asset/3981aa122c13817f9876eec475b034c562bcf91b.png";
import imgEllipse7 from "figma:asset/85a9ee6e1d64cdeb572d2af2134249064e4ce730.png";
import imgMedal11 from "figma:asset/83c3f80163648bc6aff14a5c5a9a50f76cca8bb8.png";
import imgEllipse8 from "figma:asset/bdd19c040b7e19364b8623e06b8c5550e60c3f77.png";
import imgMedal21 from "figma:asset/44327a911335a36ef5aa6787c23a899e773847d8.png";
import imgEllipse9 from "figma:asset/b2a732e782875a3bdf833ec70c944672d41008aa.png";
import imgUnsplash0HjWobhGhJs2 from "figma:asset/4fb1f9850130e69d652ab1618e13e68969e60d8f.png";
import imgUnsplash0HjWobhGhJs3 from "figma:asset/7e770874797467c1231a6e2c0407a4ed24aa9429.png";
import imgUnsplash0HjWobhGhJs4 from "figma:asset/f9b3c06508440585b4469b994d2f927d35c18a2c.png";
import imgUnsplash0HjWobhGhJs5 from "figma:asset/5974f7b6e8531748cde6121621fa76d653ce8677.png";
import imgUnsplash0HjWobhGhJs6 from "figma:asset/f6c3f136bcd647f8b0cfe8441465a26b617ae301.png";
import imgUnsplash0HjWobhGhJs7 from "figma:asset/031bc32e613200e7bcd453fc49d1e8fe8945b774.png";
import { imgUnsplash0HjWobhGhJs } from "../../imports/svg-8iuiz";
import { PageHeader } from "../components/PageHeader";
import { SharedNavBar } from "../components/SharedNavBar";
import { useNavigate } from "react-router";

function Logo() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Logo">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Logo">
          <path d={svgPaths.pae60a00} fill="var(--fill-0, #1850C5)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Nav({ label, isActive }: { label: string; isActive?: boolean }) {
  return (
    <div className={`content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0 ${isActive ? 'bg-[#f1f2f8]' : ''}`} data-name=".nav">
      <p className={`font-semibold leading-[14px] not-italic overflow-hidden relative shrink-0 text-[12px] text-ellipsis ${isActive ? 'text-[#3c4c7c]' : 'text-[#6e7ca8]'}`}>{label}</p>
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[4px] items-center left-[calc(8.33%+68px)] p-[8px] rounded-[12px] top-[32px]" data-name="Nav bar">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Logo />
      <Nav label="Event Info" isActive />
      <Nav label="Party" />
      <Nav label="Alliance" />
      <Nav label="Volunteers" />
      <Nav label="Notice" />
      <Nav label="Amendments" />
      <Nav label="Chat" />
    </div>
  );
}

function IconsEyeView() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / eye_view">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / eye_view">
          <mask height="16" id="mask0_62_5781" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5781)">
            <path d={svgPaths.p1e53f200} fill="var(--fill-0, #2F3E6D)" id="visibility" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsOpenInFull() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / open_in_full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / open_in_full">
          <mask height="16" id="mask0_62_5790" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5790)">
            <path d={svgPaths.p2d8a280} fill="var(--fill-0, #2F3E6D)" id="open_in_full" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsLocationOn() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / location_on">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / location_on">
          <mask height="16" id="mask0_62_5769" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5769)">
            <path d={svgPaths.p25f18bc0} fill="var(--fill-0, #6E7CA8)" id="location_on" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsGroup() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / group">
          <mask height="16" id="mask0_62_5773" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5773)">
            <path d={svgPaths.p26d0f0c0} fill="var(--fill-0, #6E7CA8)" id="group" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsForum() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / forum">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / forum">
          <mask height="16" id="mask0_62_5777" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5777)">
            <path d={svgPaths.p2b19000} fill="var(--fill-0, #6E7CA8)" id="forum" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsCalendar() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / calendar_month">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / calendar_month">
          <mask height="16" id="mask0_62_5765" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5765)">
            <path d={svgPaths.p1bca1d80} fill="var(--fill-0, #6E7CA8)" id="calendar_month" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconsCalendarWhite() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / calendar_month">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <path d={svgPaths.p1bca1d80} fill="#FFFFFF" id="calendar_month" />
      </svg>
    </div>
  );
}

function IconsSearch() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g>
          <mask height="16" id="mask_search" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" width="16" />
          </mask>
          <g mask="url(#mask_search)">
            <path d="M11.333 10h-.6l-.2-.2c.733-.8 1.2-1.866 1.2-3.066C11.733 4.4 9.933 2.6 7.6 2.6S3.467 4.4 3.467 6.733s1.8 4.134 4.133 4.134c1.2 0 2.267-.467 3.067-1.2l.2.2v.6l3.2 3.2.933-.933-3.667-3.734zm-3.733 0c-1.8 0-3.267-1.467-3.267-3.267S5.8 3.467 7.6 3.467s3.267 1.466 3.267 3.266-1.467 3.267-3.267 3.267z" fill="var(--fill-0, #6E7CA8)" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function SchoolIcon() {
  return (
    <svg className="block size-[40px]" fill="none" viewBox="0 0 40 40">
      <path 
        d="M20 4L4 12v6c0 10 4.5 19.5 16 22 11.5-2.5 16-12 16-22v-6L20 4zm0 4.5l12 6v5.5c0 8.5-3.5 16.5-12 19-8.5-2.5-12-10.5-12-19v-5.5l12-6zM20 14l-8 4.5v3c0 5.5 2.5 10.5 8 12.5 5.5-2 8-7 8-12.5v-3L20 14z" 
        fill="white"
      />
    </svg>
  );
}

function IconsArrowForward() {
  return (
    <div className="relative shrink-0 size-[20px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <mask height="20" id="mask_arrow" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
          <rect fill="#D9D9D9" height="20" width="20" />
        </mask>
        <g mask="url(#mask_arrow)">
          <path d="M10 16.25L8.9375 15.1875L13.3125 10.8125H3.75V9.1875H13.3125L8.9375 4.8125L10 3.75L16.25 10L10 16.25Z" fill="white" />
        </g>
      </svg>
    </div>
  );
}

function IconsCheckCircle() {
  return (
    <div className="relative shrink-0 size-[16px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <mask height="16" id="mask_check" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
          <rect fill="#D9D9D9" height="16" width="16" />
        </mask>
        <g mask="url(#mask_check)">
          <path d="M7.33333 10.6667L4.66667 8L3.73333 8.93333L7.33333 12.5333L14 5.86667L13.0667 4.93333L7.33333 10.6667Z" fill="white" />
        </g>
      </svg>
    </div>
  );
}

function MyRegisteredPSPCard({ psp }: { psp: { title: string; theme: string; nextSession: string; tasks: Array<{ name: string; dueDate: string }> } }) {
  const navigate = useNavigate();
  
  // Get today's date for comparison
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const isTaskCompleted = (dueDate: string) => {
    const taskDate = new Date(dueDate);
    taskDate.setHours(0, 0, 0, 0);
    return taskDate < today;
  };

  return (
    <div 
      onClick={() => navigate('/student/psp/dashboard')}
      className="bg-gradient-to-br from-[#2766da] to-[#1850c5] content-stretch flex flex-col gap-[16px] items-start p-[20px] relative rounded-[12px] shrink-0 w-full shadow-[0px_4px_12px_0px_rgba(39,102,218,0.2)] cursor-pointer transition-all hover:shadow-[0px_6px_16px_0px_rgba(39,102,218,0.3)] hover:scale-[1.01]"
    >
      {/* Ongoing Chip */}
      <div className="bg-white/20 content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0 w-fit backdrop-blur-sm">
        <div aria-hidden="true" className="absolute border-white/40 border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-white text-[12px] text-ellipsis">Ongoing</p>
      </div>

      {/* Main Content Section - Thumbnail + All Text */}
      <div className="content-stretch flex gap-[16px] items-stretch relative shrink-0 w-full">
        {/* Thumbnail */}
        <div className="relative rounded-[12px] shrink-0 w-[33%] overflow-hidden">
          <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[100%_100%]" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
            <img alt="" className="block max-w-none size-full object-cover" src={imgUnsplash0HjWobhGhJs7} />
          </div>
          <div aria-hidden="true" className="absolute border-white/20 border-[0.65px] border-solid inset-0 pointer-events-none rounded-[12px]" />
        </div>
        
        {/* All Text Content */}
        <div className="content-stretch flex flex-[1_0_0] flex-col gap-[6px] items-start min-h-px min-w-px relative justify-between">
          {/* Title and Theme */}
          <div className="flex flex-col gap-[6px] w-full">
            <p className="font-bold leading-[28px] not-italic relative shrink-0 text-white text-[20px] w-full">{psp.title.replace(/\s*School\s*/gi, '').trim()}</p>
            <p className="leading-[18px] not-italic relative shrink-0 text-white/90 text-[14px] w-full">{psp.theme}</p>
          </div>
          
          {/* Enter PSP CTA */}
          <div className="content-stretch flex gap-[6px] items-center justify-start relative shrink-0 w-full">
            <p className="leading-[14px] not-italic relative shrink-0 text-white/70 text-[12px]">Enter PSP</p>
            <div className="relative shrink-0 size-[16px]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                <mask height="20" id="mask_arrow" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                  <rect fill="#D9D9D9" height="20" width="20" />
                </mask>
                <g mask="url(#mask_arrow)">
                  <path d="M10 16.25L8.9375 15.1875L13.3125 10.8125H3.75V9.1875H13.3125L8.9375 4.8125L10 3.75L16.25 10L10 16.25Z" fill="rgba(255, 255, 255, 0.7)" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AvailablePSPsCard() {
  const psps = [
    {
      title: "Let's Legislate at NHVPS",
      theme: "Nuclear Waste Management",
      registered: 45,
      status: "Upcoming",
      registrationStatus: "Open",
      imgSrc: imgUnsplash0HjWobhGhJs2
    },
    {
      title: "Let's Legislate at MPS",
      theme: "Regulating Social Media Platforms",
      registered: 67,
      status: "Upcoming",
      registrationStatus: "Open",
      imgSrc: imgUnsplash0HjWobhGhJs3
    },
    {
      title: "Let's Legislate at DPS",
      theme: "India's Street Dog Dilemma",
      registered: 23,
      status: "Ongoing",
      registrationStatus: "Open",
      imgSrc: imgUnsplash0HjWobhGhJs4
    },
    {
      title: "Let's Legislate at KVS",
      theme: "Climate Change Action Plan",
      registered: 89,
      status: "Ongoing",
      registrationStatus: "Filling fast",
      imgSrc: imgUnsplash0HjWobhGhJs5
    },
    {
      title: "Let's Legislate at GHS",
      theme: "Digital Privacy and Data Security",
      registered: 34,
      status: "Ongoing",
      registrationStatus: "Open",
      imgSrc: imgUnsplash0HjWobhGhJs6
    },
    {
      title: "Let's Legislate at RPS",
      theme: "Universal Healthcare System",
      registered: 56,
      status: "Ongoing",
      registrationStatus: "Filling fast",
      imgSrc: imgUnsplash0HjWobhGhJs7
    }
  ];

  // Sort PSPs: Upcoming first, then Ongoing
  const sortedPSPs = [...psps].sort((a, b) => {
    if (a.status === "Upcoming" && b.status === "Ongoing") return -1;
    if (a.status === "Ongoing" && b.status === "Upcoming") return 1;
    return 0;
  });

  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start pb-[20px] pt-[16px] px-[16px] relative rounded-[12px] shrink-0" data-name="Main card">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      
      {/* Header */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <p className="flex-[1_0_0] font-bold leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[20px] text-ellipsis whitespace-nowrap">Join a PSP</p>
        <IconsOpenInFull />
      </div>

      {/* PSP List - Scrollable */}
      <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
        {sortedPSPs.map((psp, index) => (
          <div key={index} className="bg-[#f8f9fb] content-stretch flex gap-[12px] items-start p-[12px] relative rounded-[8px] shrink-0 w-full hover:bg-[#f1f2f8] transition-colors cursor-pointer">
            {/* Thumbnail */}
            <div className="relative rounded-[8px] shrink-0 size-[56px] overflow-hidden">
              <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[100%_100%]" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
                <img alt="" className="block max-w-none size-full object-cover" src={psp.imgSrc} />
              </div>
              <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.65px] border-solid inset-0 pointer-events-none rounded-[8px]" />
            </div>
            
            {/* Details */}
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative">
              <p className="font-semibold leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">{psp.title}</p>
              <p className="leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[12px] text-ellipsis w-full">{psp.theme}</p>
              
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full mt-[4px]">
                <div className="flex gap-[4px] items-center">
                  <IconsGroup />
                  <p className="leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">{psp.registered} registered</p>
                </div>
                
                {/* Show "Upcoming" tag for PSPs student has registered for but haven't started */}
                {psp.status === 'Upcoming' ? (
                  <div className="bg-[#e8f4ff] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0">
                    <div aria-hidden="true" className="absolute border-[#2766da] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
                    <p className="leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#2766da] text-[12px] text-ellipsis">Upcoming</p>
                  </div>
                ) : (
                  /* Show Registration Status only for PSPs student hasn't registered for */
                  <div className={`${
                    psp.registrationStatus === 'Open' 
                      ? 'bg-[#e8ffeb]' 
                      : 'bg-[#fff4e6]'
                  } content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0`}>
                    <div aria-hidden="true" className={`absolute ${
                      psp.registrationStatus === 'Open'
                        ? 'border-[#42a22a]'
                        : 'border-[#ff9800]'
                    } border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]`} />
                    <p className={`leading-[14px] not-italic overflow-hidden relative shrink-0 ${
                      psp.registrationStatus === 'Open'
                        ? 'text-[#42a22a]'
                        : 'text-[#ff9800]'
                    } text-[12px] text-ellipsis`}>{psp.registrationStatus}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AnnouncementCard() {
  const announcements = [
    {
      title: "Students Empowered: A Platform for Civic Engagement",
      description: "A transformative force in student civic engagement, this platform provides a dynamic space for young minds to participate in the democratic process. From debating pressing social issues to proposing policy solutions, students harness it."
    },
    {
      title: "Students Empowered: A Platform for Civic Engagement",
      description: "A transformative force in student civic engagement, this platform provides a dynamic space for young minds to participate in the democratic process. From debating pressing social issues to proposing policy solutions, students harness it."
    }
  ];

  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start pb-[20px] pt-[16px] px-[16px] relative rounded-[12px] w-full" data-name="Main card">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      
      {/* Header */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <p className="flex-[1_0_0] font-bold leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[20px] text-ellipsis whitespace-nowrap">Updates</p>
        <IconsOpenInFull />
      </div>

      {/* Announcements List */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        {announcements.map((announcement, index) => (
          <div key={index} className="w-full">
            <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
              <p className="font-semibold leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">{announcement.title}</p>
              <p className="leading-[20px] not-italic relative shrink-0 text-[#6e7ca8] text-[14px] w-full">{announcement.description}</p>
            </div>
            {/* Divider - show for all except last item */}
            {index < announcements.length - 1 && (
              <div className="w-full h-[1px] bg-[#e3e6f0] mt-[12px]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

function LeaderboardCard() {
  const leaderboard = [
    {
      name: "Jason Surya",
      school: "SBOA School & Junior college",
      image: imgEllipse1,
      medal: imgMedal1,
      rank: 1
    },
    {
      name: "Joseph vijay",
      school: "JD London bridge higher secondary school",
      image: imgEllipse7,
      medal: imgMedal11,
      rank: 2
    },
    {
      name: "Michael cena",
      school: "SBOA School & Junior college",
      image: imgEllipse8,
      medal: imgMedal21,
      rank: 3
    },
    {
      name: "Kane",
      school: "SBOA School & Junior college",
      image: imgEllipse9,
      medal: null,
      rank: 4
    }
  ];

  return (
    <div className="bg-white content-stretch flex flex-col gap-[12px] items-start pb-[20px] pt-[16px] px-[16px] relative rounded-[12px] w-full" data-name="Main card">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      
      {/* Header */}
      <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
        <p className="flex-[1_0_0] font-bold leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[20px] text-ellipsis whitespace-nowrap">Leaderboard</p>
        <IconsOpenInFull />
      </div>

      {/* Leaderboard List */}
      <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
        {leaderboard.map((player, index) => (
          <div key={index} className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
            <div className="relative shrink-0 size-[48px]">
              <img alt="" className="block max-w-none size-full rounded-full" height="48" src={player.image} width="48" />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative">
              <div className="flex flex-col font-semibold justify-center relative shrink-0 text-[#2f3e6d] text-[16px] w-full">
                <p className="leading-[normal]">{player.name}</p>
              </div>
              <div className="flex flex-col justify-center relative shrink-0 text-[#6e7ca8] text-[12px] w-full">
                <p className="leading-[normal]">{player.school}</p>
              </div>
            </div>
            {player.medal && (
              <div className="relative shrink-0 size-[40px]">
                <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={player.medal} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function StudentDashboardPage() {
  // Simulate user registration - set to null if user hasn't registered for any PSP
  const registeredPSP = {
    title: "Let's Legislate at SBOA School",
    theme: "Education Reform & Digital Literacy",
    nextSession: "26 Feb, 2024 at 3:00 PM",
    tasks: [
      { name: "Submit Starred Questions", dueDate: "2024-02-20" },
      { name: "Submit Answers to Questions", dueDate: "2024-02-22" },
      { name: "Submit Notices", dueDate: "2024-02-23" },
      { name: "Submit the Bill", dueDate: "2026-02-28" },
      { name: "Submit Amendments", dueDate: "2026-03-02" }
    ]
  };

  return (
    <div className="bg-[#f8f9fb] relative size-full">
      {/* Navbar - positioned absolutely at the top */}
      <div className="absolute left-[calc(16.67%+56px)] top-[32px]">
        <SharedNavBar activePage="home" />
      </div>

      {/* Page Header - positioned absolutely at the top-right */}
      <PageHeader />
      
      {/* Main Content - Scrollable container below navbar */}
      <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[calc(16.67%+56px)] right-[calc(16.67%+56px)] top-[100px] max-h-[calc(100vh-132px)] overflow-y-auto pb-[32px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {/* Two Column Layout - Left and Right columns flow independently */}
        <div className="flex gap-[24px] w-full items-start">
          {/* Left Column */}
          <div className="flex flex-col gap-[18px] flex-1">
            {/* Show registered PSP card if user has registered */}
            {registeredPSP && <MyRegisteredPSPCard psp={registeredPSP} />}
            <AvailablePSPsCard />
          </div>
          
          {/* Right Column */}
          <div className="flex flex-col gap-[18px] flex-1">
            <AnnouncementCard />
            <LeaderboardCard />
          </div>
        </div>
      </div>
    </div>
  );
}