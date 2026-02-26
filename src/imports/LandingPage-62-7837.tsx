import svgPaths from "./svg-oi5btts3ol";
import imgEllipse1 from "figma:asset/9d647a8a2ba2ba7a6ccf66ddfe0401113b01f385.png";
import imgRectangle55 from "figma:asset/259415cde5e04caf58b1cf078a87ddd22329a966.png";
import imgEllipse3 from "figma:asset/750bb354682b39c760e8e2d8f9ec971b04aafab6.png";
import imgEllipse4 from "figma:asset/4a8f8e72f5fe25465071d4ab7006bf2930bf6fc5.png";
import imgEllipse5 from "figma:asset/826040f2a17a689d03d7e742b0eb063d3ebdaeec.png";
import imgEllipse6 from "figma:asset/00c6c6c9df050e174d241eae0e7e86415a54de66.png";
import imgEllipse2 from "figma:asset/50ed62d3fa2a0a7740973ae198376305711a0010.png";
import imgMedal1 from "figma:asset/3981aa122c13817f9876eec475b034c562bcf91b.png";
import imgEllipse7 from "figma:asset/85a9ee6e1d64cdeb572d2af2134249064e4ce730.png";
import imgMedal11 from "figma:asset/83c3f80163648bc6aff14a5c5a9a50f76cca8bb8.png";
import imgEllipse8 from "figma:asset/bdd19c040b7e19364b8623e06b8c5550e60c3f77.png";
import imgMedal21 from "figma:asset/44327a911335a36ef5aa6787c23a899e773847d8.png";
import imgEllipse9 from "figma:asset/b2a732e782875a3bdf833ec70c944672d41008aa.png";
import imgNoise from "figma:asset/63baee1cd13a0ef63436b3d6bec6ac2fbdf4e8bd.png";
import imgEllipse10 from "figma:asset/4dd19c60f1a479b25de830e9d087d3a3bbf780d9.png";

function TopSideBar() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] items-center p-[8px] right-[calc(8.33%+68px)] rounded-[12px] top-[32px]" data-name="Top Side bar">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <div className="relative shrink-0 size-[28px]">
        <img alt="" className="block max-w-none size-full" height="28" src={imgEllipse1} width="28" />
      </div>
    </div>
  );
}

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

function IconsEmojiEvents() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / emoji_events">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / emoji_events">
          <mask height="16" id="mask0_62_1960" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_1960)">
            <path d={svgPaths.p3e94a00} fill="var(--fill-0, #2F3E6D)" id="emoji_events" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Nav() {
  return (
    <div className="bg-[#f1f2f8] content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name=".nav">
      <IconsEmojiEvents />
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[12px] text-ellipsis">Event info</p>
    </div>
  );
}

function IconsParty() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / party">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / party">
          <mask height="16" id="mask0_62_5764" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5764)">
            <path d={svgPaths.p26d0f0c0} fill="var(--fill-0, #6E7CA8)" id="group" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Nav1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name=".nav">
      <IconsParty />
    </div>
  );
}

function IconsAlliance() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / Alliance">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / Alliance">
          <mask height="16" id="mask0_62_5752" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5752)">
            <path d={svgPaths.p1f1b8a80} fill="var(--fill-0, #6E7CA8)" id="diversity_3" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Nav2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name=".nav">
      <IconsAlliance />
    </div>
  );
}

function IconsPersonRaisedHand() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / person_raised_hand">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / person_raised_hand">
          <mask height="16" id="mask0_62_5808" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5808)">
            <path d={svgPaths.pb22d500} fill="var(--fill-0, #6E7CA8)" id="person_raised_hand" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Nav3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name=".nav">
      <IconsPersonRaisedHand />
    </div>
  );
}

function IconsNotice() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / Notice">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / Notice">
          <mask height="16" id="mask0_62_5804" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5804)">
            <path d={svgPaths.p162cdb00} fill="var(--fill-0, #6E7CA8)" id="article_shortcut" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Nav4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name=".nav">
      <IconsNotice />
    </div>
  );
}

