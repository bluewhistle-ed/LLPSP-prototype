import svgPaths from "./svg-c4gte4vz9l";
import { imgReply } from "./svg-5so8q";
import imgEllipse3 from "figma:asset/48c1f6d57e6b3d550e7689e8ec11a711af48d0f0.png";
import imgEllipse4 from "figma:asset/3ffb5fa40cce87c04b63aa1f88e0f2ff5887dcf7.png";

function AvatarTag({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f8f9fb] h-[26px] relative rounded-[8px] shrink-0">
      <div aria-hidden="true" className="absolute border border-[#c8cee2] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] h-full items-center px-[8px] py-[4px] relative">{children}</div>
      </div>
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#f8f9fb] content-stretch flex flex-col gap-[12px] items-start p-[12px] relative rounded-[8px] size-full">
      <div aria-hidden="true" className="absolute border border-[#e3e6f0] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Comment">
        <AvatarTag>
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="absolute block max-w-none size-full" height="16" src={imgEllipse3} width="16" />
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[16px]">Regina</p>
            </div>
          </div>
          <div className="bg-[#f5f0ff] relative rounded-[4px] shrink-0" data-name="Tag">
            <div aria-hidden="true" className="absolute border-[#6820ff] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[4px]" />
            <div className="flex flex-row items-center size-full">
              <div className="content-stretch flex gap-[4px] items-center px-[4px] py-[2px] relative">
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[14px] not-italic overflow-hidden relative shrink-0 text-[#6820ff] text-[12px] text-ellipsis">Mentor</p>
              </div>
            </div>
          </div>
        </AvatarTag>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#3c4c7c] text-[14px] w-[min-content] whitespace-pre-wrap">{`This question can be paraphrased differently focusing on the inflicting actions performed by our Alliance, `}</p>
      </div>
      <div className="h-0 relative shrink-0 w-full">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 776 1">
            <line id="Line 2" stroke="var(--stroke-0, #E3E6F0)" x2="776" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="content-stretch flex flex-col gap-[4px] items-start relative shrink-0 w-full" data-name="Comment">
        <AvatarTag>
          <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Name">
            <div className="relative shrink-0 size-[16px]">
              <img alt="" className="absolute block max-w-none size-full" height="16" src={imgEllipse4} width="16" />
            </div>
            <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[#3c4c7c] text-[14px] text-ellipsis whitespace-nowrap">
              <p className="leading-[16px]">You</p>
            </div>
          </div>
        </AvatarTag>
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[20px] min-w-full not-italic relative shrink-0 text-[#3c4c7c] text-[14px] w-[min-content] whitespace-pre-wrap">Will work on the update</p>
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full">
        <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Back">
          <div className="relative shrink-0 size-[16px]" data-name="Icons / reply">
            <div className="absolute inset-[20.83%_12.5%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-2px_-3.333px] mask-size-[16px_16px]" data-name="reply" style={{ maskImage: `url('${imgReply}')` }}>
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 9.33333">
                <path d={svgPaths.p34c6200} fill="var(--fill-0, #1850C5)" id="reply" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1850c5] text-[14px] whitespace-nowrap">
            <p className="leading-[16px]">Reply</p>
          </div>
        </div>
      </div>
    </div>
  );
}