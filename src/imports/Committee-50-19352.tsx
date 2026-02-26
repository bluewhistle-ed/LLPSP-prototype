import svgPaths from "./svg-f76apygr56";
import imgEllipse1 from "figma:asset/aea56f3263ece92dd93d47abce807ee8df611744.png";

function Group() {
  return (
    <div className="h-[24px] relative shrink-0 w-[14.314px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.3139 24">
        <g id="Group">
          <path d={svgPaths.p357ab000} fill="var(--fill-0, #1850C5)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0 size-[32px]" data-name="Logo">
      <Group />
    </div>
  );
}

function IconsEmojiEvents() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / emoji_events">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / emoji_events">
          <mask height="16" id="mask0_42_2965" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_42_2965)">
            <path d={svgPaths.p3e94a00} fill="var(--fill-0, #6E7CA8)" id="emoji_events" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Nav() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name=".nav">
      <IconsEmojiEvents />
    </div>
  );
}

function IconsFace() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / face">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / face">
          <mask height="16" id="mask0_42_2934" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_42_2934)">
            <path d={svgPaths.p1ba61e80} fill="var(--fill-0, #6E7CA8)" id="face" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name=".nav">
      <IconsFace />
    </div>
  );
}

function IconsSchool() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / school">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / school">
          <mask height="16" id="mask0_42_2910" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_42_2910)">
            <path d={svgPaths.p22fd2d00} fill="var(--fill-0, #6E7CA8)" id="school" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Nav2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name=".nav">
      <IconsSchool />
    </div>
  );
}

function IconsMinistries() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / Ministries">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / Ministries">
          <mask height="16" id="mask0_42_2862" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_42_2862)">
            <path d={svgPaths.pb5bda80} fill="var(--fill-0, #6E7CA8)" id="account_balance" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Nav3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name=".nav">
      <IconsMinistries />
    </div>
  );
}

function IconsCommitee() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / Commitee">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / Commitee">
          <mask height="16" id="mask0_50_19356" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_50_19356)">
            <path d={svgPaths.p21808d00} fill="var(--fill-0, #2F3E6D)" id="diversity_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Nav4() {
  return (
    <div className="bg-[#f1f2f8] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name=".nav">
      <IconsCommitee />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[12px] text-ellipsis">Committee</p>
    </div>
  );
}

function Tabs() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Tabs">
      <Nav />
      <Nav1 />
      <Nav2 />
      <Nav3 />
      <Nav4 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="-translate-y-1/2 absolute bg-white content-stretch flex gap-[16px] items-center left-[calc(16.67%+56px)] p-[8px] rounded-[12px] shadow-[0px_8px_10px_0px_rgba(0,0,0,0.05)] top-[calc(50%-458px)]" data-name="Nav bar">
      <Logo />
      <Tabs />
    </div>
  );
}

function IconsExpandMore() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / expand_more">
          <mask height="16" id="mask0_42_2914" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="0.0015626" />
          </mask>
          <g mask="url(#mask0_42_2914)">
            <path d={svgPaths.p271bc980} fill="var(--fill-0, #3C4C7C)" id="expand_more" />
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
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] whitespace-nowrap">
          <p className="leading-[14px]">Let’s Legislative</p>
        </div>
        <IconsExpandMore />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function TopSideBar() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] items-center p-[8px] right-[calc(16.67%+56px)] rounded-[12px] top-[32px]" data-name="Top Side bar">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Buttons />
      <div className="relative shrink-0 size-[32px]">
        <img alt="" className="block max-w-none size-full" height="32" src={imgEllipse1} width="32" />
      </div>
    </div>
  );
}

function Search() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="search">
          <mask height="18" id="mask0_42_2886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="18" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="18" id="Bounding box" width="18" />
          </mask>
          <g mask="url(#mask0_42_2886)">
            <path d={svgPaths.p2c731080} fill="var(--fill-0, #6E7CA8)" id="search_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Enter() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-h-px min-w-px relative" data-name="Enter">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px not-italic relative text-[#6e7ca8] text-[14px] whitespace-pre-wrap">Search Committee</p>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#f1f2f8] relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center p-[12px] relative w-full">
          <Search />
          <Enter />
        </div>
      </div>
    </div>
  );
}

function InputField1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input field">
      <Content />
    </div>
  );
}

function InputField() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[320px]" data-name="Input field">
      <InputField1 />
    </div>
  );
}

function IconsAddCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_42_2874" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_42_2874)">
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
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[16px]">New Committee</p>
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
      <InputField />
      <ButtonGroup />
    </div>
  );
}

