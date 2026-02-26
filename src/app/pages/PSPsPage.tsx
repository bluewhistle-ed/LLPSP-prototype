import { SharedNavBar } from '../components/SharedNavBar';
import { useState } from 'react';
import { SearchField } from '../components/SearchField';
import { PrimaryActionButton } from '../components/PrimaryActionButton';
import { NewEventForm } from '../components/NewEventForm';
import { PageHeader } from '../components/PageHeader';
import { motion, AnimatePresence } from 'motion/react';
import svgPaths from "../../imports/svg-ukbgtczgk2";
import imgUnsplash0HjWobhGhJs1 from "figma:asset/b7fe779393bf8259a96300f5144b7ce1f0534778.png";
import imgUnsplash0HjWobhGhJs2 from "figma:asset/69382318a0694404f6a3f6a92f2291be913d7046.png";
import imgUnsplash0HjWobhGhJs3 from "figma:asset/f6a473494065a536f138a02e498e3320e8b85a52.png";
import imgUnsplash0HjWobhGhJs4 from "figma:asset/c9a187ca9bf3abbde6af0fd00453f89de72fb182.png";
import imgUnsplash0HjWobhGhJs5 from "figma:asset/2fb881dcfd103b6fa4f71c0a74c7f37af645d388.png";
import { imgUnsplash0HjWobhGhJs } from "../../imports/svg-wltuo";

function IconsAddCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_1_993" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_1_993)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, white)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#2766da] content-stretch flex gap-[4px] h-[44px] items-center justify-center p-[12px] relative rounded-[8px] shrink-0" data-name="Buttons">
      <IconsAddCircle />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[16px]">New PSP</p>
      </div>
    </div>
  );
}

function ButtonGroup() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-[281px]" data-name="Button group">
      <Buttons1 />
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Action">
      <SearchField placeholder="Search Events" />
      <PrimaryActionButton label="New PSP" />
    </div>
  );
}

function ChipAtom() {
  return (
    <div className="bg-[#2766da] content-stretch flex items-center px-[16px] py-[8px] relative rounded-[8px] shadow-[0px_2px_4px_0px_rgba(0,0,0,0.1)] shrink-0" data-name="Chip atom">
      <p className="font-medium leading-[14px] not-italic relative shrink-0 text-[12px] text-center text-white">Ongoing</p>
    </div>
  );
}

function ChipAtom1() {
  return (
    <div className="bg-[#f1f2f8] content-stretch flex items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Chip atom">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-medium leading-[14px] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] text-center">Completed</p>
    </div>
  );
}

function ChipAtom2() {
  return (
    <div className="bg-[#f1f2f8] content-stretch flex items-center px-[16px] py-[8px] relative rounded-[8px] shrink-0" data-name="Chip atom">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-medium leading-[14px] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] text-center">Draft</p>
    </div>
  );
}

function Chip() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0" data-name="Chip">
      <ChipAtom />
      <ChipAtom1 />
      <ChipAtom2 />
    </div>
  );
}

// Event Card Components
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

function Image({ imgSrc }: { imgSrc: string }) {
  return (
    <div className="absolute contents left-0 top-0" data-name="Image">
      <div className="absolute bg-[#e3e6f0] content-center flex items-center justify-center left-0 rounded-[12px] size-[80px] top-0">
        <SchoolIcon />
      </div>
    </div>
  );
}

function Frame8({ imgSrc }: { imgSrc: string }) {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[80px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Image imgSrc={imgSrc} />
      </div>
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function IconsEdit() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / edit">
          <mask height="16" id="mask0_1_2974" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_2974)">
            <path d={svgPaths.p20e10000} fill="var(--fill-0, #2F3E6D)" id="edit" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsEdit />
    </div>
  );
}

function IconsDelete() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / delete">
          <mask height="16" id="mask0_1_2960" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_2960)">
            <path d={svgPaths.p29a6c900} fill="var(--fill-0, #2F3E6D)" id="delete" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsDelete />
    </div>
  );
}

