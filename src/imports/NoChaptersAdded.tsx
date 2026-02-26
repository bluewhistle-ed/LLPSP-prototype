import svgPaths from "./svg-0xunaepwpg";

function Tag() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">Unpublished</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#2f3e6d] text-[16px] text-ellipsis whitespace-nowrap">
        <p className="leading-[20px] overflow-hidden">{`Draft a Bill `}</p>
      </div>
      <Tag />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <Frame1 />
    </div>
  );
}

function Buttons() {
  return (
    <div className="bg-white h-[32px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] whitespace-nowrap">
          <p className="leading-[14px]">{`Discard & Close`}</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Buttons1() {
  return (
    <div className="bg-[#2766da] content-stretch flex gap-[4px] h-[32px] items-center justify-center opacity-40 overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-white whitespace-nowrap">
        <p className="leading-[14px]">Save Bill</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Header">
      <Frame />
      <Buttons />
      <Buttons1 />
    </div>
  );
}

function Body() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[16px] items-start left-0 px-[24px] py-[16px] right-0 top-0" data-name="Body">
      <Header />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
      <p className="flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[32px] min-h-px min-w-px not-italic relative text-[#2f3e6d] text-[24px] whitespace-pre-wrap">THE RIGHTS OF LGBTQ+ COMMUNITY (JOB REFORMS) BILL, 2019</p>
    </div>
  );
}

function IconsAddCircle() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_231_4462" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_231_4462)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons2() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsAddCircle />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Add Chapter</p>
      </div>
    </div>
  );
}

function IconsChatBubble() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / chat_bubble">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / chat_bubble">
          <mask height="16" id="mask0_231_4517" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_231_4517)">
            <path d={svgPaths.p29178780} fill="var(--fill-0, #2F3E6D)" id="chat_bubble" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons3() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsChatBubble />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Comment</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0">
      <Buttons3 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <Buttons2 />
      <Frame2 />
    </div>
  );
}

function IconsVisibility() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / visibility">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / visibility">
          <mask height="16" id="mask0_231_4498" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_231_4498)">
            <path d={svgPaths.p3acea900} fill="var(--fill-0, #2F3E6D)" id="visibility" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons4() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsVisibility />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Preview Bill</p>
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <Frame8 />
      <Buttons4 />
    </div>
  );
}

function Actions() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Actions">
      <Frame7 />
    </div>
  );
}

function ToolBar() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start justify-center relative shrink-0 w-full" data-name="Tool bar">
      <div className="bg-[#e3e6f0] h-px shrink-0 w-full" data-name="Divider" />
      <Actions />
      <div className="bg-[#e3e6f0] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

function Header1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Header">
      <Frame5 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#3c4c7c] text-[14px] w-full whitespace-pre-wrap">to provide for upliftment of the LGBTQ+ Community by formulating various policies for ensuring employment opportunities by the State and for matters connected therewith and incidental thereto.</p>
      <ToolBar />
    </div>
  );
}

function Title() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Title">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Bill Chapters</p>
      </div>
    </div>
  );
}

function ArrowRight() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_231_4597)" id="arrow_right">
          <g id="Vector" />
          <path d={svgPaths.p20ea8b80} fill="var(--fill-0, #98A2B3)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_231_4597">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Caret() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Caret">
      <ArrowRight />
    </div>
  );
}

function IconsDragIndicator() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / drag_indicator">
          <mask height="16" id="mask0_231_4494" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_231_4494)">
            <path d={svgPaths.pd02e680} fill="var(--fill-0, #6E7CA8)" id="drag_indicator" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Icon">
      <IconsDragIndicator />
    </div>
  );
}

function LeadingIcons() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Leading icons">
      <Caret />
      <Icon />
    </div>
  );
}

function TextWrapper() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[4px] relative shrink-0 w-full" data-name="Text Wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">PRELIMINARY</p>
    </div>
  );
}

function TextZone() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[5px]" data-name="Text Zone">
      <TextWrapper />
    </div>
  );
}

function Tag1() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">Chapter I</p>
    </div>
  );
}

function Level1() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Level">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <LeadingIcons />
          <TextZone />
          <Tag1 />
        </div>
      </div>
    </div>
  );
}

function Level() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Level">
      <Level1 />
    </div>
  );
}

function ArrowRight1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_231_4597)" id="arrow_right">
          <g id="Vector" />
          <path d={svgPaths.p20ea8b80} fill="var(--fill-0, #98A2B3)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_231_4597">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Caret1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Caret">
      <ArrowRight1 />
    </div>
  );
}