function IconsCheckBoxOutlineBlank() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons / check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons / check_box_outline_blank">
          <mask height="20" id="mask0_50_9890" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_50_9890)">
            <path d={svgPaths.p15a4c080} fill="var(--fill-0, #6E7CA8)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NameTag() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Tag">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Committee on Public Health and Wellness</p>
      </div>
    </div>
  );
}

function IconsMoreVert() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_42_2858" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_42_2858)">
            <path d={svgPaths.pc41f800} fill="var(--fill-0, #2F3E6D)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsMoreVert />
    </div>
  );
}

function Name() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <NameTag />
      <Buttons2 />
    </div>
  );
}

function TitleLocation() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Title + Location">
      <Name />
    </div>
  );
}

function EventDetails() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Event Details">
      <TitleLocation />
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <EventDetails />
    </div>
  );
}

function EventList1() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Event list">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
          <IconsCheckBoxOutlineBlank />
          <Content2 />
        </div>
      </div>
    </div>
  );
}

function IconsCheckBoxOutlineBlank1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons / check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons / check_box_outline_blank">
          <mask height="20" id="mask0_50_9890" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_50_9890)">
            <path d={svgPaths.p15a4c080} fill="var(--fill-0, #6E7CA8)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NameTag1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Tag">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Committee on Education and Innovation</p>
      </div>
    </div>
  );
}

function IconsMoreVert1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_42_2858" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_42_2858)">
            <path d={svgPaths.pc41f800} fill="var(--fill-0, #2F3E6D)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsMoreVert1 />
    </div>
  );
}

function Name1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <NameTag1 />
      <Buttons3 />
    </div>
  );
}

function TitleLocation1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Title + Location">
      <Name1 />
    </div>
  );
}

function EventDetails1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Event Details">
      <TitleLocation1 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <EventDetails1 />
    </div>
  );
}

function EventList2() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Event list">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
          <IconsCheckBoxOutlineBlank1 />
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function IconsCheckBoxOutlineBlank2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons / check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons / check_box_outline_blank">
          <mask height="20" id="mask0_50_9890" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_50_9890)">
            <path d={svgPaths.p15a4c080} fill="var(--fill-0, #6E7CA8)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NameTag2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Tag">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Committee on Digital Innovation and Technology</p>
      </div>
    </div>
  );
}

function IconsMoreVert2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_42_2858" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_42_2858)">
            <path d={svgPaths.pc41f800} fill="var(--fill-0, #2F3E6D)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons4() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsMoreVert2 />
    </div>
  );
}

function Name2() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <NameTag2 />
      <Buttons4 />
    </div>
  );
}

function TitleLocation2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Title + Location">
      <Name2 />
    </div>
  );
}

function EventDetails2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Event Details">
      <TitleLocation2 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <EventDetails2 />
    </div>
  );
}

function EventList3() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Event list">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
          <IconsCheckBoxOutlineBlank2 />
          <Content4 />
        </div>
      </div>
    </div>
  );
}

function IconsCheckBoxOutlineBlank3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons / check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons / check_box_outline_blank">
          <mask height="20" id="mask0_50_9890" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_50_9890)">
            <path d={svgPaths.p15a4c080} fill="var(--fill-0, #6E7CA8)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NameTag3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Tag">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Committee on Democracy and Electoral Reforms</p>
      </div>
    </div>
  );
}

function IconsMoreVert3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_42_2858" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_42_2858)">
            <path d={svgPaths.pc41f800} fill="var(--fill-0, #2F3E6D)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons5() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsMoreVert3 />
    </div>
  );
}

function Name3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <NameTag3 />
      <Buttons5 />
    </div>
  );
}

function TitleLocation3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Title + Location">
      <Name3 />
    </div>
  );
}

function EventDetails3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Event Details">
      <TitleLocation3 />
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <EventDetails3 />
    </div>
  );
}

function EventList4() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Event list">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
          <IconsCheckBoxOutlineBlank3 />
          <Content5 />
        </div>
      </div>
    </div>
  );
}

function IconsCheckBoxOutlineBlank4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons / check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons / check_box_outline_blank">
          <mask height="20" id="mask0_50_9890" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_50_9890)">
            <path d={svgPaths.p15a4c080} fill="var(--fill-0, #6E7CA8)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NameTag4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Tag">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Committee on Economic Development and Finance</p>
      </div>
    </div>
  );
}

