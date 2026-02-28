import svgPaths from "./svg-0xkqyva2mx";
import { imgButtons } from "./svg-ehuiv";

export default function Buttons() {
  return (
    <button className="bg-white cursor-pointer relative rounded-[6px] size-full" data-name="Buttons">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip p-[8px] relative size-full">
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#2f3e6d] text-[12px] text-left whitespace-nowrap">
            <p className="leading-[14px]">Assign Question</p>
          </div>
          <div className="relative shrink-0 size-[16px]" data-name="Icons / expand_more">
            <div className="absolute inset-[33.23%_24.99%_35.94%_25.01%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-4px_-5.317px] mask-size-[16px_16px]" data-name="expand_more" style={{ maskImage: `url('${imgButtons}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 4.93333">
                <path d={svgPaths.p214eb100} fill="var(--fill-0, #2F3E6D)" id="expand_more" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[#2f3e6d] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[6px]" />
    </button>
  );
}