function IconsAmendments() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / Amendments">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / Amendments">
          <mask height="16" id="mask0_62_5760" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5760)">
            <path d={svgPaths.p1ed8ed00} fill="var(--fill-0, #6E7CA8)" id="contract_edit" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Nav5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name=".nav">
      <IconsAmendments />
    </div>
  );
}

function IconsChat() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / Chat">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / Chat">
          <mask height="16" id="mask0_62_5798" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5798)">
            <path d={svgPaths.p183a1080} fill="var(--fill-0, #6E7CA8)" id="maps_ugc" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Nav6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name=".nav">
      <IconsChat />
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
      <Nav5 />
      <Nav6 />
    </div>
  );
}

function NavBar() {
  return (
    <div className="absolute bg-white content-stretch flex gap-[16px] items-center left-[calc(8.33%+67px)] p-[8px] rounded-[12px] shadow-[0px_8px_10px_0px_rgba(0,0,0,0.05)] top-[32px]" data-name="Nav bar">
      <Logo />
      <Tabs />
    </div>
  );
}

function IconsEmojiEvents1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icons / emoji_events">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icons / emoji_events">
          <mask height="24" id="mask0_62_5816" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="24" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="24" id="Bounding box" width="24" />
          </mask>
          <g mask="url(#mask0_62_5816)">
            <path d={svgPaths.p33670200} fill="var(--fill-0, #2F3E6D)" id="emoji_events" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="About">
      <p className="font-['Inter:Bold',sans-serif] font-bold leading-[28px] not-italic overflow-hidden relative shrink-0 text-[#2f3e6d] text-[20px] text-ellipsis w-full whitespace-nowrap">Citizenship Education Seminar</p>
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
            <path d={svgPaths.p196cc580} fill="var(--fill-0, #2F3E6D)" id="open_in_full" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsOpenInFull />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <IconsEmojiEvents1 />
      <About />
      <Buttons />
    </div>
  );
}

function Frame22() {
  return (
    <div className="backdrop-blur-[32px] bg-white content-stretch flex items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['IBM_Plex_Sans_Condensed:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6e7ca8] text-[42px]">02</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="backdrop-blur-[32px] bg-white content-stretch flex items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['IBM_Plex_Sans_Condensed:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6e7ca8] text-[42px]">20</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="backdrop-blur-[32px] bg-white content-stretch flex items-start px-[8px] py-[2px] relative rounded-[12px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <p className="font-['IBM_Plex_Sans_Condensed:SemiBold',sans-serif] leading-[normal] not-italic relative shrink-0 text-[#6e7ca8] text-[42px]">52</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative rounded-[12px] shrink-0">
      <Frame22 />
      <p className="bg-clip-text bg-gradient-to-b font-['IBM_Plex_Sans_Condensed:SemiBold',sans-serif] from-[#192750] leading-[normal] not-italic relative shrink-0 text-[42px] to-[rgba(25,39,80,0)]" style={{ WebkitTextFillColor: "transparent" }}>
        :
      </p>
      <Frame23 />
      <p className="bg-clip-text bg-gradient-to-b font-['IBM_Plex_Sans_Condensed:SemiBold',sans-serif] from-[#192750] leading-[normal] not-italic relative shrink-0 text-[42px] to-[rgba(25,39,80,0)]" style={{ WebkitTextFillColor: "transparent" }}>
        :
      </p>
      <Frame24 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <Frame25 />
    </div>
  );
}

function Lhs() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-[454px]" data-name="LHS">
      <Frame32 />
    </div>
  );
}

function Distance() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="distance">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="distance">
          <mask height="16" id="mask0_62_5718" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5718)">
            <path d={svgPaths.p368b5600} fill="var(--fill-0, #2F3E6D)" id="distance_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconText() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="icon + Text">
      <Distance />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#2f3e6d] text-[12px] text-ellipsis">Wellness Convention Center</p>
    </div>
  );
}

function AccountCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="account_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="account_circle">
          <mask height="16" id="mask0_62_5714" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5714)">
            <path d={svgPaths.p13210a70} fill="var(--fill-0, #2F3E6D)" id="account_circle_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconText1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="icon + Text">
      <AccountCircle />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#2f3e6d] text-[12px] text-ellipsis">23 Joined</p>
    </div>
  );
}

function TheaterComedy() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="theater_comedy">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="theater_comedy">
          <mask height="16" id="mask0_62_5794" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5794)">
            <path d={svgPaths.p5904c80} fill="var(--fill-0, #2F3E6D)" id="theater_comedy_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconText2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="icon + Text">
      <TheaterComedy />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#2f3e6d] text-[12px] text-ellipsis">Debate</p>
    </div>
  );
}

function CalendarMonth() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="calendar_month">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="calendar_month">
          <mask height="16" id="mask0_62_5710" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5710)">
            <path d={svgPaths.p1bca1d80} fill="var(--fill-0, #2F3E6D)" id="calendar_month_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconText3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="icon + Text">
      <CalendarMonth />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#2f3e6d] text-[12px] text-ellipsis">2 Days</p>
    </div>
  );
}

function SubDetails() {
  return (
    <div className="content-start flex flex-wrap gap-[16px_24px] items-start opacity-50 relative shrink-0 w-full" data-name="Sub Details">
      <IconText />
      <IconText1 />
      <IconText2 />
      <IconText3 />
    </div>
  );
}

function About1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 text-[14px] text-ellipsis w-full" data-name="About">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] overflow-hidden relative shrink-0 text-[#2f3e6d] w-full whitespace-nowrap">About this event</p>
      <div className="font-['Inter:Regular',sans-serif] font-normal h-[121.984px] leading-[0] overflow-hidden relative shrink-0 text-[#6e7ca8] w-full">
        <p className="leading-[20px] mb-0 whitespace-pre-wrap">{`Students will delve into the art and craft of drafting legislative documents, enhancing their understanding of the legislative process and honing their skills in effective communication and persuasion. The workshop is designed to provide participants with practical knowledge, hands-on experience, and guidance from experienced facilitators. Here's an overview of the workshop`}</p>
        <ol start="1">
          <li className="mb-0 ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">Introduction to Legislative Writing:</span>
          </li>
          <ul className="list-disc mb-0 whitespace-pre-wrap">
            <li className="mb-0 ms-[42px]">
              <span className="leading-[20px]">Participants will receive an introduction to the principles and importance of legislative writing.</span>
            </li>
            <li className="ms-[42px]">
              <span className="leading-[20px]">The facilitators will explain the various types of legislative documents, including bills, amendments, and resolutions.</span>
            </li>
          </ul>
          <li className="mb-0 ms-[21px] whitespace-pre-wrap">
            <span className="leading-[20px]">Understanding Legislative Language:</span>
          </li>
          <ul>
            <li className="list-disc ms-[42px] whitespace-pre-wrap">
              <span className="leading-[20px]">The workshop will cover the nuances of legislative language, emphasizing clarity, precision, and consistency.</span>
            </li>
          </ul>
        </ol>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full">
      <SubDetails />
      <About1 />
    </div>
  );
}

function HourglassTop() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="hourglass_top">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="hourglass_top">
          <mask height="16" id="mask0_62_5706" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5706)">
            <path d={svgPaths.p1f291600} fill="var(--fill-0, #F1F2F8)" id="hourglass_top_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#2f3e6d] content-stretch flex items-start p-[8px] relative rounded-[100px] shrink-0">
      <HourglassTop />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-ellipsis">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[14px]">{`24 Feb, 2023, 09:00 AM `}</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[12px]">Event Starts</p>
    </div>
  );
}