function IconsMoreVert4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_42_2858" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_42_2858)">
            <path d={svgPaths.pc41f800} fill="var(--fill-0, #2F3E6D)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons6() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsMoreVert4 />
    </div>
  );
}

function Name4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <NameTag4 />
      <Buttons6 />
    </div>
  );
}

function TitleLocation4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Title + Location">
      <Name4 />
    </div>
  );
}

function EventDetails4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Event Details">
      <TitleLocation4 />
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <EventDetails4 />
    </div>
  );
}

function EventList5() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Event list">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
          <IconsCheckBoxOutlineBlank4 />
          <Content6 />
        </div>
      </div>
    </div>
  );
}

function IconsCheckBoxOutlineBlank5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons / check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons / check_box_outline_blank">
          <mask height="20" id="mask0_50_9890" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_50_9890)">
            <path d={svgPaths.p15a4c080} fill="var(--fill-0, #6E7CA8)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NameTag5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Tag">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Committee on Science and Technology</p>
      </div>
    </div>
  );
}

function IconsMoreVert5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_42_2858" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_42_2858)">
            <path d={svgPaths.pc41f800} fill="var(--fill-0, #2F3E6D)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons7() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsMoreVert5 />
    </div>
  );
}

function Name5() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <NameTag5 />
      <Buttons7 />
    </div>
  );
}

function TitleLocation5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Title + Location">
      <Name5 />
    </div>
  );
}

function EventDetails5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Event Details">
      <TitleLocation5 />
    </div>
  );
}

function Content7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <EventDetails5 />
    </div>
  );
}

function EventList6() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Event list">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
          <IconsCheckBoxOutlineBlank5 />
          <Content7 />
        </div>
      </div>
    </div>
  );
}

function IconsCheckBoxOutlineBlank6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons / check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons / check_box_outline_blank">
          <mask height="20" id="mask0_50_9890" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_50_9890)">
            <path d={svgPaths.p15a4c080} fill="var(--fill-0, #6E7CA8)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NameTag6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Tag">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Committee on Innovation and Entrepreneurship</p>
      </div>
    </div>
  );
}

function IconsMoreVert6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_42_2858" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_42_2858)">
            <path d={svgPaths.pc41f800} fill="var(--fill-0, #2F3E6D)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons8() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsMoreVert6 />
    </div>
  );
}

function Name6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <NameTag6 />
      <Buttons8 />
    </div>
  );
}

function TitleLocation6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Title + Location">
      <Name6 />
    </div>
  );
}

function EventDetails6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Event Details">
      <TitleLocation6 />
    </div>
  );
}

function Content8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <EventDetails6 />
    </div>
  );
}

function EventList7() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Event list">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
          <IconsCheckBoxOutlineBlank6 />
          <Content8 />
        </div>
      </div>
    </div>
  );
}

function IconsCheckBoxOutlineBlank7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons / check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons / check_box_outline_blank">
          <mask height="20" id="mask0_50_9890" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_50_9890)">
            <path d={svgPaths.p15a4c080} fill="var(--fill-0, #6E7CA8)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NameTag7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Tag">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Committee on Environmental Sustainability</p>
      </div>
    </div>
  );
}

function IconsMoreVert7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_42_2858" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_42_2858)">
            <path d={svgPaths.pc41f800} fill="var(--fill-0, #2F3E6D)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons9() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsMoreVert7 />
    </div>
  );
}

function Name7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <NameTag7 />
      <Buttons9 />
    </div>
  );
}

function TitleLocation7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Title + Location">
      <Name7 />
    </div>
  );
}

function EventDetails7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Event Details">
      <TitleLocation7 />
    </div>
  );
}

function Content9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <EventDetails7 />
    </div>
  );
}

function EventList8() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Event list">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
          <IconsCheckBoxOutlineBlank7 />
          <Content9 />
        </div>
      </div>
    </div>
  );
}

function IconsCheckBoxOutlineBlank8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons / check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons / check_box_outline_blank">
          <mask height="20" id="mask0_50_9890" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_50_9890)">
            <path d={svgPaths.p15a4c080} fill="var(--fill-0, #6E7CA8)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NameTag8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Tag">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">{`Committee on Gender Equality and Women's Empowerment`}</p>
      </div>
    </div>
  );
}

function IconsMoreVert8() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_42_2858" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_42_2858)">
            <path d={svgPaths.pc41f800} fill="var(--fill-0, #2F3E6D)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons10() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsMoreVert8 />
    </div>
  );
}

function Name8() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <NameTag8 />
      <Buttons10 />
    </div>
  );
}