function Frame5({ title }: { title: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center min-h-[32px] relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[16px]">
        <p className="leading-[20px]">{title}</p>
      </div>
      <Buttons3 />
    </div>
  );
}

function Distance() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="distance">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="distance">
          <mask height="16" id="mask0_1_2952" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_2952)">
            <path d={svgPaths.p3d7d4f00} fill="var(--fill-0, #6E7CA8)" id="distance_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconText({ location }: { location: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="icon + Text">
      <Distance />
      <p className="leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">{location}</p>
    </div>
  );
}

function TitleLocation({ title, location }: { title: string; location: string }) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-[218px] relative" data-name="Title + Location">
      <Frame5 title={title} />
      <IconText location={location} />
    </div>
  );
}

function Header({ title, theme }: { title: string; theme: string }) {
  return (
    <div className="content-start flex flex-col gap-[2px] items-start justify-between relative shrink-0 w-full" data-name="Header">
      <Frame5 title={title} />
      <p className="leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis">{theme}</p>
    </div>
  );
}

function AccountCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="account_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="account_circle">
          <mask height="16" id="mask0_1_2982" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_2982)">
            <path d={svgPaths.p13210a70} fill="var(--fill-0, #6E7CA8)" id="account_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconText1({ count }: { count: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="icon + Text">
      <AccountCircle />
      <p className="leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">{count}</p>
    </div>
  );
}

function Schedule() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="schedule">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="schedule">
          <mask height="16" id="mask0_1_2992" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_2992)">
            <path d={svgPaths.p357b9100} fill="var(--fill-0, #6E7CA8)" id="schedule_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconText3({ duration }: { duration: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="icon + Text">
      <Schedule />
      <p className="leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">{duration}</p>
    </div>
  );
}

function Groups() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="groups">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="groups">
          <mask height="16" id="mask0_1_2997" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_2997)">
            <path d={svgPaths.p1f5d0b00} fill="var(--fill-0, #6E7CA8)" id="groups_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconText4({ participants }: { participants: string }) {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="icon + Text">
      <Groups />
      <p className="leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">{participants}</p>
    </div>
  );
}

function Info({ joined, type, duration, participants, theme, location }: { joined: string; type: string; duration: string; participants: string; theme: string; location: string }) {
  return (
    <div className="content-start flex flex-wrap gap-x-[16px] gap-y-[8px] items-start relative shrink-0 w-full" data-name="Info">
      <IconText1 count={joined} />
      <IconText location={location} />
    </div>
  );
}

function Details({ title, location, joined, type, duration, participants, theme }: {
  title: string;
  location: string;
  joined: string;
  type: string;
  duration: string;
  participants: string;
  theme: string;
}) {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative" data-name="Details">
      <Header title={title} theme={theme} />
      <Info joined={joined} type={type} duration={duration} participants={participants} theme={theme} location={location} />
    </div>
  );
}

function EventCard({ 
  imgSrc, 
  title, 
  location, 
  joined, 
  type, 
  duration, 
  participants,
  theme
}: {
  imgSrc: string;
  title: string;
  location: string;
  joined: string;
  type: string;
  duration: string;
  participants: string;
  theme: string;
}) {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-start p-[16px] relative rounded-[12px] shrink-0 w-full" data-name="Event Card">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Frame8 imgSrc={imgSrc} />
      <Details 
        title={title}
        location={location}
        joined={joined}
        type={type}
        duration={duration}
        participants={participants}
        theme={theme}
      />
    </div>
  );
}

