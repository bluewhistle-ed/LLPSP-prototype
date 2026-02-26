import svgPaths from "./svg-m62qn7xwsa";

function IconsMinistries() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / Ministries">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / Ministries">
          <mask height="16" id="mask0_85_1841" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_85_1841)">
            <path d={svgPaths.pb5bda80} fill="var(--fill-0, #2F3E6D)" id="account_balance" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <IconsMinistries />
      <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
        <p className="leading-[16px] overflow-hidden">{`Ministry of Commerce & Industry`}</p>
      </div>
    </div>
  );
}

function IconsMoreVert() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / more_vert">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / more_vert">
          <mask height="16" id="mask0_85_1833" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="16" x="0" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" />
          </mask>
          <g mask="url(#mask0_85_1833)">
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

export default function Frame1() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full">
      <Frame />
      <Buttons />
    </div>
  );
}