function EventStarts() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Event Starts">
      <Frame />
      <Frame4 />
    </div>
  );
}

function HourglassBottom() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="hourglass_bottom">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="hourglass_bottom">
          <mask height="16" id="mask0_62_5702" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5702)">
            <path d={svgPaths.p5a16f32} fill="var(--fill-0, #F1F2F8)" id="hourglass_bottom_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#2f3e6d] content-stretch flex items-start p-[8px] relative rounded-[100px] shrink-0">
      <HourglassBottom />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[16px] min-h-px min-w-px not-italic relative text-[#2f3e6d] text-ellipsis">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[14px]">{`26 Feb, 2023, 04:00 PM `}</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[12px]">Event ends</p>
    </div>
  );
}

function EventStarts1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Event Starts">
      <Frame1 />
      <Frame8 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <EventStarts />
      <EventStarts1 />
    </div>
  );
}

function ConfirmationNumber() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="confirmation_number">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="confirmation_number">
          <mask height="16" id="mask0_62_5694" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5694)">
            <path d={svgPaths.p176c9b00} fill="var(--fill-0, #F1F2F8)" id="confirmation_number_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#2f3e6d] content-stretch flex items-start p-[8px] relative rounded-[100px] shrink-0">
      <ConfirmationNumber />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center leading-[16px] min-h-px min-w-px not-italic relative text-[#2f3e6d] text-ellipsis">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[14px]">{`25 Feb, 2023, 04:00 PM `}</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[12px]">Orientation date</p>
    </div>
  );
}

function EventStarts2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Event Starts">
      <Frame2 />
      <Frame10 />
    </div>
  );
}

function Distance1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="distance">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="distance">
          <mask height="16" id="mask0_62_5688" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5688)">
            <path d={svgPaths.p3d7d4f00} fill="var(--fill-0, #F1F2F8)" id="distance_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-[#2f3e6d] content-stretch flex items-start p-[8px] relative rounded-[100px] shrink-0">
      <Distance1 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-ellipsis">
      <p className="font-['Inter:Medium',sans-serif] font-medium overflow-hidden relative shrink-0 text-[14px]">Knowledgeville Auditorium</p>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold overflow-hidden relative shrink-0 text-[12px]">Orientation Venue</p>
    </div>
  );
}

function EventStarts3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Event Starts">
      <Frame3 />
      <Frame11 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0 w-full">
      <EventStarts2 />
      <EventStarts3 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full">
      <Frame19 />
      <Frame21 />
    </div>
  );
}

function About2() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="About">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#2f3e6d] text-[14px] text-ellipsis w-full whitespace-nowrap">{`Dates & Venue`}</p>
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <About2 />
    </div>
  );
}

function AvatarName() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse3} width="16" />
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Arlene McCoy</p>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#e7f2fe] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#3c7ce8] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#1850c5] text-[12px] text-ellipsis">Speaker</p>
    </div>
  );
}

function AvatarTag() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName />
      <Tag />
    </div>
  );
}

function AvatarName1() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse4} width="16" />
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Regina</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-[#f5f0ff] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#6820ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6820ff] text-[12px] text-ellipsis">Mentor</p>
    </div>
  );
}

function AvatarTag1() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName1 />
      <Tag1 />
    </div>
  );
}

function AvatarName2() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse5} width="16" />
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Kathryn Murphy</p>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-[#f5f0ff] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#6820ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6820ff] text-[12px] text-ellipsis">Mentor</p>
    </div>
  );
}

function AvatarTag2() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[22px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName2 />
      <Tag2 />
    </div>
  );
}

function AvatarName3() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse6} width="16" />
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Cody Fisher</p>
      </div>
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-[#f5f0ff] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#6820ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6820ff] text-[12px] text-ellipsis">Mentor</p>
    </div>
  );
}

