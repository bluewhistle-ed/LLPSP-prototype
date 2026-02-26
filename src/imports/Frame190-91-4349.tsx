import svgPaths from "./svg-g8033uvh8u";
import imgEllipse3 from "figma:asset/4a8f8e72f5fe25465071d4ab7006bf2930bf6fc5.png";

function Comment() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start not-italic relative shrink-0 w-full" data-name="Comment">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] overflow-hidden relative shrink-0 text-[#2f3e6d] text-[12px] text-ellipsis">Feedback</p>
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full relative shrink-0 text-[#3c4c7c] text-[14px] w-[min-content] whitespace-pre-wrap">{`This question can be paraphrased differently focusing on the inflicting actions performed by our Alliance, `}</p>
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

function Tag() {
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
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName />
      <Tag />
    </div>
  );
}

function IconsReply() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / reply">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / reply">
          <mask height="16" id="mask0_91_4353" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_91_4353)">
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
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <AvatarTag />
      <Back />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[8px] size-full">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Comment />
      <Frame1 />
    </div>
  );
}