function TitleLocation8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Title + Location">
      <Name8 />
    </div>
  );
}

function EventDetails8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Event Details">
      <TitleLocation8 />
    </div>
  );
}

function Content10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <EventDetails8 />
    </div>
  );
}

function EventList9() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Event list">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
          <IconsCheckBoxOutlineBlank8 />
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function IconsCheckBoxOutlineBlank9() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icons / check_box_outline_blank">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icons / check_box_outline_blank">
          <mask height="20" id="mask0_50_9890" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
          </mask>
          <g mask="url(#mask0_50_9890)">
            <path d={svgPaths.p15a4c080} fill="var(--fill-0, #6E7CA8)" id="check_box_outline_blank" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function NameTag9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Tag">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Committee on Agriculture and Rural Development</p>
      </div>
    </div>
  );
}

function IconsMoreVert9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_42_2858" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_42_2858)">
            <path d={svgPaths.pc41f800} fill="var(--fill-0, #2F3E6D)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons11() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsMoreVert9 />
    </div>
  );
}

function Name9() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <NameTag9 />
      <Buttons11 />
    </div>
  );
}

function TitleLocation9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Title + Location">
      <Name9 />
    </div>
  );
}

function EventDetails9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Event Details">
      <TitleLocation9 />
    </div>
  );
}

function Content11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <EventDetails9 />
    </div>
  );
}

function EventList10() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full" data-name="Event list">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16px] items-center p-[24px] relative w-full">
          <IconsCheckBoxOutlineBlank9 />
          <Content11 />
        </div>
      </div>
    </div>
  );
}

function EventList() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Event list">
      <EventList1 />
      <EventList2 />
      <EventList3 />
      <EventList4 />
      <EventList5 />
      <EventList6 />
      <EventList7 />
      <EventList8 />
      <EventList9 />
      <EventList10 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-[808px] items-start min-h-px min-w-px relative" data-name="Content">
      <EventList />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[28px] not-italic relative shrink-0 text-[#041a5e] text-[20px]">Add New Committee</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <Frame3 />
    </div>
  );
}

function Cancel() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="cancel">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="cancel">
          <mask height="24" id="mask0_50_9886" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_50_9886)">
            <path d={svgPaths.p1c4ec6b0} fill="var(--fill-0, #2F3E6D)" id="cancel_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <button className="content-stretch cursor-pointer flex items-center justify-center p-[8px] relative rounded-[8px] shrink-0">
      <Cancel />
    </button>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[12px] shrink-0 w-full">
      <Frame2 />
      <Frame1 />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="header">
      <Frame />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Header />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <Frame4 />
    </div>
  );
}

function Enter1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-h-px min-w-px relative" data-name="Enter">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[14px] text-ellipsis whitespace-nowrap">Enter Committee Name</p>
    </div>
  );
}

function Content12() {
  return (
    <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[12px] py-[8px] relative w-full">
          <Enter1 />
        </div>
      </div>
    </div>
  );
}

function InputFieldTextField() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="Input field / Text field">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full whitespace-pre-wrap">Committee Name</p>
      <Content12 />
    </div>
  );
}

function Fields() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-px overflow-clip relative w-full" data-name="Fields">
      <InputFieldTextField />
    </div>
  );
}

function Buttons12() {
  return (
    <div className="bg-[#2766da] h-[40px] relative rounded-[8px] shrink-0 w-full" data-name="Buttons">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[12px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
            <p className="leading-[16px]">Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CreateEvent() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] h-full items-start overflow-clip p-[24px] relative rounded-[12px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.2)] shrink-0 w-[416px]" data-name="Create Event">
      <Frame5 />
      <Fields />
      <Buttons12 />
      <div className="absolute bg-[#e3e6f0] h-[100px] left-[406px] rounded-[40px] top-[120px] w-[6px]" data-name="Scroll" />
    </div>
  );
}

function ListForm() {
  return (
    <div className="content-stretch flex gap-[16px] h-[840px] items-start relative shrink-0 w-full" data-name="List + Form">
      <Content1 />
      <CreateEvent />
    </div>
  );
}

function SearchEventList() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[924px] items-start left-[calc(16.67%+56px)] top-[100px] w-[848px]" data-name="Search+ Event list">
      <Action />
      <ListForm />
    </div>
  );
}

export default function Committee() {
  return (
    <div className="bg-[#f8f9fb] relative size-full" data-name="Committee">
      <NavBar />
      <TopSideBar />
      <SearchEventList />
    </div>
  );
}