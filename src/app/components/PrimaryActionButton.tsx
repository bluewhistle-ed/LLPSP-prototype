import svgPaths from "../../imports/svg-hkh4t53hh4";

interface PrimaryActionButtonProps {
  label: string;
  onClick?: () => void;
}

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

export function PrimaryActionButton({ label, onClick }: { label: string; onClick?: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#2766da] content-stretch flex gap-[4px] h-[44px] items-center justify-center p-[12px] relative rounded-[8px] shrink-0 cursor-pointer hover:bg-[#1e54b7] transition-colors"
    >
      <IconsAddCircle />
      <div className="flex flex-col justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">
        <p className="leading-[16px]">{label}</p>
      </div>
    </button>
  );
}