function EventList() {
  const events = [
    {
      imgSrc: imgUnsplash0HjWobhGhJs1,
      title: "Let's Legislate at DPS",
      location: "School Auditorium",
      joined: "23",
      type: "Debate",
      duration: "2 Days",
      participants: "13yrs +",
      theme: "India's Street Dog Dilemma"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs2,
      title: "Let's Legislate at NHVPS",
      location: "Conference Room A",
      joined: "23",
      type: "Debate",
      duration: "2 Days",
      participants: "13yrs +",
      theme: "Nuclear Waste Management"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs3,
      title: "Let's Legislate at MPS",
      location: "Main Hall",
      joined: "23",
      type: "Workshop",
      duration: "2 Days",
      participants: "13yrs +",
      theme: "Regulating Social Media Platforms"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs4,
      title: "Let's Legislate at KVS",
      location: "Multi-Purpose Hall",
      joined: "23",
      type: "Summit",
      duration: "5 Days Event",
      participants: "18yrs +",
      theme: "Climate Change Action Plan"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs5,
      title: "Let's Legislate at GHS",
      location: "School Auditorium",
      joined: "23",
      type: "Celebration",
      duration: "1 Days Event",
      participants: "13yrs +",
      theme: "Digital Privacy and Data Security"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs1,
      title: "Let's Legislate at RPS",
      location: "Conference Room B",
      joined: "45",
      type: "Workshop",
      duration: "3 Days",
      participants: "16yrs +",
      theme: "Universal Healthcare System"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs2,
      title: "Let's Legislate at SPS",
      location: "Assembly Hall",
      joined: "67",
      type: "Forum",
      duration: "1 Day Event",
      participants: "18yrs +",
      theme: "Renewable Energy Policies"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs3,
      title: "Let's Legislate at BVS",
      location: "Community Center",
      joined: "89",
      type: "Summit",
      duration: "4 Days",
      participants: "13yrs +",
      theme: "Education Reform and Access"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs4,
      title: "Let's Legislate at AIS",
      location: "Conference Room C",
      joined: "34",
      type: "Training",
      duration: "2 Days",
      participants: "15yrs +",
      theme: "Artificial Intelligence Ethics"
    },
    {
      imgSrc: imgUnsplash0HjWobhGhJs5,
      title: "Let's Legislate at VPS",
      location: "Seminar Hall",
      joined: "56",
      type: "Conference",
      duration: "3 Days Event",
      participants: "13yrs +",
      theme: "Cybersecurity and National Defense"
    }
  ];

  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      {events.map((event, index) => (
        <EventCard key={index} {...event} />
      ))}
    </div>
  );
}

function SearchEventList() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Search+ Event list">
      <Action />
      <Chip />
      <EventList />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[20px] items-start left-[calc(16.67%+56px)] top-[32px] w-[848px]">
      <SharedNavBar activePage="psps" />
      <SearchEventList />
    </div>
  );
}

export default function PSPsPage() {
  const [showForm, setShowForm] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-[#f8f9fb] relative size-full" data-name="PSPs Page">
      {/* Navbar - positioned absolutely at the top */}
      <div className="absolute left-[calc(16.67%+56px)] top-[32px]">
        <SharedNavBar activePage="psps" />
      </div>

      {/* Top Side Bar - positioned absolutely at the top-right */}
      <PageHeader />

      {/* Main Container - Fixed margins on left and right */}
      <div className="absolute content-stretch flex flex-col gap-[16px] items-start left-[calc(16.67%+56px)] right-[calc(16.67%+56px)] top-[100px]">
        {/* Action Bar - Search and Button */}
        <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
          <SearchField 
            placeholder="Search Events" 
            value={searchQuery}
            onChange={setSearchQuery}
          />
          <PrimaryActionButton label="New PSP" onClick={() => setShowForm(true)} />
        </div>

        {/* Filter Chips */}
        <Chip />

        {/* Two Column Layout - Event List + Form (within the container boundaries) */}
        <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-full">
          {/* Left Column - Event List */}
          <div className={`content-stretch flex flex-col gap-[16px] items-start relative shrink-0 max-h-[calc(100vh-230px)] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden ${
            showForm ? 'flex-1 opacity-40 pointer-events-none' : 'w-full'
          }`}>
            <EventList />
          </div>

          {/* Right Column - Form Panel (only when visible) - Independently Scrollable */}
          <AnimatePresence>
            {showForm && (
              <motion.div 
                className="content-stretch flex flex-col items-start relative shrink-0 w-[416px]"
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: '100%', opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <NewEventForm onClose={() => setShowForm(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}