function IconsDragIndicator1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / drag_indicator">
          <mask height="16" id="mask0_231_4494" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_231_4494)">
            <path d={svgPaths.pd02e680} fill="var(--fill-0, #6E7CA8)" id="drag_indicator" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon1() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Icon">
      <IconsDragIndicator1 />
    </div>
  );
}

function LeadingIcons1() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Leading icons">
      <Caret1 />
      <Icon1 />
    </div>
  );
}

function TextWrapper1() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[4px] relative shrink-0 w-full" data-name="Text Wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">RECOGNITION</p>
    </div>
  );
}

function TextZone1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[5px]" data-name="Text Zone">
      <TextWrapper1 />
    </div>
  );
}

function Tag2() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">Chapter II</p>
    </div>
  );
}

function Level3() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Level">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <LeadingIcons1 />
          <TextZone1 />
          <Tag2 />
        </div>
      </div>
    </div>
  );
}

function Level2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Level">
      <Level3 />
    </div>
  );
}

function ArrowRight2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_231_4597)" id="arrow_right">
          <g id="Vector" />
          <path d={svgPaths.p20ea8b80} fill="var(--fill-0, #98A2B3)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_231_4597">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Caret2() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Caret">
      <ArrowRight2 />
    </div>
  );
}

function IconsDragIndicator2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / drag_indicator">
          <mask height="16" id="mask0_231_4494" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_231_4494)">
            <path d={svgPaths.pd02e680} fill="var(--fill-0, #6E7CA8)" id="drag_indicator" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon2() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Icon">
      <IconsDragIndicator2 />
    </div>
  );
}

function LeadingIcons2() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Leading icons">
      <Caret2 />
      <Icon2 />
    </div>
  );
}

function TextWrapper2() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[4px] relative shrink-0 w-full" data-name="Text Wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">DISCRIMINATION</p>
    </div>
  );
}

function TextZone2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[5px]" data-name="Text Zone">
      <TextWrapper2 />
    </div>
  );
}

function Tag3() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">Chapter III</p>
    </div>
  );
}

function Level5() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Level">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <LeadingIcons2 />
          <TextZone2 />
          <Tag3 />
        </div>
      </div>
    </div>
  );
}

function Level4() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Level">
      <Level5 />
    </div>
  );
}

function ArrowRight3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_231_4597)" id="arrow_right">
          <g id="Vector" />
          <path d={svgPaths.p20ea8b80} fill="var(--fill-0, #98A2B3)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_231_4597">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Caret3() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Caret">
      <ArrowRight3 />
    </div>
  );
}

function IconsDragIndicator3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / drag_indicator">
          <mask height="16" id="mask0_231_4494" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_231_4494)">
            <path d={svgPaths.pd02e680} fill="var(--fill-0, #6E7CA8)" id="drag_indicator" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Icon">
      <IconsDragIndicator3 />
    </div>
  );
}

function LeadingIcons3() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Leading icons">
      <Caret3 />
      <Icon3 />
    </div>
  );
}

function TextWrapper3() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[4px] relative shrink-0 w-full" data-name="Text Wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">EMPLOYMENT AND OPPORTUNITIES</p>
    </div>
  );
}

function TextZone3() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[5px]" data-name="Text Zone">
      <TextWrapper3 />
    </div>
  );
}

function Tag4() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">Chapter IV</p>
    </div>
  );
}

function Level7() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Level">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <LeadingIcons3 />
          <TextZone3 />
          <Tag4 />
        </div>
      </div>
    </div>
  );
}

function Level6() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Level">
      <Level7 />
    </div>
  );
}

function ArrowRight4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_231_4597)" id="arrow_right">
          <g id="Vector" />
          <path d={svgPaths.p20ea8b80} fill="var(--fill-0, #98A2B3)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_231_4597">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Caret4() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Caret">
      <ArrowRight4 />
    </div>
  );
}

function IconsDragIndicator4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / drag_indicator">
          <mask height="16" id="mask0_231_4494" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_231_4494)">
            <path d={svgPaths.pd02e680} fill="var(--fill-0, #6E7CA8)" id="drag_indicator" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Icon">
      <IconsDragIndicator4 />
    </div>
  );
}

function LeadingIcons4() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Leading icons">
      <Caret4 />
      <Icon4 />
    </div>
  );
}

function TextWrapper4() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[4px] relative shrink-0 w-full" data-name="Text Wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">SEXUAL HARASSMENT AT WORKPLACE</p>
    </div>
  );
}

