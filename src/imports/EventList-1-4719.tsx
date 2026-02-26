import svgPaths from "./svg-sdlchuieym";
import imgUnsplash0HjWobhGhJs1 from "figma:asset/570dfe1e78ba73cce493c4895be93ab0d92bdaaa.png";
import { imgUnsplash0HjWobhGhJs } from "./svg-0wofa";

function Avatar() {
  return (
    <div className="relative rounded-[12px] shrink-0 size-[52px]" data-name="Avatar">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-0 mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_0px] mask-size-[52px_52px]" data-name="unsplash:0HJWobhGhJs" style={{ maskImage: `url('${imgUnsplash0HjWobhGhJs}')` }}>
          <img alt="" className="block max-w-none size-full" height="52" src={imgUnsplash0HjWobhGhJs1} width="52" />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#f1f2f8] border-[0.65px] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#e8ffeb] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#42a22a] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#42a22a] text-[12px] text-ellipsis">Active</p>
    </div>
  );
}

function NameTag() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[8px] items-center min-h-px min-w-px relative" data-name="Name + Tag">
      <div className="flex flex-[1_0_0] flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px not-italic overflow-hidden relative text-[#2f3e6d] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">Oliver High School</p>
      </div>
      <Tag />
    </div>
  );
}

function IconsMoreVert() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_1_4765" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_4765)">
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

function Name() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Name">
      <NameTag />
      <Buttons />
    </div>
  );
}

function Mail() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="mail">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="mail">
          <mask height="16" id="mask0_1_4769" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_4769)">
            <path d={svgPaths.p1a898b00} fill="var(--fill-0, #6E7CA8)" id="mail_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center max-w-[180px] min-h-px min-w-px relative" data-name="icon + Text">
      <Mail />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[14px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">lorri73@gmail.com</p>
    </div>
  );
}

function Call() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="call">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="call">
          <mask height="16" id="mask0_1_4755" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_1_4755)">
            <path d={svgPaths.p1e3ca700} fill="var(--fill-0, #6E7CA8)" id="call_2" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function IconText1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[4px] items-center max-w-[130px] min-h-px min-w-px relative" data-name="icon + Text">
      <Call />
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[14px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[12px] text-ellipsis whitespace-nowrap">(904) 335-2403</p>
    </div>
  );
}

function SubText() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0 w-full" data-name="Sub Text">
      <IconText />
      <IconText1 />
    </div>
  );
}

function TitleLocation() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative" data-name="Title + Location">
      <Name />
      <SubText />
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

function Content() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative" data-name="Content">
      <Avatar />
      <EventDetails />
    </div>
  );
}

export default function EventList() {
  return (
    <div className="bg-white content-stretch flex gap-[16px] items-center p-[24px] relative rounded-[16px] size-full" data-name="Event list">
      <div aria-hidden="true" className="absolute border border-[#f1f2f8] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <Content />
    </div>
  );
}