function AvatarTag3() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName3 />
      <Tag3 />
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
      <AvatarTag />
      <AvatarTag1 />
      <AvatarTag2 />
      <AvatarTag3 />
    </div>
  );
}

function About3() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="About">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">Coordinators</p>
      <Frame20 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <About3 />
    </div>
  );
}

function AvatarName4() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Ministry of Legislative Affairs and Policy</p>
      </div>
    </div>
  );
}

function AvatarTag4() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName4 />
    </div>
  );
}

function AvatarName5() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Ministry of Education and Innovation</p>
      </div>
    </div>
  );
}

function AvatarTag5() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName5 />
    </div>
  );
}

function AvatarName6() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Ministry of Public Health and Wellness</p>
      </div>
    </div>
  );
}

function AvatarTag6() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName6 />
    </div>
  );
}

function AvatarName7() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Ministry of Arts and Creative Expression</p>
      </div>
    </div>
  );
}

function AvatarTag7() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName7 />
    </div>
  );
}

function AvatarName8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Ministry of Social Justice</p>
      </div>
    </div>
  );
}

function AvatarTag8() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName8 />
    </div>
  );
}

function Ministries1() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full" data-name="Ministries">
      <AvatarTag4 />
      <AvatarTag5 />
      <AvatarTag6 />
      <AvatarTag7 />
      <AvatarTag8 />
    </div>
  );
}

function Ministries() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Ministries">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold h-[16px] leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-[800px] whitespace-nowrap">Ministries</p>
      <Ministries1 />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px overflow-clip relative w-full">
      <Frame6 />
      <div className="h-[117px] pointer-events-none relative rounded-[16px] shrink-0 w-full">
        <div aria-hidden="true" className="absolute inset-0 rounded-[16px]">
          <div className="absolute inset-0 overflow-hidden rounded-[16px]">
            <img alt="" className="absolute h-[302.56%] left-0 max-w-none top-[-153.8%] w-full" src={imgRectangle55} />
          </div>
          <div className="absolute bg-gradient-to-t from-[81.303%] from-black inset-0 rounded-[16px] to-[125.54%] to-[rgba(0,0,0,0)]" />
        </div>
        <div aria-hidden="true" className="absolute border-[0.188px] border-solid border-white inset-0 rounded-[16px]" />
      </div>
      <Lhs />
      <Frame9 />
      <Frame5 />
      <Frame12 />
      <Ministries />
    </div>
  );
}

function IconsBook() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / book_2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / book_2">
          <mask height="16" id="mask0_62_5732" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5732)">
            <path d={svgPaths.p1a4b3880} fill="var(--fill-0, #2F3E6D)" id="book_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Buttons">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[16px] whitespace-nowrap">
            <p className="leading-[14px]">View Handbook</p>
          </div>
          <IconsBook />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Buttons2() {
  return (
    <div className="bg-[#2766da] flex-[1_0_0] min-h-px min-w-px relative rounded-[8px]" data-name="Buttons">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center p-[16px] relative w-full">
          <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-white whitespace-nowrap">
            <p className="leading-[14px]">Join Party</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Buttons1 />
      <Buttons2 />
    </div>
  );
}

function EligibleEvents() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-white h-full min-h-px min-w-px relative rounded-[24px] to-[rgba(255,255,255,0)]" data-name="Eligible Events">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[24px] relative size-full">
          <Frame44 />
          <Frame45 />
        </div>
      </div>
    </div>
  );
}

