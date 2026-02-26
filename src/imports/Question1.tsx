import svgPaths from "./svg-l4efvdw4l8";
import imgEllipse3 from "figma:asset/4a8f8e72f5fe25465071d4ab7006bf2930bf6fc5.png";
import imgEllipse4 from "figma:asset/ba2f16d42d47f4ee59f03debf98e6bdc2a4d8653.png";

function Frame4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Notice 1</p>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Student Council Election Nominations Open</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative">
      <Frame4 />
      <div className="flex flex-row items-center self-stretch">
        <div className="flex h-0 items-center justify-center relative self-center shrink-0 w-0" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="-rotate-90 flex-none h-full">
            <div className="h-full relative w-[16px]">
              <div className="absolute inset-[-1px_0_0_0]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 1">
                  <line id="Line 2" stroke="var(--stroke-0, #E3E6F0)" x2="16" y1="0.5" y2="0.5" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function IconsMoreVert() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_101_3662" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_101_3662)">
            <path d={svgPaths.pc41f800} fill="var(--fill-0, #2F3E6D)" id="more_vert" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Buttons() {
  return (
    <div className="content-stretch flex gap-[4px] h-[32px] items-center justify-center overflow-clip p-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
      <IconsMoreVert />
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between min-h-[32px] relative shrink-0 w-full">
      <Frame5 />
      <Buttons />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#98a3c5] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis">Waiting for approval</p>
    </div>
  );
}

function Lhs() {
  return (
    <div className="content-center flex flex-[1_0_0] flex-wrap gap-[8px] items-center min-h-px min-w-px relative" data-name="LHS">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">
        <p className="leading-[14px] overflow-hidden">{`12/03/2024  6:40 PM`}</p>
      </div>
      <div className="relative shrink-0 size-[4px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
          <circle cx="2" cy="2" fill="var(--fill-0, #C8CEE2)" id="Ellipse 14" r="2" />
        </svg>
      </div>
      <Tag />
    </div>
  );
}

function QuestionTo() {
  return (
    <div className="content-center flex flex-wrap gap-y-[8px] items-center justify-between relative shrink-0 w-full" data-name="Question to">
      <Lhs />
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

function AvatarTag() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border border-[#c8cee2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName />
      <Tag1 />
    </div>
  );
}

function Comment() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Comment">
      <AvatarTag />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#3c4c7c] text-[14px] w-[min-content] whitespace-pre-wrap">{`This question can be paraphrased differently focusing on the inflicting actions performed by our Alliance, `}</p>
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
        <p className="leading-[16px]">You</p>
      </div>
    </div>
  );
}

function AvatarTag1() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border border-[#c8cee2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName1 />
    </div>
  );
}

function Comment1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Comment">
      <AvatarTag1 />
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#3c4c7c] text-[14px] w-[min-content] whitespace-pre-wrap">Will work on the update</p>
    </div>
  );
}

function IconsReply() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / reply">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / reply">
          <mask height="16" id="mask0_101_3584" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_101_3584)">
            <path d={svgPaths.p20ea8380} fill="var(--fill-0, #1850C5)" id="reply" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Back() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Back">
      <IconsReply />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1850c5] text-[14px] whitespace-nowrap">
        <p className="leading-[16px]">Reply</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full">
      <Back />
    </div>
  );
}

function Frame() {
  return (
    <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[12px] items-start p-[12px] relative w-full">
        <Comment />
        <div className="h-0 relative shrink-0 w-full">
          <div className="absolute inset-[-1px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 776 1">
              <line id="Line 2" stroke="var(--stroke-0, #E3E6F0)" x2="776" y1="0.5" y2="0.5" />
            </svg>
          </div>
        </div>
        <Comment1 />
        <Frame1 />
      </div>
    </div>
  );
}

function Question() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="Question">
      <div className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#3c4c7c] text-[14px] w-[min-content] whitespace-pre-wrap">
        <p className="mb-0">{`We're excited to announce our upcoming Parliamentary Debate Competition, scheduled for [date]. This event aims to foster critical thinking, public speaking skills, and an understanding of parliamentary procedures among our members.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">{`We invite all interested members to participate in this exciting competition. Whether you're a seasoned debater or new to the art of parliamentary debate, this is an excellent opportunity to showcase your skills and engage in lively discussions on pressing issues.`}</p>
        <p className="mb-0">&nbsp;</p>
        <p className="mb-0">To register your participation or learn more about the competition format, please [provide registration details or contact information].</p>
        <p className="mb-0">&nbsp;</p>
        <p>{`Let's come together to make this event a resounding success!`}</p>
      </div>
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#2f3e6d] text-[12px] text-ellipsis">Feedback</p>
      <Frame />
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-full" data-name="About">
      <Frame3 />
      <QuestionTo />
      <Question />
    </div>
  );
}

export default function Question1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start p-[24px] relative rounded-[12px] size-full" data-name="Question 1">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <About />
    </div>
  );
}