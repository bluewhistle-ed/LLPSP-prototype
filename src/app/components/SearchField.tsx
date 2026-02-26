import svgPaths from "../../imports/svg-hkh4t53hh4";

function IconsSearch() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icons / search">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icons / search">
          <mask height="16" id="mask0_1_1113" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="17" x="-1" y="0">
            <rect fill="var(--fill-0, #D9D9D9)" height="16" id="Bounding box" width="16" x="-0.00156212" />
          </mask>
          <g mask="url(#mask0_1_1113)">
            <path d={svgPaths.p23b30e80} fill="var(--fill-0, #6E7CA8)" id="search" />
          </g>
        </g>
      </svg>
    </div>
  );
}

function Content({ placeholder, value, onChange }: { placeholder: string; value: string; onChange: (value: string) => void }) {
  return (
    <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full" data-name="Content">
      <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative w-full">
          <IconsSearch />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="flex-1 bg-transparent leading-[20px] not-italic text-[#2f3e6d] text-[14px] outline-none placeholder:text-[#6e7ca8]"
          />
        </div>
      </div>
    </div>
  );
}

export function SearchField({ 
  placeholder = "Search Events", 
  value = "", 
  onChange = () => {} 
}: { 
  placeholder?: string; 
  value?: string; 
  onChange?: (value: string) => void 
}) {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 w-[320px]" data-name="Input field / Text field">
      <Content placeholder={placeholder} value={value} onChange={onChange} />
    </div>
  );
}