function IconsOpenInFull1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / open_in_full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / open_in_full">
          <mask height="16" id="mask0_62_5790" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5790)">
            <path d={svgPaths.p196cc580} fill="var(--fill-0, #2F3E6D)" id="open_in_full" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsOpenInFull1 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[20px] text-ellipsis whitespace-nowrap">Announcement</p>
      <Buttons3 />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-col h-[80px] isolate items-start leading-[0] not-italic relative shrink-0 text-ellipsis w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#3c4c7c] text-[16px] w-[472px] whitespace-nowrap z-[2]">
        <p className="leading-[20px] overflow-hidden">Students Empowered: A Platform for Civic Engagemen</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px overflow-hidden relative text-[#6e7ca8] text-[12px] w-[472px] z-[1]">
        <p className="leading-[16px] whitespace-pre-wrap">A transformative force in student civic engagement, this platform provides a dynamic space for young minds to participate in the democratic process. From debating pressing social issues to proposing policy solutions, students harness its power to voice their opinions and drive meaningful change in their communities and beyond.</p>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col h-[80px] isolate items-start leading-[0] not-italic relative shrink-0 text-ellipsis w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#3c4c7c] text-[16px] w-[472px] whitespace-nowrap z-[2]">
        <p className="leading-[20px] overflow-hidden">Students Empowered: A Platform for Civic Engagemen</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px overflow-hidden relative text-[#6e7ca8] text-[12px] w-[472px] z-[1]">
        <p className="leading-[16px] whitespace-pre-wrap">A transformative force in student civic engagement, this platform provides a dynamic space for young minds to participate in the democratic process. From debating pressing social issues to proposing policy solutions, students harness its power to voice their opinions and drive meaningful change in their communities and beyond.</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-col h-[80px] isolate items-start leading-[0] not-italic relative shrink-0 text-ellipsis w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#3c4c7c] text-[16px] w-[472px] whitespace-nowrap z-[2]">
        <p className="leading-[20px] overflow-hidden">Students Empowered: A Platform for Civic Engagemen</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px overflow-hidden relative text-[#6e7ca8] text-[12px] w-[472px] z-[1]">
        <p className="leading-[16px] whitespace-pre-wrap">A transformative force in student civic engagement, this platform provides a dynamic space for young minds to participate in the democratic process. From debating pressing social issues to proposing policy solutions, students harness its power to voice their opinions and drive meaningful change in their communities and beyond.</p>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col h-[80px] isolate items-start leading-[0] not-italic relative shrink-0 text-ellipsis w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center overflow-hidden relative shrink-0 text-[#3c4c7c] text-[16px] w-[472px] whitespace-nowrap z-[2]">
        <p className="leading-[20px] overflow-hidden">Students Empowered: A Platform for Civic Engagemen</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Regular',sans-serif] font-normal justify-center min-h-px min-w-px overflow-hidden relative text-[#e3e6f0] text-[12px] w-[472px] z-[1]">
        <p className="leading-[16px] whitespace-pre-wrap">A transformative force in student civic engagement, this platform provides a dynamic space for young minds to participate in the democratic process. From debating pressing social issues to proposing policy solutions, students harness its power to voice their opinions and drive meaningful change in their communities and beyond.</p>
      </div>
    </div>
  );
}

function EligibleEvents1() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-white h-full min-h-px min-w-px relative rounded-[24px] to-[rgba(255,255,255,0)]" data-name="Eligible Events">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <Frame38 />
          <Frame26 />
          <Frame27 />
          <Frame28 />
          <Frame29 />
        </div>
      </div>
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-end min-h-px min-w-px relative w-full">
      <EligibleEvents />
      <EligibleEvents1 />
    </div>
  );
}