function TextZone4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[5px]" data-name="Text Zone">
      <TextWrapper4 />
    </div>
  );
}

function Tag5() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">Chapter V</p>
    </div>
  );
}

function Level9() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Level">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <LeadingIcons4 />
          <TextZone4 />
          <Tag5 />
        </div>
      </div>
    </div>
  );
}

function Level8() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Level">
      <Level9 />
    </div>
  );
}

function ArrowRight5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow_right">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_231_4597)" id="arrow_right">
          <g id="Vector" />
          <path d={svgPaths.p20ea8b80} fill="var(--fill-0, #98A2B3)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_231_4597">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Caret5() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Caret">
      <ArrowRight5 />
    </div>
  );
}

function IconsDragIndicator5() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / drag_indicator">
          <mask height="16" id="mask0_231_4494" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_231_4494)">
            <path d={svgPaths.pd02e680} fill="var(--fill-0, #6E7CA8)" id="drag_indicator" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon5() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Icon">
      <IconsDragIndicator5 />
    </div>
  );
}

function LeadingIcons5() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Leading icons">
      <Caret5 />
      <Icon5 />
    </div>
  );
}

function TextWrapper5() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[4px] relative shrink-0 w-full" data-name="Text Wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">PROVISIONS RELATING TO WELFARE</p>
    </div>
  );
}

function TextZone5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[5px]" data-name="Text Zone">
      <TextWrapper5 />
    </div>
  );
}

function Tag6() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">Chapter VII</p>
    </div>
  );
}

function Level11() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Level">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <LeadingIcons5 />
          <TextZone5 />
          <Tag6 />
        </div>
      </div>
    </div>
  );
}

function Level10() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Level">
      <Level11 />
    </div>
  );
}

function ArrowDropDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="arrow_drop_down">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_231_4528)" id="arrow_drop_down">
          <g id="Vector" />
          <path d={svgPaths.p349f2b80} fill="var(--fill-0, #98A2B3)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_231_4528">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Caret6() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Caret">
      <ArrowDropDown />
    </div>
  );
}

function IconsDragIndicator6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / drag_indicator">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / drag_indicator">
          <mask height="16" id="mask0_231_4494" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_231_4494)">
            <path d={svgPaths.pd02e680} fill="var(--fill-0, #6E7CA8)" id="drag_indicator" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-name="Icon">
      <IconsDragIndicator6 />
    </div>
  );
}

function LeadingIcons6() {
  return (
    <div className="content-stretch flex gap-[4px] items-start relative shrink-0" data-name="Leading icons">
      <Caret6 />
      <Icon6 />
    </div>
  );
}

function TextWrapper6() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[4px] relative shrink-0 w-full" data-name="Text Wrapper">
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis w-full whitespace-nowrap">Chapter Name</p>
    </div>
  );
}

function TextZone6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-center min-h-px min-w-px overflow-clip relative rounded-[5px]" data-name="Text Zone">
      <TextWrapper6 />
    </div>
  );
}

function Tag7() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">Chapter VIII</p>
    </div>
  );
}

function Level13() {
  return (
    <div className="bg-[#e7f2fe] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px] self-stretch" data-name="Level">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center px-[8px] py-[4px] relative size-full">
          <LeadingIcons6 />
          <TextZone6 />
          <Tag7 />
        </div>
      </div>
    </div>
  );
}

function Level12() {
  return (
    <div className="bg-[#e7f2fe] content-stretch flex items-start relative rounded-[4px] shrink-0 w-full" data-name="Level">
      <Level13 />
    </div>
  );
}

function BillChapter() {
  return (
    <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full" data-name="Bill Chapter">
      <Level />
      <Level2 />
      <Level4 />
      <Level6 />
      <Level8 />
      <Level10 />
      <Level12 />
    </div>
  );
}

function BillChapters() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-full items-start relative shrink-0 w-[336px]" data-name="Bill Chapters">
      <Title />
      <BillChapter />
    </div>
  );
}

function Tag8() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">CHAPTER VII</p>
    </div>
  );
}

function Title2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative" data-name="Title">
      <Tag8 />
      <p className="font-['Inter:Medium','Noto_Sans:Medium',sans-serif] font-medium leading-[20px] min-w-full not-italic relative shrink-0 text-[#2f3e6d] text-[16px] w-[min-content] whitespace-pre-wrap">{`AUTHORITIES `}</p>
    </div>
  );
}

function Title1() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full" data-name="Title">
      <Title2 />
    </div>
  );
}

function Tag9() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">Clause 20</p>
    </div>
  );
}

