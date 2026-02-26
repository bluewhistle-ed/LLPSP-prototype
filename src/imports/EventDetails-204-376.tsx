import svgPaths from "./svg-bki5yjcwvy";
import imgEllipse3 from "figma:asset/7e0d7ab070d39f3cfc9f86f2768f90e8f6c155d2.png";
import imgEllipse4 from "figma:asset/e754befde01d23dc9b0ee961c7db7f0d45c70f90.png";
import imgEllipse5 from "figma:asset/40f6d59c4c64e58f45df1ad8a583decfd06e5817.png";
import imgEllipse6 from "figma:asset/25865008497d19d3e4a672e5cc60b40969e02c3f.png";

function Frame3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis">Discussion Speakers</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-center flex flex-wrap gap-y-[16px] items-center justify-between relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function About() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full" data-name="About">
      <Frame1 />
    </div>
  );
}

function IconsAvTimer() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / av_timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / av_timer">
          <mask height="16" id="mask0_204_383" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_204_383)">
            <path d={svgPaths.p3e7ba00} fill="var(--fill-0, #6E7CA8)" id="av_timer" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconsAvTimer />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis">Allocated Time : 30mins</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis">Day 1</p>
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-px" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#e3e6f0] h-px w-[24px]" />
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function IconsEdit() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / edit">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / edit">
          <mask height="16" id="mask0_204_387" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_204_387)">
            <path d={svgPaths.p20e10000} fill="var(--fill-0, #1850C5)" id="edit" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Back() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Back">
      <IconsEdit />
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1850c5] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Edit</p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame6 />
      <Back />
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
        <p className="leading-[16px]">Aleta H. Starcher (5min)</p>
      </div>
    </div>
  );
}

function AvatarTag() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName />
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
        <p className="leading-[16px]">Mai G. Sollom (10min)</p>
      </div>
    </div>
  );
}

function AvatarTag1() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName1 />
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
        <p className="leading-[16px]">Latricia W. Silletti (5min)</p>
      </div>
    </div>
  );
}

function AvatarTag2() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName2 />
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
        <p className="leading-[16px]">Adrianne P. Tillis (10min)</p>
      </div>
    </div>
  );
}

function AvatarTag3() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] h-[26px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName3 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-start flex flex-wrap gap-[12px] items-start relative shrink-0 w-full">
      <AvatarTag />
      <AvatarTag1 />
      <AvatarTag2 />
      <AvatarTag3 />
    </div>
  );
}

function IconsAvTimer1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / av_timer">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / av_timer">
          <mask height="16" id="mask0_204_383" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_204_383)">
            <path d={svgPaths.p3e7ba00} fill="var(--fill-0, #6E7CA8)" id="av_timer" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <IconsAvTimer1 />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis">Allocated Time : 30mins</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative">
      <p className="font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[16px] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis">Day 2</p>
      <div className="flex h-[24px] items-center justify-center relative shrink-0 w-px" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "0" } as React.CSSProperties}>
        <div className="-rotate-90 flex-none">
          <div className="bg-[#e3e6f0] h-px w-[24px]" />
        </div>
      </div>
      <Frame4 />
    </div>
  );
}

function Back1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Back">
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1850c5] text-[12px] whitespace-nowrap">
        <p className="leading-[14px]">Assign Member</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full">
      <Frame9 />
      <Back1 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Frame5 />
      <Frame />
      <div className="bg-[#e3e6f0] h-px shrink-0 w-full" />
      <Frame8 />
    </div>
  );
}

export default function EventDetails() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[12px] size-full" data-name="Event Details">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <About />
      <Frame7 />
    </div>
  );
}