function IconsOpenInFull2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / open_in_full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / open_in_full">
          <mask height="16" id="mask0_62_5790" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5790)">
            <path d={svgPaths.p196cc580} fill="var(--fill-0, #2F3E6D)" id="open_in_full" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons4() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsOpenInFull2 />
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[20px] text-ellipsis whitespace-nowrap">Important Dates</p>
      <Buttons4 />
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative text-ellipsis whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#2f3e6d] text-[19px] w-full">Submission of Question by members</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#6e7ca8] text-[14px] w-full">24 Feb, 2023</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#efeff2] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <Frame31 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative text-ellipsis whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#2f3e6d] text-[19px] w-full">Select Committee Recommendations</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#6e7ca8] text-[14px] w-full">24 Feb, 2023</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#efeff2] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <Frame33 />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative text-ellipsis whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#2f3e6d] text-[19px] w-full">Draft Bill Submission</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[#6e7ca8] text-[14px] w-full">24 Feb, 2023</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#efeff2] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative text-ellipsis whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#e3e6f0] text-[19px] w-full">Submission of Question by members</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[14px] text-white w-full">24 Feb, 2023</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#efeff2] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <Frame35 />
        </div>
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative text-ellipsis whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#e3e6f0] text-[19px] w-full">Submission of Question by members</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[14px] text-white w-full">24 Feb, 2023</p>
    </div>
  );
}

function Frame17() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#efeff2] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start justify-center min-h-px min-w-px not-italic relative text-ellipsis whitespace-nowrap">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[normal] overflow-hidden relative shrink-0 text-[#e3e6f0] text-[19px] w-full">Submission of Question by members</p>
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] overflow-hidden relative shrink-0 text-[14px] text-white w-full">24 Feb, 2023</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="relative rounded-[24px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#efeff2] border-solid inset-0 pointer-events-none rounded-[24px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center p-[24px] relative w-full">
          <Frame37 />
        </div>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start justify-center relative shrink-0 w-full">
      <Frame13 />
      <Frame14 />
      <Frame15 />
      <Frame16 />
      <Frame17 />
      <Frame18 />
    </div>
  );
}

function About4() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-white h-full min-h-px min-w-px relative rounded-[24px] to-[rgba(255,255,255,0)]" data-name="About">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <Frame41 />
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function IconsOpenInFull3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / open_in_full">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / open_in_full">
          <mask height="16" id="mask0_62_5790" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_62_5790)">
            <path d={svgPaths.p196cc580} fill="var(--fill-0, #2F3E6D)" id="open_in_full" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons5() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsOpenInFull3 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[28px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[20px] text-ellipsis whitespace-nowrap">Leaderboard</p>
      <Buttons5 />
    </div>
  );
}

function Avatar() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[15px] relative shrink-0" data-name="Avatar">
      <div className="mb-[-15px] relative shrink-0 size-[64px]">
        <img alt="" className="block max-w-none size-full" height="64" src={imgEllipse2} width="64" />
      </div>
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative" data-name="Profile">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#2f3e6d] text-[20px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`Jason Surya `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6e7ca8] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`SBOA School & Junior college`}</p>
      </div>
    </div>
  );
}

function ProfileBlock() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Profile block">
      <Avatar />
      <Profile />
      <div className="relative shrink-0 size-[40px]" data-name="medal 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMedal1} />
      </div>
    </div>
  );
}

function Avatar1() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[15px] relative shrink-0" data-name="Avatar">
      <div className="mb-[-15px] relative shrink-0 size-[64px]">
        <img alt="" className="block max-w-none size-full" height="64" src={imgEllipse7} width="64" />
      </div>
    </div>
  );
}

function Profile1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative" data-name="Profile">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#2f3e6d] text-[20px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Joseph vijay</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6e7ca8] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">JD London bridge higher secondary school</p>
      </div>
    </div>
  );
}

function ProfileBlock1() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Profile block">
      <Avatar1 />
      <Profile1 />
      <div className="relative shrink-0 size-[40px]" data-name="medal (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMedal11} />
      </div>
    </div>
  );
}

function Avatar2() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[15px] relative shrink-0" data-name="Avatar">
      <div className="mb-[-15px] relative shrink-0 size-[64px]">
        <img alt="" className="block max-w-none size-full" height="64" src={imgEllipse8} width="64" />
      </div>
    </div>
  );
}

function Profile2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative" data-name="Profile">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#2f3e6d] text-[20px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`Michael cena `}</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6e7ca8] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`SBOA School & Junior college`}</p>
      </div>
    </div>
  );
}

