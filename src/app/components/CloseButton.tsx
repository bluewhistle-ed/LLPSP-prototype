import svgPaths from "../../imports/svg-dv2wdhz28y";

function IconsCircleClose() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / circle_close">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / circle_close">
          <mask height="16" id="mask0_close_shared" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="#D9D9D9" height="16" width="16" x="-0.000782013" />
          </mask>
          <g mask="url(#mask0_close_shared)">
            <path d={svgPaths.p1dd38d00} fill="#2F3E6D" />
          </g>
        </g>
      </svg>
    </div>
  );
}

interface CloseButtonProps {
  onClick: () => void;
}

export function CloseButton({ onClick }: CloseButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white h-[32px] relative rounded-[6px] shrink-0 cursor-pointer hover:bg-gray-50"
    >
      <div className="content-stretch flex gap-[4px] h-full items-center justify-center overflow-clip p-[8px] relative rounded-[inherit]">
        <IconsCircleClose />
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </button>
  );
}
