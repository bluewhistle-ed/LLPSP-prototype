import svgPaths from "./svg-lzgrbkvhzi";
import { imgVisibilityOff } from "./svg-1zkle";

function InputFieldTextField({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start relative w-full">{children}</div>
    </div>
  );
}

function Content({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="bg-[#f8f9fb] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border-[#c8cee2] border-[0.5px] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[4px] items-center p-[12px] relative w-full">{children}</div>
      </div>
    </div>
  );
}
type EnterTextProps = {
  text: string;
};

function EnterText({ text }: EnterTextProps) {
  return (
    <div className="content-stretch flex flex-[1_0_0] h-[20px] items-center min-h-px min-w-px relative">
      <p className="flex-[1_0_0] font-['Inter:Medium',sans-serif] font-medium leading-[20px] min-h-px min-w-px not-italic overflow-hidden relative text-[#6e7ca8] text-[14px] text-ellipsis whitespace-nowrap">{text}</p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="bg-white relative size-full" data-name="Login page">
      <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[40px] items-start left-[828px] rounded-[12px] top-1/2 w-[532px]" data-name="login panel">
        <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
          <div className="content-stretch flex flex-col gap-[2px] items-start not-italic relative shrink-0 w-full">
            <p className="font-['Inter:Bold',sans-serif] font-bold leading-[48px] relative shrink-0 text-[#041a5e] text-[32px] w-full">Welcome to Let’s Legislative!</p>
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4b5b8a] text-[16px] w-full">{`Let's make democracy accessible, intuitive, and engaging together. Your seat at the legislative table awaits`}</p>
          </div>
        </div>
        <div className="content-stretch flex flex-col gap-[40px] items-start relative rounded-[12px] shrink-0 w-full" data-name="form">
          <div className="content-stretch flex flex-col gap-[32px] items-start relative shrink-0 w-full">
            <InputFieldTextField>
              <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Email</p>
              <Content>
                <EnterText text="Enter Email" />
              </Content>
            </InputFieldTextField>
            <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
              <InputFieldTextField>
                <p className="font-['Inter:Medium',sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[#2f3e6d] text-[14px] w-full">Password</p>
                <Content>
                  <EnterText text="Enter Password" />
                  <div className="relative shrink-0 size-[16px]" data-name="Icons / visibility_off">
                    <div className="absolute inset-[11.67%_4.18%_5.83%_4.15%] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[-0.666px_-1.867px] mask-size-[16px_16px]" data-name="visibility_off" style={{ maskImage: `url('${imgVisibilityOff}')` }}>
                      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 13.2">
                        <path d={svgPaths.p3852f000} fill="var(--fill-0, #6E7CA8)" id="visibility_off" />
                      </svg>
                    </div>
                  </div>
                </Content>
              </InputFieldTextField>
              <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-[236.5px]">
                  <div className="relative shrink-0 size-[20px]" data-name="check_box_outline_blank">
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
                      <g id="check_box_outline_blank">
                        <mask height="20" id="mask0_596_253" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }} width="20" x="0" y="0">
                          <rect fill="var(--fill-0, #D9D9D9)" height="20" id="Bounding box" width="20" />
                        </mask>
                        <g mask="url(#mask0_596_253)">
                          <path d={svgPaths.p2f7bc240} fill="var(--fill-0, #1850C5)" id="check_box_outline_blank_2" />
                        </g>
                      </g>
                    </svg>
                  </div>
                  <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#0a1433] text-[14px] whitespace-nowrap">
                    <p className="leading-[16px]">Remember me</p>
                  </div>
                </div>
                <div className="flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#1850c5] text-[14px] whitespace-nowrap">
                  <p className="leading-[16px]">Forget Password?</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#2766da] relative rounded-[8px] shrink-0 w-full">
            <div className="flex flex-row items-center justify-center size-full">
              <div className="content-stretch flex items-center justify-center px-[24px] py-[12px] relative w-full">
                <div className="flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[20px] text-white whitespace-nowrap">
                  <p className="leading-[24px]">Login</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[8px] items-center justify-center leading-[0] not-italic relative shrink-0 text-[14px] w-full whitespace-nowrap">
          <div className="flex flex-col justify-center relative shrink-0 text-[#3c4c7c]">
            <p className="leading-[16px]">Don’t have an account?</p>
          </div>
          <div className="flex flex-col justify-center relative shrink-0 text-[#1850c5]">
            <p className="leading-[16px]">Register</p>
          </div>
        </div>
      </div>
      <div className="absolute contents left-[80px] top-[80px]">
        <div className="absolute bg-[#e7f2fe] h-[864px] left-[80px] opacity-60 rounded-[20px] top-[80px] w-[668px]" />
        <div className="absolute contents inset-[31.64%_54.21%_0_11.71%]" data-name="character/selfie">
          <div className="absolute inset-[31.64%_54.21%_0_11.71%]" data-name="Ink">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 490.781 700">
              <g id="Ink">
                <path clipRule="evenodd" d={svgPaths.p1bacf180} fill="var(--fill-0, #B9D8FC)" fillRule="evenodd" id="ink-shape" />
                <path clipRule="evenodd" d={svgPaths.p6d07500} fill="var(--fill-0, #B9D8FC)" fillRule="evenodd" id="ink-shape_2" />
                <path clipRule="evenodd" d={svgPaths.p3bb26400} fill="var(--fill-0, #B9D8FC)" fillRule="evenodd" id="ink-shape_3" />
                <path clipRule="evenodd" d={svgPaths.p7208100} fill="var(--fill-0, #B9D8FC)" fillRule="evenodd" id="ink-shape_4" />
                <path clipRule="evenodd" d={svgPaths.p3d08ff00} fill="var(--fill-0, #B9D8FC)" fillRule="evenodd" id="ink-shape_5" />
                <path clipRule="evenodd" d={svgPaths.p12ed79f0} fill="var(--fill-0, #B9D8FC)" fillRule="evenodd" id="ink-shape_6" />
                <path clipRule="evenodd" d={svgPaths.p33582f00} fill="var(--fill-0, #B9D8FC)" fillRule="evenodd" id="ink-shape_7" />
                <path clipRule="evenodd" d={svgPaths.p3fe9bb00} fill="var(--fill-0, #B9D8FC)" fillRule="evenodd" id="ink-shape_8" />
                <path clipRule="evenodd" d={svgPaths.p3ba2ea80} fill="var(--fill-0, #B9D8FC)" fillRule="evenodd" id="ink-shape_9" />
                <path clipRule="evenodd" d={svgPaths.p24937a00} fill="var(--fill-0, #B9D8FC)" fillRule="evenodd" id="ink-shape_10" />
                <path clipRule="evenodd" d={svgPaths.p1a2cd280} fill="var(--fill-0, #B9D8FC)" fillRule="evenodd" id="ink-shape_11" />
                <path clipRule="evenodd" d={svgPaths.p30c4d000} fill="var(--fill-0, #B9D8FC)" fillRule="evenodd" id="ink-shape_12" />
                <path clipRule="evenodd" d={svgPaths.p3d127900} fill="var(--fill-0, #B9D8FC)" fillRule="evenodd" id="ink-shape_13" />
              </g>
            </svg>
          </div>
        </div>
        <div className="-translate-y-1/2 absolute content-stretch flex flex-col gap-[24px] items-start left-[144px] top-[calc(50%-303px)] w-[540px]">
          <div className="h-[64.001px] relative shrink-0 w-[158.713px]" data-name="Logo">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 158.713 64.0002">
              <g id="Logo">
                <path clipRule="evenodd" d={svgPaths.p2cc40800} fill="var(--fill-0, #1850C5)" fillRule="evenodd" id="Subtract" />
                <g id="letâs">
                  <path d={svgPaths.pd5fc000} fill="var(--fill-0, #1850C5)" id="Vector" />
                  <path d={svgPaths.pbf57c00} fill="var(--fill-0, #1850C5)" id="Vector_2" />
                  <path d={svgPaths.p1f07f100} fill="var(--fill-0, #1850C5)" id="Vector_3" />
                  <path d={svgPaths.p27e9c900} fill="var(--fill-0, #1850C5)" id="Vector_4" />
                  <path d={svgPaths.p20575a00} fill="var(--fill-0, #1850C5)" id="Vector_5" />
                </g>
                <g id="Legislate">
                  <path d={svgPaths.p34766000} fill="var(--fill-0, #1850C5)" id="Vector_6" />
                  <path d={svgPaths.p7cb800} fill="var(--fill-0, #1850C5)" id="Vector_7" />
                  <path d={svgPaths.p1cacc300} fill="var(--fill-0, #1850C5)" id="Vector_8" />
                  <path d={svgPaths.p6488d00} fill="var(--fill-0, #1850C5)" id="Vector_9" />
                  <path d={svgPaths.p348fe80} fill="var(--fill-0, #1850C5)" id="Vector_10" />
                  <path d={svgPaths.p25ad600} fill="var(--fill-0, #1850C5)" id="Vector_11" />
                  <path d={svgPaths.pcca4a00} fill="var(--fill-0, #1850C5)" id="Vector_12" />
                  <path d={svgPaths.pdd50280} fill="var(--fill-0, #1850C5)" id="Vector_13" />
                  <path d={svgPaths.p3aa9ea00} fill="var(--fill-0, #1850C5)" id="Vector_14" />
                </g>
              </g>
            </svg>
          </div>
          <p className="font-['Inter:Bold',sans-serif] font-bold leading-[42px] not-italic relative shrink-0 text-[#072a85] text-[28px] whitespace-nowrap">Join discussions, shape democracy.</p>
        </div>
      </div>
    </div>
  );
}