function ProfileBlock2() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Profile block">
      <Avatar2 />
      <Profile2 />
      <div className="relative shrink-0 size-[40px]" data-name="medal (2) 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMedal21} />
      </div>
    </div>
  );
}

function Avatar3() {
  return (
    <div className="content-stretch flex flex-col items-center pb-[15px] relative shrink-0" data-name="Avatar">
      <div className="mb-[-15px] relative shrink-0 size-[64px]">
        <img alt="" className="block max-w-none size-full" height="64" src={imgEllipse9} width="64" />
      </div>
    </div>
  );
}

function Profile3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative" data-name="Profile">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center relative shrink-0 text-[#2f3e6d] text-[20px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">Kane</p>
      </div>
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center relative shrink-0 text-[#6e7ca8] text-[14px] w-full">
        <p className="leading-[normal] whitespace-pre-wrap">{`SBOA School & Junior college`}</p>
      </div>
    </div>
  );
}

function ProfileBlock3() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-full" data-name="Profile block">
      <Avatar3 />
      <Profile3 />
    </div>
  );
}

function EligibleEvents2() {
  return (
    <div className="bg-gradient-to-b flex-[1_0_0] from-white h-full min-h-px min-w-px relative rounded-[24px] to-[rgba(255,255,255,0)]" data-name="Eligible Events">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative size-full">
          <Frame42 />
          <ProfileBlock />
          <ProfileBlock1 />
          <ProfileBlock2 />
          <ProfileBlock3 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[24px] items-start min-h-px min-w-px relative w-full">
      <About4 />
      <EligibleEvents2 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[868px] items-start left-[calc(8.33%+68px)] top-[116px] w-[1064px]">
      <Frame40 />
      <Frame39 />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[64px]">
        <img alt="" className="block max-w-none size-full" height="64" src={imgEllipse10} width="64" />
      </div>
      <div className="flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[20px] whitespace-nowrap">
        <p className="leading-[normal]">{`Jason Surya `}</p>
      </div>
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center px-[12px] relative shrink-0">
      <Frame46 />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">{`SBOA School & Junior college`}</p>
      </div>
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
            <path d={svgPaths.p20e10000} fill="var(--fill-0, #2F3E6D)" id="edit" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LIconText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="L Icon + Text">
      <IconsEdit />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">Edit Profile</p>
    </div>
  );
}

function PopoverAtom() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name=".Popover Atom">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <LIconText />
        </div>
      </div>
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
            <path d={svgPaths.p732ddc0} fill="var(--fill-0, #3C4C7C)" id="logout" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function LIconText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center min-h-px min-w-px relative" data-name="L Icon + Text">
      <IconsLogout />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[16px] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">Log out</p>
    </div>
  );
}

function PopoverAtom1() {
  return (
    <div className="relative rounded-[8px] shrink-0 w-full" data-name=".Popover Atom">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[12px] py-[8px] relative w-full">
          <LIconText1 />
        </div>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <PopoverAtom />
      <PopoverAtom1 />
    </div>
  );
}

function Profile4() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[24px] items-start left-[calc(66.67%+15px)] px-[12px] py-[24px] rounded-[16px] shadow-[0px_12px_24px_0px_rgba(47,62,109,0.1)] top-[79px]" data-name="Profile">
      <Frame47 />
      <Frame48 />
    </div>
  );
}

export default function LandingPage() {
  return (
    <div className="bg-[#f8f9fb] overflow-clip relative rounded-[12px] size-full" data-name="Landing page">
      <TopSideBar />
      <NavBar />
      <Frame43 />
      <div className="absolute bg-size-[254.99999523162842px_254.99999523162842px] bg-top-left h-[1024px] left-0 mix-blend-overlay opacity-40 top-0 w-[1440px]" data-name="Noise" style={{ backgroundImage: `url('${imgNoise}')` }} />
      <Profile4 />
    </div>
  );
}