function ClauseAboutTheClause() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Clause + About the Clause">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] not-italic relative shrink-0 text-[#6e7ca8] text-[14px] w-full whitespace-pre-wrap">Enter Clause Description</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative">
      <Tag9 />
      <ClauseAboutTheClause />
    </div>
  );
}

function IconsExpandLess() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / expand_less">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / expand_less">
          <mask height="16" id="mask0_231_4446" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_231_4446)">
            <path d={svgPaths.p4a9e300} fill="var(--fill-0, #6E7CA8)" id="expand_less" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons5() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center opacity-40 overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsExpandLess />
    </div>
  );
}

function IconsExpandMore() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / expand_more">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / expand_more">
          <mask height="16" id="mask0_231_4474" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="0.0015626" />
          </mask>
          <g mask="url(#mask0_231_4474)">
            <path d={svgPaths.p271bc980} fill="var(--fill-0, #6E7CA8)" id="expand_more" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons6() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center opacity-40 overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsExpandMore />
    </div>
  );
}

function IconsDelete() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / delete">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / delete">
          <mask height="16" id="mask0_231_4442" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_231_4442)">
            <path d={svgPaths.p29a6c900} fill="var(--fill-0, #6E7CA8)" id="delete" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons7() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsDelete />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex gap-[12px] items-start relative shrink-0">
      <Buttons5 />
      <Buttons6 />
      <Buttons7 />
    </div>
  );
}

function ClauseTitleDescription() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full" data-name="Clause Title + Description">
      <Frame4 />
      <Frame6 />
    </div>
  );
}

function IconsAddCircle1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_231_4462" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_231_4462)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons8() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsAddCircle1 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Sub Clause</p>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Buttons8 />
    </div>
  );
}

function Subpoints() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Subpoints">
      <Frame3 />
    </div>
  );
}

function IconsAddCircle2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_231_4462" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_231_4462)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons9() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f1f2f8] content-stretch flex gap-[4px] items-center justify-center left-1/2 overflow-clip px-[12px] py-[4px] rounded-[8px] top-[calc(50%-3.5px)]" data-name="Buttons">
      <IconsAddCircle2 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Clause</p>
      </div>
    </div>
  );
}

function Clause1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] items-center justify-center left-0 right-0 top-0" data-name="Clause">
      <Buttons9 />
    </div>
  );
}

function IconsAddCircle3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / add_circle">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / add_circle">
          <mask height="16" id="mask0_231_4462" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_231_4462)">
            <path d={svgPaths.pa72bc00} fill="var(--fill-0, #2F3E6D)" id="add_circle" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons10() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#f1f2f8] content-stretch flex gap-[4px] items-center justify-center left-1/2 overflow-clip px-[12px] py-[4px] rounded-[8px] top-[calc(50%-3.5px)]" data-name="Buttons">
      <IconsAddCircle3 />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Clause</p>
      </div>
    </div>
  );
}

function Clause2() {
  return (
    <div className="absolute bottom-0 content-stretch flex flex-col gap-[16px] items-center justify-center left-0 right-0" data-name="Clause">
      <Buttons10 />
    </div>
  );
}

function Clause() {
  return (
    <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full" data-name="Clause">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[16px] items-start p-[16px] relative w-full">
        <ClauseTitleDescription />
        <Subpoints />
        <Clause1 />
        <Clause2 />
      </div>
    </div>
  );
}

function Chapter() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="Chapter">
      <Title1 />
      <Clause />
    </div>
  );
}

function Chapter1() {
  return (
    <div className="bg-white content-stretch flex flex-[1_0_0] flex-col gap-[16px] h-full items-start min-h-px min-w-px overflow-x-clip overflow-y-auto py-[16px] relative" data-name="Chapter 2">
      <Chapter />
      <div className="bg-white h-[240px] shrink-0 w-full" data-name="Spacer" />
    </div>
  );
}

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[16px] items-start min-h-px min-w-px py-[16px] relative w-full" data-name="Content">
      <BillChapters />
      <Chapter1 />
    </div>
  );
}

function Body1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[936px] items-start left-[24px] overflow-clip top-[88px] w-[1392px]" data-name="Body">
      <Header1 />
      <Content />
      <div className="bg-[#e3e6f0] h-px shrink-0 w-full" data-name="Divider" />
    </div>
  );
}

export default function NoChaptersAdded() {
  return (
    <div className="bg-white overflow-clip relative rounded-[12px] size-full" data-name="No Chapters Added">
      <Body />
      <Body1 />
    </div>
  );
}