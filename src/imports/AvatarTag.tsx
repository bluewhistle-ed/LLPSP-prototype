import svgPaths from "./svg-txfaz6sn9l";
import imgEllipse3 from "figma:asset/072958e13f38abd0a42ad7f8edae5e3aa7e2ff2b.png";

function AvatarName() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
      <div className="relative shrink-0 size-[16px]">
        <img alt="" className="block max-w-none size-full" height="16" src={imgEllipse3} width="16" />
      </div>
      <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px]">Sheilah T. Sayasane</p>
      </div>
    </div>
  );
}

function IconsEmojiFlags() {
  return (
    <div className="relative shrink-0 size-[12px]" data-name="Icons / emoji_flags">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icons / emoji_flags">
          <mask height="12" id="mask0_94_9672" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="12" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="12" id="Bounding box" width="12" />
          </mask>
          <g mask="url(#mask0_94_9672)">
            <path d={svgPaths.p34b4d070} fill="var(--fill-0, #1850C5)" id="emoji_flags" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Tag() {
  return (
    <div className="bg-[#e7f2fe] content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative rounded-[4px] shrink-0" data-name="Tag">
      <div aria-hidden="true" className="absolute border-[#3c7ce8] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <IconsEmojiFlags />
      <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#1850c5] text-[12px] text-ellipsis">President</p>
    </div>
  );
}

export default function AvatarTag() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex gap-[8px] items-center px-[8px] py-[4px] relative rounded-[8px] size-full" data-name="Avatar Tag">
      <div aria-hidden="true" className="absolute border-[#e3e6f0] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <AvatarName />
      <Tag />
    </div>
  );
}